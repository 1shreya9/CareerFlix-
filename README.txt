CAREERFLIX - CODE EXPLANATION (FOR VIVA)
==========================================

LATEST UPDATE - DASHBOARD CLEAN-UP + SETTINGS PAGE
--------------------------------------------------------------------------
1. DASHBOARD (dashboard.html):
   - Trending Now now shows only 5 stories (ranks 1-5).
   - Latest Releases now shows only 3 stories and sits directly below
     Trending Now instead of at the bottom of the page.
   - The FAQ question "What career stories are available?" (the one
     about how many stories there are) was removed.

2. SETTINGS PAGE (settings.html - NEW PAGE):
   - The top-right account dropdown (Dashboard, My List, Careerpedia,
     Fun Facts) now has a "Settings" button above "Logout".
   - Manage Account: change username, change Gmail (same @gmail.com
     regex as signup), change password (needs current password + the
     same 8 chars / capital / number / special-character rule).
   - Preferences: default story language (Hinglish / Hindi / English).
     story.html reads it with getPreferredLanguage() and pre-selects it.
   - Clear History & Data: clear "Continue Exploring", empty My List,
     reset story progress (completed stories, choices, skills,
     achievements), or clear everything.
   - Delete Account: needs the password, removes the account and all
     saved data, then returns to the login page.
   - All the logic lives in script.js under "SETTINGS HELPERS" - each
     function returns { success, message } and settings.html only shows
     that message. Everything is still LocalStorage only (no server).


LATEST UPDATE - CAREERPEDIA (career glossary) + 4 NEW STORIES + SECURITY
--------------------------------------------------------------------------
1. CAREERPEDIA (careerpedia.html + careerpedia.js - NEW PAGE):
   - A searchable glossary of 28 career-related terms across 5
     categories (Education, Jobs, Skills, Applications, Business),
     linked in the navbar on every page.
   - Each term is one object in careerpedia.js: { term, icon,
     category, definition, example, tip, list }. renderTerms() in
     careerpedia.html filters this array by BOTH the search box text
     AND the selected category chip at the same time, and rebuilds
     the card grid every time either one changes.
   - Good line for viva: "Filtering happens entirely in the browser -
     no server calls - by looping through one JavaScript array with
     .filter() every time the user types or clicks a category."

2. 4 MORE STORIES ADDED: Healing Hands (Nurse), Fast Break
   (Basketball Player), Firewall (Cybersecurity Analyst), and The
   Investigation (Detective) - bringing the total to 17 stories, 85
   episodes, 170 choices. Fully wired into Dashboard, My List,
   Profile, and Fun Facts (each new role also has 10 verified facts).

3. STRONGER SIGNUP VALIDATION (index.html):
   - Email must match a Gmail-only pattern (regex):
     /^[^\s@]+@gmail\.com$/
   - Password must be 8+ characters with at least 1 capital letter,
     1 number, and 1 special character (regex):
     /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/
   - Both password fields (Login and Sign Up) now have a clickable
     👁 eye icon that toggles the input's type between "password"
     (hidden) and "text" (visible).

4. FOOTER TEXT updated from "BCA Minor Project" to "Interactive
   Career Discovery Platform" across all pages.

5. Cricketer's fun facts: swapped one generic fact for a verified
   Virat Kohli achievement (broke Sachin Tendulkar's ODI centuries
   record in November 2023).


LATEST UPDATE - DEDICATED FUN FACTS PAGE + LOGIN CSS REBUILD
-------------------------------------------------------------------
1. FUN FACTS MOVED OUT OF THE MODAL (funfacts.html - NEW PAGE):
   - Fixed a real problem: the Fun Facts note inside the story
     preview modal had no way to scroll, so longer fact lists got
     cut off with no way to read the rest.
   - Fun Facts now has its OWN page, linked in the navbar right next
     to "My Profile" on every page.
   - The page shows a grid of 13 "postcards" (one per career role),
     each with a real photo and the role name. Clicking one opens a
     popup with that role's 10 facts in a PROPERLY SCROLLABLE area
     (.facts-scroll-area has overflow-y: auto with a visible custom
     scrollbar) - so nothing gets cut off anymore, however long the
     list is.
   - The story preview modal (on Dashboard/My List) no longer shows
     Fun Facts at all - just Start Exploring and Add to My List, to
     keep it simple.

