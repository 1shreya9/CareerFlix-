// ===============================================
// funFacts.js
//
// Real, verified fun facts about each career role, shown as a
// "Fun Facts" note in the story preview popup. Kept in a separate
// file (like careerData.js and translations.js) so storyData.js
// stays focused only on the actual story content.
//
// Facts are grouped by ROLE NAME (matching the "role" field in
// storyData.js) rather than by story id, since two stories can
// share a similar profession family in the future.
// ===============================================

const careerFunFacts = {

  "Doctor": [
    "The Hippocratic Oath, a pledge of medical ethics, dates back to Ancient Greece and is still referenced by doctors today.",
    "The stethoscope was invented in 1816 by French physician René Laennec.",
    "Doctors typically complete 5-6 years of medical school before further specialization and residency.",
    "The human heart beats about 100,000 times a day - something cardiologists monitor closely.",
    "Doctors specializing in different areas have specific names, like cardiologist (heart) or neurologist (brain/nervous system).",
    "The World Health Organization (WHO) sets many global health guidelines that doctors follow worldwide.",
    "Most countries require doctors to complete a residency program after medical school before practicing independently.",
    "The red cross and red crescent are internationally recognized symbols of medical aid and neutrality.",
    "Doctors are required to continue learning throughout their careers to keep up with new treatments and research.",
    "Emergency room doctors often work rotating shifts, including nights, weekends, and holidays."
  ],

  "Nurse": [
    "Florence Nightingale, considered the founder of modern nursing, dramatically improved hospital sanitation in the 1850s.",
    "International Nurses Day is celebrated on May 12th, Florence Nightingale's birthday.",
    "Nurses are often the first healthcare workers a patient interacts with, and the ones who spend the most time with them.",
    "Nursing has many specializations, including ICU, pediatric, oncology, and psychiatric nursing.",
    "The Nightingale Pledge, a statement of nursing ethics, is still recited at some nursing school graduations.",
    "Nurses play a critical role in patient education, helping people understand their own treatment and recovery.",
    "Triage - deciding which patients need care most urgently - is a skill nurses use constantly in emergency settings.",
    "Many countries are currently facing a global shortage of registered nurses.",
    "Nurse practitioners in some countries are authorized to diagnose conditions and prescribe medication independently.",
    "Nursing consistently ranks as one of the most trusted professions in public opinion surveys."
  ],

  "Paramedic": [
    "The 'golden hour' refers to the critical first hour after a severe injury, when timely treatment greatly improves survival chances.",
    "CPR (cardiopulmonary resuscitation) can double or triple a person's chance of surviving cardiac arrest.",
    "The word 'AMBULANCE' is often written in mirror image on the front of ambulances, so drivers ahead can read it in their rearview mirror.",
    "Paramedics carry advanced equipment like defibrillators, oxygen tanks, and IV kits directly into the field.",
    "Early ambulance services trace back to battlefield medicine used during the late 1700s.",
    "Basic Life Support (BLS) and Advanced Life Support (ALS) are two recognized levels of emergency medical training.",
    "In many countries, trained paramedics can administer certain medications on the spot, before reaching a hospital.",
    "Air ambulances (helicopters) are used for hard-to-reach locations or highly time-sensitive emergencies.",
    "Paramedic training covers a wide range of situations - trauma, cardiac emergencies, childbirth, and more.",
    "Paramedics often work closely with firefighters and police as part of a coordinated emergency response team."
  ],

  "Cricketer": [
    "Cricket is believed to have originated in England, with organized matches dating back to the 16th-17th century.",
    "A cricket match can last from a few hours (T20 format) to five full days (Test cricket).",
    "The Ashes is one of cricket's oldest rivalries, played between England and Australia since 1882.",
    "The fastest ball ever electronically recorded in cricket was 161.3 km/h, bowled by Shoaib Akhtar in a 2003 World Cup match.",
    "A 'century' means a batsman has scored 100 runs in a single innings.",
    "The Cricket World Cup has been held since 1975, with different nations winning it over the decades.",
    "The Indian Premier League (IPL), launched in 2008, is one of the most-watched domestic cricket leagues in the world.",
    "Virat Kohli broke Sachin Tendulkar's long-standing record for most ODI centuries in November 2023, during the World Cup semi-final against New Zealand.",
    "Sachin Tendulkar holds the record for the most international centuries scored by any batsman.",
    "A traditional cricket ball is made of cork wrapped in leather, stitched together with a signature seam."
  ],

  "Football Player": [
    "Football (soccer) is the most popular sport in the world by global following, played and watched by billions.",
    "The FIFA World Cup, first held in 1930, is the most-watched sporting event on the planet.",
    "A standard football match lasts 90 minutes, split into two 45-minute halves.",
    "Pelé is the only player to have won three FIFA World Cups, in 1958, 1962, and 1970.",
    "The Guinness World Record for the fastest goal in top-flight football is 3.69 seconds, scored by Damian Mori in 1995.",
    "The offside rule is one of football's most debated regulations, designed to keep goal-scoring fair.",
    "A football pitch is typically 100-110 meters long and 64-75 meters wide.",
    "VAR (Video Assistant Referee) was introduced to help referees make more accurate decisions using video replays.",
    "The FIFA Women's World Cup has grown into one of the most-watched women's sporting events globally.",
    "Some football clubs, like Real Madrid and Manchester United, are among the most valuable sports brands in the world."
  ],

  "Basketball Player": [
    "Basketball was invented in 1891 by Dr. James Naismith, using a soccer ball and two peach baskets.",
    "The NBA (National Basketball Association) is the most-watched professional basketball league in the world.",
    "A standard basketball game consists of four quarters, typically 12 minutes each in the NBA.",
    "The three-point line was introduced to the NBA in the 1979-80 season.",
    "Wilt Chamberlain holds the record for most points scored in a single NBA game: 100 points, in 1962.",
    "Basketball became an official Olympic sport for men in 1936 and for women in 1976.",
    "A basketball hoop is set at a standard height of 10 feet (3.05 meters) in professional and college play.",
    "The FIBA Basketball World Cup is basketball's premier international tournament for national teams.",
    "India has a growing basketball scene, with the NBA opening academies to develop young talent.",
    "Team defense, rebounding, and quick decision-making under pressure are core skills in competitive basketball."
  ],

  "Software Developer": [
    "Ada Lovelace is widely considered the first computer programmer, having written an algorithm in the 1840s.",
    "The term 'bug' in programming is said to trace back to a real moth causing a malfunction in an early computer in 1947.",
    "Python, one of today's most widely used programming languages, was created by Guido van Rossum and released in 1991.",
    "JavaScript was created in just 10 days by Brendan Eich in 1995.",
    "The world's first website went live in 1991, created by Tim Berners-Lee.",
    "GitHub, used by millions of developers worldwide, hosts hundreds of millions of code repositories.",
    "Many software teams use 'Agile' methodology, breaking projects into short, manageable sprints.",
    "Debugging - finding and fixing errors in code - is one of the most time-consuming parts of a developer's job.",
    "Open-source software, like the Linux operating system, is built and maintained by volunteer developers globally.",
    "Many top tech companies conduct multiple rounds of coding interviews before hiring a developer."
  ],

  "Cybersecurity Analyst": [
    "The first computer virus, called 'Creeper,' appeared in the early 1970s as an experimental self-replicating program.",
    "A 'zero-day' vulnerability is a security flaw that is exploited before developers have had a chance to fix it.",
    "Ethical hackers, also called 'white hat' hackers, are hired by companies to find security weaknesses before criminals do.",
    "Phishing - tricking people into revealing sensitive information via fake emails or websites - remains one of the most common cyberattack methods.",
    "October is recognized internationally as Cybersecurity Awareness Month.",
    "Multi-factor authentication (MFA) significantly reduces the risk of accounts being compromised, even if a password is stolen.",
    "India established CERT-In (Indian Computer Emergency Response Team) to respond to cybersecurity incidents nationally.",
    "Ransomware attacks, where hackers lock data and demand payment, have targeted hospitals, schools, and governments worldwide.",
    "Firewalls act as a barrier between a trusted internal network and untrusted external networks, like the internet.",
    "Cybersecurity analysts often use 'penetration testing' - simulating an attack - to find weaknesses before real hackers do."
  ],

  "Startup Founder": [
    "Several of the world's biggest companies, including Apple and Amazon, started out of garages.",
    "A 'unicorn' startup refers to a privately-held startup valued at over $1 billion.",
    "An MVP (Minimum Viable Product) is a basic version of a product used to test an idea quickly with real users.",
    "Venture capital (VC) funding helps many startups grow quickly by providing early-stage investment.",
    "India has one of the fastest-growing startup ecosystems in the world, with thousands of new startups launching every year.",
    "Y Combinator, founded in 2005, is one of the world's most well-known startup accelerator programs.",
    "'Bootstrapping' means building a company using personal savings rather than outside investment.",
    "Most startups face a high failure rate in their first few years, which is why resilience is considered a key founder trait.",
    "Many successful founders significantly change ('pivot') their original idea before finding a model that works.",
    "Mentorship and networking are frequently cited by founders as major factors in early-stage success."
  ],

  "Lawyer": [
    "The principle of 'innocent until proven guilty' is a foundational idea in most modern legal systems.",
    "Lawyers must pass a bar examination in most countries before they're allowed to practice law.",
    "The Magna Carta, signed in 1215, laid early foundations for legal rights still referenced in some legal systems today.",
    "Court proceedings are usually open to the public in most democracies, allowing citizens to observe trials.",
    "Lawyers often specialize as litigators (who argue in court) or transactional lawyers (who handle contracts and deals).",
    "Legal precedent means past court rulings can influence the outcome of similar future cases.",
    "'Pro bono' work refers to lawyers offering free legal services to people who can't afford them.",
    "India has one of the largest legal professions in the world, with over a million registered advocates.",
    "Contracts, wills, criminal defense, and family law are just a few of law's many specializations.",
    "Many countries require lawyers to complete continuing legal education to keep their license active."
  ],

  "Corporate Lawyer": [
    "Corporate lawyers often handle mergers, acquisitions, and business contracts worth millions or billions of dollars.",
    "'Due diligence' - carefully reviewing all documents before a deal closes - is a major part of a corporate lawyer's job.",
    "Intellectual property law, a branch of corporate law, protects patents, trademarks, and copyrights.",
    "Non-disclosure agreements (NDAs) are commonly drafted by corporate lawyers to protect confidential business information.",
    "'Compliance law' ensures companies follow the government regulations specific to their industry.",
    "Corporate lawyers often work closely with a company's board of directors and senior executives.",
    "Some large law firms operate offices in multiple countries to serve global corporate clients.",
    "Corporate lawyers may specialize by industry - for example, technology, real estate, or finance.",
    "Contract law is one of the oldest branches of law, with roots in ancient trade agreements.",
    "Major business deals can take months or even years of negotiation led by corporate legal teams."
  ],

  "School Teacher": [
    "Teaching is one of the oldest professions in recorded human history.",
    "India observes National Teacher's Day on September 5th, the birthday of Dr. Sarvepalli Radhakrishnan.",
    "The word 'pedagogy' - the method and practice of teaching - comes from Ancient Greek.",
    "Teachers often use a mix of visual, auditory, and hands-on methods to reach different types of learners.",
    "Finland's education system, often praised internationally, gives teachers significant classroom autonomy.",
    "Many countries require teachers to pursue ongoing professional development to keep their teaching license active.",
    "Classroom management - keeping students engaged and focused - is considered one of the toughest skills for new teachers.",
    "Many successful people across fields credit a specific teacher for inspiring their career path.",
    "Teachers frequently prepare lessons and grade assignments outside official school hours.",
    "Research consistently shows that effective teachers have a long-term impact on students' future outcomes."
  ],

  "College Professor": [
    "A PhD (Doctor of Philosophy) is typically required to become a full professor at most universities.",
    "'Publish or perish' is a well-known phrase describing the pressure on professors to regularly publish research.",
    "Tenure is a job-protection status that many professors work years to earn, granting them academic freedom.",
    "Professors often split their time between teaching, research, and writing academic papers.",
    "Office hours - dedicated time for one-on-one meetings with students - are a standard part of university teaching.",
    "Many top universities require professors to secure external research funding through competitive grants.",
    "Professors frequently mentor graduate students working on their own research projects or theses.",
    "Guest lectures by outside experts are a common feature in many university courses.",
    "University professors often serve on academic committees in addition to their teaching duties.",
    "Major scientific breakthroughs, from penicillin to relativity, have often originated in university research led by professors."
  ],

  "Police Officer": [
    "Sir Robert Peel established the modern police force concept in London in 1829 - officers were nicknamed 'bobbies' after him.",
    "Police officers typically undergo physical, written, and psychological evaluations before being hired.",
    "'Community policing' - officers building relationships with local residents - is a growing global approach.",
    "Forensic science, including fingerprinting and DNA analysis, plays a major role in modern criminal investigations.",
    "India's police system is organized at the state level, with each state maintaining its own police force.",
    "Police dogs (K-9 units) are specially trained to detect drugs and explosives or track missing persons.",
    "Emergency police numbers vary by country - for example, 100 in India, 911 in the US, and 999 in the UK.",
    "Many police departments have specialized units, such as cybercrime, anti-narcotics, and traffic police.",
    "Police officers typically work rotating shifts to ensure round-the-clock coverage of their area.",
    "Traffic control, crime prevention, and investigation are just a few of the many daily responsibilities of police officers."
  ],

  "Detective": [
    "Sir Arthur Conan Doyle's fictional detective Sherlock Holmes popularized many real forensic investigation techniques.",
    "Fingerprint identification has been used in criminal investigations since the late 19th century.",
    "Forensic science includes many specializations: ballistics, toxicology, DNA analysis, and digital forensics.",
    "India's Central Bureau of Investigation (CBI) handles high-profile and complex criminal cases nationally.",
    "DNA evidence can now be matched with extremely high accuracy, helping solve cases decades after they occurred ('cold cases').",
    "Detectives often rely on 'chain of custody' - documenting exactly how evidence was handled - to keep it valid in court.",
    "Criminal profiling, used to narrow down suspects based on behavior patterns, became prominent through FBI research in the 1970s.",
    "Interrogation techniques have evolved significantly, with modern practice favoring rapport-building over pressure tactics.",
    "Digital forensics - recovering evidence from phones and computers - is one of the fastest-growing fields in investigation.",
    "A detective's case file often includes witness statements, physical evidence, and a detailed timeline of events."
  ],

  "Government Officer": [
    "India's Civil Services Examination, conducted by the UPSC, is widely regarded as one of the most competitive exams in the world.",
    "The concept of a professional civil service, separate from politics, was formalized in Britain in the 1850s.",
    "District Magistrates (DMs) in India oversee law and order, revenue matters, and development in their district.",
    "Civil servants are generally expected to remain politically neutral while carrying out their official duties.",
    "The IAS (Indian Administrative Service) is one of the most prestigious civil service cadres in India.",
    "Government officers often play a key coordinating role during disaster management and emergency response.",
    "E-governance initiatives have enabled citizens in many countries to access government services online.",
    "Civil servants frequently rotate through different departments and postings over the course of their careers.",
    "Public grievance redressal - helping citizens resolve complaints - is a core responsibility for many government officers.",
    "Civil servants implement government policy at the local, state, or national level, depending on their role."
  ],

  "Business Executive": [
    "A CEO (Chief Executive Officer) is typically the highest-ranking executive in a company.",
    "The term 'boardroom' refers to the room where a company's board of directors meets to make major decisions.",
    "Mergers and acquisitions (M&A) are major strategies companies use to grow quickly by combining with or buying other businesses.",
    "The Fortune 500 is an annual list ranking the 500 largest companies in the United States by revenue.",
    "SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) is a widely used framework for strategic business decisions.",
    "Corporate social responsibility (CSR) has become an increasingly important focus for modern businesses.",
    "Many executives began their careers in entry-level roles within the same industry they now lead.",
    "Negotiation skills are consistently ranked among the most valuable skills for business executives.",
    "Industry conferences and networking events are common ways executives build professional relationships.",
    "Work-life balance has become a growing area of focus for business leaders, given the demanding nature of executive roles."
  ]

};
