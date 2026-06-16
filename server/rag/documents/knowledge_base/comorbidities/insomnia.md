# Insomnia & Migraine — Comorbidity Knowledge Base
**Category:** Comorbidities  
**Version:** 1.0 | **Last Updated:** June 2026  
**For:** RAG-Based Migraine Early Warning Prediction Chatbot  
**Evidence Base:** ICSD-3, DSM-5, ICD-11, peer-reviewed sleep medicine and neurology literature

---

## 1. OVERVIEW

Sleep disorders — insomnia in particular — are among the most impactful and frequently overlooked comorbidities in migraine management. The sleep-migraine relationship is uniquely bidirectional and cyclically reinforcing: poor sleep is one of the **most consistently reported migraine triggers**, while migraine pain and anxiety about attacks severely disrupts sleep. For the early warning prediction system, sleep data is one of the **highest-value predictive inputs** available.

### 1.1 Prevalence
- **~50% of migraineurs** report sleep disturbance as a significant trigger
- Insomnia is **2–8× more prevalent** in migraine patients than in the general population
- Chronic migraine patients have significantly higher rates of insomnia than episodic migraine patients
- In large population studies, poor sleep quality is one of the strongest independent predictors of migraine chronification
- The relationship is strongest for **sleep onset insomnia** (difficulty falling asleep) and **sleep maintenance insomnia** (frequent night waking)

### 1.2 Why Sleep Is Central to This Prediction System
Sleep quantity and quality data should be treated as **primary predictive variables**, not secondary context. Because:
- Sleep disruption precedes many migraine attacks by 12–48 hours
- Even one night of significantly reduced or disrupted sleep elevates next-day attack risk substantially
- Both too little AND too much sleep are migraine triggers (non-linear relationship)
- Sleep represents a modifiable, actionable variable the user can directly influence
- The chatbot can provide sleep-specific early intervention recommendations when poor sleep is flagged

---

## 2. CLINICAL CLASSIFICATION OF SLEEP DISORDERS RELEVANT TO MIGRAINE

### 2.1 Chronic Insomnia Disorder — ICSD-3 / ICD-11: 7A00 / DSM-5: 307.42
**Diagnostic Criteria:**
- Difficulty initiating sleep, maintaining sleep, or early morning awakening
- Adequate opportunity and circumstances for sleep
- Daytime impairment: fatigue, mood disturbance, cognitive dysfunction, reduced performance
- Frequency: ≥3 nights/week
- Duration: ≥3 months

**Subtypes Relevant to Migraine:**
- **Sleep-onset insomnia:** Difficulty falling asleep (often linked to evening anxiety, caffeine, light exposure)
- **Sleep-maintenance insomnia:** Frequent awakening during the night (often linked to pain, hyperarousal, stress)
- **Early morning awakening insomnia:** Waking earlier than desired (associated with depression comorbidity)

### 2.2 Short-Term (Acute) Insomnia — ICSD-3
- Duration <3 months; often triggered by identifiable stressor
- Still significantly increases migraine risk during the affected period
- Resolves with stressor resolution if properly managed

### 2.3 Sleep-Related Breathing Disorders — ICSD-3
**Obstructive Sleep Apnea (OSA):**
- Characterized by repeated upper airway obstruction during sleep
- Results in oxygen desaturation, sleep fragmentation, non-restorative sleep
- **OSA is significantly associated with both morning headache and migraine**
- Hypoxia and hypercapnia during apneic episodes may trigger trigeminovascular activation
- Prevalence of OSA in chronic migraine patients is substantially elevated
- CPAP treatment of OSA has been shown to reduce migraine frequency in comorbid patients

**Central Sleep Apnea:** Less commonly associated but relevant in certain comorbid neurological conditions.

### 2.4 Circadian Rhythm Sleep-Wake Disorders — ICSD-3
- Disruption of the internal circadian clock relative to external day/night cycle
- **Delayed Sleep Phase Disorder (DSPD):** Common in adolescents; inability to fall asleep until very late, with delayed awakening
- **Irregular Sleep-Wake Disorder:** No consolidated sleep period; highly disruptive to migraine threshold
- Circadian misalignment is a known migraine trigger and is particularly relevant in shift workers

**RAG Note:** Shift workers and users with irregular sleep schedules are at elevated baseline migraine risk and require customized prediction logic.

### 2.5 Parasomnias (Relevant Subset)
- **Sleep bruxism:** Teeth grinding during sleep — causes jaw and neck muscle tension that can trigger morning migraine
- **Nightmare disorder:** Associated with PTSD and anxiety comorbidities; disrupts sleep architecture
- **REM Sleep Behavior Disorder:** Less common; relevant in cases of neurological comorbidity

