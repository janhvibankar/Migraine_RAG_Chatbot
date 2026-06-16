# Temperature Changes and Migraine: A Comprehensive Reference

## Document Metadata
- **Domain**: Migraine Early Warning Prediction System
- **Category**: Weather Trigger — Atmospheric Temperature
- **RAG Tags**: `temperature`, `heat`, `cold`, `temperature_change`, `thermal_stress`, `weather_migraine`, `migraine_trigger`, `migraine_prediction`
- **Evidence Level**: High (well-replicated across multiple geographic and demographic cohorts)

---

## 1. Overview

Temperature — both extreme values (heat and cold) and rapid change — is among the most frequently reported migraine triggers. Heat-induced migraines are particularly common in tropical and subtropical regions, while cold air and rapid temperature drops are prominent triggers in temperate climates. Temperature's effect on migraine is multifactorial, involving vascular, neurochemical, and autonomic mechanisms. For predictive systems, both absolute temperature and rate of change (delta temperature) provide high-value signals.

---

## 2. Key Definitions

| Term | Definition |
|------|-----------|
| **Ambient Temperature** | Air temperature measured in shade at standard height (°C or °F) |
| **Feels Like / Apparent Temperature** | Perceived temperature accounting for humidity and wind (heat index or wind chill) |
| **Delta Temperature (ΔT)** | Rate of change in temperature over a defined time window (e.g., ΔT over 6h, 24h) |
| **Thermal Stress** | Physiological burden imposed by deviation from thermoneutral zone (~20–26°C) |
| **Diurnal Temperature Range (DTR)** | Difference between daily max and min temperature; high DTR = greater thermal stress |
| **Heat Wave** | Extended period of abnormally high temperatures (typically ≥3 days above seasonal threshold) |
| **Cold Front** | Boundary where cold air mass displaces warm air; often associated with rapid ΔT and pressure drop |
| **Warm Front** | Boundary where warm air mass overrides cold air; associated with rising temperature and humidity |
| **Föhn / Chinook Effect** | Warm, dry downslope winds causing rapid temperature rise; well-documented migraine trigger |

---

## 3. Physiological Mechanisms

### 3.1 Vascular Dilation (Heat)
- High temperatures cause peripheral vasodilation to facilitate heat dissipation
- Cerebral blood flow dynamics are altered; intracranial vessel dilation stimulates meningeal nociceptors
- Nitric oxide (NO) is upregulated in heat; NO is a potent trigeminovascular activator
- Calcitonin gene-related peptide (CGRP) — the key migraine neuropeptide — is released during thermal vascular stress

### 3.2 Vasoconstriction and Rebound (Cold)
- Cold air causes peripheral and cerebral vasoconstriction
- Rebound vasodilation upon re-entering warm environments can trigger headache
- Cold stimuli of the sphenopalatine ganglion (via nasal cold air) may directly trigger trigeminal activation

### 3.3 Sympathoadrenal Activation
- Rapid temperature drops activate the sympathetic nervous system (cold pressor response)
- Sympathetic activation affects serotonin release at the raphe nucleus and alters cerebral perfusion
- Norepinephrine surge from cold exposure can constrict then rebound-dilate cerebral vessels

### 3.4 Dehydration (Heat)
- High temperatures increase insensible water loss through sweating and breathing
- Dehydration reduces blood volume, triggering compensatory cerebrovascular changes
- Hypovolemia lowers blood pressure to the brain, activating pain-sensitive structures
- Magnesium loss through sweat directly lowers migraine threshold (magnesium stabilizes NMDA receptors)

### 3.5 Serotonin and Neurotransmitter Changes
- Heat stress alters the serotonin transporter function, reducing synaptic serotonin availability
- Serotonin reduction in brainstem nuclei is a well-established migraine precipitant
- Cold exposure also transiently alters serotonin dynamics, though through different pathways

### 3.6 Hypothalamic Dysregulation
- The hypothalamus is the brain's thermoregulatory center and is also implicated in migraine generation (specifically the dorsal hypothalamus activates during prodrome)
- Temperature stress directly challenges hypothalamic homeostasis, potentially triggering the migraine cascade
- Circadian mismatch (temperature changes disrupting sleep-wake thermal cycles) further sensitizes this pathway

### 3.7 Cortical Spreading Depression (CSD)
- Temperature extremes lower CSD threshold in pre-sensitized cortex
- Animal models show that even mild hyperthermia (0.5–1°C above baseline body temp) increases CSD susceptibility
- Post-exercise heat and fever states show elevated CSD risk

### 3.8 Neurogenic Inflammation
- Heat causes release of substance P and other neuropeptides from trigeminal C-fibers
- These neuropeptides cause sterile neurogenic inflammation of meningeal vessels
- Inflammation sensitizes peripheral trigeminal afferents, initiating and sustaining migraine

