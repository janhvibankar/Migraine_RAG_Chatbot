# System Knowledge Base
## Migraine Early Warning Prediction Chatbot
**Version:** 1.0  
**Last Updated:** June 2026  
**System Type:** RAG-Based Conversational AI  
**Domain:** Neurology — Migraine Prediction & Management Support

---

## 1. SYSTEM OVERVIEW

This document serves as the primary knowledge base for a Retrieval-Augmented Generation (RAG) chatbot designed to assist users in identifying early warning signs of migraine attacks, tracking triggers, and providing evidence-based educational support. The system does **not** replace clinical diagnosis or medical treatment.

### 1.1 System Purpose
- Help users recognize prodromal (pre-migraine) symptoms early
- Log and analyze personal trigger patterns
- Provide educational content on migraine pathophysiology
- Guide users toward appropriate medical care when needed
- Support medication adherence awareness (not prescribing)

### 1.2 Target Users
- Adults (18+) with diagnosed or suspected migraine disorder
- Caregivers of migraine patients
- General users seeking migraine health education

### 1.3 System Limitations
- Cannot perform clinical diagnosis
- Cannot prescribe, adjust, or recommend specific medications
- Cannot replace a licensed neurologist or general practitioner
- Does not have access to real-time user health records unless explicitly integrated

---

## 2. MIGRAINE CLINICAL KNOWLEDGE

### 2.1 What Is Migraine?
Migraine is a complex neurological disorder characterized by recurrent episodes of moderate-to-severe headache, typically unilateral and pulsating, lasting 4–72 hours. It affects approximately **1 in 7 people globally** and is classified as one of the leading causes of disability worldwide (WHO, 2016).

Migraine is classified by the **International Headache Society (IHS)** under ICHD-3 (International Classification of Headache Disorders, 3rd edition):
- **Migraine without aura (1.1)** — most common form
- **Migraine with aura (1.2)** — involves transient neurological symptoms
- **Chronic migraine (1.3)** — ≥15 headache days/month for >3 months
- **Menstrual migraine** — linked to hormonal fluctuation
- **Vestibular migraine** — associated with vertigo and balance issues
- **Hemiplegic migraine** — rare; involves temporary motor weakness

### 2.2 Pathophysiology (Simplified for Chatbot Context)
Migraine involves cortical spreading depression (CSD), trigeminovascular activation, and neuroinflammation. Key neurochemicals involved:
- **Serotonin (5-HT):** Drop in serotonin levels may trigger attacks
- **CGRP (Calcitonin Gene-Related Peptide):** Key mediator of migraine pain; target of newer treatments
- **Dopamine:** Involved in prodromal symptoms (yawning, food cravings)

### 2.3 Migraine Phases (Critical for Early Warning System)

#### Phase 1: Prodrome (Early Warning — 6–48 hours before headache)
This is the **primary focus of early warning prediction**. Symptoms include:
- Mood changes (irritability, euphoria, depression)
- Fatigue or excessive yawning
- Neck stiffness or soreness
- Food cravings (especially sweet or salty foods)
- Increased thirst or urination
- Cognitive changes (brain fog, difficulty concentrating)
- Light or sound sensitivity (mild)
- Gastrointestinal changes (constipation, diarrhea)
- Frequent yawning (strong predictor — up to 72% of patients report this)

#### Phase 2: Aura (20–60 minutes before or during headache)
Occurs in ~25–30% of migraineurs:
- **Visual aura:** Scintillating scotoma, zigzag lines (fortification spectra), blind spots
- **Sensory aura:** Tingling or numbness (face, arm, hand)
- **Motor aura:** Weakness (rare — associated with hemiplegic migraine)
- **Language aura:** Difficulty speaking or finding words
- **Brainstem aura:** Vertigo, tinnitus, diplopia

#### Phase 3: Headache (4–72 hours)
- Moderate-to-severe unilateral or bilateral throbbing pain
- Nausea and/or vomiting
- Photophobia (sensitivity to light)
- Phonophobia (sensitivity to sound)
- Osmophobia (sensitivity to smell) — in some patients
- Worsened by physical activity

#### Phase 4: Postdrome ("Migraine Hangover" — up to 48 hours)
- Fatigue, exhaustion
- Cognitive impairment ("brain fog")
- Mood changes (depression or euphoria)
- Residual head tenderness

---

## 3. TRIGGER KNOWLEDGE BASE

