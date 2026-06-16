# Depression & Migraine — Comorbidity Knowledge Base
**Category:** Comorbidities  
**Version:** 1.0 | **Last Updated:** June 2026  
**For:** RAG-Based Migraine Early Warning Prediction Chatbot  
**Evidence Base:** DSM-5, ICD-11, peer-reviewed neurology and psychiatry literature

---

## 1. OVERVIEW

Depression is the single most prevalent psychiatric comorbidity in migraine patients. The relationship is **bidirectional and biologically entangled** — each condition increases the risk, severity, and disability of the other. For the migraine early warning prediction system, depression is significant not only as a trigger but also as a **chronic modifier** that elevates baseline risk, distorts symptom reporting, and undermines preventive behaviors.

### 1.1 Prevalence
- Depression is **2–4× more common** in migraineurs than in the general population
- ~40–50% of patients with chronic migraine have comorbid major depressive disorder (MDD)
- Migraine patients are **5× more likely** to develop depression than headache-free individuals
- Conversely, individuals with depression have approximately **3× greater risk** of developing migraine
- Comorbid migraine + depression is associated with significantly greater disability than either condition alone

### 1.2 Clinical Significance for This System
- Depression independently increases migraine **attack frequency** and the transition from episodic to chronic migraine
- Depressive symptoms — fatigue, cognitive fog, psychomotor changes, sleep disruption — overlap extensively with migraine prodrome
- Patients with both conditions often underreport migraine symptoms and underseek treatment (due to anhedonia and hopelessness)
- Depression worsens medication adherence and treatment engagement — critical context for the prediction model

---

## 2. CLINICAL CLASSIFICATION OF RELEVANT DEPRESSIVE DISORDERS

### 2.1 Major Depressive Disorder (MDD) — ICD-11: 6A70 / DSM-5: 296.2x
**Diagnostic Core (≥5 symptoms for ≥2 weeks, must include 1 or 2):**
1. Depressed mood most of the day, nearly every day
2. Markedly diminished interest or pleasure in activities (anhedonia)
3. Significant unintentional weight change or appetite disturbance
4. Insomnia or hypersomnia
5. Psychomotor agitation or retardation (observable by others)
6. Fatigue or loss of energy
7. Feelings of worthlessness or excessive/inappropriate guilt
8. Diminished ability to think, concentrate, or make decisions
9. Recurrent thoughts of death or suicidal ideation

**Migraine Relevance:** Symptoms 3–8 directly overlap with migraine prodrome and postdrome, creating a complex diagnostic and predictive challenge.

### 2.2 Persistent Depressive Disorder (Dysthymia) — ICD-11: 6A71 / DSM-5: 300.4
**Core Features:**
- Chronically depressed mood for ≥2 years (adults)
- Less severe than MDD but persistent
- Associated with: poor concentration, low self-esteem, hopelessness, fatigue, appetite/sleep changes

**Migraine Relevance:** Chronic, low-grade dysthymia is particularly damaging in the migraine context — the sustained neurobiological stress load contributes to migraine chronification.

### 2.3 Premenstrual Dysphoric Disorder (PMDD) — ICD-11: 6E68 / DSM-5: 625.4
**Core Features:**
- Severe mood disturbances in the week before menstruation
- Depressed mood, anxiety, irritability, tearfulness, fatigue, sleep/appetite changes
- Resolves within days of menstrual onset

**Migraine Relevance:** **Highly significant.** Menstrual migraine and PMDD co-occur frequently. The perimenstrual drop in estrogen drives both. The chatbot should treat PMDD as a high-risk overlapping window for menstrual migraine prediction.

### 2.4 Bipolar Disorder — ICD-11: 6A60-6A62 / DSM-5: 296.xx
**Core Features (depressive episodes):**
- Similar to MDD depressive episodes, but alternating with manic/hypomanic episodes

**Migraine Relevance:** Migraine is 3× more prevalent in bipolar disorder. Mood state changes (both manic and depressive episodes) can trigger migraine. Many first-line migraine preventives (e.g., valproate) have mood-stabilizing properties. **Critical note:** SSRIs — commonly used for depression — may precipitate mania in undiagnosed bipolar patients; this underscores the need for professional psychiatric evaluation.

---

## 3. SHARED NEUROBIOLOGICAL MECHANISMS

### 3.1 Serotonergic System Dysfunction
- Serotonin is central to both: low serotonin levels are implicated in both migraine attacks and depressive episodes
- The serotonin transporter gene (5-HTTLPR) polymorphisms are associated with both conditions
- This shared mechanism partly explains why serotonergic drugs (SSRIs, SNRIs, triptans) are active in both

### 3.2 Dopaminergic System Involvement
- Dopamine dysregulation underlies anhedonia (core depression symptom) and multiple migraine prodrome symptoms (yawning, food cravings, mood shifts)
- Dopamine receptor hypersensitivity in migraine can produce prodromal symptoms that mimic or are worsened by depressive states

