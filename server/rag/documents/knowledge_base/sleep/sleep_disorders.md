# Sleep Disorders — Knowledge Base for Migraine Early Warning RAG System

## Document Metadata
- **Domain:** Sleep Medicine / Neurology
- **Purpose:** RAG knowledge base for migraine early warning prediction
- **Tags:** sleep disorders, insomnia, sleep apnea, circadian rhythm disorder, migraine comorbidity, REM disorder

---

## 1. Overview: Sleep Disorders and Migraine

Sleep disorders represent a major class of migraine comorbidities and bidirectional triggers. Approximately 50% of chronic migraine patients have a concurrent diagnosable sleep disorder. Sleep disorders impair the restorative processes that keep migraine threshold high, and migraine pain itself perpetuates sleep fragmentation, creating a reinforcing cycle.

**Core clinical facts:**
- Sleep disorders increase migraine attack frequency by 2–8× depending on disorder severity
- Treating comorbid sleep disorders reduces migraine days per month by an average of 30–50%
- Obstructive Sleep Apnea (OSA) alone is present in ~36% of chronic migraine patients vs. ~14% of general population
- Morning headache is the most common symptom overlap between sleep disorders and migraine

---

## 2. Insomnia Disorder

### Definition
Difficulty initiating or maintaining sleep, or early morning awakening, occurring ≥ 3 nights/week for ≥ 3 months, with daytime impairment. Not better explained by another sleep or medical disorder.

### Subtypes
- **Sleep onset insomnia:** Difficulty falling asleep (latency > 30 min)
- **Sleep maintenance insomnia:** Frequent awakening, WASO > 60 min
- **Early morning awakening insomnia:** Waking > 30 min before desired time
- **Mixed insomnia:** Combination of above (most common in migraine patients)

### Insomnia–Migraine Relationship
- Insomnia is present in ~50% of episodic and ~80% of chronic migraine patients
- Hyperarousal (elevated nocturnal cortisol, elevated sympathetic tone) is shared mechanism
- Insomnia increases allodynia (skin sensitivity) — a marker of central sensitization in migraine
- Each additional night of insomnia increases next-day migraine probability by ~17%
- Chronic insomnia accelerates episodic → chronic migraine transformation

### Diagnostic Criteria Markers (for RAG pattern recognition)
- Reported difficulty falling asleep most nights
- Reported waking frequently and unable to return to sleep
- Reported feeling unrefreshed upon waking despite sufficient time in bed
- Daytime fatigue, cognitive impairment, mood disturbance reported alongside headache

### Treatment Relevance
| Treatment | Sleep Effect | Migraine Effect |
|-----------|-------------|-----------------|
| CBT-I (Cognitive Behavioral Therapy for Insomnia) | First-line; high efficacy | Reduces migraine frequency |
| Sleep restriction therapy | Consolidates sleep | Temporarily worsens headache; long-term benefit |
| Amitriptyline 10–25 mg | Increases sleep depth | Migraine preventive |
| Mirtazapine | Increases N3, reduces arousals | Used for comorbid depression+migraine+insomnia |
| Melatonin 3–5 mg | Improves circadian alignment | Some evidence for migraine prevention |
| Doxepin (low-dose) | Sleep maintenance | Approved for chronic insomnia |

**RAG Predictive Signal:**
- Chronic insomnia history flagged → Elevated baseline migraine risk
- Acute insomnia episode (1–3 nights) → Next-day migraine risk elevated

---

## 3. Obstructive Sleep Apnea (OSA)

### Definition
Recurrent episodes of partial (hypopnea) or complete (apnea) upper airway obstruction during sleep, causing oxygen desaturation and arousal. Diagnosed by AHI (Apnea-Hypopnea Index):
- Mild: AHI 5–14 events/hour
- Moderate: AHI 15–29 events/hour
- Severe: AHI ≥ 30 events/hour

### OSA–Migraine Relationship
- Morning headache is a cardinal symptom of OSA (mechanism: nocturnal hypercapnia + cerebral vasodilation)
- OSA-related morning headache can be indistinguishable from migraine; differentiating via AHI is essential
- Nocturnal hypoxia triggers cortical spreading depression (CSD) — the neurological basis of migraine
- OSA causes REM sleep suppression → increases susceptibility to REM-rebound migraines
- Severe OSA (AHI > 30) associated with chronic migraine 3× more frequently than controls
- CPAP therapy reduces migraine frequency by 50–70% in confirmed OSA + migraine patients

