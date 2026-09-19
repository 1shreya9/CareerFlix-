// ===============================================
// storyData.js
// This file only stores DATA (no logic).
//
// NEW IN THIS VERSION:
// - Every episode now has its OWN background photo (bgImage),
//   so the scene visually changes as the story moves place to place.
// - Every episode has a "dialogues" array instead of one single
//   dialogue line. This means 2-3 characters (and the user's own
//   character) talk to each other BEFORE the choice appears -
//   just like a real conversation, not a one-line narration.
// - Every choice now also has a "reaction" line - what the character
//   says back AFTER you pick that choice, instead of a plain
//   feedback message.
// ===============================================

// ---- Character avatar images ----
// DiceBear is a free, open-source avatar generator (dicebear.com).
// Different "seed" text = different unique cartoon face.
const AV = {
  drAditi:  "https://api.dicebear.com/9.x/adventurer/svg?seed=DrAditi&backgroundColor=b6e3f4",
  kavita:   "https://api.dicebear.com/9.x/adventurer/svg?seed=NurseKavita&backgroundColor=ffd6a5",
  riya:     "https://api.dicebear.com/9.x/adventurer/svg?seed=RiyaIntern&backgroundColor=d0f4de",
  coach:    "https://api.dicebear.com/9.x/adventurer/svg?seed=CoachSharma&backgroundColor=c0f5d0",
  vikram:   "https://api.dicebear.com/9.x/adventurer/svg?seed=VikramTeam&backgroundColor=ffe5b4",
  arjun:    "https://api.dicebear.com/9.x/adventurer/svg?seed=ArjunPlayer&backgroundColor=cdeafe",

  // ---- NEW: IT genre characters ----
  ankit:    "https://api.dicebear.com/9.x/adventurer/svg?seed=AnkitLead&backgroundColor=c9c9ff",
  priya:    "https://api.dicebear.com/9.x/adventurer/svg?seed=PriyaDev&backgroundColor=ffd6e8",
  yash:     "https://api.dicebear.com/9.x/adventurer/svg?seed=YashIntern&backgroundColor=d6f5ff",

  // ---- NEW: Law genre characters ----
  ramesh:   "https://api.dicebear.com/9.x/adventurer/svg?seed=RameshAdvocate&backgroundColor=e0d6ff",
  neha:     "https://api.dicebear.com/9.x/adventurer/svg?seed=NehaLawyer&backgroundColor=fff3c4",
  aryan:    "https://api.dicebear.com/9.x/adventurer/svg?seed=AryanJunior&backgroundColor=d0e8ff",

  // ---- NEW: Teaching genre characters ----
  meena:    "https://api.dicebear.com/9.x/adventurer/svg?seed=MeenaMaam&backgroundColor=ffe0d6",
  suresh:   "https://api.dicebear.com/9.x/adventurer/svg?seed=SureshTeacher&backgroundColor=d6ffe0",
  anjali:   "https://api.dicebear.com/9.x/adventurer/svg?seed=AnjaliTeacher&backgroundColor=f0d6ff",

  // ---- NEW: Second Medical story (Paramedic) ----
  devSir:      "https://api.dicebear.com/9.x/adventurer/svg?seed=DevParamedic&backgroundColor=ffe6cc",
  meera:       "https://api.dicebear.com/9.x/adventurer/svg?seed=MeeraEMT&backgroundColor=cce6ff",
  kabir:       "https://api.dicebear.com/9.x/adventurer/svg?seed=KabirEMT&backgroundColor=e6ffcc",

  // ---- NEW: Second Sports story (Football) ----
  coachVerma:  "https://api.dicebear.com/9.x/adventurer/svg?seed=CoachVerma&backgroundColor=ffd6d6",
  rahul:       "https://api.dicebear.com/9.x/adventurer/svg?seed=RahulFootball&backgroundColor=d6ffe6",
  kiran:       "https://api.dicebear.com/9.x/adventurer/svg?seed=KiranFootball&backgroundColor=d6f0ff",

  // ---- NEW: Second IT story (Startup) ----
  rajeshSir:   "https://api.dicebear.com/9.x/adventurer/svg?seed=RajeshInvestor&backgroundColor=e6d6ff",
  simran:      "https://api.dicebear.com/9.x/adventurer/svg?seed=SimranCofounder&backgroundColor=ffe6f0",
  arnav:       "https://api.dicebear.com/9.x/adventurer/svg?seed=ArnavFounder&backgroundColor=d6fff0",

  // ---- NEW: Second Law story (Corporate) ----
  kapoorSir:   "https://api.dicebear.com/9.x/adventurer/svg?seed=KapoorSenior&backgroundColor=f0e6d6",
  isha:        "https://api.dicebear.com/9.x/adventurer/svg?seed=IshaLawyer&backgroundColor=d6e6ff",
  rohanLaw:    "https://api.dicebear.com/9.x/adventurer/svg?seed=RohanCorporate&backgroundColor=fff0d6",

  // ---- NEW: Second Teaching story (College) ----
  professorRao:"https://api.dicebear.com/9.x/adventurer/svg?seed=ProfessorRao&backgroundColor=e6ffd6",
  divya:       "https://api.dicebear.com/9.x/adventurer/svg?seed=DivyaProfessor&backgroundColor=ffd6e6",
  karan:       "https://api.dicebear.com/9.x/adventurer/svg?seed=KaranProfessor&backgroundColor=d6d6ff",

  // ---- NEW: Police story ----
  inspectorVerma: "https://api.dicebear.com/9.x/adventurer/svg?seed=InspectorVerma&backgroundColor=ccd9ff",
  pooja:          "https://api.dicebear.com/9.x/adventurer/svg?seed=PoojaConstable&backgroundColor=ffe0cc",
  ishaan:         "https://api.dicebear.com/9.x/adventurer/svg?seed=IshaanPolice&backgroundColor=cceeff",

  // ---- NEW: Government Job story ----
  dmSahab: "https://api.dicebear.com/9.x/adventurer/svg?seed=DMSahab&backgroundColor=e0ffcc",
  neeta:   "https://api.dicebear.com/9.x/adventurer/svg?seed=NeetaOfficer&backgroundColor=fff0cc",
  meher:   "https://api.dicebear.com/9.x/adventurer/svg?seed=MeherOfficer&backgroundColor=f0ccff",

  // ---- NEW: Business story ----
  malhotra: "https://api.dicebear.com/9.x/adventurer/svg?seed=MalhotraCEO&backgroundColor=ffccd9",
  farhan:   "https://api.dicebear.com/9.x/adventurer/svg?seed=FarhanColleague&backgroundColor=ccffe0",
  naina:    "https://api.dicebear.com/9.x/adventurer/svg?seed=NainaBusiness&backgroundColor=e0ccff",

  // ---- Generic reusable avatar for minor one-time characters
  // (shopkeepers, clients, villagers, etc.) across any story ----
  citizen: "https://api.dicebear.com/9.x/adventurer/svg?seed=GenericCitizen&backgroundColor=dddddd",

  // ---- NEW: Pilot story (Aviation) ----
  captMehta:   "https://api.dicebear.com/9.x/adventurer/svg?seed=CaptainMehtaPilot&backgroundColor=b6d7ff",
  zoyaPilot:   "https://api.dicebear.com/9.x/adventurer/svg?seed=ZoyaCoPilot&backgroundColor=ffd6ec",
  aaravPilot:  "https://api.dicebear.com/9.x/adventurer/svg?seed=AaravPilotTrainee&backgroundColor=d6e8ff",
  kunalPilot:  "https://api.dicebear.com/9.x/adventurer/svg?seed=KunalDispatchFriend&backgroundColor=c9f7d1",

  // ---- NEW: Air Force story (Defence) ----
  wingCmdrArora: "https://api.dicebear.com/9.x/adventurer/svg?seed=WingCommanderArora&backgroundColor=cde0ff",
  foRakesh:      "https://api.dicebear.com/9.x/adventurer/svg?seed=FlyingOfficerRakesh&backgroundColor=ffe0b3",
  dhruvAF:       "https://api.dicebear.com/9.x/adventurer/svg?seed=DhruvAirForceCadet&backgroundColor=d6e8ff",
  yashADC:       "https://api.dicebear.com/9.x/adventurer/svg?seed=YashFighterController&backgroundColor=c9f7d1",

  // ---- NEW: Army story (Defence) ----
  colRanawat:  "https://api.dicebear.com/9.x/adventurer/svg?seed=ColonelRanawat&backgroundColor=c9d9b3",
  majorTara:   "https://api.dicebear.com/9.x/adventurer/svg?seed=MajorTaraArmy&backgroundColor=ffe0cc",
  yuvraj:      "https://api.dicebear.com/9.x/adventurer/svg?seed=YuvrajArmyCadet&backgroundColor=d6e8ff",
  devSignals:  "https://api.dicebear.com/9.x/adventurer/svg?seed=DevSignalsOfficer&backgroundColor=c9f7d1",

  // ---- NEW: Nurse story ----
  sisterGrace: "https://api.dicebear.com/9.x/adventurer/svg?seed=SisterGrace&backgroundColor=ffe0ec",
  nurseHeena:  "https://api.dicebear.com/9.x/adventurer/svg?seed=NurseHeena&backgroundColor=e0f7ff",
  tanvi:       "https://api.dicebear.com/9.x/adventurer/svg?seed=TanviNurse&backgroundColor=fff0d6",

  // ---- NEW: Basketball story ----
  coachDsouza: "https://api.dicebear.com/9.x/adventurer/svg?seed=CoachDsouza&backgroundColor=ffdca8",
  rohit:       "https://api.dicebear.com/9.x/adventurer/svg?seed=RohitBball&backgroundColor=c8f5d0",
  zara:        "https://api.dicebear.com/9.x/adventurer/svg?seed=ZaraBball&backgroundColor=d6e8ff",

  // ---- NEW: Cybersecurity story ----
  raviSir:     "https://api.dicebear.com/9.x/adventurer/svg?seed=RaviSirSec&backgroundColor=cdeaff",
  ananya:      "https://api.dicebear.com/9.x/adventurer/svg?seed=AnanyaSec&backgroundColor=ffe6cc",
  devansh:     "https://api.dicebear.com/9.x/adventurer/svg?seed=DevanshSec&backgroundColor=d6ffe6",

  // ---- NEW: Public Prosecutor story ----
  advocateRane:"https://api.dicebear.com/9.x/adventurer/svg?seed=AdvocateRane&backgroundColor=e6d6ff",
  sameer:      "https://api.dicebear.com/9.x/adventurer/svg?seed=SameerJunior&backgroundColor=fff3c4",
  diya:        "https://api.dicebear.com/9.x/adventurer/svg?seed=DiyaProsecutor&backgroundColor=d0e8ff",

  // ---- NEW: Special Education Teacher story ----
  principalFernandes: "https://api.dicebear.com/9.x/adventurer/svg?seed=PrincipalFernandes&backgroundColor=ffe0d6",
  leena:              "https://api.dicebear.com/9.x/adventurer/svg?seed=LeenaTeacher&backgroundColor=d6ffe0",
  sana:                "https://api.dicebear.com/9.x/adventurer/svg?seed=SanaTeacher&backgroundColor=f0d6ff",

  // ---- NEW: Detective story ----
  inspectorRathore: "https://api.dicebear.com/9.x/adventurer/svg?seed=InspectorRathore&backgroundColor=d6d6ff",
  iqbal:            "https://api.dicebear.com/9.x/adventurer/svg?seed=IqbalConstable&backgroundColor=ffe6d6",
  vivaan:           "https://api.dicebear.com/9.x/adventurer/svg?seed=VivaanDetective&backgroundColor=d6f0ff",

  // ---- NEW: Bank PO story ----
  managerMehta: "https://api.dicebear.com/9.x/adventurer/svg?seed=ManagerMehta&backgroundColor=e0ffcc",
  priyanka:     "https://api.dicebear.com/9.x/adventurer/svg?seed=PriyankaBank&backgroundColor=fff0cc",
  aditya:       "https://api.dicebear.com/9.x/adventurer/svg?seed=AdityaBank&backgroundColor=f0ccff",

  // ---- NEW: Chartered Accountant story ----
  caRajivSir: "https://api.dicebear.com/9.x/adventurer/svg?seed=CARajivSir&backgroundColor=ffccd9",
  kavya:      "https://api.dicebear.com/9.x/adventurer/svg?seed=KavyaTrainee&backgroundColor=ccffe0",
  ritika:     "https://api.dicebear.com/9.x/adventurer/svg?seed=RitikaCA&backgroundColor=e0ccff"
};