### 3.3 HPA Axis Dysregulation
- Both MDD and migraine involve HPA axis overactivation and elevated cortisol
- Chronic cortisol elevation promotes neuroinflammation, reduces pain threshold, disrupts sleep, and accelerates migraine chronification
- Childhood adversity (a major risk factor for both depression and migraine) permanently upregulates the HPA axis

### 3.4 Neuroinflammation
- Elevated pro-inflammatory cytokines (IL-1β, IL-6, TNF-α) are found in both migraine attacks and depressive episodes
- This shared inflammatory state creates bidirectional vulnerability
- CGRP elevations, central sensitization, and neuroinflammation create a chronic pain-mood dysregulation loop

### 3.5 Hypothalamic Involvement
- The hypothalamus regulates both mood (via limbic connections) and migraine (prodromal and headache phases)
- Hypothalamic dysfunction may be the common neural substrate for the overlap in symptoms (fatigue, appetite changes, sleep disruption, cognitive fog)

### 3.6 Genetic Overlap
- Genome-wide association studies (GWAS) have identified shared genetic loci between migraine and depression
- Heritability studies suggest a shared polygenic architecture
- Family history of either condition increases risk of both

---

## 4. OVERLAP OF SYMPTOMS: DEPRESSION vs. MIGRAINE PHASES

### 4.1 Depression vs. Migraine Prodrome
Critical for the prediction engine to disambiguate:

| Symptom | Depression | Migraine Prodrome | Migraine Postdrome |
|---|---|---|---|
| Fatigue / low energy | ✅ Core | ✅ | ✅ |
| Cognitive fog / poor concentration | ✅ Core | ✅ | ✅ |
| Irritability / mood change | ✅ | ✅ | ✅ |
| Sleep disturbance | ✅ Core | ✅ | ✅ |
| Appetite/food changes | ✅ | ✅ (cravings) | Possible |
| Anhedonia / withdrawal | ✅ Core | Mild | Mild |
| Psychomotor slowing | ✅ Core | Mild | ✅ |
| Depressed mood | ✅ Core | Possible (prodrome) | ✅ (postdrome) |
| Yawning | ❌ | ✅ (specific) | ❌ |
| Neck stiffness | ❌ | ✅ (specific) | ❌ |
| Light/sound sensitivity | Occasional | ✅ | Mild |
| Suicidal ideation | ✅ (severe) | ❌ | ❌ |
| Hopelessness | ✅ Core | ❌ | ❌ |

**RAG Logic Note:** Migraine-specific symptoms (yawning, neck stiffness, food cravings, photophobia) help differentiate prodrome from a depressive episode. However, postdromal depression can be clinically indistinguishable from a brief depressive episode — context and timing relative to a migraine attack are critical.

### 4.2 Postdromal Depression
- Up to 80% of migraineurs report mood changes in the postdrome
- Post-attack depressed mood is common, often misattributed to clinical depression
- Typically resolves within 24–48 hours of attack resolution
- Repeated postdromal depression over time may contribute to developing full MDD

---

## 5. DEPRESSION AS A MIGRAINE RISK MODIFIER

### 5.1 Frequency Elevation
- Active depressive episodes are associated with significantly higher migraine attack frequency
- Depression predicts the transition from **episodic migraine (EM) → chronic migraine (CM)**
- Treating depression often reduces migraine frequency (and vice versa)

### 5.2 Severity and Disability Amplification
- Depression amplifies pain perception via central sensitization
- Patients with both conditions experience greater headache-related disability (measured by MIDAS/HIT-6 scores)
- Pain catastrophizing — a key cognitive pattern in depression — is one of the strongest predictors of migraine-related disability

### 5.3 Medication Overuse Risk
- Depressed migraine patients are at significantly higher risk of **Medication Overuse Headache (MOH)**
- Depression reduces executive function, making it harder to limit acute medication use
- Substance use (alcohol, certain analgesics) as self-medication for depression can directly trigger migraine

### 5.4 Impact on Preventive Behaviors
Depression undermines the lifestyle behaviors that prevent migraine:
- Sleep dysregulation (either insomnia or hypersomnia)
- Reduced physical activity
- Poor nutrition / irregular meals
- Social withdrawal (reduces stress-buffering social support)
- Poor medication adherence

---

## 6. IMPACT ON EARLY WARNING PREDICTION MODEL

### 6.1 Depression as a Chronic Risk Modifier
Depression does not simply act as an acute trigger — it **raises the baseline risk level** persistently. The prediction model should incorporate:
- Users with active/known depression are classified at a **higher baseline risk tier**
- Prodromal thresholds may need adjustment — depressed users may show more prodromal-like symptoms even between attacks
- The model should track **changes from the user's personal baseline**, not population norms

### 6.2 Data Fields for Depression Context
Recommended session logging variables:
- `mood_score`: 1–10 (1 = very low/depressed, 10 = very good)
- `depression_diagnosis`: Yes / No / Undiagnosed (optional, user-consented)
- `antidepressant_use`: Yes / No (medication name only, no dose)
- `energy_level`: 1–10
- `motivation_level`: 1–10
- `recent_attack_postdrome`: Yes / No (to distinguish postdromal mood from depression)