### 2.6 Restless Legs Syndrome (RLS) / Willis-Ekbom Disease — ICSD-3 / ICD-11: 8A00.0
- Uncomfortable urge to move legs at rest, especially in evening/night
- Significantly disrupts sleep onset
- RLS is more prevalent in migraine patients and shares dopaminergic dysfunction as a mechanism
- Iron deficiency (common comorbidity) underlies both RLS and low dopamine states

---

## 3. SLEEP ARCHITECTURE AND MIGRAINE

### 3.1 Normal Sleep Architecture
Understanding sleep stages is essential for predicting migraine risk:

| Stage | Description | Duration | Migraine Relevance |
|---|---|---|---|
| N1 (Light sleep) | Transition to sleep | 5% of night | Disruption here = insomnia |
| N2 (Intermediate) | Sleep spindles, K-complexes | 45–55% | Most time spent here |
| N3 (Deep/Slow-wave) | Restorative, growth hormone | 15–25% | Reduced in migraine patients |
| REM | Dreaming, memory consolidation | 20–25% | Migraine attacks occur here |

### 3.2 Key Sleep Architecture Findings in Migraineurs
- Migraineurs show **reduced slow-wave (N3) sleep** — the most restorative phase
- REM sleep instability is associated with morning migraine attacks
- Migraine attacks frequently occur in the **early morning hours** (4–9 AM) — coinciding with the REM-dominant portion of sleep
- Sleep deprivation selectively reduces N3 and REM, both of which are critical for pain modulation

### 3.3 Sleep Duration and Migraine Risk (Non-Linear Relationship)
This is critical for the prediction model:

| Sleep Duration | Migraine Risk |
|---|---|
| <6 hours | ⬆️ High risk |
| 6–7 hours | ⬆️ Moderate-elevated risk |
| 7–9 hours | ✅ Optimal range |
| >9–10 hours | ⬆️ Moderate risk ("oversleeping trigger") |
| >10 hours | ⬆️ High risk |

**RAG Logic:** Both short sleep (<6h) AND long sleep (>9.5h) should elevate the migraine risk score. The optimal window is 7–9 hours. The oversleeping-triggered migraine is particularly common on weekends ("weekend migraine").

---

## 4. SLEEP AS A MIGRAINE TRIGGER — MECHANISMS

### 4.1 Sleep Deprivation Pathways
- **Serotonin depletion:** Sleep deprivation reduces serotonin synthesis and receptor sensitivity
- **Cortisol elevation:** Poor sleep activates HPA axis; elevated cortisol lowers migraine threshold
- **CGRP dysregulation:** Sleep deprivation has been shown to elevate CGRP levels, directly activating the trigeminovascular system
- **Inflammatory cytokines:** IL-1β and TNF-α rise significantly after sleep deprivation, promoting neuroinflammation
- **Reduced pain inhibition:** Loss of descending pain modulation occurs with sleep deprivation — pain signals are less effectively suppressed

### 4.2 Oversleeping Pathways
- **Serotonin rebound:** Extended sleep may cause serotonin fluctuation upon awakening
- **Caffeine/medication withdrawal:** Sleeping in delays morning caffeine intake or medication schedules, triggering withdrawal headache
- **Positional factors:** Prolonged lying in one position increases neck tension and jaw clenching (bruxism risk)
- **Hypoglycemia:** Extended sleep without eating elevates blood glucose fluctuation on awakening

### 4.3 Sleep Disruption Pathways
- **REM rebound:** After REM-disrupted nights, the subsequent night often has intense REM rebound — which is associated with migraine occurrence
- **Autonomic dysregulation:** Fragmented sleep disrupts autonomic balance (heart rate variability, sympathetic/parasympathetic tone) — a pattern linked to migraine onset

---

## 5. BIDIRECTIONAL RELATIONSHIP: HOW MIGRAINE DISRUPTS SLEEP

### 5.1 Pain-Induced Sleep Disruption
- Active headache phase pain directly causes difficulty falling asleep and frequent awakening
- Nausea and vomiting during attacks further disrupt sleep
- Photophobia and phonophobia during attacks make sleep environments difficult to achieve

### 5.2 Interictal (Between-Attack) Sleep Disruption
- Fear of the next attack (anticipatory anxiety) causes sleep-onset insomnia between attacks
- Central sensitization in chronic migraine patients maintains a state of hyperarousal that impairs sleep quality even without active pain
- Postdromal fatigue and cognitive impairment may paradoxically coexist with poor sleep quality in the 24–48h post-attack period

