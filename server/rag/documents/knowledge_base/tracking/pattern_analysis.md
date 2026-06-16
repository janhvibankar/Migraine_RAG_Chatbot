# Pattern Analysis in Migraine Early Warning Prediction

## Overview

Pattern analysis in migraine refers to the systematic identification of recurring temporal, physiological, behavioral, and environmental patterns that precede migraine attacks. It transforms raw symptom and diary data into actionable, personalized predictive signals. For a RAG-based early warning system, pattern analysis defines the features, relationships, and decision rules the system uses to anticipate attacks — enabling timely intervention before headache onset.

---

## Why Pattern Analysis Is Central to Migraine Prediction

- **Migraine is not random:** Attacks follow identifiable biological rhythms and personalized trigger combinations
- **Individual variability is high:** Population-level triggers differ significantly from individual-level triggers
- **Prodrome window is time-limited:** Early warning is only useful if the prediction is made ≥6 hours before attack — pattern recognition defines that window
- **Multi-factorial:** No single feature reliably predicts an attack; pattern analysis integrates multiple signals into a composite prediction

---

## Types of Patterns in Migraine

### 1. Temporal Patterns

#### Attack Frequency Patterns
- **Episodic migraine:** <15 headache days/month
- **High-frequency episodic:** 10–14 headache days/month
- **Chronic migraine:** ≥15 headache days/month, of which ≥8 are migraine, for ≥3 months
- **Transformed migraine:** Gradual increase from episodic to chronic — early pattern detection critical

#### Circadian (Time-of-Day) Patterns
- Peak attack onset: early morning (4–9 AM) — most common
- Associated with REM sleep rebound, cortisol nadir, and serotonin trough
- Second peak: afternoon (~3–6 PM)
- Fewer attacks during sleep in most patients
- "Alarm clock" headache: waking with migraine — consider sleep apnea, cluster headache

#### Day-of-Week Patterns
- **"Weekend migraine" / "Let-down" migraine:** Occurs Friday evening / Saturday morning
- Mechanism: Cortisol drop after work-week stress; caffeine withdrawal; sleep schedule change; oversleeping
- Identification: 3+ events on same day of week over 3 months = day-of-week pattern

#### Monthly / Menstrual Patterns (Women)
- Map attacks to menstrual cycle day (day 1 = first day of menstruation)
- **High-risk window:** Day −2 to +3 (perimenstrual window)
- **Secondary peak:** Ovulatory (day ~14) — mid-cycle estrogen surge then drop
- Calculate: Proportion of attacks in perimenstrual window vs. rest of cycle
- ≥2/3 cycles with perimenstrual attacks = Menstrually Related Migraine classification

#### Seasonal Patterns
- Some patients have higher attack frequency in specific seasons
- Summer: Heat, dehydration, barometric instability
- Spring/Autumn: Rapid weather changes, allergen triggers
- Winter: Low light, altered sleep cycles
- Track: Monthly attack rate over 12+ months

#### Annual/Long-Term Trends
- Attack frequency trends over years (worsening, stable, improving)
- Correlation with life events: pregnancy, menopause, stress events, new medications
- Medication overuse development pattern

---

### 2. Prodrome Patterns

#### Individual Prodrome Signature
Each patient has a personalized combination of prodrome symptoms that consistently precedes their attacks. The RAG system must learn this individual signature.

**Steps to Identify Prodrome Signature:**
1. Extract all diary entries with confirmed attack outcomes
2. For each attack, identify symptoms logged in the prior 6–72 hours
3. Compute frequency of each symptom across attacks (symptom hit rate)
4. Rank symptoms by hit rate and specificity (appears before attacks but not on non-attack days)
5. Identify the minimum reliable symptom combination (e.g., "fatigue + neck pain" = 85% attack predictive)

#### Symptom-to-Attack Timing Analysis
- For each prodrome symptom, calculate mean and SD of hours before attack onset
- Build per-symptom timing distribution
- Example: Neck pain appears mean 18h before attack (SD ±6h); yawning appears mean 12h before (SD ±4h)
- Combined symptom timing creates a "countdown window" for early warning