---

## 4. Clinical Evidence

### 4.1 Heat-Related Findings
- For every 5°C increase above baseline, migraine risk increases by approximately **7–13%** (Mukamal et al. 2009)
- Days with temperatures above **32°C** show consistent migraine incidence elevation in multiple cohorts
- Heat waves are associated with **15–25% increases** in headache-related emergency visits
- The relationship is dose-dependent: more extreme heat = higher risk, up to a plateau at very extreme temperatures (>40°C, other factors dominate)
- Afternoon peak temperature (typically 2–4 PM) correlates with a migraine onset peak 2–6 hours later

### 4.2 Cold-Related Findings
- Cold air (below 10°C) triggers migraine primarily in individuals with **cold allodynia** — a marker of central sensitization
- Rapid cold front passage (ΔT < −5°C in 6h) significantly elevates next-day migraine incidence
- Indoor cold (air conditioning set below 18°C) is a recognized trigger, especially with direct cold airflow on head/neck
- Ice cream headache (sphenopalatine ganglion neuralgia) is a distinct but related cold-trigger phenomenon

### 4.3 Temperature Change (ΔT) Findings
- **Rate of change is often more predictive than absolute value**
- ΔT > 5°C in 6 hours (either direction) is a clinically significant trigger threshold
- Diurnal temperature range > 15°C on a given day is associated with elevated migraine incidence
- Seasonal transition periods (spring, autumn) — characterized by high day-to-day temperature variability — are peak migraine seasons globally

### 4.4 Population Characteristics
- Approximately **40–50% of migraineurs** identify heat or temperature change as a trigger
- Women show stronger heat sensitivity (consistent with overall migraine demographics and hormonal thermoregulation differences)
- Individuals with **vestibular migraine** show heightened cold sensitivity
- Chronic migraineurs (>15 headache days/month) are more sensitive to temperature extremes than episodic migraineurs
- Children and adolescents: heat-triggered migraines are particularly common during summer months

---

## 5. Temperature Thresholds for Prediction Models

### Heat Thresholds
| Temperature | Risk Level | Alert Type |
|-------------|------------|------------|
| < 28°C | Low | No alert |
| 28–32°C | Low–Moderate | No alert (monitor if humid) |
| 32–36°C | Moderate | Advisory |
| 36–40°C | High | Warning |
| > 40°C | Very High | Critical alert |

### Cold Thresholds
| Temperature | Risk Level | Alert Type |
|-------------|------------|------------|
| > 10°C | Low | No alert |
| 5–10°C | Low–Moderate | No alert |
| 0–5°C | Moderate | Advisory (cold-sensitive users) |
| < 0°C | Moderate–High | Warning |
| < −10°C | High | Warning |

### Temperature Change Thresholds (ΔT)
| Change | Time Window | Risk Level | Alert |
|--------|-------------|------------|-------|
| < 3°C | 6 hours | Low | No alert |
| 3–5°C | 6 hours | Moderate | Advisory |
| > 5°C | 6 hours | High | Warning |
| > 3°C | 3 hours | High | Warning |
| > 8°C | 24 hours | Very High | Critical alert |
| DTR > 15°C | Daily | Moderate | Advisory |

> **Note**: These thresholds should be personalized per user's historical migraine-weather data when available.

---

## 6. Temporal Dynamics (Lag Effect)

- **Immediate heat trigger**: Migraine onset during peak heat hours (2–4 PM), lag ~2–4 hours from peak temperature
- **Overnight cold trigger**: Cold front passes evening → migraine onset next morning (lag 8–14 hours)
- **Rapid ΔT trigger**: Lag ~3–8 hours from initiating temperature change event
- **Heat wave fatigue trigger**: Sustained multi-day heat → cumulative dehydration → migraine lag increases (12–36 hours into heat wave)
- **Prodromal temperature sensitivity**: Many migraineurs report feeling "cold" or having chills during the prodrome phase (~24h before headache), which can be confused with a temperature trigger

---

## 7. Interaction with Other Triggers

| Co-Trigger | Interaction Effect |
|------------|-------------------|
| **High humidity** | Heat × humidity = heat index; compound thermal-dehydration stress |
| **Pressure drop** | Cold front: simultaneous temperature drop + pressure drop = very high risk |
| **Bright light / UV** | Hot sunny days combine thermal stress + photosensitivity |
| **Dehydration** | Directly potentiated by heat; often the mechanistic link |
| **Exercise** | Exercise heat load compounds ambient heat stress |
| **Sleep disruption** | Thermal discomfort disrupts sleep, adding a second major trigger |
| **Hormonal cycle** | Perimenstrual low estrogen + heat/cold stress: synergistically elevated risk |
| **Caffeine withdrawal** | Hot weather increases fluid loss; caffeine metabolism also changes with temperature |
| **Air pollution** | Hot stagnant air traps ozone and particulates; pollutant exposure amplifies neuroinflammation |