### 5.3 Sleep as a Migraine Abortant
- A significant proportion of migraineurs report that **sleep resolves migraine attacks** — particularly if sleep is achieved early in the attack
- This is relevant to treatment strategy (rest and sleep as a first-line non-pharmacological response)
- The mechanism involves endogenous pain modulation during slow-wave sleep and reduction of trigeminovascular activation

---

## 6. SPECIFIC SLEEP PATTERNS AS HIGH-RISK SCENARIOS

### 6.1 Weekend / Holiday Migraine
- Pattern: migraine occurring on Saturday or Sunday morning, or first days of vacation
- Mechanism: combination of sleep schedule change (sleeping later), caffeine delay, let-down from work stress
- High prevalence — well-documented as a distinct clinical phenomenon
- **Prediction flag:** User reports upcoming change in wake time by ≥1.5 hours

### 6.2 Post-Flight / Jet Lag Migraine
- Circadian disruption from rapid timezone crossing elevates migraine risk significantly
- Compound risk: dehydration, altered eating schedule, cabin pressure changes
- Risk persists for 2–5 days post-flight depending on time zone change magnitude

### 6.3 Shift Work-Related Migraine
- Night shift workers have among the highest rates of migraine chronification
- Chronic circadian misalignment creates persistent neurobiological stress
- **Chatbot adaptation:** Users identifying as shift workers should have adjusted baseline risk levels and non-standard sleep scoring

### 6.4 New Parent / Neonatal Sleep Deprivation Pattern
- New parents with infants represent a distinct high-risk population for migraine exacerbation
- Fragmented, non-restorative sleep over weeks to months significantly elevates attack risk

---

## 7. IMPACT ON EARLY WARNING PREDICTION MODEL

### 7.1 Sleep as a Top-Tier Predictive Variable
Sleep data should be weighted among the highest-impact variables in the prediction model:

| Sleep Pattern | Risk Score Contribution |
|---|---|
| <6h sleep last night | +3 points (High) |
| 6–7h sleep | +1 point (Mild) |
| 7–9h sleep | 0 (Baseline) |
| >9.5h sleep | +2 points (Moderate) |
| Disrupted sleep (multiple wakings) | +2 points |
| Poor quality (self-rated ≤4/10) | +2 points |
| Unusual sleep time (>1.5h deviation from norm) | +2 points |
| Known OSA with no CPAP use last night | +3 points |

### 7.2 Recommended Session Data Fields
- `sleep_hours_last_night`: Numeric (e.g., 6.5)
- `sleep_quality`: 1–10 (user self-report)
- `sleep_disruptions`: 0 / 1–2 / 3+ wakings
- `sleep_timing_normal`: Yes / No (did they go to bed/wake at usual time?)
- `nap_today`: Yes / No / Duration
- `sleep_disorder_diagnosed`: Yes / No (optional, consented)
- `cpap_used_last_night`: Yes / No (if OSA diagnosed)

### 7.3 Multi-Day Sleep Pattern Tracking
Single-night sleep data is valuable, but **multi-night patterns** are more predictive:
- Two consecutive nights of <6h → significantly elevated risk
- Progressive worsening sleep quality over 3+ nights → chronic risk escalation flag
- Sleep timing drift (bedtime getting later each night) → circadian disruption flag

---

## 8. MANAGEMENT INTERSECTION (EDUCATIONAL ONLY)

### 8.1 Evidence-Based Non-Pharmacological Sleep Interventions
*These are safe for the chatbot to discuss and recommend:*

**Cognitive Behavioral Therapy for Insomnia (CBT-I):**
- Gold standard treatment for chronic insomnia (superior to medication long-term)
- Components: sleep restriction therapy, stimulus control, sleep hygiene, cognitive restructuring, relaxation techniques
- Evidence also supports CBT-I in reducing migraine frequency when insomnia is the primary driver

**Sleep Hygiene Recommendations (Standard):**
- Consistent sleep and wake times 7 days/week (including weekends)
- Bedroom for sleep and sex only — no screens, work, or eating
- Dark, cool, quiet sleep environment (16–19°C / 60–67°F optimal)
- No screens (phones, tablets, TV) for 60 minutes before bed — blue light suppresses melatonin
- No caffeine after 2 PM (individual variation; half-life is ~5–6 hours)
- No alcohol within 3 hours of sleep (disrupts REM architecture despite sedative effect)
- No heavy meals within 2–3 hours of sleep
- Regular exercise — but not within 2 hours of bedtime
- Relaxation routine before bed: warm shower, reading, breathing exercises
- If awake for >20 minutes, get up and do a calm activity until sleepy (stimulus control)

