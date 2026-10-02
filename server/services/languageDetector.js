/**
 * Lightweight language detector for English, Hindi, and Marathi.
 *
 * Distinguishes:
 * - 'en' (English): Latin script default, or English keywords
 * - 'hi' (Hindi): Devanagari script with Hindi vocabulary/keywords or Romanized Hindi
 * - 'mr' (Marathi): Devanagari script with Marathi vocabulary/keywords, ळ/ॲ characters, or Romanized Marathi
 *
 * For ambiguous inputs, safely falls back to 'en'.
 */
export function detectLanguage(text) {
  if (!text || typeof text !== "string") {
    return "en";
  }

  const cleaned = text.trim();
  if (cleaned.length === 0) {
    return "en";
  }

  // Check for Devanagari characters (U+0900 to U+097F)
  const devanagariRegex = /[\u0900-\u097F]/g;
  const devanagariMatches = cleaned.match(devanagariRegex);

  if (devanagariMatches && devanagariMatches.length > 0) {
    // 1. Check for Marathi-specific character ळ (U+0933) or ॲ (U+0972) / ऑ (U+0911)
    if (/[\u0933\u0972]/u.test(cleaned)) {
      return "mr";
    }

    // 2. Vocabulary & stop-words matching in Devanagari script
    const marathiKeywords = [
      "काय", "आहे", "आहेत", "नाही", "म्हणजे", "कसे", "कशी", "कसा", "करावे",
      "डोकेदुखी", "लक्षणे", "उपचार", "त्रास", "आणि", "किंवा", "मला", "दुखते",
      "होणे", "कुठे", "कोणता", "कोणती", "कोणते", "उपाय", "मायग्रेन", "कधी", "तर"
    ];

    const hindiKeywords = [
      "क्या", "है", "हैं", "नहीं", "मतलब", "कैसे", "कैसी", "कैसा", "करें",
      "सिरदर्द", "इलाज", "लक्षण", "परेशानी", "और", "या", "मुझे", "दर्द",
      "होना", "बचें", "बचाव", "कब", "कहाँ", "कौनसा", "माइग्रेन", "क्यों", "से", "में"
    ];

    let marathiScore = 0;
    let hindiScore = 0;

    const words = cleaned.toLowerCase().split(/\s+/);
    for (const word of words) {
      const cleanWord = word.replace(/[^\u0900-\u097F]/g, "");
      if (marathiKeywords.includes(cleanWord)) marathiScore += 2;
      if (hindiKeywords.includes(cleanWord)) hindiScore += 2;
    }

    if (/\bकाय\b/.test(cleaned) || /\bआहे\b/.test(cleaned) || /\bम्हणजे\b/.test(cleaned)) marathiScore += 3;
    if (/\bक्या\b/.test(cleaned) || /\bहै\b/.test(cleaned) || /\bसे\b/.test(cleaned) || /\bबचें\b/.test(cleaned)) hindiScore += 3;

    if (marathiScore > hindiScore) return "mr";
    if (hindiScore > marathiScore) return "hi";

    // Substring fallback for specific word spellings
    if (cleaned.includes("माइग्रेन")) return "hi";
    if (cleaned.includes("मायग्रेन")) return "mr";

    return "hi"; // Default Devanagari fallback if score is completely tied
  }

  // Latin script (English vs Romanized Marathi / Hindi)
  const romanizedMarathiWords = [
    "kay", "aahe", "ahe", "mhanje", "dokedukhi", "kasa", "kasi", "kase", "kashi",
    "karayce", "dukhat", "khup", "nako", "hoil", "majha", "majhyat", "tar", "baddal"
  ];
  const romanizedHindiWords = [
    "kya", "hai", "hain", "kaise", "kaisi", "kaisa", "sirdard", "kare", "karen",
    "nahi", "nahin", "matlab", "bache", "bachen", "ilaj", "mujhe", "dard", "kaun"
  ];

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

  // Default to English for Latin script or ambiguous messages
  return "en";
}