### Risk Factors for OSA (also migraine risk amplifiers)
- BMI > 30 (obesity)
- Male sex, post-menopausal women
- Neck circumference > 40 cm (women), > 43 cm (men)
- Retrognathia, large tonsils
- Alcohol use (relaxes pharyngeal muscles)
- Nasal congestion / deviated septum

### Symptom Overlap with Migraine
| Symptom | OSA | Migraine |
|---------|-----|----------|
| Morning headache | ✓ | ✓ |
| Cognitive fog | ✓ | ✓ (postdrome) |
| Fatigue | ✓ | ✓ |
| Nausea | Rare | ✓ |
| Photophobia | ✗ | ✓ |
| Witnessed apnea/snoring | ✓ | ✗ |
| Nocturia | ✓ | ✗ |

### Screening Tool: STOP-BANG Questionnaire (for RAG flagging)
- **S**noring: Do you snore loudly?
- **T**ired: Often tired/fatigued during the day?
- **O**bserved: Anyone observed you stop breathing?
- **P**ressure: Do you have/treated high blood pressure?
- **B**MI: > 35?
- **A**ge: > 50?
- **N**eck: > 40 cm?
- **G**ender: Male?

Score ≥ 3 = High OSA risk → Refer for sleep study

**RAG Predictive Signal:**
- Snoring + morning headache reported → Flag OSA risk; morning migraine
- Witnessed apnea reported → HIGH OSA + migraine comorbidity flag
- Fatigue + morning headache + obesity risk factors → Elevated OSA screening needed

---

## 4. Restless Legs Syndrome (RLS) and Periodic Limb Movement Disorder (PLMD)

### RLS Definition
Urge to move legs, usually with uncomfortable sensations, that:
- Worsens at rest/inactivity
- Partially relieved by movement
- Worse in the evening/night
- Not explained by another behavioral or medical condition

### RLS–Migraine Relationship
- RLS prevalence in migraine patients: ~17–24% vs. ~7% in general population
- Shared pathophysiology: dopaminergic dysfunction + iron deficiency
- Serum ferritin < 50 ng/mL associated with both RLS severity and migraine frequency
- RLS disrupts sleep onset and early NREM sleep → reduces restorative sleep → increases migraine risk
- Dopamine agonists (pramipexole, ropinirole) treat RLS and may modulate migraine via dopaminergic pathways

### PLMD
- Rhythmic limb movements during sleep (NREM) causing arousals
- Often co-occurs with RLS
- Causes sleep fragmentation → reduced N3 → elevated pain threshold lowering

**RAG Predictive Signal:**
- Reported leg discomfort at night/restlessness → RLS flag; iron deficiency + migraine co-risk
- Partner reporting repetitive leg movements during sleep → PLMD flag

---

## 5. Circadian Rhythm Sleep-Wake Disorders (CRSWDs)

### Overview
Misalignment between the endogenous circadian clock and the external environment or desired sleep-wake schedule. Highly relevant to migraine due to shared hypothalamic and SCN involvement.

### Types and Migraine Relevance

#### 5.1 Delayed Sleep-Wake Phase Disorder (DSWPD)
- Sleep onset delayed by ≥ 2 hours relative to societal norms (e.g., natural sleep 2 AM–10 AM)
- Most common in adolescents and young adults
- When forced to wake early (school, work), creates chronic sleep debt
- Associated with increased migraine frequency in adolescent populations
- Melatonin (0.5 mg, 5–6 hours before desired sleep) + light therapy corrects phase

#### 5.2 Advanced Sleep-Wake Phase Disorder (ASWPD)
- Sleep onset extremely early (7–9 PM), wake 3–5 AM
- More common in older adults
- Early morning awakening with inability to return to sleep → REM truncation → migraine risk
- Evening bright light therapy delays circadian phase

