# Migraine Diary

## Overview

A migraine diary is a structured, longitudinal self-monitoring tool used to record migraine attacks and related variables over time. It is the gold standard for diagnosing migraine subtypes, identifying personal triggers, evaluating treatment response, and generating the temporal data needed for pattern recognition and early warning prediction. In a RAG-based migraine early warning system, diary entries represent the primary patient-generated dataset for model training and real-time inference.

---

## Purpose and Clinical Utility

- **Diagnosis confirmation:** Enables retrospective review of attack frequency, duration, and features to confirm ICHD-3 criteria
- **Trigger identification:** Correlates attack onset with preceding activities, foods, sleep, stress, and environmental conditions
- **Treatment tracking:** Monitors acute medication use, efficacy, and overuse patterns (medication overuse headache risk)
- **Hormonal correlation:** Links attacks to menstrual cycle phases (essential for menstrual migraine classification)
- **Disability assessment:** Provides data for MIDAS and HIT-6 scoring
- **Predictive modeling:** Time-series diary data is the core input for early warning algorithms

---

## Standard Migraine Diary Components

### 1. Attack-Level Data (Per Episode)

#### Timing
- Date and day of week of attack onset
- Time of day of attack onset (morning, afternoon, evening, night — or exact time)
- Duration of attack (hours)
- Time to peak intensity from onset
- Time of resolution
- Sleep onset time night before
- Menstrual cycle day (women)

#### Pain Characteristics
- **Severity:** Numeric Rating Scale (NRS) 0–10 or Verbal Rating Scale (mild / moderate / severe)
- **Location:** Unilateral left / unilateral right / bilateral / shifting
- **Quality:** Throbbing / pulsating / pressing / stabbing / burning
- **Onset pattern:** Gradual / sudden / woke from sleep

#### Associated Symptoms
- Nausea: Yes / No / Severity (mild, moderate, severe)
- Vomiting: Yes / No / Number of episodes
- Photophobia: Yes / No
- Phonophobia: Yes / No
- Osmophobia: Yes / No
- Cutaneous allodynia: Yes / No (skin hypersensitivity during attack)
- Neck pain or stiffness: Yes / No
- Cognitive impairment: Yes / No
- Dizziness / vertigo: Yes / No

#### Aura (if present)
- Type: Visual / Sensory / Speech / Motor / Brainstem / Retinal
- Visual aura details: Scintillating scotoma, fortification spectra, blurring, hemianopia
- Aura duration (minutes)
- Relationship to headache: Before / During / After / Without headache
- Fully reversible: Yes / No

---

### 2. Prodrome / Premonitory Symptom Tracking

Recorded **24–72 hours before expected or confirmed attack onset**:

| Symptom | Present | Severity (1–3) | Hours Before Attack |
|---------|---------|----------------|---------------------|
| Fatigue / low energy | | | |
| Yawning (excessive) | | | |
| Neck pain / stiffness | | | |
| Mood change (irritability) | | | |
| Mood change (depression) | | | |
| Mood change (euphoria) | | | |
| Food cravings | | | |
| Nausea (mild, pre-attack) | | | |
| Cognitive slowing / brain fog | | | |
| Difficulty concentrating | | | |
| Light sensitivity (mild) | | | |
| Sound sensitivity (mild) | | | |
| Increased thirst / urination | | | |
| Fluid retention / bloating | | | |
| Scalp tenderness | | | |
| Visual disturbance (non-aura) | | | |
| Sleep changes (too much/little) | | | |

> **RAG/ML Note:** Prodrome entries timestamped before attack confirmation are the highest-value features for early warning prediction models. Time-to-attack labeling from prodrome onset enables regression and classification targets.

---

### 3. Trigger Log (Pre-Attack 24–48 Hour Window)

