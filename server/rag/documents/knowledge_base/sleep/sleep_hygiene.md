# Sleep Hygiene — Knowledge Base for Migraine Early Warning RAG System

## Document Metadata
- **Domain:** Sleep Medicine / Neurology
- **Purpose:** RAG knowledge base for migraine early warning prediction
- **Tags:** sleep hygiene, migraine trigger, circadian rhythm, sleep quality, prevention

---

## 1. Overview of Sleep Hygiene

Sleep hygiene refers to a set of behavioral and environmental practices designed to promote consistent, high-quality sleep. Poor sleep hygiene is a well-established bidirectional trigger for migraines — it can precipitate attacks and migraines themselves can disrupt sleep architecture.

**Clinical relevance to migraine prediction:**
- Sleep disruption is among the top 5 reported migraine triggers globally
- Both insufficient sleep (< 6 hours) and excessive sleep (> 9 hours) are documented migraine precipitants
- Sleep hygiene interventions reduce migraine frequency by 20–40% in clinical studies
- Identifying night-before sleep quality patterns enables next-day migraine risk prediction

---

## 2. Sleep Duration & Migraine Risk

### Recommended Sleep Duration (National Sleep Foundation)
| Age Group | Recommended Hours | Migraine Risk if Deviated |
|-----------|-------------------|--------------------------|
| Adults (18–64) | 7–9 hours | High if < 6 or > 9 hours |
| Older adults (65+) | 7–8 hours | Moderate-High |
| Teenagers (14–17) | 8–10 hours | High if < 7 hours |

### Sleep Duration as a Predictive Signal
- **Short sleep (< 6 hrs):** Elevates cortisol, reduces pain threshold, increases central sensitization — all migraine risk factors
- **Long sleep (> 9 hrs):** Associated with "weekend migraine" phenomenon; serotonin dysregulation from schedule change
- **Sleep debt accumulation:** Cumulative sleep deficit over 3–5 days significantly increases migraine probability
- **Napping:** Naps > 30 minutes in migraine patients may indicate prodrome onset or worsen nocturnal sleep

**RAG Query Patterns:**
- "I only slept 5 hours last night" → HIGH migraine risk flag
- "I slept 10 hours on the weekend" → Moderate risk, check for sleep phase shift
- "I've been sleeping poorly for 3 days" → HIGH cumulative risk flag

---

## 3. Sleep Schedule Regularity

### Circadian Rhythm and Migraine
The suprachiasmatic nucleus (SCN) regulates circadian rhythms and is anatomically adjacent to trigeminal pathways implicated in migraine. Disruption of circadian timing directly lowers migraine threshold.

**Key principles:**
- Consistent wake time is more protective than consistent bedtime
- ± 30 minutes variation in wake time is considered "regular"; > 60 minutes is "irregular"
- Social jetlag (weekday vs. weekend sleep time difference > 1 hour) is associated with 22% higher migraine frequency
- Shift workers have 2–3× higher migraine prevalence than day workers

### Weekend Headache / "Letdown" Migraine
- Occurs on Saturday or Sunday mornings after stress reduction or sleep-in
- Mechanism: serotonin surge after prolonged sleep, caffeine withdrawal, stress-cortisol drop
- Prevention: maintain wake time within 1 hour of weekday schedule

**RAG Predictive Signal:**
- Wake time deviation > 1 hour from baseline → Elevated next-morning migraine risk
- Change in sleep schedule after high-stress period → High letdown-migraine risk

---

## 4. Sleep Environment Factors

### Light Exposure
- Blue light (400–490 nm) from screens suppresses melatonin by up to 85%
- Melatonin deficiency is linked to migraine; melatonin 3 mg has shown efficacy comparable to amitriptyline in some trials
- Room should be dark (< 5 lux) during sleep
- Light sensitivity (photophobia) is a migraine symptom but also a perpetuating factor when the sleep environment is poorly controlled
- Screen use within 60 minutes of bedtime delays sleep onset by 20–40 minutes on average

### Noise
- Ambient noise > 40 dB disrupts sleep architecture
- Phonophobia (noise sensitivity) in migraine patients creates a feedback loop: noise → poor sleep → migraine
- White noise or earplugs recommended for light sleepers with migraine

### Temperature
- Optimal bedroom temperature: 16–19°C (60–67°F)
- Body temperature must drop ~1°C for sleep onset; hot environments impair this process
- Temperature fluctuations during the night (e.g., HVAC cycling) increase arousals

