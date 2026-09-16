// ===============================================
// careerData.js
// This file stores the CAREER RECOMMENDATION RULES.
//
// HOW IT WORKS (simple to explain):
// - The user's total skill points (Technical, Communication,
//   Problem Solving, Leadership) are calculated from every choice
//   they made across all stories they played.
// - We find the TOP 2 skills (highest point values).
// - Whichever 2 skills come out on top decide which "career
//   archetype" object below gets shown to the user.
// - There are 6 possible archetypes because there are 6 possible
//   pairs you can make from 4 skills (Technical+Communication,
//   Technical+ProblemSolving, Technical+Leadership,
//   Communication+ProblemSolving, Communication+Leadership,
//   ProblemSolving+Leadership).
// ===============================================

// The key is always the two skill names joined with "_", in
// alphabetical order, so it's easy to look up.
const careerArchetypes = {

  "communication_leadership": {
    title: "The People Leader",
    description: "Your choices show that you're comfortable talking to people and taking charge of situations. You naturally think about how decisions affect others.",
    suitableCareers: ["Business Manager", "Marketing Head", "HR Manager", "Entrepreneur"],
    requiredSkills: ["Public speaking", "Team management", "Negotiation", "Decision-making"],
    coursesOrDegrees: ["BBA / MBA", "Mass Communication", "Human Resource Management"],
    entryLevelJobs: ["Management Trainee", "HR Executive", "Marketing Associate"],
    salaryRange: "₹3.5 LPA - ₹8 LPA (entry level, India)",
    whatToLearnNext: ["Public speaking practice", "Basic project management (Trello/Asana)", "MS Excel & presentation skills"]
  },

  "communication_problemSolving": {
    title: "The Strategic Communicator",
    description: "Your choices show a mix of clear thinking and clear talking - you like solving problems but also explaining them well to others.",
    suitableCareers: ["Teacher / Trainer", "Consultant", "Journalist", "Content Strategist"],
    requiredSkills: ["Research", "Explaining complex ideas simply", "Critical thinking", "Writing"],
    coursesOrDegrees: ["B.Ed", "Mass Communication", "BA (any core subject) + Communication skills"],
    entryLevelJobs: ["Junior Teacher", "Content Writer", "Research Assistant"],
    salaryRange: "₹2.5 LPA - ₹6 LPA (entry level, India)",
    whatToLearnNext: ["Public speaking", "Writing/blogging practice", "Basic research methods"]
  },

  "communication_technical": {
    title: "The Tech Communicator",
    description: "You enjoy technical work, but you also care about explaining it clearly and working well with a team - a rare and valuable combination.",
    suitableCareers: ["Product Manager", "Technical Writer", "Sales Engineer", "IT Business Analyst"],
    requiredSkills: ["Basic coding knowledge", "Communication", "Documentation", "Client handling"],
    coursesOrDegrees: ["BCA / B.Tech", "Business Analytics", "Technical Writing courses"],
    entryLevelJobs: ["Junior Business Analyst", "Associate Product Manager", "Technical Support Engineer"],
    salaryRange: "₹4 LPA - ₹9 LPA (entry level, India)",
    whatToLearnNext: ["SQL basics", "Product management fundamentals", "Client communication skills"]
  },

  "leadership_technical": {
    title: "The Tech Lead",
    description: "You like solving technical problems AND taking charge - this is exactly the mix needed to lead technical teams in the future.",
    suitableCareers: ["Engineering Manager", "Startup Founder (Tech)", "Project Lead", "CTO track"],
    requiredSkills: ["Programming fundamentals", "Team management", "Decision-making under pressure"],
    coursesOrDegrees: ["BCA / B.Tech / MCA", "Project Management certification (PMP/Agile)"],
    entryLevelJobs: ["Software Developer (with growth to Team Lead)", "Junior Project Coordinator"],
    salaryRange: "₹4.5 LPA - ₹10 LPA (entry level, India)",
    whatToLearnNext: ["A programming language (JavaScript/Python)", "Git & teamwork tools", "Basic leadership reading"]
  },

  "problemSolving_technical": {
    title: "The Analytical Builder",
    description: "Your choices lean heavily towards logic, precision, and figuring things out step by step - a classic technical/analytical mindset.",
    suitableCareers: ["Software Developer", "Data Analyst", "Systems Engineer", "Doctor / Medical Researcher"],
    requiredSkills: ["Logical thinking", "Programming or technical tools", "Attention to detail"],
    coursesOrDegrees: ["BCA / B.Tech / B.Sc", "Data Science courses", "MBBS (if medical-inclined)"],
    entryLevelJobs: ["Junior Developer", "Data Analyst Trainee", "Lab/Research Assistant"],
    salaryRange: "₹4 LPA - ₹9 LPA (entry level, India)",
    whatToLearnNext: ["A programming language (Python/JavaScript)", "Excel + basic data analysis", "Logical reasoning practice"]
  },

  "leadership_problemSolving": {
    title: "The Decisive Strategist",
    description: "You stay calm, think clearly, and take charge under pressure - a combination often seen in people who handle high-stakes decisions well.",
    suitableCareers: ["Doctor", "Lawyer", "Operations Manager", "Civil Services"],
    requiredSkills: ["Quick decision-making", "Staying calm under pressure", "Responsibility-taking"],
    coursesOrDegrees: ["MBBS / LLB", "BBA (Operations)", "Public Administration"],
    entryLevelJobs: ["Junior Associate", "Operations Trainee", "Medical Intern"],
    salaryRange: "₹3.5 LPA - ₹8 LPA (entry level, India) - much higher for Doctors/Lawyers after full qualification",
    whatToLearnNext: ["Time management under pressure", "Case study practice", "Basic first-aid or legal basics (depending on interest)"]
  }
};

// ---------------------------------------------------
// Given a skills object like { technical: 12, communication: 5,
// problemSolving: 9, leadership: 3 }, this function finds the
// TOP 2 skills and returns the matching career archetype.
// ---------------------------------------------------
function getCareerRecommendation(skills) {
  // Turn the skills object into an array of [name, value] pairs
  // Example: [["technical", 12], ["communication", 5], ...]
  const skillPairs = Object.entries(skills);

  // Sort from highest value to lowest value
  skillPairs.sort(function (a, b) { return b[1] - a[1]; });

  // Take the names of the top 2 skills
  const topSkill1 = skillPairs[0][0];
  const topSkill2 = skillPairs[1][0];

  // Build the lookup key in alphabetical order (so "leadership_technical"
  // and "technical_leadership" both become the same key)
  const key = [topSkill1, topSkill2].sort().join("_");

  return careerArchetypes[key];
}
