# Symptom Tracking in Migraine

## Overview

Symptom tracking is the systematic, time-stamped recording of all migraine-related symptoms across all four phases of the migraine attack cycle — prodrome, aura, headache (ictal), and postdrome. Unlike simple headache diaries that focus on attack-level data, comprehensive symptom tracking captures the full biological signature of each migraine episode. This granular data enables detection of pre-attack warning patterns, personalized early warning thresholds, and phase-specific clinical decision support in a RAG-based prediction system.

---

## The Four Phases of Migraine — Symptom Framework

### Phase 1: Prodrome (Premonitory Phase)

**Timing:** 6–72 hours before headache onset (mean: ~24 hours)
**Prevalence:** Experienced by 30–80% of migraineurs

The prodrome is the most clinically important phase for early warning systems. Symptoms arise from hypothalamic activation and altered dopaminergic/serotonergic signaling before trigeminal activation occurs.

#### Prodrome Symptoms Catalogue

**Neurological / Cognitive**
- Difficulty concentrating ("brain fog")
- Cognitive slowing
- Memory lapses
- Word-finding difficulty
- Reading difficulty
- Heightened sensory perception (before frank photophobia)
- Derealization or feeling "not quite right"

**Mood / Psychological**
- Irritability (most common mood prodrome)
- Depression / low mood
- Anxiety, restlessness
- Euphoria / hyperactivity (less common but documented)
- Social withdrawal
- Emotional lability

**Autonomic / Vegetative**
- Yawning (repetitive, uncontrolled — highly specific prodrome marker)
- Fatigue / excessive tiredness
- Pallor or flushing
- Increased urination (polyuria)
- Fluid retention / bloating
- Changes in bowel habits (constipation or diarrhea)
- Increased thirst
- Nasal congestion or rhinorrhea

**Musculoskeletal**
- Neck pain or stiffness (most common physical prodrome — reported in 60–80% of patients)
- Shoulder tension
- Scalp tenderness (precedes allodynia)

**Sensory Sensitivity (Mild, Pre-attack)**
- Mild light sensitivity (not yet frank photophobia)
- Mild sound sensitivity
- Heightened smell sensitivity
- Skin hypersensitivity

**Gastrointestinal**
- Nausea (mild)
- Loss of appetite or increased appetite
- Food cravings — especially chocolate, carbohydrates, salty foods
- Thirst changes

**Sleep**
- Hypersomnia (increased sleep need)
- Insomnia
- Vivid dreams

#### Prodrome Symptom Severity Scale
Rate each symptom: 0 = absent, 1 = mild, 2 = moderate, 3 = severe

#### Prodrome Symptom Timestamp Protocol
- Record time of symptom onset (not just date)
- Track progression over hours
- Note resolution time (prodrome resolves as headache begins, or overlaps)

---

### Phase 2: Aura

**Timing:** Typically 20–60 minutes before or concurrent with headache onset
**Prevalence:** ~25–30% of migraineurs experience aura; more common in women

Aura results from cortical spreading depression (CSD) — a wave of neuronal depolarization propagating at 2–3 mm/min across the cortex.

#### Visual Aura (Most Common — ~99% of aura cases)

**Positive Visual Phenomena**
- **Scintillating scotoma:** Shimmering, flickering crescent — most characteristic
- **Fortification spectra (teichopsia):** Jagged, angular, arc-shaped pattern
- **Photopsia:** Flashes of light, stars, sparks
- **Geometric patterns:** Zigzag lines, kaleidoscopic patterns

**Negative Visual Phenomena**
- **Scotoma:** Blank spot in visual field
- **Blurring:** Indistinct central or peripheral vision
- **Hemianopia:** Loss of half visual field

**Characteristics**
- Typically begins at center of visual field, expands outward
- Duration: 20–60 minutes (diagnostic criterion: 5–60 min)
- Fully reversible
- Monocular vs. binocular (monocular = retinal migraine, not typical aura)

#### Sensory Aura
- Paresthesia (tingling, pins-and-needles): typically starts in hand, spreads to arm/face
- Numbness
- Cheiro-oral spread: hand → arm → face
- Unilateral
- Duration: 5–60 minutes; fully reversible

