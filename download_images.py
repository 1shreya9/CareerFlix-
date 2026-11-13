#!/usr/bin/env python3
"""
CareerFlix - make all images work WITHOUT internet
==================================================

WHY
  CareerFlix loads its pictures from the internet:
    - photos      from images.pexels.com
    - avatars     from api.dicebear.com
  Your browser only remembers (caches) the pictures you already opened
  while online, so without internet you see a few images and miss the rest.

WHAT THIS SCRIPT DOES  (run it ONCE, while you are connected to the internet)
  1. Finds every Pexels / DiceBear picture link used in the project files
  2. Downloads each picture into a new folder called  images/
  3. Changes the links in the code so they point to  images/...  instead
     (a backup of every changed file is saved in  _online_backup/ )

HOW TO RUN
  1. Unzip the project and open a terminal / command prompt in that folder
  2. Run:      python download_images.py
     (on some computers:  python3 download_images.py  or  py download_images.py)
  3. Wait until it says "DONE". Now open index.html - no internet needed.

OTHER COMMANDS
  python download_images.py --check     only count the pictures, download nothing
  python download_images.py --restore   go back to the online links (uses the backup)

Only Python 3 is needed (no extra installs). If some downloads fail, the
site keeps using the online link for those pictures - just run the script
again later and it will only download what is missing.
"""

import hashlib
import re
import shutil
import sys
import time
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

ROOT = Path(__file__).resolve().parent
IMAGES_DIR = ROOT / "images"
BACKUP_DIR = ROOT / "_online_backup"
FILE_TYPES = (".html", ".js", ".css")

# A link ends at a quote, a bracket, a space or a backslash
PEXELS_RE = re.compile(r"https://images\.pexels\.com/photos/(\d+)/[^\s\"'`)<>\\]*")
DICEBEAR_RE = re.compile(r"https://api\.dicebear\.com/[^\s\"'`)<>\\]*")

HEADERS = {"User-Agent": "Mozilla/5.0 (CareerFlix offline image downloader)"}


# ---------------------------------------------------------------
# Finding the links
# ---------------------------------------------------------------
def project_files():
    """Every .html / .js / .css file in this folder (not this script, not backups)."""
    files = []
    for path in sorted(ROOT.iterdir()):
        if path.is_file() and path.suffix in FILE_TYPES:
            files.append(path)
    return files


def read_text(path):
    with open(path, encoding="utf-8", newline="") as f:
        return f.read()


def write_text(path, text):
    with open(path, "w", encoding="utf-8", newline="") as f:
        f.write(text)


def local_name_for_dicebear(url):
    """images/avatars/<seed>-<color>-<hash>.svg  (the hash keeps names unique)."""
    query = urllib.parse.parse_qs(urllib.parse.urlparse(url).query)
    seed = re.sub(r"[^A-Za-z0-9_-]", "", query.get("seed", ["avatar"])[0]) or "avatar"
    color = re.sub(r"[^A-Za-z0-9]", "", query.get("backgroundColor", [""])[0])
    short = hashlib.md5(url.encode("utf-8")).hexdigest()[:6]
    return "images/avatars/%s-%s-%s.svg" % (seed, color, short)


def collect_links():
    """Returns { original_link: local_path } for every picture link in the project."""
    mapping = {}
    for path in project_files():
        text = read_text(path)
        for m in PEXELS_RE.finditer(text):
            # one big picture per Pexels photo id is enough for every size
            mapping[m.group(0)] = "images/pexels/%s.jpeg" % m.group(1)
        for m in DICEBEAR_RE.finditer(text):
            mapping[m.group(0)] = local_name_for_dicebear(m.group(0))
    return mapping


def download_url_for(link, local_path):
    """The address we actually download from (Pexels photos: one 1600px version)."""
    if local_path.startswith("images/pexels/"):
        photo_id = re.search(r"photos/(\d+)/", link).group(1)
        return ("https://images.pexels.com/photos/%s/pexels-photo-%s.jpeg"
                "?auto=compress&cs=tinysrgb&w=1600" % (photo_id, photo_id))
    return link


# ---------------------------------------------------------------
# Downloading
# ---------------------------------------------------------------
def fetch_bytes(url):
    """Downloads one file (3 tries). Returns the bytes or raises an error."""
    last_error = None
    for attempt in range(3):
        try:
            request = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(request, timeout=30) as response:
                return response.read()
        except Exception as error:      # network problem, 404, timeout ...
            last_error = error
            time.sleep(1.5 * (attempt + 1))
    raise last_error