### Mattress and Posture
- Poor cervical spine alignment during sleep → neck muscle tension → cervicogenic headache overlap with migraine
- Prone (face-down) sleeping associated with neck stiffness and morning headaches
- Recommended: side or back sleeping with head-neutral pillow

**RAG Predictive Signals from Environment:**
- Reported screen use past 10 PM → Melatonin suppression risk
- Reported sleeping in unfamiliar/bright/noisy environment → Disrupted sleep quality signal

---

## 5. Pre-Sleep Behaviors

### Caffeine
- Half-life: 5–7 hours; quarter-life persists into sleep period
- Caffeine within 6 hours of bedtime reduces total sleep time by ~45 minutes
- Caffeine withdrawal during oversleep is a major mechanism of weekend migraine
- Recommended cut-off: no caffeine after 2 PM for 10 PM sleepers

### Alcohol
- Acts as a sedative initially (shortens sleep onset latency) but fragments sleep in the second half
- Reduces REM sleep; REM disruption linked to next-day migraine
- Red wine, beer with sulfites, and aged spirits are direct vasodilatory migraine triggers
- Even 1 alcoholic drink within 3 hours of bedtime disrupts sleep quality

### Food
- Large meals within 2–3 hours of sleep impair sleep quality
- Hypoglycemia from long fasting overnight can trigger morning migraines
- High-tyramine foods (aged cheese, cured meats) near bedtime: dual risk of direct migraine trigger + sleep disruption
- Magnesium-rich bedtime snacks (pumpkin seeds, almonds) may be protective

### Physical Activity
- Vigorous exercise within 2–3 hours of bedtime: increases core body temperature, delays sleep onset
- Regular aerobic exercise (3–5×/week) reduces migraine frequency by ~40%
- Evening yoga/stretching (mild intensity) improves sleep quality without disrupting sleep onset

### Stress and Cognitive Arousal
- Pre-sleep rumination and work activity maintain sympathetic nervous system activation
- High evening cortisol → difficulty initiating sleep → shortened sleep → migraine risk
- Relaxation techniques (progressive muscle relaxation, diaphragmatic breathing) reduce sleep onset by ~15 minutes
- Cognitive Behavioral Therapy for Insomnia (CBT-I) is effective comorbid treatment in migraineurs

**RAG Predictive Signals from Pre-Sleep Behaviors:**
- Late caffeine/alcohol intake reported → Sleep quality risk, migraine next-day flag
- High stress or anxiety reported at night → Arousal-based sleep disruption risk
- Skipped dinner or long gap since last meal → Morning hypoglycemia migraine risk

---

## 6. Sleep Stages and Migraine Pathophysiology

### Normal Sleep Architecture
| Stage | Duration | Characteristics |
|-------|----------|-----------------|
| NREM Stage 1 (N1) | 5% of night | Light sleep, easily disrupted |
| NREM Stage 2 (N2) | 45–55% | Sleep spindles, K-complexes; restorative |
| NREM Stage 3 (N3) | 15–25% | Deep slow-wave sleep; physically restorative |
| REM | 20–25% | Dreaming; memory consolidation; emotionally restorative |

### Sleep Stage Disruption and Migraine
- **REM disruption** (alcohol, sleep apnea, REM sleep behavior disorder): Most strongly linked to migraine attacks
- Migraine attacks frequently occur during or just after REM sleep (early morning hours)
- REM is associated with irregular breathing and altered autonomic tone — can lower migraine threshold
- **N3 disruption** (pain arousals, nocturia, noise): Reduces physical recovery, increases next-day pain sensitivity
- Bruxism (teeth grinding) peaks in N2/REM transition — common migraine comorbidity, worsens morning head pain

### The REM-Migraine Connection
- Serotonin (5-HT) neuronal firing ceases during REM sleep
- Abrupt rise in 5-HT at REM offset may trigger cortical spreading depression (CSD)
- CSD is the neurological substrate of migraine aura and initiation
- Early morning migraines (4–8 AM) correspond to final REM cycles of the night

---

## 7. Sleep Hygiene Recommendations for Migraineurs