2. LOGIN TAB CSS REBUILT FROM SCRATCH: previous attempts to fix the
   stray line/box below the Login/Sign Up toggle didn't fully work.
   This time, the wrapping container (.auth-tabs) has ZERO border,
   box-shadow, or outline of any kind - each button now rounds its
   OWN corners individually with a small gap between them, so there
   is nothing left that could visually produce an extra outline.
   If this specific artifact still appears in a screenshot after
   this fix, it's worth checking with your browser's zoom at 100%
   (screen photos taken at an angle or with camera zoom can create
   moiré patterns that look like lines but aren't actually part of
   the page).


LATEST UPDATE - ROLE LABELS + FUN FACTS + BUG FIX (3 missing stories)
--------------------------------------------------------------------------
1. ROLE MADE EXPLICIT: Every story now has a "role" field (e.g.
   "Doctor", "Football Player", "Police Officer"). The story intro
   screen, dashboard preview popup, and My List page all now say
   "You play as a [Role]" clearly, instead of only describing the
   situation indirectly.

2. FUN FACTS (funFacts.js - NEW FILE): 10 REAL, verified facts about
   each of the 13 career roles (130 facts total), shown as a
   sticky-note styled popup inside the story preview. Click the new
   "💡 Fun Facts" button in any story's preview to see them.
   - Facts are looked up by ROLE NAME, e.g.
     careerFunFacts["Doctor"] returns 10 facts about being a doctor.
   - A couple of specific record-based facts (Shoaib Akhtar's
     161.3 km/h delivery, the 3.69-second fastest football goal)
     were verified against Guinness World Records / ESPNcricinfo
     before being included, since sports records get disputed a lot.

3. BUG FIX: the Police, Government, and Business stories had been
   fully written in storyData.js but were never actually added to
   the Dashboard, My List, or Profile pages - so they were
   impossible to find or play! All three now have poster rows,
   preview popups, and work correctly everywhere.


LATEST UPDATE - LOGIN FIX + LAYOUT + STORY INTRO + EPISODE TRANSITIONS
---------------------------------------------------------------------------
1. LOGIN TAB VISUAL BUG FIXED: the Login/Sign Up toggle had a
   box-shadow that was rendering as a stray outline on some
   browsers. Replaced with a plain 1px border - clean and predictable.

2. DASHBOARD GENRE ORDER: IT now appears first, then Sports, then
   Medical (was Medical, Sports, IT before).

3. FIXED "TOO MUCH EMPTY SPACE ON THE SIDES": all episode content
   (scene text, dialogue box, choices) is now wrapped in one
   semi-transparent "content panel" (.story-content-panel) that's
   820px wide with padding and rounded corners - it reads as one
   designed card sitting on the background photo, instead of plain
   text floating in empty space.

4. STORY INTRO SCREEN (answers "who am I / what's happening"):
   Right after picking your name/gender/language, a new screen
   shows the story's title and a one-line intro ("You are <name>.
   <story summary>...") before Episode 1 starts. This works for
   ALL 13 stories automatically - it reuses each story's existing
   "summary" field, so no story content needed rewriting.

5. EPISODE TRANSITION SCREEN: after finishing an episode, a short
   full-screen "Episode X Completed! Starting Episode Y..." message
   appears for about 1.8 seconds before the next episode loads.
   This also works for every story automatically - it's a generic
   engine feature (showEpisodeTransition() in story.html), not
   something added per-story.

NOTE ON SCOPE: Making every individual episode's DIALOGUE longer
(more back-and-forth lines) and adding narrator lines BETWEEN
dialogue lines for all 13 stories would mean rewriting all 65
existing episodes - a very large content job. What's built instead
are structural, story-wide improvements (the intro screen and
episode transitions above) that make every story feel less "straight
to the point" without needing to rewrite existing dialogue content.
Happy to go back and lengthen specific stories' dialogue if there's
time before submission - just say which ones to prioritize.


LATEST UPDATE - MULTI-LANGUAGE SUPPORT (Hinglish / Hindi / English)
------------------------------------------------------------------------
1. On the character setup screen, a new "Read this story in:" section
   lets the user pick Hinglish, Hindi (हिंदी), or English before
   starting any story.