#### Speech / Language Aura (Dysphasic Aura)
- Difficulty finding words (anomia)
- Slurred or disorganized speech
- Comprehension difficulty
- Duration: 5–60 minutes

#### Motor Aura (Hemiplegic Migraine — Rare)
- Unilateral motor weakness
- May last hours to days
- Familial or sporadic hemiplegic migraine (FHM/SHM) — genetic basis
- **Important:** Must be distinguished from stroke — urgent workup if new onset

#### Brainstem Aura (Previously: Basilar Migraine)
- Vertigo
- Diplopia (double vision)
- Tinnitus
- Ataxia
- Altered consciousness
- Bilateral sensory disturbance
- Dysarthria
- Differentiate from posterior circulation TIA/stroke

#### Retinal Migraine
- Monocular visual disturbance or temporary monocular vision loss
- Must exclude retinal artery occlusion, amaurosis fugax

#### Aura Tracking Template
| Aura Type | Present | Duration (min) | Laterality | Description | Sequence No. |
|---|---|---|---|---|---|
| Visual | | | | | |
| Sensory | | | | | |
| Speech | | | | | |
| Motor | | | | | |
| Brainstem | | | | | |

---

### Phase 3: Headache (Ictal Phase)

**Timing:** Onset after prodrome/aura; duration 4–72 hours (untreated)
**Core ICHD-3 Criteria Features**

#### Pain Characteristics
- **Location:** Unilateral (60%) / Bilateral (40%)
  - Note: Side consistency or side-switching across attacks
- **Quality:** Pulsating / throbbing (required for ICHD-3 diagnosis)
- **Severity:** Moderate to severe (NRS ≥5)
- **Aggravation:** Worsened by routine physical activity (walking, climbing stairs)

#### Associated Symptoms (Diagnostic Criteria Items)
- Nausea and/or vomiting (required for ICHD-3: at least nausea OR photophobia + phonophobia)
- Photophobia (light sensitivity)
- Phonophobia (sound sensitivity)

#### Additional Ictal Symptoms

**Cutaneous Allodynia**
- Skin hypersensitivity during attack
- Pain from normally non-painful stimuli: brushing hair, wearing glasses, contact with pillow
- Indicates central sensitization
- Predicts poor triptan response if present before treatment
- Assessed with ASC-12 (Allodynia Symptom Checklist)
- Prevalence: ~63% during established attacks

**Osmophobia (Smell Sensitivity)**
- Strong odors trigger or worsen attack
- Highly specific for migraine vs. tension-type headache

**Vestibular Symptoms**
- Vertigo
- Dizziness
- Motion sensitivity
- Imbalance
- Vestibular migraine: diagnostic criteria require ≥5 episodes, vestibular symptoms 5 min–72 hrs

**Cognitive Symptoms (Ictal)**
- Inability to concentrate
- Slowed thinking
- Confusion (more common in basilar-type)

**Autonomic Features**
- Lacrimation (tearing) — unilateral = consider TAC overlap
- Nasal congestion or rhinorrhea — unilateral = consider cluster headache
- Ptosis (drooping eyelid) — unilateral = consider Horner's, TACs
- Conjunctival injection

**Neck Pain During Attack**
- Present in >70% of migraine attacks
- Often more prominent than head pain in some patients
- Can mimic meningismus → important diagnostic consideration

---

### Phase 4: Postdrome (Migraine Hangover)

**Timing:** Follows headache resolution; lasts 4–48 hours
**Prevalence:** 80% of migraineurs report postdrome symptoms

Postdrome arises from sustained cortical and brainstem changes persisting after headache resolves.

#### Postdrome Symptoms

**Cognitive**
- Difficulty concentrating ("brain fog")
- Slowed thinking
- Memory impairment
- Feeling "detached" or dull

**Mood**
- Exhaustion / fatigue (most common)
- Mild euphoria or well-being (paradoxical; sometimes follows severe attack)
- Low mood, depression
- Emotional flatness

**Physical**
- Muscle weakness
- Scalp tenderness (resolving allodynia)
- Neck stiffness
- Sensitivity to head movement

**Gastrointestinal**
- Nausea (resolving)
- Changes in appetite (often increased after attack)