#### 5.3 Shift Work Sleep Disorder
- Insomnia during desired sleep time + excessive sleepiness during work hours due to shift schedule
- 2–3× higher migraine prevalence in shift workers
- Night shift workers have highest migraine burden (misalignment of light/dark + sleep deprivation combined)
- Melatonin before daytime sleep + strategic light avoidance supports adaptation

#### 5.4 Social Jetlag
- Discrepancy between biological clock and social schedule (typically weekday vs. weekend)
- Each 1-hour increment of social jetlag → ~13% increase in migraine attack probability
- Most relevant to the "Monday/weekend migraine" pattern

#### 5.5 Irregular Sleep-Wake Rhythm Disorder
- No definable circadian rhythm; sleep fragmented into multiple bouts
- Associated with neurodegeneration (Alzheimer's, Parkinson's)
- Migraine may be less prominent but chronic headache common

**RAG Predictive Signal:**
- Night shift work reported → Chronic elevated migraine risk
- Consistent very late bedtime (after 1 AM) with early forced waking → DSWPD pattern, high migraine risk
- Weekend schedule shift > 2 hours → Social jetlag + letdown migraine risk

---

## 6. REM Sleep Behavior Disorder (RBD)

### Definition
Acting out vivid, often frightening dreams during REM sleep due to loss of normal REM atonia. Ranges from vocalizations to complex motor behaviors (kicking, punching, falling out of bed).