2. HOW IT WORKS (translations.js - NEW FILE):
   - storyData.js (the original file) was NOT changed - it still
     holds every story's original Hinglish text exactly as before.
   - translations.js is a SEPARATE file holding Hindi and English
     versions of the same lines, kept in the exact same order
     (episode 1's scene, episode 1's dialogue 1, 2, 3..., episode
     1's choices, etc.) so they can be matched up by position.
   - getLocalizedText() in story.html checks: if Hinglish is
     selected, just use the original text. Otherwise, look up
     translations.js for that story/episode/line. If no translation
     exists yet for that story, it safely falls back to Hinglish -
     nothing breaks.
   - Good line for viva: "I didn't rewrite the story data - I built
     a translation LOOKUP LAYER on top of it, indexed by episode and
     line position, with automatic fallback if a translation is
     missing."

3. CURRENT COVERAGE: Only "Pulse Point" (the doctor story) has full
   Hindi + English translations right now, as a complete working
   demo. All other 12 stories will show in Hinglish even if Hindi
   or English is selected (the app tells the user this with a small
   note on the setup screen). Translating all 13 stories fully is a
   LOT of additional text (over 700 more lines across Hindi and
   English combined) - happy to keep translating more stories if
   there's time before submission.

4. NOTE ON SCOPE: Character/speaker NAMES (like "Dr. Aditi", "Nurse
   Kavita") are NOT translated - they stay in Latin script in every
   language, since names typically aren't translated. Only the
   actual spoken dialogue, scene descriptions, choices, and advice
   text change per language.


FILES IN THIS FOLDER
---------------------
1. index.html      -> Login / Sign Up page
2. dashboard.html   -> Netflix-style home page (navbar, hero
                        carousel, poster rows, search, story
                        preview modal, account menu)
3. mylist.html        -> "My List" (wishlist) page - saved stories
4. funfacts.html        -> Fun Facts page - 13 career postcards,
                             each opening a scrollable facts popup
4. story.html           -> ONE reusable page that plays ANY story
                             (multi-character conversations + choices)
5. profile.html           -> Skills meter + Career Recommendation +
                               Achievements + Completed Stories
6. storyData.js             -> Story content (dialogues, choices with
                                 skill values, backgrounds, avatars,
                                 summaries) - ORIGINAL Hinglish text
7. translations.js            -> Hindi + English translations, looked
                                   up by episode/line position
                                   (currently covers "Pulse Point")
8. careerData.js                 -> Career recommendation rules
9. script.js                        -> Reusable functions (login/signup,
                                         skills, completed stories,
                                         wishlist, achievements)
10. style.css                          -> All the styling

NOTE: Real internet photos are used (hospital, cricket stadium,
character avatars). You need an active internet connection when
running/demoing this project.


LATEST UPDATE - MORE ACHIEVEMENTS + NAME/GENDER PERSONALIZATION
--------------------------------------------------------------------
1. EXPANDED ACHIEVEMENTS: 5 badges -> 12 badges. New ones are tied
   to completing BOTH stories in a genre (Medical Expert, Sports
   Champion, Legal Eagle, Master Educator), high skill totals
   (Great Communicator, Natural Leader), and completing all 10
   stories (Completionist).

2. NAME + CHARACTER LOOK PERSONALIZATION (story.html)
   - Before Episode 1 of any story, a new "Who are you in this
     story?" screen appears - type a custom name and pick between
     2 avatar looks (Option A / Option B).
   - Every story already had a default character name written into
     its dialogues (e.g. "Kabir" in the paramedic story). Instead
     of rewriting all the dialogue text, personalizeText() just
     replaces every occurrence of that default name with whatever
     name the user typed - including when OTHER characters say
     it in their own lines. This works using JavaScript's
     text.split(oldName).join(newName), which is simpler to explain
     than a full templating system.
   - The chosen avatar image only replaces the "You" character's
     face - detected by checking if a dialogue line's speaker label
     contains "(You)".
   - NOTE ON SCOPE: this personalizes the NAME and AVATAR only. The
     Hindi/Hinglish grammar in the dialogue (word endings that
     technically differ by gender, like "socha" vs "sochi") stays
     as originally written either way - fully correct grammatical
     gender-agreement across every line was out of scope for the
     time available, and isn't necessary for the feature to feel
     personalized and work well.


LATEST UPDATE - RENAMED STORY TITLES (2nd naming pass)
-----------------------------------------------------------
Titles updated again to a new set:
  - White Coat Diaries -> Pulse Point
  - First Response     -> Life on the Line
  - Boundary Dreams     -> The Final Over
  - Kickoff Dreams       -> Final Whistle
  - Debug Mode             -> Code Red
  - Founder Mode             -> Built From Zero
  - The Verdict                -> Truth on Trial
  - Fine Print                   -> Hidden Clause
  - Chalk Talk                     -> The First Bell
  - Campus Diaries                   -> Beyond the Lecture


PREVIOUS UPDATE - LOGIN CLEANUP + ENGLISH STORY TITLES
---------------------------------------------------------
1. Removed "Continue as Guest" - users now must Login or Sign Up.
2. Cleaned up the Login/Sign Up tab styling (better spacing above
   and below, removed a double-border look, no focus outline glitch).
3. Renamed all 10 story titles from Hinglish to short, punchy
   English titles (the story CONTENT/dialogues are still in
   Hinglish - only the titles shown on posters/cards changed):
     - Dr. Aditi Ka Safar   -> White Coat Diaries
     - Paramedic Ki Pukar   -> First Response
     - Cricket Ka Sapna     -> Boundary Dreams
     - Football Ka Junoon   -> Kickoff Dreams
     - Code Ka Junoon       -> Debug Mode
     - Startup Ka Sapna     -> Founder Mode
     - Insaaf Ki Raah       -> The Verdict
     - Corporate Kanoon     -> Fine Print
     - Padhai Ka Safar      -> Chalk Talk
     - College Ki Kaksha    -> Campus Diaries


PREVIOUS UPDATE - HERO CAROUSEL + STORY PREVIEW + WISHLIST
------------------------------------------------------------
1. HERO CAROUSEL (dashboard.html)
   - Top banner now cycles through 5 featured stories (one from
     each genre), with left/right arrow buttons and dots to jump
     directly to a slide. Also auto-advances every 6 seconds
     (setInterval).
   - showSlide(index) swaps the background photo, title, and
     summary text; nextSlide()/prevSlide() just call showSlide()
     with the index changed (and wrap around using the % operator
     so it loops back to the start).

2. STORY PREVIEW MODAL (dashboard.html + mylist.html)
   - Clicking ANY poster card (genre rows, Continue Exploring, hero
     "More Info" button, My List) now opens a popup showing the
     poster image, title, a short summary, a "Start Exploring"
     button, and a "Add to My List" / "In My List" toggle button -
     instead of jumping straight into the story.
   - openStoryModal(storyId) fills in the popup's content;
     closeModal() hides it; clicking the dark background also
     closes it (closeModalIfBackground checks if the click landed
     on the overlay itself, not the box inside it).

3. WISHLIST / "MY LIST" (script.js + mylist.html - NEW PAGE)
   - toggleWishlist(storyId) in script.js adds/removes a story id
     from a LocalStorage array, same pattern as completed stories.
   - mylist.html is a new page (linked in the navbar next to "My
     Profile") that shows every saved story as a poster card. Uses
     the exact same preview modal as the dashboard.

4. STORY SUMMARIES (storyData.js)
   - Every story object now has a one-line "summary" field, used
     by the hero carousel and the preview modal.


PREVIOUS UPDATE - ACHIEVEMENTS / BADGES
----------------------------------------
5 badges added to the Profile page, unlocking based on stats
already being tracked:

- 🏅 First Story Completed - finish any 1 story
- 🎯 Decision Maker - make 20 choices total (lifetime counter,
  incrementChoiceCount() in script.js, called on every choice)
- 💻 Tech Explorer - complete Code Ka Junoon OR Startup Ka Sapna
- 🧠 Critical Thinker - build Problem Solving skill to 15+ points
- 🔥 Career Explorer - complete 5 different stories

HOW IT WORKS: getAchievements() (in script.js) doesn't save
"which badges you have" anywhere - it recalculates fresh every
time from stats we already track (completed stories, skills,
choice count). This is simpler to explain: "the badges aren't
stored directly, they're worked out live from your existing
progress every time the Profile page loads."


PREVIOUS UPDATE - 5 MORE STORIES (1 per genre)
-----------------------------------------------
Added a second story to every genre - 10 stories total now, 50
episodes, 100 choices:

- Medical:  Dr. Aditi Ka Safar  +  Paramedic Ki Pukar (ambulance/EMT)
- Sports:   Cricket Ka Sapna    +  Football Ka Junoon
- IT:       Code Ka Junoon      +  Startup Ka Sapna (founder/investor)
- Law:      Insaaf Ki Raah      +  Corporate Kanoon (contracts/mergers)
- Teaching: Padhai Ka Safar     +  College Ki Kaksha (college professor)

Each new story follows the exact same structure as before: its own
characters, its own real photo backgrounds per episode, and its own
skill point values per choice - so they plug straight into the same
Skills + Career Recommendation engine.


PREVIOUS UPDATE - SKILLS + CAREER RECOMMENDATION ENGINE
--------------------------------------------------------
This is the "killer feature" - the whole point of CareerFlix.

1. LOGIN / SIGN UP (index.html)
   - Two tabs: Login and Sign Up.
   - Sign Up asks for Username, Email, and Password, and saves
     them in LocalStorage under "careerflix_users" (an object
     keyed by username). This is NOT real, secure authentication -
     there's no server or database - but it lets you create an
     "account" and log back in later on the same browser, which is
     the standard, honest way student projects simulate login.
   - Login checks the username/password against what was saved.
   - "Continue as Guest" still works exactly like before.

2. SKILLS SYSTEM (new field in storyData.js + script.js)
   - Every single choice in every story now has a "skills" object,
     e.g. { technical: 3, communication: 0, problemSolving: 2,
     leadership: 0 }. This reflects what kind of thinking that
     choice shows - NOT whether it was "correct".
   - addSkills() in script.js adds these points to a running total
     saved in LocalStorage, which keeps growing across every story
     you play (even across different genres).

3. CAREER RECOMMENDATION ENGINE (careerData.js - NEW FILE)
   - Contains 6 "career archetypes" (Tech Lead, People Leader,
     Analytical Builder, etc.) - one for every possible pairing of
     the top 2 skills out of the 4 skills.
   - getCareerRecommendation(skills) sorts your skill totals from
     highest to lowest, takes the TOP 2, and looks up the matching
     archetype - which includes suitable careers, required skills,
     courses/degrees, entry-level jobs, salary range, and what to
     learn next.

4. PROFILE PAGE (profile.html - NEW FILE)
   - Shows 4 animated skill bars (as a % of your total points).
   - Shows your personalized career recommendation, pulled live
     from careerData.js based on your current skills.
   - Shows every story you've completed as a poster row.
   - Accessible from the dashboard navbar ("My Profile") and from
     the "View My Career Profile" button at the end of any story.


PREVIOUS UPDATE
-----------------
- Added 3 more full stories: IT ("Code Ka Junoon"), Law ("Insaaf Ki
  Raah"), and Teaching ("Padhai Ka Safar") - 5 genres, 25 episodes
  total.
- Changed the bright red accent color to a matte/muted red (#b33939)
  across buttons, active nav link, and character avatar borders.
- Made hover effects smoother: poster cards, buttons, and choice
  buttons now scale up subtly using a smooth easing curve.


HOW TO RUN IT
--------------
1. Open this folder in VS Code.
2. Install the "Live Server" extension (if not already).
3. Right-click index.html -> "Open with Live Server".
4. Login -> Dashboard -> click a genre poster -> play the story.


WHAT'S NEW / UNIQUE IN THIS VERSION
--------------------------------------
1. NETFLIX-STYLE HOME PAGE
   - A navbar with Home link, a Search box, and an Account icon
     with a Logout option.
   - A big hero banner at the top (like Netflix's featured show).
   - Horizontal SCROLLING rows of poster cards for each genre,
     using real photos as posters.
   - A "Continue Exploring" row that automatically appears if the
     user already played a story before (uses LocalStorage to
     remember the last story played).
   - A working SEARCH BOX - typing filters the poster cards live.

2. MULTIPLE CHARACTERS TALKING (not just one narrator line)
   - Each episode has a "dialogues" array with 3-5 lines from
     DIFFERENT characters (mentor, teammate/co-worker, and the
     user's own character) talking to each other.
   - Example in the Medical story: Dr. Aditi, Nurse Kavita, and
     Riya (the user's character) all speak before the choice
     appears - like a real conversation, not narration.

3. CHARACTER REACTIONS (not plain feedback text)
   - After the user picks a choice, instead of a plain feedback
     message, a CHARACTER speaks a reaction line in Hinglish -
     keeping the story feel consistent all the way through.

4. CHANGING BACKGROUNDS WITHIN THE SAME STORY
   - Every single EPISODE (not just the story) has its own
     bgImage. So Episode 1 might be the Emergency Ward, Episode 2
     the Corridor, Episode 4 the Operation Theatre, etc. - the
     background visually changes as the story moves location.


HOW THE CODE WORKS (SIMPLE EXPLANATION)
------------------------------------------

1) LOGIN (index.html)
   - User types name and clicks Login, OR clicks "Continue as Guest".
   - saveUserName() (in script.js) saves the name using
     localStorage.setItem(). LocalStorage keeps data even after
     the browser tab is closed.
   - Page redirects to dashboard.html using window.location.href.

2) DASHBOARD (dashboard.html)
   - getUserName() reads the saved name and shows it in the
     account circle (first letter) and account dropdown.
   - Each poster card has onclick="openStory('doctor')" or
     onclick="openStory('cricketer')" - this redirects to
     story.html?story=doctor (adds the story name to the URL).
   - showContinueExploring() checks getLastPlayed() (also from
     script.js). If a story was played before, it builds and shows
     a poster card for it at the top of the page.
   - filterStories() runs every time you type in the search box
     (oninput event). It loops through every .poster-card element
     using querySelectorAll(), checks if its data-title attribute
     contains the typed text, and shows/hides it using
     card.style.display. This is simple array-like looping and
     string matching (indexOf), nothing complicated.

3) ONE REUSABLE STORY PAGE (story.html + storyData.js)
   - Instead of a separate HTML page for every single story and
     episode, there is ONE story.html page.
   - storyData.js has one JavaScript OBJECT called storiesData
     holding every story's title, poster image, and an ARRAY of
     5 episodes.
   - Each episode has: its own bgImage, a scene description, a
     "dialogues" array (multiple characters talking), a "choices"
     array (2 options, each with its own "reaction" line), and a
     "betterAdvice" line used on the final result screen.
   - getQueryParam("story") reads which story to load from the
     URL, so the SAME page can show different stories just by
     changing which data it loads - this is called dynamic/
     reusable rendering.

4) THE DIALOGUE QUEUE ENGINE (the most important part to explain)
   - A "queue" here is just an array of dialogue lines that get
     shown ONE AT A TIME, using a variable called dialogueIndex to
     track which line we're currently on.
   - playQueue(queueArr, onDoneFn, lastLineLabel) starts the
     process: it stores the array, resets the index to 0, and
     calls showCurrentLine().
   - showCurrentLine() puts the current line's speaker name,
     avatar image, and text onto the screen.
   - advanceDialogue() runs when the user clicks "Next ▶". It
     increases dialogueIndex by 1. If there are more lines, it
     shows the next one. If not, it calls whatever function was
     passed in as onDoneFn (this is called a CALLBACK function -
     a function passed into another function to run later).
   - This SAME engine is reused twice per episode:
       a) First for the multi-character conversation
          (onDoneFn = showChoicesForEpisode)
       b) Then again for just the ONE reaction line after a choice
          (onDoneFn = goToNextEpisode)
     Reusing one engine for both is a good point to mention - it
     means less duplicate code.

5) SHOWING CHOICES - showChoicesForEpisode()
   - Loops through ep.choices using forEach and creates one button
     per choice with document.createElement("button").

6) WHEN USER PICKS A CHOICE - selectChoice()
   - If choice.correct is true -> score = score + 1
   - If false -> the episode's betterAdvice is saved into an array
     called wrongFeedbacks, to show at the end.
   - Then plays the choice's "reaction" line using the SAME
     playQueue() engine described above.