#### Prodrome Progression Analysis
- Does symptom severity escalate as attack approaches?
- Escalating fatigue + adding neck pain + emerging photosensitivity = high-probability attack trajectory
- Track symptom accumulation rate (new symptoms per hour)

#### False Positive Prodrome Analysis
- Days when prodrome-like symptoms occurred without attack conversion
- Identify distinguishing features: stress-only prodromes don't convert; sleep-deprivation + stress = higher conversion
- Reduces alert fatigue in the prediction system

---

### 3. Trigger Patterns

#### Trigger Frequency Analysis
- For each suspected trigger, calculate:
  - **Prevalence rate:** % of attacks preceded by this trigger in prior 24–48h
  - **Base rate:** % of all days when this trigger is present (trigger-day frequency)
  - **Positive Predictive Value (PPV):** P(attack | trigger present)
  - **Attributable Risk:** Excess attack rate on trigger days vs. non-trigger days

#### Common Trigger Categories and Population Prevalence

| Trigger | Approximate Prevalence in Migraineurs |
|---|---|
| Stress / psychological tension | 50–80% |
| Sleep deprivation | 50–75% |
| Menstrual cycle (women) | 50–70% |
| Weather / barometric pressure change | 40–60% |
| Skipped meals / fasting | 40–60% |
| Dehydration | 40–55% |
| Alcohol (especially red wine) | 35–50% |
| Bright or flickering light | 30–50% |
| Oversleeping | 25–50% |
| Physical exertion | 20–45% |
| Caffeine withdrawal | 25–40% |
| Strong odors | 25–40% |
| Chocolate | 20–30% |
| Aged cheese / tyramine | 15–25% |
| Hormonal contraceptive changes | Variable |

#### Trigger Combination Analysis (Interaction Effects)
- Individual triggers have moderate PPV; combinations have higher PPV
- Example: Sleep deprivation alone PPV = 30%; Sleep deprivation + stress + menstrual day −1 PPV = 75%
- Use association rule mining (Apriori algorithm) on trigger co-occurrence data
- Common high-risk combinations:
  - Sleep <6h + stress NRS >7 + skipped meal
  - Menstrual day −2/−1 + alcohol + poor sleep
  - Weather front + caffeine reduction + dehydration
  - Ovulation + physical exertion + skipped meal

#### Trigger Threshold Patterns
- Many triggers are **dose-dependent** — below a threshold, no attack; above, attack triggered
- Example: Alcohol: 1 glass = no attack; 3 glasses = attack
- Sleep: 7h = safe; 5h = risk; 4h = high risk
- Thresholds are individual — require personalized modeling

#### "Threshold Summation" Model
The most useful clinical model: each trigger/stressor adds to a cumulative vulnerability score; attack occurs when threshold is crossed.

```
Attack Risk = Σ(weighted trigger values) > Individual Threshold
```

Example weights (individualized via diary analysis):
- Menstrual day −1: +3.5
- Sleep <5h: +3.0
- Stress NRS >7: +2.5
- Skipped meal: +1.5
- Red wine 2+ units: +2.0
- Barometric drop >5 hPa: +1.5
- Dehydration: +1.0
- Individual threshold (from historical data): 6.0

---

### 4. Physiological Signal Patterns

#### Heart Rate Variability (HRV) Patterns
- **Pre-attack HRV signature:** RMSSD declines 24–48h before attack onset in many patients
- **Sympathetic shift:** LF/HF ratio increases pre-attack (sympathetic dominance)
- **Recovery pattern:** HRV returns to baseline during postdrome
- Individual calibration required (baseline HRV varies widely between individuals)
- Threshold detection: >2 SD drop from personal 7-day rolling mean = warning signal

#### Sleep Pattern Analysis
- **REM sleep disruption:** Reduced REM % precedes some attacks (polysomnography / wearable)
- **Sleep fragmentation:** Increased WASO (wake after sleep onset) in pre-attack nights
- **Sleep duration patterns:** Bimodal risk — both too short (<6h) and too long (>9h) increase attack risk
- **Sleep debt accumulation:** Cumulative deficit over 72h better predictor than single-night duration

