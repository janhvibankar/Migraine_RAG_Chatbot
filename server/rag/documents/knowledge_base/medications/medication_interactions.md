# Medication Interactions in Migraine Treatment

> **Disclaimer:** This document is intended for use in a RAG-based clinical decision support system for migraine early warning prediction. Interaction information is drawn from established pharmacological databases and clinical literature. It does not replace clinical pharmacist review or physician judgment. Drug interactions vary by individual patient factors including genetics, renal/hepatic function, age, and comorbidities.

---

## 1. Overview and Clinical Importance

Drug interactions in migraine management are clinically significant because:
- Migraine patients commonly have comorbidities requiring concurrent medications (depression, anxiety, epilepsy, cardiovascular disease, hypertension).
- Multiple migraine drugs affect serotonergic, adrenergic, and cardiovascular systems, creating interaction-rich scenarios.
- Some interactions are potentially life-threatening (serotonin syndrome, cardiac arrhythmias).
- Pharmacokinetic interactions can unpredictably alter drug levels of both migraine and comorbidity medications.

### Interaction Severity Classification Used in This Document

| Severity | Definition |
|----------|------------|
| **CONTRAINDICATED** | Combination must never be used; risk of serious harm |
| **MAJOR** | Combination may cause significant morbidity; use only if clearly necessary with close monitoring |
| **MODERATE** | Combination may cause complications; monitor or adjust dose |
| **MINOR** | Interaction exists but clinical significance is low; monitor if applicable |

---

## 2. Triptan Interactions

### 2.1 Triptans + MAO Inhibitors (MAOIs)

| Interaction | Severity | Mechanism | Clinical Effect | Management |
|-------------|----------|-----------|-----------------|------------|
| Any triptan + MAOI (phenelzine, tranylcypromine, selegiline, rasagiline, safinamide) | **CONTRAINDICATED** | MAOIs inhibit MAO-A, which metabolizes serotonin; triptans increase serotonin activity → excess serotonin | Serotonin syndrome (agitation, tremor, hyperreflexia, hyperthermia, clonus, tachycardia) | Do not combine; wait ≥14 days after stopping MAOI before using triptan |

**Serotonin Syndrome Symptoms (recognition for early warning system):**
- Agitation, restlessness, confusion
- Rapid heart rate, high blood pressure, dilated pupils
- Loss of muscle coordination, twitching muscles
- Heavy sweating, diarrhea
- High body temperature (>38°C)
- Severe cases: seizures, irregular heartbeat, unconsciousness

---

### 2.2 Triptans + SSRIs / SNRIs

| Interaction | Severity | Mechanism | Clinical Effect | Management |
|-------------|----------|-----------|-----------------|------------|
| Triptans + SSRIs (fluoxetine, sertraline, paroxetine, citalopram, escitalopram, fluvoxamine) | **MODERATE-MAJOR** | Additive serotonergic effects | Serotonin syndrome risk (lower than MAOI combination but documented) | Use lowest effective triptan dose; educate patient on serotonin syndrome symptoms; monitor closely; avoid combination if possible |
| Triptans + SNRIs (venlafaxine, duloxetine, desvenlafaxine) | **MODERATE** | Similar to SSRIs | Serotonin syndrome risk | Same precautions |
| Triptans + Tramadol | **MAJOR** | Serotonergic mechanisms | Serotonin syndrome | Avoid combination |
| Triptans + Linezolid (antibiotic) | **MAJOR** | Linezolid is a reversible MAOI | Serotonin syndrome | Avoid; monitor closely |

**Note:** FDA issued a safety communication in 2010 about triptan + SSRI/SNRI combination. Many major headache societies (IHS, AHS) have responded that the absolute risk is low and the combination can be used cautiously when clinically indicated, given that depression is a common migraine comorbidity.

---

### 2.3 Triptans + Ergotamine / Ergot Alkaloids

| Interaction | Severity | Mechanism | Clinical Effect | Management |
|-------------|----------|-----------|-----------------|------------|
| Triptans + Ergotamine/DHE | **CONTRAINDICATED** | Additive vasoconstrictive effects | Severe, prolonged vasospasm; risk of ischemia (coronary, peripheral, cerebral) | Minimum 24 hours between ergotamine and triptan; minimum 24 hours between triptan and ergotamine |