7) NEXT EPISODE / FINAL RESULT
   - goToNextEpisode() increases currentEpisode by 1. If more
     episodes remain, renderEpisode() runs again with new data.
     If not, showFinalResult() runs.
   - showFinalResult() displays "You scored X / 5" and loops
     through wrongFeedbacks to list what could have been done
     better. It also calls saveLastPlayed() so the dashboard can
     show the "Continue Exploring" card next time.


WHY THIS DESIGN IS GOOD TO EXPLAIN
------------------------------------
- Uses only core JavaScript concepts a 3rd-year BCA student is
  expected to know: variables, functions, arrays, objects, loops,
  if-else, callback functions, DOM manipulation, localStorage, and
  URL parameters. No frameworks or libraries needed.
- DATA (storyData.js) is kept separate from LOGIC (script.js,
  story.html) - a basic but important programming principle.
- The dialogue queue is reused for two different situations
  (pre-choice conversation and post-choice reaction) instead of
  writing separate code for each - this shows an understanding of
  writing reusable functions instead of repeating code.


HOW TO ADD MORE STORIES LATER
--------------------------------
Add a new entry inside storiesData in storyData.js, following the
same pattern as "doctor" or "cricketer" (episodes with bgImage,
dialogues, choices with reactions, and betterAdvice). Then add a
new poster card in dashboard.html with onclick="openStory('yourId')".
No changes needed in story.html or script.js.