#### Activity Pattern Analysis
- **Pre-attack hypoactivity:** Step count reduction 24–48h before attack (fatigue prodrome)
- **Post-attack recovery:** Gradual return to baseline activity over 1–2 days postdrome
- **Exertion trigger:** Sudden high-intensity exercise burst triggering attack in susceptible patients

#### Physiological Patterns via Wearable Data

| Signal | Pre-Attack Change | Detection Window |
|---|---|---|
| HRV (RMSSD) | Decrease >2SD from baseline | 24–48h before |
| Resting heart rate | Slight elevation | 12–24h before |
| Skin temperature | Variable (vasoconstriction) | 6–12h before |
| Sleep efficiency | Decrease | Night before attack |
| Step count | Decrease (fatigue prodrome) | 24–48h before |
| SpO2 | Generally stable; drops in sleep apnea cases | Variable |

---

### 5. Weather and Environmental Patterns

#### Barometric Pressure
- **Most studied environmental trigger**
- **Drop in pressure** (approaching storm front): most commonly reported
- Change threshold: >5–7 hPa change within 24h frequently cited
- Some patients are sensitive to pressure rise
- Individual variability: ~40–60% of migraineurs report weather sensitivity
- Use local weather API (hourly pressure data) to compute delta values

#### Temperature Patterns
- Extreme heat increases attack frequency (dehydration + vasodilation mechanism)
- Rapid temperature change (>10°C in 24h) is a trigger for some patients
- Chinook/Föhn wind effect: warm descending wind associated with migraine clusters in affected regions

#### Light Patterns
- High UV days, intense sunlight
- Flickering light sources (fluorescent, screens)
- Light sensitivity during pattern analysis = photophobia baseline elevation

#### Humidity and Ozone
- High humidity combined with heat = elevated risk
- Elevated ozone levels have been associated with headache increase in some studies

---

### 6. Behavioral and Lifestyle Patterns

#### Sleep Regularity Pattern
- **Social jetlag:** Difference in sleep timing between weekdays and weekends
- >1 hour social jetlag associated with increased migraine frequency
- Track: Bedtime variance and wake time variance across the week

#### Dietary Pattern Analysis
- Identify specific foods with high temporal correlation to attacks (lag: 0–24h)
- Caffeine intake curve: track daily intake trend; sudden cessation = withdrawal risk
- Meal timing regularity: calculate mean and variance of meal intervals
- Identify fasting days (no food >5h) and correlate with attack onset

#### Hydration Pattern
- Track daily fluid intake vs. attack occurrence
- Low hydration threshold: <1.5L/day associated with increased frequency in some patients

#### Exercise Pattern
- Regular moderate exercise: protective against migraine (reduces frequency over time)
- Sudden intense exertion: acute trigger for exertional migraine
- Pattern: exercise regularity score vs. attack frequency

#### Screen Time / Posture Patterns
- Prolonged screen use (>4h continuous) as trigger
- Neck flexion angle / time (tracked via phone accelerometer or self-report)

---

## Analytical Methods for Pattern Detection

### 1. Time Series Analysis

#### Rolling Attack Frequency
- 30-day rolling window attack count
- Identifies trends: increasing (risk of chronification), stable, decreasing (treatment response)
- Seasonality decomposition (STL decomposition) for annual patterns

#### Autocorrelation Analysis
- Identifies periodic patterns in attack occurrence (e.g., 28-day menstrual cycle)
- Lag correlations between trigger variables and attack occurrence
- Use: ACF/PACF plots on daily attack binary (0/1) time series

#### Cross-Correlation Analysis
- Correlation between trigger variable (e.g., sleep hours) and attack occurrence at different lag times
- Identifies optimal prediction window for each trigger

### 2. Association Rule Mining

#### Trigger Co-Occurrence Analysis
- Input: Binary daily trigger matrix + attack column
- Algorithm: Apriori / FP-Growth
- Output: Rules of form: IF [trigger_A ∧ trigger_B] THEN [attack] with support, confidence, lift