---

## 8. Seasonal and Regional Patterns

### India / South Asia Specific
| Season | Temperature Pattern | Migraine Risk Level |
|--------|---------------------|---------------------|
| Summer (April–June) | 38–48°C in many regions | Very High |
| Pre-monsoon (May–June) | Peak heat + humidity rise | Very High |
| Monsoon (July–Sept) | Cooling + temperature variability | Moderate |
| Post-monsoon (Oct–Nov) | Rapid temperature drops, variability | Moderate–High |
| Winter (Dec–Feb) | Cool/cold in north; mild in south | Low–Moderate |

### Global Regional Patterns
| Region | Dominant Pattern | Peak Risk Season |
|--------|-----------------|-----------------|
| Tropical South Asia | Extreme heat, monsoon ΔT | March–June |
| Mediterranean | Summer heat waves | July–August |
| Temperate Europe/North America | Cold fronts, seasonal ΔT | March–April, Oct–Nov |
| Desert regions | Extreme heat + Saharan/dust events | Summer |
| Polar/sub-Arctic | Extreme cold, rapid ΔT | Winter |

---

## 9. Data Sources for Real-Time Monitoring

| Source | Key Variables | Frequency |
|--------|--------------|-----------|
| OpenWeatherMap API | `temp`, `feels_like`, `temp_min`, `temp_max` | Hourly |
| Tomorrow.io | `temperatureInstant`, `temperatureApparent` | 15-min |
| IMD India | Temperature forecasts, heat wave advisories | 3-hourly |
| NOAA / ERA5 | Historical temperature reanalysis | Daily |
| Wearable devices | Skin temperature (proxy for fever/thermal stress) | Continuous |

### Recommended API Fields
```
- temp (°C) — current temperature
- feels_like (°C) — apparent temperature
- temp_max, temp_min — daily range for DTR calculation
- temp_change_3h, temp_change_6h, temp_change_24h — delta calculations
- heat_index — combined heat/humidity stress
- wind_chill — cold stress in winter months
```

---

## 10. Feature Engineering for ML Models

### Useful Derived Features
| Feature | Formula / Description |
|---------|----------------------|
| `dt_3h` | Temp now − Temp 3h ago |
| `dt_6h` | Temp now − Temp 6h ago |
| `dt_24h` | Temp now − Temp 24h ago |
| `heat_index` | Computed from temperature + RH (Rothfusz equation) |
| `wind_chill` | Computed from temperature + wind speed |
| `diurnal_temp_range` | Daily max − Daily min |
| `extreme_heat_flag` | Binary: 1 if temp > 35°C |
| `cold_front_flag` | Binary: 1 if ΔT < −4°C in 6h |
| `heat_wave_day` | Binary: 1 if ≥3 consecutive days with temp > 40°C |
| `temp_volatility_7d` | Std dev of daily mean temp over last 7 days |

### Interaction Features
- `dt_6h × dp_6h` — cold front composite (temperature drop + pressure drop)
- `heat_index × dehydration_proxy` — if hydration tracking available
- `extreme_heat_flag × menstrual_day` — hormonal-thermal interaction
- `diurnal_temp_range × sleep_duration` — sleep disruption from temperature variability
- `temp_volatility_7d × chronic_migraine_flag` — higher sensitivity in chronic patients

---

## 11. Special Scenarios

### 11.1 Heat Wave Protocol
- **Definition**: ≥3 consecutive days with max temp > 40°C (India standard) or > 5°C above seasonal norm
- **Migraine risk profile**: Cumulative dehydration + sustained vasodilation + sleep disruption
- **Alert cadence**: Daily alerts during heat wave; remind hydration every 2–4 hours
- **Key metric**: Track rolling 72h average temperature; flag progressive elevation

### 11.2 Cold Front Passage
- **Profile**: Rapid ΔT < −5°C within 6h + pressure drop + wind shift
- **Migraine risk**: Very high composite trigger
- **Timing**: Migraine onset 6–18 hours post-front passage
- **Key metric**: `cold_front_flag` + `dp_6h` composite score

### 11.3 Föhn / Hot Wind Events
- **Profile**: Rapid temperature rise (ΔT > +8°C in 3h) with very low humidity
- **Geographic relevance**: Alpine Europe, Rocky Mountains, Eastern slopes of Himalayas
- **Mechanism**: Rapid warm desiccating wind; triggers positive ion release, serotonin changes
- **Migraine risk**: Very high; anecdotally the most dramatic weather trigger in affected regions