#### Dietary Triggers
- Alcohol (type: red wine / white wine / beer / spirits)
- Caffeine: Amount consumed / Sudden reduction or excess
- Chocolate
- Aged cheeses
- Processed/cured meats (nitrates)
- MSG (monosodium glutamate)
- Artificial sweeteners (aspartame)
- Citrus fruits
- Skipped or delayed meal
- Fasting duration (hours)
- Dehydration (low fluid intake)

#### Sleep Triggers
- Hours slept previous night
- Sleep quality: Good / Fair / Poor
- Sleep disturbance: Yes / No
- Oversleeping (weekend lie-in)
- Woke from sleep with headache: Yes / No

#### Hormonal Triggers (Women)
- Menstrual cycle day
- Menstruation started: Yes / No
- Phase: Pre-menstrual / Menstrual / Ovulatory / Luteal
- Hormonal contraceptive use changes
- Missed contraceptive pill

#### Physical Triggers
- Intense physical exertion: Yes / No
- Exercise type and duration
- Postural strain (prolonged screen time, neck position)
- Travel (car, plane, train — vestibular trigger)

#### Environmental Triggers
- Barometric pressure change (if tracked)
- Weather change (storm, humidity)
- Strong odors: Yes / No (type)
- Bright or flickering lights
- Loud noises
- High altitude

#### Psychological Triggers
- Stress level: NRS 0–10
- Acute stressful event: Yes / No
- Anxiety level: NRS 0–10
- "Let-down" headache (stress release): Yes / No

---

### 4. Medication Log

#### Acute Treatment Taken
- Drug name
- Dose (mg)
- Time of administration relative to attack onset (early / established / late)
- Route: Oral / Nasal / Subcutaneous / Rectal
- Number of doses taken
- Response: None / Partial (≥50% reduction) / Complete (pain-free in 2 hours)
- Recurrence within 24 hours: Yes / No
- Side effects noted

#### Preventive Medication
- Current preventive drug and dose
- Adherence today: Yes / No
- Changes to preventive regimen

#### Medication Overuse Risk Flag
- ≥10 days/month of triptan or combination analgesic use = overuse threshold
- ≥15 days/month of simple analgesic/NSAID use = overuse threshold

---

### 5. Disability and Functional Impact

- **Work/school missed:** Full day / Half day / None
- **Activities of daily living impaired:** Yes / No
- **Bed rest required:** Hours
- **MIDAS items (quarterly scoring):**
  - Days of missed work/school due to headache (last 3 months)
  - Days of reduced productivity at work/school (≥50% reduced)
  - Days of missed household work
  - Days of reduced household productivity
  - Days of missed social/leisure activities
- **HIT-6 item tracking:**
  - Pain severity impact
  - Functional limitation impact
  - Emotional impact

---

### 6. Daily Baseline Entries (Non-Attack Days)

For pattern recognition and feature engineering, daily baseline data collection is essential even on headache-free days:

- Date
- Headache: None / Mild / Moderate / Severe
- Headache type if present: Tension / Migraine / Uncertain
- Sleep hours
- Sleep quality (1–5)
- Stress level (0–10)
- Mood (0–10)
- Energy level (0–10)
- Caffeine intake (mg)
- Water intake (glasses)
- Meals: Number / Any skipped
- Exercise: Yes / No / Duration
- Menstrual cycle day (women)
- Medications taken

---

## Diary Formats

### Paper Diary
- Structured grid or calendar format
- Portable; no technology required
- Lower data completeness; manual aggregation needed
- Standard validated format: Headache Diary (Headache Classification Committee)

### Mobile / Digital Diary Apps
- Real-time timestamping
- Push-notification reminders improve compliance
- Automatic cycle tracking integration
- Weather API integration for barometric data
- Export to CSV/JSON for analysis
- Examples: Migraine Buddy, N1-Headache, Curelator, Healint

### Wearable-Integrated Diary
- Passive physiological data augmenting self-report:
  - Heart rate and HRV (autonomic changes pre-attack)
  - Sleep staging
  - Skin temperature
  - Activity level
  - SpO2

---

## Validated Diary Instruments