**Example Rules:**
- {poor_sleep, menstrual_day_-1} → {migraine} [confidence: 0.72, lift: 3.1]
- {red_wine, stress_high} → {migraine_next_day} [confidence: 0.65, lift: 2.8]
- {skipped_meal, dehydration, weather_drop} → {migraine} [confidence: 0.81, lift: 3.8]

### 3. Survival Analysis

#### Time-to-Next-Attack Modeling
- Kaplan-Meier curves for attack-free days by patient subgroup
- Cox proportional hazards model: effect of each trigger on hazard of next attack
- Accelerated Failure Time (AFT) model for trigger-specific attack timing

#### Prodrome-to-Attack Time-to-Event
- Time from first prodrome symptom to attack onset
- Log-normal or Weibull distribution fits the prodrome-to-attack interval
- Enables probabilistic timing prediction: "70% probability of attack within 18 hours"

### 4. Machine Learning Models

#### Supervised Classification (Attack Prediction)
- **Target:** Attack in next 6h / 12h / 24h / 48h (binary classification)
- **Features:** Prodrome symptoms, triggers, sleep, HRV, weather, cycle day
- **Models:**
  - Logistic Regression (baseline; interpretable)
  - Random Forest (handles non-linear interactions; feature importance)
  - Gradient Boosted Trees (XGBoost, LightGBM — high performance)
  - LSTM / GRU (time series; captures temporal dependencies)
  - Transformer-based models (for longer history context)

#### Personalized vs. Population Models
- **Population model:** Trained on all patients; generalizes but loses individual specificity
- **Personalized model:** Fine-tuned per patient after ≥3 months data; significantly better recall
- **Hybrid:** Population model as prior; Bayesian update with individual data (recommended)

#### Feature Importance for Early Warning (Typical Rankings)
1. Menstrual cycle day (women) — highest feature importance in female cohorts
2. Sleep hours previous night
3. Stress NRS score
4. Prodrome symptom count and severity
5. Days since last attack (inter-attack interval)
6. HRV deviation from personal baseline
7. Barometric pressure delta
8. Caffeine intake change
9. Meal skipping
10. Yawning frequency (if tracked)

#### Model Performance Metrics (Target Thresholds)
- **Sensitivity (Recall):** ≥0.80 (miss <20% of attacks)
- **Specificity:** ≥0.75 (avoid excessive false alarms)
- **Positive Predictive Value (PPV):** ≥0.65 (most alerts are real attacks)
- **AUC-ROC:** ≥0.85 for well-calibrated personalized models
- **False Alarm Rate:** <1 false alert per week (alert fatigue threshold)

### 5. Pattern Visualization

#### Headache Calendar / Heat Map
- Monthly calendar with attack days highlighted by severity (color scale)
- Overlaid with menstrual cycle markers
- Identifies monthly clustering, day-of-week patterns

#### Attack Frequency Time Series
- Line chart: rolling 30-day attack count over 12 months
- Annotated with treatment changes, life events
- Trends: improvement (decreasing slope) vs. chronification (increasing slope)

#### Trigger Correlation Matrix
- Heatmap: pairwise correlation between trigger variables and attack occurrence
- Separate matrices for 0h, 12h, 24h, 48h lag

#### Prodrome Timeline Visualization
- Gantt-style chart: each prodrome symptom as a bar starting at onset, ending at attack
- Shows individual symptom timing relative to attack onset across multiple episodes
- Identifies earliest-occurring reliable warning symptom

---

## RAG System Pattern Query Examples

The following are example natural language queries the RAG system should be able to answer using pattern analysis data:

- *"What are my most common prodrome symptoms and how early do they appear?"*
- *"When in my menstrual cycle am I most likely to get a migraine?"*
- *"Does my sleep affect my migraine risk and what's the threshold?"*
- *"What trigger combinations have the strongest association with my attacks?"*
- *"What is my average inter-attack interval and am I overdue for an attack?"*
- *"Has my migraine frequency improved since starting the preventive medication?"*
- *"What time of day do my attacks typically start?"*
- *"Do weather changes trigger my migraines?"*
- *"What's my predicted risk level for the next 24 hours?"*
- *"Am I at risk for medication overuse headache?"*

