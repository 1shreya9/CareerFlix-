// ===============================================
// script.js
// Small REUSABLE functions used on more than one page
// (login, dashboard, story). Keeping these separate from
// storyData.js follows a basic rule: "data" and "logic"
// should not be mixed in the same file.
// ===============================================

// Save the logged-in user's name in the browser's LocalStorage.
// LocalStorage keeps data saved even after closing the browser tab.
function saveUserName(name) {
  localStorage.setItem("careerflix_username", name);
}

// Get the saved user name back. If nothing is saved, return "Guest".
function getUserName() {
  const name = localStorage.getItem("careerflix_username");
  if (name === null) {
    return "Guest";
  }
  return name;
}

// Removes the saved name - used by the Logout button.
function logoutUser() {
  localStorage.removeItem("careerflix_username");
  window.location.href = "index.html";
}

// =====================================================
// SIMPLE SIGNUP / LOGIN (LocalStorage only)
// IMPORTANT: This is NOT real, secure authentication - there is
// no server or database. It simply saves username/email/password
// in the browser's LocalStorage so the same browser can "log back
// in" later. This is a common, simple approach for student demo
// projects, but should never be used for a real production app.
// =====================================================

// Returns the saved users object: { username: {email, password}, ... }
function getAllUsers() {
  const saved = localStorage.getItem("careerflix_users");
  if (saved === null) {
    return {};
  }
  return JSON.parse(saved);
}

// Creates a new account. Returns { success: true } or
// { success: false, message: "..." } if the username is taken.
function signUpUser(username, email, password) {
  const users = getAllUsers();

  if (users[username]) {
    return { success: false, message: "This username is already taken. Please login instead." };
  }

  users[username] = { email: email, password: password };
  localStorage.setItem("careerflix_users", JSON.stringify(users));

  saveUserName(username);   // also log them in immediately after signup
  return { success: true };
}

// Logs an existing user in. Returns { success: true } or
// { success: false, message: "..." } if username/password is wrong.
function loginExistingUser(username, password) {
  const users = getAllUsers();
  const account = users[username];

  if (!account) {
    return { success: false, message: "No account found with this username. Please sign up first." };
  }
  if (account.password !== password) {
    return { success: false, message: "Incorrect password. Please try again." };
  }

  saveUserName(username);
  return { success: true };
}

// Reads a value from the page URL.
// Example: story.html?story=doctor  ->  getQueryParam("story") returns "doctor"
function getQueryParam(paramName) {
  const params = new URLSearchParams(window.location.search);
  return params.get(paramName);
}

// Remembers which story the user played last, so the Dashboard
// can show a "Continue Exploring" card for it next time.
function saveLastPlayed(storyId) {
  localStorage.setItem("careerflix_lastplayed", storyId);
}

// Returns the last played story's id, or null if none yet.
function getLastPlayed() {
  return localStorage.getItem("careerflix_lastplayed");
}

// =====================================================
// SKILLS SYSTEM
// Every choice a user makes (in any story) carries a small
// "skills" object, e.g. { technical: 3, communication: 0,
// problemSolving: 2, leadership: 0 }. We add these up across
// EVERY story the user plays, and store the running total in
// localStorage as one JSON object.
// =====================================================

// Returns the user's current total skills. If nothing saved yet,
// returns all-zero starting values.
function getSkills() {
  const saved = localStorage.getItem("careerflix_skills");
  if (saved === null) {
    return { technical: 0, communication: 0, problemSolving: 0, leadership: 0 };
  }
  return JSON.parse(saved);
}

// Adds the given skill points on top of whatever the user already has.
function addSkills(newPoints) {
  const current = getSkills();
  current.technical      += newPoints.technical      || 0;
  current.communication  += newPoints.communication  || 0;
  current.problemSolving += newPoints.problemSolving || 0;
  current.leadership     += newPoints.leadership     || 0;
  localStorage.setItem("careerflix_skills", JSON.stringify(current));
}