### Behavioral Recommendations
1. **Maintain fixed wake time** — 7 days/week within ±30 minutes
2. **Target 7–8 hours** of sleep, same window nightly
3. **No screens 60 minutes before bed** — use blue-light filters after sunset
4. **No caffeine after 2 PM**; taper total daily caffeine if > 200 mg/day
5. **Avoid alcohol within 3 hours of bedtime**
6. **Cool, dark, quiet bedroom** — blackout curtains, earplugs/white noise if needed
7. **Wind-down routine 30–60 min pre-sleep**: reading, light stretching, breathing exercises
8. **Avoid naps > 20 minutes**; if needed, nap before 3 PM
9. **Get out of bed if not asleep within 20 minutes** (stimulus control therapy)
10. **Keep a sleep diary** — correlate sleep metrics with headache diary

### Pharmacological Sleep Aids and Migraine Interaction
| Agent | Effect on Sleep | Migraine Relevance |
|-------|----------------|-------------------|
| Melatonin (0.5–3 mg) | Promotes sleep onset | May reduce migraine frequency |
| Diphenhydramine (Benadryl) | Antihistamine sedation | Masks sleep quality; not recommended long-term |
| Zolpidem (Ambien) | Sleep initiation | Can suppress N3; rebound insomnia risk |
| Amitriptyline (low dose) | Increases N3, reduces arousals | First-line for comorbid insomnia + migraine |
| Topiramate | Mild sedation | Migraine preventive; may worsen cognitive arousal |

---

## 8. Sleep Tracking Metrics Relevant to Migraine Prediction

### Wearable/Self-Report Metrics to Monitor
| Metric | Normal Range | Migraine Risk Threshold |
|--------|-------------|------------------------|
| Total sleep time | 7–9 hours | < 6 hours or > 9 hours |
| Sleep efficiency | > 85% | < 75% |
| Sleep onset latency | 10–20 min | > 30 min |
| Wake after sleep onset (WASO) | < 30 min | > 60 min |
| REM % of total sleep | 20–25% | < 15% (REM suppression) |
| Heart rate variability (HRV) | Individual baseline | > 20% below baseline |
| Resting heart rate during sleep | Individual baseline | Elevated > 10 bpm = autonomic arousal |

### Multi-Day Pattern Signals
- **3 consecutive nights of < 7 hours** → High migraine risk next day
- **Abrupt increase in sleep time** (> 1.5 hrs above baseline) → Possible prodrome or letdown migraine risk
- **Night sweats / frequent awakenings reported** → Possible hypoglycemia, apnea, or anxiety loop
- **REM behavior reports (acting out dreams)** → Screen for REM Sleep Behavior Disorder

---

## 9. Comorbidities Linking Sleep Hygiene and Migraine

- **Anxiety/Depression:** Bidirectionally worsen both sleep and migraine; treat concurrently
- **Obesity (BMI > 30):** Independently increases migraine frequency; associated with sleep apnea
- **Hypothyroidism:** Causes hypersomnia and increases headache burden
- **Iron-deficiency anemia:** Causes restless legs syndrome (RLS), disrupting sleep
- **Fibromyalgia:** Shares sleep-pain sensitization pathways with migraine

---

## 10. RAG System Usage Notes

### High-Priority Trigger Phrases to Flag
- "I only slept X hours" (where X < 6)
- "I slept in today / slept a lot"
- "I had trouble sleeping last night"
- "I kept waking up"
- "I've been stressed and can't sleep"
- "I had a few drinks before bed"
- "I had coffee late"
- "I didn't sleep well all week"

### Risk Scoring Contribution (suggested weights)
| Sleep Factor | Suggested Risk Weight |
|-------------|----------------------|
| Sleep < 6 hours | High (+3) |
| Sleep > 9 hours | Moderate (+2) |
| Sleep disrupted (WASO reported) | Moderate (+2) |
| Irregular schedule (> 1 hr deviation) | Moderate (+2) |
| Late caffeine intake | Low-Moderate (+1) |
| Alcohol pre-sleep | Low-Moderate (+1) |
| 3+ consecutive poor nights | High (+3) |
| Good sleep (7–8 hrs, no disruption) | Protective (−1) |

---

## References & Guidelines
- American Academy of Sleep Medicine (AASM) Clinical Practice Guidelines
- International Headache Society (IHS) — ICHD-3 Criteria
- Rains JC (2018) — Sleep and Migraine: Assessment and Treatment of Comorbid Sleep Disorders
- Pavlovic JM et al. (2020) — Trigger factors and premonitory features of migraine attacks
- Bigal ME et al. — Sleep disorders and migraine: Review of literature and prognosis
- National Sleep Foundation — Sleep Duration Recommendations (2015, updated 2022)
