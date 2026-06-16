# Anxiety & Migraine — Comorbidity Knowledge Base
**Category:** Comorbidities  
**Version:** 1.0 | **Last Updated:** June 2026  
**For:** RAG-Based Migraine Early Warning Prediction Chatbot  
**Evidence Base:** DSM-5, ICD-11, peer-reviewed neurology and psychiatry literature

---

## 1. OVERVIEW

Anxiety disorders are among the most common psychiatric comorbidities in migraine patients. The co-occurrence is bidirectional — anxiety worsens migraine frequency and severity, and migraine increases anxiety burden. Understanding this relationship is essential for accurate early warning prediction, as anxiety symptoms can both **trigger** and **mask** prodromal migraine signals.

### 1.1 Prevalence
- Anxiety disorders occur in **~50% of migraine patients** vs ~19% in the general population
- Generalized Anxiety Disorder (GAD) is 3–5× more prevalent in migraineurs
- Panic disorder is 3–10× more prevalent in migraineurs
- Comorbid anxiety + migraine is associated with significantly higher headache frequency, greater disability, and lower quality of life
- Anxiety is more strongly associated with **migraine with aura** than migraine without aura

### 1.2 Why This Comorbidity Matters for Early Warning Prediction
Anxiety symptoms can:
- Overlap with and amplify prodromal migraine signals (fatigue, irritability, cognitive fog)
- Independently trigger migraine attacks through physiological stress pathways
- Cause anticipatory anxiety about migraine (fear of the next attack), worsening the cycle
- Lead to avoidance behaviors that inadvertently worsen triggers (sleep disruption, diet changes)

---

## 2. CLINICAL CLASSIFICATION OF RELEVANT ANXIETY DISORDERS

### 2.1 Generalized Anxiety Disorder (GAD) — ICD-11: 6B00 / DSM-5: 300.02
**Core Features:**
- Excessive, difficult-to-control worry about multiple life domains
- Duration: ≥6 months
- Associated with: fatigue, muscle tension, sleep disturbance, concentration difficulty, irritability, restlessness

**Migraine Relevance:** Chronic muscle tension (especially neck/shoulder) and sleep disruption are both direct migraine triggers. Cognitive symptoms overlap heavily with migraine prodrome.

### 2.2 Panic Disorder — ICD-11: 6B01 / DSM-5: 300.01
**Core Features:**
- Recurrent unexpected panic attacks (sudden surge of intense fear)
- Physical symptoms: palpitations, sweating, trembling, shortness of breath, chest pain, dizziness, nausea, numbness
- Persistent concern about future attacks

**Migraine Relevance:** Panic attacks can mimic or co-occur with migraine aura. Autonomic activation during panic (adrenaline surge) can trigger vasomotor changes that precipitate migraine.

### 2.3 Social Anxiety Disorder — ICD-11: 6B04 / DSM-5: 300.23
**Core Features:**
- Intense fear of social situations; avoidance behavior
- Associated with: anticipatory anxiety, physiological arousal in social settings

**Migraine Relevance:** Social stress is a known migraine trigger. Avoidance of social settings due to migraine fear can reinforce social anxiety in a vicious cycle.

### 2.4 Post-Traumatic Stress Disorder (PTSD) — ICD-11: 6B40 / DSM-5: 309.81
**Core Features:**
- Follows exposure to traumatic event
- Intrusive memories, hypervigilance, emotional numbing, sleep disruption

**Migraine Relevance:** PTSD is significantly more common in chronic migraine patients. Hypervigilance and sleep disruption are major migraine triggers. Pain catastrophizing — common in PTSD — amplifies migraine disability.

### 2.5 Agoraphobia — ICD-11: 6B02 / DSM-5: 300.22
**Core Features:**
- Fear of situations where escape might be difficult
- Often develops secondary to panic disorder

**Migraine Relevance:** Some patients develop agoraphobia-like avoidance of environments that previously triggered migraines (crowds, bright spaces, travel), which may represent migraine-related disability rather than primary agoraphobia.

---

## 3. SHARED NEUROBIOLOGICAL MECHANISMS

Understanding the shared biology explains the strong comorbidity and informs the RAG model's contextual reasoning:

