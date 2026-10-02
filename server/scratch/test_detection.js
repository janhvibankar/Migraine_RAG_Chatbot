function detectLanguage(text) {
  if (!text || typeof text !== "string") return "en";
  const cleaned = text.trim();
  if (cleaned.length === 0) return "en";

  // Check for Devanagari characters (U+0900 to U+097F)
  const devanagariRegex = /[\u0900-\u097F]/g;
  const devanagariMatches = cleaned.match(devanagariRegex);

  if (devanagariMatches && devanagariMatches.length > 0) {
    // Has Devanagari script
    // 1. Check for Marathi-specific character ळ (U+0933) or ॲ/ऑ
    if (/[\u0933\u0972]/u.test(cleaned)) {
      return "mr";
    }

    // 2. Count Marathi vs Hindi specific Devanagari words/substrings
    const marathiWords = [
      "काय", "आहे", "आहेत", "नाही", "म्हणजे", "कसे", "कशी", "कसा", "करावे",
      "डोकेदुखी", "लक्षणे", "उपचार", "त्रास", "आणि", "किंवा", "मला", "दुखते",
      "होणे", "कुठे", "कोणता", "कोणती", "कोणते", "उपाय", "मायग्रेन"
    ];

    const hindiWords = [
      "क्या", "है", "हैं", "नहीं", "मतलब", "कैसे", "कैसी", "कैसा", "करें",
      "सिरदर्द", "इलाज", "लक्षण", "परेशानी", "और", "या", "मुझे", "दर्द",
      "होना", "बचें", "बचाव", "कब", "कहाँ", "कौनसा", "माइग्रेन"
    ];

    let marathiScore = 0;
    let hindiScore = 0;

    // Check exact word boundaries or word inclusions
    const tokens = cleaned.toLowerCase().split(/\s+/);
    for (const token of tokens) {
      const cleanToken = token.replace(/[^\u0900-\u097F]/g, "");
      if (marathiWords.includes(cleanToken)) marathiScore += 2;
      if (hindiWords.includes(cleanToken)) hindiScore += 2;
    }

    // Also check substring matching for key distinct words like काय vs क्या, आहे vs है
    if (/\bकाय\b/.test(cleaned) || /\bआहे\b/.test(cleaned) || /\bम्हणजे\b/.test(cleaned)) marathiScore += 3;
    if (/\bक्या\b/.test(cleaned) || /\bहै\b/.test(cleaned) || /\bसे\b/.test(cleaned) || /\bबचें\b/.test(cleaned)) hindiScore += 3;

    if (marathiScore > hindiScore) return "mr";
    if (hindiScore > marathiScore) return "hi";

    // Default Devanagari fallback if score tied: Hindi or Marathi?
    // Let's check default Devanagari fallback
    return "hi"; 
  }

  // Latin script
  // Romanized Marathi words
  const romanizedMarathiWords = ["kay", "aahe", "ahe", "mhanje", "dokedukhi", "kasa", "kasi", "kase", "kashi", "karayce", "dukhat", "khup", "nako", "hoil"];
  // Romanized Hindi words
  const romanizedHindiWords = ["kya", "hai", "hain", "kaise", "kaisi", "kaisa", "sirdard", "kare", "karen", "nahi", "nahin", "matlab", "bache", "bachen", "ilaj", "mujhe", "dard"];

  const lower = cleaned.toLowerCase();
  const latinTokens = lower.split(/\s+/).map(t => t.replace(/[^a-z]/g, ""));

  let romMarathiScore = 0;
  let romHindiScore = 0;

  for (const token of latinTokens) {
    if (romanizedMarathiWords.includes(token)) romMarathiScore += 2;
    if (romanizedHindiWords.includes(token)) romHindiScore += 2;
  }

  if (romMarathiScore > 0 && romMarathiScore >= romHindiScore) return "mr";
  if (romHindiScore > 0 && romHindiScore > romMarathiScore) return "hi";

  // Default to English for Latin script
  return "en";
}

// Test cases requested:
const testCases = [
  "What is migraine?",
  "मायग्रेन म्हणजे काय?",
  "माइग्रेन क्या है?",
  "Migraine kay aahe?",
  "माइग्रेन से कैसे बचें?",
  "मायग्रेनचे लक्षणे काय आहेत?",
  "hello"
];

for (const tc of testCases) {
  console.log(`Input: "${tc}" -> Detected: ${detectLanguage(tc)}`);
}