**Relaxation Techniques:**
- Progressive Muscle Relaxation (PMR) — addresses both muscle tension (migraine trigger) and sleep-onset anxiety
- Diaphragmatic breathing / 4-7-8 breathing — parasympathetic activation
- Body scan meditation — reduces hyperarousal
- Guided imagery

### 8.2 Pharmacological Approaches (Educational Reference Only)
> ⚠️ **Chatbot Rule:** Never recommend specific medications or doses. For educational context only.

| Drug Class | Sleep Use | Migraine Use | Notes |
|---|---|---|---|
| Amitriptyline (TCA) | Off-label for insomnia | ✅ First-line preventive | Addresses both |
| Melatonin | Sleep phase regulation | Some preventive evidence | Low-risk, OTC |
| Zolpidem/Z-drugs | Short-term insomnia | None | Dependency risk; not for long-term use |
| Suvorexant (orexin antagonist) | FDA-approved insomnia | No direct evidence | Newer mechanism |
| Quetiapine (low-dose) | Off-label sleep | No direct evidence | Psychiatric use primarily |
| Topiramate | None | ✅ First-line preventive | May worsen sleep in some |
| Gabapentin | Off-label for sleep | Some evidence | Comorbid pain |

### 8.3 Melatonin Note
- Melatonin 3 mg has shown evidence in some clinical trials for migraine prevention (particularly cluster headache)
- Melatonin is generally low-risk and widely available OTC
- **Still advise user to consult their physician before starting any supplement**

---

## 9. CHATBOT INTERACTION GUIDELINES FOR SLEEP-RELATED QUERIES

### 9.1 Sleep Logging Prompts (Recommended Daily Check-in Questions)
The chatbot should collect sleep data as part of morning check-in:
- "How many hours did you sleep last night?"
- "How would you rate the quality of your sleep? (1–10)"
- "Did you wake up during the night? If so, how many times?"
- "Did you go to sleep and wake up at your usual times?"

### 9.2 Response Examples by Sleep Pattern

**User reports <6h sleep:**
> "You had less sleep than usual last night. Poor or short sleep is one of the most common migraine triggers. Your risk level for today is elevated. Staying hydrated, avoiding bright screens, and resting when possible may help. If you notice any early warning signs (yawning, neck stiffness, mood changes), consider taking additional precautions."

**User reports sleeping >10h:**
> "Sleeping significantly longer than usual can sometimes trigger a migraine, especially if your wake time was much later than normal. Keep an eye out for early warning signs today, stay hydrated, and try to get back to your regular sleep schedule tonight."

**User reports disrupted sleep (multiple wakings):**
> "Disrupted sleep — even if the total hours seem adequate — can reduce sleep quality and raise your migraine risk. Your body may not have gotten enough deep, restorative sleep. Consider a restful morning and watch for prodromal symptoms."

### 9.3 OSA Screening Prompt
If a user consistently reports non-restorative sleep, morning headaches, and daytime fatigue, the chatbot may gently suggest:
> "You've mentioned waking up with headaches and still feeling tired despite sleeping enough hours. This pattern can sometimes be associated with sleep apnea, a condition where breathing briefly stops during sleep. It's worth mentioning this to your doctor — it's treatable and addressing it can significantly help with both sleep quality and headache frequency."

---

## 10. KEY CLINICAL REFERENCES

- Rains JC, Poceta JS. *Sleep and headache.* Current Treatment Options in Neurology, 2006.
- Andreou AP, Edvinsson L. *Mechanisms of migraine as a chronic evolutive condition.* J Headache Pain, 2019.
- Smitherman TA, et al. *The prevalence and impact of migraine and severe headache in the US.* Headache, 2013.
- Ong JC, et al. *A randomized controlled trial of CBT-I for insomnia in patients with chronic pain.* Sleep, 2020.
- Kelman L, Rains JC. *Headache and sleep: examination of sleep patterns and complaints in a large clinical sample.* Headache, 2005.
- Seidel S, et al. *Poor sleep quality and sleep disorders in patients with chronic pain.* Pain Medicine, 2009.
- American Academy of Sleep Medicine. *ICSD-3: International Classification of Sleep Disorders, 3rd ed.* 2014.
- Goadsby PJ, et al. *Pathophysiology of migraine.* Physiological Reviews, 2017.
- Holland PR. *Headache and sleep: shared pathophysiological mechanisms.* Cephalalgia, 2014.
- Lund N, et al. *Sleep disturbances and migraine.* Journal of Headache and Pain, 2021.

---

*For internal RAG system use. Not for direct patient distribution without clinical review.*