---

### 2.4 Triptans + Propranolol (Beta-Blocker)

| Drug Pair | Severity | Mechanism | Effect | Management |
|-----------|----------|-----------|--------|------------|
| Rizatriptan + Propranolol | **MAJOR** | Propranolol inhibits MAO (rizatriptan partly metabolized by MAO); also inhibits CYP metabolism | Increased rizatriptan plasma levels by up to 70–80% | Use rizatriptan 5 mg (not 10 mg) in patients on propranolol; consider alternative triptan |
| Other triptans + Propranolol | Minor | Minimal CYP interaction with most other triptans | Modest increase in some triptans | Standard doses; monitor |

---

### 2.5 Triptans + CYP3A4 Inhibitors / Inducers

| Drug | Affected Triptan(s) | Interaction | Effect | Management |
|------|---------------------|-------------|--------|------------|
| Fluconazole, itraconazole, ketoconazole (azole antifungals) | Eletriptan | Inhibit CYP3A4 → ↑ eletriptan levels | Risk of enhanced side effects, chest symptoms | Avoid eletriptan within 72 hours of potent CYP3A4 inhibitors |
| Clarithromycin, erythromycin (macrolide antibiotics) | Eletriptan | Inhibit CYP3A4 | Same as above | Avoid eletriptan within 72 hours |
| HIV protease inhibitors (ritonavir, etc.) | Eletriptan | Potent CYP3A4 inhibition | Markedly elevated eletriptan | Contraindicated combination |
| St. John's Wort | Sumatriptan | CYP3A4 induction + serotonergic effects | Serotonin syndrome risk; may also reduce some triptan levels | Avoid |

---

### 2.6 Triptans + Medications Affecting Cardiac Conduction

| Interaction | Severity | Notes |
|-------------|----------|-------|
| Triptans + QT-prolonging drugs (antipsychotics, certain antibiotics — fluoroquinolones, azithromycin) | MINOR-MODERATE | Triptans have minimal QT effect; additive theoretical risk; monitor in patients with other QT risks |

---

## 3. CGRP Therapy Interactions

### 3.1 Gepants (Ubrogepant, Rimegepant, Atogepant) — CYP3A4 and P-gp Interactions