### 3.1 Serotonergic Dysregulation
- Serotonin (5-HT) plays a dual role in both migraine pathogenesis and anxiety regulation
- Low serotonergic tone is implicated in both conditions
- SSRIs/SNRIs used for anxiety can have variable effects on migraine (amitriptyline and venlafaxine have evidence for migraine prevention)

### 3.2 HPA Axis Hyperactivation (Stress Response)
- Chronic anxiety keeps the hypothalamic-pituitary-adrenal (HPA) axis overactivated
- Elevated cortisol promotes neuroinflammation and lowers migraine threshold
- This is the primary pathway by which anxiety triggers or worsens migraine attacks

### 3.3 CGRP Involvement
- CGRP (Calcitonin Gene-Related Peptide) — the primary mediator of migraine pain — is also elevated in anxiety states
- Stress-induced CGRP release in the trigeminal system may be the bridge between anxiety episodes and migraine onset

### 3.4 Amygdala Sensitization
- Both migraine and anxiety involve amygdala hyperactivity
- Sensitized amygdala lowers pain threshold, heightens threat detection, and perpetuates the anxiety-migraine cycle

### 3.5 Autonomic Nervous System Imbalance
- Sympathetic dominance (fight-or-flight) in anxiety leads to vasoconstriction followed by vasodilation — a pattern that may precipitate migraine
- Parasympathetic dysfunction impairs sleep quality (another shared trigger)

---

## 4. OVERLAP OF SYMPTOMS: ANXIETY vs. MIGRAINE PRODROME

This is **critical** for accurate early warning detection. The chatbot must be able to distinguish or flag co-occurrence:

| Symptom | Anxiety | Migraine Prodrome | Both |
|---|---|---|---|
| Irritability / mood change | ✅ | ✅ | ✅ |
| Fatigue | ✅ | ✅ | ✅ |
| Difficulty concentrating | ✅ | ✅ | ✅ |
| Muscle tension (neck/shoulders) | ✅ | ✅ | ✅ |
| Sleep disturbance | ✅ | ✅ | ✅ |
| Nausea | ✅ (panic) | ✅ | ✅ |
| Light/sound sensitivity | Occasional | ✅ | Possible |
| Yawning | ❌ | ✅ | Migraine-specific |
| Food cravings | ❌ | ✅ | Migraine-specific |
| Racing thoughts | ✅ | ❌ | Anxiety-specific |
| Palpitations | ✅ | ❌ | Anxiety-specific |
| Trembling / sweating | ✅ (panic) | ❌ | Anxiety-specific |

**RAG Logic Note:** If a user reports prodrome-like symptoms + elevated anxiety/stress markers, the chatbot should flag **dual signal** — both a potential anxiety episode AND a potential migraine attack. It should not dismiss prodromal indicators simply because anxiety is present.

---

## 5. ANXIETY AS A MIGRAINE TRIGGER

### 5.1 Acute Anxiety / Stress Events
- Acute anxiety episodes (panic attacks, exam stress, acute threat) can directly trigger migraine within hours
- Mechanism: catecholamine surge → trigeminovascular activation

### 5.2 Chronic Anxiety
- Persistent anxiety lowers migraine threshold over time
- Associated with higher attack frequency and transition from episodic to chronic migraine
- Increases medication overuse risk (self-medication with anxiolytics or analgesics)

### 5.3 Let-Down Effect
- Migraine may paradoxically occur during **relief from anxiety** (e.g., post-exam, weekend after stressful week)
- This "let-down migraine" is well-documented and relates to sudden cortisol drop

### 5.4 Anticipatory Anxiety About Migraine
- Fear of the next attack ("when will the next one hit?") creates a chronic low-grade anxiety state
- This creates a self-reinforcing cycle: anxiety → migraine → more anxiety
- Clinically termed **ictal anxiety** or **interictal anxiety** depending on timing relative to attack

---

## 6. IMPACT ON EARLY WARNING PREDICTION MODEL