const storiesData = {

  // ==================================================
  // STORY 1: MEDICAL - "Pulse Point"
  // Characters: Dr. Aditi (mentor), Nurse Kavita, Riya (You)
  // ==================================================
  doctor: {
    title: "Pulse Point",
    genre: "Medical",
    youDefaultName: "Riya",
    role: "Doctor",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=RiyaIntern&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=RiyaIntern&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/16571732/pexels-photo-16571732.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Step into the shoes of a young intern doctor and make life-or-death decisions in a busy hospital emergency ward.",
    narration: "Raat ke 9 baje, Emergency Ward ki roshni tez aur clinical hai. Riya apni duty ke sirf kuch hafton baad hi yahan khadi hai, jab ek patient chest pain ke saath rush kiya jaata hai - aur agle kuch ghante uski training ki sabse badi pariksha ban jaate hain.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "Emergency Ward",
        bgImage: "https://images.pexels.com/photos/16571732/pexels-photo-16571732.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Emergency Ward, raat ke 9 baje. Ek patient chest pain ke saath rush kiya jaata hai.",
        dialogues: [
          { speaker: "Nurse Kavita", avatar: AV.kavita, text: "Dr. Aditi! Ek patient aaya hai, chest pain bata raha hai, bahut ghabraya hua hai!" },
          { speaker: "Dr. Aditi", avatar: AV.drAditi, text: "Vitals check kiye? BP, pulse, oxygen level?" },
          { speaker: "Nurse Kavita", avatar: AV.kavita, text: "Nahi ma'am, abhi seedha aapke paas le aayi." },
          { speaker: "Dr. Aditi", avatar: AV.drAditi, text: "Riya, tu batao - is case mein sabse pehle kya karegi?" },
          { speaker: "Riya (You)", avatar: AV.riya, text: "Main sochti hoon... emergency mein sabse pehle kya priority honi chahiye?" }
        ],
        choices: [
          { text: "Turant patient ka ECG aur vitals check karo", correct: true,
            skills: { technical: 3, communication: 0, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Dr. Aditi", avatar: AV.drAditi, text: "Shabaash Riya! Vitals aur ECG hi sabse pehla kadam hota hai, isi se pata chalta hai case kitna serious hai." } },
          { text: "Pehle patient ke family se poora history poochho", correct: false,
            skills: { technical: 0, communication: 2, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Dr. Aditi", avatar: AV.drAditi, text: "Riya, history important hai lekin baad mein bhi le sakte hain. Emergency mein pehle patient ko stabilize karna padta hai." } }
        ],
        betterAdvice: "Emergency case mein pehle vitals/ECG check karo, history baad mein lo."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "Hospital Corridor",
        bgImage: "https://images.pexels.com/photos/4094199/pexels-photo-4094199.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Reports aa chuki hain, dono doctor corridor mein chal rahe hain, lekin symptoms thoda confusing lag rahe hain.",
        dialogues: [
          { speaker: "Dr. Aditi", avatar: AV.drAditi, text: "Riya, reports dekhi? Kuch samajh aaya?" },
          { speaker: "Riya (You)", avatar: AV.riya, text: "Ma'am, ECG normal hai lekin blood report mein thoda ulta pattern hai. Main confuse ho gayi hoon." },
          { speaker: "Nurse Kavita", avatar: AV.kavita, text: "Aisa pehle bhi hua tha ek case mein, yaad hai ma'am?" },
          { speaker: "Dr. Aditi", avatar: AV.drAditi, text: "Haan, par har patient alag hota hai Kavita. Riya, ab tu decide kar - akele age badhegi ya kisi se salah legi?" }
        ],
        choices: [
          { text: "Senior doctor se dobara consult karo", correct: true,
            skills: { technical: 1, communication: 2, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Dr. Aditi", avatar: AV.drAditi, text: "Yehi sahi soch hai. Confusing case mein doosri opinion lena kabhi galat nahi hota, isse patient safe rehta hai." } },
          { text: "Apne experience par bharosa karke khud decide karlo", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 2 },
            reaction: { speaker: "Dr. Aditi", avatar: AV.drAditi, text: "Confidence achi baat hai Riya, lekin confusing symptoms mein akele risk lena sahi nahi. Hamesha doosri raay zaroor lo." } }
        ],
        betterAdvice: "Jab reports confusing ho, senior doctor se second opinion lena chahiye."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "Waiting Room",
        bgImage: "https://images.pexels.com/photos/8459996/pexels-photo-8459996.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Patient ka family member waiting room mein bahut ghabraya hua hai aur baar-baar update maang raha hai.",
        dialogues: [
          { speaker: "Nurse Kavita", avatar: AV.kavita, text: "Riya, patient ke bhai bahar bahut pareshan hai, teesri baar puchhne aaye hain." },
          { speaker: "Riya (You)", avatar: AV.riya, text: "Unhe kya bataun? Reports pura clear bhi nahi hai abhi." },
          { speaker: "Dr. Aditi", avatar: AV.drAditi, text: "Yehi asli test hai Riya - family ko sach bhi batana hai aur unhe tootne bhi nahi dena." }
        ],
        choices: [
          { text: "Shaant aawaz mein sahi jaankari do, jitni pakki ho utni hi batao", correct: true,
            skills: { technical: 0, communication: 3, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Dr. Aditi", avatar: AV.drAditi, text: "Perfect Riya! Calm aur honest communication hi family ka trust banata hai." } },
          { text: "Unse bol do 'sab theek ho jayega', abhi baat karne ka time nahi", correct: false,
            skills: { technical: 0, communication: 1, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Dr. Aditi", avatar: AV.drAditi, text: "Riya, jhooti tasalli dena sahi nahi hai. Baad mein agar kuch galat hua toh unka trust hamesha ke liye toot sakta hai." } }
        ],
        betterAdvice: "Family ko hamesha sach aur clear jaankari calmly deni chahiye."
      },

      // ---------- EPISODE 4 ----------
      {
        location: "Operation Theatre",
        bgImage: "https://images.pexels.com/photos/6291246/pexels-photo-6291246.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Patient ki condition achanak serious ho gayi hai, turant operation ka decision lena hai.",
        dialogues: [
          { speaker: "Dr. Aditi", avatar: AV.drAditi, text: "Riya, BP gir raha hai! Time bahut kam hai." },
          { speaker: "Nurse Kavita", avatar: AV.kavita, text: "OT ready karwaun ma'am?" },
          { speaker: "Dr. Aditi", avatar: AV.drAditi, text: "Riya, decision jaldi lena hoga - bata, kya karein?" }
        ],
        choices: [
          { text: "Haan, turant team ko alert karo aur OT prepare karwao", correct: true,
            skills: { technical: 2, communication: 0, problemSolving: 0, leadership: 2 },
            reaction: { speaker: "Dr. Aditi", avatar: AV.drAditi, text: "Sahi decision Riya! Aise situation mein speed hi jaan bacha sakti hai." } },
          { text: "Thoda aur wait karo, shayad medicine se theek ho jaaye", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 1, leadership: 0 },
            reaction: { speaker: "Dr. Aditi", avatar: AV.drAditi, text: "Riya, critical case mein zyada wait karna risky ho sakta hai. Aise waqt turant action lena padta hai." } }
        ],
        betterAdvice: "Critical emergency mein jaldi decision lena hi sahi hota hai, delay nahi."
      },

      // ---------- EPISODE 5 ----------
      {
        location: "Doctor's Cabin",
        bgImage: "https://images.pexels.com/photos/16571732/pexels-photo-16571732.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Operation successful raha. Raat bahut ho chuki hai aur Riya poore din se continuous duty par hai.",
        dialogues: [
          { speaker: "Dr. Aditi", avatar: AV.drAditi, text: "Bahut badhiya kaam kiya aaj Riya. Ab tu bahut thak chuki hai." },
          { speaker: "Riya (You)", avatar: AV.riya, text: "Haan ma'am, thoda thakan mehsoos ho rahi hai, lekin ek aur patient bhi wait kar raha hai." },
          { speaker: "Nurse Kavita", avatar: AV.kavita, text: "Riya, apna bhi khayal rakhna zaroori hai." }
        ],
        choices: [
          { text: "Thodi der rest lo aur agle patient ke liye fresh ho jao", correct: true,
            skills: { technical: 0, communication: 0, problemSolving: 1, leadership: 2 },
            reaction: { speaker: "Dr. Aditi", avatar: AV.drAditi, text: "Bilkul sahi Riya! Rest lena bhi ek doctor ki zimmedari hai, taaki agla patient bhi sahi tarike se treat ho." } },
          { text: "Bina rest kiye seedhe agle patient ko dekhne chali jao", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Dr. Aditi", avatar: AV.drAditi, text: "Riya, thakan mein kaam karna mistake ka risk badha deta hai. Thoda rukna zaroori tha." } }
        ],
        betterAdvice: "Thakan mein kaam karte rehna galti ka risk badhata hai, thoda rest zaroori hai."
      }
    ]
  },

  // ==================================================
  // STORY 2: SPORTS - "The Final Over"
  // Characters: Coach Sharma (mentor), Vikram (teammate), Arjun (You)
  // ==================================================
  cricketer: {
    title: "The Final Over",
    genre: "Sports",
    youDefaultName: "Arjun",
    role: "Cricketer",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=ArjunPlayer&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=ArjunPlayerF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/29881319/pexels-photo-29881319.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Live the journey of an aspiring cricketer, from selection trials to a nail-biting final over.",
    narration: "Dhool bhare maidan par district-level selection trial shuru hone wala hai. Arjun ke haath mein bat hai, dil mein dar aur ummeed dono - ek achha selection uski poori cricket career ka rukh badal sakta hai.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "Selection Trial Ground",
        bgImage: "https://images.pexels.com/photos/3718433/pexels-photo-3718433.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "District level selection trial chal raha hai. Arjun ki batting ki baari aane wali hai.",
        dialogues: [
          { speaker: "Vikram (Teammate)", avatar: AV.vikram, text: "Arjun, nervous lag raha hai kya? Sab tujhe hi dekh rahe hain." },
          { speaker: "Arjun (You)", avatar: AV.arjun, text: "Thoda toh haath kaanp rahe hain yaar, itne selectors saamne baithe hain." },
          { speaker: "Coach Sharma", avatar: AV.coach, text: "Arjun, idhar aa. Nervous hona normal hai, par yaad rakh - practice wahi karo jo roz karte ho." },
          { speaker: "Coach Sharma", avatar: AV.coach, text: "Bata, kaisi approach rakhega is innings mein?" }
        ],
        choices: [
          { text: "Normal tareeke se apna natural game khelo", correct: true,
            skills: { technical: 3, communication: 0, problemSolving: 1, leadership: 0 },
            reaction: { speaker: "Coach Sharma", avatar: AV.coach, text: "Yehi sahi soch hai Arjun! Pressure mein bhi apna natural game khelna best strategy hoti hai." } },
          { text: "Selectors ko impress karne ke liye risky shots lagao", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Coach Sharma", avatar: AV.coach, text: "Arjun, overconfidence mein risky shots lagana wicket gawa sakta hai. Selectors consistency dekhte hain, sirf ek bada shot nahi." } }
        ],
        betterAdvice: "Trial mein apna natural, practiced game khelna chahiye, extra risk nahi lena chahiye."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "Match Pitch",
        bgImage: "https://images.pexels.com/photos/4770720/pexels-photo-4770720.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Ek fast bowler bahut tez gendbaazi kar raha hai, Arjun thoda dar raha hai.",
        dialogues: [
          { speaker: "Vikram (Teammate)", avatar: AV.vikram, text: "Yeh bowler toh sabko dara raha hai aaj! Sambhal ke Arjun." },
          { speaker: "Arjun (You)", avatar: AV.arjun, text: "Sach mein Vikram, itni speed dekh kar thoda dar lag raha hai." },
          { speaker: "Coach Sharma", avatar: AV.coach, text: "Arjun, dar lagna normal hai. Bata, kaise face karega isse?" }
        ],
        choices: [
          { text: "Foot work sahi rakho aur ball ko dhyan se dekho", correct: true,
            skills: { technical: 3, communication: 0, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Coach Sharma", avatar: AV.coach, text: "Bahut badhiya Arjun! Fear ko control karke technique par focus karna hi asli skill hai." } },
          { text: "Crease chhod kar peeche hat jao taki ball na lage", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Coach Sharma", avatar: AV.coach, text: "Arjun, peeche hatne se timing aur control dono bigad jaate hain. Crease par sthir rehna zaroori hai." } }
        ],
        betterAdvice: "Fast bowling ka fear control karke sahi footwork aur focus rakhna chahiye."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "Team Dressing Room",
        bgImage: "https://images.pexels.com/photos/8422410/pexels-photo-8422410.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Ek senior player Arjun ki strategy se disagree kar raha hai, dressing room mein bahas ho jaati hai.",
        dialogues: [
          { speaker: "Vikram (Teammate)", avatar: AV.vikram, text: "Arjun, senior log tere plan se khush nahi hain, bol rahe hain approach galat hai." },
          { speaker: "Arjun (You)", avatar: AV.arjun, text: "Par maine socha tha yeh strategy kaam karegi... ab kya karu?" },
          { speaker: "Coach Sharma", avatar: AV.coach, text: "Arjun, team sport mein aise moments aate hain. Kaise handle karega isse?" }
        ],
        choices: [
          { text: "Shaant reh kar apni baat samjhao aur team ke decision ko follow karo", correct: true,
            skills: { technical: 0, communication: 2, problemSolving: 0, leadership: 2 },
            reaction: { speaker: "Coach Sharma", avatar: AV.coach, text: "Perfect Arjun! Calm rehna aur team ka decision maanna hi ek achhe player ki nishaani hai." } },
          { text: "Apni baat par ade raho aur bahas badha do", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Coach Sharma", avatar: AV.coach, text: "Arjun, match se pehle bahas badhana team ka focus bigaad sakta hai. Isse bachna chahiye." } }
        ],
        betterAdvice: "Team ke saath conflict ho toh shaant rehkar baat samjhani chahiye, bahas nahi badhani chahiye."
      },

      // ---------- EPISODE 4 ----------
      {
        location: "Practice Nets",
        bgImage: "https://images.pexels.com/photos/8422410/pexels-photo-8422410.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Practice ke dauraan Arjun ke pair mein halki chot lag jaati hai, lekin important match kal hai.",
        dialogues: [
          { speaker: "Arjun (You)", avatar: AV.arjun, text: "Aah! Pair mein kuch ho gaya, thoda dard ho raha hai." },
          { speaker: "Vikram (Teammate)", avatar: AV.vikram, text: "Arjun theek hai na? Kal toh match bhi hai!" },
          { speaker: "Coach Sharma", avatar: AV.coach, text: "Chot lagi hai toh ise halke mein mat le Arjun. Bata, ab kya karega?" }
        ],
        choices: [
          { text: "Physio ko dikhao aur unki advice follow karo", correct: true,
            skills: { technical: 0, communication: 0, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "Coach Sharma", avatar: AV.coach, text: "Sahi kaam kiya Arjun! Chot ko ignore karna future ke liye risky ho sakta tha." } },
          { text: "Chot ignore karke kal seedha match khelne chale jao", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Coach Sharma", avatar: AV.coach, text: "Arjun, bina check kiye khelna chot ko aur bhi serious bana sakta hai. Pehle physio se dikhwana chahiye tha." } }
        ],
        betterAdvice: "Chot lagne par pehle physio/doctor se check karwana chahiye, ignore nahi karna chahiye."
      },

      // ---------- EPISODE 5 ----------
      {
        location: "Stadium - Final Over",
        bgImage: "https://images.pexels.com/photos/29881319/pexels-photo-29881319.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Final match ka aakhri over hai, jeetne ke liye 6 run chahiye, Arjun crease par hai.",
        dialogues: [
          { speaker: "Vikram (Teammate)", avatar: AV.vikram, text: "Arjun, yehi moment hai! Poora stadium tujhe dekh raha hai." },
          { speaker: "Arjun (You)", avatar: AV.arjun, text: "Dil zor se dhadak raha hai... par main taiyaar hoon." },
          { speaker: "Coach Sharma", avatar: AV.coach, text: "Arjun, yaad rakh jo maine sikhaya tha. Pressure mein kaise khelega?" }
        ],
        choices: [
          { text: "Ek-ek ball par focus karo, poore over ke baare mein na socho", correct: true,
            skills: { technical: 0, communication: 0, problemSolving: 3, leadership: 2 },
            reaction: { speaker: "Coach Sharma", avatar: AV.coach, text: "Excellent mindset Arjun! Pressure mein ek time par ek hi ball par focus karna best approach hoti hai." } },
          { text: "Pehli hi ball par bada shot lagane ki koshish karo", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Coach Sharma", avatar: AV.coach, text: "Arjun, jaldi mein bada risk lena wicket gawa sakta hai, jabki time abhi bacha hua tha." } }
        ],
        betterAdvice: "Pressure situation mein ek-ek ball par focus karna chahiye, jaldi mein bada risk nahi lena chahiye."
      }
    ]
  },

  // ==================================================
  // STORY 3: IT - "Code Red"
  // Characters: Ankit Sir (Tech Lead), Priya (teammate), Yash (You)
  // ==================================================
  it: {
    title: "Code Red",
    genre: "IT",
    youDefaultName: "Yash",
    role: "Software Developer",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=YashIntern&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=YashInternF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/12899156/pexels-photo-12899156.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Join a software team battling bugs, deadlines, and tricky teammates in your very first tech job.",
    narration: "Yash apna laptop kholta hai office ke pehle din, ID card abhi bhi naya-naya chamak raha hai. Lekin welcome hote hi Ankit Sir ek purana, uljha hua bug uske haath thama dete hain - aur ghadi tick-tick karne lagti hai.",

    episodes: [
      {
        location: "Office - Day 1",
        bgImage: "https://images.pexels.com/photos/12899156/pexels-photo-12899156.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Yash ka pehla din hai office mein. Ankit Sir usse ek purana bug fix karne ke liye deta hai.",
        dialogues: [
          { speaker: "Ankit Sir", avatar: AV.ankit, text: "Yash, welcome to the team! Yeh ek chhota bug hai legacy code mein, try karo fix karne." },
          { speaker: "Priya (Teammate)", avatar: AV.priya, text: "Yash, yeh code kaafi purana hai, comments bhi nahi hain isme." },
          { speaker: "Yash (You)", avatar: AV.yash, text: "Samajh nahi aa raha code kya kar raha hai... seedha fix try karu ya pehle samjhu?" }
        ],
        choices: [
          { text: "Pehle poora code padhkar samjho, phir fix karo", correct: true,
            skills: { technical: 3, communication: 0, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Ankit Sir", avatar: AV.ankit, text: "Bahut badhiya Yash! Bina samjhe fix karne se naye bugs aa sakte hain. Samajhkar kaam karna sahi approach hai." } },
          { text: "Bina samjhe seedha guess karke code badal do", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Ankit Sir", avatar: AV.ankit, text: "Yash, bina samjhe code change karna risky hota hai, isse naye bugs create ho sakte hain." } }
        ],
        betterAdvice: "Naya code padhte waqt pehle poora logic samajhna chahiye, seedha guess karke change nahi karna chahiye."
      },
      {
        location: "Team Meeting",
        bgImage: "https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Project ki deadline paas hai. Team meeting mein pressure saaf dikh raha hai.",
        dialogues: [
          { speaker: "Priya (Teammate)", avatar: AV.priya, text: "Yash, humare paas sirf 2 din bache hain aur kaafi kaam baaki hai." },
          { speaker: "Ankit Sir", avatar: AV.ankit, text: "Hume decide karna hai - jaldi mein corners cut karein ya client se thoda time maangein?" },
          { speaker: "Yash (You)", avatar: AV.yash, text: "Sir, agar hum jaldi mein testing skip kar denge toh bugs reh sakte hain..." }
        ],
        choices: [
          { text: "Client ko sach batao aur thoda extra time maango", correct: true,
            skills: { technical: 0, communication: 3, problemSolving: 0, leadership: 2 },
            reaction: { speaker: "Ankit Sir", avatar: AV.ankit, text: "Sahi socha Yash. Client ko honestly batana behtar hai, isse quality bhi maintain rehti hai aur trust bhi." } },
          { text: "Testing skip karke jaldi jaldi deadline complete karo", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Ankit Sir", avatar: AV.ankit, text: "Yash, testing skip karna risky hai - launch ke baad bade bugs aa sakte hain jo aur zyada nuksan karenge." } }
        ],
        betterAdvice: "Deadline pressure mein bhi testing skip nahi karni chahiye, zaroorat ho toh honestly extra time maangna chahiye."
      },
      {
        location: "Late Night Debugging",
        bgImage: "https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Client demo se ek raat pehle, ek critical bug mil jaata hai jo poora feature crash kar raha hai.",
        dialogues: [
          { speaker: "Priya (Teammate)", avatar: AV.priya, text: "Yash! Demo se pehle yeh bug mila, poora app crash ho raha hai!" },
          { speaker: "Yash (You)", avatar: AV.yash, text: "Itni raat ko itna bada bug... sabse pehle kya karu?" },
          { speaker: "Ankit Sir", avatar: AV.ankit, text: "Shaant raho Yash. Panic karne se kuch nahi hoga. Systematically dhoondo error kahan se aa raha hai." }
        ],
        choices: [
          { text: "Console logs aur error messages dhyan se check karo", correct: true,
            skills: { technical: 2, communication: 0, problemSolving: 3, leadership: 0 },
            reaction: { speaker: "Ankit Sir", avatar: AV.ankit, text: "Perfect approach Yash! Error message hi sabse pehla clue hota hai, isse debugging fast hoti hai." } },
          { text: "Ghabra kar poora code se poora part delete kar do", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Ankit Sir", avatar: AV.ankit, text: "Yash, panic mein code delete karna aur bade problems create kar sakta hai. Shaant rehkar debug karna zaroori hai." } }
        ],
        betterAdvice: "Critical bug aane par panic karne ke bajaye error logs dhyan se check karke systematically debug karna chahiye."
      },
      {
        location: "Office Discussion",
        bgImage: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Priya aur Yash ek naye feature ko banane ke tareeke par disagree karte hain.",
        dialogues: [
          { speaker: "Priya (Teammate)", avatar: AV.priya, text: "Yash, mujhe lagta hai tumhara approach bahut complex hai, simple tareeka hai iska." },
          { speaker: "Yash (You)", avatar: AV.yash, text: "Par mera approach future mein scale karne mein easy hoga..." },
          { speaker: "Ankit Sir", avatar: AV.ankit, text: "Dono ki baat sahi ho sakti hai. Aise disagreement ko kaise handle karoge?" }
        ],
        choices: [
          { text: "Dono approach ke pros/cons list karke team se discuss karo", correct: true,
            skills: { technical: 0, communication: 3, problemSolving: 0, leadership: 2 },
            reaction: { speaker: "Ankit Sir", avatar: AV.ankit, text: "Excellent Yash! Data aur logic ke saath discussion karna best tareeka hai decision lene ka, na ki ego se." } },
          { text: "Apni baat par ade raho, Priya ki baat ignore karo", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Ankit Sir", avatar: AV.ankit, text: "Yash, team mein ego se decision lena sahi nahi. Doosron ki baat sunna bhi utna hi zaroori hai." } }
        ],
        betterAdvice: "Team mein technical disagreement ho toh dono options ko discuss karke decide karna chahiye, ego se nahi."
      },
      {
        location: "Office - Launch Day",
        bgImage: "https://images.pexels.com/photos/12899156/pexels-photo-12899156.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Project successfully launch ho gaya hai. Yash poore hafte se late night kaam kar raha tha.",
        dialogues: [
          { speaker: "Ankit Sir", avatar: AV.ankit, text: "Congratulations Yash! Launch successful raha. Tu bahut thak gaya hai is hafte." },
          { speaker: "Yash (You)", avatar: AV.yash, text: "Haan sir, thoda tired hoon, lekin agla project bhi jaldi start hone wala hai." },
          { speaker: "Priya (Teammate)", avatar: AV.priya, text: "Yash, apna health bhi important hai, burnout mat lena." }
        ],
        choices: [
          { text: "Ek din ki chutti lo aur fresh hokar wapas aao", correct: true,
            skills: { technical: 0, communication: 0, problemSolving: 1, leadership: 2 },
            reaction: { speaker: "Ankit Sir", avatar: AV.ankit, text: "Bilkul sahi Yash! Rest lena productivity ke liye bhi zaroori hai, isse burnout nahi hota." } },
          { text: "Bina rest kiye seedhe agle project mein lag jao", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Ankit Sir", avatar: AV.ankit, text: "Yash, bina rest kiye continuously kaam karna burnout ka risk badhata hai, jo long term mein nuksaandaayak hai." } }
        ],
        betterAdvice: "Bade launch ke baad thoda rest lena chahiye, warna burnout ka risk badh jaata hai."
      }
    ]
  },

  // ==================================================
  // STORY 4: LAW - "Truth on Trial"
  // Characters: Ramesh Sir (Senior Advocate), Neha (colleague), Aryan (You)
  // ==================================================
  law: {
    title: "Truth on Trial",
    genre: "Law",
    youDefaultName: "Aryan",
    role: "Lawyer",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=AryanJunior&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=AryanJuniorF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/34817075/pexels-photo-34817075.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Take on your first case as a junior lawyer and navigate ethics, courtroom pressure, and client trust.",
    narration: "Aryan ki mez par ek naya case file khuli hai. Client saamne baithi apni poori kahani sunaa rahi hai - aadhi sach, aadha darr mein chhupa - aur Aryan ko decide karna hai kis taraf khada hona hai.",

    episodes: [
      {
        location: "Law Office - Client Meeting",
        bgImage: "https://images.pexels.com/photos/8112166/pexels-photo-8112166.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Aryan ka naya case hai. Client office mein apni problem samjha raha hai.",
        dialogues: [
          { speaker: "Ramesh Sir", avatar: AV.ramesh, text: "Aryan, yeh naya client hai, property dispute ka case hai. Dhyan se suno inki baat." },
          { speaker: "Neha (Colleague)", avatar: AV.neha, text: "Aryan, is tarah ke case mein documents bahut important hote hain." },
          { speaker: "Aryan (You)", avatar: AV.aryan, text: "Client bata rahe hain lekin kuch details clear nahi hain. Kya karu?" }
        ],
        choices: [
          { text: "Client se sabhi documents aur clear details maango", correct: true,
            skills: { technical: 0, communication: 2, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Ramesh Sir", avatar: AV.ramesh, text: "Sahi kiya Aryan! Bina poore documents ke case prepare karna mushkil hota hai." } },
          { text: "Jo thoda suna hai usi ke aadhar par case shuru kardo", correct: false,
            skills: { technical: 0, communication: 1, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Ramesh Sir", avatar: AV.ramesh, text: "Aryan, adhoori jaankari ke saath case shuru karna risky hota hai. Pehle poori details lena zaroori hai." } }
        ],
        betterAdvice: "Naya case lene se pehle poore documents aur clear details lena zaroori hai."
      },
      {
        location: "Case Preparation Room",
        bgImage: "https://images.pexels.com/photos/37732186/pexels-photo-37732186.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Case prepare karte waqt Aryan ko ek loophole milta hai jo case jeetne mein madad kar sakta hai, lekin ethically theek nahi lagta.",
        dialogues: [
          { speaker: "Aryan (You)", avatar: AV.aryan, text: "Sir, mujhe ek loophole mila hai jisse hum case jeet sakte hain, lekin yeh thoda galat lagta hai." },
          { speaker: "Neha (Colleague)", avatar: AV.neha, text: "Aryan, case jeetna important hai, par tareeka bhi matter karta hai." },
          { speaker: "Ramesh Sir", avatar: AV.ramesh, text: "Aryan, bata - kya karega tu is situation mein?" }
        ],
        choices: [
          { text: "Ethical tareeke se strong arguments taiyaar karo, loophole avoid karo", correct: true,
            skills: { technical: 0, communication: 0, problemSolving: 2, leadership: 2 },
            reaction: { speaker: "Ramesh Sir", avatar: AV.ramesh, text: "Yehi asli wakil ki nishaani hai Aryan. Ethics ke saath case jeetna sabse bada satisfaction hota hai." } },
          { text: "Loophole ka istemaal karke jaldi case jeet lo", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Ramesh Sir", avatar: AV.ramesh, text: "Aryan, aise tareeke se jeetna future mein reputation ko nuksan pahucha sakta hai. Ethics important hai." } }
        ],
        betterAdvice: "Case jeetne ke liye ethical tareeke istemaal karne chahiye, shortcuts se bachna chahiye."
      },
      {
        location: "Courtroom",
        bgImage: "https://images.pexels.com/photos/34817075/pexels-photo-34817075.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Courtroom mein opposing lawyer bahut aggressive tareeke se arguments kar raha hai.",
        dialogues: [
          { speaker: "Neha (Colleague)", avatar: AV.neha, text: "Aryan, opposing lawyer bahut aggressive ho raha hai, tension mat lena." },
          { speaker: "Ramesh Sir", avatar: AV.ramesh, text: "Aryan, tumhari baari hai jawab dene ki. Kaise react karoge?" },
          { speaker: "Aryan (You)", avatar: AV.aryan, text: "Thoda nervous ho raha hoon, par facts mere paas strong hain." }
        ],
        choices: [
          { text: "Shaant reh kar facts aur evidence ke saath jawab do", correct: true,
            skills: { technical: 0, communication: 3, problemSolving: 0, leadership: 2 },
            reaction: { speaker: "Ramesh Sir", avatar: AV.ramesh, text: "Perfect Aryan! Courtroom mein shaant rehna aur facts par tike rehna hi sabse strong strategy hai." } },
          { text: "Gusse mein aa kar opposing lawyer se bahas karo", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Ramesh Sir", avatar: AV.ramesh, text: "Aryan, gussa dikhana judge ke saamne galat impression deta hai. Hamesha shaant rehna chahiye." } }
        ],
        betterAdvice: "Courtroom mein pressure ke bawajood shaant rehkar facts ke saath jawab dena chahiye."
      },
      {
        location: "Law Office - Client Pressure",
        bgImage: "https://images.pexels.com/photos/8112166/pexels-photo-8112166.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Client Aryan se kehta hai ki case jeetne ke liye kuch facts chhupa de.",
        dialogues: [
          { speaker: "Neha (Colleague)", avatar: AV.neha, text: "Aryan, client keh raha hai kuch facts court mein na batayein." },
          { speaker: "Aryan (You)", avatar: AV.aryan, text: "Yeh toh galat hoga... par client bhi pareshaan hai." },
          { speaker: "Ramesh Sir", avatar: AV.ramesh, text: "Aryan, ek wakil ki asli responsibility kya hoti hai yahan?" }
        ],
        choices: [
          { text: "Client ko samjhao ki sach chhupana sahi nahi, honestly case lado", correct: true,
            skills: { technical: 0, communication: 3, problemSolving: 0, leadership: 2 },
            reaction: { speaker: "Ramesh Sir", avatar: AV.ramesh, text: "Bilkul sahi Aryan! Ek achhe wakil ka kaam sach ke saath case ladna hota hai, facts chhupana nahi." } },
          { text: "Client ki baat maan kar facts chhupa do", correct: false,
            skills: { technical: 0, communication: 1, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Ramesh Sir", avatar: AV.ramesh, text: "Aryan, facts chhupana professional ethics ke khilaf hai aur baad mein case par bhaari pad sakta hai." } }
        ],
        betterAdvice: "Client ki request ke bawajood facts chhupana sahi nahi, hamesha honestly case handle karna chahiye."
      },
      {
        location: "Courtroom - Judgment Day",
        bgImage: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Aaj judgment ka din hai. Poora case ka result aane wala hai.",
        dialogues: [
          { speaker: "Ramesh Sir", avatar: AV.ramesh, text: "Aryan, humne apna best diya hai is case mein, chahe result kuch bhi ho." },
          { speaker: "Aryan (You)", avatar: AV.aryan, text: "Sir, thoda nervous hoon result ke liye." },
          { speaker: "Neha (Colleague)", avatar: AV.neha, text: "Result kaisa bhi ho, humne honestly kaam kiya hai." }
        ],
        choices: [
          { text: "Result ko positively lo, jeet ya haar dono se seekho", correct: true,
            skills: { technical: 0, communication: 0, problemSolving: 1, leadership: 2 },
            reaction: { speaker: "Ramesh Sir", avatar: AV.ramesh, text: "Yehi sahi soch hai Aryan! Har case ek seekh deta hai, chahe jeeto ya haaro." } },
          { text: "Agar haar gaye toh poora blame khud par le lo aur demotivate ho jao", correct: false,
            skills: { technical: 0, communication: 1, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Ramesh Sir", avatar: AV.ramesh, text: "Aryan, ek case haarne se poora career kharab nahi hota. Seekhna aur aage badhna zaroori hai." } }
        ],
        betterAdvice: "Case ka result kaisa bhi ho, usse seekh lekar aage badhna chahiye, khud ko demotivate nahi karna chahiye."
      }
    ]
  },

  // ==================================================
  // STORY 5: TEACHING - "The First Bell"
  // Characters: Meena Ma'am (Principal), Suresh (colleague), Anjali (You)
  // ==================================================
  teaching: {
    title: "The First Bell",
    genre: "Teaching",
    youDefaultName: "Anjali",
    role: "School Teacher",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=AnjaliTeacherM&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=AnjaliTeacher&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/8423020/pexels-photo-8423020.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Step into a school classroom as a new teacher and handle real challenges - from noisy students to worried parents.",
    narration: "Ghanti bajti hai aur Anjali pehli baar teacher ki tarah classroom mein kadam rakhti hai. Bachon ka shor kam hone ka naam nahi le raha - aur usse abhi pata chalna hai ki ek achhi teacher hona sirf syllabus padhaane se kahin zyada hai.",

    episodes: [
      {
        location: "Classroom - Day 1",
        bgImage: "https://images.pexels.com/photos/8423020/pexels-photo-8423020.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Anjali ka pehla din hai teaching mein. Class mein bahut shor ho raha hai.",
        dialogues: [
          { speaker: "Suresh (Colleague)", avatar: AV.suresh, text: "Anjali, yeh class thodi shor machati hai, pehle din thoda mushkil hoga." },
          { speaker: "Anjali (You)", avatar: AV.anjali, text: "Bachhe control hi nahi ho rahe, main kya karu?" },
          { speaker: "Meena Ma'am", avatar: AV.meena, text: "Anjali, pehla din hai, ghabrao mat. Bata, kaise shuruaat karegi?" }
        ],
        choices: [
          { text: "Shaant aawaz mein apna intro do aur unse dosti se baat karo", correct: true,
            skills: { technical: 0, communication: 3, problemSolving: 0, leadership: 2 },
            reaction: { speaker: "Meena Ma'am", avatar: AV.meena, text: "Bahut badhiya Anjali! Bachhon se dosti se baat karna unka trust jeetne ka sabse achha tareeka hai." } },
          { text: "Zor se daant kar chup karwane ki koshish karo", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Meena Ma'am", avatar: AV.meena, text: "Anjali, pehle din hi daantna bachhon ko dara sakta hai. Dosti se shuruaat karna behtar hota hai." } }
        ],
        betterAdvice: "Naye class ke saath shuruaat mein dosti aur shaant tareeke se baat karni chahiye, daantne se nahi."
      },
      {
        location: "Classroom - Lesson Time",
        bgImage: "https://images.pexels.com/photos/18395403/pexels-photo-18395403.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Ek student baar baar ek concept nahi samajh pa raha, poori class wait kar rahi hai.",
        dialogues: [
          { speaker: "Anjali (You)", avatar: AV.anjali, text: "Rohan, phir se samajh nahi aaya? Chalo dobara try karte hain." },
          { speaker: "Suresh (Colleague)", avatar: AV.suresh, text: "Anjali, class ka time nikal raha hai, aage badhna padega." },
          { speaker: "Meena Ma'am", avatar: AV.meena, text: "Anjali, kaise balance karegi - Rohan ki help aur poori class ka time?" }
        ],
        choices: [
          { text: "Rohan ko break time mein alag se samjhao, class aage badhao", correct: true,
            skills: { technical: 0, communication: 1, problemSolving: 3, leadership: 0 },
            reaction: { speaker: "Meena Ma'am", avatar: AV.meena, text: "Smart decision Anjali! Isse poori class ka time bhi nahi rukta aur Rohan ki help bhi ho jaati hai." } },
          { text: "Poori class ko rok kar sirf Rohan ko samjhate raho", correct: false,
            skills: { technical: 0, communication: 1, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Meena Ma'am", avatar: AV.meena, text: "Anjali, isse poori class ka time waste hota hai. Individual help alag se deni chahiye." } }
        ],
        betterAdvice: "Ek student ko extra help chahiye ho toh use alag se time dena chahiye, poori class ko rokna nahi chahiye."
      },
      {
        location: "Classroom - Recess",
        bgImage: "https://images.pexels.com/photos/18931270/pexels-photo-18931270.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Anjali ko pata chalta hai ki class mein ek student doosre ko bully kar raha hai.",
        dialogues: [
          { speaker: "Suresh (Colleague)", avatar: AV.suresh, text: "Anjali, maine suna hai Karan chhote bachhon ko tease karta hai." },
          { speaker: "Anjali (You)", avatar: AV.anjali, text: "Yeh toh serious matter hai, isse turant handle karna hoga." },
          { speaker: "Meena Ma'am", avatar: AV.meena, text: "Anjali, aise situation mein teacher ka role bahut important hota hai. Kaise handle karegi?" }
        ],
        choices: [
          { text: "Dono students se alag alag baat karke poori baat samjho, phir sudharo", correct: true,
            skills: { technical: 0, communication: 2, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Meena Ma'am", avatar: AV.meena, text: "Bahut sahi Anjali! Dono taraf ki baat sunna aur samajhkar sudharna hi sahi tareeka hai." } },
          { text: "Bina poori baat sune Karan ko sabke saamne daant do", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Meena Ma'am", avatar: AV.meena, text: "Anjali, sabke saamne daantna Karan ko aur zyada galat direction mein le ja sakta hai. Pehle samajhna zaroori hai." } }
        ],
        betterAdvice: "Bullying jaise sensitive matter mein pehle dono taraf ki baat samajhni chahiye, bina soche daantna nahi chahiye."
      },
      {
        location: "Parent-Teacher Meeting",
        bgImage: "https://images.pexels.com/photos/18931270/pexels-photo-18931270.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Ek parent apne bachhe ke kam marks ko lekar Anjali se naraaz hai.",
        dialogues: [
          { speaker: "Parent", avatar: AV.suresh, text: "Ma'am, mere bête ke marks itne kam kyun aaye? Aap dhyan nahi de rahi kya?" },
          { speaker: "Anjali (You)", avatar: AV.anjali, text: "Sir, main samjhati hoon aapki chinta, lekin baat thodi alag hai..." },
          { speaker: "Meena Ma'am", avatar: AV.meena, text: "Anjali, aise situation mein parent ko kaise handle karegi?" }
        ],
        choices: [
          { text: "Shaant rehkar bachhe ki progress aur sudhaar ke tareeke bataao", correct: true,
            skills: { technical: 0, communication: 3, problemSolving: 0, leadership: 2 },
            reaction: { speaker: "Meena Ma'am", avatar: AV.meena, text: "Perfect Anjali! Shaant rehkar solution-based baat karna parent ka trust banata hai." } },
          { text: "Parent se bhi gusse mein bahas karo", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Meena Ma'am", avatar: AV.meena, text: "Anjali, parent se bahas karna school aur teacher dono ki image kharab karta hai. Shaant rehna zaroori hai." } }
        ],
        betterAdvice: "Naraaz parent ke saath bhi shaant rehkar, solution-focused baat karni chahiye."
      },
      {
        location: "Classroom - Result Day",
        bgImage: "https://images.pexels.com/photos/8423020/pexels-photo-8423020.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Exam result aa gaye hain. Kuch students fail ho gaye hain aur udaas baithe hain.",
        dialogues: [
          { speaker: "Suresh (Colleague)", avatar: AV.suresh, text: "Anjali, is baar kuch bachhe fail ho gaye, class mein mahaul udaas hai." },
          { speaker: "Anjali (You)", avatar: AV.anjali, text: "Bachhon ka confidence bhi kam ho gaya lag raha hai." },
          { speaker: "Meena Ma'am", avatar: AV.meena, text: "Anjali, aise moment mein teacher ke shabdon ka bahut asar hota hai. Kya kahegi unse?" }
        ],
        choices: [
          { text: "Unhe encourage karo aur behtar karne ka plan saath mein banao", correct: true,
            skills: { technical: 0, communication: 2, problemSolving: 0, leadership: 3 },
            reaction: { speaker: "Meena Ma'am", avatar: AV.meena, text: "Bahut sundar Anjali! Encouragement aur ek clear plan bachhon ka confidence wapas la sakta hai." } },
          { text: "Unhe bol do ki wo mehnat nahi karte isliye fail hue", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Meena Ma'am", avatar: AV.meena, text: "Anjali, aise seedhe blame karna bachhon ka confidence aur bhi kam kar sakta hai. Encouragement zaroori hai." } }
        ],
        betterAdvice: "Result kharab aane par bachhon ko blame karne ke bajaye encourage karke aage ka plan banana chahiye."
      }
    ]
  },

  // ==================================================
  // STORY 6: MEDICAL #2 - "Life on the Line"
  // Characters: Dev Sir (Senior Paramedic), Meera (EMT), Kabir (You)
  // ==================================================
  paramedic: {
    title: "Life on the Line",
    genre: "Medical",
    youDefaultName: "Kabir",
    role: "Paramedic",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=KabirEMT&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=KabirEMTF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/8943075/pexels-photo-8943075.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Race against time as an emergency paramedic, making split-second decisions that save lives.",
    narration: "Sirens goonj rahe hain jab Kabir ki ambulance accident site par rukti hai. Bheed, chaos aur ek ghayal insaan - har second maayne rakhta hai, aur Kabir ke faisle hi is insaan ki zindagi tay karenge.",

    episodes: [
      {
        location: "Accident Site",
        bgImage: "https://images.pexels.com/photos/6519885/pexels-photo-6519885.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Ek road accident hua hai, ambulance abhi pahunchi hai. Chaaron taraf bheed aur chaos hai.",
        dialogues: [
          { speaker: "Dev Sir", avatar: AV.devSir, text: "Kabir, jaldi utro! Bheed control karni hogi, warna kaam karna mushkil ho jayega." },
          { speaker: "Meera (EMT)", avatar: AV.meera, text: "Log itne paas khade hain, hume space hi nahi mil raha patient tak pahunchne ka." },
          { speaker: "Kabir (You)", avatar: AV.kabir, text: "Pehle kya karu - bheed hatau ya seedha patient ke paas jau?" }
        ],
        choices: [
          { text: "Scene ko secure karo aur bheed ko peeche karo pehle", correct: true,
            skills: { technical: 0, communication: 0, problemSolving: 2, leadership: 2 },
            reaction: { speaker: "Dev Sir", avatar: AV.devSir, text: "Sahi socha Kabir! Safe aur clear space banaye bina proper treatment nahi ho sakti." } },
          { text: "Bina dekhe seedha patient ko utha kar le jao", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Dev Sir", avatar: AV.devSir, text: "Kabir, bina scene secure kiye jaldi karna aur bhi risky ho sakta hai, hume aur patient dono ke liye." } }
        ],
        betterAdvice: "Accident site par pehle scene ko secure karke jagah banani chahiye, tabhi patient ko sahi tarike se sambhala ja sakta hai."
      },
      {
        location: "Inside the Ambulance",
        bgImage: "https://images.pexels.com/photos/8943075/pexels-photo-8943075.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Ambulance mein patient critical hai. Hospital abhi door hai.",
        dialogues: [
          { speaker: "Meera (EMT)", avatar: AV.meera, text: "Kabir, patient ka BP gir raha hai, hume kuch karna hoga." },
          { speaker: "Dev Sir", avatar: AV.devSir, text: "Kabir, standard protocol yaad hai na? Bata, kya karega?" },
          { speaker: "Kabir (You)", avatar: AV.kabir, text: "Protocol follow karu ya jaldi mein seedha hospital bhaga du?" }
        ],
        choices: [
          { text: "Standard protocol follow karke vitals stabilize karo pehle", correct: true,
            skills: { technical: 3, communication: 0, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Dev Sir", avatar: AV.devSir, text: "Perfect Kabir! Protocol follow karna hi patient ko stable rakhne ka sabse bharosemand tareeka hai." } },
          { text: "Jaldi mein protocol skip karke seedha hospital bhagao", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Dev Sir", avatar: AV.devSir, text: "Kabir, protocol skip karna risky hai - raste mein patient aur bhi critical ho sakta hai." } }
        ],
        betterAdvice: "Ambulance mein hamesha standard protocol follow karke patient ko stabilize karna chahiye, jaldi mein steps skip nahi karne chahiye."
      },
      {
        location: "Hospital Handover",
        bgImage: "https://images.pexels.com/photos/28123678/pexels-photo-28123678.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Hospital pahunch gaye hain. Ab ER staff ko patient ki poori jaankari deni hai.",
        dialogues: [
          { speaker: "Dev Sir", avatar: AV.devSir, text: "Kabir, ab ER doctor ko poora case handover karna hai. Dhyan se batana." },
          { speaker: "Meera (EMT)", avatar: AV.meera, text: "Jaldi mein kahin kuch chootna nahi chahiye." },
          { speaker: "Kabir (You)", avatar: AV.kabir, text: "Sab kuch yaad rakhna thoda mushkil hai itni jaldi mein..." }
        ],
        choices: [
          { text: "ER staff ko clear aur complete jaankari do", correct: true,
            skills: { technical: 1, communication: 3, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Dev Sir", avatar: AV.devSir, text: "Bahut badhiya Kabir! Complete aur clear handover se ER team turant sahi treatment shuru kar sakti hai." } },
          { text: "Jaldi mein adhoori jaankari de kar chale jao", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Dev Sir", avatar: AV.devSir, text: "Kabir, adhoori jaankari dene se ER team ko sahi decision lene mein dikkat ho sakti hai." } }
        ],
        betterAdvice: "Hospital handover ke waqt ER staff ko hamesha clear aur poori jaankari deni chahiye."
      },
      {
        location: "Accident Site - Family Present",
        bgImage: "https://images.pexels.com/photos/6519885/pexels-photo-6519885.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Ek doosri call par, patient ka family member bahut ghabraya hua chilla raha hai.",
        dialogues: [
          { speaker: "Meera (EMT)", avatar: AV.meera, text: "Kabir, family bahut pareshan hai, kaam karna mushkil ho raha hai." },
          { speaker: "Kabir (You)", avatar: AV.kabir, text: "Inhe kaise shaant karu, waqt bhi kam hai..." },
          { speaker: "Dev Sir", avatar: AV.devSir, text: "Kabir, family ko handle karna bhi is kaam ka hissa hai. Kaise karega?" }
        ],
        choices: [
          { text: "Family ko shaant karke unhe clear instructions do", correct: true,
            skills: { technical: 0, communication: 3, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Dev Sir", avatar: AV.devSir, text: "Sahi kiya Kabir! Family ko shaant rakhna kaam ko aasaan banata hai aur unka trust bhi jeetta hai." } },
          { text: "Family ko ignore karke apna kaam karte raho", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Dev Sir", avatar: AV.devSir, text: "Kabir, family ko poori tarah ignore karna situation ko aur tension bhara bana sakta hai." } }
        ],
        betterAdvice: "Emergency mein family ko bhi thoda dhyan aur shaant karna zaroori hota hai, sirf patient par focus karke unhe ignore nahi karna chahiye."
      },
      {
        location: "End of Shift",
        bgImage: "https://images.pexels.com/photos/28123678/pexels-photo-28123678.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Bahut lambi aur thakaane wali shift ke baad, ek aur emergency call aati hai.",
        dialogues: [
          { speaker: "Dev Sir", avatar: AV.devSir, text: "Kabir, tu bahut thak chuka hai aaj. Ek aur call aayi hai." },
          { speaker: "Kabir (You)", avatar: AV.kabir, text: "Sach mein bahut thakan hai, par log bhi toh madad chahte hain..." },
          { speaker: "Meera (EMT)", avatar: AV.meera, text: "Kabir, thaka hua paramedic galtiyan bhi kar sakta hai." }
        ],
        choices: [
          { text: "Thodi der rest lo, agli shift ke liye fresh raho", correct: true,
            skills: { technical: 0, communication: 0, problemSolving: 1, leadership: 2 },
            reaction: { speaker: "Dev Sir", avatar: AV.devSir, text: "Bilkul sahi Kabir! Rest lena bhi zaroori hai, taaki agli emergency mein bhi tu best de sake." } },
          { text: "Bina rest kiye agli call bhi le lo", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Dev Sir", avatar: AV.devSir, text: "Kabir, thakan mein kaam karna galti ka risk badhata hai, jo patient ke liye bhi khatarnak ho sakta hai." } }
        ],
        betterAdvice: "Lambi shift ke baad thoda rest lena chahiye, thakan mein continuously kaam karna galti ka risk badhata hai."
      }
    ]
  },

  // ==================================================
  // STORY 7: SPORTS #2 - "Final Whistle"
  // Characters: Coach Verma, Rahul (teammate), Kiran (You)
  // ==================================================
  footballer: {
    title: "Final Whistle",
    genre: "Sports",
    youDefaultName: "Kiran",
    role: "Football Player",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=KiranFootball&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=KiranFootballF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/32190734/pexels-photo-32190734.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Chase your football dream from local trials all the way to a high-pressure penalty shootout.",
    narration: "Local club ke trial ground par Kiran warm-up kar raha hai, dil zor se dhadak raha hai. Coach ki nazrein har player par hain - aur Kiran jaanta hai ki agle kuch minute uske football sapne ko zinda ya khatam kar sakte hain.",

    episodes: [
      {
        location: "Selection Trial",
        bgImage: "https://images.pexels.com/photos/104675/pexels-photo-104675.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Local club ke selection trial mein Kiran ki baari aane wali hai.",
        dialogues: [
          { speaker: "Rahul (Teammate)", avatar: AV.rahul, text: "Kiran, aaj bahut acche players aaye hain, competition tough hai." },
          { speaker: "Kiran (You)", avatar: AV.kiran, text: "Thoda pressure feel ho raha hai, sabko dekh kar." },
          { speaker: "Coach Verma", avatar: AV.coachVerma, text: "Kiran, apna best dena hai. Kaisi approach rakhega?" }
        ],
        choices: [
          { text: "Apna natural game khelo, confidence rakho", correct: true,
            skills: { technical: 3, communication: 0, problemSolving: 1, leadership: 0 },
            reaction: { speaker: "Coach Verma", avatar: AV.coachVerma, text: "Yehi sahi soch hai Kiran! Apna natural game hi tujhe alag dikhayega." } },
          { text: "Overconfidence mein fancy tricks try karo", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Coach Verma", avatar: AV.coachVerma, text: "Kiran, trial mein fancy tricks risky hote hain, consistency zyada important hai." } }
        ],
        betterAdvice: "Trial jaisi jagah par apna natural, practiced game khelna chahiye, extra risk nahi lena chahiye."
      },
      {
        location: "Team Meeting",
        bgImage: "https://images.pexels.com/photos/32190734/pexels-photo-32190734.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Coach defensive strategy chahte hain, lekin Kiran attacking style pasand karta hai.",
        dialogues: [
          { speaker: "Coach Verma", avatar: AV.coachVerma, text: "Kal ke match mein hum defensive khelenge, safe rahenge." },
          { speaker: "Kiran (You)", avatar: AV.kiran, text: "Par Sir, attacking khelenge toh jeetne ke chances zyada honge na?" },
          { speaker: "Rahul (Teammate)", avatar: AV.rahul, text: "Kiran, Coach ka experience bhi important hai yahan." }
        ],
        choices: [
          { text: "Coach ki strategy follow karo team ke fayde ke liye", correct: true,
            skills: { technical: 0, communication: 2, problemSolving: 0, leadership: 2 },
            reaction: { speaker: "Coach Verma", avatar: AV.coachVerma, text: "Shabaash Kiran! Team ke decision ko respect dena hi ek achhe player ki nishaani hai." } },
          { text: "Apni marzi se akela attack karne ki koshish karo", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Coach Verma", avatar: AV.coachVerma, text: "Kiran, team strategy todkar akele khelna poori team ko nuksan pahucha sakta hai." } }
        ],
        betterAdvice: "Team sport mein coach/team ki strategy follow karni chahiye, akele decision lena sahi nahi."
      },
      {
        location: "Losing Streak",
        bgImage: "https://images.pexels.com/photos/104675/pexels-photo-104675.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Team ne lagatar 3 match haare hain, sabka morale down hai.",
        dialogues: [
          { speaker: "Rahul (Teammate)", avatar: AV.rahul, text: "Kiran, sab bahut demotivate lag rahe hain, kya karein?" },
          { speaker: "Kiran (You)", avatar: AV.kiran, text: "Mahaul bahut negative ho gaya hai team mein." },
          { speaker: "Coach Verma", avatar: AV.coachVerma, text: "Kiran, aise waqt mein team ko kaise sambhalega?" }
        ],
        choices: [
          { text: "Team ko positive rakhne ke liye encourage karo", correct: true,
            skills: { technical: 0, communication: 3, problemSolving: 0, leadership: 2 },
            reaction: { speaker: "Coach Verma", avatar: AV.coachVerma, text: "Bahut badhiya Kiran! Mushkil waqt mein team ko encourage karna hi asli leadership hai." } },
          { text: "Team ko losses ke liye blame karo", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Coach Verma", avatar: AV.coachVerma, text: "Kiran, blame karna team ka morale aur bhi neeche le ja sakta hai." } }
        ],
        betterAdvice: "Losing streak ke waqt team ko blame karne ke bajaye encourage karna chahiye."
      },
      {
        location: "Crucial Match - Injury",
        bgImage: "https://images.pexels.com/photos/32190734/pexels-photo-32190734.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Important match ke dauraan Kiran ke ankle mein chot lag jaati hai.",
        dialogues: [
          { speaker: "Kiran (You)", avatar: AV.kiran, text: "Aah! Ankle mein kuch ho gaya, dard ho raha hai." },
          { speaker: "Rahul (Teammate)", avatar: AV.rahul, text: "Kiran theek hai na? Match bahut important hai!" },
          { speaker: "Coach Verma", avatar: AV.coachVerma, text: "Kiran, chot ko halke mein mat le. Bata, kya karega?" }
        ],
        choices: [
          { text: "Turant coach/physio ko chot ke baare mein batao", correct: true,
            skills: { technical: 0, communication: 0, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "Coach Verma", avatar: AV.coachVerma, text: "Sahi kiya Kiran! Chot ko turant batana future ke bade nuksan se bachata hai." } },
          { text: "Chot chhupa kar khelte raho", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Coach Verma", avatar: AV.coachVerma, text: "Kiran, chot chhupa kar khelna use aur serious bana sakta hai." } }
        ],
        betterAdvice: "Match ke dauraan chot lagne par turant coach/physio ko batana chahiye, chhupana nahi chahiye."
      },
      {
        location: "Final - Penalty Shootout",
        bgImage: "https://images.pexels.com/photos/32190734/pexels-photo-32190734.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Final match penalty shootout tak pahunch gaya hai. Kiran ki kick decide karegi.",
        dialogues: [
          { speaker: "Rahul (Teammate)", avatar: AV.rahul, text: "Kiran, yeh decide karegi ki hum jeetenge ya haarenge!" },
          { speaker: "Kiran (You)", avatar: AV.kiran, text: "Dil zor se dhadak raha hai... par main taiyaar hoon." },
          { speaker: "Coach Verma", avatar: AV.coachVerma, text: "Kiran, jo practice kiya hai wahi yaad rakh. Kaise khelega?" }
        ],
        choices: [
          { text: "Shaant rehke penalty par focus karo", correct: true,
            skills: { technical: 0, communication: 0, problemSolving: 3, leadership: 2 },
            reaction: { speaker: "Coach Verma", avatar: AV.coachVerma, text: "Excellent Kiran! Pressure mein shaant rehna hi champions ki nishaani hai." } },
          { text: "Pressure mein jaldi kick maar do", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Coach Verma", avatar: AV.coachVerma, text: "Kiran, jaldi mein kick marna accuracy kam kar sakta hai." } }
        ],
        betterAdvice: "Penalty jaisi high-pressure situation mein shaant rehkar focus se kick maarni chahiye, jaldi nahi karni chahiye."
      }
    ]
  },

  // ==================================================
  // STORY 8: IT #2 - "Built From Zero"
  // Characters: Rajesh Sir (Investor/Mentor), Simran (Co-founder), Arnav (You)
  // ==================================================
  startup: {
    title: "Built From Zero",
    genre: "IT",
    youDefaultName: "Arnav",
    role: "Startup Founder",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=ArnavFounder&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=ArnavFounderF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Build a tech startup from scratch - pitch investors, manage a co-founder, and survive your first crisis.",
    narration: "Ek chhoti si room mein, laptop screens ki roshni mein, Arnav aur Simran apna app idea final kar rahe hain. Yeh sirf ek idea nahi hai - yeh unka pehla kadam hai kuch bada banane ki taraf, aur har decision abhi se maayne rakhta hai.",

    episodes: [
      {
        location: "Idea Validation",
        bgImage: "https://images.pexels.com/photos/6914421/pexels-photo-6914421.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Arnav aur Simran ne ek app idea socha hai, ab decide karna hai aage kaise badhna hai.",
        dialogues: [
          { speaker: "Simran (Co-founder)", avatar: AV.simran, text: "Arnav, humara idea achha hai, par pata nahi log use karenge ya nahi." },
          { speaker: "Arnav (You)", avatar: AV.arnav, text: "Hume pehle aur research karni chahiye ya seedha kuch bana kar test karna chahiye?" },
          { speaker: "Rajesh Sir", avatar: AV.rajeshSir, text: "Yeh decision bahut important hai startup ki shuruaat mein." }
        ],
        choices: [
          { text: "Chhota MVP bana kar jaldi real users pe test karo", correct: true,
            skills: { technical: 2, communication: 0, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Rajesh Sir", avatar: AV.rajeshSir, text: "Bahut sahi Arnav! Jaldi test karke real feedback lena research mein mahine bitane se zyada valuable hota hai." } },
          { text: "Mahino tak sirf research karte raho", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Rajesh Sir", avatar: AV.rajeshSir, text: "Arnav, zyada lamba research startups ke liye time aur paisa dono waste kar sakta hai." } }
        ],
        betterAdvice: "Startup mein jaldi ek chhota version bana kar real users se feedback lena chahiye, mahino tak sirf research nahi karni chahiye."
      },
      {
        location: "Investor Pitch Meeting",
        bgImage: "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Arnav ki pehli investor pitch meeting hai, thoda nervous hai.",
        dialogues: [
          { speaker: "Rajesh Sir", avatar: AV.rajeshSir, text: "Arnav, investors data aur numbers dekhna chahenge, sirf idea nahi." },
          { speaker: "Arnav (You)", avatar: AV.arnav, text: "Thoda nervous hoon, kaafi log baithe hain saamne." },
          { speaker: "Simran (Co-founder)", avatar: AV.simran, text: "Arnav, hum dono ne mil kar taiyaari ki hai, tu kar lega." }
        ],
        choices: [
          { text: "Data aur numbers ke saath confident pitch do", correct: true,
            skills: { technical: 0, communication: 3, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Rajesh Sir", avatar: AV.rajeshSir, text: "Bahut badhiya Arnav! Data-backed confident pitch investors ka trust jeetta hai." } },
          { text: "Bina poori taiyari ke seedha baat karne chale jao", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Rajesh Sir", avatar: AV.rajeshSir, text: "Arnav, bina taiyari ke pitch karna investors ko confidence nahi deta." } }
        ],
        betterAdvice: "Investor pitch mein hamesha data aur numbers ke saath taiyari karke confident tareeke se baat karni chahiye."
      },
      {
        location: "Office Disagreement",
        bgImage: "https://images.pexels.com/photos/6914421/pexels-photo-6914421.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Arnav aur Simran product ki direction ko lekar disagree kar rahe hain.",
        dialogues: [
          { speaker: "Simran (Co-founder)", avatar: AV.simran, text: "Arnav, mujhe lagta hai humein pehle simple features par focus karna chahiye." },
          { speaker: "Arnav (You)", avatar: AV.arnav, text: "Par main sochta hoon advanced features se hum alag dikhenge..." },
          { speaker: "Rajesh Sir", avatar: AV.rajeshSir, text: "Aap dono ke founders ke beech disagreement normal hai. Kaise handle karoge?" }
        ],
        choices: [
          { text: "Simran ke saath baith kar dono ideas discuss karo", correct: true,
            skills: { technical: 0, communication: 2, problemSolving: 0, leadership: 2 },
            reaction: { speaker: "Rajesh Sir", avatar: AV.rajeshSir, text: "Sahi approach Arnav! Co-founders ke beech open discussion hi best decisions leti hai." } },
          { text: "Apni baat thop do bina Simran ki sune", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Rajesh Sir", avatar: AV.rajeshSir, text: "Arnav, co-founder ki baat na sunna partnership ko kamzor kar sakta hai." } }
        ],
        betterAdvice: "Co-founders ke beech disagreement ho toh baith kar discuss karna chahiye, apni baat thopni nahi chahiye."
      },
      {
        location: "Customer Crisis",
        bgImage: "https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Startup ke pehle paying customer ne ek badi complaint ki hai.",
        dialogues: [
          { speaker: "Simran (Co-founder)", avatar: AV.simran, text: "Arnav, humara pehla paying customer bahut naraaz hai!" },
          { speaker: "Arnav (You)", avatar: AV.arnav, text: "Yeh toh bahut important customer hai, kya karu?" },
          { speaker: "Rajesh Sir", avatar: AV.rajeshSir, text: "Arnav, pehla customer kho dena startup ke liye bada nuksan hoga." }
        ],
        choices: [
          { text: "Customer se maafi maango aur turant fix karo", correct: true,
            skills: { technical: 0, communication: 2, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Rajesh Sir", avatar: AV.rajeshSir, text: "Perfect Arnav! Turant maafi aur fix karna customer ka trust wapas la sakta hai." } },
          { text: "Complaint ko ignore kar do", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Rajesh Sir", avatar: AV.rajeshSir, text: "Arnav, complaint ignore karna customer ko permanently khо sakta hai." } }
        ],
        betterAdvice: "Customer complaint aane par turant maafi maang kar fix karna chahiye, ignore nahi karna chahiye."
      },
      {
        location: "Funding Decision",
        bgImage: "https://images.pexels.com/photos/6914421/pexels-photo-6914421.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Ek bada risky investment offer aaya hai. Decide karna hai lena hai ya slow-and-steady chalna hai.",
        dialogues: [
          { speaker: "Rajesh Sir", avatar: AV.rajeshSir, text: "Arnav, yeh offer bada hai lekin risky bhi hai. Soch samajh kar decide karna." },
          { speaker: "Simran (Co-founder)", avatar: AV.simran, text: "Arnav, itna bada paisa mil raha hai, lena chahiye kya?" },
          { speaker: "Arnav (You)", avatar: AV.arnav, text: "Risk bhi hai aur opportunity bhi... confusion ho raha hai." }
        ],
        choices: [
          { text: "Dono options ka risk analysis karke decide karo", correct: true,
            skills: { technical: 0, communication: 0, problemSolving: 3, leadership: 2 },
            reaction: { speaker: "Rajesh Sir", avatar: AV.rajeshSir, text: "Bahut samajhdaar decision Arnav! Sochkar risk analysis karna hi ek mature founder ki nishaani hai." } },
          { text: "Bina soche bada investment le lo", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Rajesh Sir", avatar: AV.rajeshSir, text: "Arnav, bina soche bada risk lena startup ko mushkil mein daal sakta hai." } }
        ],
        betterAdvice: "Bada investment lene se pehle poora risk analysis karke sochh samajh kar decide karna chahiye."
      }
    ]
  },

  // ==================================================
  // STORY 9: LAW #2 - "Hidden Clause"
  // Characters: Kapoor Sir (Senior Partner), Isha (colleague), Rohan (You)
  // ==================================================
  corporatelaw: {
    title: "Hidden Clause",
    genre: "Law",
    youDefaultName: "Rohan",
    role: "Corporate Lawyer",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=RohanCorporate&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=RohanCorporateF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/5387258/pexels-photo-5387258.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Navigate high-stakes corporate contracts, mergers, and negotiations as a junior corporate lawyer.",
    narration: "Conference room mein kaagzon ka dher hai - ek badi company merger deal, jiski har clause crores rupaye ka farak daal sakti hai. Rohan ko dhyaan se padhna hai, kyunki ek chhoti si galti bhi bahut bhaari pad sakti hai.",

    episodes: [
      {
        location: "Contract Review Room",
        bgImage: "https://images.pexels.com/photos/36733329/pexels-photo-36733329.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Ek badi company merger deal ka contract review karna hai.",
        dialogues: [
          { speaker: "Kapoor Sir", avatar: AV.kapoorSir, text: "Rohan, yeh merger contract bahut bada hai, dhyan se padhna." },
          { speaker: "Isha (Colleague)", avatar: AV.isha, text: "Rohan, itna lamba document hai, kaise approach karega?" },
          { speaker: "Rohan (You)", avatar: AV.rohanLaw, text: "Sabse important parts pehle padhun ya poora line by line?" }
        ],
        choices: [
          { text: "Poora contract dhyan se line by line padho", correct: true,
            skills: { technical: 3, communication: 0, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Kapoor Sir", avatar: AV.kapoorSir, text: "Sahi tareeka Rohan! Contract mein chhoti si baat bhi bade issue ban sakti hai, isliye poora padhna zaroori hai." } },
          { text: "Jaldi mein sirf important lagne wale parts padho", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Kapoor Sir", avatar: AV.kapoorSir, text: "Rohan, kuch parts skip karna badi galti ban sakta hai bade contracts mein." } }
        ],
        betterAdvice: "Bade corporate contracts ko hamesha poora dhyan se padhna chahiye, kuch parts skip nahi karne chahiye."
      },
      {
        location: "Legal Office",
        bgImage: "https://images.pexels.com/photos/5387258/pexels-photo-5387258.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Rohan ko contract mein ek risky clause milta hai jo client ke liye nuksandayak ho sakta hai.",
        dialogues: [
          { speaker: "Rohan (You)", avatar: AV.rohanLaw, text: "Sir, yeh clause thoda risky lag raha hai humare client ke liye." },
          { speaker: "Isha (Colleague)", avatar: AV.isha, text: "Rohan, aisi cheezein turant report karni chahiye." },
          { speaker: "Kapoor Sir", avatar: AV.kapoorSir, text: "Rohan, bata - kya karega is clause ke baare mein?" }
        ],
        choices: [
          { text: "Risky clause turant Kapoor Sir ko batao", correct: true,
            skills: { technical: 0, communication: 2, problemSolving: 0, leadership: 2 },
            reaction: { speaker: "Kapoor Sir", avatar: AV.kapoorSir, text: "Bahut sahi Rohan! Aise clauses turant flag karna client ko bade nuksan se bacha sakta hai." } },
          { text: "Chhota issue soch kar chup raho", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Kapoor Sir", avatar: AV.kapoorSir, text: "Rohan, chhota lagne wala issue bhi baad mein bada nuksan kar sakta hai. Hamesha report karna chahiye." } }
        ],
        betterAdvice: "Contract mein koi risky clause mile toh use turant senior ko report karna chahiye, chhota soch kar ignore nahi karna chahiye."
      },
      {
        location: "Client's Office",
        bgImage: "https://images.pexels.com/photos/8428076/pexels-photo-8428076.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Client jaldi mein hai aur bina poora review kiye contract sign karna chahta hai.",
        dialogues: [
          { speaker: "Isha (Colleague)", avatar: AV.isha, text: "Rohan, client bol raha hai aaj hi sign karna hai, review ka time nahi hai." },
          { speaker: "Rohan (You)", avatar: AV.rohanLaw, text: "Par poora review kiye bina sign karna risky hoga..." },
          { speaker: "Kapoor Sir", avatar: AV.kapoorSir, text: "Rohan, client ko kaise samjhayega?" }
        ],
        choices: [
          { text: "Client ko samjhao ki poora review zaroori hai", correct: true,
            skills: { technical: 0, communication: 3, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Kapoor Sir", avatar: AV.kapoorSir, text: "Perfect Rohan! Client ko sahi tareeke se samjhana unke fayde ke liye hi hota hai." } },
          { text: "Client ki jaldi maan kar sign karwa do", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Kapoor Sir", avatar: AV.kapoorSir, text: "Rohan, bina review sign karwana client ko baad mein bade nuksan mein daal sakta hai." } }
        ],
        betterAdvice: "Client jaldi mein bhi ho, toh use poora review ki importance samjhani chahiye, jaldi mein sign nahi karwana chahiye."
      },
      {
        location: "Negotiation Table",
        bgImage: "https://images.pexels.com/photos/36733329/pexels-photo-36733329.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Opposing company ke lawyers ke saath negotiation chal raha hai, dono taraf ade hue hain.",
        dialogues: [
          { speaker: "Kapoor Sir", avatar: AV.kapoorSir, text: "Rohan, negotiation mein dono taraf ka fayda dekhna hoga." },
          { speaker: "Isha (Colleague)", avatar: AV.isha, text: "Opposing lawyers bhi ade hue hain apni demands par." },
          { speaker: "Rohan (You)", avatar: AV.rohanLaw, text: "Kaise aage badhu is negotiation mein?" }
        ],
        choices: [
          { text: "Shaant rehke dono taraf ke fayde wali baat karo", correct: true,
            skills: { technical: 0, communication: 2, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Kapoor Sir", avatar: AV.kapoorSir, text: "Bahut badhiya Rohan! Win-win solution dhoondna hi ek achhe negotiator ki nishaani hai." } },
          { text: "Sirf apni client ki demand par ade raho", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Kapoor Sir", avatar: AV.kapoorSir, text: "Rohan, sirf apni baat par ade rehna deal ko tod bhi sakta hai." } }
        ],
        betterAdvice: "Negotiation mein dono taraf ke fayde wali baat karni chahiye, sirf apni demand par ade nahi rehna chahiye."
      },
      {
        location: "Deal Signing Day",
        bgImage: "https://images.pexels.com/photos/5387258/pexels-photo-5387258.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Aaj deal sign hone wali hai, poori team ready hai.",
        dialogues: [
          { speaker: "Isha (Colleague)", avatar: AV.isha, text: "Rohan, aaj bada din hai, saari terms final ho gayi hain." },
          { speaker: "Rohan (You)", avatar: AV.rohanLaw, text: "Ek baar aur sab check kar lein kya, final signing se pehle?" },
          { speaker: "Kapoor Sir", avatar: AV.kapoorSir, text: "Rohan, bata - kya karna sahi rahega?" }
        ],
        choices: [
          { text: "Ek baar aur sabhi terms confirm karke sign karwao", correct: true,
            skills: { technical: 0, communication: 0, problemSolving: 2, leadership: 2 },
            reaction: { speaker: "Kapoor Sir", avatar: AV.kapoorSir, text: "Bahut sahi Rohan! Final signing se pehle dobara confirm karna ek professional lawyer ki aadat honi chahiye." } },
          { text: "Bina dobara check kiye jaldi sign karwa do", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Kapoor Sir", avatar: AV.kapoorSir, text: "Rohan, jaldi mein bina check kiye sign karwana bade risks le sakta hai." } }
        ],
        betterAdvice: "Final signing se pehle hamesha ek baar sabhi terms dobara confirm karni chahiye."
      }
    ]
  },

  // ==================================================
  // STORY 10: TEACHING #2 - "Beyond the Lecture"
  // Characters: Professor Rao (HOD), Divya (colleague), Karan (You)
  // ==================================================
  college: {
    title: "Beyond the Lecture",
    genre: "Teaching",
    youDefaultName: "Karan",
    role: "College Professor",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=KaranProfessor&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=KaranProfessorF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/8199142/pexels-photo-8199142.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Step into a university lecture hall as a new professor and win over a room full of skeptical students.",
    narration: "Karan bade lecture hall mein khada hai, apna pehla lecture dene ke liye. Kai students apne phone mein khoe hain, kuch skeptical nazron se dekh rahe hain - aur Karan ko unka dhyaan jeetna hai, sirf ek period mein.",

    episodes: [
      {
        location: "College Lecture Hall - Day 1",
        bgImage: "https://images.pexels.com/photos/31367512/pexels-photo-31367512.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Karan ka pehla lecture hai, bahut bade lecture hall mein. Kai students phone mein busy hain.",
        dialogues: [
          { speaker: "Divya (Colleague)", avatar: AV.divya, text: "Karan, college ke students thode alag hote hain, unhe engage karna zaroori hai." },
          { speaker: "Karan (You)", avatar: AV.karan, text: "Kaafi students phone mein busy hain, dhyan hi nahi hai lecture par." },
          { speaker: "Professor Rao", avatar: AV.professorRao, text: "Karan, pehla lecture hi tera impression set karega. Kaise shuru karega?" }
        ],
        choices: [
          { text: "Interactive tareeke se lecture start karo, engage karo", correct: true,
            skills: { technical: 0, communication: 3, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Professor Rao", avatar: AV.professorRao, text: "Bahut badhiya Karan! Interactive shuruaat students ka dhyan turant kheech leti hai." } },
          { text: "Seedha bore karne wale tareeke se lecture padhao", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Professor Rao", avatar: AV.professorRao, text: "Karan, monotone lecture se students ka interest aur bhi kam ho sakta hai." } }
        ],
        betterAdvice: "College lecture ki shuruaat interactive tareeke se karni chahiye taaki students ka dhyan bana rahe."
      },
      {
        location: "Lecture Hall - Challenge",
        bgImage: "https://images.pexels.com/photos/8199142/pexels-photo-8199142.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Ek student class mein khade hokar Karan ke teaching method par sawaal uthata hai.",
        dialogues: [
          { speaker: "Student", avatar: AV.divya, text: "Sir, aapka yeh method samajh nahi aa raha, kuch aur tareeka nahi ho sakta?" },
          { speaker: "Karan (You)", avatar: AV.karan, text: "Yeh toh mushkil moment hai, poori class dekh rahi hai." },
          { speaker: "Professor Rao", avatar: AV.professorRao, text: "Karan, aise sawaal ko kaise handle karega?" }
        ],
        choices: [
          { text: "Student ki baat sunno aur shaant rehke jawab do", correct: true,
            skills: { technical: 0, communication: 2, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Professor Rao", avatar: AV.professorRao, text: "Sahi kiya Karan! Sawaal ko shaant rehke sunna aur jawab dena respect kamata hai." } },
          { text: "Turant defensive ho kar daant do", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Professor Rao", avatar: AV.professorRao, text: "Karan, defensive hoke daantna students ka trust kam kar sakta hai." } }
        ],
        betterAdvice: "Student ke sawaal ya challenge ko shaant rehkar sunna aur jawab dena chahiye, defensive hokar daantna nahi chahiye."
      },
      {
        location: "Empty Lecture Hall",
        bgImage: "https://images.pexels.com/photos/31367512/pexels-photo-31367512.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Karan ki class mein attendance bahut kam aa rahi hai.",
        dialogues: [
          { speaker: "Karan (You)", avatar: AV.karan, text: "Aaj bhi bahut kam students aaye hain, kya wajah ho sakti hai?" },
          { speaker: "Divya (Colleague)", avatar: AV.divya, text: "Karan, shayad lecture thoda aur interesting banane ki zaroorat hai." },
          { speaker: "Professor Rao", avatar: AV.professorRao, text: "Karan, kaise improve karega attendance?" }
        ],
        choices: [
          { text: "Practical examples aur activities add karo lecture mein", correct: true,
            skills: { technical: 0, communication: 1, problemSolving: 3, leadership: 0 },
            reaction: { speaker: "Professor Rao", avatar: AV.professorRao, text: "Bahut sahi Karan! Practical examples lecture ko interesting aur useful dono banate hain." } },
          { text: "Attendance ignore karke seedha syllabus complete karo", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Professor Rao", avatar: AV.professorRao, text: "Karan, sirf syllabus complete karna, bina students engage kiye, asal maqsad poora nahi karta." } }
        ],
        betterAdvice: "Kam attendance ki samasya ko lecture mein practical examples aur activities add karke solve karna chahiye."
      },
      {
        location: "Exam Hall",
        bgImage: "https://images.pexels.com/photos/8199142/pexels-photo-8199142.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Internal exam ke dauraan ek student cheating karte hue pakda jaata hai.",
        dialogues: [
          { speaker: "Divya (Colleague)", avatar: AV.divya, text: "Karan, ek student ke paas chit mili hai exam mein." },
          { speaker: "Karan (You)", avatar: AV.karan, text: "Yeh serious matter hai, kaise handle karu?" },
          { speaker: "Professor Rao", avatar: AV.professorRao, text: "Karan, aisi situations mein fairness bahut zaroori hai." }
        ],
        choices: [
          { text: "Fair tareeke se investigate karo, dono taraf ki baat suno", correct: true,
            skills: { technical: 0, communication: 0, problemSolving: 2, leadership: 2 },
            reaction: { speaker: "Professor Rao", avatar: AV.professorRao, text: "Bahut sahi Karan! Fairness se investigate karna sabke liye insaaf sunishchit karta hai." } },
          { text: "Bina soche seedha fail kar do", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Professor Rao", avatar: AV.professorRao, text: "Karan, bina poori jaankari liye seedha fail karna galat bhi ho sakta hai." } }
        ],
        betterAdvice: "Cheating jaise sensitive matter mein fair tareeke se investigate karke hi decision lena chahiye."
      },
      {
        location: "End of Semester",
        bgImage: "https://images.pexels.com/photos/31367512/pexels-photo-31367512.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Semester khatam ho gaya hai. Results mixed aaye hain - kuch acche, kuch kam.",
        dialogues: [
          { speaker: "Professor Rao", avatar: AV.professorRao, text: "Karan, yeh tera pehla semester tha. Results kaise lagte hain?" },
          { speaker: "Karan (You)", avatar: AV.karan, text: "Kuch students ne bahut acha kiya, kuch thoda struggle kiya." },
          { speaker: "Divya (Colleague)", avatar: AV.divya, text: "Karan, agle semester ke liye kya socha hai?" }
        ],
        choices: [
          { text: "Results analyse karke agle semester ka plan sudharo", correct: true,
            skills: { technical: 0, communication: 0, problemSolving: 2, leadership: 2 },
            reaction: { speaker: "Professor Rao", avatar: AV.professorRao, text: "Bahut badhiya Karan! Results se seekh kar apna approach improve karna hi ek achhe teacher ki nishaani hai." } },
          { text: "Results ko ignore karke wahi purana tareeka rakho", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Professor Rao", avatar: AV.professorRao, text: "Karan, results se kuch na seekhna teaching ko improve hone se rok deta hai." } }
        ],
        betterAdvice: "Semester ke results dekh kar apna teaching approach improve karna chahiye, wahi purana tareeka blindly nahi rakhna chahiye."
      }
    ]
  },

  // ==================================================
  // STORY 11: POLICE - "Line of Duty"
  // Characters: Inspector Verma (mentor), Constable Pooja, Ishaan (You)
  // ==================================================
  police: {
    title: "Line of Duty",
    genre: "Police",
    posterImage: "https://images.pexels.com/photos/23368428/pexels-photo-23368428.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Put on the uniform as a rookie police officer and handle disputes, investigations, and tough moral choices on the beat.",
    narration: "Training khatam ho chuki hai, aur Ishaan aaj pehli baar wardi pehan kar patrolling duty par nikal raha hai. Sadkon par asli duniya uska intezaar kar rahi hai - jahan har faisla sirf kanoon ka nahi, insaaniyat ka bhi sawaal hoga.",
    youDefaultName: "Ishaan",
    role: "Police Officer",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=IshaanPolice&backgroundColor=cceeff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=IshaanPoliceF&backgroundColor=ffcce0",

    episodes: [
      {
        location: "Police Station - First Day",
        bgImage: "https://images.pexels.com/photos/23368428/pexels-photo-23368428.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Ishaan ki police training complete ho chuki hai, aaj pehla din hai patrolling duty ka.",
        dialogues: [
          { speaker: "Inspector Verma", avatar: AV.inspectorVerma, text: "Ishaan, welcome to the force. Aaj se tu meri team mein hai." },
          { speaker: "Pooja (Constable)", avatar: AV.pooja, text: "Sir bahut strict hain, lekin bahut kuch sikha dete hain." },
          { speaker: "Ishaan (You)", avatar: AV.ishaan, text: "Thoda nervous hoon sir, pehla din hai." },
          { speaker: "Inspector Verma", avatar: AV.inspectorVerma, text: "Ghabrao mat, bas apni training yaad rakho." },
          { speaker: "Pooja (Constable)", avatar: AV.pooja, text: "Chalo, market mein ek chhoti si dispute ho rahi hai." },
          { speaker: "Inspector Verma", avatar: AV.inspectorVerma, text: "Ishaan, tu bata - wahan pahunch kar pehle kya karega?" }
        ],
        choices: [
          { text: "Shaant rehkar dono paksho ki baat suno", correct: true,
            skills: { technical: 0, communication: 2, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Inspector Verma", avatar: AV.inspectorVerma, text: "Bahut badhiya Ishaan! Dono taraf ki baat sunna hi sahi tareeka hai dispute suljhane ka." } },
          { text: "Seedha sabko jurmaane ki dhamki do chup karne ke liye", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Inspector Verma", avatar: AV.inspectorVerma, text: "Ishaan, dhamki dena koi solution nahi hai, isse log aur gussa ho jaate hain, haha." } }
        ],
        betterAdvice: "Dispute handle karte waqt dono paksho ki baat shaant rehkar sunni chahiye, dhamki dena sahi tareeka nahi."
      },
      {
        location: "Crime Scene - Theft Complaint",
        bgImage: "https://images.pexels.com/photos/7785075/pexels-photo-7785075.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Ek dukaan mein chori hui hai, Ishaan aur Pooja investigation ke liye pahunchte hain.",
        dialogues: [
          { speaker: "Pooja (Constable)", avatar: AV.pooja, text: "Sir, dukaandar bahut pareshaan hai, saara maal chala gaya." },
          { speaker: "Ishaan (You)", avatar: AV.ishaan, text: "CCTV footage hai kya yahan?" },
          { speaker: "Dukaandar", avatar: AV.citizen, text: "Haan sahab, camera lagaa hai peeche waali gali mein." },
          { speaker: "Inspector Verma", avatar: AV.inspectorVerma, text: "Ishaan, evidence collect karna sabse zaroori hai is stage par." },
          { speaker: "Pooja (Constable)", avatar: AV.pooja, text: "Bahar bhi bheed jama ho rahi hai dekhne ke liye." },
          { speaker: "Inspector Verma", avatar: AV.inspectorVerma, text: "Bata Ishaan, kaise aage badhega?" }
        ],
        choices: [
          { text: "Pehle CCTV footage aur evidence carefully collect karo", correct: true,
            skills: { technical: 2, communication: 0, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Inspector Verma", avatar: AV.inspectorVerma, text: "Sahi kiya Ishaan! Evidence sahi tareeke se collect karna case solve karne ki neev hoti hai." } },
          { text: "Bina evidence dekhe ek shaqi ko turant pakad lo", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Inspector Verma", avatar: AV.inspectorVerma, text: "Ishaan, bina evidence ke kisi ko pakadna galat bhi ho sakta hai. Hume proof chahiye." } }
        ],
        betterAdvice: "Kisi bhi case mein pehle evidence carefully collect karna chahiye, jaldi mein kisi par shaq karke pakadna nahi chahiye."
      },
      {
        location: "Domestic Dispute Call",
        bgImage: "https://images.pexels.com/photos/9862225/pexels-photo-9862225.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Ek ghar se jhagde ki call aati hai, mahaul kaafi tense hai.",
        dialogues: [
          { speaker: "Pooja (Constable)", avatar: AV.pooja, text: "Ishaan, yeh call thodi sensitive hai, ghar ke andar ka mamla hai." },
          { speaker: "Victim", avatar: AV.citizen, text: "Sahab, please kuch karo, roz yeh hota hai." },
          { speaker: "Ishaan (You)", avatar: AV.ishaan, text: "Aap chinta mat kijiye, hum yahan hain." },
          { speaker: "Inspector Verma", avatar: AV.inspectorVerma, text: "Ishaan, aise cases mein emotions bhi handle karne padte hain." },
          { speaker: "Pooja (Constable)", avatar: AV.pooja, text: "Family members bhi ab gussa ho rahe hain hum par." },
          { speaker: "Inspector Verma", avatar: AV.inspectorVerma, text: "Bata, kaise handle karega poori situation ko?" }
        ],
        choices: [
          { text: "Shaant rehkar victim ko support do aur sahi resource batao", correct: true,
            skills: { technical: 0, communication: 3, problemSolving: 1, leadership: 0 },
            reaction: { speaker: "Inspector Verma", avatar: AV.inspectorVerma, text: "Bahut sahi Ishaan! Sensitive cases mein victim ko safe feel karwana sabse zaroori hai." } },
          { text: "Jaldi mein case close karke chale jao", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Inspector Verma", avatar: AV.inspectorVerma, text: "Ishaan, aise sensitive case ko jaldi mein chhodna sahi nahi, victim ko madad chahiye hoti hai." } }
        ],
        betterAdvice: "Domestic dispute jaise sensitive cases mein victim ko shaant rehkar support dena chahiye, jaldi mein case chhodna nahi chahiye."
      },
      {
        location: "Foot Chase",
        bgImage: "https://images.pexels.com/photos/7785075/pexels-photo-7785075.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Ek chor bhagta hua dikhta hai, Ishaan ko turant decision lena hai.",
        dialogues: [
          { speaker: "Pooja (Constable)", avatar: AV.pooja, text: "Ishaan, woh dekho! Wahi hai jo dukaan se maal churakar bhaga tha!" },
          { speaker: "Ishaan (You)", avatar: AV.ishaan, text: "Pakadna hoga usse, jaldi!" },
          { speaker: "Inspector Verma", avatar: AV.inspectorVerma, text: "Ishaan, sambhal ke, bheed bhi hai wahan." },
          { speaker: "Bystander", avatar: AV.citizen, text: "Sahab jaldi karo, wo us gali mein gaya!" },
          { speaker: "Pooja (Constable)", avatar: AV.pooja, text: "Ishaan, kaise aage badhoge?" },
          { speaker: "Ishaan (You)", avatar: AV.ishaan, text: "Bheed ka bhi khayal rakhna hai aur usse pakadna bhi hai..." }
        ],
        choices: [
          { text: "Bheed ko safe rakhte hue plan se peecha karo", correct: true,
            skills: { technical: 1, communication: 0, problemSolving: 3, leadership: 0 },
            reaction: { speaker: "Inspector Verma", avatar: AV.inspectorVerma, text: "Bahut badhiya Ishaan! Safety aur duty dono ka balance banana hi asli professionalism hai." } },
          { text: "Bhagte bhagte ek chai ka stall dekh kar ruk jao", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Inspector Verma", avatar: AV.inspectorVerma, text: "Ishaan?! Chai baad mein, pehle duty! Haha, thoda focus rakho agli baar." } }
        ],
        betterAdvice: "Chase jaisi situation mein bheed ki safety ka dhyan rakhte hue focused rehna chahiye."
      },
      {
        location: "Police Station - End of Day",
        bgImage: "https://images.pexels.com/photos/9862225/pexels-photo-9862225.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Din khatam hone wala hai, wahi dukaandar Ishaan ko chupke se paisa dene ki koshish karta hai case rafa-dafa karne ke liye.",
        dialogues: [
          { speaker: "Dukaandar", avatar: AV.citizen, text: "Sahab, yeh chhota sa tohfa rakh lijiye, baat yahin khatam karte hain." },
          { speaker: "Ishaan (You)", avatar: AV.ishaan, text: "Yeh kya kar rahe hain aap?" },
          { speaker: "Pooja (Constable)", avatar: AV.pooja, text: "Ishaan, dhyan se, yeh common trick hai." },
          { speaker: "Inspector Verma", avatar: AV.inspectorVerma, text: "Ishaan, yeh tera asli test hai aaj ka." },
          { speaker: "Dukaandar", avatar: AV.citizen, text: "Bas thoda favor chahiye sahab..." },
          { speaker: "Inspector Verma", avatar: AV.inspectorVerma, text: "Bata Ishaan, kya karega?" }
        ],
        choices: [
          { text: "Paisa lene se saaf mana karo aur apna kaam imandari se karo", correct: true,
            skills: { technical: 0, communication: 1, problemSolving: 0, leadership: 3 },
            reaction: { speaker: "Inspector Verma", avatar: AV.inspectorVerma, text: "Proud of you Ishaan! Imandari hi ek achhe police officer ki asli pehchaan hai." } },
          { text: "Chupke se paisa le lo, kisi ko pata nahi chalega", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Inspector Verma", avatar: AV.inspectorVerma, text: "Ishaan, yeh choice tumhara pura career barbaad kar sakta hai. Integrity sabse important hai." } }
        ],
        betterAdvice: "Kisi bhi tarah ki rishwat lene se hamesha mana karna chahiye, imandari hi sabse important hai."
      }
    ]
  },

  // ==================================================
  // STORY 12: GOVERNMENT JOB - "Civil Duty"
  // Characters: DM Sahab (mentor), Neeta (colleague), Meher (You)
  // ==================================================
  government: {
    title: "Civil Duty",
    genre: "Government",
    posterImage: "https://images.pexels.com/photos/7821684/pexels-photo-7821684.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Join the civil services and navigate paperwork, corruption offers, angry citizens, and a real emergency response.",
    narration: "Meher apni naukri ke pehle din tehsil office mein kadam rakhti hai. Bahar logon ki lambi line lagi hai, sab apni-apni pareshaaniyon ke saath - aur Meher ko sikhna hai ki system ke andar rehte hue bhi sahi kaam kaise kiya jaaye.",
    youDefaultName: "Meher",
    role: "Government Officer",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=MeherOfficerM&backgroundColor=ccf0ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=MeherOfficer&backgroundColor=f0ccff",

    episodes: [
      {
        location: "Tehsil Office - First Day",
        bgImage: "https://images.pexels.com/photos/7821684/pexels-photo-7821684.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Meher ki naukri shuru ho chuki hai tehsil office mein. Bahar logon ki lambi line lagi hai.",
        dialogues: [
          { speaker: "Neeta (Colleague)", avatar: AV.neeta, text: "Meher, roz itni hi bheed hoti hai yahan, zameen ke papers ke liye." },
          { speaker: "Meher (You)", avatar: AV.meher, text: "Itni saari files, kahan se shuru karu?" },
          { speaker: "DM Sahab", avatar: AV.dmSahab, text: "Meher, system follow karo, sab theek ho jayega." },
          { speaker: "Villager", avatar: AV.citizen, text: "Madam, mera kaam kab hoga? Teesri baar aaya hoon." },
          { speaker: "Neeta (Colleague)", avatar: AV.neeta, text: "Meher, patience rakhna padega yahan." },
          { speaker: "DM Sahab", avatar: AV.dmSahab, text: "Bata Meher, kaise organize karegi apna kaam?" }
        ],
        choices: [
          { text: "Priority ke hisaab se files sort karo aur systematically kaam karo", correct: true,
            skills: { technical: 2, communication: 0, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "DM Sahab", avatar: AV.dmSahab, text: "Sahi approach Meher! Systematic kaam karne se hi itni bheed manage ho sakti hai." } },
          { text: "Jo pehle chillaaye usi ka kaam pehle karo", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "DM Sahab", avatar: AV.dmSahab, text: "Meher, isse system aur bhi disorganized ho jayega. Fair process follow karna zaroori hai." } }
        ],
        betterAdvice: "Kaam ko priority aur system ke hisaab se organize karna chahiye, sabse zyada awaaz karne wale ko pehle nahi."
      },
      {
        location: "Tehsil Office - A Tempting Offer",
        bgImage: "https://images.pexels.com/photos/8152735/pexels-photo-8152735.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Ek senior clerk Meher ko ek 'shortcut' scheme ke baare mein batata hai.",
        dialogues: [
          { speaker: "Senior Clerk", avatar: AV.citizen, text: "Madam, kuch files ko 'fast track' kar sakte hain, thoda extra milta hai isse." },
          { speaker: "Meher (You)", avatar: AV.meher, text: "Yeh kya bol rahe hain aap?" },
          { speaker: "Neeta (Colleague)", avatar: AV.neeta, text: "Meher, yeh purana tareeka hai yahan, bahut log karte hain." },
          { speaker: "Senior Clerk", avatar: AV.citizen, text: "Koi nahi jaanega madam, sab chalta hai." },
          { speaker: "DM Sahab", avatar: AV.dmSahab, text: "Sab theek hai Meher?" },
          { speaker: "Meher (You)", avatar: AV.meher, text: "Sir, mujhe kuch decide karna hai..." }
        ],
        choices: [
          { text: "Is corrupt scheme se saaf inkar karo aur sahi tareeke se kaam karo", correct: true,
            skills: { technical: 0, communication: 1, problemSolving: 0, leadership: 3 },
            reaction: { speaker: "DM Sahab", avatar: AV.dmSahab, text: "Bahut badhiya Meher! Corruption ko turant reject karna hi ek achhe officer ki nishaani hai." } },
          { text: "Thoda try kar lo, bas ek baar", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "DM Sahab", avatar: AV.dmSahab, text: "Meher, ek baar bhi galat kaam karna poori career ke liye risky ho sakta hai." } }
        ],
        betterAdvice: "Corruption ya shortcuts ka offer aaye toh turant mana karna chahiye, 'ek baar' bhi risky hota hai."
      },
      {
        location: "Public Grievance Hearing",
        bgImage: "https://images.pexels.com/photos/7821684/pexels-photo-7821684.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Ek gussa kisan apni zameen ke case ko lekar office mein hangama kar raha hai.",
        dialogues: [
          { speaker: "Farmer", avatar: AV.citizen, text: "Madam, mahino se chakkar kaat raha hoon, koi sunta hi nahi!" },
          { speaker: "Meher (You)", avatar: AV.meher, text: "Aap shaant ho jaiye, main dekhti hoon." },
          { speaker: "Neeta (Colleague)", avatar: AV.neeta, text: "Meher, yeh case pehle bhi aaya tha, complicated hai." },
          { speaker: "Farmer", avatar: AV.citizen, text: "Bas ab aur wait nahi kar sakta main!" },
          { speaker: "DM Sahab", avatar: AV.dmSahab, text: "Meher, aise gussa logon ko kaise handle karti ho?" },
          { speaker: "Meher (You)", avatar: AV.meher, text: "Inhe samjhana hoga ki kaam ho raha hai..." }
        ],
        choices: [
          { text: "Kisan ko shaant karke case ki sahi status clearly samjhao", correct: true,
            skills: { technical: 0, communication: 3, problemSolving: 1, leadership: 0 },
            reaction: { speaker: "DM Sahab", avatar: AV.dmSahab, text: "Perfect Meher! Clear communication se hi logon ka gussa aur frustration kam hota hai." } },
          { text: "Security bula kar unhe bahar nikalwa do", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "DM Sahab", avatar: AV.dmSahab, text: "Meher, isse unka gussa aur badh sakta hai. Pehle baat karke samjhana chahiye tha." } }
        ],
        betterAdvice: "Gusse mein aaye logon ko pehle shaant karke unki baat sunni aur samjhani chahiye, seedha nikalwana nahi chahiye."
      },
      {
        location: "Flood Emergency Response",
        bgImage: "https://images.pexels.com/photos/8152735/pexels-photo-8152735.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Achanak baarish se ilaake mein baadh aa jaati hai, emergency coordination karni hai.",
        dialogues: [
          { speaker: "DM Sahab", avatar: AV.dmSahab, text: "Meher, situation serious hai, kai gaon prabhavit hain." },
          { speaker: "Neeta (Colleague)", avatar: AV.neeta, text: "Relief camp set up karna hoga turant." },
          { speaker: "Meher (You)", avatar: AV.meher, text: "Itne kam resources mein kaise sab manage karu?" },
          { speaker: "Villager", avatar: AV.citizen, text: "Madam, hume madad chahiye, paani ghar tak aa gaya hai!" },
          { speaker: "DM Sahab", avatar: AV.dmSahab, text: "Meher, decisions jaldi lene honge." },
          { speaker: "Neeta (Colleague)", avatar: AV.neeta, text: "Bata Meher, priority kya hogi?" }
        ],
        choices: [
          { text: "Sabse zyada prabhavit gaon ko pehle priority do aur relief team bhejo", correct: true,
            skills: { technical: 0, communication: 0, problemSolving: 3, leadership: 2 },
            reaction: { speaker: "DM Sahab", avatar: AV.dmSahab, text: "Excellent decision Meher! Emergency mein sabse zaroori jagah ko priority dena hi sahi approach hai." } },
          { text: "Sab jagah equally thoda thoda resource baant do", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "DM Sahab", avatar: AV.dmSahab, text: "Meher, isse sabse zaroori jagah ko poori madad nahi mil paati. Priority set karna zaroori tha." } }
        ],
        betterAdvice: "Emergency mein sabse zyada prabhavit jagah ko priority deni chahiye, sab jagah equally baant dena hamesha sahi nahi hota."
      },
      {
        location: "End of Probation",
        bgImage: "https://images.pexels.com/photos/8152735/pexels-photo-8152735.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Meher ka probation period khatam ho raha hai, DM Sahab uske kaam ka review karte hain.",
        dialogues: [
          { speaker: "DM Sahab", avatar: AV.dmSahab, text: "Meher, tumhara probation period achha raha. Kaisa laga yeh experience?" },
          { speaker: "Meher (You)", avatar: AV.meher, text: "Bahut kuch seekha sir, khaas kar logon ki madad karna." },
          { speaker: "Neeta (Colleague)", avatar: AV.neeta, text: "Meher, tum shuru mein bahut nervous thi, ab kaafi confident ho gayi ho." },
          { speaker: "DM Sahab", avatar: AV.dmSahab, text: "Aage kaise continue karna chahti ho apna kaam?" },
          { speaker: "Neeta (Colleague)", avatar: AV.neeta, text: "Kuch officers apna kaam sirf routine bana lete hain..." },
          { speaker: "Meher (You)", avatar: AV.meher, text: "Main sochti hoon..." }
        ],
        choices: [
          { text: "Logon ki seva ko hamesha priority banaye rakhne ka commitment karo", correct: true,
            skills: { technical: 0, communication: 2, problemSolving: 0, leadership: 2 },
            reaction: { speaker: "DM Sahab", avatar: AV.dmSahab, text: "Yehi asli civil service ki bhavna hai Meher! Public service ko priority banaye rakhna sabse important hai." } },
          { text: "Bas routine follow karo, extra effort ki zaroorat nahi", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "DM Sahab", avatar: AV.dmSahab, text: "Meher, routine mein simat jana ek achhe officer ke liye sahi nahi. Thoda aur commitment chahiye." } }
        ],
        betterAdvice: "Government service mein logon ki seva ko hamesha priority banaye rakhna chahiye, sirf routine follow karna kaafi nahi."
      }
    ]
  },

  // ==================================================
  // STORY 13: BUSINESS - "Deal Maker"
  // Characters: Ms. Malhotra (CEO), Farhan (colleague), Naina (You)
  // ==================================================
  business: {
    title: "Deal Maker",
    genre: "Business",
    posterImage: "https://images.pexels.com/photos/6340621/pexels-photo-6340621.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Rise through the corporate world - close deals, survive month-end targets, and prove your integrity under pressure.",
    narration: "Naina apni nayi job ke pehle hi din ek bade client meeting mein baithi hai. Table ke us paar baithe log sirf numbers nahi, uski capability bhi test kar rahe hain - aur is deal ka result uski poori career ki disha tay kar sakta hai.",
    youDefaultName: "Naina",
    role: "Business Executive",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=NainaBusinessM&backgroundColor=ccffe6",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=NainaBusiness&backgroundColor=e0ccff",

    episodes: [
      {
        location: "Office - First Day",
        bgImage: "https://images.pexels.com/photos/6340621/pexels-photo-6340621.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Naina ka pehla din hai company mein. Bada client meeting hone wala hai.",
        dialogues: [
          { speaker: "Ms. Malhotra (CEO)", avatar: AV.malhotra, text: "Naina, welcome! Aaj hi bada client meeting hai, ready ho?" },
          { speaker: "Farhan (Colleague)", avatar: AV.farhan, text: "Thoda nervous mat ho, main hoon saath mein." },
          { speaker: "Naina (You)", avatar: AV.naina, text: "Client kya expect karte hain hum se?" },
          { speaker: "Farhan (Colleague)", avatar: AV.farhan, text: "Wo pricing ko lekar thode strict hain." },
          { speaker: "Ms. Malhotra (CEO)", avatar: AV.malhotra, text: "Naina, meeting mein tumhe bhi baat karni hogi." },
          { speaker: "Naina (You)", avatar: AV.naina, text: "Kaise prepare karu itni jaldi mein?" }
        ],
        choices: [
          { text: "Meeting se pehle key numbers aur client history quickly revise karo", correct: true,
            skills: { technical: 1, communication: 1, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Ms. Malhotra (CEO)", avatar: AV.malhotra, text: "Smart move Naina! Thoda sa prep bhi bade confidence se baat karne mein madad karta hai." } },
          { text: "Bina prep kiye seedha meeting mein chale jao", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Ms. Malhotra (CEO)", avatar: AV.malhotra, text: "Naina, bina taiyari ke jaana risky hota hai, client ko confidence nahi milta." } }
        ],
        betterAdvice: "Important meeting se pehle thoda sa prep karke jaana chahiye, bina taiyari ke nahi jaana chahiye."
      },
      {
        location: "Client Meeting - Pricing Conflict",
        bgImage: "https://images.pexels.com/photos/6340621/pexels-photo-6340621.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Client pricing ko lekar bahas kar raha hai, deal atakti hui lag rahi hai.",
        dialogues: [
          { speaker: "Client", avatar: AV.citizen, text: "Yeh pricing bahut zyada hai, hum itna nahi de sakte." },
          { speaker: "Farhan (Colleague)", avatar: AV.farhan, text: "Naina, client thoda pressure daal raha hai." },
          { speaker: "Naina (You)", avatar: AV.naina, text: "Hume kuch middle ground dhoondna hoga." },
          { speaker: "Ms. Malhotra (CEO)", avatar: AV.malhotra, text: "Naina, apni company ki value bhi maintain karni hai." },
          { speaker: "Client", avatar: AV.citizen, text: "Discount do toh hi deal aage badhegi." },
          { speaker: "Naina (You)", avatar: AV.naina, text: "Kaise respond karu isse?" }
        ],
        choices: [
          { text: "Value clearly explain karo aur ek reasonable middle ground offer karo", correct: true,
            skills: { technical: 0, communication: 3, problemSolving: 1, leadership: 0 },
            reaction: { speaker: "Ms. Malhotra (CEO)", avatar: AV.malhotra, text: "Bahut badhiya Naina! Value samjhana aur fair negotiation karna hi best deal-making hai." } },
          { text: "Client ki poori demand maan lo deal bachane ke liye", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Ms. Malhotra (CEO)", avatar: AV.malhotra, text: "Naina, poori demand maan lena company ke profit ko nuksan pahucha sakta hai." } }
        ],
        betterAdvice: "Negotiation mein apni value clearly samjha kar reasonable middle ground dhoondna chahiye, poori demand maan lena sahi nahi."
      },
      {
        location: "Month-End Target Pressure",
        bgImage: "https://images.pexels.com/photos/7792770/pexels-photo-7792770.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Month khatam hone wala hai aur team apne sales target se peeche hai.",
        dialogues: [
          { speaker: "Ms. Malhotra (CEO)", avatar: AV.malhotra, text: "Team, hum target se kaafi peeche hain is mahine." },
          { speaker: "Farhan (Colleague)", avatar: AV.farhan, text: "Bahut pressure hai Naina, boss thoda tense lag rahe hain." },
          { speaker: "Naina (You)", avatar: AV.naina, text: "Kya karna chahiye hume ab?" },
          { speaker: "Farhan (Colleague)", avatar: AV.farhan, text: "Kuch log numbers thoda adjust karne ki soch rahe hain..." },
          { speaker: "Ms. Malhotra (CEO)", avatar: AV.malhotra, text: "Naina, tumhara kya suggestion hai?" },
          { speaker: "Naina (You)", avatar: AV.naina, text: "Main sochti hoon..." }
        ],
        choices: [
          { text: "Team ke saath mil kar ek realistic extra-push plan banao", correct: true,
            skills: { technical: 0, communication: 0, problemSolving: 2, leadership: 2 },
            reaction: { speaker: "Ms. Malhotra (CEO)", avatar: AV.malhotra, text: "Perfect Naina! Team ke saath realistic plan banana pressure se nikalne ka best tareeka hai." } },
          { text: "Numbers thoda adjust karke report bana do", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Ms. Malhotra (CEO)", avatar: AV.malhotra, text: "Naina, numbers ke saath chhed-chhad karna bahut bada risk hai, agar pakda gaya toh career khatam ho sakta hai." } }
        ],
        betterAdvice: "Target miss hone par numbers adjust karne ke bajaye team ke saath realistic plan banana chahiye."
      },
      {
        location: "An Ethical Dilemma",
        bgImage: "https://images.pexels.com/photos/7792770/pexels-photo-7792770.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Naina ko pata chalta hai ki ek report mein galat information hai jo already CEO ko bhej di gayi hai.",
        dialogues: [
          { speaker: "Naina (You)", avatar: AV.naina, text: "Yeh report mein toh galat numbers hain!" },
          { speaker: "Farhan (Colleague)", avatar: AV.farhan, text: "Pata hai, lekin already CEO ko bhej diya gaya hai." },
          { speaker: "Naina (You)", avatar: AV.naina, text: "Ab kya karu, batau ya chhod du?" },
          { speaker: "Farhan (Colleague)", avatar: AV.farhan, text: "Chhod de Naina, kaun poochega itni chhoti baat." },
          { speaker: "Ms. Malhotra (CEO)", avatar: AV.malhotra, text: "Naina, us report par kal presentation hai." },
          { speaker: "Naina (You)", avatar: AV.naina, text: "Mujhe decide karna hoga..." }
        ],
        choices: [
          { text: "Ms. Malhotra ko turant sahi jaankari do galti ke baare mein", correct: true,
            skills: { technical: 0, communication: 2, problemSolving: 0, leadership: 2 },
            reaction: { speaker: "Ms. Malhotra (CEO)", avatar: AV.malhotra, text: "Bahut sahi Naina! Galti turant batana ek professional ki sabse badi quality hai." } },
          { text: "Chup rehke presentation hone do jaise hai", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Ms. Malhotra (CEO)", avatar: AV.malhotra, text: "Naina, galat information ke saath presentation karna baad mein bada nuksan kar sakta hai." } }
        ],
        betterAdvice: "Report mein galti mile toh turant sahi jaankari deni chahiye, chhupana nahi chahiye."
      },
      {
        location: "The Big Client Pitch",
        bgImage: "https://images.pexels.com/photos/6340621/pexels-photo-6340621.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Naina ko ek naye bade client ke saamne apni company ki strategy present karni hai.",
        dialogues: [
          { speaker: "Ms. Malhotra (CEO)", avatar: AV.malhotra, text: "Naina, aaj tumhe khud pitch present karni hai." },
          { speaker: "Farhan (Colleague)", avatar: AV.farhan, text: "Tension mat lo, tum ready ho iske liye." },
          { speaker: "Naina (You)", avatar: AV.naina, text: "Itne bade client ke saamne... dil zor se dhadak raha hai." },
          { speaker: "Client", avatar: AV.citizen, text: "Batayiye, aapki company hume kya offer karti hai?" },
          { speaker: "Ms. Malhotra (CEO)", avatar: AV.malhotra, text: "Naina, yehi tumhara moment hai." },
          { speaker: "Naina (You)", avatar: AV.naina, text: "Confidence ke saath present karu ya safe options choose karu?" }
        ],
        choices: [
          { text: "Confidence ke saath apni unique strategy clearly present karo", correct: true,
            skills: { technical: 0, communication: 3, problemSolving: 0, leadership: 2 },
            reaction: { speaker: "Ms. Malhotra (CEO)", avatar: AV.malhotra, text: "Outstanding Naina! Confidence aur clarity ke saath pitch karna hi deal jeetne ka raaz hai." } },
          { text: "Itna nervous ho jao ki beech mein hi paani peene chali jao", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Ms. Malhotra (CEO)", avatar: AV.malhotra, text: "Naina! Thoda control rakho, client hasne lage the thoda. Practice karna padega agli baar!" } }
        ],
        betterAdvice: "Bade pitch mein confidence aur clarity ke saath apni baat present karni chahiye, nervousness ko control karna zaroori hai."
      }
    ]
  },

  // ==================================================
  // STORY 14: MEDICAL #3 - "Healing Hands"
  // Characters: Sister Grace (Head Nurse), Nurse Heena, Tanvi (You)
  // ==================================================
  nurse: {
    title: "Healing Hands",
    genre: "Medical",
    role: "Nurse",
    posterImage: "https://images.pexels.com/photos/34185202/pexels-photo-34185202.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Care for patients around the clock as a hospital nurse, balancing compassion, urgency, and split-second judgment calls.",
    narration: "Subah ka round shuru hota hai, aur Tanvi ward mein kai patients ke beech apni duty par nikal padti hai. Har bed ke peeche ek kahani hai - aur Tanvi ko compassion aur urgency, dono ke beech balance banana hai, har single minute.",
    youDefaultName: "Tanvi",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=TanviNurseM&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=TanviNurse&backgroundColor=fff0d6",

    episodes: [
      {
        location: "Hospital Ward - Morning Round",
        bgImage: "https://images.pexels.com/photos/34185202/pexels-photo-34185202.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Tanvi apni nursing duty shuru karti hai, ward mein kai patients hain jinki dekhbhal karni hai.",
        dialogues: [
          { speaker: "Sister Grace", avatar: AV.sisterGrace, text: "Tanvi, aaj ward mein 12 patients hain, sabki dawaiyon ka time alag hai." },
          { speaker: "Nurse Heena", avatar: AV.nurseHeena, text: "Tanvi, ek patient ne bell baja rakhi hai, dard bata rahe hain." },
          { speaker: "Tanvi (You)", avatar: AV.tanvi, text: "Itne patients, kise pehle dekhu?" },
          { speaker: "Sister Grace", avatar: AV.sisterGrace, text: "Tanvi, priority samajhna zaroori hai nursing mein." },
          { speaker: "Nurse Heena", avatar: AV.nurseHeena, text: "Chart dekh kar decide kar sakti hai kaunsa case zyada urgent hai." },
          { speaker: "Sister Grace", avatar: AV.sisterGrace, text: "Bata Tanvi, kaise decide karegi?" }
        ],
        choices: [
          { text: "Chart check karke sabse zyada dard wale patient ko pehle dekho", correct: true,
            skills: { technical: 2, communication: 0, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Sister Grace", avatar: AV.sisterGrace, text: "Sahi kiya Tanvi! Priority samajhna hi achhi nursing ki nishaani hai." } },
          { text: "Jo pehle bell bajaye usi ko pehle dekho", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Sister Grace", avatar: AV.sisterGrace, text: "Tanvi, sirf bell ke order se nahi, medical priority dekhkar kaam karna chahiye." } }
        ],
        betterAdvice: "Patients ko dekhte waqt unki medical priority ke hisaab se order tay karna chahiye, sirf bell bajane ke order se nahi."
      },
      {
        location: "Patient's Bedside",
        bgImage: "https://images.pexels.com/photos/24193871/pexels-photo-24193871.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Ek buzurg patient operation ke baad chalna seekh rahe hain, thoda dara hua mehsoos kar rahe hain.",
        dialogues: [
          { speaker: "Patient", avatar: AV.citizen, text: "Beta, mujhe dar lag raha hai girne ka." },
          { speaker: "Tanvi (You)", avatar: AV.tanvi, text: "Aap chinta mat kijiye, main hoon aapke saath." },
          { speaker: "Nurse Heena", avatar: AV.nurseHeena, text: "Tanvi, physiotherapy schedule bhi follow karna hai." },
          { speaker: "Sister Grace", avatar: AV.sisterGrace, text: "Tanvi, patient ka confidence build karna bhi tumhara kaam hai." },
          { speaker: "Patient", avatar: AV.citizen, text: "Sach mein chal paunga main?" },
          { speaker: "Sister Grace", avatar: AV.sisterGrace, text: "Bata Tanvi, kaise encourage karegi unhe?" }
        ],
        choices: [
          { text: "Dheere dheere support karke chalna practice karwao, hausla badhao", correct: true,
            skills: { technical: 0, communication: 3, problemSolving: 1, leadership: 0 },
            reaction: { speaker: "Sister Grace", avatar: AV.sisterGrace, text: "Perfect Tanvi! Emotional support bhi treatment ka hi hissa hota hai." } },
          { text: "Jaldi karwa do, time kam hai", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Sister Grace", avatar: AV.sisterGrace, text: "Tanvi, jaldi mein karwana patient ko aur dara sakta hai, dheeraj rakhna zaroori hai." } }
        ],
        betterAdvice: "Recovery ke process mein patient ko dheere dheere aur hausla badhate hue support karna chahiye, jaldi nahi karani chahiye."
      },
      {
        location: "Nurses Station - Medication Risk",
        bgImage: "https://images.pexels.com/photos/10827916/pexels-photo-10827916.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Tanvi ko lagta hai ki ek patient ko galat dosage di ja rahi hai.",
        dialogues: [
          { speaker: "Tanvi (You)", avatar: AV.tanvi, text: "Yeh dosage thodi zyada lag rahi hai is patient ke liye..." },
          { speaker: "Nurse Heena", avatar: AV.nurseHeena, text: "Tanvi, doctor ne prescribe kiya hai, usi ke hisaab se dena hoga." },
          { speaker: "Tanvi (You)", avatar: AV.tanvi, text: "Par mujhe lagta hai kuch galat hai chart mein." },
          { speaker: "Sister Grace", avatar: AV.sisterGrace, text: "Tanvi, kya baat hai?" },
          { speaker: "Nurse Heena", avatar: AV.nurseHeena, text: "Itna confident kyun hai tu is baare mein?" },
          { speaker: "Sister Grace", avatar: AV.sisterGrace, text: "Bata Tanvi, kya karegi?" }
        ],
        choices: [
          { text: "Doctor se turant confirm karo dosage sahi hai ya nahi", correct: true,
            skills: { technical: 2, communication: 2, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Sister Grace", avatar: AV.sisterGrace, text: "Bahut badhiya Tanvi! Shaq hone par turant confirm karna patient ki jaan bacha sakta hai." } },
          { text: "Chart follow karke chup chap dawai de do", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Sister Grace", avatar: AV.sisterGrace, text: "Tanvi, agar shaq tha toh confirm karna chahiye tha, chup rehna risky ho sakta tha." } }
        ],
        betterAdvice: "Dosage ya prescription mein shaq ho toh turant doctor se confirm karna chahiye, chup rehkar follow nahi karna chahiye."
      },
      {
        location: "Emergency Call",
        bgImage: "https://images.pexels.com/photos/34185202/pexels-photo-34185202.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Achanak ek patient ki halat bigadti hai, turant response chahiye.",
        dialogues: [
          { speaker: "Nurse Heena", avatar: AV.nurseHeena, text: "Tanvi! Bed 7 ka patient responsive nahi hai!" },
          { speaker: "Tanvi (You)", avatar: AV.tanvi, text: "Turant doctor ko bulao!" },
          { speaker: "Sister Grace", avatar: AV.sisterGrace, text: "Tanvi, tab tak vitals check karo aur stabilize karne ki koshish karo." },
          { speaker: "Nurse Heena", avatar: AV.nurseHeena, text: "Tanvi, hands kaanp rahe hain kya?" },
          { speaker: "Tanvi (You)", avatar: AV.tanvi, text: "Thoda, par focus karna hoga." },
          { speaker: "Sister Grace", avatar: AV.sisterGrace, text: "Bata Tanvi, kaise handle karegi pressure ko?" }
        ],
        choices: [
          { text: "Shaant rehkar training follow karo aur turant action lo", correct: true,
            skills: { technical: 3, communication: 0, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Sister Grace", avatar: AV.sisterGrace, text: "Excellent Tanvi! Emergency mein shaant rehkar training follow karna hi jaan bachata hai." } },
          { text: "Ghabra kar sab kuch bhool jao", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Sister Grace", avatar: AV.sisterGrace, text: "Tanvi, ghabrana normal hai, par training yaad rakhna zaroori hai aise waqt." } }
        ],
        betterAdvice: "Emergency mein shaant rehkar apni training follow karni chahiye, ghabrana kaam nahi aata."
      },
      {
        location: "End of Shift Reflection",
        bgImage: "https://images.pexels.com/photos/10827916/pexels-photo-10827916.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Lambi shift khatam ho rahi hai, Tanvi thak chuki hai lekin santusht bhi hai.",
        dialogues: [
          { speaker: "Sister Grace", avatar: AV.sisterGrace, text: "Tanvi, aaj bahut achha kaam kiya tumne." },
          { speaker: "Tanvi (You)", avatar: AV.tanvi, text: "Thanks ma'am, thoda thaka hua feel ho raha hai lekin accha laga madad karke." },
          { speaker: "Nurse Heena", avatar: AV.nurseHeena, text: "Tanvi, yehi toh nursing hai, thakan ke baad bhi santushti." },
          { speaker: "Sister Grace", avatar: AV.sisterGrace, text: "Tanvi, aage kaise apna kaam continue karna chahti ho?" },
          { speaker: "Nurse Heena", avatar: AV.nurseHeena, text: "Kuch nurses bas routine follow karte hain..." },
          { speaker: "Tanvi (You)", avatar: AV.tanvi, text: "Main sochti hoon..." }
        ],
        choices: [
          { text: "Patient care ko hamesha priority banaye rakhne ka commitment karo", correct: true,
            skills: { technical: 0, communication: 2, problemSolving: 0, leadership: 2 },
            reaction: { speaker: "Sister Grace", avatar: AV.sisterGrace, text: "Yehi asli nursing spirit hai Tanvi! Patient care ko priority banaye rakhna sabse important hai." } },
          { text: "Bas routine follow karo, extra effort ki zaroorat nahi", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Sister Grace", avatar: AV.sisterGrace, text: "Tanvi, routine mein simat jana ek achhi nurse ke liye sahi nahi." } }
        ],
        betterAdvice: "Nursing mein hamesha patient care ko priority banaye rakhna chahiye, sirf routine follow karna kaafi nahi."
      }
    ]
  },

  // ==================================================
  // STORY 15: SPORTS #3 - "Fast Break"
  // Characters: Coach Dsouza, Rohit (teammate), Zara (You)
  // ==================================================
  basketball: {
    title: "Fast Break",
    genre: "Sports",
    role: "Basketball Player",
    posterImage: "https://images.pexels.com/photos/2874717/pexels-photo-2874717.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Chase a spot on the school basketball team through tryouts, tough defense, team conflict, and a last-second finals shot.",
    narration: "Court par squeak karte shoes ki awaaz goonjti hai jab Zara school basketball team ke try-outs mein apni jagah banane ki koshish karti hai. Competition tough hai, aur Zara ko sirf skill nahi, apna dil bhi maidan par dikhana hoga.",
    youDefaultName: "Zara",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=ZaraBballM&backgroundColor=ffd6d6",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=ZaraBball&backgroundColor=d6e8ff",

    episodes: [
      {
        location: "Try-Outs",
        bgImage: "https://images.pexels.com/photos/2874717/pexels-photo-2874717.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Zara ka school basketball team ke try-outs mein selection hone wala hai.",
        dialogues: [
          { speaker: "Coach Dsouza", avatar: AV.coachDsouza, text: "Zara, aaj try-outs hain, sabko apna best dikhana hai." },
          { speaker: "Rohit (Teammate)", avatar: AV.rohit, text: "Zara, competition tough hai is saal." },
          { speaker: "Zara (You)", avatar: AV.zara, text: "Thoda nervous hoon, itne acche players hain." },
          { speaker: "Coach Dsouza", avatar: AV.coachDsouza, text: "Zara, apna natural game khelo, overthink mat karo." },
          { speaker: "Rohit (Teammate)", avatar: AV.rohit, text: "Bas apne basics strong rakh, sab theek hoga." },
          { speaker: "Coach Dsouza", avatar: AV.coachDsouza, text: "Bata Zara, kaisi approach rakhegi?" }
        ],
        choices: [
          { text: "Apne basics aur teamwork par focus karo", correct: true,
            skills: { technical: 3, communication: 0, problemSolving: 1, leadership: 0 },
            reaction: { speaker: "Coach Dsouza", avatar: AV.coachDsouza, text: "Bahut badhiya Zara! Basics strong hona hi selection ki neev hai." } },
          { text: "Sabko impress karne ke liye solo tricks try karo", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Coach Dsouza", avatar: AV.coachDsouza, text: "Zara, solo tricks se coach ko teamwork nahi dikhta, basics important hain." } }
        ],
        betterAdvice: "Try-outs mein apne basics aur teamwork par focus karna chahiye, solo tricks try karne ke bajaye."
      },
      {
        location: "Practice - Tough Defense",
        bgImage: "https://images.pexels.com/photos/30555521/pexels-photo-30555521.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Practice match mein ek strong opponent Zara ko baar baar block kar raha hai.",
        dialogues: [
          { speaker: "Rohit (Teammate)", avatar: AV.rohit, text: "Zara, yeh defender bahut strong hai aaj." },
          { speaker: "Zara (You)", avatar: AV.zara, text: "Har baar block ho rahi hoon, frustrate ho rahi hoon." },
          { speaker: "Coach Dsouza", avatar: AV.coachDsouza, text: "Zara, frustration se game bigadta hai." },
          { speaker: "Rohit (Teammate)", avatar: AV.rohit, text: "Pass kar diya kar jab block ho rahi ho." },
          { speaker: "Coach Dsouza", avatar: AV.coachDsouza, text: "Zara, kya karegi is situation mein?" },
          { speaker: "Zara (You)", avatar: AV.zara, text: "Sochti hoon..." }
        ],
        choices: [
          { text: "Team ko pass karo aur team play par focus karo", correct: true,
            skills: { technical: 0, communication: 2, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Coach Dsouza", avatar: AV.coachDsouza, text: "Perfect Zara! Jab individual move na chale, team play hi best option hota hai." } },
          { text: "Frustration mein akele hi shot try karte raho", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Coach Dsouza", avatar: AV.coachDsouza, text: "Zara, frustration mein akele try karna aur bhi turnovers de sakta hai." } }
        ],
        betterAdvice: "Jab defense strong ho toh team ko pass karke team play par focus karna chahiye, akele try karte rehna nahi chahiye."
      },
      {
        location: "Locker Room - Team Conflict",
        bgImage: "https://images.pexels.com/photos/2874717/pexels-photo-2874717.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Ek teammate Zara ki playing style se naraaz hai, locker room mein tension hai.",
        dialogues: [
          { speaker: "Rohit (Teammate)", avatar: AV.rohit, text: "Zara, ek teammate bol raha hai tu ball zyada apne paas rakhti hai." },
          { speaker: "Zara (You)", avatar: AV.zara, text: "Aisa nahi hai, main sirf scoring chances dhoondti hoon." },
          { speaker: "Coach Dsouza", avatar: AV.coachDsouza, text: "Team mein aise disagreements aate hain." },
          { speaker: "Rohit (Teammate)", avatar: AV.rohit, text: "Baat kar le usse directly." },
          { speaker: "Coach Dsouza", avatar: AV.coachDsouza, text: "Zara, kaise handle karegi is conflict ko?" },
          { speaker: "Zara (You)", avatar: AV.zara, text: "Main sochti hoon..." }
        ],
        choices: [
          { text: "Teammate se shaant rehkar baat karo aur samjho unki baat", correct: true,
            skills: { technical: 0, communication: 3, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Coach Dsouza", avatar: AV.coachDsouza, text: "Bahut sahi Zara! Team ke andar open communication conflicts suljhati hai." } },
          { text: "Ignore karo, apna game khelte raho", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Coach Dsouza", avatar: AV.coachDsouza, text: "Zara, ignore karne se team chemistry aur bigad sakti hai." } }
        ],
        betterAdvice: "Team ke andar conflict ho toh shaant rehkar directly baat karke suljhana chahiye, ignore nahi karna chahiye."
      },
      {
        location: "Injury Scare",
        bgImage: "https://images.pexels.com/photos/30555521/pexels-photo-30555521.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Practice ke dauraan Zara ke ankle mein chot lag jaati hai, finals kal hai.",
        dialogues: [
          { speaker: "Zara (You)", avatar: AV.zara, text: "Aah! Ankle mein kuch ho gaya." },
          { speaker: "Rohit (Teammate)", avatar: AV.rohit, text: "Zara theek hai? Kal finals hai!" },
          { speaker: "Coach Dsouza", avatar: AV.coachDsouza, text: "Chot ko halke mein mat lo Zara." },
          { speaker: "Zara (You)", avatar: AV.zara, text: "Par main finals miss nahi karna chahti..." },
          { speaker: "Coach Dsouza", avatar: AV.coachDsouza, text: "Zara, decision tumhari health ko priority deni chahiye." },
          { speaker: "Rohit (Teammate)", avatar: AV.rohit, text: "Bata Zara, kya karegi?" }
        ],
        choices: [
          { text: "Turant physio se check karwao aur unki advice follow karo", correct: true,
            skills: { technical: 0, communication: 0, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "Coach Dsouza", avatar: AV.coachDsouza, text: "Sahi kiya Zara! Health ko priority dena hi asli professionalism hai." } },
          { text: "Chot ignore karke practice continue karo", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Coach Dsouza", avatar: AV.coachDsouza, text: "Zara, chot ignore karna use aur serious bana sakta hai, risky decision tha." } }
        ],
        betterAdvice: "Chot lagne par turant physio se check karwana chahiye, ignore karke khelna risky hota hai."
      },
      {
        location: "The Finals - Last Second Shot",
        bgImage: "https://images.pexels.com/photos/2874717/pexels-photo-2874717.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Finals ka aakhri moment hai, score tied hai, Zara ke paas ball hai.",
        dialogues: [
          { speaker: "Rohit (Teammate)", avatar: AV.rohit, text: "Zara, yehi moment hai! Time khatam ho raha hai!" },
          { speaker: "Zara (You)", avatar: AV.zara, text: "Dil zor se dhadak raha hai..." },
          { speaker: "Coach Dsouza", avatar: AV.coachDsouza, text: "Zara, jo practice kiya hai wahi yaad rakh." },
          { speaker: "Rohit (Teammate)", avatar: AV.rohit, text: "Shoot kar ya pass kar, tu decide kar!" },
          { speaker: "Coach Dsouza", avatar: AV.coachDsouza, text: "Zara, kaise khelegi is pressure mein?" },
          { speaker: "Zara (You)", avatar: AV.zara, text: "Main sochti hoon..." }
        ],
        choices: [
          { text: "Shaant rehkar apna practiced shot lagao", correct: true,
            skills: { technical: 2, communication: 0, problemSolving: 3, leadership: 0 },
            reaction: { speaker: "Coach Dsouza", avatar: AV.coachDsouza, text: "Outstanding Zara! Pressure mein shaant rehkar practiced shot lagana hi champions ki nishaani hai." } },
          { text: "Ghabra kar jaldi mein random shot maar do", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Coach Dsouza", avatar: AV.coachDsouza, text: "Zara, jaldi mein random shot risky hota hai, thoda soch kar decide karna chahiye tha." } }
        ],
        betterAdvice: "High-pressure moment mein shaant rehkar apna practiced shot lagana chahiye, jaldi mein random decision nahi lena chahiye."
      }
    ]
  },

  // ==================================================
  // STORY 16: IT #3 - "Firewall"
  // Characters: Ravi Sir, Ananya (colleague), Devansh (You)
  // ==================================================
  cybersecurity: {
    title: "Firewall",
    genre: "IT",
    role: "Cybersecurity Analyst",
    posterImage: "https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Defend a company's systems from real cyber threats - investigate breaches, contain attacks, and stop phishing scams.",
    narration: "Devansh apni naukri ke pehle hi din security office mein baitha hai jab screen par ek suspicious login alert flash hota hai. Kuch seconds mein usse decide karna hai - false alarm, ya company ke systems par ek asli hamla shuru ho chuka hai.",
    youDefaultName: "Devansh",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=DevanshSecM&backgroundColor=d6ffe6",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=DevanshSecF&backgroundColor=ffd6e6",

    episodes: [
      {
        location: "Security Office - First Alert",
        bgImage: "https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Devansh ka pehla din hai, achanak ek suspicious login alert aata hai.",
        dialogues: [
          { speaker: "Ravi Sir", avatar: AV.raviSir, text: "Devansh, welcome to the team. Yeh dekho, ek suspicious login alert aaya hai." },
          { speaker: "Ananya (Colleague)", avatar: AV.ananya, text: "Devansh, yeh IP address company ke normal locations se match nahi karta." },
          { speaker: "Devansh (You)", avatar: AV.devansh, text: "Pehli baar dekh raha hoon aisa alert, kya karu?" },
          { speaker: "Ravi Sir", avatar: AV.raviSir, text: "Devansh, pehle investigate karo, panic mat karo." },
          { speaker: "Ananya (Colleague)", avatar: AV.ananya, text: "Logs check karke pata chalega kya ho raha hai." },
          { speaker: "Ravi Sir", avatar: AV.raviSir, text: "Bata Devansh, kaise aage badhega?" }
        ],
        choices: [
          { text: "Login logs aur IP details carefully investigate karo", correct: true,
            skills: { technical: 3, communication: 0, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Ravi Sir", avatar: AV.raviSir, text: "Sahi kiya Devansh! Systematic investigation hi cybersecurity ka pehla kadam hai." } },
          { text: "Turant account ko permanently block kar do bina investigate kiye", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Ravi Sir", avatar: AV.raviSir, text: "Devansh, bina investigate kiye block karna galat bhi ho sakta hai, pehle confirm karna zaroori hai." } }
        ],
        betterAdvice: "Suspicious activity dikhe toh pehle carefully investigate karna chahiye, turant drastic action lena nahi chahiye."
      },
      {
        location: "Investigating a Breach",
        bgImage: "https://images.pexels.com/photos/5380618/pexels-photo-5380618.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Investigation se pata chalta hai ki ek real security breach hua hai.",
        dialogues: [
          { speaker: "Ananya (Colleague)", avatar: AV.ananya, text: "Devansh, yeh toh real breach hai! Kisi ne system access kiya hai." },
          { speaker: "Devansh (You)", avatar: AV.devansh, text: "Kitna data affected hua hai pata karna hoga." },
          { speaker: "Ravi Sir", avatar: AV.raviSir, text: "Devansh, management ko turant inform karna zaroori hai." },
          { speaker: "Ananya (Colleague)", avatar: AV.ananya, text: "Par pehle poori picture samajhni chahiye na?" },
          { speaker: "Ravi Sir", avatar: AV.raviSir, text: "Devansh, tu bata, kya priority honi chahiye?" },
          { speaker: "Devansh (You)", avatar: AV.devansh, text: "Main sochta hoon..." }
        ],
        choices: [
          { text: "Turant breach ko contain karo, phir management ko poori jaankari do", correct: true,
            skills: { technical: 3, communication: 0, problemSolving: 0, leadership: 2 },
            reaction: { speaker: "Ravi Sir", avatar: AV.raviSir, text: "Excellent Devansh! Pehle damage control, phir clear communication - yehi sahi order hai." } },
          { text: "Pehle poori report likhne baith jao, baad mein contain karenge", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Ravi Sir", avatar: AV.raviSir, text: "Devansh, report likhte rehna jabki breach active hai, damage aur badha sakta hai." } }
        ],
        betterAdvice: "Security breach ke waqt pehle turant contain karna chahiye, phir detailed report banani chahiye."
      },
      {
        location: "Phishing Email Discovery",
        bgImage: "https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Devansh ko pata chalta hai ki company ke employees ko ek fake email bheja gaya hai.",
        dialogues: [
          { speaker: "Devansh (You)", avatar: AV.devansh, text: "Yeh email toh phishing lag raha hai, company logo copy kiya hai." },
          { speaker: "Ananya (Colleague)", avatar: AV.ananya, text: "Kai employees ne already click kar diya hoga shayad." },
          { speaker: "Ravi Sir", avatar: AV.raviSir, text: "Devansh, jaldi warn karna hoga sabko." },
          { speaker: "Ananya (Colleague)", avatar: AV.ananya, text: "Bina samjhaye warn karenge toh log ghabra jayenge." },
          { speaker: "Ravi Sir", avatar: AV.raviSir, text: "Bata Devansh, kaise communicate karega?" },
          { speaker: "Devansh (You)", avatar: AV.devansh, text: "Main sochta hoon..." }
        ],
        choices: [
          { text: "Clear instructions ke saath sabko turant alert karo, kya karna hai batao", correct: true,
            skills: { technical: 1, communication: 3, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Ravi Sir", avatar: AV.raviSir, text: "Bahut badhiya Devansh! Clear, actionable alert hi employees ko sahi tarike se protect karta hai." } },
          { text: "Kuch mat karo, khud hi samajh jayenge log", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Ravi Sir", avatar: AV.raviSir, text: "Devansh, bina warn kiye chodna risky hai, sabhi employees informed hone chahiye." } }
        ],
        betterAdvice: "Phishing jaisa threat mile toh turant clear instructions ke saath sabko alert karna chahiye."
      },
      {
        location: "Late Night Incident",
        bgImage: "https://images.pexels.com/photos/5380618/pexels-photo-5380618.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Raat ko achanak ek bada cyber attack detect hota hai, turant response chahiye.",
        dialogues: [
          { speaker: "Ananya (Colleague)", avatar: AV.ananya, text: "Devansh! Bada attack detect hua hai, servers down ho rahe hain!" },
          { speaker: "Devansh (You)", avatar: AV.devansh, text: "Itni raat ko itna bada issue... sabse pehle kya karu?" },
          { speaker: "Ravi Sir", avatar: AV.raviSir, text: "Devansh, shaant raho, systematically debug karo." },
          { speaker: "Ananya (Colleague)", avatar: AV.ananya, text: "Devansh, kaha se shuru karein?" },
          { speaker: "Ravi Sir", avatar: AV.raviSir, text: "Bata Devansh, kya priority hogi?" },
          { speaker: "Devansh (You)", avatar: AV.devansh, text: "Main sochta hoon..." }
        ],
        choices: [
          { text: "Critical systems ko pehle isolate karo, phir root cause dhoondo", correct: true,
            skills: { technical: 3, communication: 0, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Ravi Sir", avatar: AV.raviSir, text: "Perfect Devansh! Critical systems ko pehle isolate karna hi damage kam karta hai." } },
          { text: "Sab systems ek saath fix karne ki koshish karo", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Ravi Sir", avatar: AV.raviSir, text: "Devansh, sab kuch ek saath fix karna confusion create karta hai, priority set karna zaroori tha." } }
        ],
        betterAdvice: "Bade cyber attack mein critical systems ko pehle isolate karna chahiye, phir systematically root cause dhoondni chahiye."
      },
      {
        location: "Post-Incident Review",
        bgImage: "https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Attack handle ho chuka hai, ab team ek review meeting kar rahi hai.",
        dialogues: [
          { speaker: "Ravi Sir", avatar: AV.raviSir, text: "Devansh, tumne bahut achha handle kiya kal raat wala incident." },
          { speaker: "Devansh (You)", avatar: AV.devansh, text: "Thanks sir, bahut kuch seekha is experience se." },
          { speaker: "Ananya (Colleague)", avatar: AV.ananya, text: "Devansh, ab hume future ke liye better prepare hona hoga." },
          { speaker: "Ravi Sir", avatar: AV.raviSir, text: "Devansh, kya suggest karega prevent karne ke liye?" },
          { speaker: "Ananya (Colleague)", avatar: AV.ananya, text: "Kuch log bas is incident ko bhool jayenge..." },
          { speaker: "Devansh (You)", avatar: AV.devansh, text: "Main sochta hoon..." }
        ],
        choices: [
          { text: "Detailed report banao aur security measures improve karne ka plan do", correct: true,
            skills: { technical: 2, communication: 0, problemSolving: 0, leadership: 2 },
            reaction: { speaker: "Ravi Sir", avatar: AV.raviSir, text: "Bahut badhiya Devansh! Har incident se seekh kar system improve karna hi asli cybersecurity mindset hai." } },
          { text: "Incident ko bhool kar normal kaam par wapas chale jao", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Ravi Sir", avatar: AV.raviSir, text: "Devansh, incident se na seekhna future mein wahi galti dohra sakta hai." } }
        ],
        betterAdvice: "Har security incident ke baad detailed review karke future ke liye measures improve karne chahiye."
      }
    ]
  },

  // ==================================================
  // STORY 19: POLICE #2 - "The Investigation"
  // Characters: Inspector Rathore, Iqbal (constable), Vivaan (You)
  // ==================================================
  detective: {
    title: "The Investigation",
    genre: "Police",
    role: "Detective",
    posterImage: "https://images.pexels.com/photos/10464475/pexels-photo-10464475.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Crack real cases as a crime branch detective - examine evidence, interrogate suspects, and follow the clues to the truth.",
    narration: "Vivaan ki mez par ek naya case file rakhi jaati hai - ek showroom se jewellery chori. Sabooton ke tukde bikhre pade hain, aur Vivaan ko unhe jodkar sach tak pahunchna hai, ek kadam ek baar mein.",
    youDefaultName: "Vivaan",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=VivaanDetectiveM&backgroundColor=d6f0ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=VivaanDetectiveF&backgroundColor=ffd6ec",

    episodes: [
      {
        location: "Crime Branch Office - New Case",
        bgImage: "https://images.pexels.com/photos/10464475/pexels-photo-10464475.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Vivaan ko ek important case assign hota hai - ek showroom se jewellery chori.",
        dialogues: [
          { speaker: "Inspector Rathore", avatar: AV.inspectorRathore, text: "Vivaan, yeh naya case hai, ek showroom se lakhon ki jewellery chori hui hai." },
          { speaker: "Iqbal (Constable)", avatar: AV.iqbal, text: "Sir, CCTV footage mil gayi hai, thodi blurry hai." },
          { speaker: "Vivaan (You)", avatar: AV.vivaan, text: "Kaha se shuru karu investigation?" },
          { speaker: "Inspector Rathore", avatar: AV.inspectorRathore, text: "Vivaan, crime scene ka bariki se examination zaroori hai." },
          { speaker: "Iqbal (Constable)", avatar: AV.iqbal, text: "Fingerprints bhi collect kar sakte hain shayad." },
          { speaker: "Inspector Rathore", avatar: AV.inspectorRathore, text: "Bata Vivaan, kaise aage badhega?" }
        ],
        choices: [
          { text: "Crime scene ko bariki se examine karo aur sabhi evidence collect karo", correct: true,
            skills: { technical: 2, communication: 0, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Inspector Rathore", avatar: AV.inspectorRathore, text: "Sahi kiya Vivaan! Thorough examination hi case solve karne ki neev hoti hai." } },
          { text: "Sirf CCTV footage dekh kar seedha suspect dhoondne nikal jao", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Inspector Rathore", avatar: AV.inspectorRathore, text: "Vivaan, sirf ek evidence par bharosa karna case kamzor bana sakta hai, poora examination zaroori tha." } }
        ],
        betterAdvice: "Investigation shuru karte waqt crime scene ka poora examination karna chahiye, sirf ek evidence par nirbhar nahi rehna chahiye."
      },
      {
        location: "Analyzing Evidence",
        bgImage: "https://images.pexels.com/photos/10481251/pexels-photo-10481251.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Evidence analyze karte waqt do alag-alag clues milte hain jo ek doosre se match nahi karte.",
        dialogues: [
          { speaker: "Iqbal (Constable)", avatar: AV.iqbal, text: "Sir, fingerprints se ek naam aaya hai, par CCTV mein koi aur dikh raha hai." },
          { speaker: "Vivaan (You)", avatar: AV.vivaan, text: "Yeh toh confusing hai, dono clues alag directions dikha rahe hain." },
          { speaker: "Inspector Rathore", avatar: AV.inspectorRathore, text: "Vivaan, aise mein jaldi conclusion nikalna galat ho sakta hai." },
          { speaker: "Iqbal (Constable)", avatar: AV.iqbal, text: "Kisi ek suspect ko turant pakad len?" },
          { speaker: "Inspector Rathore", avatar: AV.inspectorRathore, text: "Vivaan, bata kaise aage badhega?" },
          { speaker: "Vivaan (You)", avatar: AV.vivaan, text: "Main sochta hoon..." }
        ],
        choices: [
          { text: "Dono clues ko carefully cross-check karo, jaldi conclusion mat nikalo", correct: true,
            skills: { technical: 3, communication: 0, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Inspector Rathore", avatar: AV.inspectorRathore, text: "Bahut badhiya Vivaan! Confusing evidence mein patience rakhna hi sahi investigation hai." } },
          { text: "Jo pehla naam mila usi ko suspect maan kar pakad lo", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Inspector Rathore", avatar: AV.inspectorRathore, text: "Vivaan, bina poori tarah confirm kiye kisi ko pakadna galat bhi ho sakta hai." } }
        ],
        betterAdvice: "Confusing evidence milne par jaldi conclusion nikalne ke bajaye carefully cross-check karna chahiye."
      },
      {
        location: "Interrogation Room",
        bgImage: "https://images.pexels.com/photos/10464475/pexels-photo-10464475.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Ek suspect se poochhtaach ki jaa rahi hai, woh bahut ghabraya hua hai.",
        dialogues: [
          { speaker: "Suspect", avatar: AV.citizen, text: "Sahab, maine kuch nahi kiya, please yakeen kijiye." },
          { speaker: "Iqbal (Constable)", avatar: AV.iqbal, text: "Vivaan, yeh bahut nervous hai, kuch toh chhupa raha hai." },
          { speaker: "Vivaan (You)", avatar: AV.vivaan, text: "Nervous hona guilt ka proof nahi hota." },
          { speaker: "Inspector Rathore", avatar: AV.inspectorRathore, text: "Vivaan, sahi baat hai, dhyan se poochhtaach karo." },
          { speaker: "Iqbal (Constable)", avatar: AV.iqbal, text: "Vivaan, kaise approach karega isse?" },
          { speaker: "Vivaan (You)", avatar: AV.vivaan, text: "Main sochta hoon..." }
        ],
        choices: [
          { text: "Shaant rehkar sawaal poocho aur unki baat dhyan se suno", correct: true,
            skills: { technical: 0, communication: 3, problemSolving: 1, leadership: 0 },
            reaction: { speaker: "Inspector Rathore", avatar: AV.inspectorRathore, text: "Perfect Vivaan! Shaant aur fair poochhtaach hi sahi jawab nikalti hai." } },
          { text: "Dabaav dalkar jaldi confession lene ki koshish karo", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Inspector Rathore", avatar: AV.inspectorRathore, text: "Vivaan, dabaav dalkar liya confession galat bhi ho sakta hai, fair process follow karna zaroori hai." } }
        ],
        betterAdvice: "Poochhtaach shaant rehkar aur fair tareeke se karni chahiye, dabaav dalkar confession lena sahi nahi."
      },
      {
        location: "A Breakthrough Clue",
        bgImage: "https://images.pexels.com/photos/10481251/pexels-photo-10481251.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Achanak ek naya clue milta hai jo poora case badal sakta hai.",
        dialogues: [
          { speaker: "Iqbal (Constable)", avatar: AV.iqbal, text: "Sir! Ek naya CCTV footage mila hai doosre camera se!" },
          { speaker: "Vivaan (You)", avatar: AV.vivaan, text: "Yeh toh game-changer ho sakta hai!" },
          { speaker: "Inspector Rathore", avatar: AV.inspectorRathore, text: "Vivaan, jaldi analyze karo isse." },
          { speaker: "Iqbal (Constable)", avatar: AV.iqbal, text: "Vivaan, isse poora case solve ho sakta hai shayad." },
          { speaker: "Inspector Rathore", avatar: AV.inspectorRathore, text: "Bata Vivaan, kaise verify karega yeh clue?" },
          { speaker: "Vivaan (You)", avatar: AV.vivaan, text: "Main sochta hoon..." }
        ],
        choices: [
          { text: "Naye clue ko purane evidence ke saath cross-verify karo", correct: true,
            skills: { technical: 2, communication: 0, problemSolving: 3, leadership: 0 },
            reaction: { speaker: "Inspector Rathore", avatar: AV.inspectorRathore, text: "Excellent Vivaan! Naye evidence ko purane ke saath verify karna hi accuracy sunishchit karta hai." } },
          { text: "Naye clue ke basis par turant case close kar do", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Inspector Rathore", avatar: AV.inspectorRathore, text: "Vivaan, sirf ek naye clue par turant case close karna risky ho sakta hai, verification zaroori tha." } }
        ],
        betterAdvice: "Naye clue ko hamesha purane evidence ke saath cross-verify karna chahiye, turant case close nahi karna chahiye."
      },
      {
        location: "Case Closed",
        bgImage: "https://images.pexels.com/photos/10464475/pexels-photo-10464475.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Case successfully solve ho gaya hai, asli chor pakda gaya hai.",
        dialogues: [
          { speaker: "Inspector Rathore", avatar: AV.inspectorRathore, text: "Vivaan, bahut badhiya kaam kiya tumne is case mein." },
          { speaker: "Vivaan (You)", avatar: AV.vivaan, text: "Thanks sir, bahut kuch seekha is investigation se." },
          { speaker: "Iqbal (Constable)", avatar: AV.iqbal, text: "Vivaan, patience aur systematic approach kaam aaya." },
          { speaker: "Inspector Rathore", avatar: AV.inspectorRathore, text: "Vivaan, aage kaise apna kaam continue karna chahega?" },
          { speaker: "Iqbal (Constable)", avatar: AV.iqbal, text: "Kuch detectives sirf shortcuts dhoondte hain..." },
          { speaker: "Vivaan (You)", avatar: AV.vivaan, text: "Main sochta hoon..." }
        ],
        choices: [
          { text: "Hamesha thorough aur fair investigation ka commitment rakho", correct: true,
            skills: { technical: 0, communication: 0, problemSolving: 2, leadership: 2 },
            reaction: { speaker: "Inspector Rathore", avatar: AV.inspectorRathore, text: "Yehi asli detective ki soch hai Vivaan! Thorough aur fair investigation hamesha priority honi chahiye." } },
          { text: "Shortcuts dhoondkar jaldi cases solve karne ki koshish karo", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Inspector Rathore", avatar: AV.inspectorRathore, text: "Vivaan, shortcuts lena galat logon ko saza dilwa sakta hai, thorough investigation zaroori hai." } }
        ],
        betterAdvice: "Detective ke kaam mein hamesha thorough aur fair investigation ka commitment rakhna chahiye, shortcuts nahi dhoondne chahiye."
      }
    ]
  },

  // ==================================================
  // STORY 18: AVIATION - "Cleared for Takeoff"
  // Characters: Captain Mehta (mentor), Zoya (Senior FO), Kunal (best
  // friend, works in Dispatch/Ops), Aarav (You)
  // NOTE: Written directly in English (not Hinglish) - Hindi/Hinglish
  // versions can be added to translations.js later, same as other stories.
  // ==================================================
  pilot: {
    title: "Cleared for Takeoff",
    genre: "Aviation",
    youDefaultName: "Aarav",
    role: "Commercial Pilot",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=AaravPilotTrainee&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=AaravPilotTrainee&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/4269510/pexels-photo-4269510.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Fly as a young first officer through a real squall line, clear-air turbulence near the coffin corner, and a tight fuel decision - with your best friend from flight school on the radio in Ops.",
    narration: "The briefing room is quiet except for the hum of weather radar screens. Aarav has flown this route before, but tonight a line of storms taller than the aircraft can climb is building right across it - and every choice from here on will test more than just flying skill.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "Flight Briefing Room",
        bgImage: "https://images.pexels.com/photos/4269510/pexels-photo-4269510.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Pre-flight briefing. A line of embedded thunderstorms is building along the route, with tops likely above the aircraft's maximum altitude - meaning there's no climbing over it today. The aircraft is also loaded close to its maximum takeoff weight.",
        dialogues: [
          { speaker: "Kunal (Dispatch)", avatar: AV.kunalPilot, text: "Aarav, bhai, look at this SIGMET before you sign anything. Cell tops near forty-five thousand feet - way above our ceiling, so there's no topping this line today." },
          { speaker: "Captain Mehta", avatar: AV.captMehta, text: "And we're already close to max takeoff weight with today's cargo. Extra fuel for a longer weather diversion means we'd have to offload some of that cargo." },
          { speaker: "Zoya (Senior FO)", avatar: AV.zoyaPilot, text: "Ops will push back on offloading revenue cargo, Aarav. It's your first big call of the day." },
          { speaker: "Kunal (Dispatch)", avatar: AV.kunalPilot, text: "I've got your back either way, but tell me what you want to do before the loaders finish." },
          { speaker: "Aarav (You)", avatar: AV.aaravPilot, text: "A storm line this tall never behaves exactly like the forecast... so the real question is what we do if it's worse than expected." }
        ],
        choices: [
          { text: "Ask for some cargo to be offloaded to carry extra contingency fuel, accepting the commercial cost for a bigger weather-deviation margin", correct: true,
            skills: { technical: 2, communication: 1, problemSolving: 3, leadership: 1 },
            reaction: { speaker: "Captain Mehta", avatar: AV.captMehta, text: "Good call, Aarav. Against a line we can't top, extra fuel margin buys us room to deviate wide if the cells are worse than forecast - cargo can go on the next flight, a diversion can't be undone." } },
          { text: "Keep the full cargo load and plan on the standard fuel reserve, expecting only a small deviation", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 1, leadership: 0 },
            reaction: { speaker: "Captain Mehta", avatar: AV.captMehta, text: "Aarav, 'expecting a small deviation' against a line we can't climb over is exactly the assumption that gets crews into a fuel squeeze later. We plan for the deviation being bigger, not smaller." } }
        ],
        betterAdvice: "When a storm line's tops are above your aircraft's ceiling, plan extra fuel margin before departure - don't assume the actual deviation will match the smallest forecast estimate."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "Approaching the Squall Line",
        bgImage: "https://images.pexels.com/photos/18257035/pexels-photo-18257035.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Airborne and approaching the storm line. The onboard weather radar shows one strong cell dead ahead - but the picture behind it looks strangely quiet.",
        dialogues: [
          { speaker: "Zoya (Senior FO)", avatar: AV.zoyaPilot, text: "That cell's showing strong returns, but it doesn't look too wide on the scope. A quick ten-mile jog around it and we're back on track." },
          { speaker: "Kunal (Radio, Dispatch)", avatar: AV.kunalPilot, text: "Aarav, satellite loop on my end shows this cell growing fast, and there's a second one hiding right behind it that your radar might not be painting yet." },
          { speaker: "Captain Mehta", avatar: AV.captMehta, text: "That's attenuation, Aarav - a strong enough cell can eat the radar beam and hide what's directly behind it. Your call on how wide we go." },
          { speaker: "Aarav (You)", avatar: AV.aaravPilot, text: "The book says twenty miles clear of a cell like this, more for anything severe... but that costs us time and fuel we just fought to keep." }
        ],
        choices: [
          { text: "Request a wide deviation of at least 25-30 nautical miles from the cell, treating the quiet area behind it as unconfirmed rather than clear", correct: true,
            skills: { technical: 3, communication: 1, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Captain Mehta", avatar: AV.captMehta, text: "Exactly right, Aarav. A calm patch right behind a strong cell is more often the radar's blind spot than actual clear air - we treat it as unknown, not as safe." } },
          { text: "Take a tight 10-mile deviation around the visible cell to save time and fuel, since the area behind it looks clear on radar", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Captain Mehta", avatar: AV.captMehta, text: "Aarav, that 'clear' patch behind a strong cell is exactly where a radar beam gets absorbed. Ten miles isn't enough margin - the gust front and hail can reach further than the return you can see." } }
        ],
        betterAdvice: "A strong storm cell can hide a second cell behind it on radar (attenuation) - always keep a wide buffer and never treat an unusually quiet area right behind a strong return as confirmed clear air."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "Cruise Altitude - Clear Air Turbulence",
        bgImage: "https://images.pexels.com/photos/2589047/pexels-photo-2589047.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Well past the storm line now, cruising near the edge of a strong jet stream in a completely clear sky, when the aircraft is suddenly hit by severe turbulence with no warning.",
        dialogues: [
          { speaker: "Zoya (Senior FO)", avatar: AV.zoyaPilot, text: "No cloud, no radar return - this is clear-air turbulence off the jet stream boundary. It came out of nowhere." },
          { speaker: "Captain Mehta", avatar: AV.captMehta, text: "Aarav, we're heavy and high tonight - close to what pilots call the 'coffin corner'. Up here, the gap between the stall-buffet speed and the Mach-buffet speed is razor thin." },
          { speaker: "Kunal (Radio, Dispatch)", avatar: AV.kunalPilot, text: "Aarav, whatever you do, don't try to muscle this - I've read too many reports where a big power or altitude change in rough air made things worse, not better." },
          { speaker: "Aarav (You)", avatar: AV.aaravPilot, text: "It's tempting to just push the power up and climb out of it fast... but if that margin really is that thin up here, a big speed change could tip us the wrong way." }
        ],
        choices: [
          { text: "Reduce to the recommended turbulence penetration speed, hold a steady pitch attitude instead of chasing a fixed altitude, and inform ATC calmly", correct: true,
            skills: { technical: 3, communication: 1, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Captain Mehta", avatar: AV.captMehta, text: "Textbook, Aarav. Near the coffin corner, small and steady beats fast and aggressive - slowing to penetration speed and holding attitude keeps us clear of both the stall buffet and the Mach buffet." } },
          { text: "Push the throttles up and climb quickly to try to get above the rough air as fast as possible", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Captain Mehta", avatar: AV.captMehta, text: "Aarav, at this weight and altitude that's the one thing we can't do - a hard climb this high can push our speed straight into the Mach buffet margin we're already short on. Slow and steady is what protects the aircraft here." } }
        ],
        betterAdvice: "Near the 'coffin corner' at high altitude, the safe margin between a low-speed stall buffet and a high-speed Mach buffet is very narrow - respond to severe turbulence by slowing to penetration speed and holding attitude, never with a big sudden power or altitude change."
      },

      // ---------- EPISODE 4 ----------
      {
        location: "The Fuel Math",
        bgImage: "https://images.pexels.com/photos/19898942/pexels-photo-19898942.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "After the wide storm deviation and a short holding pattern for the turbulence, fuel is now closer to the legal reserve than planned. The destination is reporting poor visibility that is forecast to improve - but hasn't yet.",
        dialogues: [
          { speaker: "Kunal (Radio, Dispatch)", avatar: AV.kunalPilot, text: "Aarav, running your numbers here - you're still above minimum reserve, but only just. The nearest suitable alternate is twelve minutes off your current track." },
          { speaker: "Zoya (Senior FO)", avatar: AV.zoyaPilot, text: "Forecast says the fog at destination should lift in twenty minutes. If we hold a little longer, we might land as planned." },
          { speaker: "Captain Mehta", avatar: AV.captMehta, text: "Aarav, this decision has to be made now, while we're comfortably above reserve - not later, once we're staring at the minimum. What's the call?" }
        ],
        choices: [
          { text: "Divert now to the nearest suitable alternate while still comfortably above the required fuel reserve, rather than waiting on the forecast", correct: true,
            skills: { technical: 1, communication: 1, problemSolving: 2, leadership: 3 },
            reaction: { speaker: "Captain Mehta", avatar: AV.captMehta, text: "Right decision, Aarav. A diversion decided early, with fuel to spare, is a routine flight. The same decision made at minimum fuel is an emergency - we never let the fuel gauge make the call for us." } },
          { text: "Continue holding for the destination, betting the fog lifts before reaching minimum fuel, to avoid the cost and delay of a diversion", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Captain Mehta", avatar: AV.captMehta, text: "Aarav, 'the forecast should improve' is not a fuel plan. Every extra minute we hold on that bet is a minute we can't get back if the fog doesn't lift on schedule." } }
        ],
        betterAdvice: "Decide on a diversion while you still have comfortable fuel margin, not once you're near minimum reserve - a diversion decided early is routine; the same decision made at the last moment is an emergency."
      },

      // ---------- EPISODE 5 ----------
      {
        location: "Final Approach in Gusty Crosswind",
        bgImage: "https://images.pexels.com/photos/3942318/pexels-photo-3942318.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Cleared for the approach into the alternate airport, ATC reports gusty crosswinds right at the aircraft's limit, with a possible wind shear warning from the aircraft ahead.",
        dialogues: [
          { speaker: "ATC (Radio)", avatar: AV.citizen, text: "Traffic ahead of you reported wind shear on short final, gains and losses of fifteen knots. Winds are two-two-zero at twenty-six, gusting thirty-six." },
          { speaker: "Zoya (Senior FO)", avatar: AV.zoyaPilot, text: "That's right at our limit, Aarav, and now with a shear report on top of it." },
          { speaker: "Captain Mehta", avatar: AV.captMehta, text: "Aarav, your approach, your call - do we continue and stay ready to go around, or break it off now before we're committed?" }
        ],
        choices: [
          { text: "Continue the approach only if it stays stable, with the go-around already briefed and the throttles primed to react to any shear indication", correct: true,
            skills: { technical: 1, communication: 1, problemSolving: 2, leadership: 2 },
            reaction: { speaker: "Captain Mehta", avatar: AV.captMehta, text: "Well flown, Aarav. Stabilized-approach discipline with the go-around already briefed is what keeps a shear report from turning into a real problem." } },
          { text: "Continue the approach without changing the plan, since the wind is still technically within the crosswind limit", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Captain Mehta", avatar: AV.captMehta, text: "Aarav, a shear report changes the picture even when the crosswind number alone is still within limits. We brief for it and stay ready to go around, we don't just carry on as planned." } }
        ],
        betterAdvice: "A wind shear report changes an approach even if the crosswind number is still technically within limits - always brief the go-around and stay ready to react, rather than continuing the original plan unchanged."
      }
    ]
  },

  // ==================================================
  // STORY 19: DEFENCE (AIR FORCE) - "Wings of Honour"
  // Characters: Wing Commander Arora (mentor), Flying Officer Rakesh,
  // Yash (best friend, orbiting spotter/relay pilot), Dhruv (You)
  // NOTE: Written directly in English (not Hinglish).
  // ==================================================
  airforce: {
    title: "Wings of Honour",
    genre: "Defence",
    youDefaultName: "Dhruv",
    role: "Air Force Officer",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=DhruvAirForceCadet&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=DhruvAirForceCadet&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/30698431/pexels-photo-30698431.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Fly a rescue helicopter into the mountains as a young Air Force pilot, racing an avalanche and thin high-altitude air to reach stranded survivors - with your Academy friend orbiting overhead as your only link to base.",
    narration: "The alarm cuts through the airbase like a siren through fog - a distress call, trekkers trapped by an avalanche above 14,000 feet. Dhruv straps into the cockpit knowing that thin mountain air leaves no room for a single wasted second, or a single wrong call.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "Airbase - Emergency Scramble",
        bgImage: "https://images.pexels.com/photos/18403815/pexels-photo-18403815.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "A distress call comes in - an avalanche has trapped a group near a trekking route at over 14,000 feet. The helicopter must carry rescue gear, but the landing zone's altitude sharply cuts how much weight the aircraft can safely lift.",
        dialogues: [
          { speaker: "Wing Cmdr Arora", avatar: AV.wingCmdrArora, text: "Dhruv, that LZ altitude is right at the edge of our power charts. Full fuel and full rescue gear together will put us over the safe hover weight up there." },
          { speaker: "Flying Officer Rakesh", avatar: AV.foRakesh, text: "Every extra kilo of gear could matter once we're up there, sir. Hate to leave anything behind." },
          { speaker: "Yash (Spotter Aircraft)", avatar: AV.yashADC, text: "Dhruv, yaar, I'll be circling above you the whole way for relay - but the power chart doesn't care how much we want to bring. Check it properly before you load." },
          { speaker: "Dhruv (You)", avatar: AV.dhruvAF, text: "More gear and more fuel both sound safer on the ground... but up there, thin air means the engine simply can't give us the same lift." }
        ],
        choices: [
          { text: "Work out the actual weight limit from the density-altitude power chart, and trim gear and fuel to stay within it rather than loading for maximum capability", correct: true,
            skills: { technical: 3, communication: 0, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Wing Cmdr Arora", avatar: AV.wingCmdrArora, text: "That's the discipline that keeps rescue crews alive, Dhruv. At that altitude the thin air cuts how much lift the rotor can generate - you fly to what the chart allows, not to what feels useful on the ground." } },
          { text: "Load full fuel and all available rescue gear, trusting the engine to manage once airborne since more supplies means more capability", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Wing Cmdr Arora", avatar: AV.wingCmdrArora, text: "Dhruv, 'trusting the engine' isn't a plan at that altitude. If we're over the power-available weight when we reach the LZ, we simply won't be able to hover - and that's not something we find out the hard way." } }
        ],
        betterAdvice: "At high density altitude, thinner air sharply reduces the power and lift a helicopter can generate - always calculate the safe weight from the actual power chart rather than loading for maximum capability and hoping the engine manages."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "Threading the Valley",
        bgImage: "https://images.pexels.com/photos/13528320/pexels-photo-13528320.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Strong winds are funnelling through the mountain valley ahead. There are two ways in: a shorter track along the leeward side of the ridge, or a longer one along the windward side.",
        dialogues: [
          { speaker: "Flying Officer Rakesh", avatar: AV.foRakesh, text: "The leeward route cuts a good ten minutes off our time to the LZ, Dhruv." },
          { speaker: "Yash (Spotter Aircraft, Radio)", avatar: AV.yashADC, text: "Dhruv, from up here I can see rotor cloud sitting right over that leeward slope - that usually means nasty turbulence and sink underneath it." },
          { speaker: "Dhruv (You)", avatar: AV.dhruvAF, text: "Ten minutes matters for the people trapped up there... but if that leeward side has the downdrafts I think it does, we could lose a lot more than ten minutes." }
        ],
        choices: [
          { text: "Take the longer windward route along the ridge, accepting the extra time to avoid the rotor turbulence and downdrafts forming on the leeward side", correct: true,
            skills: { technical: 3, communication: 0, problemSolving: 1, leadership: 1 },
            reaction: { speaker: "Wing Cmdr Arora (Debrief note)", avatar: AV.wingCmdrArora, text: "Correct call, Dhruv. In strong wind, the leeward side of a ridge often hides rotor turbulence and downdrafts strong enough to overpower a helicopter's climb power. Ten extra minutes windward beats a fight you might not win leeward." } },
          { text: "Take the shorter leeward route to reach the survivors faster, since the visible sky looks mostly clear from the cockpit", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Wing Cmdr Arora (Debrief note)", avatar: AV.wingCmdrArora, text: "Dhruv, clear sky doesn't mean clear air on a leeward slope in strong wind - the rotor cloud Yash spotted was the warning sign. That downdraft could have overpowered our climb before we even saw it coming." } }
        ],
        betterAdvice: "In strong mountain winds, the leeward side of a ridge can hide severe rotor turbulence and downdrafts even under a clear sky - always favour the windward route, even if it costs extra time."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "The Hover",
        bgImage: "https://images.pexels.com/photos/2589047/pexels-photo-2589047.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "The helicopter reaches the landing zone - a narrow rocky ledge above the avalanche site. Standard rescue procedure calls for a full hover for winching, but the power margin up here is tighter than back at base.",
        dialogues: [
          { speaker: "Flying Officer Rakesh", avatar: AV.foRakesh, text: "Standard technique is a full hover out of ground effect for the winch, Dhruv - that's how we always train for this." },
          { speaker: "Dhruv (You)", avatar: AV.dhruvAF, text: "A full hover needs the most power of any technique though - and our margin right now is thinner than it was in training." },
          { speaker: "Yash (Spotter Aircraft, Radio)", avatar: AV.yashADC, text: "Dhruv, whatever you decide, decide it before you commit to the ledge, not halfway through the approach." }
        ],
        choices: [
          { text: "Recheck the power margin for today's actual weight and altitude, and if it's tight, use a one-skid touch on the ledge instead of a full hover to reduce the power demand", correct: true,
            skills: { technical: 3, communication: 1, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Wing Cmdr Arora (Debrief note)", avatar: AV.wingCmdrArora, text: "Exactly right, Dhruv. Standard procedure assumes standard conditions - a full hover out of ground effect demands the most power of any technique, and today's margin didn't have room for it. You adapted the technique to what the aircraft could actually do." } },
          { text: "Go with the standard full hover technique as trained, since it's the procedure the squadron always uses for this kind of rescue", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Wing Cmdr Arora (Debrief note)", avatar: AV.wingCmdrArora, text: "Dhruv, 'that's the procedure' doesn't override today's power chart. A full hover needed more power than we had in hand up there - the technique has to match the conditions, not just the training manual." } }
        ],
        betterAdvice: "A full out-of-ground-effect hover demands more power than any other landing technique - at high density altitude with a tight power margin, always re-check the numbers and be ready to use a lower-power technique instead of defaulting to standard procedure."
      },

      // ---------- EPISODE 4 ----------
      {
        location: "Weight and the Winch",
        bgImage: "https://images.pexels.com/photos/3942318/pexels-photo-3942318.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Five survivors need evacuation, but the calculated safe payload at this altitude only allows two people per lift with a proper power margin. Clouds are building fast, threatening to close the LZ.",
        dialogues: [
          { speaker: "Flying Officer Rakesh", avatar: AV.foRakesh, text: "Dhruv, that cloud bank is moving in fast - if we don't take everyone now, we might not get a second trip in today." },
          { speaker: "Yash (Spotter Aircraft, Radio)", avatar: AV.yashADC, text: "Dhruv, I know the weather's a real worry, but that payload number came from the same chart that got us up here safely." },
          { speaker: "Dhruv (You)", avatar: AV.dhruvAF, text: "Taking everyone in one lift would mean flying well past what the chart says we can safely carry at this altitude..." }
        ],
        choices: [
          { text: "Stick to the calculated safe payload of two per trip and plan a second lift, even with the risk the weather may close in before it happens", correct: true,
            skills: { technical: 2, communication: 1, problemSolving: 1, leadership: 3 },
            reaction: { speaker: "Wing Cmdr Arora (Debrief note)", avatar: AV.wingCmdrArora, text: "That was the harder call, Dhruv, and the right one. Overloading past the power margin up there risks losing the hover entirely - with everyone aboard. Managing the weather risk through communication is always safer than breaking the payload limit." } },
          { text: "Overload slightly beyond the calculated limit to evacuate all five survivors in a single lift before the weather closes the LZ", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Wing Cmdr Arora (Debrief note)", avatar: AV.wingCmdrArora, text: "Dhruv, that chart number exists precisely for moments like this. Going over it doesn't just risk a rough landing - up there, it can mean losing the hover altogether, with everyone still aboard." } }
        ],
        betterAdvice: "A calculated safe payload at high altitude should never be exceeded to save time, even under weather pressure - losing hover capability with survivors aboard is a far greater risk than managing a second trip."
      },

      // ---------- EPISODE 5 ----------
      {
        location: "Relay Through the Valley",
        bgImage: "https://images.pexels.com/photos/19898942/pexels-photo-19898942.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "On the return flight with the first two survivors aboard, the valley walls block direct radio contact with base. Even Yash's relay signal from above starts to break up as Dhruv flies low through the pass.",
        dialogues: [
          { speaker: "Yash (Spotter Aircraft, Radio - breaking up)", avatar: AV.yashADC, text: "Dhruv... signal's patchy down there... stick to the... briefed track..." },
          { speaker: "Flying Officer Rakesh", avatar: AV.foRakesh, text: "We could climb a bit to get a clearer signal to base, Dhruv, this silence is unsettling." },
          { speaker: "Dhruv (You)", avatar: AV.dhruvAF, text: "Climbing might fix the radio, but it also means leaving the safe route we planned before we even took off..." }
        ],
        choices: [
          { text: "Stay on the pre-briefed safe track through the valley and report position at each planned checkpoint, rather than deviating to chase a stronger signal", correct: true,
            skills: { technical: 1, communication: 2, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "Wing Cmdr Arora (Debrief note)", avatar: AV.wingCmdrArora, text: "Right instinct, Dhruv. A known safe route with a temporary silence beats an unplanned climb chasing a signal in mountainous terrain. You re-established contact exactly where the plan said you would." } },
          { text: "Climb out of the valley immediately to regain a stronger signal to base, even though it means leaving the briefed route", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Wing Cmdr Arora (Debrief note)", avatar: AV.wingCmdrArora, text: "Dhruv, chasing a radio signal off the briefed track in mountain terrain trades a manageable problem for an unknown one. A short silence is far safer than an unplanned deviation up here." } }
        ],
        betterAdvice: "A temporary loss of radio contact in mountainous terrain is safer than deviating from a pre-briefed route to chase a stronger signal - trust the plan and re-establish contact at the next known checkpoint."
      }
    ]
  },

  // ==================================================
  // STORY 20: DEFENCE (ARMY) - "The Last Convoy"
  // Characters: Colonel Ranawat (mentor), Major Tara Bisht, Dev
  // (best friend, Signals Officer), Yuvraj (You)
  // NOTE: Written directly in English (not Hinglish).
  // ==================================================
  defence: {
    title: "The Last Convoy",
    genre: "Defence",
    youDefaultName: "Yuvraj",
    role: "Army Officer",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=YuvrajArmyCadet&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=YuvrajArmyCadet&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/11874071/pexels-photo-11874071.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Race the closing winter as a young Army officer, repairing a landslide-hit supply road to a forward border post before the pass shuts for the season - with your Academy friend on the radio keeping the convoy connected.",
    narration: "Winter is closing the mountain pass in two days, and the only road to a forward post has just been torn open by a landslide. Yuvraj stands at the broken edge with his team, knowing that whatever he decides here will decide whether the convoy - and the post beyond it - makes it through before the snow seals them off.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "The Road Is Gone",
        bgImage: "https://images.pexels.com/photos/13742003/pexels-photo-13742003.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "A landslide has torn away part of the only supply road to a forward border post. With winter closing the pass in two days, Yuvraj's team must assess whether the remaining road edge can still carry vehicles.",
        dialogues: [
          { speaker: "Dev (Signals, Radio)", avatar: AV.devSignals, text: "Yuvraj, yaar, command wants a status update by evening - the post's supplies run out if this convoy doesn't get through before the pass closes." },
          { speaker: "Major Tara", avatar: AV.majorTara, text: "The remaining edge looks intact, Yuvraj, but we don't know how deep the damage runs underneath." },
          { speaker: "Yuvraj (You)", avatar: AV.yuvraj, text: "It might hold a jeep and still give way under a loaded truck - we won't know just by looking at it." }
        ],
        choices: [
          { text: "Send a light reconnaissance vehicle across first to test the edge's stability before committing any of the heavier supply trucks", correct: true,
            skills: { technical: 3, communication: 0, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Major Tara", avatar: AV.majorTara, text: "Good call, Yuvraj. Ground that holds a light vehicle can still fail under a loaded truck - testing light to heavy is the only way to know what that edge can actually take." } },
          { text: "Send the heaviest supply truck across first, since time is short and a smaller test vehicle would just cost precious hours", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Major Tara", avatar: AV.majorTara, text: "Yuvraj, if that edge fails, we want to lose a jeep finding out - not our heaviest loaded truck. Testing light before heavy costs minutes, not the whole convoy." } }
        ],
        betterAdvice: "Ground of unknown stability should always be tested with a lighter vehicle before committing heavier loads - what holds a jeep may still fail under a loaded truck."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "Racing the Weather",
        bgImage: "https://images.pexels.com/photos/10854007/pexels-photo-10854007.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "The repair work is behind schedule as daylight fades, with snow forecast to close the pass by tomorrow evening. This is also a sensitive sector where bright lighting at night could give away the post's exact position.",
        dialogues: [
          { speaker: "Major Tara", avatar: AV.majorTara, text: "We could rig floodlights and push through the night at full pace, Yuvraj - we'd finish hours sooner." },
          { speaker: "Dev (Signals, Radio)", avatar: AV.devSignals, text: "Yuvraj, command's reminder came through again - no bright lighting near this sector after dark, sensitive terrain, you know the standing order." },
          { speaker: "Yuvraj (You)", avatar: AV.yuvraj, text: "We need the hours, but that order exists for a reason too..." }
        ],
        choices: [
          { text: "Continue work overnight at a slower, careful pace using only shielded, low lighting, respecting the blackout discipline for this sector", correct: true,
            skills: { technical: 1, communication: 1, problemSolving: 1, leadership: 3 },
            reaction: { speaker: "Major Tara", avatar: AV.majorTara, text: "Right decision, Yuvraj. In a sensitive sector, discipline isn't something we trade away for a few extra hours, no matter how tight the deadline feels." } },
          { text: "Rig full floodlights and push the repair at maximum pace overnight, since finishing before the pass closes matters more tonight", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Major Tara", avatar: AV.majorTara, text: "Yuvraj, that standing order wasn't a suggestion. Lighting up this sector for speed could cost us far more than the hours we saved." } }
        ],
        betterAdvice: "Security discipline in a sensitive sector should never be traded for speed, even under a hard deadline - work at whatever pace stays within it, not the fastest pace possible."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "Loading the Convoy",
        bgImage: "https://images.pexels.com/photos/13742003/pexels-photo-13742003.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "The bypass is patched by morning. The engineers say the repair 'should hold', and the convoy of supply trucks is ready to cross the freshly repaired section.",
        dialogues: [
          { speaker: "Major Tara", avatar: AV.majorTara, text: "Engineers signed off on it, Yuvraj - should we send the convoy across together and make up some lost time?" },
          { speaker: "Dev (Signals, Radio)", avatar: AV.devSignals, text: "Yuvraj, post says they're down to their last day of rations. Every hour saved on this crossing counts for them." },
          { speaker: "Yuvraj (You)", avatar: AV.yuvraj, text: "'Should hold' isn't the same as tested - and that ground hasn't carried a single vehicle yet." }
        ],
        choices: [
          { text: "Cross one vehicle at a time with spacing, watching the repaired surface for movement or cracking before waving the next one across", correct: true,
            skills: { technical: 3, communication: 0, problemSolving: 1, leadership: 1 },
            reaction: { speaker: "Major Tara", avatar: AV.majorTara, text: "Exactly right, Yuvraj. 'Should hold' is an estimate, not a test - freshly repaired ground needs to prove itself vehicle by vehicle before we trust it with the whole convoy at once." } },
          { text: "Send the full convoy across together to save time, trusting the engineers' assessment that the repair should hold", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Major Tara", avatar: AV.majorTara, text: "Yuvraj, 'should hold' was never a guarantee. If that ground gives way under the third truck, we lose far more than the time we were trying to save." } }
        ],
        betterAdvice: "An engineer's assessment that repaired ground 'should hold' is an estimate, not a test - always prove freshly repaired ground vehicle by vehicle rather than trusting it with a full convoy at once."
      },

      // ---------- EPISODE 4 ----------
      {
        location: "What Goes First",
        bgImage: "https://images.pexels.com/photos/10854007/pexels-photo-10854007.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "The narrow bypass can only safely carry a limited weight per crossing, meaning not everything can go across today. The post urgently needs both fuel for heating and medical supplies, but only one can go in this first limited crossing.",
        dialogues: [
          { speaker: "Dev (Signals, Radio)", avatar: AV.devSignals, text: "Yuvraj, post says temperatures are dropping fast tonight - they're worried about the heating fuel running out before the next crossing." },
          { speaker: "Major Tara", avatar: AV.majorTara, text: "But their medical stock is thin too, Yuvraj, and cold weather makes injuries and illness more likely, not less." },
          { speaker: "Yuvraj (You)", avatar: AV.yuvraj, text: "We genuinely can't send both today - whichever I choose, someone at that post has to wait." }
        ],
        choices: [
          { text: "Prioritise medical and emergency supplies on the first crossing, and send the fuel on the next trip as soon as the bypass allows", correct: true,
            skills: { technical: 0, communication: 1, problemSolving: 1, leadership: 3 },
            reaction: { speaker: "Major Tara", avatar: AV.majorTara, text: "The harder call, Yuvraj, but the right one. Fuel shortage is serious but can be managed with rationing for a day - a medical emergency with no supplies on hand cannot wait for a second crossing." } },
          { text: "Prioritise fuel on the first crossing since the post's heating is the most urgent need in this cold, and send medical supplies next", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Major Tara", avatar: AV.majorTara, text: "Yuvraj, cold is uncomfortable, but a medical need with empty shelves is dangerous. If something urgent comes up at the post tonight, we'll wish we'd sent the medical stock first." } }
        ],
        betterAdvice: "When transport capacity is limited, medical and emergency supplies should always take priority over comfort or operational supplies like fuel, since medical needs can turn urgent without warning."
      },

      // ---------- EPISODE 5 ----------
      {
        location: "Post Secured Before the Snow",
        bgImage: "https://images.pexels.com/photos/11874071/pexels-photo-11874071.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "The convoy reaches the border post just as the first snow of the season begins to fall, sealing the pass behind them. Back at battalion headquarters, Yuvraj now has to write the after-action report on the crossing.",
        dialogues: [
          { speaker: "Colonel Ranawat", avatar: AV.colRanawat, text: "Convoy's in, Yuvraj, post is stocked for the winter. Well managed, all of it." },
          { speaker: "Dev (Signals, Radio)", avatar: AV.devSignals, text: "Yuvraj, that repaired section is going to need proper engineering work before next season - your call on how much of that goes in the report." },
          { speaker: "Major Tara", avatar: AV.majorTara, text: "It got the job done, Yuvraj, but it was closer than the report needs to say, if you'd rather keep it simple." }
        ],
        choices: [
          { text: "File a detailed, honest report on the road's true condition and how close the crossing came to failing, so the engineers can fix it properly before next season", correct: true,
            skills: { technical: 1, communication: 3, problemSolving: 0, leadership: 2 },
            reaction: { speaker: "Colonel Ranawat", avatar: AV.colRanawat, text: "That's the report I want to see, Yuvraj. An honest account protects the next crew who has to use that road, and it protects the judgment behind every call you made this week too." } },
          { text: "Keep the report simple and downplay how risky the crossing actually was, to avoid drawing extra scrutiny onto the operation", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Colonel Ranawat", avatar: AV.colRanawat, text: "Yuvraj, a softened report doesn't make that road any safer - it just means the next team finds out the hard way, without the warning you could have given them." } }
        ],
        betterAdvice: "An honest, detailed report on a risky operation protects the next team that relies on the same ground or plan - downplaying the risk to avoid scrutiny only removes a warning someone else needed."
      }
    ]
  }
};