#### Postdrome Severity Scoring
- Rate overall postdrome severity: 0–10
- Track duration (hours to resolution)
- Note functional impairment during postdrome

---

## Symptom Severity and Timing Scales

### Pain Severity Scales

| Scale | Range | Use |
|---|---|---|
| Numeric Rating Scale (NRS) | 0–10 | Universal; simple |
| Visual Analog Scale (VAS) | 0–100 mm | Research-grade; continuous |
| Verbal Rating Scale (VRS) | None/Mild/Moderate/Severe | Easy for acute documentation |
| Faces Pain Scale | 6 faces | Pediatric / low-literacy |

### Functional Impairment Scales

**MIDAS (Migraine Disability Assessment) — Quarterly**
- 5 questions; score 0–5 (minimal) to ≥21 (severe)
- Grade I (0–5): Little or no disability
- Grade II (6–10): Mild disability
- Grade III (11–20): Moderate disability
- Grade IV (≥21): Severe disability

**HIT-6 (Headache Impact Test) — Per Attack or Monthly**
- 6 items; score 36–78
- ≤49: Little or no impact
- 50–55: Some impact
- 56–59: Substantial impact
- ≥60: Severe impact

**PGIC (Patient Global Impression of Change)**
- 7-point scale: Much worse → Much better
- Used to assess treatment response over time

---

## Multi-Dimensional Symptom Tracking Matrix

For each attack, the full symptom burden is captured across dimensions:

| Dimension | Variables | Measurement |
|---|---|---|
| Pain | Severity, location, quality, duration | NRS + descriptors |
| Neurological | Aura type, duration, sequence | Checklist + timeline |
| Autonomic | Nausea, vomiting, pallor, sweating | Present/Absent + severity |
| Sensory | Photophobia, phonophobia, osmophobia, allodynia | Present/Absent + severity |
| Vestibular | Vertigo, dizziness, imbalance | Present/Absent + severity |
| Cognitive | Concentration, memory, speech | Self-rated 0–10 |
| Mood | Irritability, depression, anxiety | Self-rated 0–10 |
| Functional | Work, ADL, social impairment | Hours lost |
| Postdrome | Fatigue, fog, mood | Duration + severity |

---

## Symptom Trajectory Tracking

For early warning systems, symptom trajectory (change over time) is more informative than any single data point.

### Symptom Escalation Pattern
- Track NRS every 2–4 hours during attack
- Time to peak pain from onset
- Rate of escalation (fast = worse prognosis for triptan window)
- Allodynia onset time (before vs. after peak pain)

### Prodrome-to-Attack Conversion Rate
- Track: Did prodrome symptoms convert to full attack?
- Record: Prodrome days that did NOT convert to attack (false positives for prediction model)
- Important for calibrating prediction specificity

### Attack Resolution Pattern
- Time to pain freedom after medication
- Pain recurrence within 24 hours (recurrence definition: return of pain NRS ≥5 after being pain-free ≥2 hours)
- Sustained pain freedom at 24 hours

---

## Wearable and Passive Symptom Tracking

Augments self-reported symptom data with objective biomarkers:

### Heart Rate Variability (HRV)
- Decreases in parasympathetic tone (HRV reduction) documented 24–48 hours pre-attack
- Autonomic dysregulation detectable via smartwatch/chest strap
- Metric: SDNN, RMSSD (time-domain); LF/HF ratio (frequency-domain)

### Skin Conductance / Galvanic Skin Response (GSR)
- Reflects autonomic arousal / stress response
- Correlates with allodynia severity during attack

### Photoplethysmography (PPG)
- Changes in pulse waveform and amplitude detectable pre-attack
- Heart rate elevation before severe attacks documented

### Sleep Stage Data
- REM sleep disruption precedes migraines in some patients
- Sleep tracker (accelerometer + HRV): detect sleep fragmentation
- Wake after sleep onset (WASO) increase is a predictive signal

### Skin Temperature
- Peripheral vasoconstriction (cold hands/feet) sometimes precedes attack
- Facial temperature changes during attack

### Activity Tracking
- Reduced step count / activity in prodrome
- Behavioral change: less movement before attacks (fatigue signal)

---

## Symptom Tracking for Specific Migraine Subtypes