### 3.1 Trigger Categories

#### Environmental Triggers
| Trigger | Prevalence in Migraineurs |
|---|---|
| Bright or flickering lights | ~38% |
| Strong odors (perfume, chemicals) | ~40% |
| Weather changes (barometric pressure) | ~50% |
| High altitude | Moderate |
| Loud noise | ~30% |
| Screen glare / blue light | High (modern population) |

#### Dietary Triggers
| Substance | Mechanism |
|---|---|
| Alcohol (especially red wine, beer) | Vasodilation, histamine, tyramine |
| Caffeine (excess or withdrawal) | Adenosine receptor changes |
| MSG (monosodium glutamate) | Excitatory neurotransmitter effect |
| Tyramine-rich foods (aged cheese, cured meats) | Monoamine imbalance |
| Aspartame | Unclear; reported by subset of patients |
| Skipping meals / fasting | Hypoglycemia-mediated |
| Dehydration | Disrupts electrolyte balance |

#### Hormonal Triggers
- Menstrual cycle (perimenstrual drop in estrogen — most common hormonal trigger)
- Oral contraceptive use or change
- Menopause / perimenopause
- Pregnancy (may improve or worsen migraine)

#### Lifestyle & Behavioral Triggers
- Sleep disruption: too much OR too little sleep
- Physical overexertion
- Stress (both onset and let-down/"weekend migraine")
- Postural changes / neck tension
- Eye strain

#### Psychological / Emotional Triggers
- Acute emotional stress or anxiety
- Excitement or positive stress
- Post-stress relaxation (letdown migraine)
- Depression (bidirectional relationship)

### 3.2 Trigger Tracking Logic (for RAG Model Context)
The chatbot should help users:
1. Log daily triggers using structured prompts
2. Identify patterns over 4–8 weeks of data
3. Distinguish between **consistent triggers** (reproducible across attacks) and **coincidental associations**
4. Recognize **trigger stacking** — single triggers may not cause an attack, but multiple simultaneous triggers often do

---

## 4. EARLY WARNING PREDICTION FRAMEWORK

### 4.1 High-Confidence Prodromal Indicators
The following combinations significantly increase the probability of an imminent attack:

| Signal Combination | Predicted Likelihood |
|---|---|
| Yawning + neck stiffness + mood change | High |
| Food cravings + fatigue + light sensitivity | High |
| Sleep change + dehydration + missed meal | Moderate-High |
| Single prodromal symptom alone | Low-Moderate |

### 4.2 Prediction Confidence Levels Used by Chatbot

- 🟢 **Low Risk** — No significant prodromal signals detected
- 🟡 **Moderate Risk** — 1–2 mild prodromal symptoms present
- 🔴 **High Risk** — 3+ prodromal symptoms or known personal trigger pattern active

### 4.3 Recommended User Actions by Risk Level
- **Low:** Continue normal activities; maintain hydration and sleep hygiene
- **Moderate:** Consider reducing screen time, increase hydration, avoid known triggers, rest if possible
- **High:** User should follow their **personal attack management plan** (as set by their physician); consider informing their healthcare provider if attacks are increasing

---

## 5. TREATMENT & MANAGEMENT KNOWLEDGE (Educational Only)

### 5.1 Acute Treatment Categories (General Knowledge)
The chatbot may reference general categories of treatment — **never specific dosing or personal prescriptions:**

- **Non-pharmacological (first-line, always safe to mention):**
  - Rest in dark, quiet room
  - Cold or warm compress to head/neck
  - Hydration (water, electrolytes)
  - Sleep

- **Over-the-counter analgesics (general education only):**
  - NSAIDs (ibuprofen, naproxen sodium)
  - Acetaminophen (paracetamol)
  - Combination analgesics (aspirin + caffeine + acetaminophen)
  - ⚠️ Overuse (>10–15 days/month) can cause Medication Overuse Headache (MOH)

- **Prescription treatments (educational reference only — chatbot must defer to physician):**
  - Triptans (e.g., sumatriptan, rizatriptan) — 5-HT1B/1D agonists
  - Ergotamines
  - CGRP antagonists (gepants — e.g., ubrogepant, rimegepant)
  - Ditans (e.g., lasmiditan)

