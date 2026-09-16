// ===============================================
// careerpedia.js
// Each term now has richer fields for the popup:
//   term, icon, category
//   meaning       -> formal "what is it" definition
//   simple        -> friendly, easy "in simple words" version
//   example       -> (optional) short example sentence
//   list          -> (optional) array of short bullet items
//   why           -> (optional) why it matters
//   imagine       -> (optional) a short CareerFlix-style scenario
// ===============================================

const careerpediaTerms = [

  // ---------------- EDUCATION ----------------
  { term: "Degree", icon: "🎓", category: "Education",
    meaning: "An academic qualification awarded by a college or university after completing a course of study.",
    simple: "A degree is the main qualification you earn after studying a course like BCA or BBA.",
    example: "She completed her BCA degree.",
    imagine: "You spend 3 years studying, doing projects, and giving exams. At the end, college hands you a certificate proving you did it. That paper is your degree!" },

  { term: "Certification", icon: "📜", category: "Education",
    meaning: "A document or credential showing that you completed a course or demonstrated knowledge in a particular skill.",
    simple: "A certification proves you know a specific skill, even outside your main degree.",
    why: "It's a fast way to prove one specific skill to an employer.",
    imagine: "You finish a 4-week Python course online and get a certificate at the end. Now you can show that certificate to prove you know Python, even before finishing college." },

  { term: "Diploma", icon: "🎖️", category: "Education",
    meaning: "A qualification awarded after completing a shorter, often more practical course of study than a full degree.",
    simple: "A diploma is like a shorter, more hands-on version of a degree.",
    example: "He completed a 1-year diploma in Digital Marketing.",
    imagine: "Instead of a 3-year degree, you join a 1-year hands-on course that teaches you a skill quickly so you can start working sooner." },

  { term: "Semester", icon: "📅", category: "Education",
    meaning: "One half of an academic year - most college courses are divided into semesters, each ending with exams.",
    simple: "A semester is one chunk of your college year, usually 5-6 months.",
    why: "Most BCA/B.Tech programs run 6-8 semesters across 3-4 years." },

  { term: "Curriculum", icon: "📘", category: "Education",
    meaning: "The full set of subjects and topics taught in a course or program.",
    simple: "The curriculum is basically the whole syllabus of your course, from start to finish.",
    example: "The BCA curriculum includes programming, databases, and web development." },

  { term: "Specialization", icon: "🎯", category: "Education",
    meaning: "A specific area of focus within a broader field of study, chosen to build deeper expertise.",
    simple: "It's the one area you choose to go deep into, instead of learning a bit of everything.",
    example: "She's doing her MBA with a specialization in Marketing." },

  // ---------------- JOBS ----------------
  { term: "Internship", icon: "💼", category: "Jobs",
    meaning: "A short-term work experience where students or beginners learn by working in a company or organization.",
    simple: "It's a trial-run job where you learn by actually working, usually for a few weeks or months.",
    example: "I completed a 2-month web development internship.",
    why: "Helps you gain practical experience and improve your resume.",
    imagine: "You are a BCA student. A company invites you to work with their development team for two months. You attend daily stand-ups, fix small bugs, and learn how real projects are built. That's an internship!" },

  { term: "Freelancing", icon: "💻", category: "Jobs",
    meaning: "Working independently for different clients instead of working permanently for one company.",
    simple: "You're your own boss, taking on projects from different people instead of one employer.",
    list: ["Writing", "Graphic design", "Web development", "Video editing"],
    imagine: "Instead of joining one company, you build websites for 3 different small businesses this month, each paying you separately. You choose your own hours and clients." },

  { term: "Remote Job", icon: "🏡", category: "Jobs",
    meaning: "A job that can be done from anywhere - usually home - without needing to be physically present at an office.",
    simple: "You do your job from home (or anywhere), not from a company office.",
    why: "Remote jobs became far more common worldwide after 2020." },

  { term: "Full-Time Job", icon: "🕘", category: "Jobs",
    meaning: "A job where you work a standard number of hours per week (typically 40+) for one employer, usually with benefits like paid leave.",
    simple: "A regular, all-day job with one company, usually 5-6 days a week.",
    example: "After graduating, she took up a full-time job as a software developer." },

  { term: "Part-Time Job", icon: "⏱️", category: "Jobs",
    meaning: "A job with fewer hours than full-time work, often chosen by students to earn while studying.",
    simple: "A job you do for just a few hours a day, often alongside studies.",
    why: "Part-time work can still teach valuable real-world skills." },

  { term: "Probation Period", icon: "🧪", category: "Jobs",
    meaning: "A trial period at the start of a new job (often 3-6 months) during which both employer and employee evaluate the fit.",
    simple: "It's a 'trial phase' when you join a new job, where both sides check if it's a good match.",
    example: "His offer letter mentioned a 3-month probation period." },

  // ---------------- SKILLS ----------------
  { term: "Programming", icon: "⌨️", category: "Skills",
    meaning: "Writing instructions (code) that a computer can follow to perform tasks.",
    simple: "It's basically giving step-by-step instructions to a computer in a language it understands.",
    example: "Python and JavaScript are popular programming languages for beginners." },

  { term: "Communication Skills", icon: "🗣️", category: "Skills",
    meaning: "The ability to clearly share ideas, listen to others, and interact effectively - both in speaking and writing.",
    simple: "Being able to explain your ideas clearly and actually listen to others.",
    why: "Strong communication is valued in almost every career, not just customer-facing roles." },

  { term: "Leadership", icon: "👑", category: "Skills",
    meaning: "The ability to guide, motivate, and organize a group of people toward a shared goal.",
    simple: "Helping a team move forward together, even when things get tough.",
    example: "As team captain, she showed strong leadership during the project." },

  { term: "Problem-Solving", icon: "🧩", category: "Skills",
    meaning: "The ability to identify a challenge and figure out a practical, logical way to fix or work around it.",
    simple: "Looking at a messy situation and figuring out a smart way through it.",
    why: "Employers often test problem-solving through case studies or coding challenges." },

  { term: "Teamwork", icon: "🤝", category: "Skills",
    meaning: "Working effectively and cooperatively with others toward a common objective.",
    simple: "Playing well with others so the whole group succeeds, not just you.",
    example: "The hackathon project required strong teamwork under a tight deadline." },

  { term: "Time Management", icon: "⏳", category: "Skills",
    meaning: "The ability to plan and control how much time you spend on different tasks to be productive and meet deadlines.",
    simple: "Organizing your day so you actually finish things on time.",
    why: "Simple tools like to-do lists and calendars can significantly improve time management." },

  // ---------------- APPLICATIONS ----------------
  { term: "Resume", icon: "📄", category: "Applications",
    meaning: "A document that contains your education, skills, projects, and work experience, used when applying for jobs.",
    simple: "A one-page summary of who you are professionally.",
    why: "💡 CareerFlix Tip: Keep your resume clear, honest, and relevant to the role." },

  { term: "Portfolio", icon: "🖼️", category: "Applications",
    meaning: "A collection of your best work samples - projects, designs, writing, or code - used to showcase your skills to employers.",
    simple: "A folder or website showing off your best work, so people can SEE your skills, not just read about them.",
    example: "Her design portfolio included 6 client projects." },

  { term: "Interview", icon: "🎙️", category: "Applications",
    meaning: "A formal conversation between a candidate and an employer to assess fit for a job or opportunity.",
    simple: "A conversation where a company checks if you're the right fit for the role.",
    why: "Researching the company beforehand is one of the best ways to prepare for an interview." },

  { term: "Cover Letter", icon: "✉️", category: "Applications",
    meaning: "A short letter sent along with a resume, explaining why you're a good fit for a specific job.",
    simple: "A short note that says 'here's why you should pick me' alongside your resume.",
    example: "He tailored his cover letter to mention the company's recent product launch." },

  { term: "LinkedIn Profile", icon: "🔗", category: "Applications",
    meaning: "An online professional profile on LinkedIn, used to showcase your career history, skills, and network with others in your field.",
    simple: "Your professional profile online, like a resume that recruiters can search for.",
    why: "Recruiters frequently search LinkedIn to find and evaluate candidates." },

  // ---------------- BUSINESS ----------------
  { term: "Startup", icon: "🚀", category: "Business",
    meaning: "A new business created to solve a problem or provide a product/service, usually with high growth potential.",
    simple: "A new company built around one big idea, trying to grow fast.",
    example: "Two students created an app and turned it into a startup." },

  { term: "Entrepreneur", icon: "💡", category: "Business",
    meaning: "A person who starts and runs their own business, taking on financial risk in the hope of building something successful.",
    simple: "Someone who builds their own business instead of working for someone else.",
    why: "Entrepreneurship rewards resilience - most first ideas change significantly before they succeed." },

  { term: "Networking", icon: "🌐", category: "Business",
    meaning: "Building and maintaining professional relationships that can lead to opportunities, advice, or collaborations.",
    simple: "Making genuine professional connections that can help you (and them) later.",
    example: "She found her first job through networking at a college tech fest." },

  { term: "Venture Capital", icon: "💰", category: "Business",
    meaning: "Funding provided by investors to startups and small businesses that are believed to have strong long-term growth potential.",
    simple: "Big money given to a promising startup by investors, in exchange for a share of the company.",
    why: "Also called 'VC funding' - usually given in exchange for a share of ownership." },

  { term: "Stakeholder", icon: "🧑‍🤝‍🧑", category: "Business",
    meaning: "Anyone with an interest in a business or project's outcome - including employees, customers, investors, and partners.",
    simple: "Anyone who's affected by or cares about how a project turns out.",
    example: "The project update was shared with all key stakeholders before launch." },

  { term: "Business Model", icon: "📊", category: "Business",
    meaning: "The plan for how a company creates value and earns money from its product or service.",
    simple: "How a company actually makes money.",
    imagine: "An investor asks your startup: 'How exactly will you make money?' Your answer - subscriptions, ads, or selling a product - is your business model." },

  { term: "Revenue", icon: "💵", category: "Business",
    meaning: "The total amount of money a business earns from its normal operations, before expenses are subtracted.",
    simple: "The total money coming IN, before you subtract costs.",
    example: "The startup's monthly revenue grew from ₹50,000 to ₹2 lakhs." },

  // ---------------- MEDICAL TERMS ----------------
  { term: "Diagnosis", icon: "🩺", category: "Medical",
    meaning: "The process of identifying what illness or condition a patient has, based on symptoms and tests.",
    simple: "Figuring out exactly what's wrong with a patient.",
    imagine: "A patient comes in with chest pain. After checking vitals and running tests, the doctor concludes it's a mild heart issue - that conclusion is the diagnosis." },

  { term: "Prescription", icon: "💊", category: "Medical",
    meaning: "A doctor's written instruction for which medicines a patient should take, and how.",
    simple: "The doctor's official note telling you which medicines to take and how.",
    example: "The doctor gave her a prescription for antibiotics." },

  { term: "Vitals", icon: "❤️", category: "Medical",
    meaning: "Basic body measurements - like blood pressure, pulse, temperature, and oxygen level - used to check a patient's condition.",
    simple: "The basic numbers (BP, pulse, temperature) that show how a patient's body is doing right now." },

  { term: "ICU", icon: "🏥", category: "Medical",
    meaning: "Intensive Care Unit - a hospital section for critically ill patients who need constant monitoring and specialized equipment.",
    simple: "The part of the hospital for the most serious cases, watched very closely." },

  { term: "Patient History", icon: "📋", category: "Medical",
    meaning: "A record of a patient's past illnesses, treatments, allergies, and medical background.",
    simple: "A patient's medical 'backstory' - what's happened to their health before now.",
    why: "Knowing patient history helps doctors avoid mistakes, like prescribing a medicine the patient is allergic to." },

  // ---------------- LEGAL TERMS ----------------
  { term: "Litigation", icon: "⚖️", category: "Legal",
    meaning: "The process of taking a legal dispute to court and resolving it through the legal system.",
    simple: "Fighting out a disagreement in court instead of settling it privately." },

  { term: "Verdict", icon: "🔨", category: "Legal",
    meaning: "The official decision made by a judge or jury at the end of a trial.",
    simple: "The final decision - guilty or not, who wins the case.",
    imagine: "After weeks of arguments and evidence, the judge finally announces: 'The court finds the defendant not guilty.' That announcement is the verdict." },

  { term: "Evidence", icon: "🔍", category: "Legal",
    meaning: "Facts, documents, or objects presented in court to prove or disprove something in a case.",
    simple: "The proof - documents, photos, testimonies - used to support an argument in court." },

  { term: "Prosecution", icon: "📢", category: "Legal",
    meaning: "The legal party that brings criminal charges against someone and argues for their guilt in court.",
    simple: "The side arguing that the accused person IS guilty." },

  { term: "Bail", icon: "🔓", category: "Legal",
    meaning: "A temporary release of an accused person from custody, usually after paying a set amount, while their trial is ongoing.",
    simple: "Being allowed to stay out of jail (often after paying money) while waiting for the case to finish." },

  // ---------------- TECH TERMS ----------------
  { term: "API", icon: "🔌", category: "Tech",
    meaning: "Application Programming Interface - a set of rules that lets two different software systems communicate with each other.",
    simple: "A way for two apps to 'talk' to each other and share data.",
    example: "The weather app uses an API to fetch live weather data." },

  { term: "Database", icon: "🗄️", category: "Tech",
    meaning: "An organized collection of data stored electronically, so it can be easily accessed, managed, and updated.",
    simple: "A giant, organized digital filing cabinet for storing information." },

  { term: "Algorithm", icon: "🧮", category: "Tech",
    meaning: "A step-by-step set of instructions for solving a problem or completing a task.",
    simple: "A recipe - a clear set of steps - that a computer follows to get something done.",
    imagine: "You want to sort a messy list of names alphabetically. The exact steps you follow to do that, in order, are an algorithm." },

  { term: "Debugging", icon: "🐞", category: "Tech",
    meaning: "The process of finding and fixing errors ('bugs') in computer code.",
    simple: "Hunting down what's broken in your code and fixing it.",
    why: "Debugging is one of the most time-consuming parts of a developer's job." },

  { term: "Cloud Computing", icon: "☁️", category: "Tech",
    meaning: "Using remote servers over the internet to store data and run applications, instead of a local computer.",
    simple: "Using someone else's powerful computers over the internet, instead of your own.",
    example: "Companies like Google and Amazon offer cloud computing services." },

  // ---------------- POLICE & GOVERNMENT TERMS ----------------
  { term: "FIR", icon: "📝", category: "Police & Govt",
    meaning: "First Information Report - the first official document police record when they receive information about a crime.",
    simple: "The very first written report police make when a crime is reported.",
    imagine: "Someone's phone gets stolen. They go to the police station and describe what happened - the officer writes it all down as the FIR, the starting point of the investigation." },

  { term: "Custody", icon: "🔒", category: "Police & Govt",
    meaning: "The state of being held by police or legal authorities, usually while an investigation or trial is ongoing.",
    simple: "Being held/detained by the police or courts." },

  { term: "Public Policy", icon: "🏛️", category: "Police & Govt",
    meaning: "A course of action adopted by a government to address a public issue, like education, healthcare, or transport.",
    simple: "The government's official plan for handling a particular issue that affects everyone." },

  { term: "Civil Servant", icon: "🧑‍💼", category: "Police & Govt",
    meaning: "A person employed by the government to carry out public administration and services, chosen without political bias.",
    simple: "Someone who works for the government to serve the public, not any political party." },

  { term: "Investigation", icon: "🕵️", category: "Police & Govt",
    meaning: "The systematic process of gathering facts and evidence to understand what happened in a case.",
    simple: "Carefully digging into a case to find out the truth.",
    why: "Thorough investigation prevents wrongly accusing an innocent person." }

];