| Interaction | Severity | Mechanism | Effect | Management |
|-------------|----------|-----------|--------|------------|
| Rimegepant/Ubrogepant + Strong CYP3A4 inhibitors (ketoconazole, itraconazole, clarithromycin, ritonavir) | **CONTRAINDICATED / MAJOR** | CYP3A4 inhibition → markedly increased gepant plasma levels | Toxicity risk (CNS, hepatic) | Contraindicated per prescribing information |
| Rimegepant/Ubrogepant + Strong CYP3A4 inducers (rifampicin, carbamazepine, phenytoin, phenobarbital, St. John's Wort) | **MAJOR** | CYP3A4 induction → dramatically reduced gepant levels | Therapeutic failure | Avoid combination |
| Rimegepant + P-gp inhibitors (cyclosporin, verapamil) | **MODERATE** | P-glycoprotein inhibition → increased rimegepant absorption | Increased drug levels | Avoid or reduce dose |
| Atogepant + CYP3A4 inhibitors | **MODERATE-MAJOR** | Same mechanism | Increased atogepant exposure | Dose reduction required per prescribing information |

---

### 3.2 CGRP Monoclonal Antibodies — Drug Interactions

CGRP monoclonal antibodies (erenumab, fremanezumab, galcanezumab, eptinezumab) are large protein molecules that are NOT metabolized by CYP enzymes and do not interact with drug-metabolizing enzymes.

**Known Interactions:**
- No significant pharmacokinetic drug-drug interactions identified.
- **Theoretical concern:** Concurrent use with other vasoconstrictive drugs could reduce CGRP-mediated vasodilation, potentially increasing ischemia risk in patients with vascular disease.
- **Concurrent CGRP therapies:** Using a CGRP mAb + a gepant for acute treatment is common in clinical practice and appears safe; combinations of two different CGRP mAbs are not recommended.

---

## 4. Preventive Medication Interactions

### 4.1 Valproate Interactions

| Drug/Class | Severity | Mechanism | Effect | Management |
|------------|----------|-----------|--------|------------|
| Carbamazepine | MODERATE | Mutual enzyme induction | Both drugs reduce each other's levels | Monitor levels; adjust doses |
| Lamotrigine | **MAJOR** | Valproate inhibits glucuronidation of lamotrigine | Lamotrigine levels increase 2–3 fold → toxicity (dizziness, diplopia, Stevens-Johnson syndrome) | **Halve the lamotrigine dose when adding valproate; titrate slowly** |
| Phenytoin | MAJOR | Complex interaction: valproate displaces phenytoin from protein binding + inhibits metabolism | Unpredictable phenytoin levels; toxicity risk | Monitor phenytoin levels closely |
| Phenobarbital | MAJOR | Valproate inhibits phenobarbital metabolism | Increased phenobarbital levels; sedation | Monitor levels |
| Aspirin / NSAIDs | MODERATE | Displace valproate from protein binding; NSAIDs inhibit platelet function | Increased free valproate levels; additive antiplatelet effect → bleeding risk | Monitor; avoid high-dose NSAIDs |
| Warfarin | MODERATE | Valproate displaces warfarin from albumin | Increased free warfarin → elevated INR | Monitor INR closely when starting/stopping valproate |
| Clonazepam | MODERATE | Additive CNS depression | Excessive sedation, absence status epilepticus risk (in some patients) | Monitor |
| Topiramate | MODERATE | Unknown mechanism | Hyperammonemia (even with normal LFTs); encephalopathy | Monitor ammonia levels if encephalopathy symptoms develop |
| Zidovudine (HIV drug) | MODERATE | Valproate inhibits glucuronidation of zidovudine | Elevated zidovudine toxicity | Monitor CBC, liver function |
| Meropenem / Imipenem (carbapenems) | **MAJOR** | Rapid reduction of valproate levels via unknown mechanism | Loss of seizure/migraine control | Avoid if possible; monitor valproate levels daily if carbapenem needed |

---

### 4.2 Topiramate Interactions

| Drug/Class | Severity | Mechanism | Effect | Management |
|------------|----------|-----------|--------|------------|
| Oral contraceptives (estrogen-containing) | **MAJOR** | Topiramate induces CYP3A4 → reduced estrogen levels | Reduced contraceptive efficacy at doses >200 mg/day (some effect from lower doses) | Use non-hormonal or higher-dose/alternative contraception; critical in women of childbearing potential on topiramate |
| Valproate | MODERATE | Additive carbonic anhydrase inhibition | Hyperammonemia + encephalopathy risk | Monitor ammonia; educate patient on symptoms |
| Carbonic anhydrase inhibitors (acetazolamide, zonisamide) | MAJOR | Additive carbonic anhydrase inhibition | Increased kidney stone risk; metabolic acidosis | Avoid combination |
| CNS depressants (benzodiazepines, opioids, alcohol, sleep medications) | MODERATE | Additive CNS depression | Excessive sedation | Caution; adjust doses |
| Metformin | MODERATE | Carbonic anhydrase inhibition → lactic acidosis risk | Increased metformin-associated lactic acidosis risk | Monitor renal function; consider dose reduction |
| Phenytoin | MODERATE | Enzyme induction/inhibition effects | Phenytoin levels may increase or decrease | Monitor phenytoin levels |
| Hydrochlorothiazide | MODERATE | Additive hypokalemia | Electrolyte imbalance | Monitor electrolytes |
| Amitriptyline | MINOR-MODERATE | CYP2C19 interaction | Modest increase in amitriptyline levels | Monitor for TCA side effects |
| Lithium | MINOR | Renal effects | May affect lithium levels via renal carbonic anhydrase | Monitor lithium levels |

---

### 4.3 Beta-Blocker Interactions (Propranolol, Metoprolol)

| Drug/Class | Severity | Mechanism | Effect | Management |
|------------|----------|-----------|--------|------------|
| Verapamil / Diltiazem | **MAJOR** | Additive AV nodal blockade | Bradycardia, heart block, hypotension, cardiac arrest | Avoid combination or use with extreme caution and cardiac monitoring |
| Digoxin | MAJOR | Additive AV nodal blockade | Symptomatic bradycardia, complete heart block | Monitor heart rate; ECG monitoring |
| Amiodarone | **MAJOR** | Additive negative chronotropy/dromotropy | Severe bradycardia, heart block | Avoid or monitor intensively |
| Clonidine | **MAJOR** | Clonidine reduces sympathetic tone; abrupt clonidine withdrawal causes sympathetic surge that beta-blocker cannot counteract | Hypertensive crisis on clonidine withdrawal | If stopping both, taper beta-blocker first, then clonidine |
| NSAIDs | MODERATE | NSAIDs reduce renal prostaglandins → sodium retention → blunts antihypertensive effect | Reduced antihypertensive/migraine preventive efficacy | Minimize NSAID use; monitor BP |
| Epinephrine (adrenaline) | MAJOR | Unopposed alpha-1 stimulation | Hypertension with reflex bradycardia | Alert patients; medical personnel should be aware for emergency situations |
| Antidiabetic agents (insulin, sulfonylureas) | MODERATE | Masks sympathetic signs of hypoglycemia (palpitations, tremor) | Delayed recognition of hypoglycemia | Teach patients to rely on diaphoresis; monitor glucose closely |
| Lidocaine | MODERATE | Beta-blockers reduce hepatic blood flow → reduced lidocaine clearance | Elevated lidocaine levels → toxicity | Reduce lidocaine dose |
| SSRIs (fluoxetine, paroxetine) | MODERATE | CYP2D6 inhibition → increased metoprolol/propranolol levels | Bradycardia, hypotension | Monitor heart rate; consider dose reduction |
| Terbinafine | MODERATE | CYP2D6 inhibition → increased metoprolol levels | Bradycardia | Monitor |
| Rizatriptan | MAJOR (see Triptan section) | Propranolol specifically inhibits rizatriptan metabolism | ↑ rizatriptan levels | Reduce rizatriptan to 5 mg |

---

### 4.4 Amitriptyline / TCA Interactions

| Drug/Class | Severity | Mechanism | Effect | Management |
|------------|----------|-----------|--------|------------|
| MAOIs | **CONTRAINDICATED** | Additive serotonergic and adrenergic effects | Serotonin syndrome, hypertensive crisis, seizures, death | Absolute contraindication; minimum 14-day washout |
| SSRIs / SNRIs | MAJOR | CYP2D6 inhibition (paroxetine, fluoxetine) → increased TCA levels; serotonergic effects | TCA toxicity; serotonin syndrome risk | Avoid paroxetine and fluoxetine with TCAs if possible; use sertraline, escitalopram if needed; monitor |
| Tramadol | MAJOR | Serotonergic + seizure threshold lowering | Serotonin syndrome; seizures | Avoid |
| QT-prolonging drugs (antipsychotics, quinolone antibiotics, class I/III antiarrhythmics) | MAJOR | Additive QTc prolongation | Torsades de Pointes, ventricular fibrillation | Monitor QTc; avoid combination or use alternatives |
| Anticholinergic drugs (antihistamines, antimuscarinics, antipsychotics) | MODERATE | Additive anticholinergic effects | Urinary retention, constipation, confusion, hyperthermia | Minimize anticholinergic burden, especially in elderly |
| CNS depressants (opioids, benzodiazepines, alcohol) | MODERATE | Additive CNS and respiratory depression | Excessive sedation | Caution; dose reduction |
| Clonidine | MAJOR | TCAs block alpha-2 adrenergic receptors → clonidine's antihypertensive effect lost | Loss of blood pressure control; rebound hypertension | Avoid combination |
| Carbamazepine | MODERATE | CYP3A4/2D6 induction → reduced TCA levels | Reduced antidepressant/migraine efficacy; also TCA may increase carbamazepine epoxide levels (toxic metabolite) | Monitor levels |
| Warfarin | MODERATE | TCAs may inhibit warfarin metabolism | Elevated INR | Monitor INR |
| Cimetidine | MINOR-MODERATE | CYP inhibition | Increased TCA levels | Monitor; use alternative antacid |
| Valproate | MODERATE | Additive CNS depression; valproate inhibits TCA metabolism | Increased TCA levels | Monitor |
| Topiramate | MINOR-MODERATE | CYP2C19 effect | Modest TCA level increase | Monitor |

---

### 4.5 Venlafaxine / SNRI Interactions

| Drug/Class | Severity | Mechanism | Effect | Management |
|------------|----------|-----------|--------|------------|
| MAOIs | **CONTRAINDICATED** | Serotonin syndrome | Fatal risk | 14-day washout after MAOI; 7 days after stopping venlafaxine |
| Triptans | MODERATE | Serotonergic additivity | Serotonin syndrome (low but real risk) | Use cautiously; educate patient; monitor |
| Tramadol | MAJOR | Dual serotonergic risk | Serotonin syndrome; seizures | Avoid |
| Lithium | MODERATE | Additive serotonergic effects | Serotonin syndrome risk | Monitor lithium levels; watch for serotonin syndrome symptoms |
| Linezolid | MAJOR | Reversible MAOI activity | Serotonin syndrome | Avoid |
| Warfarin | MODERATE | Serotonin-mediated platelet dysfunction | Increased bleeding risk | Monitor INR |
| Aspirin / NSAIDs + SNRI | MODERATE | Additive antiplatelet effects via serotonin depletion in platelets | GI bleeding risk | Caution; add gastroprotection |

---

## 5. OTC Medication Interactions

### 5.1 NSAIDs + Other Drugs

| Drug/Class | Severity | Mechanism | Effect | Management |
|------------|----------|-----------|--------|------------|
| NSAIDs + Warfarin | **MAJOR** | Antiplatelet effect + protein binding displacement + GI mucosal injury | Serious bleeding risk, elevated INR | Monitor INR; consider acetaminophen instead; add PPI |
| NSAIDs + Direct oral anticoagulants (DOACs: apixaban, rivaroxaban, dabigatran) | **MAJOR** | Antiplatelet + anticoagulant effects | Major bleeding risk | Avoid; use acetaminophen if analgesia needed |
| NSAIDs + Aspirin | MAJOR | Ibuprofen blocks aspirin's irreversible COX-1 effect on platelets (competitive antagonism) | Reduced cardioprotective effect of aspirin | If on low-dose aspirin for CV protection, take aspirin ≥2 hours before ibuprofen, or switch to naproxen/acetaminophen |
| NSAIDs + ACE inhibitors / ARBs | MODERATE | Reduced renal prostaglandins → reduced antihypertensive effect + nephrotoxicity | Blood pressure rise; AKI (triple whammy with diuretics) | Monitor BP and renal function; minimize NSAID use |
| NSAIDs + Diuretics | MODERATE | Reduced prostaglandin-mediated renal perfusion | Diuretic efficacy reduced; AKI risk | Monitor renal function; avoid regular combined use |
| NSAIDs + Corticosteroids | MAJOR | Additive GI mucosal damage | Peptic ulceration and GI bleeding | Add PPI; minimize duration |
| NSAIDs + SSRIs/SNRIs | MODERATE | Platelet serotonin depletion + NSAID antiplatelet effect | GI bleeding risk doubles/triples | Add PPI; monitor |
| NSAIDs + Lithium | MAJOR | NSAIDs reduce renal lithium excretion | Lithium toxicity (tremor, confusion, nephropathy) | Monitor lithium levels; avoid or use acetaminophen; adjust lithium dose |
| NSAIDs + Methotrexate | **MAJOR** | NSAIDs reduce renal methotrexate excretion | Methotrexate toxicity (myelosuppression, mucositis) | Avoid combination or extreme caution with monitoring |
| NSAIDs + Cyclosporin / Tacrolimus | MAJOR | Additive nephrotoxicity | AKI | Avoid regular NSAID use |

---

### 5.2 Acetaminophen + Other Drugs

| Drug/Class | Severity | Mechanism | Effect | Management |
|------------|----------|-----------|--------|------------|
| Acetaminophen + Warfarin | MODERATE | High-dose/regular acetaminophen inhibits CYP2C9 → reduced warfarin metabolism | Elevated INR; bleeding risk | Monitor INR when acetaminophen used regularly; preferred over NSAIDs but not risk-free |
| Acetaminophen + Alcohol | MAJOR | Alcohol induces CYP2E1 → toxic metabolite (NAPQI) formation increased | Hepatotoxicity risk at lower doses | Limit acetaminophen to 2 g/day in regular drinkers |
| Acetaminophen + Isoniazid (TB drug) | MAJOR | CYP2E1 induction similar to alcohol | Hepatotoxicity | Limit doses; consider alternative analgesic |
| Acetaminophen + Carbamazepine, Phenytoin, Rifampicin | MODERATE | Enzyme induction → increased toxic NAPQI production | Hepatotoxicity risk | Use conservative doses |
| Acetaminophen + Probenecid | MINOR | Inhibits acetaminophen glucuronidation | Elevated acetaminophen levels | Monitor |

---

### 5.3 Caffeine Interactions (Relevant for Excedrin Migraine / Caffeine-containing Combination Analgesics)

| Drug/Class | Severity | Effect | Notes |
|------------|----------|--------|-------|
| Caffeine + Theophylline | MAJOR | Additive CNS stimulation; theophylline levels increased by caffeine | Insomnia, tachycardia, anxiety, seizures risk | Avoid high caffeine with theophylline |
| Caffeine + Adenosine (cardiac procedure drug) | MAJOR | Caffeine is adenosine antagonist | Blocks adenosine's cardiac effects in stress testing | Withhold caffeine ≥24 hours before adenosine cardiac tests |
| Caffeine + Ciprofloxacin | MODERATE | CYP1A2 inhibition | Elevated caffeine levels | Excess caffeine effects |
| Caffeine + Beta-blockers | MINOR | Caffeine's cardiovascular stimulation | Partial attenuation of beta-blocker effect | Generally minor clinically |

---

## 6. Interactions by Comorbidity Context

### 6.1 Migraine + Depression

Most common comorbidity pair — careful management needed.

| Clinical Scenario | Interaction Risk | Preferred Approach |
|-------------------|-----------------|-------------------|
| Triptan + SSRI | Serotonin syndrome (low risk but real) | Use with awareness; educate patient; most guidelines accept cautious use |
| Amitriptyline + SSRI (fluoxetine/paroxetine) | CYP2D6 inhibition → TCA toxicity; serotonin syndrome | Avoid paroxetine/fluoxetine with TCA; use sertraline/escitalopram with ECG monitoring |
| Venlafaxine (SNRI) + Triptan | Low serotonin syndrome risk | Acceptable with monitoring |
| MAOIs + Triptans/TCAs | **FATAL risk** | Absolute contraindication |

---

### 6.2 Migraine + Epilepsy

| Clinical Scenario | Interaction Risk | Notes |
|-------------------|-----------------|-------|
| Valproate + Lamotrigine | Lamotrigine toxicity | Halve lamotrigine dose |
| Valproate + Topiramate | Hyperammonemia | Monitor |
| Topiramate + OCP | Contraceptive failure | Alternative contraception required |
| Carbamazepine + Triptan | CYP induction may reduce some triptan levels | — |
| Phenytoin/Phenobarbital + Gepants | Markedly reduced gepant levels (CYP3A4 induction) | Gepants contraindicated with strong CYP3A4 inducers |

---

### 6.3 Migraine + Hypertension

| Clinical Scenario | Interaction Risk | Notes |
|-------------------|-----------------|-------|
| Beta-blocker + Verapamil | Heart block | Contraindicated |
| NSAIDs (for acute migraine) + Antihypertensives | Blunted BP control | Minimize NSAID frequency |
| Triptans in uncontrolled hypertension | Additive pressor effect | Triptans are contraindicated in uncontrolled hypertension |
| Ergotamine in hypertension | Severe hypertensive crisis | Contraindicated |

---

### 6.4 Migraine + Cardiovascular Disease

| Clinical Scenario | Interaction Risk | Notes |
|-------------------|-----------------|-------|
| Triptans + CAD | Coronary vasospasm | Contraindicated in CAD, angina, prior MI |
| Ergotamine + CAD | Severe coronary vasospasm | Absolutely contraindicated |
| NSAIDs + cardiac risk factors | MI risk increase | Use acetaminophen; minimize NSAID use |
| CGRP mAbs in vascular disease | Theoretical: loss of CGRP vasodilatory protection | Use caution; not contraindicated but monitor |
| Gepants + cardiovascular medications | CYP interactions (see Section 3) | Check interactions individually |

---

### 6.5 Migraine + Anticoagulation (Warfarin / DOACs)

| Acute Migraine Treatment | Interaction | Management |
|--------------------------|-------------|------------|
| NSAIDs (ibuprofen, aspirin, naproxen) | Major bleeding risk | **Avoid; use acetaminophen** |
| Acetaminophen | Moderate INR elevation with regular use | Monitor INR |
| Triptans | Minimal interaction | Generally safe |
| Gepants | CYP interactions (check specific drug) | Check individual gepant |
| CGRP mAbs | No significant interaction | Safe |

---

## 7. Herbal / Nutraceutical Interactions

| Nutraceutical | Interacting Drug | Severity | Effect | Notes |
|---------------|-----------------|----------|--------|-------|
| St. John's Wort | Triptans | MAJOR | Serotonin syndrome risk | Avoid |
| St. John's Wort | Warfarin | MAJOR | Reduced warfarin levels → thromboembolic risk | Avoid |
| St. John's Wort | OCP | MAJOR | Reduced contraceptive efficacy | Avoid |
| St. John's Wort | Gepants, many drugs | MAJOR | CYP3A4 induction → reduced drug levels | Avoid if on any CYP-metabolized drug |
| Magnesium (high dose) | Calcium channel blockers | MODERATE | Additive hypotension | Monitor BP |
| Magnesium (high dose) | Neuromuscular blocking agents | MAJOR | Enhanced neuromuscular blockade | Clinical setting — inform anesthesiologist |
| Feverfew | Anticoagulants, NSAIDs, antiplatelet drugs | MODERATE | Additive antiplatelet effects; bleeding risk | Monitor bleeding time; avoid with warfarin |
| Coenzyme Q10 | Warfarin | MODERATE | Reduced warfarin efficacy | Monitor INR |
| Riboflavin (B2) | No major interactions at migraine prevention doses | — | — | Very safe |
| Melatonin | CNS depressants | MINOR | Additive sedation | Bedtime dosing minimizes interaction |
| Butterbur | Hepatotoxic drugs | MODERATE | Additive hepatotoxicity | Only use PA-free butterbur preparations; avoid with valproate |
| Ginkgo | Anticoagulants, triptans | MODERATE | Antiplatelet effect; rare case reports of serotonin syndrome with triptans | Avoid with anticoagulants |

---

## 8. Food and Beverage Interactions

| Drug | Food/Beverage | Interaction Type | Effect | Management |
|------|---------------|-----------------|--------|------------|
| MAOIs (if used for comorbid depression) | Tyramine-rich foods (aged cheese, cured meats, red wine, soy sauce, fava beans, fermented foods) | Pharmacodynamic | **Hypertensive crisis** | **Strict dietary restrictions required with MAOIs** |
| Topiramate | Alcohol | Pharmacodynamic | Additive CNS depression; metabolic acidosis risk | Avoid alcohol |
| Valproate | Alcohol | Pharmacodynamic | Enhanced hepatotoxicity; CNS depression | Avoid alcohol |
| Ergotamine | Grapefruit juice | Pharmacokinetic (CYP3A4) | Increased ergotamine levels → toxicity | Avoid grapefruit |
| Triptans (eletriptan) | Grapefruit juice | Pharmacokinetic (CYP3A4) | Elevated eletriptan levels | Avoid grapefruit with eletriptan |
| Beta-blockers | High-protein meals | Pharmacokinetic | Increased propranolol bioavailability with food | Consistent administration timing |
| Amitriptyline | Alcohol | Pharmacodynamic | Additive CNS depression; anti-cholinergic effects enhanced | Avoid alcohol |
| Acetaminophen | Alcohol (chronic use) | Pharmacokinetic/toxic | Hepatotoxicity | Limit acetaminophen to ≤2 g/day with regular alcohol use |
| NSAIDs | Alcohol | Pharmacodynamic | Additive GI irritation; GI bleeding risk | Avoid alcohol with NSAIDs |
| Caffeine | Certain foods/drinks containing tyramine | — | Caffeine itself is a trigger for some migraineurs | Monitor personal trigger patterns |

---

## 9. Interaction Lookup Quick Reference Table

| Drug A | Drug B | Severity | Primary Risk |
|--------|--------|----------|-------------|
| Any Triptan | MAOI | **CONTRAINDICATED** | Serotonin syndrome / death |
| Any Triptan | Ergotamine | **CONTRAINDICATED** | Vasospasm / ischemia |
| Any Triptan | SSRI/SNRI | MAJOR | Serotonin syndrome |
| Rizatriptan | Propranolol | MAJOR | ↑ rizatriptan levels |
| Eletriptan | Azole antifungals / macrolides / HIV PIs | MAJOR | ↑ eletriptan levels |
| Valproate | Lamotrigine | MAJOR | Lamotrigine toxicity |
| Valproate | Carbapenems | MAJOR | ↓ valproate levels → seizure/migraine |
| Topiramate | OCP | MAJOR | Contraceptive failure |
| Valproate + Topiramate | Combined use | MODERATE | Hyperammonemia |
| Amitriptyline | MAOI | **CONTRAINDICATED** | Serotonin syndrome / hypertensive crisis |
| Amitriptyline | Paroxetine / Fluoxetine | MAJOR | ↑ TCA levels + serotonin risk |
| Beta-blocker | Verapamil / Diltiazem | MAJOR | Heart block |
| Beta-blocker | Clonidine (withdrawal) | MAJOR | Hypertensive crisis |
| NSAIDs | Warfarin / DOACs | MAJOR | Serious bleeding |
| NSAIDs | ACE inhibitors + Diuretics | MAJOR | AKI (triple whammy) |
| NSAIDs | Lithium | MAJOR | Lithium toxicity |
| Gepants | Strong CYP3A4 inhibitors | MAJOR/CONTRAINDICATED | ↑ gepant levels → toxicity |
| Gepants | Strong CYP3A4 inducers | MAJOR | ↓ gepant levels → failure |
| St. John's Wort | Triptans / OCP / Warfarin | MAJOR | Serotonin syndrome / drug failure |

---

## 10. Key Principles for the RAG Chatbot

When responding to interaction queries, the system should:

1. **Always recommend consulting a pharmacist or prescriber** for confirmation of specific interactions.
2. **Consider patient-specific factors:** age, weight, renal/hepatic function, comorbidities.
3. **Ask about all current medications** including OTCs, herbals, and supplements — not just prescription drugs.
4. **Flag high-severity interactions immediately** (CONTRAINDICATED / MAJOR) with clear language.
5. **Never make a clinical decision** — provide information to support, not replace, clinical judgment.
6. **Recognize that drug interactions are dynamic:** a patient starting a new medication requires re-evaluation of their entire regimen.
7. **MOH is a common, underrecognized "self-interaction"** — overuse of any acute migraine treatment worsens long-term outcomes.

---

## 11. Key References

- Lexicomp Drug Interactions Database.
- Micromedex Drug Interactions.
- Stockley's Drug Interactions (Baxter K, Preston CL, eds.).
- FDA-approved prescribing information for individual agents.
- Gillman PK — Triptans, serotonin agonists, and serotonin syndrome (Headache, 2010).
- American Headache Society position statements on triptan safety with SSRIs/SNRIs.
- NICE BNF Appendix 1: Drug Interactions.
- Tfelt-Hansen P et al. — Pharmacokinetics of triptans (Expert Opinion Drug Metab Toxicol).

---

*Document Version: 1.0 | Intended Use: RAG knowledge base for migraine early warning prediction system | Content Type: Clinical pharmacology — drug interactions reference*