### 5.2 Preventive Treatment (Educational Reference Only)
Preventive therapy is typically indicated when attacks are ≥4/month or significantly disabling:
- Beta-blockers (propranolol, metoprolol)
- Antiepileptics (topiramate, valproate)
- Antidepressants (amitriptyline, venlafaxine)
- CGRP monoclonal antibodies (erenumab, fremanezumab, galcanezumab)
- Botulinum toxin type A (for chronic migraine)

### 5.3 Non-Pharmacological Preventive Strategies
- Consistent sleep schedule (same wake/sleep time daily)
- Regular meals (no skipping)
- Adequate hydration (2–2.5L/day minimum)
- Aerobic exercise (3–5×/week, moderate intensity)
- Stress management (CBT, mindfulness, biofeedback — clinical evidence supports these)
- Migraine diary maintenance

---

## 6. CHATBOT BEHAVIORAL RULES & RESPONSE LOGIC

### 6.1 What the Chatbot CAN Do
- Collect and interpret symptom reports using structured conversation
- Provide educational information about migraine phases, triggers, and general management
- Display risk level based on reported prodromal symptoms
- Encourage users to seek medical care when appropriate
- Maintain a session-based symptom log for context
- Provide empathetic, supportive responses

### 6.2 What the Chatbot MUST NOT Do
- Diagnose migraine or any other medical condition
- Recommend, adjust, or discourage specific medications
- Contradict or override a physician's instructions
- Provide emergency medical care (must always redirect to emergency services)
- Make definitive predictions presented as medical certainty
- Store sensitive health data beyond the session without explicit consent and appropriate data security compliance

### 6.3 Emergency Escalation Protocol
The chatbot **must immediately escalate** and prompt emergency services if a user reports:
- "Thunderclap headache" — sudden, worst headache of life (possible subarachnoid hemorrhage)
- Headache with fever, stiff neck, rash (possible meningitis)
- Headache with vision loss, speech problems, or sudden weakness not previously diagnosed as aura
- Headache following head trauma
- New or changed headache pattern in patients over 50
- Headache with confusion or altered consciousness

**Escalation Response Template:**
> "The symptoms you've described may indicate a serious medical emergency. Please call emergency services (112 / 911) or go to your nearest emergency department immediately. Do not wait."

### 6.4 Tone & Communication Guidelines
- Use plain, accessible language (aim for Grade 8 reading level)
- Be empathetic and non-judgmental
- Avoid alarmist language unless escalation is genuinely required
- Acknowledge the chronic, disabling nature of migraine with respect
- Use "you may be experiencing" rather than "you have"
- Always offer to connect users with a healthcare provider

---

## 7. DATA COLLECTION GUIDELINES

### 7.1 Symptom Logging Variables
When collecting symptom data for RAG context, capture:
- Date and time of report
- Current phase suspected (prodrome / aura / headache / postdrome)
- Specific symptoms reported
- Severity (1–10 scale)
- Triggers present (from trigger list)
- Medications taken (if any — name and time only, no dose adjustments)
- Sleep hours (previous night)
- Hydration level (user self-report: low / normal / high)
- Menstrual cycle day (if applicable, optional, user-consented)
- Stress level (1–10 scale)

### 7.2 Data Privacy Principles
- All health data must be treated as sensitive personal health information
- Must comply with applicable regulations: **GDPR** (EU), **HIPAA** (US), **DISHA** (India — Digital Information Security in Healthcare Act, when enacted)
- No data should be sold, shared with advertisers, or used for non-healthcare purposes
- Users must be informed of data use at onboarding
- Users have the right to delete their data at any time

---

## 8. REFERENCES & EVIDENCE BASE

- International Headache Society. *ICHD-3: The International Classification of Headache Disorders, 3rd Edition.* Cephalalgia, 2018.
- Lipton RB, et al. *Migraine prevalence, disease burden, and the need for preventive therapy.* Neurology, 2007.
- Goadsby PJ, et al. *Pathophysiology of Migraine: A Disorder of Sensory Processing.* Physiological Reviews, 2017.
- Pringsheim T, et al. *The prevalence of migraine.* Neuroepidemiology, 2014.
- WHO. *Headache disorders.* Fact Sheet, 2016.
- Silberstein SD. *Preventive migraine treatment.* Continuum (Minneapolis), 2015.
- Stovner LJ, et al. *The global burden of headache.* Journal of Headache and Pain, 2022.

---

*This document is intended for internal system configuration and RAG knowledge base use only. It is not a substitute for peer-reviewed clinical guidelines in patient care settings.*