### RBD–Migraine–Neurology Connection
- RBD is a prodromal marker for synucleinopathies (Parkinson's disease, Lewy Body Dementia, MSA)
- Migraine with aura is associated with higher rates of RBD
- RBD disrupts REM sleep continuity → impairs emotional memory processing, increases next-day pain sensitivity
- Shared brainstem (locus coeruleus, raphe nuclei) pathology links RBD, migraine, and neurodegeneration

### Distinguishing RBD from Normal Dreaming
| Feature | Normal Dreams | RBD |
|---------|--------------|-----|
| Motor activity | Absent (atonia) | Present |
| Injury to self/partner | Rare | Common |
| Dream recall | Variable | Usually vivid, violent |
| Timing | Second half of night | Second half of night |
| Age of onset | Any | Usually > 50, M > F |

**RAG Predictive Signal:**
- Reported acting out dreams, falling out of bed, injuring partner → RBD screening needed; elevated migraine + neurological risk

---

## 7. Hypersomnia Disorders

### 7.1 Narcolepsy
- Excessive daytime sleepiness + cataplexy (sudden muscle weakness triggered by emotion)
- Type 1: with cataplexy (hypocretin/orexin deficiency)
- Type 2: without cataplexy
- Orexin system regulates arousal, pain, and autonomic tone — directly relevant to migraine pathophysiology
- Migraine prevalence in narcolepsy: ~20–30%
- Excessive REM intrusions in narcolepsy → repeated REM-onset migraine vulnerability windows

### 7.2 Idiopathic Hypersomnia
- Excessive daytime sleepiness without identifiable cause
- Long sleep times (10–12 hours) without restorative effect
- Associated with morning headache and cognitive fog
- Sleep inertia (prolonged grogginess upon waking) can mask migraine symptoms

### 7.3 Kleine-Levin Syndrome (KLS)
- Rare recurrent hypersomnia (episodes of 18–20 hours/day sleep for days to weeks)
- Episodes include cognitive disturbance, hyperphagia, hypersexuality
- Migraine-like headaches reported in ~30% during/after episodes

**RAG Predictive Signal:**
- Reported excessive daytime sleepiness despite adequate night sleep → Screen for narcolepsy/IH; flag morning headache risk
- Sudden sleep attacks or cataplexy reported → Narcolepsy referral needed

---

## 8. Parasomnias

### 8.1 Sleepwalking (Somnambulism)
- NREM arousal disorder; occurs in N3 sleep
- Patients are confused, poorly responsive, amnestic
- Triggers: sleep deprivation, fever, stress, medications (zolpidem)
- Sleep deprivation trigger shared with migraine; sleepwalking episodes cause N3 fragmentation
- Next-morning fatigue and headache are common after episodes

### 8.2 Sleep Terrors (Night Terrors)
- Abrupt arousal from N3 with intense fear, vocalization, autonomic activation (tachycardia, diaphoresis)
- Associated with sympathetic surge → elevated cortisol → next-day migraine risk
- More common in children; relevant to pediatric migraine prediction

### 8.3 Sleep-Related Headache Disorders
These are distinct from migraine but must be differentiated:

#### Hypnic Headache ("Alarm Clock Headache")
- Occurs exclusively from sleep, usually 1–3 AM
- Bilateral, mild-moderate, 15–180 minutes duration
- No autonomic features, no photophobia/phonophobia (differentiates from migraine)
- Treatment: caffeine at bedtime (paradoxically effective), lithium carbonate, indomethacin
- **Distinguishing from Migraine:** Occurs ONLY during sleep; older age (> 50); lacks migraine features

#### Exploding Head Syndrome
- Perceived loud noise/explosion sensation at sleep onset or offset
- Not painful; associated with fear and arousal
- Related to sensory processing during state transitions
- May co-occur with migraine; not a direct trigger but increases sleep anxiety

### 8.4 Bruxism (Sleep Bruxism)
- Rhythmic masticatory muscle activity (teeth grinding/clenching) during sleep
- Occurs predominantly in N2 and REM transitions
- Causes: stress, anxiety, SSRI use, caffeine, obstructive airway events (micro-arousals from OSA)
- **Migraine connection:** Bruxism is present in 25–50% of migraine patients
  - Masseter/temporalis muscle hyperactivation → referred pain to temples/forehead
  - Worsens morning headache and makes it indistinguishable from migraine
  - Bruxism treatment (occlusal splint, botulinum toxin to masseters) reduces headache frequency

**RAG Predictive Signal:**
- Jaw pain or sore teeth on waking reported → Bruxism flag; morning migraine amplification risk
- Partner reports teeth grinding during sleep → Bruxism + fragmented sleep signal

---

## 9. Sleep Disorders Secondary to Medical/Psychiatric Conditions

### 9.1 Anxiety and Sleep
- Anxiety disorders cause hyperarousal insomnia (most common psychiatric sleep comorbidity)
- GAD, PTSD, panic disorder all impair sleep onset and maintenance
- Nocturnal panic attacks can mimic sleep terrors; occur in NREM
- Anxiety + poor sleep + migraine form a triad that requires integrated treatment

### 9.2 Depression and Sleep
- Hypersomnia or insomnia, early morning awakening, REM sleep abnormalities
- REM latency is shortened in depression (REM appears earlier → REM abnormalities amplified)
- Depression doubles migraine chronification risk
- Antidepressants for depression (especially SNRIs, TCAs) are also migraine preventives

### 9.3 Chronic Pain and Sleep
- Pain-arousal cycles: pain causes microarousals → sleep fragmentation → increased pain sensitivity → more frequent migraine
- Alpha-delta sleep intrusion (alpha waves intrude into delta/N3 sleep) — common in fibromyalgia and chronic migraine
- Treatment of the primary pain condition improves sleep; CBT-I adapted for chronic pain is effective

---

## 10. Sleep Disorder Diagnostic Tools (for Context-Aware RAG Responses)

### Validated Self-Report Scales
| Scale | Measures | Cutoff/Clinical Relevance |
|-------|----------|--------------------------|
| Pittsburgh Sleep Quality Index (PSQI) | Overall sleep quality (7 domains) | Score > 5 = poor sleep quality |
| Epworth Sleepiness Scale (ESS) | Daytime sleepiness | Score ≥ 10 = excessive sleepiness |
| Insomnia Severity Index (ISI) | Insomnia severity | Score ≥ 15 = moderate-severe insomnia |
| STOP-BANG | OSA screening | Score ≥ 3 = high OSA risk |
| RLS Diagnostic Criteria | RLS presence | 4/4 criteria met = positive |
| Morningness-Eveningness Questionnaire (MEQ) | Circadian chronotype | Extreme evening type = DSWPD risk |

### Objective Diagnostic Methods
| Method | Best For | Clinical Setting |
|--------|----------|-----------------|
| Polysomnography (PSG) | OSA, RBD, PLMD, sleep architecture | Sleep lab |
| Home sleep apnea test (HSAT) | OSA screening | Home |
| Actigraphy | Circadian rhythm disorders, sleep-wake patterns | Wrist-worn 7–14 days |
| Multiple Sleep Latency Test (MSLT) | Narcolepsy diagnosis | Sleep lab (following PSG) |
| Maintenance of Wakefulness Test (MWT) | Occupational safety in sleepiness | Sleep lab |

---

## 11. Specific Sleep Disorder Impact on Migraine Frequency (Summary Table)

| Sleep Disorder | Migraine Prevalence vs. General Pop | Primary Mechanism | Treatment Impact on Migraine |
|----------------|-------------------------------------|-------------------|------------------------------|
| Insomnia | 3–5× higher | Hyperarousal, cortisol, central sensitization | CBT-I reduces 30–50% migraine days |
| Obstructive Sleep Apnea | 2–3× higher | Hypoxia, REM suppression, morning vasodilation | CPAP reduces 50–70% |
| RLS | 2–3× higher | Sleep fragmentation, dopamine/iron pathways | Dopamine agonists + iron supplementation |
| PLMD | 1.5–2× higher | NREM fragmentation | Treat underlying cause |
| DSWPD/Shift work | 2–3× higher | Circadian misalignment, chronic sleep debt | Melatonin + light therapy |
| Bruxism | 3× higher | Muscle hyperactivation, jaw/temple pain | Splint, botox, stress management |
| RBD | 2× higher | REM disruption, brainstem pathology | Clonazepam, melatonin |
| Narcolepsy | 2× higher | Orexin deficiency, REM instability | Stimulants + sodium oxybate |

---

## 12. RAG System Usage Notes

### High-Priority Disorder Detection Phrases
- "I snore loudly / partner says I stop breathing" → OSA screen
- "My legs feel restless / crawling sensation at night" → RLS
- "I act out my dreams / fell out of bed" → RBD
- "I can't fall asleep no matter what / my mind races" → Onset insomnia / anxiety-insomnia
- "I keep waking up at 3 AM and can't go back to sleep" → Maintenance insomnia / depression
- "I feel exhausted even after 10 hours of sleep" → Hypersomnia / OSA / depression
- "I grind my teeth / jaw is sore in the morning" → Bruxism
- "I work night shifts" → Shift work disorder
- "I naturally fall asleep very late and hate waking up early" → DSWPD

### Composite Risk Flags for Migraine Prediction
| Combination | Risk Level |
|-------------|-----------|
| Insomnia + anxiety + migraine history | VERY HIGH |
| OSA symptoms + morning headache | HIGH |
| Shift work + 3+ nights < 6 hrs | VERY HIGH |
| RLS + iron deficiency + poor sleep | HIGH |
| Bruxism + stress + poor sleep | HIGH |
| Depression + short REM latency + early waking | HIGH |
| Weekend oversleep + social jetlag + caffeine use | MODERATE-HIGH |

### Differential Diagnosis Support for RAG
When user reports "morning headache," the RAG system should consider and differentiate:
1. **Migraine** — photophobia, phonophobia, nausea, unilateral, throbbing
2. **OSA headache** — bilateral, < 4 hrs duration, resolves with waking/CPAP
3. **Hypnic headache** — only during sleep, older adult, no autonomic features
4. **Tension-type headache** — bilateral, pressing/tightening, no nausea/photophobia
5. **Medication overuse headache** — daily, correlates with analgesic frequency
6. **Bruxism headache** — temples + jaw, worse with clenching, morning jaw pain

---

## References & Guidelines
- American Academy of Sleep Medicine — International Classification of Sleep Disorders, 3rd Edition (ICSD-3)
- International Headache Society — ICHD-3 Criteria (2018)
- Rains JC & Poceta JS (2006) — Headache and sleep disorders: review and clinical implications
- Lateef T et al. — Sleep problems in young adults: Association with migraine
- Cho SJ et al. — Sleep and the risk of migraine chronification
- Vgontzas A & Pavlovic JM (2018) — Sleep disorders and migraine: Review of literature and prognosis
- Kristiansen HA et al. — Migraine and sleep apnea: prevalence and overlap
- Ferini-Strambi L et al. — RLS and migraine: shared mechanisms
- Dodick DW et al. — Sleep apnea and headache: pathophysiological mechanisms