// =====================================================
// COMPLETED STORIES
// A simple array of story ids the user has finished, saved in
// localStorage as JSON. Used on the Profile page.
// =====================================================

function getCompletedStories() {
  const saved = localStorage.getItem("careerflix_completed");
  if (saved === null) {
    return [];
  }
  return JSON.parse(saved);
}

// Adds a story id to the completed list, but only once
// (so replaying a story doesn't create duplicate entries).
function addCompletedStory(storyId) {
  const completed = getCompletedStories();
  if (completed.indexOf(storyId) === -1) {
    completed.push(storyId);
    localStorage.setItem("careerflix_completed", JSON.stringify(completed));
  }
}

// =====================================================
// WISHLIST ("My List")
// A simple array of story ids the user has saved to watch later,
// saved in localStorage as JSON - same pattern as completed stories.
// =====================================================

function getWishlist() {
  const saved = localStorage.getItem("careerflix_wishlist");
  if (saved === null) {
    return [];
  }
  return JSON.parse(saved);
}

function isInWishlist(storyId) {
  return getWishlist().indexOf(storyId) !== -1;
}

// Adds or removes a story from the wishlist depending on whether
// it's already there. Returns the new state (true = now saved).
function toggleWishlist(storyId) {
  let list = getWishlist();

  if (list.indexOf(storyId) !== -1) {
    list = list.filter(function (id) { return id !== storyId; });
    localStorage.setItem("careerflix_wishlist", JSON.stringify(list));
    return false;
  } else {
    list.push(storyId);
    localStorage.setItem("careerflix_wishlist", JSON.stringify(list));
    return true;
  }
}
// A simple gamification layer - 5 badges that unlock based on
// stats we're already tracking (completed stories, total choices
// made, and skill totals). Nothing new to save here except a
// running count of every choice the user has ever made.
// =====================================================

// Counts EVERY choice made across EVERY story ever played
// (not just per-story - this is a lifetime counter).
function incrementChoiceCount() {
  const current = parseInt(localStorage.getItem("careerflix_choicecount") || "0", 10);
  localStorage.setItem("careerflix_choicecount", (current + 1).toString());
}

function getChoiceCount() {
  return parseInt(localStorage.getItem("careerflix_choicecount") || "0", 10);
}

// Story ids grouped by genre - used by the genre-specific badges below.
const GENRE_STORY_IDS = {
  medical:  ["doctor", "paramedic", "nurse"],
  sports:   ["cricketer", "footballer", "basketball"],
  it:       ["it", "startup", "cybersecurity"],
  law:      ["law", "corporatelaw"],
  teaching: ["teaching", "college"]
};
const ALL_STORY_IDS = [].concat(
  GENRE_STORY_IDS.medical, GENRE_STORY_IDS.sports, GENRE_STORY_IDS.it,
  GENRE_STORY_IDS.law, GENRE_STORY_IDS.teaching,
  ["police", "government", "business", "detective"]
);

// Checks if the user has completed BOTH stories in a given genre group
function hasCompletedBoth(completed, genreIds) {
  return genreIds.every(function (id) { return completed.indexOf(id) !== -1; });
}
// Checks if the user has completed AT LEAST ONE story in a genre group
function hasCompletedAny(completed, genreIds) {
  return genreIds.some(function (id) { return completed.indexOf(id) !== -1; });
}