### 11.4 Air Conditioning Exposure
- **Profile**: Transition from outdoor heat (38°C) to indoor AC (20°C) = ΔT of 18°C
- **Mechanism**: Rapid vasoconstriction from cold; direct cold airflow on scalp/neck stimulates trigeminal
- **Prevalence**: Extremely common in urban India and tropical regions during summer
- **Mitigation**: Recommend gradual acclimation, avoiding direct AC airflow, and maintaining indoor temp ≥24°C

---

## 12. Patient-Facing Interpretation

### Alert Messages
- **Low risk**: "Temperatures are comfortable today. No significant temperature-related migraine risk."
- **Heat advisory**: "High temperatures expected today (>33°C). Stay hydrated and minimize outdoor exposure during peak heat (12 PM – 4 PM). Migraine risk is elevated."
- **Extreme heat warning**: "Heat wave conditions. Very high migraine risk due to dehydration and thermal stress. Drink at least 3L of water, stay in cool environments, and take preventive steps."
- **Cold front warning**: "A cold front is approaching with a significant temperature drop. Migraine risk is elevated for the next 12–18 hours. Keep warm and avoid rapid temperature transitions."
- **Temperature spike advisory**: "A rapid temperature change is occurring. Limit abrupt indoor-outdoor transitions and ensure you're well-hydrated."

### Preventive Recommendations
1. **Heat**: Drink 2.5–3.5L water; avoid alcohol; schedule outdoor activity before 10 AM or after 6 PM; wear UV-protective headwear
2. **Cold front**: Keep head and neck warm; avoid cold drafts; warm up gradually before going outdoors
3. **Rapid ΔT**: Allow body 10–15 min to acclimate when moving between very different temperature environments
4. **AC exposure**: Set indoor AC to ≥24°C; use indirect airflow; avoid sleeping directly under AC vent

---

## 13. Frequently Asked Questions (FAQ for RAG Retrieval)

**Q: Is heat or cold a stronger migraine trigger?**
A: Heat is more commonly cited globally, particularly in tropical regions. Cold fronts (rapid temperature drops) are stronger triggers in temperate regions. The rate of temperature change often matters more than the direction or absolute value.

**Q: What temperature is too hot and may trigger a migraine?**
A: Temperatures above 32°C increase risk; above 36°C, risk is high for susceptible individuals. However, hydration status is the key modifying factor — a well-hydrated person at 38°C has lower risk than a dehydrated person at 33°C.

**Q: Why do I get migraines when I come in from the heat to air conditioning?**
A: Rapid temperature transition (ΔT of 10–18°C in seconds) triggers vasoconstriction from cold and may directly stimulate trigeminal nerve endings via scalp cold receptors. It is one of the most common urban migraine triggers in hot climates.

**Q: Does fever cause migraines?**
A: Fever and migraine share overlapping mechanisms (cytokine-induced neuroinflammation, vasodilation) but are distinct. High fever can trigger a migraine attack in susceptible individuals. Treating fever promptly may abort an impending migraine.

**Q: How does temperature affect migraine differently in men vs. women?**
A: Women generally show greater temperature sensitivity due to estrogen's role in thermoregulation and vascular reactivity. Estrogen fluctuations in the perimenstrual period combined with heat stress create particularly high risk windows.

**Q: Can wearing a hat or keeping my head warm reduce cold-triggered migraines?**
A: Yes. Keeping the scalp, neck, and forehead warm during cold exposure reduces trigeminal cold stimulation and sympathetic activation, which can lower cold-trigger risk.

---

## 14. References and Source Studies

1. Mukamal KJ et al. (2009). "Weather and air pollution as triggers of severe headaches." *Neurology*
2. Kimoto K et al. (2011). "Meteorological factors and migraine: impact of barometric pressure changes." *Cephalalgia*
3. Bolay H et al. (2020). "Influence of weather in headache disorders." *Headache*
4. Lipton RB et al. (2004). "Migraine prevalence, disease burden, and the need for preventive therapy." *Neurology*
5. Villeneuve PJ et al. (2006). "Outdoor air pollution and emergency department visits for headache." *American Journal of Epidemiology*
6. Okuma H et al. (2015). "Examination of patients with headache seen at the outpatient clinic of internal medicine in relation to atmospheric pressure." *Internal Medicine*
7. Wöber C et al. (2007). "Trigger factors of migraine and tension-type headache: experience and knowledge of patients." *Cephalalgia*
8. Strine TW et al. (2005). "The associations between weather and headache." *Headache*
9. India Meteorological Department Heat Wave Guidelines (2019)
10. International Headache Society (IHS) ICHD-3 Classification