---

## Pattern Analysis for Treatment Response Monitoring

### Identifying Preventive Treatment Efficacy
- **Baseline period:** 3 months pre-treatment (attack frequency, duration, severity means)
- **Treatment evaluation period:** 3 months at steady-state dose
- **Response criterion:** ≥50% reduction in monthly migraine days
- **Track separately:** Frequency, duration, severity, disability (MIDAS), acute medication use

### Breakthrough Pattern Analysis
- Identify which triggers still cause attacks despite prevention
- Residual perimenstrual attacks despite prevention → consider hormonal add-on strategy
- Weather-triggered breakthroughs → preemptive NSAIDs on high-risk days

### Medication Overuse Pattern Detection
- Track monthly: triptan use days, NSAID use days, combination analgesic days
- Rolling 30-day count; alert at:
  - ≥8 triptan days/month (approaching overuse)
  - ≥10 triptan days/month (overuse threshold)
  - ≥12 NSAID days/month (approaching overuse)
  - ≥15 NSAID days/month (overuse threshold)

---

## Individual Pattern Profile — Data Structure

```json
{
  "patient_id": "string",
  "analysis_period_months": 6,
  "attack_frequency_monthly_mean": 4.5,
  "attack_frequency_trend": "stable",
  "chronification_risk": "low",
  "top_prodrome_symptoms": [
    {"symptom": "neck_pain", "hit_rate": 0.87, "mean_hours_before": 18},
    {"symptom": "fatigue", "hit_rate": 0.83, "mean_hours_before": 24},
    {"symptom": "yawning", "hit_rate": 0.76, "mean_hours_before": 14},
    {"symptom": "mood_irritability", "hit_rate": 0.68, "mean_hours_before": 20}
  ],
  "top_triggers": [
    {"trigger": "sleep_deprivation", "ppv": 0.62, "base_rate": 0.28},
    {"trigger": "menstrual_day_-1_to_2", "ppv": 0.75, "base_rate": 0.14},
    {"trigger": "stress_high", "ppv": 0.48, "base_rate": 0.35}
  ],
  "peak_attack_hour": 6,
  "peak_attack_cycle_days": [-1, 1, 2],
  "menstrual_pattern": "menstrually_related_migraine",
  "weather_sensitive": true,
  "caffeine_sensitive": true,
  "medication_overuse_risk": "low",
  "hrv_baseline_rmssd": 42.3,
  "hrv_warning_threshold_rmssd": 34.0,
  "inter_attack_mean_days": 7.1,
  "inter_attack_sd_days": 2.3
}
```

---

## Key Facts for RAG Retrieval

- Peak attack onset time: early morning (4–9 AM) — circadian pattern
- Weekend migraine = "let-down" pattern: cortisol drop + caffeine withdrawal + sleep change
- Perimenstrual window: day −2 to +3 = highest individual monthly risk for women
- Trigger threshold model: attack occurs when cumulative trigger load exceeds personal threshold
- No single trigger reliable; combinations (2–3 co-occurring) dramatically increase PPV
- HRV drop >2SD from personal baseline: detectable 24–48h pre-attack
- Sleep deprivation + stress = most common co-trigger combination
- Prodrome-to-attack interval: mean ~24h (range 6–72h); individual-specific
- Prodrome false positive rate ~25–40%: not every prodrome becomes an attack
- Optimal ML target window: 6–24h before attack onset for clinically actionable warning
- Personalized models outperform population models significantly for individual prediction
- ≥3 months diary data + ≥5 attacks required for reliable individual pattern extraction
- Medication overuse pattern: critical to detect early (prevents MOH/chronic migraine)
- Social jetlag (>1h weekend sleep shift) is an underrecognized migraine pattern driver
- Barometric pressure drop >5 hPa/24h = environmental trigger threshold (population level)
- Attack frequency trend is the primary chronification warning signal