### Headache Impact Test (HIT-6)
- 6-item questionnaire assessing headache impact
- Score 36–78; ≥60 = severe impact
- Domains: pain, daily activities, vitality, cognitive function, emotional distress, social activities

### MIDAS (Migraine Disability Assessment)
- 5 questions about lost days in work, household, and social activities over 3 months
- Score 0–5: minimal; 6–10: mild; 11–20: moderate; ≥21: severe

### ID Migraine Screener
- 3-item screen: nausea + photophobia + disability
- 2 of 3 positive = 93% sensitive for migraine

### Migraine-Specific Quality of Life Questionnaire (MSQ)
- 14 items across 3 domains: role function–restrictive, role function–preventive, emotional function

---

## Diary Data for RAG System

### Key Structured Fields (Machine-Readable)

```json
{
  "entry_date": "YYYY-MM-DD",
  "entry_type": "attack | prodrome | daily_log",
  "attack_present": true,
  "attack_onset_time": "HH:MM",
  "attack_severity_nrs": 7,
  "attack_duration_hours": 18,
  "location": "unilateral_left",
  "quality": "throbbing",
  "nausea": true,
  "vomiting": false,
  "photophobia": true,
  "phonophobia": true,
  "aura_present": false,
  "prodrome_symptoms": ["fatigue", "yawning", "neck_pain", "food_cravings"],
  "prodrome_onset_hours_before": 36,
  "triggers_suspected": ["sleep_deprivation", "stress", "red_wine"],
  "sleep_hours_prior_night": 5.5,
  "sleep_quality": 2,
  "stress_nrs": 8,
  "caffeine_mg": 200,
  "water_glasses": 4,
  "menstrual_cycle_day": 28,
  "menstruation_started": true,
  "medication_taken": "sumatriptan_50mg",
  "medication_response": "partial",
  "work_missed_hours": 8,
  "barometric_pressure_hpa": 1002
}
```

### Feature Engineering from Diary Data
- **Attack frequency:** Attacks per month (rolling 30-day window)
- **Attack day probability:** Day-of-cycle risk score (women)
- **Prodrome-to-attack lag:** Mean hours between prodrome onset and attack
- **Trigger co-occurrence matrix:** Frequency of trigger combinations preceding attacks
- **Medication overuse flag:** Rolling 30-day medication use count
- **Sleep debt accumulation:** Cumulative sleep deficit over 72 hours
- **Stress trend:** 7-day rolling average stress score

---

## Diary Compliance and Data Quality

### Factors Affecting Compliance
- Burden of daily entry (simplify to essential fields on non-attack days)
- Timing of entry (real-time vs. retrospective reduces recall bias)
- Reminder systems (push notifications improve rates by 30–40%)
- Gamification and progress visualization

### Minimum Viable Dataset for Pattern Analysis
- ≥3 months of prospective diary data
- ≥5 recorded attacks with prodrome data
- Daily baseline entries on ≥70% of days

### Common Biases
- **Recall bias:** Retrospective entries underreport mild prodromal symptoms
- **Attribution bias:** Patients over-attribute attacks to recently consumed triggers
- **Confirmation bias:** Stops tracking potential triggers once "identified"

---

## Key Facts for RAG Retrieval

- Minimum tracking period for reliable analysis: 3 months
- Prodrome window for early warning: 6–72 hours before attack
- Most predictive prodrome features: fatigue, yawning, neck pain, mood change, photosensitivity
- MIDAS ≥21 = severe disability; indicates preventive treatment
- HIT-6 ≥60 = severe headache impact
- Medication overuse threshold: triptans ≥10 days/month; NSAIDs ≥15 days/month
- Menstrual cycle day is a critical co-variate for female migraine patients
- Digital diaries improve data completeness vs. paper by ~25%
- Sleep, stress, and hormonal data are the three highest-yield non-attack variables
- Attack frequency >4/month + significant disability = preventive treatment indicated
- Daily baseline entries are required (not just attack entries) for ML feature engineering