// Returns an array of achievement objects, each with a "id",
// "icon", "title", "description" and "unlocked" (true/false).
// This is recalculated fresh every time it's called - we don't
// need to separately save "which badges are unlocked" because we
// can always work it out again from the stats we already track.
function getAchievements() {
  const completed = getCompletedStories();
  const choiceCount = getChoiceCount();
  const skills = getSkills();

  return [
    {
      id: "first_story",
      icon: "🏅",
      title: "First Story Completed",
      description: "Finish your very first CareerFlix story.",
      unlocked: completed.length >= 1
    },
    {
      id: "decision_maker",
      icon: "🎯",
      title: "Decision Maker",
      description: "Make 20 choices across any stories.",
      unlocked: choiceCount >= 20
    },
    {
      id: "tech_explorer",
      icon: "💻",
      title: "Tech Explorer",
      description: "Complete a technology career story (Code Red, Built From Zero, or Firewall).",
      unlocked: hasCompletedAny(completed, GENRE_STORY_IDS.it)
    },
    {
      id: "critical_thinker",
      icon: "🧠",
      title: "Critical Thinker",
      description: "Build up strong Problem Solving skill points (15+).",
      unlocked: skills.problemSolving >= 15
    },
    {
      id: "career_explorer",
      icon: "🔥",
      title: "Career Explorer",
      description: "Complete 5 different career path stories.",
      unlocked: completed.length >= 5
    },
    {
      id: "medical_expert",
      icon: "🏥",
      title: "Medical Expert",
      description: "Complete all 3 medical stories (Pulse Point, Life on the Line, and Healing Hands).",
      unlocked: hasCompletedBoth(completed, GENRE_STORY_IDS.medical)
    },
    {
      id: "sports_champion",
      icon: "🏆",
      title: "Sports Champion",
      description: "Complete all 3 sports stories (The Final Over, Final Whistle, and Fast Break).",
      unlocked: hasCompletedBoth(completed, GENRE_STORY_IDS.sports)
    },
    {
      id: "legal_eagle",
      icon: "⚖️",
      title: "Legal Eagle",
      description: "Complete both law stories (Truth on Trial and Hidden Clause).",
      unlocked: hasCompletedBoth(completed, GENRE_STORY_IDS.law)
    },
    {
      id: "master_educator",
      icon: "📚",
      title: "Master Educator",
      description: "Complete both teaching stories (The First Bell and Beyond the Lecture).",
      unlocked: hasCompletedBoth(completed, GENRE_STORY_IDS.teaching)
    },
    {
      id: "great_communicator",
      icon: "🗣",
      title: "Great Communicator",
      description: "Build up strong Communication skill points (15+).",
      unlocked: skills.communication >= 15
    },
    {
      id: "natural_leader",
      icon: "👑",
      title: "Natural Leader",
      description: "Build up strong Leadership skill points (15+).",
      unlocked: skills.leadership >= 15
    },
    {
      id: "completionist",
      icon: "🌟",
      title: "Completionist",
      description: "Complete all 17 CareerFlix stories.",
      unlocked: ALL_STORY_IDS.every(function (id) { return completed.indexOf(id) !== -1; })
    },
    {
      id: "case_closed",
      icon: "🕵️",
      title: "Case Closed",
      description: "Complete the Detective story (The Investigation).",
      unlocked: completed.indexOf("detective") !== -1
    },
    {
      id: "officer_of_law",
      icon: "👮",
      title: "Officer of the Law",
      description: "Complete the Police story (Line of Duty).",
      unlocked: completed.indexOf("police") !== -1
    },
    {
      id: "public_servant",
      icon: "🏛",
      title: "Public Servant",
      description: "Complete the Government Job story (Civil Duty).",
      unlocked: completed.indexOf("government") !== -1
    },
    {
      id: "dealmaker",
      icon: "💼",
      title: "Dealmaker",
      description: "Complete the Business story (Deal Maker).",
      unlocked: completed.indexOf("business") !== -1
    }
  ];
}


// =====================================================
// SETTINGS HELPERS (used by settings.html)
// Everything the Settings page can change or clear lives here,
// so settings.html only has to call these functions and show
// the message they return. Same LocalStorage-only approach as
// the rest of the project (see the note above the signup code).
// =====================================================

// Same rules as the Sign Up form on index.html
const GMAIL_PATTERN = /^[^\s@]+@gmail\.com$/;
const PASSWORD_PATTERN = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
const PASSWORD_RULE_TEXT =
  "Password must be at least 8 characters, with 1 capital letter, 1 number, and 1 special character (e.g. @, #, $, %, !, &, *).";