def looks_valid(local_path, data):
    """Refuse error pages saved by mistake: check the file really is a picture."""
    if len(data) < 200:
        return False
    if local_path.endswith(".svg"):
        return b"<svg" in data[:2000]
    return data[:3] == b"\xff\xd8\xff" or data[:8] == b"\x89PNG\r\n\x1a\n" or data[:4] == b"RIFF"


def download_one(job):
    link, local_path = job
    target = ROOT / local_path
    if target.exists() and target.stat().st_size > 0:
        return local_path, True, "already there"
    try:
        data = fetch_bytes(download_url_for(link, local_path))
        if not looks_valid(local_path, data):
            return local_path, False, "not a valid picture"
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_bytes(data)
        return local_path, True, "downloaded"
    except Exception as error:
        return local_path, False, str(error)[:80]


# ---------------------------------------------------------------
# Rewriting the code
# ---------------------------------------------------------------
def rewrite_files(mapping, ok_paths):
    """Replaces online links by local paths (only for pictures that downloaded fine)."""
    changed_files = 0
    replaced = 0
    for path in project_files():
        text = read_text(path)
        new_text = text

        def swap(match):
            nonlocal replaced
            link = match.group(0)
            local = mapping.get(link)
            if local and local in ok_paths:
                replaced += 1
                return local
            return link

        new_text = PEXELS_RE.sub(swap, new_text)
        new_text = DICEBEAR_RE.sub(swap, new_text)

        if new_text != text:
            BACKUP_DIR.mkdir(exist_ok=True)
            backup = BACKUP_DIR / path.name
            if not backup.exists():                # keep the ORIGINAL version only
                shutil.copy2(path, backup)
            write_text(path, new_text)
            changed_files += 1
    return changed_files, replaced


def restore():
    if not BACKUP_DIR.exists():
        print("Nothing to restore - there is no _online_backup folder.")
        return
    count = 0
    for backup in BACKUP_DIR.iterdir():
        if backup.is_file():
            shutil.copy2(backup, ROOT / backup.name)
            count += 1
    print("Restored %d file(s) to the online links. (The images/ folder was kept.)" % count)


# ---------------------------------------------------------------
# Main
# ---------------------------------------------------------------
def main(argv):
    if "--restore" in argv:
        restore()
        return 0

    mapping = collect_links()
    if not mapping:
        print("No online picture links found - nothing to do (already offline?).")
        return 0

    unique_jobs = {}
    for link, local in mapping.items():
        unique_jobs.setdefault(local, (link, local))
    print("Found %d picture links -> %d files to download (%d photos + %d avatars)."
          % (len(mapping), len(unique_jobs),
             len({v for v in mapping.values() if v.startswith('images/pexels/')}),
             len({v for v in mapping.values() if v.startswith('images/avatars/')})))

    if "--check" in argv:
        return 0

    print("Downloading... (this can take a minute or two)\n")
    ok_paths, failed = set(), []
    done = 0
    with ThreadPoolExecutor(max_workers=8) as pool:
        for local, ok, note in pool.map(download_one, unique_jobs.values()):
            done += 1
            if ok:
                ok_paths.add(local)
            else:
                failed.append((local, note))
            if done % 25 == 0 or done == len(unique_jobs):
                print("  %d / %d   (failed so far: %d)" % (done, len(unique_jobs), len(failed)))

    changed_files, replaced = rewrite_files(mapping, ok_paths)

    size_mb = sum(f.stat().st_size for f in IMAGES_DIR.rglob("*") if f.is_file()) / (1024 * 1024) if IMAGES_DIR.exists() else 0
    print("\nUpdated %d file(s), replaced %d links. images/ folder is now %.1f MB." % (changed_files, replaced, size_mb))

    if failed:
        print("\n%d picture(s) could NOT be downloaded (they still use the online link):" % len(failed))
        for local, note in failed[:15]:
            print("   - %s  (%s)" % (local, note))
        print("Check your internet and run this script again - it only downloads what is missing.")
        return 1

    print("\nDONE - all pictures are saved in the images/ folder. CareerFlix now works without internet.")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
