// ===============================================
// translations.js
//
// HOW THIS WORKS (simple to explain):
// storyData.js has the ORIGINAL story text written in Hinglish.
// Instead of touching that file, this file holds Hindi and English
// VERSIONS of the same lines, kept in the exact same order as the
// original (same episode number, same dialogue number, same choice
// number) - so we can look up "episode 2, dialogue 3" here and get
// its Hindi/English translation.
//
// If a story isn't listed here yet, the app simply falls back to
// showing the original Hinglish text - nothing breaks.
//
// Structure per story:
//   episodes: [
//     {
//       scene: { hindi, english },
//       dialogues: [ { hindi, english }, ... ]   <- same order as storyData.js
//       choices: [ { text:{hindi,english}, reaction:{hindi,english} }, ... ]
//       betterAdvice: { hindi, english }
//     },
//     ...
//   ]
// ===============================================

const storyTranslations = {

  // ==================================================
  // FULLY TRANSLATED: "Pulse Point" (doctor)
  // ==================================================
  doctor: {
    episodes: [
      // ---------- EPISODE 1 ----------
      {
        scene: {
          hindi: "इमरजेंसी वार्ड, रात के 9 बजे। एक मरीज़ को सीने में दर्द के साथ लाया जाता है।",
          english: "Emergency Ward, 9 PM. A patient is rushed in with chest pain."
        },
        dialogues: [
          { hindi: "डॉक्टर अदिति! एक मरीज़ आया है, सीने में दर्द बता रहा है, बहुत घबराया हुआ है!",
            english: "Dr. Aditi! A patient has come in, complaining of chest pain, and he's very anxious!" },
          { hindi: "वाइटल्स चेक किए? बीपी, पल्स, ऑक्सीजन लेवल?",
            english: "Have you checked the vitals? BP, pulse, oxygen level?" },
          { hindi: "नहीं मैम, अभी सीधा आपके पास ले आई।",
            english: "No ma'am, I brought him straight to you." },
          { hindi: "रिया, तुम बताओ - इस केस में सबसे पहले क्या करोगी?",
            english: "Riya, you tell me - what would you do first in this case?" },
          { hindi: "मैं सोच रही हूं... इमरजेंसी में सबसे पहले क्या प्राथमिकता होनी चाहिए?",
            english: "I'm thinking... what should be the first priority in an emergency?" }
        ],
        choices: [
          { text: { hindi: "तुरंत मरीज़ का ईसीजी और वाइटल्स चेक करो", english: "Immediately check the patient's ECG and vitals" },
            reaction: { hindi: "शाबाश रिया! वाइटल्स और ईसीजी ही सबसे पहला कदम होता है, इसी से पता चलता है केस कितना गंभीर है।",
                        english: "Well done Riya! Vitals and ECG are always the first step - they tell you how serious the case is." } },
          { text: { hindi: "पहले मरीज़ के परिवार से पूरी हिस्ट्री पूछो", english: "First ask the patient's family for their full history" },
            reaction: { hindi: "रिया, हिस्ट्री ज़रूरी है लेकिन बाद में भी ले सकते हैं। इमरजेंसी में पहले मरीज़ को स्थिर करना पड़ता है।",
                        english: "Riya, history is important but can wait. In an emergency, the patient must be stabilized first." } }
        ],
        betterAdvice: {
          hindi: "इमरजेंसी केस में पहले वाइटल्स/ईसीजी चेक करो, हिस्ट्री बाद में लो।",
          english: "In an emergency case, check vitals/ECG first - take the history afterward."
        }
      },

      // ---------- EPISODE 2 ----------
      {
        scene: {
          hindi: "रिपोर्ट्स आ चुकी हैं, दोनों डॉक्टर कॉरिडोर में चल रहे हैं, लेकिन लक्षण थोड़े उलझाने वाले लग रहे हैं।",
          english: "The reports are in. Both doctors walk down the corridor, but the symptoms seem a bit confusing."
        },
        dialogues: [
          { hindi: "रिया, रिपोर्ट्स देखीं? कुछ समझ आया?", english: "Riya, did you see the reports? Does anything make sense?" },
          { hindi: "मैम, ईसीजी नॉर्मल है लेकिन ब्लड रिपोर्ट में थोड़ा उल्टा पैटर्न है। मैं कन्फ्यूज़ हो गई हूं।",
            english: "Ma'am, the ECG is normal but the blood report shows an odd pattern. I'm confused." },
          { hindi: "ऐसा पहले भी हुआ था एक केस में, याद है मैम?", english: "This happened once before in another case, remember ma'am?" },
          { hindi: "हां, पर हर मरीज़ अलग होता है कविता। रिया, अब तुम तय करो - अकेले आगे बढ़ोगी या किसी से सलाह लोगी?",
            english: "Yes, but every patient is different, Kavita. Riya, now you decide - proceed alone, or ask for advice?" }
        ],
        choices: [
          { text: { hindi: "सीनियर डॉक्टर से दोबारा सलाह लो", english: "Consult the senior doctor again" },
            reaction: { hindi: "यही सही सोच है। उलझे हुए केस में दूसरी राय लेना कभी गलत नहीं होता, इससे मरीज़ सुरक्षित रहता है।",
                        english: "That's the right instinct. Getting a second opinion on a confusing case is never wrong - it keeps the patient safe." } },
          { text: { hindi: "अपने अनुभव पर भरोसा करके खुद फैसला ले लो", english: "Trust your own experience and decide on your own" },
            reaction: { hindi: "आत्मविश्वास अच्छी बात है रिया, पर उलझे लक्षणों में अकेले रिस्क लेना सही नहीं। हमेशा दूसरी राय ज़रूर लो।",
                        english: "Confidence is good, Riya, but taking a solo risk on confusing symptoms isn't wise. Always get a second opinion." } }
        ],
        betterAdvice: {
          hindi: "जब रिपोर्ट्स उलझाने वाली हों, सीनियर डॉक्टर से सेकंड ओपिनियन लेना चाहिए।",
          english: "When reports are confusing, you should get a second opinion from a senior doctor."
        }
      },

      // ---------- EPISODE 3 ----------
      {
        scene: {
          hindi: "मरीज़ के परिवार का सदस्य वेटिंग रूम में बहुत घबराया हुआ है और बार-बार अपडेट मांग रहा है।",
          english: "The patient's family member is very anxious in the waiting room, repeatedly asking for updates."
        },
        dialogues: [
          { hindi: "रिया, मरीज़ के भाई बाहर बहुत परेशान हैं, तीसरी बार पूछने आए हैं।",
            english: "Riya, the patient's brother is very worried outside, this is the third time he's come to ask." },
          { hindi: "उन्हें क्या बताऊं? रिपोर्ट्स पूरी क्लियर भी नहीं हैं अभी।",
            english: "What do I tell him? The reports aren't fully clear yet either." },
          { hindi: "यही असली टेस्ट है रिया - परिवार को सच भी बताना है और उन्हें टूटने भी नहीं देना।",
            english: "This is the real test, Riya - you have to tell the family the truth without letting them fall apart." }
        ],
        choices: [
          { text: { hindi: "शांत आवाज़ में सही जानकारी दो, जितनी पक्की हो उतनी ही बताओ", english: "Calmly give them accurate information - only what you're sure of" },
            reaction: { hindi: "परफेक्ट रिया! शांत और ईमानदार बातचीत ही परिवार का भरोसा बनाती है।",
                        english: "Perfect, Riya! Calm, honest communication is what builds a family's trust." } },
          { text: { hindi: "उनसे कह दो 'सब ठीक हो जाएगा', अभी बात करने का समय नहीं", english: "Just tell them 'everything will be fine' - there's no time to talk right now" },
            reaction: { hindi: "रिया, झूठी तसल्ली देना सही नहीं है। बाद में अगर कुछ गलत हुआ तो उनका भरोसा हमेशा के लिए टूट सकता है।",
                        english: "Riya, giving false comfort isn't right. If something goes wrong later, their trust could break forever." } }
        ],
        betterAdvice: {
          hindi: "परिवार को हमेशा सच और स्पष्ट जानकारी शांति से देनी चाहिए।",
          english: "You should always give the family true, clear information, calmly."
        }
      },

      // ---------- EPISODE 4 ----------
      {
        scene: {
          hindi: "मरीज़ की हालत अचानक गंभीर हो गई है, तुरंत ऑपरेशन का फैसला लेना है।",
          english: "The patient's condition has suddenly turned critical - an immediate decision about surgery is needed."
        },
        dialogues: [
          { hindi: "रिया, बीपी गिर रहा है! समय बहुत कम है।", english: "Riya, the BP is dropping! There's very little time." },
          { hindi: "ओटी तैयार करवाऊं मैम?", english: "Should I get the OT ready, ma'am?" },
          { hindi: "रिया, फैसला जल्दी लेना होगा - बताओ, क्या करें?", english: "Riya, we need to decide fast - tell me, what do we do?" }
        ],
        choices: [
          { text: { hindi: "हां, तुरंत टीम को अलर्ट करो और ओटी तैयार करवाओ", english: "Yes, alert the team immediately and get the OT ready" },
            reaction: { hindi: "सही फैसला रिया! ऐसी स्थिति में स्पीड ही जान बचा सकती है।",
                        english: "The right call, Riya! In a situation like this, speed is what saves a life." } },
          { text: { hindi: "थोड़ा और इंतज़ार करो, शायद दवा से ठीक हो जाए", english: "Wait a little longer, maybe medicine will help" },
            reaction: { hindi: "रिया, गंभीर केस में ज़्यादा इंतज़ार करना जोखिम भरा हो सकता है। ऐसे समय तुरंत एक्शन लेना पड़ता है।",
                        english: "Riya, waiting too long in a critical case can be risky. Situations like this need immediate action." } }
        ],
        betterAdvice: {
          hindi: "गंभीर इमरजेंसी में जल्दी फैसला लेना ही सही होता है, देरी नहीं।",
          english: "In a critical emergency, deciding quickly is the right move - not delaying."
        }
      },

      // ---------- EPISODE 5 ----------
      {
        scene: {
          hindi: "ऑपरेशन सफल रहा। रात बहुत हो चुकी है और रिया पूरे दिन से लगातार ड्यूटी पर है।",
          english: "The operation was successful. It's very late, and Riya has been on continuous duty all day."
        },
        dialogues: [
          { hindi: "बहुत बढ़िया काम किया आज रिया। अब तुम बहुत थक चुकी हो।",
            english: "You did great work today, Riya. You must be very tired now." },
          { hindi: "हां मैम, थोड़ी थकान महसूस हो रही है, लेकिन एक और मरीज़ भी वेट कर रहा है।",
            english: "Yes ma'am, I am feeling a bit tired, but another patient is also waiting." },
          { hindi: "रिया, अपना भी ख्याल रखना ज़रूरी है।", english: "Riya, it's important to take care of yourself too." }
        ],
        choices: [
          { text: { hindi: "थोड़ी देर आराम करो और अगले मरीज़ के लिए फ्रेश हो जाओ", english: "Rest for a bit and get fresh for the next patient" },
            reaction: { hindi: "बिल्कुल सही रिया! आराम करना भी एक डॉक्टर की ज़िम्मेदारी है, ताकि अगला मरीज़ भी सही तरीके से देखा जाए।",
                        english: "Absolutely right, Riya! Resting is also a doctor's responsibility, so the next patient gets your best too." } },
          { text: { hindi: "बिना आराम किए सीधे अगले मरीज़ को देखने चली जाओ", english: "Go straight to the next patient without any rest" },
            reaction: { hindi: "रिया, थकान में काम करना गलती का खतरा बढ़ा देता है।", english: "Riya, working while exhausted increases the risk of mistakes." } }
        ],
        betterAdvice: {
          hindi: "थकान में लगातार काम करते रहना गलती का खतरा बढ़ाता है, थोड़ा आराम ज़रूरी है।",
          english: "Continuing to work while exhausted increases the risk of mistakes - some rest is necessary."
        }
      }
    ]
  }

};