function saveAllUsers(users) {
  localStorage.setItem("careerflix_users", JSON.stringify(users));
}

// Returns { username, email } for the logged-in user, or null if the
// user is browsing as a Guest (Guests have no saved account).
function getCurrentAccount() {
  const username = getUserName();
  const users = getAllUsers();
  if (!users[username]) {
    return null;
  }
  return { username: username, email: users[username].email };
}

// Every settings function below returns { success: true/false, message: "..." }
function changeUsername(newName) {
  newName = newName.trim();
  const account = getCurrentAccount();

  if (!account) return { success: false, message: "No account found. Please login again." };
  if (newName === "") return { success: false, message: "Username cannot be empty." };
  if (newName === account.username) return { success: false, message: "That is already your username." };

  const users = getAllUsers();
  if (users[newName]) return { success: false, message: "This username is already taken." };

  users[newName] = users[account.username];   // move the account to the new name
  delete users[account.username];
  saveAllUsers(users);
  saveUserName(newName);
  return { success: true, message: "Username updated." };
}

function changeEmail(newEmail) {
  newEmail = newEmail.trim();
  const account = getCurrentAccount();

  if (!account) return { success: false, message: "No account found. Please login again." };
  if (!GMAIL_PATTERN.test(newEmail)) {
    return { success: false, message: "Please use a valid Gmail address (must end with @gmail.com)." };
  }

  const users = getAllUsers();
  users[account.username].email = newEmail;
  saveAllUsers(users);
  return { success: true, message: "Email updated." };
}

function changePassword(currentPassword, newPassword, confirmPassword) {
  const account = getCurrentAccount();
  if (!account) return { success: false, message: "No account found. Please login again." };

  const users = getAllUsers();
  if (users[account.username].password !== currentPassword) {
    return { success: false, message: "Current password is incorrect." };
  }
  if (!PASSWORD_PATTERN.test(newPassword)) {
    return { success: false, message: PASSWORD_RULE_TEXT };
  }
  if (newPassword !== confirmPassword) {
    return { success: false, message: "New password and confirm password do not match." };
  }
  if (newPassword === currentPassword) {
    return { success: false, message: "New password must be different from the current one." };
  }

  users[account.username].password = newPassword;
  saveAllUsers(users);
  return { success: true, message: "Password changed successfully." };
}

// ---------- Clear history / progress ----------

// Removes the "Continue Exploring" card from the dashboard
function clearLastPlayed() {
  localStorage.removeItem("careerflix_lastplayed");
}

// Empties "My List"
function clearWishlist() {
  localStorage.removeItem("careerflix_wishlist");
}

// Clears completed stories, choice count and skill points
// (this also locks all achievements again, because badges are
// worked out from these three values)
function clearStoryProgress() {
  localStorage.removeItem("careerflix_completed");
  localStorage.removeItem("careerflix_choicecount");
  localStorage.removeItem("careerflix_skills");
}

// Clears everything above in one go
function clearAllProgress() {
  clearLastPlayed();
  clearWishlist();
  clearStoryProgress();
}

// Deletes the account itself plus all saved data, then the caller
// should send the user back to the login page.
function deleteAccount() {
  const account = getCurrentAccount();
  if (account) {
    const users = getAllUsers();
    delete users[account.username];
    saveAllUsers(users);
  }
  clearAllProgress();
  localStorage.removeItem("careerflix_language");
  localStorage.removeItem("careerflix_username");
}

// ---------- Preferences ----------

// Default story language ("hinglish", "hindi" or "english").
// story.html uses this as the pre-selected language.
function getPreferredLanguage() {
  const lang = localStorage.getItem("careerflix_language");
  if (lang === "hindi" || lang === "english" || lang === "hinglish") {
    return lang;
  }
  return "hinglish";
}

function savePreferredLanguage(lang) {
  localStorage.setItem("careerflix_language", lang);
}