### 6.3 Prediction Adjustment Rules
- Mood score ≤4 for 2+ consecutive days → elevate migraine risk by one tier
- Mood score ≤4 + known depressive disorder → elevate by one tier AND suggest professional check-in
- Post-attack window (24–48h) with low mood → tag as likely postdrome, do NOT automatically elevate risk tier, but monitor

---

## 7. MANAGEMENT INTERSECTION (EDUCATIONAL ONLY)

### 7.1 Treatments Addressing Both Conditions
| Treatment | Depression Benefit | Migraine Benefit |
|---|---|---|
| Amitriptyline (TCA) | Mild-moderate | ✅ First-line preventive |
| Venlafaxine (SNRI) | ✅ FDA-approved | Evidence for migraine prevention |
| Duloxetine (SNRI) | ✅ FDA-approved | Some migraine evidence |
| Valproate | Bipolar depression | ✅ First-line migraine preventive |
| CBT | ✅ Gold standard | ✅ Strong evidence for migraine |
| Behavioral Activation | ✅ | ✅ (via exercise, routine) |
| Aerobic Exercise | ✅ Strong evidence | ✅ Preventive evidence |
| Mindfulness-Based Cognitive Therapy (MBCT) | ✅ Evidence-based | Moderate evidence |

> ⚠️ **Chatbot Rule:** Medication information is for educational context only. Never advise on starting, stopping, or changing antidepressants. Note that some antidepressants (e.g., SSRIs) can have complex interactions with migraine treatments (triptans — serotonin syndrome risk at high doses). Always defer to prescribing physician.

### 7.2 Non-Pharmacological Strategies (Safe to Discuss)
- **Sleep hygiene:** Regular sleep/wake schedule addresses both conditions directly
- **Physical activity:** 30 min aerobic exercise 3–5×/week — equivalent to antidepressant effect in mild-moderate depression; also reduces migraine frequency
- **Structured daily routine:** Reduces variability in biological rhythms (a key migraine trigger)
- **Social engagement:** Counteracts withdrawal; stress-buffering effect
- **Dietary regularity:** No skipping meals — stabilizes both mood and migraine threshold

---

## 8. CHATBOT INTERACTION GUIDELINES FOR DEPRESSED USERS

### 8.1 Tone and Empathy
- Use warm, non-judgmental, validating language
- Acknowledge the compounding burden: "Managing both migraine and depression can feel exhausting, and that's completely understandable."
- Avoid toxic positivity ("just stay positive!") — this is invalidating and clinically counterproductive
- Pace responses — don't overwhelm a low-energy, low-motivation user with excessive information

### 8.2 Motivation-Sensitive Communication
- For users showing low engagement or motivation, reduce information density
- Prioritize 1–2 key actions rather than a comprehensive list
- Frame preventive behaviors in terms of small, achievable steps

### 8.3 Safe Messaging — Suicidality Protocol
Depression screening may surface risk of suicidal ideation. The chatbot **must follow safe messaging guidelines:**

**If a user expresses:**
- Hopelessness about their condition
- Statements like "I can't take this anymore" or "What's the point"
- Direct or indirect suicidal ideation

**The chatbot must:**
1. Acknowledge their distress with empathy — do NOT immediately redirect to a hotline without acknowledging feelings
2. Gently ask about their safety: "I'm concerned about you — are you having any thoughts of hurting yourself?"
3. Provide immediate mental health crisis resources:
   - **India:** iCall — 9152987821 | Vandrevala Foundation — 1860-2662-345 (24/7)
   - **Global:** International Association for Suicide Prevention — https://www.iasp.info/resources/Crisis_Centres/
   - **US:** 988 Suicide and Crisis Lifeline — call/text 988
   - **UK:** Samaritans — 116 123
4. Encourage the user to contact their doctor or a mental health professional
5. **Do NOT** engage in extended therapeutic conversation — the chatbot is not a mental health clinician

> ⚠️ **This escalation protocol is non-negotiable and takes absolute priority over any migraine-related response.**

---

## 9. KEY CLINICAL REFERENCES

- Breslau N, et al. *Migraine and major depression: a longitudinal study.* Headache, 1994.
- Lipton RB, et al. *Comorbidities of migraine.* Headache, 2007.
- Buse DC, et al. *Psychiatric comorbidities of episodic and chronic migraine.* Headache, 2013.
- Goadsby PJ, et al. *Pathophysiology of migraine.* Physiological Reviews, 2017.
- Antonaci F, et al. *Migraine and psychiatric comorbidity.* J Headache Pain, 2011.
- Hamelsky SW, Lipton RB. *Psychiatric comorbidity of migraine.* Headache, 2006.
- DSM-5. *American Psychiatric Association*, 2013.
- ICD-11. *World Health Organization*, 2022.
- Seng EK, Fenton BT. *Psychiatric comorbidity and migraine outcomes.* Headache, 2020.

---

*For internal RAG system use. Not for direct patient distribution without clinical review.*
