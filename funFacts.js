// ===============================================
// funFacts.js
//
// Real, verified fun facts about each career role, shown as a
// "Fun Facts" flip-card in the Fun Facts page. Each fact now carries
// its own real photo (img) so the popup can be browsed one fact at
// a time with Next / Prev, instead of one long plain-text list.
//
// Facts are grouped by ROLE NAME (matching the "role" field in
// storyData.js) rather than by story id, since two stories can
// share a similar profession family in the future.
// ===============================================

const careerFunFacts = {

  "Doctor": [
    { text: "The Hippocratic Oath, a pledge of medical ethics, dates back to Ancient Greece and is still referenced by doctors today.", img: "https://images.pexels.com/photos/16571732/pexels-photo-16571732.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "The stethoscope was invented in 1816 by French physician René Laennec.", img: "https://images.pexels.com/photos/40568/pexels-photo-40568.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Doctors typically complete 5-6 years of medical school before further specialization and residency.", img: "https://images.pexels.com/photos/12955896/pexels-photo-12955896.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "The human heart beats about 100,000 times a day - something cardiologists monitor closely.", img: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Doctors specializing in different areas have specific names, like cardiologist (heart) or neurologist (brain/nervous system).", img: "https://images.pexels.com/photos/213283/pexels-photo-213283.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "The World Health Organization (WHO) sets many global health guidelines that doctors follow worldwide.", img: "https://images.pexels.com/photos/16571732/pexels-photo-16571732.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Most countries require doctors to complete a residency program after medical school before practicing independently.", img: "https://images.pexels.com/photos/40568/pexels-photo-40568.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "The red cross and red crescent are internationally recognized symbols of medical aid and neutrality.", img: "https://images.pexels.com/photos/12955896/pexels-photo-12955896.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Doctors are required to continue learning throughout their careers to keep up with new treatments and research.", img: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Emergency room doctors often work rotating shifts, including nights, weekends, and holidays.", img: "https://images.pexels.com/photos/213283/pexels-photo-213283.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ],

  "Nurse": [
    { text: "Florence Nightingale, considered the founder of modern nursing, dramatically improved hospital sanitation in the 1850s.", img: "https://images.pexels.com/photos/34185202/pexels-photo-34185202.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "International Nurses Day is celebrated on May 12th, Florence Nightingale's birthday.", img: "https://images.pexels.com/photos/34185202/pexels-photo-34185202.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Nurses are often the first healthcare workers a patient interacts with, and the ones who spend the most time with them.", img: "https://images.pexels.com/photos/34185202/pexels-photo-34185202.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Nursing has many specializations, including ICU, pediatric, oncology, and psychiatric nursing.", img: "https://images.pexels.com/photos/34185202/pexels-photo-34185202.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "The Nightingale Pledge, a statement of nursing ethics, is still recited at some nursing school graduations.", img: "https://images.pexels.com/photos/34185202/pexels-photo-34185202.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Nurses play a critical role in patient education, helping people understand their own treatment and recovery.", img: "https://images.pexels.com/photos/34185202/pexels-photo-34185202.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Triage - deciding which patients need care most urgently - is a skill nurses use constantly in emergency settings.", img: "https://images.pexels.com/photos/34185202/pexels-photo-34185202.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Many countries are currently facing a global shortage of registered nurses.", img: "https://images.pexels.com/photos/34185202/pexels-photo-34185202.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Nurse practitioners in some countries are authorized to diagnose conditions and prescribe medication independently.", img: "https://images.pexels.com/photos/34185202/pexels-photo-34185202.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Nursing consistently ranks as one of the most trusted professions in public opinion surveys.", img: "https://images.pexels.com/photos/34185202/pexels-photo-34185202.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ],

  "Paramedic": [
    { text: "The 'golden hour' refers to the critical first hour after a severe injury, when timely treatment greatly improves survival chances.", img: "https://images.pexels.com/photos/8943075/pexels-photo-8943075.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "CPR (cardiopulmonary resuscitation) can double or triple a person's chance of surviving cardiac arrest.", img: "https://images.pexels.com/photos/8943075/pexels-photo-8943075.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "The word 'AMBULANCE' is often written in mirror image on the front of ambulances, so drivers ahead can read it in their rearview mirror.", img: "https://images.pexels.com/photos/8943075/pexels-photo-8943075.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Paramedics carry advanced equipment like defibrillators, oxygen tanks, and IV kits directly into the field.", img: "https://images.pexels.com/photos/8943075/pexels-photo-8943075.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Early ambulance services trace back to battlefield medicine used during the late 1700s.", img: "https://images.pexels.com/photos/8943075/pexels-photo-8943075.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Basic Life Support (BLS) and Advanced Life Support (ALS) are two recognized levels of emergency medical training.", img: "https://images.pexels.com/photos/8943075/pexels-photo-8943075.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "In many countries, trained paramedics can administer certain medications on the spot, before reaching a hospital.", img: "https://images.pexels.com/photos/8943075/pexels-photo-8943075.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Air ambulances (helicopters) are used for hard-to-reach locations or highly time-sensitive emergencies.", img: "https://images.pexels.com/photos/8943075/pexels-photo-8943075.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Paramedic training covers a wide range of situations - trauma, cardiac emergencies, childbirth, and more.", img: "https://images.pexels.com/photos/8943075/pexels-photo-8943075.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Paramedics often work closely with firefighters and police as part of a coordinated emergency response team.", img: "https://images.pexels.com/photos/8943075/pexels-photo-8943075.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ],

  "Cricketer": [
    { text: "Cricket is believed to have originated in England, with organized matches dating back to the 16th-17th century.", img: "https://images.pexels.com/photos/29881319/pexels-photo-29881319.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "A cricket match can last from a few hours (T20 format) to five full days (Test cricket).", img: "https://images.pexels.com/photos/29881319/pexels-photo-29881319.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "The Ashes is one of cricket's oldest rivalries, played between England and Australia since 1882.", img: "https://images.pexels.com/photos/29881319/pexels-photo-29881319.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "The fastest ball ever electronically recorded in cricket was 161.3 km/h, bowled by Shoaib Akhtar in a 2003 World Cup match.", img: "https://images.pexels.com/photos/29881319/pexels-photo-29881319.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "A 'century' means a batsman has scored 100 runs in a single innings.", img: "https://images.pexels.com/photos/29881319/pexels-photo-29881319.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "The Cricket World Cup has been held since 1975, with different nations winning it over the decades.", img: "https://images.pexels.com/photos/29881319/pexels-photo-29881319.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "The Indian Premier League (IPL), launched in 2008, is one of the most-watched domestic cricket leagues in the world.", img: "https://images.pexels.com/photos/29881319/pexels-photo-29881319.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Virat Kohli broke Sachin Tendulkar's long-standing record for most ODI centuries in November 2023, during the World Cup semi-final against New Zealand.", img: "https://images.pexels.com/photos/29881319/pexels-photo-29881319.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Sachin Tendulkar holds the record for the most international centuries scored by any batsman.", img: "https://images.pexels.com/photos/29881319/pexels-photo-29881319.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "A traditional cricket ball is made of cork wrapped in leather, stitched together with a signature seam.", img: "https://images.pexels.com/photos/29881319/pexels-photo-29881319.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ],

  "Football Player": [
    { text: "Football (soccer) is the most popular sport in the world by global following, played and watched by billions.", img: "https://images.pexels.com/photos/32190734/pexels-photo-32190734.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "The FIFA World Cup, first held in 1930, is the most-watched sporting event on the planet.", img: "https://images.pexels.com/photos/32190734/pexels-photo-32190734.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "A standard football match lasts 90 minutes, split into two 45-minute halves.", img: "https://images.pexels.com/photos/32190734/pexels-photo-32190734.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Pelé is the only player to have won three FIFA World Cups, in 1958, 1962, and 1970.", img: "https://images.pexels.com/photos/32190734/pexels-photo-32190734.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "The Guinness World Record for the fastest goal in top-flight football is 3.69 seconds, scored by Damian Mori in 1995.", img: "https://images.pexels.com/photos/32190734/pexels-photo-32190734.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "The offside rule is one of football's most debated regulations, designed to keep goal-scoring fair.", img: "https://images.pexels.com/photos/32190734/pexels-photo-32190734.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "A football pitch is typically 100-110 meters long and 64-75 meters wide.", img: "https://images.pexels.com/photos/32190734/pexels-photo-32190734.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "VAR (Video Assistant Referee) was introduced to help referees make more accurate decisions using video replays.", img: "https://images.pexels.com/photos/32190734/pexels-photo-32190734.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "The FIFA Women's World Cup has grown into one of the most-watched women's sporting events globally.", img: "https://images.pexels.com/photos/32190734/pexels-photo-32190734.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Some football clubs, like Real Madrid and Manchester United, are among the most valuable sports brands in the world.", img: "https://images.pexels.com/photos/32190734/pexels-photo-32190734.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ],

  "Basketball Player": [
    { text: "Basketball was invented in 1891 by Dr. James Naismith, using a soccer ball and two peach baskets.", img: "https://images.pexels.com/photos/2874717/pexels-photo-2874717.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "The NBA (National Basketball Association) is the most-watched professional basketball league in the world.", img: "https://images.pexels.com/photos/2874717/pexels-photo-2874717.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "A standard basketball game consists of four quarters, typically 12 minutes each in the NBA.", img: "https://images.pexels.com/photos/2874717/pexels-photo-2874717.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "The three-point line was introduced to the NBA in the 1979-80 season.", img: "https://images.pexels.com/photos/2874717/pexels-photo-2874717.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Wilt Chamberlain holds the record for most points scored in a single NBA game: 100 points, in 1962.", img: "https://images.pexels.com/photos/2874717/pexels-photo-2874717.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Basketball became an official Olympic sport for men in 1936 and for women in 1976.", img: "https://images.pexels.com/photos/2874717/pexels-photo-2874717.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "A basketball hoop is set at a standard height of 10 feet (3.05 meters) in professional and college play.", img: "https://images.pexels.com/photos/2874717/pexels-photo-2874717.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "The FIBA Basketball World Cup is basketball's premier international tournament for national teams.", img: "https://images.pexels.com/photos/2874717/pexels-photo-2874717.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "India has a growing basketball scene, with the NBA opening academies to develop young talent.", img: "https://images.pexels.com/photos/2874717/pexels-photo-2874717.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Team defense, rebounding, and quick decision-making under pressure are core skills in competitive basketball.", img: "https://images.pexels.com/photos/2874717/pexels-photo-2874717.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ],

  "Software Developer": [
    { text: "Ada Lovelace is widely considered the first computer programmer, having written an algorithm in the 1840s.", img: "https://images.pexels.com/photos/12899156/pexels-photo-12899156.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "The term 'bug' in programming is said to trace back to a real moth causing a malfunction in an early computer in 1947.", img: "https://images.pexels.com/photos/12899156/pexels-photo-12899156.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Python, one of today's most widely used programming languages, was created by Guido van Rossum and released in 1991.", img: "https://images.pexels.com/photos/12899156/pexels-photo-12899156.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "JavaScript was created in just 10 days by Brendan Eich in 1995.", img: "https://images.pexels.com/photos/12899156/pexels-photo-12899156.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "The world's first website went live in 1991, created by Tim Berners-Lee.", img: "https://images.pexels.com/photos/12899156/pexels-photo-12899156.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "GitHub, used by millions of developers worldwide, hosts hundreds of millions of code repositories.", img: "https://images.pexels.com/photos/12899156/pexels-photo-12899156.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Many software teams use 'Agile' methodology, breaking projects into short, manageable sprints.", img: "https://images.pexels.com/photos/12899156/pexels-photo-12899156.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Debugging - finding and fixing errors in code - is one of the most time-consuming parts of a developer's job.", img: "https://images.pexels.com/photos/12899156/pexels-photo-12899156.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Open-source software, like the Linux operating system, is built and maintained by volunteer developers globally.", img: "https://images.pexels.com/photos/12899156/pexels-photo-12899156.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Many top tech companies conduct multiple rounds of coding interviews before hiring a developer.", img: "https://images.pexels.com/photos/12899156/pexels-photo-12899156.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ],

  "Cybersecurity Analyst": [
    { text: "The first computer virus, called 'Creeper,' appeared in the early 1970s as an experimental self-replicating program.", img: "https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "A 'zero-day' vulnerability is a security flaw that is exploited before developers have had a chance to fix it.", img: "https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Ethical hackers, also called 'white hat' hackers, are hired by companies to find security weaknesses before criminals do.", img: "https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Phishing - tricking people into revealing sensitive information via fake emails or websites - remains one of the most common cyberattack methods.", img: "https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "October is recognized internationally as Cybersecurity Awareness Month.", img: "https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Multi-factor authentication (MFA) significantly reduces the risk of accounts being compromised, even if a password is stolen.", img: "https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "India established CERT-In (Indian Computer Emergency Response Team) to respond to cybersecurity incidents nationally.", img: "https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Ransomware attacks, where hackers lock data and demand payment, have targeted hospitals, schools, and governments worldwide.", img: "https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Firewalls act as a barrier between a trusted internal network and untrusted external networks, like the internet.", img: "https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Cybersecurity analysts often use 'penetration testing' - simulating an attack - to find weaknesses before real hackers do.", img: "https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ],

  "Startup Founder": [
    { text: "Several of the world's biggest companies, including Apple and Amazon, started out of garages.", img: "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "A 'unicorn' startup refers to a privately-held startup valued at over $1 billion.", img: "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "An MVP (Minimum Viable Product) is a basic version of a product used to test an idea quickly with real users.", img: "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Venture capital (VC) funding helps many startups grow quickly by providing early-stage investment.", img: "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "India has one of the fastest-growing startup ecosystems in the world, with thousands of new startups launching every year.", img: "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Y Combinator, founded in 2005, is one of the world's most well-known startup accelerator programs.", img: "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "'Bootstrapping' means building a company using personal savings rather than outside investment.", img: "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Most startups face a high failure rate in their first few years, which is why resilience is considered a key founder trait.", img: "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Many successful founders significantly change ('pivot') their original idea before finding a model that works.", img: "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Mentorship and networking are frequently cited by founders as major factors in early-stage success.", img: "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ],

  "Lawyer": [
    { text: "The principle of 'innocent until proven guilty' is a foundational idea in most modern legal systems.", img: "https://images.pexels.com/photos/34817075/pexels-photo-34817075.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Lawyers must pass a bar examination in most countries before they're allowed to practice law.", img: "https://images.pexels.com/photos/34817075/pexels-photo-34817075.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "The Magna Carta, signed in 1215, laid early foundations for legal rights still referenced in some legal systems today.", img: "https://images.pexels.com/photos/34817075/pexels-photo-34817075.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Court proceedings are usually open to the public in most democracies, allowing citizens to observe trials.", img: "https://images.pexels.com/photos/34817075/pexels-photo-34817075.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Lawyers often specialize as litigators (who argue in court) or transactional lawyers (who handle contracts and deals).", img: "https://images.pexels.com/photos/34817075/pexels-photo-34817075.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Legal precedent means past court rulings can influence the outcome of similar future cases.", img: "https://images.pexels.com/photos/34817075/pexels-photo-34817075.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "'Pro bono' work refers to lawyers offering free legal services to people who can't afford them.", img: "https://images.pexels.com/photos/34817075/pexels-photo-34817075.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "India has one of the largest legal professions in the world, with over a million registered advocates.", img: "https://images.pexels.com/photos/34817075/pexels-photo-34817075.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Contracts, wills, criminal defense, and family law are just a few of law's many specializations.", img: "https://images.pexels.com/photos/34817075/pexels-photo-34817075.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Many countries require lawyers to complete continuing legal education to keep their license active.", img: "https://images.pexels.com/photos/34817075/pexels-photo-34817075.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ],

  "Corporate Lawyer": [
    { text: "Corporate lawyers often handle mergers, acquisitions, and business contracts worth millions or billions of dollars.", img: "https://images.pexels.com/photos/5387258/pexels-photo-5387258.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "'Due diligence' - carefully reviewing all documents before a deal closes - is a major part of a corporate lawyer's job.", img: "https://images.pexels.com/photos/5387258/pexels-photo-5387258.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Intellectual property law, a branch of corporate law, protects patents, trademarks, and copyrights.", img: "https://images.pexels.com/photos/5387258/pexels-photo-5387258.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Non-disclosure agreements (NDAs) are commonly drafted by corporate lawyers to protect confidential business information.", img: "https://images.pexels.com/photos/5387258/pexels-photo-5387258.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "'Compliance law' ensures companies follow the government regulations specific to their industry.", img: "https://images.pexels.com/photos/5387258/pexels-photo-5387258.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Corporate lawyers often work closely with a company's board of directors and senior executives.", img: "https://images.pexels.com/photos/5387258/pexels-photo-5387258.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Some large law firms operate offices in multiple countries to serve global corporate clients.", img: "https://images.pexels.com/photos/5387258/pexels-photo-5387258.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Corporate lawyers may specialize by industry - for example, technology, real estate, or finance.", img: "https://images.pexels.com/photos/5387258/pexels-photo-5387258.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Contract law is one of the oldest branches of law, with roots in ancient trade agreements.", img: "https://images.pexels.com/photos/5387258/pexels-photo-5387258.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Major business deals can take months or even years of negotiation led by corporate legal teams.", img: "https://images.pexels.com/photos/5387258/pexels-photo-5387258.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ],

  "School Teacher": [
    { text: "Teaching is one of the oldest professions in recorded human history.", img: "https://images.pexels.com/photos/8423020/pexels-photo-8423020.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "India observes National Teacher's Day on September 5th, the birthday of Dr. Sarvepalli Radhakrishnan.", img: "https://images.pexels.com/photos/8423020/pexels-photo-8423020.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "The word 'pedagogy' - the method and practice of teaching - comes from Ancient Greek.", img: "https://images.pexels.com/photos/8423020/pexels-photo-8423020.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Teachers often use a mix of visual, auditory, and hands-on methods to reach different types of learners.", img: "https://images.pexels.com/photos/8423020/pexels-photo-8423020.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Finland's education system, often praised internationally, gives teachers significant classroom autonomy.", img: "https://images.pexels.com/photos/8423020/pexels-photo-8423020.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Many countries require teachers to pursue ongoing professional development to keep their teaching license active.", img: "https://images.pexels.com/photos/8423020/pexels-photo-8423020.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Classroom management - keeping students engaged and focused - is considered one of the toughest skills for new teachers.", img: "https://images.pexels.com/photos/8423020/pexels-photo-8423020.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Many successful people across fields credit a specific teacher for inspiring their career path.", img: "https://images.pexels.com/photos/8423020/pexels-photo-8423020.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Teachers frequently prepare lessons and grade assignments outside official school hours.", img: "https://images.pexels.com/photos/8423020/pexels-photo-8423020.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Research consistently shows that effective teachers have a long-term impact on students' future outcomes.", img: "https://images.pexels.com/photos/8423020/pexels-photo-8423020.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ],

  "College Professor": [
    { text: "A PhD (Doctor of Philosophy) is typically required to become a full professor at most universities.", img: "https://images.pexels.com/photos/8199142/pexels-photo-8199142.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "'Publish or perish' is a well-known phrase describing the pressure on professors to regularly publish research.", img: "https://images.pexels.com/photos/8199142/pexels-photo-8199142.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Tenure is a job-protection status that many professors work years to earn, granting them academic freedom.", img: "https://images.pexels.com/photos/8199142/pexels-photo-8199142.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Professors often split their time between teaching, research, and writing academic papers.", img: "https://images.pexels.com/photos/8199142/pexels-photo-8199142.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Office hours - dedicated time for one-on-one meetings with students - are a standard part of university teaching.", img: "https://images.pexels.com/photos/8199142/pexels-photo-8199142.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Many top universities require professors to secure external research funding through competitive grants.", img: "https://images.pexels.com/photos/8199142/pexels-photo-8199142.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Professors frequently mentor graduate students working on their own research projects or theses.", img: "https://images.pexels.com/photos/8199142/pexels-photo-8199142.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Guest lectures by outside experts are a common feature in many university courses.", img: "https://images.pexels.com/photos/8199142/pexels-photo-8199142.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "University professors often serve on academic committees in addition to their teaching duties.", img: "https://images.pexels.com/photos/8199142/pexels-photo-8199142.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Major scientific breakthroughs, from penicillin to relativity, have often originated in university research led by professors.", img: "https://images.pexels.com/photos/8199142/pexels-photo-8199142.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ],

  "Police Officer": [
    { text: "Sir Robert Peel established the modern police force concept in London in 1829 - officers were nicknamed 'bobbies' after him.", img: "https://images.pexels.com/photos/23368428/pexels-photo-23368428.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Police officers typically undergo physical, written, and psychological evaluations before being hired.", img: "https://images.pexels.com/photos/23368428/pexels-photo-23368428.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "'Community policing' - officers building relationships with local residents - is a growing global approach.", img: "https://images.pexels.com/photos/23368428/pexels-photo-23368428.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Forensic science, including fingerprinting and DNA analysis, plays a major role in modern criminal investigations.", img: "https://images.pexels.com/photos/23368428/pexels-photo-23368428.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "India's police system is organized at the state level, with each state maintaining its own police force.", img: "https://images.pexels.com/photos/23368428/pexels-photo-23368428.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Police dogs (K-9 units) are specially trained to detect drugs and explosives or track missing persons.", img: "https://images.pexels.com/photos/23368428/pexels-photo-23368428.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Emergency police numbers vary by country - for example, 100 in India, 911 in the US, and 999 in the UK.", img: "https://images.pexels.com/photos/23368428/pexels-photo-23368428.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Many police departments have specialized units, such as cybercrime, anti-narcotics, and traffic police.", img: "https://images.pexels.com/photos/23368428/pexels-photo-23368428.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Police officers typically work rotating shifts to ensure round-the-clock coverage of their area.", img: "https://images.pexels.com/photos/23368428/pexels-photo-23368428.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Traffic control, crime prevention, and investigation are just a few of the many daily responsibilities of police officers.", img: "https://images.pexels.com/photos/23368428/pexels-photo-23368428.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ],

  "Detective": [
    { text: "Sir Arthur Conan Doyle's fictional detective Sherlock Holmes popularized many real forensic investigation techniques.", img: "https://images.pexels.com/photos/10464475/pexels-photo-10464475.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Fingerprint identification has been used in criminal investigations since the late 19th century.", img: "https://images.pexels.com/photos/10464475/pexels-photo-10464475.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Forensic science includes many specializations: ballistics, toxicology, DNA analysis, and digital forensics.", img: "https://images.pexels.com/photos/10464475/pexels-photo-10464475.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "India's Central Bureau of Investigation (CBI) handles high-profile and complex criminal cases nationally.", img: "https://images.pexels.com/photos/10464475/pexels-photo-10464475.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "DNA evidence can now be matched with extremely high accuracy, helping solve cases decades after they occurred ('cold cases').", img: "https://images.pexels.com/photos/10464475/pexels-photo-10464475.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Detectives often rely on 'chain of custody' - documenting exactly how evidence was handled - to keep it valid in court.", img: "https://images.pexels.com/photos/10464475/pexels-photo-10464475.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Criminal profiling, used to narrow down suspects based on behavior patterns, became prominent through FBI research in the 1970s.", img: "https://images.pexels.com/photos/10464475/pexels-photo-10464475.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Interrogation techniques have evolved significantly, with modern practice favoring rapport-building over pressure tactics.", img: "https://images.pexels.com/photos/10464475/pexels-photo-10464475.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Digital forensics - recovering evidence from phones and computers - is one of the fastest-growing fields in investigation.", img: "https://images.pexels.com/photos/10464475/pexels-photo-10464475.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "A detective's case file often includes witness statements, physical evidence, and a detailed timeline of events.", img: "https://images.pexels.com/photos/10464475/pexels-photo-10464475.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ],

  "Government Officer": [
    { text: "India's Civil Services Examination, conducted by the UPSC, is widely regarded as one of the most competitive exams in the world.", img: "https://images.pexels.com/photos/7821684/pexels-photo-7821684.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "The concept of a professional civil service, separate from politics, was formalized in Britain in the 1850s.", img: "https://images.pexels.com/photos/7821684/pexels-photo-7821684.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "District Magistrates (DMs) in India oversee law and order, revenue matters, and development in their district.", img: "https://images.pexels.com/photos/7821684/pexels-photo-7821684.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Civil servants are generally expected to remain politically neutral while carrying out their official duties.", img: "https://images.pexels.com/photos/7821684/pexels-photo-7821684.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "The IAS (Indian Administrative Service) is one of the most prestigious civil service cadres in India.", img: "https://images.pexels.com/photos/7821684/pexels-photo-7821684.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Government officers often play a key coordinating role during disaster management and emergency response.", img: "https://images.pexels.com/photos/7821684/pexels-photo-7821684.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "E-governance initiatives have enabled citizens in many countries to access government services online.", img: "https://images.pexels.com/photos/7821684/pexels-photo-7821684.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Civil servants frequently rotate through different departments and postings over the course of their careers.", img: "https://images.pexels.com/photos/7821684/pexels-photo-7821684.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Public grievance redressal - helping citizens resolve complaints - is a core responsibility for many government officers.", img: "https://images.pexels.com/photos/7821684/pexels-photo-7821684.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Civil servants implement government policy at the local, state, or national level, depending on their role.", img: "https://images.pexels.com/photos/7821684/pexels-photo-7821684.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ],

  "Business Executive": [
    { text: "A CEO (Chief Executive Officer) is typically the highest-ranking executive in a company.", img: "https://images.pexels.com/photos/6340621/pexels-photo-6340621.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "The term 'boardroom' refers to the room where a company's board of directors meets to make major decisions.", img: "https://images.pexels.com/photos/6340621/pexels-photo-6340621.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Mergers and acquisitions (M&A) are major strategies companies use to grow quickly by combining with or buying other businesses.", img: "https://images.pexels.com/photos/6340621/pexels-photo-6340621.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "The Fortune 500 is an annual list ranking the 500 largest companies in the United States by revenue.", img: "https://images.pexels.com/photos/6340621/pexels-photo-6340621.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) is a widely used framework for strategic business decisions.", img: "https://images.pexels.com/photos/6340621/pexels-photo-6340621.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Corporate social responsibility (CSR) has become an increasingly important focus for modern businesses.", img: "https://images.pexels.com/photos/6340621/pexels-photo-6340621.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Many executives began their careers in entry-level roles within the same industry they now lead.", img: "https://images.pexels.com/photos/6340621/pexels-photo-6340621.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Negotiation skills are consistently ranked among the most valuable skills for business executives.", img: "https://images.pexels.com/photos/6340621/pexels-photo-6340621.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Industry conferences and networking events are common ways executives build professional relationships.", img: "https://images.pexels.com/photos/6340621/pexels-photo-6340621.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { text: "Work-life balance has become a growing area of focus for business leaders, given the demanding nature of executive roles.", img: "https://images.pexels.com/photos/6340621/pexels-photo-6340621.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ]

};