### Menstrual Migraine Tracking (Additional Fields)
- Menstrual cycle day (−28 to +14)
- Menstruation onset: date and time
- Dysmenorrhea severity (NRS)
- PMS symptom co-occurrence
- Hormonal contraceptive adherence

### Vestibular Migraine Tracking (Additional Fields)
- Vertigo type: spontaneous / positional / visually-induced
- Vertigo severity (NRS)
- Balance assessment (subjective)
- Nystagmus: Yes / No (if clinically assessed)
- Duration of vestibular episode (minutes)

### Chronic Migraine Tracking
- Headache days per month (total)
- Migraine days per month vs. tension-type days
- Medication use days per month (overuse flag)
- Sleep quality trend
- Mood disorder symptom co-tracking (PHQ-9 monthly)

### Pediatric Migraine Tracking (Additional Considerations)
- Bilateral location more common in children
- Shorter duration (1–72 hours vs. 4–72 hours)
- Abdominal migraine: episodic abdominal pain + nausea without headache
- Motion sickness history
- School absence tracking

---

## Symptom Tracking Data Schema for RAG System

### Per-Symptom Entry Structure

```json
{
  "patient_id": "string",
  "entry_timestamp": "ISO8601",
  "entry_phase": "prodrome | aura | ictal | postdrome | interictal",
  "hours_relative_to_attack": -36,
  "symptoms": {
    "fatigue": {"present": true, "severity": 3, "onset_time": "ISO8601"},
    "yawning": {"present": true, "severity": 2, "onset_time": "ISO8601"},
    "neck_pain": {"present": true, "severity": 2, "onset_time": "ISO8601"},
    "nausea": {"present": false},
    "photophobia": {"present": true, "severity": 1, "onset_time": "ISO8601"},
    "mood_irritability": {"present": true, "severity": 2},
    "cognitive_fog": {"present": true, "severity": 2}
  },
  "pain_nrs": null,
  "aura": {"present": false},
  "allodynia": {"present": false},
  "attack_confirmed_retrospectively": true,
  "hours_to_attack_onset": 34
}
```

### Feature Vector for ML Early Warning

| Feature | Type | Source |
|---|---|---|
| prodrome_symptom_count | Integer | Diary |
| prodrome_severity_sum | Integer | Diary |
| hours_since_first_prodrome | Float | Diary |
| fatigue_severity | 0–3 | Diary |
| neck_pain_present | Boolean | Diary |
| yawning_present | Boolean | Diary |
| mood_change_present | Boolean | Diary |
| photosensitivity_mild | Boolean | Diary |
| sleep_hours_last_night | Float | Diary/Wearable |
| hrv_rmssd_24h | Float | Wearable |
| stress_nrs | 0–10 | Diary |
| menstrual_cycle_day | Integer | Diary |
| caffeine_intake_mg | Float | Diary |
| water_intake_ml | Float | Diary |
| barometric_delta_hpa | Float | Weather API |
| days_since_last_attack | Integer | Derived |
| 7day_attack_frequency | Float | Derived |

---

## Key Facts for RAG Retrieval

- Four migraine phases: prodrome → aura → ictal → postdrome
- Prodrome onset: 6–72 hours before headache; 30–80% prevalence
- Top prodrome symptoms for prediction: neck pain (60–80%), fatigue, yawning, mood change, food cravings, photosensitivity
- Yawning is highly specific and early-onset prodrome marker — driven by hypothalamic dopaminergic activation
- Aura: 25–30% of migraineurs; visual most common; lasts 5–60 min; fully reversible
- Cortical spreading depression (CSD): neurological basis of aura; 2–3 mm/min propagation
- Allodynia: present in ~63% of attacks; indicates central sensitization; predicts poor triptan response if pre-treatment
- Postdrome: 80% prevalence; fatigue + cognitive fog most common; lasts 4–48 hours
- HRV reduction precedes attacks by 24–48 hours (wearable-detectable signal)
- Attack-to-prodrome time lag is individual — requires personalized calibration per patient
- Non-attack days must be tracked for ML baseline construction
- Vestibular migraine requires additional symptom dimensions (vertigo type, duration, balance)
- Menstrual cycle day is co-variate in all female patient models
- Allodynia onset time relative to pain onset predicts triptan efficacy window
