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
  ritika:     "https://api.dicebear.com/9.x/adventurer/svg?seed=RitikaCA&backgroundColor=e0ccff",

  // =====================================================
  // AVATARS FOR THE 25 NEW STORIES (3 episodes each)
  // =====================================================
  // ---- Tower Control (Air Traffic Controller) ----
  atcYou: "https://api.dicebear.com/9.x/adventurer/svg?seed=MeeraAtcYou&backgroundColor=d6e8ff",
  atcRao: "https://api.dicebear.com/9.x/adventurer/svg?seed=SupervisorRaoATC&backgroundColor=c9c9ff",
  atcKabir: "https://api.dicebear.com/9.x/adventurer/svg?seed=CaptainKabirRadio&backgroundColor=ffe5b4",
  atcTanvi: "https://api.dicebear.com/9.x/adventurer/svg?seed=TanviGround&backgroundColor=ffd6e8",
  // ---- Deep Blue Watch (Naval Officer) ----
  navyYou: "https://api.dicebear.com/9.x/adventurer/svg?seed=RohanNavyYou&backgroundColor=d6e8ff",
  navyNair: "https://api.dicebear.com/9.x/adventurer/svg?seed=CommanderNairNavy&backgroundColor=c9c9ff",
  navySana: "https://api.dicebear.com/9.x/adventurer/svg?seed=SubLtSanaRadar&backgroundColor=ffd6e8",
  navyBose: "https://api.dicebear.com/9.x/adventurer/svg?seed=ChiefBoseNavy&backgroundColor=ffe5b4",
  // ---- Data Detective (Data Analyst) ----
  datascienceYou: "https://api.dicebear.com/9.x/adventurer/svg?seed=AnanyaDatascienceYou&backgroundColor=d6e8ff",
  datascienceVikas: "https://api.dicebear.com/9.x/adventurer/svg?seed=ManagerVikasData&backgroundColor=c9c9ff",
  datascienceIsha: "https://api.dicebear.com/9.x/adventurer/svg?seed=IshaSeniorAnalyst&backgroundColor=ffd6e8",
  datascienceDev: "https://api.dicebear.com/9.x/adventurer/svg?seed=DevSalesHead&backgroundColor=ffe5b4",
  // ---- Launch Day (Mobile App Developer) ----
  appdevYou: "https://api.dicebear.com/9.x/adventurer/svg?seed=NeelAppdevYou&backgroundColor=d6e8ff",
  appdevSamira: "https://api.dicebear.com/9.x/adventurer/svg?seed=TeamLeadSamira&backgroundColor=c9c9ff",
  appdevJoseph: "https://api.dicebear.com/9.x/adventurer/svg?seed=JosephQATester&backgroundColor=ffe5b4",
  appdevPooja: "https://api.dicebear.com/9.x/adventurer/svg?seed=PoojaProductMgr&backgroundColor=ffd6e8",
  // ---- Photo Finish (Track Athlete) ----
  athleteYou: "https://api.dicebear.com/9.x/adventurer/svg?seed=AdityaAthleteYou&backgroundColor=d6e8ff",
  athleteRamesh: "https://api.dicebear.com/9.x/adventurer/svg?seed=CoachRameshTrack&backgroundColor=c9c9ff",
  athleteSana: "https://api.dicebear.com/9.x/adventurer/svg?seed=SanaTrainingPartner&backgroundColor=ffd6e8",
  athleteIyer: "https://api.dicebear.com/9.x/adventurer/svg?seed=DrIyerPhysio&backgroundColor=ffe5b4",
  // ---- Match Point (Tennis Player) ----
  tennisYou: "https://api.dicebear.com/9.x/adventurer/svg?seed=IshaanTennisYou&backgroundColor=d6e8ff",
  tennisFernandes: "https://api.dicebear.com/9.x/adventurer/svg?seed=CoachFernandesTennis&backgroundColor=c9c9ff",
  tennisTara: "https://api.dicebear.com/9.x/adventurer/svg?seed=TaraDoublesPartner&backgroundColor=ffd6e8",
  tennisUmpire: "https://api.dicebear.com/9.x/adventurer/svg?seed=ChairUmpireTennis&backgroundColor=dddddd",
  // ---- Steady Hands (Surgeon) ----
  surgeonYou: "https://api.dicebear.com/9.x/adventurer/svg?seed=NikhilSurgeonYou&backgroundColor=d6e8ff",
  surgeonMenon: "https://api.dicebear.com/9.x/adventurer/svg?seed=DrMenonSurgeon&backgroundColor=c9c9ff",
  surgeonLatha: "https://api.dicebear.com/9.x/adventurer/svg?seed=NurseLathaOT&backgroundColor=ffd6a5",
  surgeonBatra: "https://api.dicebear.com/9.x/adventurer/svg?seed=DrBatraAnaesthetist&backgroundColor=d0f4de",
  // ---- Right Dose (Pharmacist) ----
  pharmacistYou: "https://api.dicebear.com/9.x/adventurer/svg?seed=AishaPharmacistYou&backgroundColor=d6e8ff",
  pharmacistKapoor: "https://api.dicebear.com/9.x/adventurer/svg?seed=MrKapoorPharmacist&backgroundColor=c9c9ff",
  pharmacistVerma: "https://api.dicebear.com/9.x/adventurer/svg?seed=MrsVermaCustomer&backgroundColor=ffe5b4",
  pharmacistRao: "https://api.dicebear.com/9.x/adventurer/svg?seed=DrRaoPhysician&backgroundColor=b6e3f4",
  // ---- The Last Verdict (Judge) ----
  judgeYou: "https://api.dicebear.com/9.x/adventurer/svg?seed=VidyaJudgeYou&backgroundColor=d6e8ff",
  judgeBhatt: "https://api.dicebear.com/9.x/adventurer/svg?seed=JusticeBhattJudge&backgroundColor=c9c9ff",
  judgePrakash: "https://api.dicebear.com/9.x/adventurer/svg?seed=CourtMasterPrakash&backgroundColor=ffe5b4",
  judgeRana: "https://api.dicebear.com/9.x/adventurer/svg?seed=AdvocateRanaLaw&backgroundColor=ffd6e8",
  // ---- Voice for Many (Legal Aid Lawyer) ----
  legalaidYou: "https://api.dicebear.com/9.x/adventurer/svg?seed=FarhanLegalaidYou&backgroundColor=d6e8ff",
  legalaidSunita: "https://api.dicebear.com/9.x/adventurer/svg?seed=DirectorSunitaLegalAid&backgroundColor=c9c9ff",
  legalaidRamesh: "https://api.dicebear.com/9.x/adventurer/svg?seed=RameshClientWorker&backgroundColor=ffe5b4",
  legalaidAhuja: "https://api.dicebear.com/9.x/adventurer/svg?seed=MrAhujaLawyer&backgroundColor=d6d6ff",
  // ---- Cyber Court (Cyber Law Advocate) ----
  cyberlawYou: "https://api.dicebear.com/9.x/adventurer/svg?seed=RheaCyberlawYou&backgroundColor=d6e8ff",
  cyberlawKhanna: "https://api.dicebear.com/9.x/adventurer/svg?seed=AdvKhannaCyber&backgroundColor=c9c9ff",
  cyberlawNisha: "https://api.dicebear.com/9.x/adventurer/svg?seed=NishaClientCyber&backgroundColor=ffd6e8",
  cyberlawSameer: "https://api.dicebear.com/9.x/adventurer/svg?seed=SameerITExpert&backgroundColor=d0f4de",
  // ---- Every Child Counts (Special Educator) ----
  specialeduYou: "https://api.dicebear.com/9.x/adventurer/svg?seed=MansiSpecialeduYou&backgroundColor=d6e8ff",
  specialeduDsouza: "https://api.dicebear.com/9.x/adventurer/svg?seed=CoordinatorDSouza&backgroundColor=c9c9ff",
  specialeduAarush: "https://api.dicebear.com/9.x/adventurer/svg?seed=AarushStudentSE&backgroundColor=ffe5b4",
  specialeduKulkarni: "https://api.dicebear.com/9.x/adventurer/svg?seed=MrsKulkarniParent&backgroundColor=ffd6e8",
  // ---- The Principal's Office (School Principal) ----
  principalYou: "https://api.dicebear.com/9.x/adventurer/svg?seed=SunilPrincipalYou&backgroundColor=d6e8ff",
  principalIyer: "https://api.dicebear.com/9.x/adventurer/svg?seed=MrsIyerTeacher&backgroundColor=ffd6e8",
  principalMalhotra: "https://api.dicebear.com/9.x/adventurer/svg?seed=MrMalhotraParent&backgroundColor=ffe5b4",
  principalGupta: "https://api.dicebear.com/9.x/adventurer/svg?seed=VicePrincipalGupta&backgroundColor=c9c9ff",
  // ---- The Toppers' Batch (Coaching Mentor) ----
  coachmentorYou: "https://api.dicebear.com/9.x/adventurer/svg?seed=RajatCoachmentorYou&backgroundColor=d6e8ff",
  coachmentorSharma: "https://api.dicebear.com/9.x/adventurer/svg?seed=DirectorSharmaCoaching&backgroundColor=c9c9ff",
  coachmentorSimran: "https://api.dicebear.com/9.x/adventurer/svg?seed=SimranStudentCoach&backgroundColor=ffd6e8",
  coachmentorAryan: "https://api.dicebear.com/9.x/adventurer/svg?seed=AryanTopperCoach&backgroundColor=ffe5b4",
  // ---- Trace the Signal (Cyber Crime Officer) ----
  cybercellYou: "https://api.dicebear.com/9.x/adventurer/svg?seed=JaiCybercellYou&backgroundColor=d6e8ff",
  cybercellMalhotra: "https://api.dicebear.com/9.x/adventurer/svg?seed=SPMalhotraCyber&backgroundColor=c9c9ff",
  cybercellNeha: "https://api.dicebear.com/9.x/adventurer/svg?seed=ConstableNehaTech&backgroundColor=d0f4de",
  cybercellGupta: "https://api.dicebear.com/9.x/adventurer/svg?seed=MrGuptaVictim&backgroundColor=ffe5b4",
  // ---- Trace Evidence (Forensic Scientist) ----
  forensicYou: "https://api.dicebear.com/9.x/adventurer/svg?seed=IraForensicYou&backgroundColor=d6e8ff",
  forensicBhatia: "https://api.dicebear.com/9.x/adventurer/svg?seed=InspectorBhatiaForensic&backgroundColor=d6d6ff",
  forensicChandra: "https://api.dicebear.com/9.x/adventurer/svg?seed=DrChandraLab&backgroundColor=c9c9ff",
  forensicRavi: "https://api.dicebear.com/9.x/adventurer/svg?seed=RaviLabAssistant&backgroundColor=ffe5b4",
  // ---- Night Beat (Beat Constable) ----
  nightbeatYou: "https://api.dicebear.com/9.x/adventurer/svg?seed=KaranNightbeatYou&backgroundColor=d6e8ff",
  nightbeatYadav: "https://api.dicebear.com/9.x/adventurer/svg?seed=SIYadavPatrol&backgroundColor=c9c9ff",
  nightbeatPillai: "https://api.dicebear.com/9.x/adventurer/svg?seed=MrsPillaiResident&backgroundColor=ffd6e8",
  nightbeatRafiq: "https://api.dicebear.com/9.x/adventurer/svg?seed=RafiqShopkeeper&backgroundColor=ffe5b4",
  // ---- Right on Track (Railway Station Master) ----
  railwaysYou: "https://api.dicebear.com/9.x/adventurer/svg?seed=VishalRailwaysYou&backgroundColor=d6e8ff",
  railwaysPandey: "https://api.dicebear.com/9.x/adventurer/svg?seed=StationMasterPandey&backgroundColor=c9c9ff",
  railwaysRaju: "https://api.dicebear.com/9.x/adventurer/svg?seed=RajuSignalMaintainer&backgroundColor=ffe5b4",
  railwaysIqbal: "https://api.dicebear.com/9.x/adventurer/svg?seed=GuardIqbalRail&backgroundColor=d0f4de",
  // ---- Green Warden (Forest Range Officer) ----
  forestofficerYou: "https://api.dicebear.com/9.x/adventurer/svg?seed=AryaForestofficerYou&backgroundColor=d6e8ff",
  forestofficerGowda: "https://api.dicebear.com/9.x/adventurer/svg?seed=RangerGowdaForest&backgroundColor=c9c9ff",
  forestofficerMohan: "https://api.dicebear.com/9.x/adventurer/svg?seed=SarpanchMohanForest&backgroundColor=ffe5b4",
  forestofficerNandini: "https://api.dicebear.com/9.x/adventurer/svg?seed=DrNandiniBiologist&backgroundColor=d0f4de",
  // ---- Tax Trail (Income Tax Officer) ----
  taxofficerYou: "https://api.dicebear.com/9.x/adventurer/svg?seed=MeenalTaxofficerYou&backgroundColor=d6e8ff",
  taxofficerShukla: "https://api.dicebear.com/9.x/adventurer/svg?seed=CommissionerShukla&backgroundColor=c9c9ff",
  taxofficerBansal: "https://api.dicebear.com/9.x/adventurer/svg?seed=CABansalRep&backgroundColor=ffe5b4",
  taxofficerRohit: "https://api.dicebear.com/9.x/adventurer/svg?seed=InspectorRohitTax&backgroundColor=d0f4de",
  // ---- Green Channel (Customs Officer) ----
  customsYou: "https://api.dicebear.com/9.x/adventurer/svg?seed=DevCustomsYou&backgroundColor=d6e8ff",
  customsKulkarni: "https://api.dicebear.com/9.x/adventurer/svg?seed=SuperintendentKulkarni&backgroundColor=c9c9ff",
  customsPassenger: "https://api.dicebear.com/9.x/adventurer/svg?seed=PassengerCustoms&backgroundColor=ffe5b4",
  customsElder: "https://api.dicebear.com/9.x/adventurer/svg?seed=MrDSouzaElderly&backgroundColor=ffd6a5",
  customsBhoomi: "https://api.dicebear.com/9.x/adventurer/svg?seed=ConstableBhoomiK9&backgroundColor=d0f4de",
  // ---- Market Open (Financial Analyst) ----
  financeYou: "https://api.dicebear.com/9.x/adventurer/svg?seed=RahulFinanceYou&backgroundColor=d6e8ff",
  financeKapoor: "https://api.dicebear.com/9.x/adventurer/svg?seed=MsKapoorPortfolio&backgroundColor=c9c9ff",
  financeSameer: "https://api.dicebear.com/9.x/adventurer/svg?seed=SameerSeniorTrader&backgroundColor=ffe5b4",
  financeAnand: "https://api.dicebear.com/9.x/adventurer/svg?seed=MrAnandClient&backgroundColor=ffd6e8",
  // ---- Balance Sheet (Chartered Accountant) ----
  caYou: "https://api.dicebear.com/9.x/adventurer/svg?seed=RitikaCaYou&backgroundColor=d6e8ff",
  caCaRajivSir: "https://api.dicebear.com/9.x/adventurer/svg?seed=CARajivSir&backgroundColor=ffccd9",
  caKavya: "https://api.dicebear.com/9.x/adventurer/svg?seed=KavyaTrainee&backgroundColor=ccffe0",
  caClient: "https://api.dicebear.com/9.x/adventurer/svg?seed=MrSethiClient&backgroundColor=ffe5b4",
  // ---- Brand New (Marketing Manager) ----
  marketingYou: "https://api.dicebear.com/9.x/adventurer/svg?seed=IshikaMarketingYou&backgroundColor=d6e8ff",
  marketingSen: "https://api.dicebear.com/9.x/adventurer/svg?seed=MarketingHeadSen&backgroundColor=c9c9ff",
  marketingRohit: "https://api.dicebear.com/9.x/adventurer/svg?seed=RohitDesigner&backgroundColor=ffe5b4",
  marketingTandon: "https://api.dicebear.com/9.x/adventurer/svg?seed=MrTandonAgency&backgroundColor=d0f4de",
  // ---- People First (HR Manager) ----
  hrYou: "https://api.dicebear.com/9.x/adventurer/svg?seed=NandiniHrYou&backgroundColor=d6e8ff",
  hrSushma: "https://api.dicebear.com/9.x/adventurer/svg?seed=TeamLeadSushma&backgroundColor=ffd6e8",
  hrArun: "https://api.dicebear.com/9.x/adventurer/svg?seed=ArunEmployeeHR&backgroundColor=ffe5b4",
  hrCeo: "https://api.dicebear.com/9.x/adventurer/svg?seed=MrKapoorDirector&backgroundColor=c9c9ff"
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
  },

  // ==================================================
  // AVIATION - "Tower Control" (3 episodes)
  // Role: Air Traffic Controller
  // Written directly in English (same as Wings of Honour / Cleared for Takeoff).
  // ==================================================
  atc: {
    title: "Tower Control",
    genre: "Aviation",
    youDefaultName: "Meera",
    role: "Air Traffic Controller",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=MeeraAtcM&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=MeeraAtcF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/7899923/pexels-photo-7899923.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Guide planes safely through a busy airport as a young air traffic controller - keep runways clear, separate crossing aircraft, and handle a fuel emergency in the middle of a storm.",
    narration: "The evening rush has just begun at the airport. From the glass-walled control tower, Meera can see a dozen aircraft lights on her screen and hear every pilot on the radio. One wrong instruction can put two planes in the same piece of sky - so every word she says tonight has to be clear, calm and correct.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "Control Tower - Runway Rush",
        bgImage: "https://images.pexels.com/photos/7899923/pexels-photo-7899923.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Flight 412 is lined up on the runway, waiting for takeoff. Flight 908 is on final approach, three miles from touchdown. The crew of 412 is still finishing a checklist and has not started rolling.",
        dialogues: [
          { speaker: "Supervisor Rao", avatar: AV.atcRao, text: "Meera, look at your radar. 908 is three miles out and coming in fast, and 412 is still sitting on the runway." },
          { speaker: "Captain Kabir (Radio)", avatar: AV.atcKabir, text: "Tower, 412 - sorry, we need about one more minute before we can go." },
          { speaker: "Tanvi (Ground Controller)", avatar: AV.atcTanvi, text: "Meera, the runway is occupied. Nothing else can use it until 412 is gone." },
          { speaker: "Meera (You)", avatar: AV.atcYou, text: "I can't let 908 land on an occupied runway... but a go-around costs time and fuel. I need to decide now." }
        ],
        choices: [
          { text: "Tell 412 to vacate or hold, and instruct 908 to go around because the runway will not be clear in time", correct: true,
            skills: { technical: 2, communication: 1, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "Supervisor Rao", avatar: AV.atcRao, text: "Correct, Meera. When the runway will not be clear, the arriving aircraft goes around - early, not at the last second. A go-around is routine; a runway collision is not." } },
          { text: "Let 908 continue and hope that 412 starts rolling in time", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 1, leadership: 0 },
            reaction: { speaker: "Supervisor Rao", avatar: AV.atcRao, text: "Hope is not a separation standard, Meera. If 412 is slow, 908 is on the runway with them. We never plan around what we hope a crew will do." } }
        ],
        betterAdvice: "If the runway will not be clear before an arriving aircraft reaches it, send the arrival around early - never assume the departing crew will be fast enough."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "Radar Room - Conflict Alert",
        bgImage: "https://images.pexels.com/photos/29867096/pexels-photo-29867096.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Two aircraft at the same flight level are heading toward the same point in the sky. The radar shows a conflict alert flashing red, and the aircraft will be too close in about four minutes.",
        dialogues: [
          { speaker: "Supervisor Rao", avatar: AV.atcRao, text: "The alert is flashing, Meera. Both aircraft are on the same level and converging." },
          { speaker: "Tanvi (Ground Controller)", avatar: AV.atcTanvi, text: "They haven't seen each other yet. Their cockpit systems may warn them, but it's your job to fix it first." },
          { speaker: "Meera (You)", avatar: AV.atcYou, text: "Four minutes is enough time, but only if I act now with a clear instruction." }
        ],
        choices: [
          { text: "Wait a minute to see whether the pilots notice and sort it out themselves", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Supervisor Rao", avatar: AV.atcRao, text: "Meera, waiting turns a comfortable fix into an emergency. We separate aircraft - we don't wait for pilots to do it for us." } },
          { text: "Give one aircraft a clear turn and the other a level change using standard phraseology, then pass traffic information to both", correct: true,
            skills: { technical: 3, communication: 1, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Supervisor Rao", avatar: AV.atcRao, text: "Exactly. A short, standard, unmistakable instruction and traffic information for both crews resolves it cleanly. Early and clear is the whole job." } }
        ],
        betterAdvice: "When two aircraft are on a conflicting path, act early with clear standard instructions and give both crews traffic information - never wait for them to resolve it."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "Tower - Storm at Night",
        bgImage: "https://images.pexels.com/photos/33797802/pexels-photo-33797802.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "A thunderstorm has delayed arrivals and a long line of aircraft is waiting to land. Suddenly a pilot calls: 'Mayday, Mayday, Mayday - low fuel, we need to land immediately.'",
        dialogues: [
          { speaker: "Captain Kabir (Radio)", avatar: AV.atcKabir, text: "Tower, Mayday, Mayday, Mayday. Fuel is critically low, request immediate landing." },
          { speaker: "Tanvi (Ground Controller)", avatar: AV.atcTanvi, text: "Meera, there are six other aircraft in the queue. Some of them have been waiting for twenty minutes." },
          { speaker: "Supervisor Rao", avatar: AV.atcRao, text: "This is the moment the training is for. What is your call?" },
          { speaker: "Meera (You)", avatar: AV.atcYou, text: "A Mayday changes everything. I have to think about safety first, and the queue second." }
        ],
        choices: [
          { text: "Give the Mayday aircraft priority, clear the path, ask number of persons on board and fuel remaining, and alert emergency services", correct: true,
            skills: { technical: 2, communication: 2, problemSolving: 2, leadership: 2 },
            reaction: { speaker: "Supervisor Rao", avatar: AV.atcRao, text: "Right. A fuel Mayday gets priority over everything. Clear the way, gather the key details and alert the fire service - the queue can wait, the emergency can't." } },
          { text: "Keep the normal landing order because the others have been waiting longer", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Supervisor Rao", avatar: AV.atcRao, text: "Meera, waiting time doesn't outrank an emergency. A Mayday means the crew's life is at risk - it gets priority, every time." } }
        ],
        betterAdvice: "An aircraft that declares an emergency such as a fuel Mayday gets immediate priority - clear the way, get the key details and alert emergency services."
      }

    ]
  },

  // ==================================================
  // DEFENCE - "Deep Blue Watch" (3 episodes)
  // Role: Naval Officer
  // Written directly in English (same as Wings of Honour / Cleared for Takeoff).
  // ==================================================
  navy: {
    title: "Deep Blue Watch",
    genre: "Defence",
    youDefaultName: "Rohan",
    role: "Naval Officer",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=RohanNavyM&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=RohanNavyF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/18959222/pexels-photo-18959222.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Stand the night watch on a naval patrol ship - track an unknown vessel on radar, handle an engine problem far from port, and decide how to answer a fishing boat's distress call.",
    narration: "The ship has been at sea for six days. Tonight Sub-Lieutenant Rohan has the bridge watch: black water on every side, a radar screen full of small dots, and a crew that trusts him to spot trouble before it finds them. At sea, there is no one to call for help - the ship must solve its own problems.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "Ship's Bridge - Midnight Watch",
        bgImage: "https://images.pexels.com/photos/18959222/pexels-photo-18959222.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "On the midnight watch, radar shows a vessel without any identification signal moving fast toward the ship's patrol area.",
        dialogues: [
          { speaker: "Sub-Lt. Sana (Radar Officer)", avatar: AV.navySana, text: "Rohan, new contact, bearing two-one-zero, speed eighteen knots. No identification signal at all." },
          { speaker: "Chief Petty Officer Bose", avatar: AV.navyBose, text: "Could be a fishing boat with its transponder off. Or it could be something else, sir." },
          { speaker: "Commander Nair", avatar: AV.navyNair, text: "You have the watch, Rohan. Tell me what you do first." },
          { speaker: "Rohan (You)", avatar: AV.navyYou, text: "I can't assume it's harmless just because it usually is. I also can't overreact and wake the entire ship." }
        ],
        choices: [
          { text: "Keep tracking it on radar, hail it on the radio, increase lookouts and inform the Commander with the details", correct: true,
            skills: { technical: 2, communication: 2, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "Commander Nair", avatar: AV.navyNair, text: "Textbook. Track it, talk to it, watch it and report it. You stayed calm, gathered facts and kept the chain of command informed." } },
          { text: "Ignore it because unidentified boats are common in these waters", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Commander Nair", avatar: AV.navyNair, text: "Rohan, 'usually harmless' is how surprises begin. An unidentified fast contact always gets tracked, challenged and reported." } }
        ],
        betterAdvice: "Never dismiss an unidentified contact - track it, hail it, increase lookouts and report it up the chain of command with facts."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "Engine Room - Overheating",
        bgImage: "https://images.pexels.com/photos/13342949/pexels-photo-13342949.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Two days from port, the chief engineer reports that one engine is overheating. The ship still has a patrol area to cover and time is tight.",
        dialogues: [
          { speaker: "Chief Petty Officer Bose", avatar: AV.navyBose, text: "Sir, the port engine temperature is climbing. If we keep the same speed, it may seize." },
          { speaker: "Commander Nair", avatar: AV.navyNair, text: "We are supposed to be on station by morning, Rohan. But a ship with a dead engine helps nobody." },
          { speaker: "Sub-Lt. Sana (Radar Officer)", avatar: AV.navySana, text: "We can shift to the standby engine and reduce speed, but we will arrive late." },
          { speaker: "Rohan (You)", avatar: AV.navyYou, text: "Reaching the position on time matters, but not more than the ship and its crew." }
        ],
        choices: [
          { text: "Keep full speed to stay on schedule and hope the engine holds", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Commander Nair", avatar: AV.navyNair, text: "Rohan, if that engine fails at full power, we lose speed, time and possibly the ship's safety. Never trade the ship for the schedule." } },
          { text: "Reduce speed, switch to the standby engine, and report the delay and the reason to headquarters", correct: true,
            skills: { technical: 3, communication: 1, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "Commander Nair", avatar: AV.navyNair, text: "Sensible. A damaged engine at sea is a crisis you can avoid. Late and safe beats on time and stranded." } }
        ],
        betterAdvice: "When machinery is overheating, reduce load, switch to standby equipment and report the delay honestly - never risk the ship to stay on schedule."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "Open Sea - Distress Call",
        bgImage: "https://images.pexels.com/photos/28424608/pexels-photo-28424608.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "A weather warning is in force and waves are rising. A small fishing boat radios that its engine has failed and it is drifting toward rocks, forty minutes away from the patrol ship.",
        dialogues: [
          { speaker: "Sub-Lt. Sana (Radar Officer)", avatar: AV.navySana, text: "Distress call on channel sixteen, sir. A fishing boat, seven people on board, engine failed." },
          { speaker: "Commander Nair", avatar: AV.navyNair, text: "The weather is getting worse, Rohan. Our own ship needs to stay safe too." },
          { speaker: "Chief Petty Officer Bose", avatar: AV.navyBose, text: "We can launch the rescue boat and pass a tow line, sir - if the sea state stays within limits." },
          { speaker: "Rohan (You)", avatar: AV.navyYou, text: "Every sailor has a duty to help someone in danger at sea - but we need a careful plan, not a reckless one." }
        ],
        choices: [
          { text: "Inform headquarters, proceed to the boat at safe speed, and assess the sea state before launching the rescue boat and tow", correct: true,
            skills: { technical: 2, communication: 2, problemSolving: 2, leadership: 2 },
            reaction: { speaker: "Commander Nair", avatar: AV.navyNair, text: "Exactly right. Rescue is a duty, but a planned one. Inform command, get there safely, judge the conditions, then act." } },
          { text: "Ignore the call and stay on patrol because the storm is dangerous", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Commander Nair", avatar: AV.navyNair, text: "Rohan, seven lives are drifting toward rocks. Helping people in distress at sea is a duty - we manage the risk, we don't walk away." } }
        ],
        betterAdvice: "Every ship has a duty to respond to a distress call - inform command, approach safely and assess conditions before launching a rescue."
      }

    ]
  },

  // ==================================================
  // IT - "Data Detective" (3 episodes)
  // Role: Data Analyst
  // Written directly in English (same as Wings of Honour / Cleared for Takeoff).
  // ==================================================
  datascience: {
    title: "Data Detective",
    genre: "IT",
    youDefaultName: "Ananya",
    role: "Data Analyst",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=AnanyaDatascienceM&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=AnanyaDatascienceF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/669614/pexels-photo-669614.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Work as a data analyst at a growing online store - question a suspicious sales spike, present honest charts under pressure, and decide whether a 95% accurate model is really as good as it looks.",
    narration: "Ananya's first month as a data analyst has been spent cleaning spreadsheets. Today her dashboard shows something dramatic - sales have jumped 40% overnight. Everyone in the company is excited. Ananya, however, has learned that when numbers look too good, that's exactly when to look closer.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "Analytics Desk - The Sudden Spike",
        bgImage: "https://images.pexels.com/photos/669614/pexels-photo-669614.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Sales appear to have jumped 40% in a single day. The sales team is celebrating and wants the number in the evening report.",
        dialogues: [
          { speaker: "Dev (Sales Head)", avatar: AV.datascienceDev, text: "Ananya, 40 percent growth overnight! Put it in the report - the CEO will love it." },
          { speaker: "Isha (Senior Analyst)", avatar: AV.datascienceIsha, text: "That is a big jump for one day. Have you checked how the data was loaded?" },
          { speaker: "Manager Vikas", avatar: AV.datascienceVikas, text: "Whatever you decide, the report has your name on it." },
          { speaker: "Ananya (You)", avatar: AV.datascienceYou, text: "It's possible the campaign really worked. It's also possible something in the data is wrong." }
        ],
        choices: [
          { text: "Check the data first for duplicate rows and join errors, then report the verified number", correct: true,
            skills: { technical: 3, communication: 1, problemSolving: 3, leadership: 0 },
            reaction: { speaker: "Manager Vikas", avatar: AV.datascienceVikas, text: "Good instinct. Duplicate orders from a bad data load would have inflated everything. Verify first, celebrate second." } },
          { text: "Send the 40 percent number right away because it looks great", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Manager Vikas", avatar: AV.datascienceVikas, text: "Ananya, unverified numbers that look great are the most dangerous ones. If it turns out to be duplicates, the report loses trust." } }
        ],
        betterAdvice: "When a number looks unusually good, check the data quality first - duplicates and join errors often create fake spikes."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "Meeting Room - The Honest Chart",
        bgImage: "https://images.pexels.com/photos/669609/pexels-photo-669609.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Sales have actually dropped for two months. The Sales Head asks Ananya to show only the best three weeks and to cut the chart's axis so the drop looks small.",
        dialogues: [
          { speaker: "Dev (Sales Head)", avatar: AV.datascienceDev, text: "Just show the good weeks. Nobody needs to see the bad ones right now." },
          { speaker: "Isha (Senior Analyst)", avatar: AV.datascienceIsha, text: "A chart with a chopped axis and hidden weeks can mislead people into bad decisions." },
          { speaker: "Manager Vikas", avatar: AV.datascienceVikas, text: "Analysts are trusted because they tell the truth with numbers. Your call, Ananya." },
          { speaker: "Ananya (You)", avatar: AV.datascienceYou, text: "I want to help Dev, but a misleading chart helps nobody." }
        ],
        choices: [
          { text: "Show only the best weeks and trim the axis as requested", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Manager Vikas", avatar: AV.datascienceVikas, text: "Ananya, once people catch you cherry-picking, they stop trusting every chart you make. Honest data is your entire value." } },
          { text: "Show the full period on an honest chart, explain the dip clearly and add possible reasons and next steps", correct: true,
            skills: { technical: 2, communication: 3, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "Manager Vikas", avatar: AV.datascienceVikas, text: "That's the job. Bad news presented with context and a plan builds far more trust than a pretty chart hiding the truth." } }
        ],
        betterAdvice: "Present the full picture honestly with context and next steps - cherry-picked data and misleading axes damage trust in the analyst."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "Data Lab - The Churn Model",
        bgImage: "https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Ananya has built a model to predict which customers will leave. It shows 95% accuracy, but only 5% of customers actually leave in the data.",
        dialogues: [
          { speaker: "Isha (Senior Analyst)", avatar: AV.datascienceIsha, text: "95 percent accuracy sounds fantastic. Now tell me how many of the leaving customers it actually caught." },
          { speaker: "Ananya (You)", avatar: AV.datascienceYou, text: "Let me check... it caught very few of them. It mostly predicts 'will stay' for everybody." },
          { speaker: "Manager Vikas", avatar: AV.datascienceVikas, text: "So the model is right 95 percent of the time - by guessing 'stay' for everyone. What do you do?" },
          { speaker: "Ananya (You)", avatar: AV.datascienceYou, text: "A model that never finds the customers who leave is useless, however good the accuracy number looks." }
        ],
        choices: [
          { text: "Measure precision and recall for the leaving customers, rebalance the data and improve the model before using it", correct: true,
            skills: { technical: 3, communication: 1, problemSolving: 3, leadership: 0 },
            reaction: { speaker: "Isha (Senior Analyst)", avatar: AV.datascienceIsha, text: "Exactly. With imbalanced data, accuracy alone is misleading. Recall on the group you care about tells the real story." } },
          { text: "Deploy the model because 95 percent accuracy is excellent", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Isha (Senior Analyst)", avatar: AV.datascienceIsha, text: "Ananya, a model that says 'stay' for everyone scores 95 percent and catches nobody who leaves. Always check the metrics that match the goal." } }
        ],
        betterAdvice: "With imbalanced data, accuracy can be misleading - check precision and recall for the group you actually care about before deploying a model."
      }

    ]
  },

  // ==================================================
  // IT - "Launch Day" (3 episodes)
  // Role: Mobile App Developer
  // Written directly in English (same as Wings of Honour / Cleared for Takeoff).
  // ==================================================
  appdev: {
    title: "Launch Day",
    genre: "IT",
    youDefaultName: "Neel",
    role: "Mobile App Developer",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=NeelAppdevM&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=NeelAppdevF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/5474282/pexels-photo-5474282.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Ship a mobile app to real users - handle a last-minute feature request, deal with a crash on older phones, and figure out why users are complaining after launch.",
    narration: "The app Neel's team has built for six months goes live tomorrow morning. The office is buzzing with pizza and nerves. Neel knows the difference between a good launch and a bad one is rarely the code itself - it's the decisions made in the last twenty-four hours.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "Team Room - Day Before Launch",
        bgImage: "https://images.pexels.com/photos/5474282/pexels-photo-5474282.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Twelve hours before launch, the Product Manager asks Neel to add one more feature - a dark mode. It seems small, but it touches almost every screen.",
        dialogues: [
          { speaker: "Pooja (Product Manager)", avatar: AV.appdevPooja, text: "Neel, dark mode is trending. Can you squeeze it in tonight? Only a few colours to change." },
          { speaker: "Team Lead Samira", avatar: AV.appdevSamira, text: "A few colours on almost every screen, the night before a launch. Think about testing time." },
          { speaker: "Neel (You)", avatar: AV.appdevYou, text: "I could probably code it in a few hours... but nobody could test it properly before launch." }
        ],
        choices: [
          { text: "Explain the testing risk, propose launching as planned and shipping dark mode in the next update after proper testing", correct: true,
            skills: { technical: 2, communication: 3, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "Team Lead Samira", avatar: AV.appdevSamira, text: "Well handled. You didn't just say no - you offered a plan. Protecting a stable launch while still delivering the idea is exactly right." } },
          { text: "Quietly add dark mode tonight and push it without telling anyone", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Team Lead Samira", avatar: AV.appdevSamira, text: "Neel, untested code shipped silently the night before launch is how launch-day disasters happen. Always tell the team about risk." } }
        ],
        betterAdvice: "Before a launch, explain the risk of last-minute features and propose shipping them after proper testing rather than pushing untested code."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "QA Desk - The Old Phone Crash",
        bgImage: "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Joseph finds that the app crashes when it opens on older Android phones. Around ten percent of the expected users have such phones. The launch is in six hours.",
        dialogues: [
          { speaker: "Joseph (QA Tester)", avatar: AV.appdevJoseph, text: "Neel, the app crashes on startup on older Android versions. It works fine on the newer ones." },
          { speaker: "Pooja (Product Manager)", avatar: AV.appdevPooja, text: "It's only ten percent of users. Can we launch anyway?" },
          { speaker: "Team Lead Samira", avatar: AV.appdevSamira, text: "Ten percent of a hundred thousand users is ten thousand people whose first impression is a crash." },
          { speaker: "Neel (You)", avatar: AV.appdevYou, text: "We can either fix it fast, or find a safer way to launch." }
        ],
        choices: [
          { text: "Ignore the crash because most phones work fine", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Team Lead Samira", avatar: AV.appdevSamira, text: "Neel, ten thousand crashing installs means ten thousand bad reviews on day one. Never ignore a startup crash." } },
          { text: "Fix the crash if possible, or do a staged rollout that excludes the affected phones until the fix is ready", correct: true,
            skills: { technical: 3, communication: 1, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "Team Lead Samira", avatar: AV.appdevSamira, text: "Smart. A staged rollout lets you launch on time without giving thousands of people a broken app. Fix, then widen the release." } }
        ],
        betterAdvice: "Never ship a known startup crash - fix it or use a staged rollout that keeps affected devices out until it is resolved."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "Post-Launch - Angry Reviews",
        bgImage: "https://images.pexels.com/photos/5496463/pexels-photo-5496463.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Two days after launch, reviews are coming in saying the app is slow. Nobody is sure why - some people say it's the network, some say it's a new bug.",
        dialogues: [
          { speaker: "Pooja (Product Manager)", avatar: AV.appdevPooja, text: "The rating is falling. People are saying the app is slow. We need to fix it now." },
          { speaker: "Joseph (QA Tester)", avatar: AV.appdevJoseph, text: "I can't reproduce the slowness on any of our test phones." },
          { speaker: "Team Lead Samira", avatar: AV.appdevSamira, text: "Everyone has a theory. What actually tells us where the slowness is?" },
          { speaker: "Neel (You)", avatar: AV.appdevYou, text: "Guessing and rewriting code without evidence could make things worse." }
        ],
        choices: [
          { text: "Check crash and performance logs and analytics to find which screens and devices are slow, then fix that specific issue", correct: true,
            skills: { technical: 3, communication: 1, problemSolving: 3, leadership: 0 },
            reaction: { speaker: "Team Lead Samira", avatar: AV.appdevSamira, text: "That's the professional approach. Logs and analytics point at the real problem so you fix one thing well instead of rewriting everything." } },
          { text: "Rewrite the main screens from scratch, hoping that will make the app faster", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 1, leadership: 0 },
            reaction: { speaker: "Team Lead Samira", avatar: AV.appdevSamira, text: "Neel, rewriting without knowing the cause risks new bugs and wastes days. Measure first, then fix exactly what's slow." } }
        ],
        betterAdvice: "When users report a problem, use logs and analytics to find the real cause before changing code - guessing and rewriting can create new bugs."
      }

    ]
  },

  // ==================================================
  // SPORTS - "Photo Finish" (3 episodes)
  // Role: Track Athlete
  // Written directly in English (same as Wings of Honour / Cleared for Takeoff).
  // ==================================================
  athlete: {
    title: "Photo Finish",
    genre: "Sports",
    youDefaultName: "Aditya",
    role: "Track Athlete",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=AdityaAthleteM&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=AdityaAthleteF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/5274777/pexels-photo-5274777.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Train and race as a 400-metre runner - stay calm at the start, handle a pulled muscle honestly, and run your own race in a national final where a fraction of a second decides everything.",
    narration: "The 400 metres is called the hardest sprint in athletics - fast enough to burn, long enough to hurt. Aditya has trained at dawn for three years for one thing: a place in the national final. Tonight, every decision on and off the track decides whether he crosses the line first or just short.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "Track - Qualifying Heat",
        bgImage: "https://images.pexels.com/photos/5274777/pexels-photo-5274777.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "At the qualifying heat, the runners settle into their blocks. Aditya's nerves are high, and last week he was disqualified in another race for a false start.",
        dialogues: [
          { speaker: "Coach Ramesh", avatar: AV.athleteRamesh, text: "Aditya, breathe. You know the start routine. Nothing else matters right now." },
          { speaker: "Sana (Training Partner)", avatar: AV.athleteSana, text: "You jumped the gun last week. Don't try to anticipate the pistol today." },
          { speaker: "Aditya (You)", avatar: AV.athleteYou, text: "If I wait too long, I lose half a second. If I jump, I'm out. I need to stay in control." }
        ],
        choices: [
          { text: "Try to leave a fraction early to gain an advantage on the others", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Coach Ramesh", avatar: AV.athleteRamesh, text: "Aditya, a false start means disqualification - zero points, zero race. The gun is your signal, not your guess." } },
          { text: "Follow the start routine, focus on reacting to the sound of the gun and not guessing it", correct: true,
            skills: { technical: 3, communication: 0, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "Coach Ramesh", avatar: AV.athleteRamesh, text: "That's how champions start. React, don't predict. A clean start beats a fast false start every single time." } }
        ],
        betterAdvice: "In sprint starts, react to the gun instead of anticipating it - a false start ends the race before it begins."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "Physio Room - The Pulled Muscle",
        bgImage: "https://images.pexels.com/photos/3718433/pexels-photo-3718433.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Two days before the final, Aditya feels a sharp pull at the back of his thigh during training. He hasn't told anyone yet.",
        dialogues: [
          { speaker: "Dr. Iyer (Physio)", avatar: AV.athleteIyer, text: "You are limping, Aditya. What happened during the last set?" },
          { speaker: "Sana (Training Partner)", avatar: AV.athleteSana, text: "He said it was nothing, but he stopped halfway through the last run." },
          { speaker: "Coach Ramesh", avatar: AV.athleteRamesh, text: "Whatever it is, I need the truth. It's the only way I can protect your career." },
          { speaker: "Aditya (You)", avatar: AV.athleteYou, text: "The final is in two days. If I say something, they may pull me out. But if I hide it, it may get worse." }
        ],
        choices: [
          { text: "Tell the coach and physio exactly what happened so they can assess it and plan safe treatment", correct: true,
            skills: { technical: 1, communication: 3, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "Dr. Iyer (Physio)", avatar: AV.athleteIyer, text: "That took courage and it was the right call. A small strain treated early can be fine for the final. Hidden, it can end a season." } },
          { text: "Hide the pain and run the final anyway", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 1 },
            reaction: { speaker: "Dr. Iyer (Physio)", avatar: AV.athleteIyer, text: "Aditya, running on a hidden muscle injury can turn a small strain into a long tear. Speaking up is part of being an athlete." } }
        ],
        betterAdvice: "Report an injury immediately to the coach and physio - hiding pain can turn a small strain into a career-threatening injury."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "Stadium - National Final",
        bgImage: "https://images.pexels.com/photos/104675/pexels-photo-104675.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "In the national final, the athlete in lane five sprints out extremely fast in the first 150 metres. Coach Ramesh's race plan was to stay smooth and finish strong.",
        dialogues: [
          { speaker: "Coach Ramesh", avatar: AV.athleteRamesh, text: "Remember the plan, Aditya. Smooth through the first bend, build on the back straight, empty the tank in the last hundred." },
          { speaker: "Sana (Training Partner)", avatar: AV.athleteSana, text: "Lane five always goes out too fast. He usually pays for it at the end." },
          { speaker: "Aditya (You)", avatar: AV.athleteYou, text: "It's hard to watch him pull ahead. But I trained for my race, not his." }
        ],
        choices: [
          { text: "Chase lane five's pace from the start so he doesn't get away", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Coach Ramesh", avatar: AV.athleteRamesh, text: "Aditya, running someone else's race burns your legs before the home straight. In a 400, pacing is the strategy." } },
          { text: "Stick to the race plan, stay relaxed on the bend and attack in the final 100 metres", correct: true,
            skills: { technical: 3, communication: 0, problemSolving: 2, leadership: 2 },
            reaction: { speaker: "Coach Ramesh", avatar: AV.athleteRamesh, text: "Perfect execution. You ran your own race and used your strength when it counted. That is how you win a 400." } }
        ],
        betterAdvice: "In a 400 metres race, stick to your own pacing plan - chasing an early leader's speed drains you before the final straight."
      }

    ]
  },

  // ==================================================
  // SPORTS - "Match Point" (3 episodes)
  // Role: Tennis Player
  // Written directly in English (same as Wings of Honour / Cleared for Takeoff).
  // ==================================================
  tennis: {
    title: "Match Point",
    genre: "Sports",
    youDefaultName: "Ishaan",
    role: "Tennis Player",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=IshaanTennisM&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=IshaanTennisF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/5739161/pexels-photo-5739161.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Play through a big tournament as a young tennis player - fix a serve that breaks under pressure, stay calm after a bad line call, and win a tie-break by playing smart, not just hard.",
    narration: "Tennis is a lonely game. No teammates, no substitutions - just you, the ball, and the voice in your head. Ishaan has reached the semi-final of the state championship for the first time, and the hardest opponent tonight is not across the net, it's his own nerves.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "Practice Court - Serve Trouble",
        bgImage: "https://images.pexels.com/photos/5739161/pexels-photo-5739161.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "In practice, Ishaan is double-faulting again and again on his second serve. Every time he misses, he hits the next one even harder.",
        dialogues: [
          { speaker: "Coach Fernandes", avatar: AV.tennisFernandes, text: "That's the fourth double fault in a row, Ishaan. What is going on with your toss?" },
          { speaker: "Tara (Doubles Partner)", avatar: AV.tennisTara, text: "You're swinging out of your shoes. Nobody wins by hitting the second serve at full power." },
          { speaker: "Ishaan (You)", avatar: AV.tennisYou, text: "I'm scared of losing the point, so I'm trying to hit it perfectly. That's making it worse." }
        ],
        choices: [
          { text: "Hit the second serve even harder so it lands with power", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Coach Fernandes", avatar: AV.tennisFernandes, text: "Ishaan, more power without control just adds more double faults. Fix the toss and add spin - the pace will come later." } },
          { text: "Slow down, reset with a consistent ball toss, and use a safer second serve with spin and margin", correct: true,
            skills: { technical: 3, communication: 1, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Coach Fernandes", avatar: AV.tennisFernandes, text: "That's it. A second serve is about getting the ball in play with spin, not winning the point outright. Consistency first." } }
        ],
        betterAdvice: "On a second serve, prioritise consistency - a repeatable toss with spin and margin beats trying to hit a perfect power shot."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "Semi-Final - The Bad Call",
        bgImage: "https://images.pexels.com/photos/30555521/pexels-photo-30555521.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "At a crucial point, a line judge calls Ishaan's shot out, but it looked in. He feels the anger rising and the crowd starts to murmur.",
        dialogues: [
          { speaker: "Chair Umpire", avatar: AV.tennisUmpire, text: "Ball out. Score is thirty-forty." },
          { speaker: "Tara (Doubles Partner)", avatar: AV.tennisTara, text: "That was in, Ishaan. Everyone saw it." },
          { speaker: "Coach Fernandes", avatar: AV.tennisFernandes, text: "Anger is going to cost you the next three points if you let it. What's your plan?" },
          { speaker: "Ishaan (You)", avatar: AV.tennisYou, text: "I can complain and lose focus, or I can handle it properly and keep playing." }
        ],
        choices: [
          { text: "Politely ask the umpire to check the mark or use the review if available, then take a breath and refocus for the next point", correct: true,
            skills: { technical: 1, communication: 3, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "Coach Fernandes", avatar: AV.tennisFernandes, text: "Exactly. Use the process, then let it go. The rules protect you when you stay calm - anger only helps your opponent." } },
          { text: "Argue loudly with the umpire and refuse to continue until they change the call", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Coach Fernandes", avatar: AV.tennisFernandes, text: "Ishaan, arguing gets you a code violation and lost focus. The call is made - use the review, then move on to the next point." } }
        ],
        betterAdvice: "After a bad line call, use the official review process politely and then refocus - arguing costs focus and can earn a penalty."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "Semi-Final - The Tie-Break",
        bgImage: "https://images.pexels.com/photos/8422410/pexels-photo-8422410.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "The match is at 5-5 in the final-set tie-break. Ishaan notices that his opponent's backhand becomes shaky under pressure.",
        dialogues: [
          { speaker: "Coach Fernandes", avatar: AV.tennisFernandes, text: "You've seen it too, haven't you? His backhand breaks down when the ball is deep." },
          { speaker: "Tara (Doubles Partner)", avatar: AV.tennisTara, text: "He'll try to rush you. Don't go for a highlight shot." },
          { speaker: "Ishaan (You)", avatar: AV.tennisYou, text: "I can go for a big winner every point, or I can make him miss by hitting solid, deep balls to his weaker side." }
        ],
        choices: [
          { text: "Go for a huge risky winner on every point to end it quickly", correct: false,
            skills: { technical: 1, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Coach Fernandes", avatar: AV.tennisFernandes, text: "Ishaan, every risky winner that misses is a free point for him. In a tie-break, force the errors instead of forcing the shots." } },
          { text: "Play percentage tennis - keep deep and solid, target the weaker backhand and wait for a short ball to attack", correct: true,
            skills: { technical: 3, communication: 0, problemSolving: 3, leadership: 1 },
            reaction: { speaker: "Coach Fernandes", avatar: AV.tennisFernandes, text: "Smart tennis. You didn't need brilliance, just patience and a plan. Make him play the shots he doesn't want to." } }
        ],
        betterAdvice: "In a tie-break, play the percentages - target the opponent's weaker shot with deep, solid balls instead of going for a risky winner on every point."
      }

    ]
  },

  // ==================================================
  // MEDICAL - "Steady Hands" (3 episodes)
  // Role: Surgeon
  // Written directly in English (same as Wings of Honour / Cleared for Takeoff).
  // ==================================================
  surgeon: {
    title: "Steady Hands",
    genre: "Medical",
    youDefaultName: "Nikhil",
    role: "Surgeon",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=NikhilSurgeonM&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=NikhilSurgeonF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/6291246/pexels-photo-6291246.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Step into the operating theatre as a young surgeon - run the safety checklist before the first cut, stay calm when bleeding starts, and talk honestly to a worried family after a complication.",
    narration: "Nikhil has scrubbed in on hundreds of operations as an assistant. Today, for the first time, he is operating under supervision as the lead surgeon. His hands are steady, but he knows surgery is not only about skill - it's about checklists, teamwork and telling the truth.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "Operation Theatre - Before the First Cut",
        bgImage: "https://images.pexels.com/photos/6291246/pexels-photo-6291246.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "The patient is asleep and the team is ready. The schedule is tight - two more surgeries are lined up after this one. Nurse Latha begins reading out the surgical safety checklist.",
        dialogues: [
          { speaker: "Nurse Latha", avatar: AV.surgeonLatha, text: "Sir, shall I go through the checklist? Patient name, procedure, site, allergies, blood availability." },
          { speaker: "Dr. Batra (Anaesthetist)", avatar: AV.surgeonBatra, text: "We are already ten minutes behind, Nikhil. Everything looks fine on my side." },
          { speaker: "Dr. Menon (Senior Surgeon)", avatar: AV.surgeonMenon, text: "You are the lead surgeon today. It's your decision how this room runs." },
          { speaker: "Nikhil (You)", avatar: AV.surgeonYou, text: "We're late, but this is the moment where the biggest mistakes are prevented." }
        ],
        choices: [
          { text: "Skip the checklist to save time since everyone already knows the case", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Dr. Menon (Senior Surgeon)", avatar: AV.surgeonMenon, text: "Nikhil, 'we all know the case' is exactly when mistakes slip through. The checklist is there for the days everybody feels sure." } },
          { text: "Complete the full safety checklist out loud, confirming patient, procedure, surgical site and allergies before starting", correct: true,
            skills: { technical: 3, communication: 2, problemSolving: 1, leadership: 1 },
            reaction: { speaker: "Dr. Menon (Senior Surgeon)", avatar: AV.surgeonMenon, text: "Correct. The checklist takes two minutes and prevents wrong-site and wrong-patient errors. No schedule is worth skipping it." } }
        ],
        betterAdvice: "Always complete the surgical safety checklist before the first cut - it prevents wrong-site and wrong-patient errors, however busy the schedule."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "Operation Theatre - Sudden Bleeding",
        bgImage: "https://images.pexels.com/photos/4094199/pexels-photo-4094199.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Halfway through the operation, a blood vessel starts bleeding more than expected. The monitor beeps faster and the room goes quiet.",
        dialogues: [
          { speaker: "Dr. Batra (Anaesthetist)", avatar: AV.surgeonBatra, text: "Blood pressure is dropping, Nikhil. Bleeding is heavier than expected." },
          { speaker: "Nurse Latha", avatar: AV.surgeonLatha, text: "Suction ready, sir. Extra blood units are on standby." },
          { speaker: "Dr. Menon (Senior Surgeon)", avatar: AV.surgeonMenon, text: "Take a breath. Tell the team what you see and what you need." },
          { speaker: "Nikhil (You)", avatar: AV.surgeonYou, text: "Panic is the real danger right now. I have to control the bleeding and keep everyone informed." }
        ],
        choices: [
          { text: "Announce the problem calmly, apply pressure to control the bleeding, ask for suction and extra help, and keep the team informed", correct: true,
            skills: { technical: 3, communication: 2, problemSolving: 2, leadership: 2 },
            reaction: { speaker: "Dr. Menon (Senior Surgeon)", avatar: AV.surgeonMenon, text: "That is exactly what a surgeon does - stay calm, control the bleed, use the team. Communication saves as many lives as technique does." } },
          { text: "Keep operating silently and hope the bleeding stops by itself", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Dr. Menon (Senior Surgeon)", avatar: AV.surgeonMenon, text: "Nikhil, silence in the middle of a bleed leaves the team blind. Say it, control it, and call for help early." } }
        ],
        betterAdvice: "When unexpected bleeding occurs, stay calm, control it and communicate clearly with the team - silence leaves everyone blind."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "Waiting Room - Speaking to the Family",
        bgImage: "https://images.pexels.com/photos/8459996/pexels-photo-8459996.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "After the surgery, the patient is stable but has a complication that will need a second procedure. The family is waiting anxiously outside.",
        dialogues: [
          { speaker: "Dr. Menon (Senior Surgeon)", avatar: AV.surgeonMenon, text: "The family is here. They deserve to hear it from you, Nikhil." },
          { speaker: "Nurse Latha", avatar: AV.surgeonLatha, text: "The patient's wife has been standing since morning." },
          { speaker: "Nikhil (You)", avatar: AV.surgeonYou, text: "I can say everything went fine and hope it clears up... or I can tell them the truth in a way they can understand." }
        ],
        choices: [
          { text: "Say the surgery went perfectly and avoid mentioning the complication for now", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Dr. Menon (Senior Surgeon)", avatar: AV.surgeonMenon, text: "Nikhil, hiding a complication breaks trust and can hurt the patient. Always tell the truth, gently and clearly." } },
          { text: "Explain in simple words what happened, what the complication is, what the plan is, and answer their questions honestly", correct: true,
            skills: { technical: 1, communication: 3, problemSolving: 1, leadership: 2 },
            reaction: { speaker: "Dr. Menon (Senior Surgeon)", avatar: AV.surgeonMenon, text: "That's the right way. Honest, simple and caring. Families can handle bad news better than they handle being misled." } }
        ],
        betterAdvice: "After a complication, explain it honestly in simple words with a clear plan - hiding it breaks trust and can harm the patient."
      }

    ]
  },

  // ==================================================
  // MEDICAL - "Right Dose" (3 episodes)
  // Role: Pharmacist
  // Written directly in English (same as Wings of Honour / Cleared for Takeoff).
  // ==================================================
  pharmacist: {
    title: "Right Dose",
    genre: "Medical",
    youDefaultName: "Aisha",
    role: "Pharmacist",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=AishaPharmacistM&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=AishaPharmacistF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/10827916/pexels-photo-10827916.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Work behind the counter of a busy pharmacy - question a prescription that looks wrong, say no to a customer who wants antibiotics without a doctor, and warn a patient about a dangerous medicine mix.",
    narration: "A pharmacy looks simple from the outside - hand over the medicine, take the payment. But Aisha knows the last person to check a prescription before it reaches a patient is the pharmacist. Every tablet she gives out carries a small responsibility - and sometimes a big one.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "Pharmacy Counter - The Unclear Prescription",
        bgImage: "https://images.pexels.com/photos/10827916/pexels-photo-10827916.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "A customer hands over a prescription with a handwritten dose that could be read two different ways. It could also be a look-alike medicine that sounds similar to another drug.",
        dialogues: [
          { speaker: "Mrs. Verma (Customer)", avatar: AV.pharmacistVerma, text: "Just give me the tablets, dear. I'm in a hurry." },
          { speaker: "Mr. Kapoor (Senior Pharmacist)", avatar: AV.pharmacistKapoor, text: "Aisha, read that dose again. Is that a one, or a seven?" },
          { speaker: "Aisha (You)", avatar: AV.pharmacistYou, text: "One reading is a normal dose. The other could be dangerous. I can't be fifty percent sure." }
        ],
        choices: [
          { text: "Politely explain to the customer, call the doctor to confirm the dose and medicine, and dispense only after confirmation", correct: true,
            skills: { technical: 3, communication: 2, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Mr. Kapoor (Senior Pharmacist)", avatar: AV.pharmacistKapoor, text: "Exactly. A two-minute phone call can prevent a serious overdose. If it's unclear, you ask - always." } },
          { text: "Choose the more likely reading and dispense it to avoid keeping the customer waiting", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Mr. Kapoor (Senior Pharmacist)", avatar: AV.pharmacistKapoor, text: "Aisha, guessing on a dose is how medication errors happen. A waiting customer is an inconvenience; a wrong dose is an injury." } }
        ],
        betterAdvice: "If a prescription is unclear, confirm it with the prescriber before dispensing - never guess a dose or a drug name."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "Pharmacy Counter - Antibiotics Without a Prescription",
        bgImage: "https://images.pexels.com/photos/24193871/pexels-photo-24193871.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "A young man asks for a strong antibiotic for a common cold. He has no prescription and says he takes it whenever he feels unwell.",
        dialogues: [
          { speaker: "Mrs. Verma (Customer)", avatar: AV.pharmacistVerma, text: "Just sell it to him, dear. Every other shop does." },
          { speaker: "Mr. Kapoor (Senior Pharmacist)", avatar: AV.pharmacistKapoor, text: "Think about what this drug does when it's used the wrong way." },
          { speaker: "Aisha (You)", avatar: AV.pharmacistYou, text: "He believes he needs it. But a cold is usually caused by a virus, and antibiotics don't work on viruses." }
        ],
        choices: [
          { text: "Sell the antibiotic since he is willing to pay for it", correct: false,
            skills: { technical: 0, communication: 1, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Mr. Kapoor (Senior Pharmacist)", avatar: AV.pharmacistKapoor, text: "Aisha, selling antibiotics without a prescription helps create drug-resistant infections and is against pharmacy rules. Explain instead of selling." } },
          { text: "Explain kindly that antibiotics don't work on colds and need a prescription, and suggest seeing a doctor if symptoms continue", correct: true,
            skills: { technical: 2, communication: 3, problemSolving: 1, leadership: 1 },
            reaction: { speaker: "Mr. Kapoor (Senior Pharmacist)", avatar: AV.pharmacistKapoor, text: "Well said. Misusing antibiotics makes bacteria resistant, and that harms everyone. Educating a customer is part of the job." } }
        ],
        betterAdvice: "Do not dispense prescription-only medicines without a valid prescription - explain kindly why and guide the customer to a doctor."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "Pharmacy Counter - The Risky Combination",
        bgImage: "https://images.pexels.com/photos/28123678/pexels-photo-28123678.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Mrs. Verma, an elderly customer who takes a blood thinner, asks for a common painkiller that can increase the risk of bleeding when combined with it.",
        dialogues: [
          { speaker: "Mrs. Verma (Customer)", avatar: AV.pharmacistVerma, text: "My knee hurts terribly. Just give me my usual strip of painkillers." },
          { speaker: "Dr. Rao (Physician)", avatar: AV.pharmacistRao, text: "Aisha, I see her regular prescription on file. She's on a blood thinner." },
          { speaker: "Mr. Kapoor (Senior Pharmacist)", avatar: AV.pharmacistKapoor, text: "Some painkillers and blood thinners do not go well together. Think carefully." },
          { speaker: "Aisha (You)", avatar: AV.pharmacistYou, text: "The medicine on the shelf is harmless for most people - but not for her." }
        ],
        choices: [
          { text: "Explain the interaction risk, ask her to check with her doctor, and suggest a safer option only if the doctor approves", correct: true,
            skills: { technical: 3, communication: 2, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Dr. Rao (Physician)", avatar: AV.pharmacistRao, text: "Excellent. You caught a dangerous interaction. Counselling and checking with the doctor is exactly the role of a pharmacist." } },
          { text: "Sell the usual painkiller because she has bought it before", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Dr. Rao (Physician)", avatar: AV.pharmacistRao, text: "Aisha, 'she bought it before' isn't a safety check. A new blood thinner changes everything - always check for interactions." } }
        ],
        betterAdvice: "Always check for drug interactions before dispensing - counsel the patient and confirm with the doctor when a medicine may be unsafe with their existing treatment."
      }

    ]
  },

  // ==================================================
  // LAW - "The Last Verdict" (3 episodes)
  // Role: Judge
  // Written directly in English (same as Wings of Honour / Cleared for Takeoff).
  // ==================================================
  judge: {
    title: "The Last Verdict",
    genre: "Law",
    youDefaultName: "Vidya",
    role: "Judge",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=VidyaJudgeM&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=VidyaJudgeF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Sit on the judge's chair for the first time - decide on repeated adjournments, refuse a private approach from a powerful lawyer, and deliver a verdict while the whole town is watching.",
    narration: "The courtroom rises as Vidya enters. She is one of the youngest magistrates in the district, and everyone in the room - lawyers, clerks and visitors - is quietly measuring her. A judge's power is enormous, and it is only respected when it is used with patience, fairness and courage.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "Courtroom - The Fifth Adjournment",
        bgImage: "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "For the fifth time, Advocate Rana asks the court to postpone a case. The other side, a poor family waiting for a decision for three years, is sitting quietly at the back.",
        dialogues: [
          { speaker: "Advocate Rana", avatar: AV.judgeRana, text: "Your Honour, my client is unwell. I request another adjournment of four weeks." },
          { speaker: "Court Master Prakash", avatar: AV.judgePrakash, text: "Madam, this is the fifth adjournment sought in this case. The family has travelled again today." },
          { speaker: "Justice Bhatt (Senior Judge)", avatar: AV.judgeBhatt, text: "Delay is also a form of denying justice, Vidya. But fairness matters too." },
          { speaker: "Vidya (You)", avatar: AV.judgeYou, text: "If I grant it automatically, the case never ends. If I refuse without hearing, it may be unfair." }
        ],
        choices: [
          { text: "Grant the adjournment again without asking any questions", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Justice Bhatt (Senior Judge)", avatar: AV.judgeBhatt, text: "Vidya, casual adjournments are why some cases take ten years. A judge must protect the court's time and the waiting party's rights." } },
          { text: "Ask for proof of the illness, allow a short final date with a clear warning and costs for further delay", correct: true,
            skills: { technical: 1, communication: 2, problemSolving: 3, leadership: 2 },
            reaction: { speaker: "Justice Bhatt (Senior Judge)", avatar: AV.judgeBhatt, text: "Balanced and firm. You respected genuine hardship without allowing endless delay. Justice delayed is justice denied." } }
        ],
        betterAdvice: "A judge should not grant repeated adjournments automatically - ask for reasons, allow a short final date and discourage delay, while remaining fair."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "Chamber - A Private Approach",
        bgImage: "https://images.pexels.com/photos/8112166/pexels-photo-8112166.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Before the hearing of an important case, a lawyer representing a powerful businessman enters Vidya's chamber alone and starts speaking about the case in a friendly tone.",
        dialogues: [
          { speaker: "Advocate Rana", avatar: AV.judgeRana, text: "Madam, I only wish to have a quiet word about the case. It will save everyone's time." },
          { speaker: "Court Master Prakash", avatar: AV.judgePrakash, text: "Madam, the other side's lawyer is not here." },
          { speaker: "Justice Bhatt (Senior Judge)", avatar: AV.judgeBhatt, text: "Remember what the robe means, Vidya. Everything you do in the case must happen openly." },
          { speaker: "Vidya (You)", avatar: AV.judgeYou, text: "He is polite and smiling. But a private conversation about a case is not something a judge can allow." }
        ],
        choices: [
          { text: "Politely refuse to discuss the case privately and ask him to make his points in open court with the other side present", correct: true,
            skills: { technical: 1, communication: 3, problemSolving: 2, leadership: 2 },
            reaction: { speaker: "Justice Bhatt (Senior Judge)", avatar: AV.judgeBhatt, text: "Exactly. A judge hears both sides together. Even a friendly private word can destroy public trust in the court." } },
          { text: "Listen to what he has to say because it might help understand the case faster", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Justice Bhatt (Senior Judge)", avatar: AV.judgeBhatt, text: "Vidya, one-sided conversations are exactly what a judge must avoid. If the other side isn't present, the discussion can't happen." } }
        ],
        betterAdvice: "A judge must never discuss a pending case privately with one side - all arguments must be heard openly with both parties present."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "Courtroom - Judgment Day",
        bgImage: "https://images.pexels.com/photos/34817075/pexels-photo-34817075.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "The town has been talking about a case for weeks and newspaper headlines demand a strict punishment. But the evidence on record is weak, and the prosecution cannot prove the charge beyond doubt.",
        dialogues: [
          { speaker: "Court Master Prakash", avatar: AV.judgePrakash, text: "Madam, there are journalists in the gallery and a crowd outside." },
          { speaker: "Justice Bhatt (Senior Judge)", avatar: AV.judgeBhatt, text: "People are angry, Vidya. But a court's duty is different from public opinion." },
          { speaker: "Advocate Rana", avatar: AV.judgeRana, text: "Your Honour, the law asks for proof, not for feelings." },
          { speaker: "Vidya (You)", avatar: AV.judgeYou, text: "If I convict because of the noise, I will be punishing someone the evidence doesn't support." }
        ],
        choices: [
          { text: "Give a strict punishment to satisfy the public even though the evidence is weak", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Justice Bhatt (Senior Judge)", avatar: AV.judgeBhatt, text: "Vidya, a verdict built on public pressure and weak evidence can destroy an innocent life. The law asks for proof, not applause." } },
          { text: "Decide only on the evidence and the law, and explain the reasoning clearly in the judgment, whatever public opinion says", correct: true,
            skills: { technical: 2, communication: 2, problemSolving: 2, leadership: 3 },
            reaction: { speaker: "Justice Bhatt (Senior Judge)", avatar: AV.judgeBhatt, text: "That is the heart of the judiciary. A judge follows evidence and law, not headlines. The reasoning is what protects your decision." } }
        ],
        betterAdvice: "A judge decides on evidence and law alone, not public pressure - and explains the reasoning clearly in the judgment."
      }

    ]
  },

  // ==================================================
  // LAW - "Voice for Many" (3 episodes)
  // Role: Legal Aid Lawyer
  // Written directly in English (same as Wings of Honour / Cleared for Takeoff).
  // ==================================================
  legalaid: {
    title: "Voice for Many",
    genre: "Law",
    youDefaultName: "Farhan",
    role: "Legal Aid Lawyer",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=FarhanLegalaidM&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=FarhanLegalaidF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/8112166/pexels-photo-8112166.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Work at a free legal aid clinic - help a worker who wasn't paid his wages, guide a client through a tough settlement offer, and refuse a bribe to drop the case.",
    narration: "Farhan could have joined a big firm and earned ten times more. Instead he chose a small legal aid clinic where the clients can't pay a rupee - people who don't know their rights and have nobody else to speak for them. Today, one of them is walking through the door.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "Legal Aid Clinic - First Meeting",
        bgImage: "https://images.pexels.com/photos/8112166/pexels-photo-8112166.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Ramesh, a daily-wage worker, says his employer fired him without paying three months of wages. He has only a few crumpled papers and no formal contract.",
        dialogues: [
          { speaker: "Ramesh (Client)", avatar: AV.legalaidRamesh, text: "Sir, I worked hard for three months. The owner just said don't come back, and gave me nothing." },
          { speaker: "Director Sunita", avatar: AV.legalaidSunita, text: "He doesn't know if he has any rights, Farhan. Explain them simply." },
          { speaker: "Farhan (You)", avatar: AV.legalaidYou, text: "He wants to hear that he will win. But I can't promise what I don't know." }
        ],
        choices: [
          { text: "Promise him that he will definitely win and get all his money quickly", correct: false,
            skills: { technical: 0, communication: 1, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Director Sunita", avatar: AV.legalaidSunita, text: "Farhan, no lawyer can guarantee a result. Promising a win sets a client up for heartbreak and destroys trust." } },
          { text: "Listen fully, explain his rights in simple words, collect whatever documents and witnesses exist and explain the honest next steps", correct: true,
            skills: { technical: 1, communication: 3, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "Director Sunita", avatar: AV.legalaidSunita, text: "Just right. Client trust starts with listening and honesty. You give him clarity, not false promises." } }
        ],
        betterAdvice: "Listen carefully, explain rights in simple language and give honest expectations - never promise a guaranteed result to a client."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "Clinic - The Settlement Offer",
        bgImage: "https://images.pexels.com/photos/8428076/pexels-photo-8428076.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "The employer's side offers a small settlement - about half the wages owed. Ramesh needs money urgently for his daughter's school fees and is tempted to accept.",
        dialogues: [
          { speaker: "Mr. Ahuja (Opposing Lawyer)", avatar: AV.legalaidAhuja, text: "My client is willing to pay half now. Take it, and the matter ends today." },
          { speaker: "Ramesh (Client)", avatar: AV.legalaidRamesh, text: "Sir, the school fees are due on Monday. Maybe I should just accept." },
          { speaker: "Director Sunita", avatar: AV.legalaidSunita, text: "It is his life and his decision. Your job is to make sure it is an informed one." },
          { speaker: "Farhan (You)", avatar: AV.legalaidYou, text: "I could tell him what to do. But the choice is his - and it should be a fully informed choice." }
        ],
        choices: [
          { text: "Explain the offer, his chances, the time the full case may take, and let Ramesh make the final decision himself", correct: true,
            skills: { technical: 1, communication: 3, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "Director Sunita", avatar: AV.legalaidSunita, text: "Correct. A lawyer advises but the client decides. Ramesh now knows exactly what he is choosing and why." } },
          { text: "Decide for him and reject the offer without discussing his needs", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Director Sunita", avatar: AV.legalaidSunita, text: "Farhan, it is his case and his family. Making decisions for a client takes away the very voice we are here to give them." } }
        ],
        betterAdvice: "Advise the client about options, risks and timelines, but let the client make the final decision - never decide on their behalf."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "Corridor - An Envelope",
        bgImage: "https://images.pexels.com/photos/34817075/pexels-photo-34817075.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Outside the courtroom, the opposing lawyer quietly offers Farhan an envelope of cash and says the case would be easier for everyone if it 'did not go forward'.",
        dialogues: [
          { speaker: "Mr. Ahuja (Opposing Lawyer)", avatar: AV.legalaidAhuja, text: "No one has to know, Farhan. You have small pay, a small clinic. Take it and let this case fade away." },
          { speaker: "Director Sunita", avatar: AV.legalaidSunita, text: "Farhan, I am watching this corridor from the door. What you do next matters." },
          { speaker: "Farhan (You)", avatar: AV.legalaidYou, text: "It would solve a lot of problems for me. But it would destroy the only person who trusted me." }
        ],
        choices: [
          { text: "Take the envelope and let the case slowly fade away", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Director Sunita", avatar: AV.legalaidSunita, text: "Farhan, selling out your client for an envelope ends your career and abandons the person you promised to help. Never." } },
          { text: "Refuse firmly, walk away and report the bribe attempt to the court and the clinic director", correct: true,
            skills: { technical: 1, communication: 2, problemSolving: 1, leadership: 3 },
            reaction: { speaker: "Director Sunita", avatar: AV.legalaidSunita, text: "That's integrity. Refusing and reporting protects your client, your profession and yourself. Well done." } }
        ],
        betterAdvice: "Refuse any bribe firmly and report it - a lawyer's duty to the client and the court always comes before personal gain."
      }

    ]
  },

  // ==================================================
  // LAW - "Cyber Court" (3 episodes)
  // Role: Cyber Law Advocate
  // Written directly in English (same as Wings of Honour / Cleared for Takeoff).
  // ==================================================
  cyberlaw: {
    title: "Cyber Court",
    genre: "Law",
    youDefaultName: "Rhea",
    role: "Cyber Law Advocate",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=RheaCyberlawM&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=RheaCyberlawF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/37732186/pexels-photo-37732186.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Fight a case where the crime happened online - protect digital evidence, push a platform to remove harmful content, and make sure electronic proof will stand up in court.",
    narration: "The crime scene in Rhea's cases isn't a street or a room - it's a phone screen. Photos can be deleted in seconds, accounts can vanish overnight, and the proof is made of timestamps and links. Today, a young woman is sitting in her office, terrified by what's being posted about her online.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "Law Office - The First Consultation",
        bgImage: "https://images.pexels.com/photos/37732186/pexels-photo-37732186.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Nisha shows Rhea fake, edited photos of her that have been posted on a social media account. She is frightened and wants to delete all her own messages and photos immediately.",
        dialogues: [
          { speaker: "Nisha (Client)", avatar: AV.cyberlawNisha, text: "Please help me, they are everywhere. I want to delete everything and disappear from the internet." },
          { speaker: "Sameer (IT Expert)", avatar: AV.cyberlawSameer, text: "If she deletes her accounts and messages, we may lose the very evidence that identifies the person behind this." },
          { speaker: "Adv. Khanna (Senior Partner)", avatar: AV.cyberlawKhanna, text: "The first hour decides half the case, Rhea." },
          { speaker: "Rhea (You)", avatar: AV.cyberlawYou, text: "She wants the pain to stop. But the evidence must be saved before anything is removed." }
        ],
        choices: [
          { text: "Tell her to delete everything immediately so no one can see it", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Adv. Khanna (Senior Partner)", avatar: AV.cyberlawKhanna, text: "Rhea, deleting everything destroys proof. Content can be reported for removal only after the evidence is safely preserved." } },
          { text: "Save the evidence first with screenshots showing links and timestamps, note the accounts, and then file a complaint on the cyber crime portal", correct: true,
            skills: { technical: 3, communication: 2, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Adv. Khanna (Senior Partner)", avatar: AV.cyberlawKhanna, text: "Exactly. Preserve first, then report. Evidence that isn't saved can disappear forever within minutes." } }
        ],
        betterAdvice: "In online harassment cases, preserve evidence first (links, timestamps, screenshots) and then report it - deleting everything destroys the proof."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "Law Office - The Platform Refuses",
        bgImage: "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Nisha's complaint is registered, but the platform has not removed the fake photos even after several requests. Every hour, more people see them.",
        dialogues: [
          { speaker: "Nisha (Client)", avatar: AV.cyberlawNisha, text: "It has been two days. They keep saying they are reviewing it." },
          { speaker: "Adv. Khanna (Senior Partner)", avatar: AV.cyberlawKhanna, text: "Platforms respond to formal legal notices faster than to angry posts." },
          { speaker: "Sameer (IT Expert)", avatar: AV.cyberlawSameer, text: "We can list every URL and the exact rule the content breaks." },
          { speaker: "Rhea (You)", avatar: AV.cyberlawYou, text: "Shouting about it publicly may feel powerful, but it could also harm her case." }
        ],
        choices: [
          { text: "Send a formal takedown notice listing the exact links and legal grounds, keep a record of it, and escalate to the grievance officer if there is no action", correct: true,
            skills: { technical: 3, communication: 2, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "Adv. Khanna (Senior Partner)", avatar: AV.cyberlawKhanna, text: "That's the professional route. A precise notice with proper escalation gives the platform a legal duty to act - and creates a record." } },
          { text: "Start a public campaign attacking the platform on social media", correct: false,
            skills: { technical: 0, communication: 1, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Adv. Khanna (Senior Partner)", avatar: AV.cyberlawKhanna, text: "Rhea, a public fight can amplify the harmful content and weaken the case. Use the formal legal route first." } }
        ],
        betterAdvice: "Send a formal takedown notice with exact links and legal grounds, then escalate through the platform's grievance process - not a public fight."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "Chambers - Making Evidence Count",
        bgImage: "https://images.pexels.com/photos/37732186/pexels-photo-37732186.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "The case goes to court. Rhea's only proof is a folder of phone screenshots, and the other side argues they can be easily edited or faked.",
        dialogues: [
          { speaker: "Adv. Khanna (Senior Partner)", avatar: AV.cyberlawKhanna, text: "The opposite counsel will challenge every screenshot. We need to make our proof reliable." },
          { speaker: "Sameer (IT Expert)", avatar: AV.cyberlawSameer, text: "We can use a proper forensic copy of the content and record its digital fingerprint (hash) so any change can be detected." },
          { speaker: "Rhea (You)", avatar: AV.cyberlawYou, text: "Screenshots alone are easy to attack. Electronic evidence needs a proper certificate and a clear chain of custody." }
        ],
        choices: [
          { text: "Submit the screenshots as they are and rely on the judge trusting them", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Adv. Khanna (Senior Partner)", avatar: AV.cyberlawKhanna, text: "Rhea, unverified screenshots are easy to challenge. Electronic evidence must be authenticated properly if it's going to stand." } },
          { text: "Get a forensic copy with a hash value, prepare the required certificate for electronic evidence and document who handled it", correct: true,
            skills: { technical: 3, communication: 1, problemSolving: 3, leadership: 1 },
            reaction: { speaker: "Adv. Khanna (Senior Partner)", avatar: AV.cyberlawKhanna, text: "Perfect. Reliable, certified and documented digital evidence is what makes a court accept it. This is where cyber cases are won." } }
        ],
        betterAdvice: "Electronic evidence must be authenticated - use a forensic copy with a hash, the required certificate and a documented chain of custody."
      }

    ]
  },

  // ==================================================
  // TEACHING - "Every Child Counts" (3 episodes)
  // Role: Special Educator
  // Written directly in English (same as Wings of Honour / Cleared for Takeoff).
  // ==================================================
  specialedu: {
    title: "Every Child Counts",
    genre: "Teaching",
    youDefaultName: "Mansi",
    role: "Special Educator",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=MansiSpecialeduM&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=MansiSpecialeduF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/18395403/pexels-photo-18395403.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Help a bright child who struggles with reading - teach in a way that suits him, talk honestly with a worried parent, and ask the school for the exam support he deserves.",
    narration: "Aarush is ten, curious and very good with numbers, but the words on the page seem to swim in front of his eyes. He has started hiding his notebook and calling himself stupid. Mansi has been trained for exactly this - to teach the way each child learns, not to force every child to learn the same way.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "Classroom - Reading Time",
        bgImage: "https://images.pexels.com/photos/18395403/pexels-photo-18395403.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "During class, the teacher asks each student to read aloud one by one. Aarush's turn is next, and his hands are trembling.",
        dialogues: [
          { speaker: "Aarush (Student)", avatar: AV.specialeduAarush, text: "Ma'am, please don't make me read in front of everyone. They laugh at me." },
          { speaker: "Coordinator D'Souza", avatar: AV.specialeduDsouza, text: "Mansi, some teachers push a struggling child harder, hoping it will fix things. It usually does the opposite." },
          { speaker: "Mansi (You)", avatar: AV.specialeduYou, text: "He isn't lazy. He needs a different way in, and he needs to feel safe first." }
        ],
        choices: [
          { text: "Make him read aloud in front of the class so he learns to overcome his fear", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Coordinator D'Souza", avatar: AV.specialeduDsouza, text: "Mansi, forcing a struggling child to read in public builds shame, not skill. Safety first, then skill." } },
          { text: "Skip the public reading, give him extra time and use a multi-sensory method like listening, tracing letters and colour overlays", correct: true,
            skills: { technical: 2, communication: 3, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "Coordinator D'Souza", avatar: AV.specialeduDsouza, text: "Exactly. Multi-sensory teaching and a safe environment help children like Aarush build skill and confidence at the same time." } }
        ],
        betterAdvice: "For a child with reading difficulty, use extra time and multi-sensory teaching in a safe setting - never force public reading."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "Meeting Room - A Worried Parent",
        bgImage: "https://images.pexels.com/photos/18931270/pexels-photo-18931270.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Aarush's mother believes her son is simply not trying hard enough. She is upset and thinks the school is making excuses.",
        dialogues: [
          { speaker: "Mrs. Kulkarni (Parent)", avatar: AV.specialeduKulkarni, text: "He is smart when he speaks. He just doesn't want to study. Maybe he needs stricter homework." },
          { speaker: "Coordinator D'Souza", avatar: AV.specialeduDsouza, text: "Parents are often scared, not angry. Approach it with patience." },
          { speaker: "Mansi (You)", avatar: AV.specialeduYou, text: "She loves him. She just hasn't been shown what he is going through." }
        ],
        choices: [
          { text: "Share specific examples of what you have observed, explain his strengths and difficulties kindly and suggest strategies that can be used at home", correct: true,
            skills: { technical: 1, communication: 3, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "Coordinator D'Souza", avatar: AV.specialeduDsouza, text: "Well done. Examples and kindness turn a defensive parent into a partner. Now she can actually help him." } },
          { text: "Tell her that she has not been supporting him enough at home", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Coordinator D'Souza", avatar: AV.specialeduDsouza, text: "Mansi, blaming a parent closes the door. A parent who feels attacked won't listen. Show, don't accuse." } }
        ],
        betterAdvice: "With worried parents, share specific observations and strengths kindly and suggest practical strategies - blame closes the conversation."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "Principal's Office - Exam Support",
        bgImage: "https://images.pexels.com/photos/8423020/pexels-photo-8423020.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Board exams are approaching. Aarush needs extra time and a reader for the papers, but the school office says there is a formal process and paperwork.",
        dialogues: [
          { speaker: "Coordinator D'Souza", avatar: AV.specialeduDsouza, text: "The school can request accommodations, but only with proper documentation and a formal request." },
          { speaker: "Mrs. Kulkarni (Parent)", avatar: AV.specialeduKulkarni, text: "I just want him to be treated fairly in the exam hall." },
          { speaker: "Mansi (You)", avatar: AV.specialeduYou, text: "The rules exist so support is given fairly and properly. I need to follow the process well." }
        ],
        choices: [
          { text: "Just tell the exam supervisor on the day to give him extra time", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Coordinator D'Souza", avatar: AV.specialeduDsouza, text: "Mansi, without approval on file, the supervisor cannot allow it. Support has to be arranged in advance through the official process." } },
          { text: "Prepare the assessment report, teacher observations and a formal application well before the deadline so the accommodations get approved", correct: true,
            skills: { technical: 2, communication: 2, problemSolving: 3, leadership: 1 },
            reaction: { speaker: "Coordinator D'Souza", avatar: AV.specialeduDsouza, text: "Exactly. Good documentation and early submission make approval smooth. You've made sure the support reaches him on exam day." } }
        ],
        betterAdvice: "Exam accommodations require documented assessment and a formal application well before the deadline - not a last-minute verbal request."
      }

    ]
  },

  // ==================================================
  // TEACHING - "The Principal's Office" (3 episodes)
  // Role: School Principal
  // Written directly in English (same as Wings of Honour / Cleared for Takeoff).
  // ==================================================
  principal: {
    title: "The Principal's Office",
    genre: "Teaching",
    youDefaultName: "Sunil",
    role: "School Principal",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=SunilPrincipalM&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=SunilPrincipalF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/18931270/pexels-photo-18931270.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Run a school for a day, every day - investigate a bullying complaint fairly, say no to a powerful parent, and choose wisely how to spend a tight budget.",
    narration: "Sunil was a great teacher for fifteen years. Being a principal is different - now he is responsible for eight hundred students, forty teachers and every decision that affects them. Some days the hardest part of the job isn't teaching. It's fairness.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "Principal's Office - The Complaint",
        bgImage: "https://images.pexels.com/photos/18931270/pexels-photo-18931270.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "A teacher reports that a Class 8 student is being repeatedly teased and pushed by a group of classmates. The group says it was only a joke.",
        dialogues: [
          { speaker: "Mrs. Iyer (Teacher)", avatar: AV.principalIyer, text: "Sir, he came to me crying twice this week. The other boys say they were joking." },
          { speaker: "Vice Principal Gupta", avatar: AV.principalGupta, text: "Boys will be boys, Sunil. It will settle itself." },
          { speaker: "Sunil (You)", avatar: AV.principalYou, text: "If this is bullying and I ignore it, it will get worse. If I punish without hearing everyone, it may be unfair." }
        ],
        choices: [
          { text: "Speak to the student and the other boys separately, gather facts, involve the counsellor and the parents, and set clear consequences and follow-up", correct: true,
            skills: { technical: 1, communication: 3, problemSolving: 2, leadership: 2 },
            reaction: { speaker: "Mrs. Iyer (Teacher)", avatar: AV.principalIyer, text: "That's the right approach. A fair inquiry protects the victim, gives everyone a voice and sets a clear standard for the school." } },
          { text: "Dismiss it as harmless fun and ask the boys to shake hands", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Mrs. Iyer (Teacher)", avatar: AV.principalIyer, text: "Sir, bullying that is ignored grows. A handshake doesn't fix a pattern - a proper inquiry and follow-up do." } }
        ],
        betterAdvice: "Treat bullying complaints seriously - inquire fairly, hear all sides, involve the counsellor and parents and follow up."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "Principal's Office - The Powerful Parent",
        bgImage: "https://images.pexels.com/photos/8423020/pexels-photo-8423020.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "An influential parent arrives, angry that his daughter scored poorly, and demands that her marks be raised. He hints that he 'has a lot of contacts in the education department'.",
        dialogues: [
          { speaker: "Mr. Malhotra (Parent)", avatar: AV.principalMalhotra, text: "Sunil, my daughter needs higher marks for her admission. Surely you can fix a few numbers." },
          { speaker: "Vice Principal Gupta", avatar: AV.principalGupta, text: "He can create trouble for us if we refuse." },
          { speaker: "Sunil (You)", avatar: AV.principalYou, text: "If I change the marks, I cheat every other student. If I refuse, I risk trouble. But I know which one is right." }
        ],
        choices: [
          { text: "Agree to raise the marks quietly to avoid trouble", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Vice Principal Gupta", avatar: AV.principalGupta, text: "Sunil, changing marks under pressure is dishonest and unfair to every student. Rules are only worth having if they apply to everyone." } },
          { text: "Politely refuse to change any marks, offer a formal re-evaluation process and suggest extra support for the student", correct: true,
            skills: { technical: 1, communication: 3, problemSolving: 1, leadership: 3 },
            reaction: { speaker: "Vice Principal Gupta", avatar: AV.principalGupta, text: "Right. Fair processes protect everyone. A re-evaluation is the honest answer, and it treats every child equally." } }
        ],
        betterAdvice: "Never change marks under pressure - refuse politely and offer the official re-evaluation process, treating all students equally."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "Staff Room - The Budget",
        bgImage: "https://images.pexels.com/photos/31367512/pexels-photo-31367512.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "The school has money for only one upgrade this year. One group wants a new smart board. The maintenance staff say the railing on the main staircase is loose and could break.",
        dialogues: [
          { speaker: "Mrs. Iyer (Teacher)", avatar: AV.principalIyer, text: "A smart board would help us all teach better, Sir." },
          { speaker: "Vice Principal Gupta", avatar: AV.principalGupta, text: "Then again, the staircase railing has been loose for a month." },
          { speaker: "Sunil (You)", avatar: AV.principalYou, text: "Both matter. But one of them is about students getting hurt." }
        ],
        choices: [
          { text: "Consult the teachers openly, fix the unsafe railing first because safety comes before convenience, and plan the smart board for the next budget", correct: true,
            skills: { technical: 1, communication: 2, problemSolving: 3, leadership: 2 },
            reaction: { speaker: "Vice Principal Gupta", avatar: AV.principalGupta, text: "Correct. Safety comes first, and by consulting the staff you kept everyone's trust. The smart board can follow." } },
          { text: "Buy the smart board first because it will impress visitors and parents", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Vice Principal Gupta", avatar: AV.principalGupta, text: "Sunil, impressing visitors is not a reason to leave a broken railing. Student safety is always the first priority." } }
        ],
        betterAdvice: "When funds are limited, fix safety hazards first and involve staff in planning the rest - safety comes before convenience or appearance."
      }

    ]
  },

  // ==================================================
  // TEACHING - "The Toppers' Batch" (3 episodes)
  // Role: Coaching Mentor
  // Written directly in English (same as Wings of Honour / Cleared for Takeoff).
  // ==================================================
  coachmentor: {
    title: "The Toppers' Batch",
    genre: "Teaching",
    youDefaultName: "Rajat",
    role: "Coaching Mentor",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=RajatCoachmentorM&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=RajatCoachmentorF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/31367512/pexels-photo-31367512.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Teach at a competitive exam coaching centre - help a student who is falling behind, guide a stressed student wisely, and refuse to lie in an advertisement about results.",
    narration: "Every year, thousands of students pack into coaching centres with one dream - a top rank. Rajat is a mentor for the toughest batch in the institute. The syllabus is heavy, the competition is fierce, and the most important thing he teaches is not a formula. It is how to stay honest, balanced and human under pressure.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "Lecture Hall - Falling Behind",
        bgImage: "https://images.pexels.com/photos/31367512/pexels-photo-31367512.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "The batch is moving fast through Physics, but Simran is struggling and afraid to ask questions in front of the toppers.",
        dialogues: [
          { speaker: "Simran (Student)", avatar: AV.coachmentorSimran, text: "Sir, I don't understand the last three chapters. Everyone else seems to get it." },
          { speaker: "Aryan (Topper)", avatar: AV.coachmentorAryan, text: "We have a test next week, Sir. Can we just continue?" },
          { speaker: "Director Sharma", avatar: AV.coachmentorSharma, text: "The syllabus deadline is fixed, Rajat, but so is your responsibility to each student." },
          { speaker: "Rajat (You)", avatar: AV.coachmentorYou, text: "If I keep going at this speed, I lose Simran - and probably others who are quiet too." }
        ],
        choices: [
          { text: "Keep going at the same pace because the syllabus can't wait", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Director Sharma", avatar: AV.coachmentorSharma, text: "Rajat, a syllabus finished with half the class lost isn't a success. Find the gap and close it before the next chapter." } },
          { text: "Find out exactly which concepts are missing, run a short doubt session, and give her a simple plan to catch up", correct: true,
            skills: { technical: 2, communication: 3, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "Director Sharma", avatar: AV.coachmentorSharma, text: "That's good mentoring. Diagnose the gap, fix it, and make it easy to ask questions. A student who is left behind rarely catches up alone." } }
        ],
        betterAdvice: "When a student falls behind, identify the specific gaps and give focused support - don't keep moving ahead and leave them behind."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "Mentor's Cabin - Exam Stress",
        bgImage: "https://images.pexels.com/photos/8199142/pexels-photo-8199142.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "A week before the big exam, Simran comes to Rajat looking exhausted. She says she has stopped sleeping and is afraid she will let her parents down.",
        dialogues: [
          { speaker: "Simran (Student)", avatar: AV.coachmentorSimran, text: "Sir, if I fail, my parents will be so disappointed. I can't stop thinking about it." },
          { speaker: "Director Sharma", avatar: AV.coachmentorSharma, text: "Pressure builds up quietly in students, Rajat. Listen before you speak." },
          { speaker: "Rajat (You)", avatar: AV.coachmentorYou, text: "She needs support, not another lecture about working harder." }
        ],
        choices: [
          { text: "Listen kindly, help her make a realistic study and rest plan, and gently involve the counsellor and her parents for support", correct: true,
            skills: { technical: 0, communication: 3, problemSolving: 2, leadership: 2 },
            reaction: { speaker: "Director Sharma", avatar: AV.coachmentorSharma, text: "Exactly right. Rest and realistic goals matter as much as revision. Involving the counsellor and family gives her a support system." } },
          { text: "Tell her to study more and sleep less because the exam is close", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Director Sharma", avatar: AV.coachmentorSharma, text: "Rajat, an exhausted mind performs badly and suffers. Encouraging her to push harder without rest can hurt her more than a lost mark." } }
        ],
        betterAdvice: "For an exam-stressed student, listen, encourage realistic planning with rest and involve counsellors and family - don't push harder without support."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "Director's Office - The Advertisement",
        bgImage: "https://images.pexels.com/photos/8199142/pexels-photo-8199142.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "The Director wants a big banner saying '100% Selection' for the batch. In reality, only some students in the batch got top ranks, and some of those toppers only took a single test series.",
        dialogues: [
          { speaker: "Director Sharma", avatar: AV.coachmentorSharma, text: "Rajat, everyone advertises big numbers. If we don't, we lose admissions to the next institute." },
          { speaker: "Aryan (Topper)", avatar: AV.coachmentorAryan, text: "Sir, I only attended the test series, but my photo is on the poster." },
          { speaker: "Rajat (You)", avatar: AV.coachmentorYou, text: "It would bring more students. But the students and parents who trust the poster would be misled." }
        ],
        choices: [
          { text: "Go along with the banner because everyone else does the same", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Director Sharma", avatar: AV.coachmentorSharma, text: "Rajat, 'everyone does it' doesn't make it honest. Misleading ads cheat families who are making big life decisions." } },
          { text: "Refuse the misleading claim and suggest advertising honest, verifiable results such as the actual number of selections and the students' real journey", correct: true,
            skills: { technical: 0, communication: 3, problemSolving: 2, leadership: 3 },
            reaction: { speaker: "Director Sharma", avatar: AV.coachmentorSharma, text: "Well said. Honest results build long-term trust. Misleading ads can lead to complaints, legal trouble and lost reputation." } }
        ],
        betterAdvice: "Refuse misleading advertising - promote honest, verifiable results because students and parents make major decisions based on them."
      }

    ]
  },

  // ==================================================
  // POLICE - "Trace the Signal" (3 episodes)
  // Role: Cyber Crime Officer
  // Written directly in English (same as Wings of Honour / Cleared for Takeoff).
  // ==================================================
  cybercell: {
    title: "Trace the Signal",
    genre: "Police",
    youDefaultName: "Jai",
    role: "Cyber Crime Officer",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=JaiCybercellM&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=JaiCybercellF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/5380618/pexels-photo-5380618.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Join the cyber crime cell - act fast for a victim of an online money scam, follow the money trail the legal way, and handle seized phones without destroying the evidence.",
    narration: "In Jai's old police station, crimes had a street address. In the cyber cell, the thief could be a thousand kilometres away and the weapon is a phone call. The clock matters most - money moves through bank accounts in minutes, and every hour of delay makes it harder to get back.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "Cyber Cell - The Scam Call",
        bgImage: "https://images.pexels.com/photos/5380618/pexels-photo-5380618.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "A retired teacher, Mr. Gupta, walks in trembling. Twenty minutes ago he shared an OTP with a caller pretending to be from his bank, and money has left his account.",
        dialogues: [
          { speaker: "Mr. Gupta (Victim)", avatar: AV.cybercellGupta, text: "Sir, I gave them the OTP. Now eighty thousand rupees are gone from my account." },
          { speaker: "Constable Neha (Tech Analyst)", avatar: AV.cybercellNeha, text: "Sir, the first hour is the 'golden hour' for freezing the money before it moves further." },
          { speaker: "SP Malhotra", avatar: AV.cybercellMalhotra, text: "Every minute matters, Jai. What do you do first?" },
          { speaker: "Jai (You)", avatar: AV.cybercellYou, text: "I can take his written complaint later. Right now, the money is still moving." }
        ],
        choices: [
          { text: "Ask him to come back tomorrow with all documents ready", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "SP Malhotra", avatar: AV.cybercellMalhotra, text: "Jai, by tomorrow the money will have passed through several accounts. In cyber fraud, speed is everything." } },
          { text: "Immediately report it through the cyber fraud helpline and portal so the bank can freeze the money, then record the full complaint", correct: true,
            skills: { technical: 3, communication: 2, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "SP Malhotra", avatar: AV.cybercellMalhotra, text: "Perfect. In the golden hour, a fast alert to the bank can stop the money. Paperwork can be finished after the money is safe." } }
        ],
        betterAdvice: "In online money fraud, report immediately through the fraud helpline and portal - the first hour is the best chance to freeze the money."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "Cyber Cell - Following the Money",
        bgImage: "https://images.pexels.com/photos/7785075/pexels-photo-7785075.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Neha traces the stolen money to a bank account that seems to belong to an ordinary person - possibly a 'mule' account used to pass money along. Jai wants to see all the account holder's private data at once.",
        dialogues: [
          { speaker: "Constable Neha (Tech Analyst)", avatar: AV.cybercellNeha, text: "The money reached an account in another state, then split quickly into several more." },
          { speaker: "SP Malhotra", avatar: AV.cybercellMalhotra, text: "We follow the money, but we also follow the law, Jai." },
          { speaker: "Jai (You)", avatar: AV.cybercellYou, text: "I could ask a bank friend to just show me the account details. But evidence collected illegally can fall apart in court." }
        ],
        choices: [
          { text: "Send a formal legal request to the bank for the account records and transaction trail through the proper channel", correct: true,
            skills: { technical: 3, communication: 1, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "SP Malhotra", avatar: AV.cybercellMalhotra, text: "Right. Records obtained through the proper legal process stand up in court. Shortcuts can destroy a good case." } },
          { text: "Ask a friend at the bank to quietly share the account holder's details", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "SP Malhotra", avatar: AV.cybercellMalhotra, text: "Jai, evidence gathered informally can be thrown out and can get us into trouble. Do it properly, and the case survives." } }
        ],
        betterAdvice: "Obtain bank records through a formal legal request - evidence gathered through informal shortcuts can be rejected in court."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "Interrogation Room - The Seized Phone",
        bgImage: "https://images.pexels.com/photos/10481251/pexels-photo-10481251.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "A suspect is arrested with two phones and a laptop. A junior officer starts scrolling through the phone to look for clues and asks Jai if it's okay.",
        dialogues: [
          { speaker: "Constable Neha (Tech Analyst)", avatar: AV.cybercellNeha, text: "Sir, please don't let them unlock and scroll through it casually. Every tap can change the data." },
          { speaker: "SP Malhotra", avatar: AV.cybercellMalhotra, text: "Digital evidence is fragile, Jai. How you handle it now decides everything later." },
          { speaker: "Jai (You)", avatar: AV.cybercellYou, text: "It's tempting to look right away. But if we change anything, the defence will argue the evidence was tampered with." }
        ],
        choices: [
          { text: "Let the junior officer browse the phone right now to look for clues faster", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "SP Malhotra", avatar: AV.cybercellMalhotra, text: "Jai, browsing a live phone alters its data and breaks the chain of custody. Seal it and let the experts make a copy." } },
          { text: "Switch the phones to flight mode, seal and label the devices with a proper seizure record, and send them to the forensic lab for a proper copy", correct: true,
            skills: { technical: 3, communication: 1, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "SP Malhotra", avatar: AV.cybercellMalhotra, text: "Exactly. Isolate, seal, document, and let the forensic team make a verified copy. That keeps the evidence clean and admissible." } }
        ],
        betterAdvice: "Seize digital devices properly - isolate, seal, label and have the forensic lab make a verified copy; never browse a seized device casually."
      }

    ]
  },

  // ==================================================
  // POLICE - "Trace Evidence" (3 episodes)
  // Role: Forensic Scientist
  // Written directly in English (same as Wings of Honour / Cleared for Takeoff).
  // ==================================================
  forensic: {
    title: "Trace Evidence",
    genre: "Police",
    youDefaultName: "Ira",
    role: "Forensic Scientist",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=IraForensicM&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=IraForensicF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/10481251/pexels-photo-10481251.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Work a crime scene as a forensic scientist - collect evidence without contaminating it, report fingerprint findings honestly, and own up to a gap in the chain of custody.",
    narration: "The detectives ask who did it. The forensic scientist asks a different question - what can the evidence prove? Ira's job is to let objects speak: a fibre, a smudge, a single fingerprint. The smallest mistake can turn a guilty person free, or an innocent person into a suspect.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "Crime Scene - Before Touching Anything",
        bgImage: "https://images.pexels.com/photos/10481251/pexels-photo-10481251.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Ira arrives at a burgled house. Officers are walking in and out, and a constable is about to pick up a glass lying on the floor to 'see if it's important'.",
        dialogues: [
          { speaker: "Inspector Bhatia", avatar: AV.forensicBhatia, text: "We've already been in and out. Take whatever you need, Ira." },
          { speaker: "Ravi (Lab Assistant)", avatar: AV.forensicRavi, text: "That glass on the floor could carry fingerprints or DNA." },
          { speaker: "Dr. Chandra (Lab Head)", avatar: AV.forensicChandra, text: "A scene can only be examined once, Ira. Contamination can't be undone." },
          { speaker: "Ira (You)", avatar: AV.forensicYou, text: "Before we touch anything, the scene needs to be protected and recorded exactly as it is." }
        ],
        choices: [
          { text: "Pick up the glass and other items quickly and put them in one bag", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Dr. Chandra (Lab Head)", avatar: AV.forensicChandra, text: "Ira, touching items without documenting them and mixing them in one bag can contaminate and destroy the evidence." } },
          { text: "Restrict entry, wear gloves and protective clothing, photograph and document everything in place, and only then collect and package each item separately", correct: true,
            skills: { technical: 3, communication: 1, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "Dr. Chandra (Lab Head)", avatar: AV.forensicChandra, text: "That's the right sequence: protect, photograph, document, then collect. It keeps the evidence clean and credible." } }
        ],
        betterAdvice: "At a crime scene, secure the area, use protective gear, photograph and document everything in place, then package each item separately."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "Fingerprint Lab - The Partial Print",
        bgImage: "https://images.pexels.com/photos/669609/pexels-photo-669609.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Ira finds a partial fingerprint at the scene. It shares some features with a suspect's print but not enough to be certain. The Inspector wants it declared a match today.",
        dialogues: [
          { speaker: "Inspector Bhatia", avatar: AV.forensicBhatia, text: "The suspect is already in custody. Just say it's a match and we can close this." },
          { speaker: "Ravi (Lab Assistant)", avatar: AV.forensicRavi, text: "The print is smudged. I count only a few clear points." },
          { speaker: "Dr. Chandra (Lab Head)", avatar: AV.forensicChandra, text: "A forensic report is worth exactly as much as its honesty." },
          { speaker: "Ira (You)", avatar: AV.forensicYou, text: "I feel the pressure. But if I overstate the result, someone might be convicted on weak evidence." }
        ],
        choices: [
          { text: "Report the actual findings, including how many clear points were found and the limits of the comparison, without overstating", correct: true,
            skills: { technical: 3, communication: 2, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "Dr. Chandra (Lab Head)", avatar: AV.forensicChandra, text: "That is scientific integrity. Courts rely on the honesty of your report. Overstating a result is the fastest way to ruin a case and a career." } },
          { text: "Declare it a definite match so the case can close quickly", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Dr. Chandra (Lab Head)", avatar: AV.forensicChandra, text: "Ira, a definite match on a smudged partial print is a false claim. Wrong forensic evidence can convict the wrong person." } }
        ],
        betterAdvice: "Report forensic findings objectively with their limits - overstating a result can lead to wrong convictions."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "Evidence Room - The Missing Entry",
        bgImage: "https://images.pexels.com/photos/7785075/pexels-photo-7785075.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "While checking paperwork, Ira notices that a sample bag was in a locker for two hours with no signature on the chain-of-custody form. Nobody else seems to have noticed.",
        dialogues: [
          { speaker: "Ravi (Lab Assistant)", avatar: AV.forensicRavi, text: "Ma'am, the register has no entry for that period. Maybe I should just fill it in." },
          { speaker: "Dr. Chandra (Lab Head)", avatar: AV.forensicChandra, text: "If it is discovered later in court, it will look like we hid it." },
          { speaker: "Ira (You)", avatar: AV.forensicYou, text: "If I hide the gap, I create a bigger problem. If I report it, the defence may use it. But honesty is the only safe path." }
        ],
        choices: [
          { text: "Fill in the missing entry so the record looks complete", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Dr. Chandra (Lab Head)", avatar: AV.forensicChandra, text: "Ira, falsifying a record is a serious offence and destroys the whole case. Report the gap honestly and explain it." } },
          { text: "Document the gap honestly, report it to the lab head and let the court know if required, with a note on how the sample was protected during that time", correct: true,
            skills: { technical: 2, communication: 2, problemSolving: 2, leadership: 2 },
            reaction: { speaker: "Dr. Chandra (Lab Head)", avatar: AV.forensicChandra, text: "Exactly. An honest gap can be explained; a hidden one destroys credibility. Never fill in an entry you did not witness." } }
        ],
        betterAdvice: "If a chain-of-custody gap is found, document and report it honestly - never fill in or falsify a record."
      }

    ]
  },

  // ==================================================
  // POLICE - "Night Beat" (3 episodes)
  // Role: Beat Constable
  // Written directly in English (same as Wings of Honour / Cleared for Takeoff).
  // ==================================================
  nightbeat: {
    title: "Night Beat",
    genre: "Police",
    youDefaultName: "Karan",
    role: "Beat Constable",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=KaranNightbeatM&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=KaranNightbeatF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/7785075/pexels-photo-7785075.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Walk the night patrol as a beat constable - handle an open shop shutter at 2 a.m., look after a lost child, and cool down a street argument that is about to turn violent.",
    narration: "At night, the city is a different place. Most people are asleep and the streets belong to the beat constable - the one who knows every lane, every shopkeeper and every dark corner. Karan has walked this beat for six months, and he has learned that most of the job is noticing what doesn't look right.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "Market Lane - 2 A.M.",
        bgImage: "https://images.pexels.com/photos/7785075/pexels-photo-7785075.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "On patrol, Karan finds a shop shutter half open and a light flickering inside. The owner usually closes at ten.",
        dialogues: [
          { speaker: "SI Yadav", avatar: AV.nightbeatYadav, text: "Karan, this shop is never open at this hour. Stay alert." },
          { speaker: "Rafiq (Shopkeeper)", avatar: AV.nightbeatRafiq, text: "Karan bhai, I closed at ten! Something isn't right!" },
          { speaker: "Karan (You)", avatar: AV.nightbeatYou, text: "Someone could be inside. If I go in alone and there are several of them, I could get hurt and they could escape." }
        ],
        choices: [
          { text: "Stay outside, inform control and SI Yadav, request backup, and secure the exits until help arrives", correct: true,
            skills: { technical: 2, communication: 2, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "SI Yadav", avatar: AV.nightbeatYadav, text: "Exactly. Backup and covered exits give you the best chance of catching them safely. Bravery without a plan is just risk." } },
          { text: "Rush in alone to catch them before they escape", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "SI Yadav", avatar: AV.nightbeatYadav, text: "Karan, walking in alone against unknown numbers is how officers get hurt. Wait for backup and cover the exits." } }
        ],
        betterAdvice: "When you find a suspected break-in, inform control, wait for backup and cover the exits - never enter alone against unknown numbers."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "Bus Stop - The Lost Child",
        bgImage: "https://images.pexels.com/photos/9862225/pexels-photo-9862225.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Near midnight, Karan finds a small girl, about five years old, crying alone at a bus stop. She cannot say where her home is.",
        dialogues: [
          { speaker: "Mrs. Pillai (Resident)", avatar: AV.nightbeatPillai, text: "Poor child, she's been here for a while. Nobody came for her." },
          { speaker: "SI Yadav", avatar: AV.nightbeatYadav, text: "Karan, this is a moment where kindness matters more than procedure - but procedure protects her too." },
          { speaker: "Karan (You)", avatar: AV.nightbeatYou, text: "She's scared. I need to calm her down, keep her safe and find her family quickly." }
        ],
        choices: [
          { text: "Leave her at the bus stop and continue the patrol, since someone will come for her", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "SI Yadav", avatar: AV.nightbeatYadav, text: "Karan, a five-year-old alone at midnight cannot be left. Her safety is the first job of the night." } },
          { text: "Speak gently to comfort her, keep her safe with a woman constable or resident present, inform control and check missing-child reports", correct: true,
            skills: { technical: 1, communication: 3, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "SI Yadav", avatar: AV.nightbeatYadav, text: "That's it. Calm, safe and reported. She's warm, protected and her family can find her fast." } }
        ],
        betterAdvice: "For a lost child, comfort and protect them first, inform control and check missing-child reports - never leave them alone."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "Street Corner - The Heated Argument",
        bgImage: "https://images.pexels.com/photos/9862225/pexels-photo-9862225.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Two groups are shouting at each other over a parking dispute. A crowd is gathering and a man has picked up a stick.",
        dialogues: [
          { speaker: "Rafiq (Shopkeeper)", avatar: AV.nightbeatRafiq, text: "They are about to fight, Karan bhai! Do something!" },
          { speaker: "SI Yadav", avatar: AV.nightbeatYadav, text: "Force is a last resort, Karan. Your voice and your calm come first." },
          { speaker: "Karan (You)", avatar: AV.nightbeatYou, text: "If I rush in with force, it may turn into a riot. If I do nothing, someone gets hurt." }
        ],
        choices: [
          { text: "Call for backup, stay calm, separate the two groups, ask the man to put down the stick and listen to each side separately", correct: true,
            skills: { technical: 1, communication: 3, problemSolving: 2, leadership: 2 },
            reaction: { speaker: "SI Yadav", avatar: AV.nightbeatYadav, text: "That's professional policing. Calm authority and separating the groups defuses most situations before they explode." } },
          { text: "Use force straight away to scare everyone into stopping", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "SI Yadav", avatar: AV.nightbeatYadav, text: "Karan, jumping to force can turn an argument into a riot and get people badly hurt. Start with calm, and escalate only when needed." } }
        ],
        betterAdvice: "To defuse a street dispute, call backup, stay calm, separate the parties and listen - use force only as a last resort."
      }

    ]
  },

  // ==================================================
  // GOVERNMENT - "Right on Track" (3 episodes)
  // Role: Railway Station Master
  // Written directly in English (same as Wings of Honour / Cleared for Takeoff).
  // ==================================================
  railways: {
    title: "Right on Track",
    genre: "Government",
    youDefaultName: "Vishal",
    role: "Railway Station Master",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=VishalRailwaysM&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=VishalRailwaysF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/10662882/pexels-photo-10662882.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Manage a busy railway station - hold trains during a signal failure, control a festival crowd on a packed platform, and stand firm when a VIP wants a train delayed.",
    narration: "A railway station never sleeps. Trains, passengers, porters, signals - everything moves on a timetable measured in minutes. Vishal is the Assistant Station Master, and one rule has been drilled into him since his first day: in the railways, safety comes before the timetable, every single time.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "Control Cabin - Signal Failure",
        bgImage: "https://images.pexels.com/photos/10662882/pexels-photo-10662882.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "During peak hours the signal at the station's entrance suddenly goes blank. An express train is approaching and passengers are waiting at the platform.",
        dialogues: [
          { speaker: "Raju (Signal Maintainer)", avatar: AV.railwaysRaju, text: "Sir, the outer signal has failed. It's showing nothing." },
          { speaker: "Station Master Pandey", avatar: AV.railwaysPandey, text: "An express is due in four minutes. What are your orders, Vishal?" },
          { speaker: "Guard Iqbal", avatar: AV.railwaysIqbal, text: "The driver is calling on the radio, sir. He is asking whether he can proceed." },
          { speaker: "Vishal (You)", avatar: AV.railwaysYou, text: "The route looks clear. But a signal that shows nothing cannot be trusted." }
        ],
        choices: [
          { text: "Stop the train at the signal, follow the failure procedure, and allow it in only with proper written authority after the line is confirmed clear", correct: true,
            skills: { technical: 3, communication: 1, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "Station Master Pandey", avatar: AV.railwaysPandey, text: "Exactly. A failed signal is treated as danger. Procedure and written authority keep everyone alive, even if it delays the train." } },
          { text: "Wave the train in on a verbal assurance that the line is clear", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Station Master Pandey", avatar: AV.railwaysPandey, text: "Vishal, verbal guesses are what cause accidents. A failed signal means stop, and follow the written procedure." } }
        ],
        betterAdvice: "When a signal fails, treat it as danger - stop the train and proceed only under the official failure procedure with proper authority."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "Platform 1 - Festival Rush",
        bgImage: "https://images.pexels.com/photos/7119394/pexels-photo-7119394.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "During a festival, thousands of extra passengers have flooded the platform. The overbridge is jammed and people are pushing near the edge as a train approaches.",
        dialogues: [
          { speaker: "Guard Iqbal", avatar: AV.railwaysIqbal, text: "Sir, people are too close to the platform edge. It's getting dangerous." },
          { speaker: "Station Master Pandey", avatar: AV.railwaysPandey, text: "Crowds can become a disaster in seconds. Act early, Vishal." },
          { speaker: "Vishal (You)", avatar: AV.railwaysYou, text: "We have to control the crowd before it becomes a stampede." }
        ],
        choices: [
          { text: "Let the crowd sort itself out and focus only on the train timetable", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Station Master Pandey", avatar: AV.railwaysPandey, text: "Vishal, crowds don't sort themselves out. On a packed platform, the edge and the stairs are where people get hurt - act early." } },
          { text: "Make clear announcements, deploy extra staff and RPF, use barricades and one-way flow, and stop new entries until the platform clears", correct: true,
            skills: { technical: 1, communication: 3, problemSolving: 2, leadership: 3 },
            reaction: { speaker: "Station Master Pandey", avatar: AV.railwaysPandey, text: "That's crowd management done right. Announcements, barriers and controlled entry stop a crowd problem before it becomes a tragedy." } }
        ],
        betterAdvice: "For a dangerous platform crowd, use announcements, extra staff, barricades and controlled entry early - don't wait for it to become an emergency."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "Station Office - The VIP Request",
        bgImage: "https://images.pexels.com/photos/11811345/pexels-photo-11811345.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "A powerful official calls and asks Vishal to hold the departing express for ten minutes because his relatives are running late. The train is already on a tight schedule and another train is waiting behind it.",
        dialogues: [
          { speaker: "Station Master Pandey", avatar: AV.railwaysPandey, text: "The official is very senior, Vishal. He is not used to hearing 'no'." },
          { speaker: "Guard Iqbal", avatar: AV.railwaysIqbal, text: "If we hold the express, the next train has to wait outside on the line." },
          { speaker: "Vishal (You)", avatar: AV.railwaysYou, text: "It would keep him happy. But it would delay hundreds of passengers and disturb the whole section." }
        ],
        choices: [
          { text: "Politely explain that trains cannot be held for individuals under the rules and offer to help his relatives with the next available train", correct: true,
            skills: { technical: 1, communication: 3, problemSolving: 2, leadership: 2 },
            reaction: { speaker: "Station Master Pandey", avatar: AV.railwaysPandey, text: "Well said. Rules apply to everyone, and you stayed respectful while holding the line. The timetable serves all passengers, not one." } },
          { text: "Hold the express for him to avoid trouble with a senior official", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Station Master Pandey", avatar: AV.railwaysPandey, text: "Vishal, delaying hundreds of passengers and disrupting the section for one person's convenience isn't service. Rules must be applied equally." } }
        ],
        betterAdvice: "Trains cannot be held for personal convenience - politely refuse, explain the rules and offer alternatives, whatever the person's rank."
      }

    ]
  },

  // ==================================================
  // GOVERNMENT - "Green Warden" (3 episodes)
  // Role: Forest Range Officer
  // Written directly in English (same as Wings of Honour / Cleared for Takeoff).
  // ==================================================
  forestofficer: {
    title: "Green Warden",
    genre: "Government",
    youDefaultName: "Arya",
    role: "Forest Range Officer",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=AryaForestofficerM&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=AryaForestofficerF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/18691540/pexels-photo-18691540.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Protect a forest range as a young officer - work with villagers who cut trees for fuel, manage a wild elephant entering farmland, and act on a tip about illegal logging.",
    narration: "The forest range Arya has been posted to covers three hundred square kilometres of woodland, and twelve villages live along its edge. Her job isn't just guarding trees. It is protecting wildlife, water and the livelihoods of people who live beside the forest - and those goals often pull in different directions.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "Forest Edge - Firewood Cutting",
        bgImage: "https://images.pexels.com/photos/18691540/pexels-photo-18691540.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Arya finds a group of villagers cutting young trees for cooking fuel inside the protected forest. They say they have no other way to cook.",
        dialogues: [
          { speaker: "Sarpanch Mohan", avatar: AV.forestofficerMohan, text: "Madam, we don't cut for money. We just have nothing else to cook with." },
          { speaker: "Ranger Gowda", avatar: AV.forestofficerGowda, text: "We can file cases against all of them, Madam. But they'll be back next week." },
          { speaker: "Arya (You)", avatar: AV.forestofficerYou, text: "Punishing them won't stop the reason they are cutting - and I need them on my side to protect this forest." }
        ],
        choices: [
          { text: "File cases against every villager present and move on", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Ranger Gowda", avatar: AV.forestofficerGowda, text: "Arya, punishment alone doesn't remove the need. Without alternatives, the cutting continues and the village turns against the forest department." } },
          { text: "Stop the cutting, explain the law and work with the village on alternatives like cooking gas schemes, dead-wood collection and community plantations", correct: true,
            skills: { technical: 1, communication: 3, problemSolving: 2, leadership: 2 },
            reaction: { speaker: "Ranger Gowda", avatar: AV.forestofficerGowda, text: "That's how forests are actually saved - by working with the people who live beside them. Enforcement plus alternatives lasts." } }
        ],
        betterAdvice: "Combine lawful enforcement with practical alternatives and community involvement - punishment alone doesn't remove the reason for forest cutting."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "Farmland Edge - The Elephant",
        bgImage: "https://images.pexels.com/photos/30175897/pexels-photo-30175897.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "At dusk, a wild elephant has wandered out of the forest into a field near the village. A crowd has gathered, shouting and throwing things.",
        dialogues: [
          { speaker: "Dr. Nandini (Wildlife Biologist)", avatar: AV.forestofficerNandini, text: "The elephant is frightened, not angry. A crowd and noise will make it more dangerous." },
          { speaker: "Ranger Gowda", avatar: AV.forestofficerGowda, text: "People are getting closer with lights and firecrackers, Madam." },
          { speaker: "Sarpanch Mohan", avatar: AV.forestofficerMohan, text: "It has already eaten some of our crop. We are scared, Madam." },
          { speaker: "Arya (You)", avatar: AV.forestofficerYou, text: "Both people and the animal are in danger right now. I have to calm the crowd and guide the elephant back." }
        ],
        choices: [
          { text: "Move the crowd back to a safe distance, bring the rapid response team, guide the elephant gently to its corridor and later help with crop compensation", correct: true,
            skills: { technical: 2, communication: 2, problemSolving: 3, leadership: 2 },
            reaction: { speaker: "Dr. Nandini (Wildlife Biologist)", avatar: AV.forestofficerNandini, text: "Exactly. Keep people safe, give the animal an exit and follow through on compensation. That keeps both villagers and elephants alive." } },
          { text: "Let the crowd drive the elephant away with firecrackers and noise", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Dr. Nandini (Wildlife Biologist)", avatar: AV.forestofficerNandini, text: "Arya, a panicked elephant surrounded by shouting people can charge. Give it space and a safe route, and keep people away." } }
        ],
        betterAdvice: "During a human-elephant encounter, move the crowd back, use the rapid response team to guide the animal to safety, and follow up with compensation."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "Forest Office - The Tip-Off",
        bgImage: "https://images.pexels.com/photos/29773044/pexels-photo-29773044.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "A villager quietly tells Arya that trucks are cutting and carrying valuable timber out of the forest at night. He is afraid to be named.",
        dialogues: [
          { speaker: "Sarpanch Mohan", avatar: AV.forestofficerMohan, text: "Madam, please don't say my name. These people are dangerous." },
          { speaker: "Ranger Gowda", avatar: AV.forestofficerGowda, text: "We could rush there with two guards and catch them tonight." },
          { speaker: "Arya (You)", avatar: AV.forestofficerYou, text: "If we go unprepared, they may escape, or the informant may be identified and hurt." }
        ],
        choices: [
          { text: "Rush to the spot tonight with two guards and tell everyone the informant's name", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Ranger Gowda", avatar: AV.forestofficerGowda, text: "Arya, exposing an informant puts a life at risk and an unplanned rush lets the criminals escape. Plan it, and protect your source." } },
          { text: "Verify the tip, plan the operation with enough staff and vehicles, coordinate with the police if needed and keep the informant's identity confidential", correct: true,
            skills: { technical: 2, communication: 2, problemSolving: 2, leadership: 3 },
            reaction: { speaker: "Ranger Gowda", avatar: AV.forestofficerGowda, text: "That's a professional operation. Verified, planned, backed up and the informant protected. That's how illegal loggers are caught." } }
        ],
        betterAdvice: "Verify a tip, plan an operation with enough backup and protect the informant's identity - never rush unprepared or expose your source."
      }

    ]
  },

  // ==================================================
  // GOVERNMENT - "Tax Trail" (3 episodes)
  // Role: Income Tax Officer
  // Written directly in English (same as Wings of Honour / Cleared for Takeoff).
  // ==================================================
  taxofficer: {
    title: "Tax Trail",
    genre: "Government",
    youDefaultName: "Meenal",
    role: "Income Tax Officer",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=MeenalTaxofficerM&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=MeenalTaxofficerF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Serve as an income tax officer - question a suspicious tax return the fair way, refuse a bribe to 'settle' a case, and decide how to treat an honest business owner who made a mistake.",
    narration: "Most people picture the tax department as a place people fear. Meenal sees it differently - taxes build roads, schools and hospitals. But she also knows her power is huge, and it must be used with discipline: fairly, by the rules, and never for personal gain.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "Tax Office - Mismatch in the Return",
        bgImage: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Meenal finds that a trader's declared income is very small, but his bank records show large deposits and lifestyle expenses far above his declared earnings.",
        dialogues: [
          { speaker: "Inspector Rohit", avatar: AV.taxofficerRohit, text: "Madam, the numbers don't match. He's clearly hiding income. Let's assess the maximum tax." },
          { speaker: "Commissioner Shukla", avatar: AV.taxofficerShukla, text: "A mismatch is a reason to ask questions, Meenal, not a reason to assume the answer." },
          { speaker: "Meenal (You)", avatar: AV.taxofficerYou, text: "It looks suspicious. But there might be an explanation I haven't seen yet, like loans, gifts or family money." }
        ],
        choices: [
          { text: "Assume tax evasion and immediately assess the maximum tax and penalty", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Commissioner Shukla", avatar: AV.taxofficerShukla, text: "Meenal, an order without a fair hearing is likely to be struck down on appeal. A mismatch calls for questions, not assumptions." } },
          { text: "Issue a proper notice asking for explanation and supporting documents, give a fair chance to reply, and decide based on what the evidence shows", correct: true,
            skills: { technical: 2, communication: 2, problemSolving: 3, leadership: 1 },
            reaction: { speaker: "Commissioner Shukla", avatar: AV.taxofficerShukla, text: "Exactly. Due process protects taxpayers and makes your order stand up on appeal. Questions first, conclusions after." } }
        ],
        betterAdvice: "When a return has a mismatch, issue a notice, give the taxpayer a fair chance to explain and decide on evidence - never assume guilt."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "Tax Office - The Envelope",
        bgImage: "https://images.pexels.com/photos/8152735/pexels-photo-8152735.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "A representative meets Meenal privately and hints that the taxpayer would be 'very grateful' if the case were closed quickly, and slides forward a gift box.",
        dialogues: [
          { speaker: "CA Bansal (Taxpayer's Representative)", avatar: AV.taxofficerBansal, text: "Madam, a small token of appreciation. It's a tradition. It will make everything smoother." },
          { speaker: "Inspector Rohit", avatar: AV.taxofficerRohit, text: "Madam, it's just a gift box. Nobody will know." },
          { speaker: "Commissioner Shukla", avatar: AV.taxofficerShukla, text: "Integrity is the only asset a tax officer really owns, Meenal." },
          { speaker: "Meenal (You)", avatar: AV.taxofficerYou, text: "This is exactly the kind of moment the job is really about." }
        ],
        choices: [
          { text: "Refuse the gift firmly, end the meeting and report the attempt to senior officials as required", correct: true,
            skills: { technical: 1, communication: 2, problemSolving: 1, leadership: 3 },
            reaction: { speaker: "Commissioner Shukla", avatar: AV.taxofficerShukla, text: "Right. A gift to a public servant in a pending case is a bribe attempt. Refusing and reporting protects you and the system." } },
          { text: "Accept the gift because refusing might cause awkwardness", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Commissioner Shukla", avatar: AV.taxofficerShukla, text: "Meenal, accepting a gift in a pending case is corruption, whatever it's called. Politeness never outweighs integrity." } }
        ],
        betterAdvice: "Refuse gifts from parties in a pending case and report bribery attempts - a public servant's integrity comes first."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "Tax Office - An Honest Mistake",
        bgImage: "https://images.pexels.com/photos/669622/pexels-photo-669622.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "A small shop owner accidentally claimed a deduction he wasn't eligible for. He has no records of hiding anything, and he comes to the office worried and cooperative.",
        dialogues: [
          { speaker: "CA Bansal (Taxpayer's Representative)", avatar: AV.taxofficerBansal, text: "He is an honest man, Madam. He just misunderstood the rule. He'll pay whatever is owed." },
          { speaker: "Inspector Rohit", avatar: AV.taxofficerRohit, text: "Rules are rules, Madam. Charge the highest penalty as a lesson to others." },
          { speaker: "Commissioner Shukla", avatar: AV.taxofficerShukla, text: "The law distinguishes between a mistake and deliberate evasion. So should you." },
          { speaker: "Meenal (You)", avatar: AV.taxofficerYou, text: "He isn't hiding anything - he's frightened and confused. I can be firm about the rule and fair about the person." }
        ],
        choices: [
          { text: "Impose the maximum penalty as an example to everyone else", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Commissioner Shukla", avatar: AV.taxofficerShukla, text: "Meenal, punishing an honest mistake like deliberate evasion is unjust and makes people fear the department rather than trust it." } },
          { text: "Allow him to correct the return, collect the tax due with interest, and apply penalties only as the law and facts justify, explaining the rule clearly", correct: true,
            skills: { technical: 2, communication: 2, problemSolving: 3, leadership: 1 },
            reaction: { speaker: "Commissioner Shukla", avatar: AV.taxofficerShukla, text: "Fair and firm. You enforced the rule while treating an honest mistake differently from deliberate evasion. That's how trust is built." } }
        ],
        betterAdvice: "Treat an honest mistake differently from deliberate evasion - allow correction, collect what's due, and apply penalties only as the law and facts justify."
      }

    ]
  },

  // ==================================================
  // GOVERNMENT - "Green Channel" (3 episodes)
  // Role: Customs Officer
  // Written directly in English (same as Wings of Honour / Cleared for Takeoff).
  // ==================================================
  customs: {
    title: "Green Channel",
    genre: "Government",
    youDefaultName: "Dev",
    role: "Customs Officer",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=DevCustomsM&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=DevCustomsF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/1815388/pexels-photo-1815388.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Work at the airport customs counter - spot suspicious passengers fairly, handle a gold seizure by the book, and deal humanely with an elderly traveller carrying medicines.",
    narration: "Every day, thousands of passengers walk through the airport's green channel saying they have nothing to declare. Most are telling the truth. Dev's job is to find the few who aren't - without treating everyone else like a criminal. It takes sharp eyes, good judgement and a lot of patience.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "Airport Customs - The Nervous Passenger",
        bgImage: "https://images.pexels.com/photos/1815388/pexels-photo-1815388.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Among a stream of arriving passengers, one man is unusually nervous, avoids eye contact and keeps holding his bag tightly. He came from a route known for smuggling.",
        dialogues: [
          { speaker: "Superintendent Kulkarni", avatar: AV.customsKulkarni, text: "Dev, there are a hundred passengers an hour. We can't search everyone, so how do we choose?" },
          { speaker: "Constable Bhoomi (K9 Handler)", avatar: AV.customsBhoomi, text: "Sir, my dog has also shown a little interest in that bag." },
          { speaker: "Dev (You)", avatar: AV.customsYou, text: "Nervousness alone isn't proof - many people are nervous at customs. But several signs together mean something." }
        ],
        choices: [
          { text: "Take him aside politely for a proper check based on risk indicators, explain what you are doing and conduct the search with a witness", correct: true,
            skills: { technical: 2, communication: 3, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "Superintendent Kulkarni", avatar: AV.customsKulkarni, text: "Exactly. Risk-based, respectful and witnessed. That protects the passenger's rights and makes any finding solid." } },
          { text: "Stop and search every second passenger randomly to be safe", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Superintendent Kulkarni", avatar: AV.customsKulkarni, text: "Dev, random harassment wastes time and makes travellers angry. Use risk indicators and treat people with respect." } }
        ],
        betterAdvice: "Select passengers for checks using risk indicators, not random harassment - and conduct searches politely, with a witness."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "Customs Cabin - The Undeclared Gold",
        bgImage: "https://images.pexels.com/photos/33797802/pexels-photo-33797802.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "During the search, a bag reveals gold bars hidden in a false compartment. The passenger offers Dev a large sum of money to 'forget what he saw'.",
        dialogues: [
          { speaker: "Passenger", avatar: AV.customsPassenger, text: "Officer, take this and let me go. No one will ever know." },
          { speaker: "Superintendent Kulkarni", avatar: AV.customsKulkarni, text: "Follow the procedure step by step, Dev. Every step will be checked later." },
          { speaker: "Dev (You)", avatar: AV.customsYou, text: "This is the moment the whole job comes down to. It's a crime, and now it's also a bribe." }
        ],
        choices: [
          { text: "Take the money and let him go quietly", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Superintendent Kulkarni", avatar: AV.customsKulkarni, text: "Dev, taking a bribe turns you into a criminal and destroys your career. Seizure procedure is there to keep the officer honest as well." } },
          { text: "Refuse the bribe, seize the gold under a proper record with witnesses, give the passenger a receipt and inform senior officers", correct: true,
            skills: { technical: 2, communication: 1, problemSolving: 2, leadership: 3 },
            reaction: { speaker: "Superintendent Kulkarni", avatar: AV.customsKulkarni, text: "Right. A clean seizure with witnesses and a receipt makes the case strong. The bribe attempt only makes it heavier." } }
        ],
        betterAdvice: "Refuse any bribe, seize contraband under a proper record with witnesses and a receipt, and inform senior officers immediately."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "Customs Hall - The Elderly Traveller",
        bgImage: "https://images.pexels.com/photos/1815388/pexels-photo-1815388.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "An elderly passenger arrives with a large box of medicines that exceeds the usual quantity. He says they are for his own treatment and that he doesn't speak the local language well.",
        dialogues: [
          { speaker: "Mr. D'Souza (Elderly Passenger)", avatar: AV.customsElder, text: "Please sir, these are my heart tablets. My doctor gave them to me. I'm not a smuggler." },
          { speaker: "Superintendent Kulkarni", avatar: AV.customsKulkarni, text: "Dev, some medicines have limits, but people's health matters too." },
          { speaker: "Dev (You)", avatar: AV.customsYou, text: "He looks worried. I should be strict about the rules and kind about the person." }
        ],
        choices: [
          { text: "Politely check his doctor's prescription and the rules for personal medicines, and allow the quantity that the rules permit with proper documentation", correct: true,
            skills: { technical: 1, communication: 3, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "Superintendent Kulkarni", avatar: AV.customsKulkarni, text: "Firm and humane. You verified without harassing him, and applied the rule as written. That's good customs work." } },
          { text: "Confiscate all his medicines immediately to stay on the safe side", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Superintendent Kulkarni", avatar: AV.customsKulkarni, text: "Dev, taking away a patient's heart medicines without checking could seriously harm him. Verify first - rules exist for smugglers, not patients." } }
        ],
        betterAdvice: "Verify prescriptions and personal-medicine rules before deciding - be strict about the law and humane toward genuine patients."
      }

    ]
  },

  // ==================================================
  // BUSINESS - "Market Open" (3 episodes)
  // Role: Financial Analyst
  // Written directly in English (same as Wings of Honour / Cleared for Takeoff).
  // ==================================================
  finance: {
    title: "Market Open",
    genre: "Business",
    youDefaultName: "Rahul",
    role: "Financial Analyst",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=RahulFinanceM&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=RahulFinanceF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/669621/pexels-photo-669621.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Work at an investment firm as a financial analyst - tell your boss what the numbers really say, refuse an insider tip, and calm a client during a market fall.",
    narration: "Every morning, the market opens at 9:15 and Rahul's screen fills with red and green numbers. As a junior analyst at an investment firm, his job is to read those numbers honestly and advise people who are trusting the firm with their savings. In finance, one thing matters more than being smart - being trustworthy.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "Research Desk - The Favourite Stock",
        bgImage: "https://images.pexels.com/photos/669621/pexels-photo-669621.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Ms. Kapoor is excited about a popular company's stock and wants Rahul's report to recommend 'Buy'. But Rahul's analysis shows it is expensive compared to its earnings and has high debt.",
        dialogues: [
          { speaker: "Ms. Kapoor (Portfolio Head)", avatar: AV.financeKapoor, text: "Rahul, this stock has been a winner all year. Give me a strong Buy report for the client meeting." },
          { speaker: "Sameer (Senior Trader)", avatar: AV.financeSameer, text: "Everyone in the market likes it. It'll be an easy call." },
          { speaker: "Rahul (You)", avatar: AV.financeYou, text: "My numbers say it is overvalued, and the debt is a risk. But my boss is expecting a different answer." }
        ],
        choices: [
          { text: "Present the analysis honestly, showing the valuation and debt risks clearly, and let the data support a balanced recommendation", correct: true,
            skills: { technical: 3, communication: 2, problemSolving: 2, leadership: 0 },
            reaction: { speaker: "Ms. Kapoor (Portfolio Head)", avatar: AV.financeKapoor, text: "Good. Honest analysis, even when unpopular, is what protects clients. I may disagree, but I'd rather hear the truth than a comfortable story." } },
          { text: "Change the assumptions in the model so the report supports a strong Buy", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Ms. Kapoor (Portfolio Head)", avatar: AV.financeKapoor, text: "Rahul, adjusting numbers to please someone is the fastest way to destroy trust and hurt clients. Analysts are paid for independence." } }
        ],
        betterAdvice: "An analyst's report must reflect the data honestly, even when it disagrees with the boss or the crowd - never adjust assumptions to fit a preferred answer."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "Trading Floor - The Hot Tip",
        bgImage: "https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "A college friend working at a company calls Rahul and privately tells him that his company will announce a big deal tomorrow that isn't public yet. 'Buy now, before the news comes out.'",
        dialogues: [
          { speaker: "Sameer (Senior Trader)", avatar: AV.financeSameer, text: "Rahul, you look like you've heard something interesting." },
          { speaker: "Ms. Kapoor (Portfolio Head)", avatar: AV.financeKapoor, text: "You are our analyst. What you do with private information matters more than what you know." },
          { speaker: "Rahul (You)", avatar: AV.financeYou, text: "It would be easy money. But using non-public information to trade is illegal - it's called insider trading." }
        ],
        choices: [
          { text: "Quietly buy the shares in a family member's account so nobody notices", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Ms. Kapoor (Portfolio Head)", avatar: AV.financeKapoor, text: "Rahul, trading through someone else is still insider trading, and regulators trace these trades all the time. Walk away and report it." } },
          { text: "Refuse to trade on the tip, tell the friend not to share it, and inform the firm's compliance officer", correct: true,
            skills: { technical: 1, communication: 2, problemSolving: 2, leadership: 2 },
            reaction: { speaker: "Ms. Kapoor (Portfolio Head)", avatar: AV.financeKapoor, text: "Correct. Insider trading is a serious offence with jail and heavy fines. Telling compliance protects you and the firm." } }
        ],
        betterAdvice: "Never trade on non-public information - refuse the tip and inform the firm's compliance officer."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "Client Meeting - The Market Falls",
        bgImage: "https://images.pexels.com/photos/6340621/pexels-photo-6340621.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "The market drops five percent in a day and Mr. Anand, a client, rings in a panic asking to sell everything immediately.",
        dialogues: [
          { speaker: "Mr. Anand (Client)", avatar: AV.financeAnand, text: "Rahul, my savings are falling! Sell everything right now before I lose more!" },
          { speaker: "Ms. Kapoor (Portfolio Head)", avatar: AV.financeKapoor, text: "Panic selling locks in losses. But don't dismiss his fear either." },
          { speaker: "Rahul (You)", avatar: AV.financeYou, text: "He's scared, and he trusted us with his money. I need to be honest and calm." }
        ],
        choices: [
          { text: "Listen to his worry, explain calmly how markets move, review his goals and risk level with him and then help him decide", correct: true,
            skills: { technical: 2, communication: 3, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "Ms. Kapoor (Portfolio Head)", avatar: AV.financeKapoor, text: "That's how advisors keep clients. You acknowledged the fear, gave perspective and returned to his actual goals." } },
          { text: "Tell him the market will definitely recover by next week", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Ms. Kapoor (Portfolio Head)", avatar: AV.financeKapoor, text: "Rahul, no one can guarantee a recovery. A false promise creates false hope, and if it fails, it destroys the client's trust." } }
        ],
        betterAdvice: "During a market fall, listen to the client, explain calmly and revisit their goals and risk level - never promise a recovery."
      }

    ]
  },

  // ==================================================
  // BUSINESS - "Balance Sheet" (3 episodes)
  // Role: Chartered Accountant
  // Written directly in English (same as Wings of Honour / Cleared for Takeoff).
  // ==================================================
  ca: {
    title: "Balance Sheet",
    genre: "Business",
    youDefaultName: "Ritika",
    role: "Chartered Accountant",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=RitikaCaM&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=RitikaCaF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Work as a chartered accountant - refuse to bend a client's books to get a loan, deal with a cash mismatch in an audit, and meet a tax deadline without fake invoices.",
    narration: "A chartered accountant is called the guardian of a company's honesty. Numbers can be arranged in many ways, but there is only one correct way. Ritika has just qualified, and today a client walks in with a request that will test whether she is a professional or just a person who prepares whatever she is told.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "CA Firm - The Loan Request",
        bgImage: "https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "A business owner, Mr. Sethi, wants to apply for a big bank loan. His profits are low this year, and he asks Ritika to show a higher profit by hiding some expenses in the accounts.",
        dialogues: [
          { speaker: "Mr. Sethi (Client)", avatar: AV.caClient, text: "Ritika, just move a few expenses to next year. The bank will see better profit, and I'll get the loan." },
          { speaker: "Kavya (Trainee)", avatar: AV.caKavya, text: "Ma'am, isn't that kind of manipulation?" },
          { speaker: "CA Rajiv Sir (Partner)", avatar: AV.caCaRajivSir, text: "Remember, you sign your name on those statements, Ritika. Not the client." },
          { speaker: "Ritika (You)", avatar: AV.caYou, text: "If I do this, I'd be helping mislead the bank and putting my licence at risk." }
        ],
        choices: [
          { text: "Refuse to alter the accounts, explain the risks to him, and suggest legitimate ways to improve his loan case, like a proper business plan and collateral", correct: true,
            skills: { technical: 2, communication: 3, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "CA Rajiv Sir (Partner)", avatar: AV.caCaRajivSir, text: "That's professional integrity. You said no, but you also offered a real solution. That's how clients learn to trust you." } },
          { text: "Adjust the figures as he asks because he is an important client", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "CA Rajiv Sir (Partner)", avatar: AV.caCaRajivSir, text: "Ritika, manipulating accounts to get a loan is fraud, and your name is on the report. No client is worth your licence." } }
        ],
        betterAdvice: "A CA must refuse to manipulate accounts, even for important clients - explain the risks and suggest legitimate alternatives."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "Client Office - The Cash Mismatch",
        bgImage: "https://images.pexels.com/photos/669609/pexels-photo-669609.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "During an audit, Kavya finds that the cash in hand is much lower than the cash book shows. The company's manager says it is a small counting error.",
        dialogues: [
          { speaker: "Kavya (Trainee)", avatar: AV.caKavya, text: "Ma'am, the difference is eighty thousand rupees. It's not a small mistake." },
          { speaker: "Mr. Sethi (Client)", avatar: AV.caClient, text: "It's just a timing error. Adjust it and move on." },
          { speaker: "CA Rajiv Sir (Partner)", avatar: AV.caCaRajivSir, text: "In audits, the small things you ignore become the headlines later." },
          { speaker: "Ritika (You)", avatar: AV.caYou, text: "I can't just adjust it away. I need to find out what actually happened." }
        ],
        choices: [
          { text: "Adjust the entries quietly to make the cash balance match", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "CA Rajiv Sir (Partner)", avatar: AV.caCaRajivSir, text: "Ritika, covering a shortfall with an entry hides a possible fraud and makes you part of it. An auditor's job is to find and report, not conceal." } },
          { text: "Investigate the difference, gather supporting records, document the findings and report the matter to the management and, if needed, in the audit report", correct: true,
            skills: { technical: 3, communication: 1, problemSolving: 3, leadership: 1 },
            reaction: { speaker: "CA Rajiv Sir (Partner)", avatar: AV.caCaRajivSir, text: "Correct. An unexplained cash shortfall must be examined and reported honestly. That's the whole purpose of an audit." } }
        ],
        betterAdvice: "Investigate and document unexplained differences during an audit and report them honestly - never adjust entries to hide a mismatch."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "CA Firm - Deadline Night",
        bgImage: "https://images.pexels.com/photos/669622/pexels-photo-669622.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "The tax filing deadline is midnight. A client hasn't given several bills, and the return can't be completed properly. He suggests creating a few invoices to make the numbers work.",
        dialogues: [
          { speaker: "Mr. Sethi (Client)", avatar: AV.caClient, text: "Just make a few bills. Nobody checks them. We can't miss the deadline." },
          { speaker: "Kavya (Trainee)", avatar: AV.caKavya, text: "We only have proof for about half the expenses, ma'am." },
          { speaker: "CA Rajiv Sir (Partner)", avatar: AV.caCaRajivSir, text: "A late filing has a penalty. A false filing has consequences you can't take back." },
          { speaker: "Ritika (You)", avatar: AV.caYou, text: "There's real pressure, but fake bills are a line I will never cross." }
        ],
        choices: [
          { text: "File on time with the expenses that can be properly supported, and inform the client that the rest can be added once the documents arrive, using a revised return if allowed", correct: true,
            skills: { technical: 3, communication: 2, problemSolving: 2, leadership: 1 },
            reaction: { speaker: "CA Rajiv Sir (Partner)", avatar: AV.caCaRajivSir, text: "Exactly. Filing accurately and revising later is honest and legal. A fake invoice can end a career and lead to prosecution." } },
          { text: "Create invoices so all expenses look documented and meet the deadline", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "CA Rajiv Sir (Partner)", avatar: AV.caCaRajivSir, text: "Ritika, fabricating invoices is forgery, and it can lead to prosecution. A late fee is small compared to that." } }
        ],
        betterAdvice: "Never create fake invoices to meet a deadline - file with supportable figures and revise later if allowed."
      }

    ]
  },

  // ==================================================
  // BUSINESS - "Brand New" (3 episodes)
  // Role: Marketing Manager
  // Written directly in English (same as Wings of Honour / Cleared for Takeoff).
  // ==================================================
  marketing: {
    title: "Brand New",
    genre: "Business",
    youDefaultName: "Ishika",
    role: "Marketing Manager",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=IshikaMarketingM&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=IshikaMarketingF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/6914421/pexels-photo-6914421.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Launch a new product as a marketing manager - pick an audience using research, respond honestly to a social media backlash, and reallocate a shrinking budget wisely.",
    narration: "Ishika's company is launching a new brand of health drinks in three months. A great product is not enough - people have to know about it, care about it and trust it. Marketing looks glamorous from outside, but Ishika knows it runs on research, honesty and a lot of hard decisions.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "Marketing Room - Choosing the Audience",
        bgImage: "https://images.pexels.com/photos/6914421/pexels-photo-6914421.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "The team must decide who the launch campaign should target. The founder feels strongly that it should be aimed at young athletes, but the initial survey data shows something different.",
        dialogues: [
          { speaker: "Marketing Head Ms. Sen", avatar: AV.marketingSen, text: "The founder is sure it's for young gym-goers. But look at our survey numbers, Ishika." },
          { speaker: "Rohit (Designer)", avatar: AV.marketingRohit, text: "The survey says working professionals aged 28 to 40 are far more interested." },
          { speaker: "Mr. Tandon (Agency)", avatar: AV.marketingTandon, text: "We can build a campaign for whichever audience you choose. But which one will actually buy?" },
          { speaker: "Ishika (You)", avatar: AV.marketingYou, text: "Gut feelings are useful, but data tells us who will actually pay for the product." }
        ],
        choices: [
          { text: "Use the survey and market research to choose the audience, and test a small campaign with both groups before spending the full budget", correct: true,
            skills: { technical: 2, communication: 2, problemSolving: 3, leadership: 1 },
            reaction: { speaker: "Marketing Head Ms. Sen", avatar: AV.marketingSen, text: "Exactly. Research first, small test second, big spend third. That's how you protect the budget and find what actually works." } },
          { text: "Follow the founder's instinct without checking the data", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Marketing Head Ms. Sen", avatar: AV.marketingSen, text: "Ishika, a whole campaign built on a guess is an expensive gamble. Good marketers respect instinct, but check it against data." } }
        ],
        betterAdvice: "Choose the target audience using research and test on a small scale before committing a large budget."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "Social Media Desk - The Backlash",
        bgImage: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "A campaign post accidentally makes fun of a group of people, and the internet reacts angrily within hours. Comments are pouring in and screenshots are being shared everywhere.",
        dialogues: [
          { speaker: "Marketing Head Ms. Sen", avatar: AV.marketingSen, text: "The post is trending for all the wrong reasons. We need a plan right now." },
          { speaker: "Rohit (Designer)", avatar: AV.marketingRohit, text: "We can delete it and pretend it never happened." },
          { speaker: "Mr. Tandon (Agency)", avatar: AV.marketingTandon, text: "People have already taken screenshots. Deleting won't erase it." },
          { speaker: "Ishika (You)", avatar: AV.marketingYou, text: "Hiding won't work. People want to see that we understand what went wrong." }
        ],
        choices: [
          { text: "Delete the post quietly and argue with critics that they misunderstood the joke", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Marketing Head Ms. Sen", avatar: AV.marketingSen, text: "Ishika, arguing with an offended audience only makes the story bigger. Own the mistake, apologize and fix the process." } },
          { text: "Pause the campaign, remove the post, publish a sincere apology explaining what went wrong and what will change, and review the approval process", correct: true,
            skills: { technical: 1, communication: 3, problemSolving: 2, leadership: 2 },
            reaction: { speaker: "Marketing Head Ms. Sen", avatar: AV.marketingSen, text: "That's how brands recover. A sincere apology and real changes rebuild trust faster than silence or defensiveness." } }
        ],
        betterAdvice: "After an insensitive post, pause, apologize sincerely, explain what will change and fix the approval process - don't delete and argue."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "Boardroom - The Budget Cut",
        bgImage: "https://images.pexels.com/photos/7792770/pexels-photo-7792770.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Halfway through the campaign, the company cuts the marketing budget by twenty percent. Ishika has performance data showing that some channels bring many more buyers than others.",
        dialogues: [
          { speaker: "Marketing Head Ms. Sen", avatar: AV.marketingSen, text: "We have to cut twenty percent, Ishika. Where should it come from?" },
          { speaker: "Mr. Tandon (Agency)", avatar: AV.marketingTandon, text: "The simplest way is to cut every channel by twenty percent." },
          { speaker: "Rohit (Designer)", avatar: AV.marketingRohit, text: "But the video ads bring three times more buyers than the print ads." },
          { speaker: "Ishika (You)", avatar: AV.marketingYou, text: "An equal cut looks fair, but it treats strong and weak channels the same." }
        ],
        choices: [
          { text: "Analyze the return on each channel, cut the weakest ones and protect the ones that bring the most buyers", correct: true,
            skills: { technical: 3, communication: 1, problemSolving: 3, leadership: 1 },
            reaction: { speaker: "Marketing Head Ms. Sen", avatar: AV.marketingSen, text: "Good thinking. Cutting by results rather than evenly protects your growth. That's what return-on-investment analysis is for." } },
          { text: "Cut every channel by the same twenty percent so it feels fair", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Marketing Head Ms. Sen", avatar: AV.marketingSen, text: "Ishika, an equal cut weakens your best channels as much as your worst. Cut where the return is lowest, not where it looks fair." } }
        ],
        betterAdvice: "When cutting a marketing budget, analyze each channel's return and reduce the weakest ones - an equal cut also hurts the best performers."
      }

    ]
  },

  // ==================================================
  // BUSINESS - "People First" (3 episodes)
  // Role: HR Manager
  // Written directly in English (same as Wings of Honour / Cleared for Takeoff).
  // ==================================================
  hr: {
    title: "People First",
    genre: "Business",
    youDefaultName: "Nandini",
    role: "HR Manager",
    youAvatarMale: "https://api.dicebear.com/9.x/adventurer/svg?seed=NandiniHrM&backgroundColor=d6e8ff",
    youAvatarFemale: "https://api.dicebear.com/9.x/adventurer/svg?seed=NandiniHrF&backgroundColor=ffd6e8",
    posterImage: "https://images.pexels.com/photos/8428076/pexels-photo-8428076.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Run HR for a growing company - hire fairly when the boss pushes a favourite, handle a harassment complaint correctly, and announce layoffs with respect.",
    narration: "Companies are built from people, and Nandini's job is to look after them - to hire the right ones, protect the ones already there and make hard decisions in a humane way. It's a job where people bring you their biggest worries, and where a careless word can change someone's life.",

    episodes: [
      // ---------- EPISODE 1 ----------
      {
        location: "HR Office - The Interview Panel",
        bgImage: "https://images.pexels.com/photos/8428076/pexels-photo-8428076.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Two candidates are left for an open role. One scored highest in the skills test and interview. The other is a relative of a senior manager who has been quietly pushing for that person.",
        dialogues: [
          { speaker: "Team Lead Sushma", avatar: AV.hrSushma, text: "Nandini, the first candidate is clearly stronger on every measure." },
          { speaker: "Mr. Kapoor (Director)", avatar: AV.hrCeo, text: "The other one is a good boy from a good family. Let's give him the chance." },
          { speaker: "Nandini (You)", avatar: AV.hrYou, text: "If I hire because of a relationship, I'm being unfair to the better candidate, and the team pays for it later." }
        ],
        choices: [
          { text: "Use the same structured criteria for both, document the scores and select the strongest candidate on merit, explaining the process openly", correct: true,
            skills: { technical: 1, communication: 3, problemSolving: 2, leadership: 2 },
            reaction: { speaker: "Team Lead Sushma", avatar: AV.hrSushma, text: "That's fair hiring. Clear criteria and documented scores protect you, the company and every candidate." } },
          { text: "Hire the manager's relative to avoid trouble with a senior person", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Team Lead Sushma", avatar: AV.hrSushma, text: "Nandini, favouritism kills morale and the best people leave. Hiring on merit is the foundation of a fair workplace." } }
        ],
        betterAdvice: "Hire using structured criteria and documented scores so decisions are based on merit, not relationships."
      },

      // ---------- EPISODE 2 ----------
      {
        location: "HR Office - A Difficult Complaint",
        bgImage: "https://images.pexels.com/photos/7792770/pexels-photo-7792770.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "Arun quietly tells Nandini that his manager repeatedly makes humiliating comments and threatens his job if he speaks up. He is frightened of what will happen if it becomes known.",
        dialogues: [
          { speaker: "Arun (Employee)", avatar: AV.hrArun, text: "Please don't tell anyone. I only want it to stop." },
          { speaker: "Team Lead Sushma", avatar: AV.hrSushma, text: "Nandini, the manager is one of our top performers. Maybe you can just ask Arun to adjust." },
          { speaker: "Mr. Kapoor (Director)", avatar: AV.hrCeo, text: "Handle it carefully. The company has clear rules for complaints like this." },
          { speaker: "Nandini (You)", avatar: AV.hrYou, text: "He's scared. I owe him confidentiality, a fair process and protection from any retaliation." }
        ],
        choices: [
          { text: "Advise Arun to adjust because the manager is a top performer", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Mr. Kapoor (Director)", avatar: AV.hrCeo, text: "Nandini, asking a victim to adjust protects the wrong person and exposes the company to serious legal risk. Every complaint deserves a fair process." } },
          { text: "Listen respectfully, follow the formal complaint process, start a confidential inquiry and protect Arun from any retaliation", correct: true,
            skills: { technical: 1, communication: 3, problemSolving: 2, leadership: 2 },
            reaction: { speaker: "Mr. Kapoor (Director)", avatar: AV.hrCeo, text: "Exactly. Complaints must be taken seriously, handled confidentially and fairly. Protecting the complainant is not optional." } }
        ],
        betterAdvice: "Treat harassment complaints seriously - follow the formal process, keep the inquiry confidential and protect the complainant from retaliation."
      },

      // ---------- EPISODE 3 ----------
      {
        location: "Boardroom - Difficult News",
        bgImage: "https://images.pexels.com/photos/6340621/pexels-photo-6340621.jpeg?auto=compress&cs=tinysrgb&w=1600",
        scene: "The company must lay off twenty employees because of financial trouble. Nandini has to plan how the news is delivered to the people affected.",
        dialogues: [
          { speaker: "Mr. Kapoor (Director)", avatar: AV.hrCeo, text: "We have no choice, Nandini. How should we tell them?" },
          { speaker: "Team Lead Sushma", avatar: AV.hrSushma, text: "Some people suggest sending a group email. It's quick and impersonal." },
          { speaker: "Arun (Employee)", avatar: AV.hrArun, text: "If it happens to me, I hope I'm told with respect, not by an email at midnight." },
          { speaker: "Nandini (You)", avatar: AV.hrYou, text: "We can't change the decision. But we can control how the people are treated." }
        ],
        choices: [
          { text: "Tell each person privately and in person, explain the reasons, give proper notice and severance and offer help with references and job search", correct: true,
            skills: { technical: 1, communication: 3, problemSolving: 2, leadership: 2 },
            reaction: { speaker: "Mr. Kapoor (Director)", avatar: AV.hrCeo, text: "That's dignified. The decision may be painful, but respect, clarity and support make it far more humane." } },
          { text: "Send a group email at night to get it over with quickly", correct: false,
            skills: { technical: 0, communication: 0, problemSolving: 0, leadership: 0 },
            reaction: { speaker: "Mr. Kapoor (Director)", avatar: AV.hrCeo, text: "Nandini, an impersonal late-night email shows contempt for people who gave years to the company. How you do it matters as much as what you do." } }
        ],
        betterAdvice: "When laying off employees, tell people privately with respect, give proper notice and support - never send an impersonal announcement."
      }

    ]
  }
};