### 6.1 Anxiety as a High-Risk Contextual Flag
When a user reports high anxiety levels (score ≥7/10) in the same session, the chatbot should:
- Elevate the overall migraine risk assessment by one level (e.g., Low → Moderate)
- Note the anxiety-migraine connection explicitly to the user
- Recommend anxiety-reduction strategies alongside standard prodrome guidance

### 6.2 Anxiety in Trigger Logging
Anxiety/stress should always be logged as a trigger dimension. Suggested data fields:
- `stress_level`: 1–10 (user self-report)
- `anxiety_episode_today`: Yes / No
- `panic_attack_today`: Yes / No
- `anxiety_diagnosis`: Yes / No (optional, user-consented)
- `anxiety_medication`: (name only, no dosing)

### 6.3 Pattern Recognition Notes
- Users with comorbid anxiety may have **higher baseline prodromal symptom scores** even between attacks — the model should account for personal baselines rather than absolute thresholds
- A sudden increase from a user's personal baseline is more meaningful than absolute symptom scores

---

## 7. MANAGEMENT INTERSECTION (EDUCATIONAL ONLY)

### 7.1 Treatments That Address Both Conditions
| Treatment | Anxiety Benefit | Migraine Benefit |
|---|---|---|
| Amitriptyline (TCA) | Moderate | ✅ First-line preventive |
| Venlafaxine (SNRI) | ✅ FDA-approved for GAD | Evidence for migraine prevention |
| Propranolol (beta-blocker) | Situational anxiety | ✅ First-line migraine preventive |
| CBT (Cognitive Behavioral Therapy) | ✅ Gold standard | Strong evidence for migraine |
| Mindfulness-Based Stress Reduction (MBSR) | ✅ Strong evidence | Moderate evidence for migraine |
| Biofeedback | ✅ Effective | ✅ Evidence-based for migraine |
| Regular aerobic exercise | ✅ Strong evidence | ✅ Preventive evidence |

> ⚠️ **Chatbot Rule:** Never recommend specific medications or doses. If users ask about treatment, direct them to their treating physician. Educational information about drug classes is permitted.

### 7.2 Non-Pharmacological Strategies (Safe to Recommend)
- **Diaphragmatic breathing / box breathing** — activates parasympathetic system; may abort early anxiety-triggered attacks
- **Progressive muscle relaxation** — addresses both neck tension (migraine trigger) and generalized anxiety
- **Regular sleep schedule** — reduces both anxiety baseline and migraine risk
- **Journaling** — both a migraine diary and anxiety CBT component
- **Reducing caffeine and alcohol** — relevant triggers for both conditions

---

## 8. CHATBOT INTERACTION GUIDELINES FOR ANXIOUS USERS

### 8.1 Tone Recommendations
- Use calm, reassuring language
- Avoid catastrophizing ("your migraine risk is high" → "you may be entering a higher-risk period")
- Acknowledge the emotional burden: "I understand living with both anxiety and migraines can be especially challenging."
- Do not dismiss anxiety symptoms as "just stress"

### 8.2 Safe Messaging Principles
- If a user expresses significant distress, worry about their health, or panic, acknowledge their feelings before providing information
- If a user reports severe anxiety symptoms significantly impacting daily functioning, recommend professional mental health support alongside migraine management

### 8.3 Escalation to Mental Health Support
The chatbot should suggest mental health professional support if:
- User reports anxiety significantly impacting daily life (score ≥8/10 consistently)
- User mentions panic attacks occurring multiple times per week
- User expresses hopelessness or significant distress related to their conditions

---

## 9. KEY CLINICAL REFERENCES

- Buse DC, et al. *Anxiety and migraine.* Headache, 2020.
- Antonaci F, et al. *Migraine and psychiatric comorbidity.* J Headache Pain, 2011.
- Seng EK, et al. *Psychiatric comorbidity in episodic and chronic migraine.* Headache, 2017.
- Lipton RB, et al. *Prevalence and burden of migraine in the US.* Headache, 2007.
- DSM-5. *American Psychiatric Association*, 2013.
- ICD-11. *World Health Organization*, 2022.
- Schur EA, et al. *Bidirectional association between anxiety and migraine.* Cephalalgia, 2009.

---

*For internal RAG system use. Not for direct patient distribution without clinical review.*
