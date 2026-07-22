export interface BrainDiseaseDetail {
  id: string;
  name: string;
  latinName?: string;
  category:
    | 'Neurodegenerative'
    | 'Cerebrovascular'
    | 'Neuro-Oncology'
    | 'Autoimmune & Inflammatory'
    | 'Epilepsy & Seizures'
    | 'Infectious'
    | 'Traumatic & Injury'
    | 'Psychiatric & Affective'
    | 'Neurodevelopmental & Genetic'
    | 'Movement & Neuromuscular'
    | 'Sleep & Circadian'
    | 'Toxic & Metabolic';
  affectedRegions: string[];
  description: string;
  pathophysiology: string;
  probableCure: string;
  cureStatus: 'Curable' | 'Treatable / Non-Curable' | 'Preventable' | 'Terminal / High Mortality' | 'Symptomatic Control Only';
  medicines: string[];
  treatments: string[];
  mortalityRate: string;
  survivalStats: string;
  riskLevel: 'Low' | 'Moderate' | 'High' | 'Critical / Fatal';
}

export const BRAIN_DISEASES_DATABASE: BrainDiseaseDetail[] = [
  // 1. NEURODEGENERATIVE
  {
    id: 'alzheimers',
    name: "Alzheimer's Disease",
    latinName: 'Morbus Alzheimer',
    category: 'Neurodegenerative',
    affectedRegions: ['Hippocampus', 'Entorhinal Cortex', 'Temporal Lobe', 'Parietal Lobe', 'Frontal Lobe'],
    description: "Progressive neurodegenerative disorder characterized by cognitive decline, memory loss, executive dysfunction, and personality changes.",
    pathophysiology: "Extracellular accumulation of Amyloid-beta (Aβ42) plaques and intracellular hyperphosphorylated Tau neurofibrillary tangles leading to progressive synaptic and neuronal loss.",
    probableCure: "No known cure currently. Monoclonal anti-amyloid antibodies (Lecanemab, Donanemab) slow clinical decline in early stage patients.",
    cureStatus: 'Treatable / Non-Curable',
    medicines: ['Donepezil (Aricept)', 'Memantine (Namenda)', 'Galantamine', 'Rivastigmine (Exelon)', 'Lecanemab (Leqembi)', 'Donanemab (Kisunla)'],
    treatments: ['Cholinesterase Inhibitors', 'NMDA Receptor Antagonists', 'Monoclonal Anti-Amyloid Therapy', 'Cognitive Stimulation Therapy (CST)', 'Physical & Aerobic Exercise'],
    mortalityRate: 'High (6th leading cause of death in US)',
    survivalStats: 'Average survival 4 to 8 years post-diagnosis (range 3 to 20 years). Death commonly from secondary aspiration pneumonia or sepsis.',
    riskLevel: 'High'
  },
  {
    id: 'parkinsons',
    name: "Parkinson's Disease",
    latinName: 'Paralysis Agitans',
    category: 'Neurodegenerative',
    affectedRegions: ['Substantia Nigra', 'Basal Ganglia', 'Striatum', 'Locus Coeruleus'],
    description: "Movement disorder characterized by resting tremor, bradykinesia, rigidity, and postural instability due to loss of dopaminergic neurons.",
    pathophysiology: "Progressive degeneration of dopaminergic neurons in the Substantia Nigra pars compacta with intracellular α-synuclein Lewy body inclusions.",
    probableCure: "No cure. Deep Brain Stimulation (DBS) and dopamine replacement provide substantial symptomatic relief. Stem cell dopaminergic transplant in clinical trials.",
    cureStatus: 'Treatable / Non-Curable',
    medicines: ['Levodopa / Carbidopa (Sinemet)', 'Pramipexole (Mirapex)', 'Ropinirole (Requip)', 'Selegiline (Eldepryl)', 'Rasagiline', 'Entacapone'],
    treatments: ['Subthalamic Nucleus Deep Brain Stimulation (STN-DBS)', 'Focused Ultrasound Thalamotomy (MRgFUS)', 'Physical Therapy (LSVT BIG)', 'Dopamine Agonist Pharmacotherapy'],
    mortalityRate: 'Moderate secondary mortality',
    survivalStats: 'Near-normal life expectancy with optimal medical/surgical management. Increased mortality secondary to falls, immobility, and aspiration.',
    riskLevel: 'Moderate'
  },
  {
    id: 'als',
    name: 'Amyotrophic Lateral Sclerosis (ALS)',
    latinName: 'Morbus Lou Gehrig',
    category: 'Neurodegenerative',
    affectedRegions: ['Motor Cortex', 'Brainstem', 'Anterior Horn of Spinal Cord'],
    description: "Rapidly progressive, fatal neurodegenerative disease targeting upper and lower motor neurons, causing muscle weakness and paralysis.",
    pathophysiology: "TDP-43 proteinopathy, SOD1 mutations, or C9orf72 repeat expansions leading to motor neuron cell death and glutamate excitotoxicity.",
    probableCure: "No cure. Tofersen targeted RNA therapy available for SOD1 mutation subset. Disease-modifying drugs extend life by months.",
    cureStatus: 'Terminal / High Mortality',
    medicines: ['Riluzole (Rilutek)', 'Edaravone (Radicava)', 'Sodium Phenylbutyrate / Taurursodiol (Relyvrio)', 'Tofersen (Qalsody)'],
    treatments: ['Non-Invasive Positive Pressure Ventilation (BiPAP)', 'Percutaneous Endoscopic Gastrostomy (PEG)', 'Speech Generating Devices (AAC)', 'Multidisciplinary ALS Care'],
    mortalityRate: 'Very High (100% fatal)',
    survivalStats: 'Median survival 2 to 5 years from symptom onset. ~10% survive 10+ years. Death usually from respiratory failure.',
    riskLevel: 'Critical / Fatal'
  },
  {
    id: 'huntingtons',
    name: "Huntington's Disease",
    latinName: 'Chorea Hereditaria',
    category: 'Neurodegenerative',
    affectedRegions: ['Caudate Nucleus', 'Putamen', 'Basal Ganglia', 'Frontal Lobe'],
    description: "Autosomal dominant neurodegenerative disease causing involuntary choreiform movements, psychiatric disturbances, and severe cognitive decline.",
    pathophysiology: "CAG trinucleotide repeat expansion (>36 repeats) in the HTT gene, yielding toxic mutant Huntingtin (mHTT) protein aggregations.",
    probableCure: "No cure. Huntingtin-lowering antisense oligonucleotides (ASOs) and gene therapy vectors undergoing phase 2/3 trials.",
    cureStatus: 'Terminal / High Mortality',
    medicines: ['Tetrabenazine (Xenazine)', 'Deutetrabenazine (Austedo)', 'Valbenazine (Ingrezza)', 'Olanzapine', 'Risperidone'],
    treatments: ['VMAT2 Inhibitor Chorea Suppression', 'Psychiatric & Mood Stabilization', 'Physical & Speech Therapy', 'Genetic Counseling'],
    mortalityRate: 'High',
    survivalStats: 'Average survival 15 to 20 years post-symptom onset. Death typically from pneumonia, cardiac failure, or suicide.',
    riskLevel: 'High'
  },
  {
    id: 'ftd',
    name: 'Frontotemporal Dementia (FTD)',
    latinName: 'Morbus Pick',
    category: 'Neurodegenerative',
    affectedRegions: ['Frontal Lobe', 'Temporal Lobe'],
    description: "Group of neurodegenerative disorders marked by early dramatic changes in social behavior, personality, or language skills.",
    pathophysiology: "Focal frontal and temporal lobar degeneration associated with Tau (MAPT), TDP-43, or FUS protein neuronal accumulations.",
    probableCure: "No cure or disease-modifying treatment. Symptomatic management focuses on behavioral control.",
    cureStatus: 'Treatable / Non-Curable',
    medicines: ['Sertraline', 'Trazodone (for disinhibition/agitation)', 'Quetiapine', 'Olanzapine'],
    treatments: ['Behavioral Modification Strategies', 'Speech-Language Therapy (for Primary Progressive Aphasia)', 'Environmental Safety Adaptations'],
    mortalityRate: 'High',
    survivalStats: 'Average survival 6 to 8 years post-diagnosis (range 2 to 12 years).',
    riskLevel: 'High'
  },
  {
    id: 'dlb',
    name: 'Dementia with Lewy Bodies (DLB)',
    latinName: 'Dementia cum Corporibus Lewy',
    category: 'Neurodegenerative',
    affectedRegions: ['Cerebral Cortex', 'Substantia Nigra', 'Locus Coeruleus', 'Brainstem'],
    description: "Dementia characterized by visual hallucinations, parkinsonism, fluctuating cognitive attention, and REM sleep behavior disorder.",
    pathophysiology: "Widespread cortical and subcortical α-synuclein Lewy body inclusions causing severe cholinergic and dopaminergic deficits.",
    probableCure: "No cure. Extreme neuroleptic sensitivity makes typical antipsychotics potentially lethal.",
    cureStatus: 'Treatable / Non-Curable',
    medicines: ['Donepezil', 'Rivastigmine', 'Memantine', 'Carbidopa/Levodopa (low dose)', 'Pimavanserin (Nuplazid)'],
    treatments: ['Cholinesterase Inhibitor Therapy', 'Low-Dose Levodopa for Motor Symptoms', 'Melatonin / Clonazepam for REM Sleep Disorder'],
    mortalityRate: 'High',
    survivalStats: 'Average survival 5 to 8 years post-diagnosis.',
    riskLevel: 'High'
  },
  {
    id: 'cjd',
    name: 'Creutzfeldt-Jakob Disease (CJD)',
    latinName: 'Encephalopathia Spongiformis',
    category: 'Neurodegenerative',
    affectedRegions: ['Cerebral Cortex', 'Thalamus', 'Cerebellum', 'Basal Ganglia'],
    description: "Rapidly progressive, fatal transmissible spongiform encephalopathy causing dementia, severe myoclonus, and ataxia.",
    pathophysiology: "Conversion of normal cellular prion protein (PrPC) into abnormal misfolded scrapie isoform (PrPSc), causing rapid vacuolation and neurodegeneration.",
    probableCure: "No cure. 100% fatal disease. Experimental anti-prion antibodies (PRN100) in early safety testing.",
    cureStatus: 'Terminal / High Mortality',
    medicines: ['Clonazepam (for myoclonus)', 'Valproate', 'Morphine / Palliative Analgesics'],
    treatments: ['Supportive Palliative Care', 'Hospice Care', 'Infection Prevention Protocols'],
    mortalityRate: '100% Fatal',
    survivalStats: '90% of patients die within 1 year of symptom onset (median survival 4 to 5 months).',
    riskLevel: 'Critical / Fatal'
  },

  // 2. CEREBROVASCULAR
  {
    id: 'ischemic_stroke',
    name: 'Ischemic Stroke',
    latinName: 'Apoplexia Ischemica',
    category: 'Cerebrovascular',
    affectedRegions: ['Middle Cerebral Artery Territory', 'Frontal Lobe', 'Parietal Lobe', 'Temporal Lobe'],
    description: "Sudden focal neurological deficit caused by arterial thrombosis or embolism obstructing cerebral blood supply.",
    pathophysiology: "Abrupt reduction in Cerebral Blood Flow (CBF <10 mL/100g/min) causing ischemic core infarction and surrounding salvagable penumbra.",
    probableCure: "Highly curable/reversible if treated immediately (Golden Hour: IV tPA <4.5h, Thrombectomy <24h).",
    cureStatus: 'Curable',
    medicines: ['Alteplase (IV tPA)', 'Tenecteplase (TNK)', 'Aspirin', 'Clopidogrel (Plavix)', 'Atorvastatin (Lipitor)'],
    treatments: ['Intravenous Thrombolysis', 'Endovascular Mechanical Thrombectomy (EVT)', 'Decompressive Hemicraniectomy', 'Comprehensive Stroke Unit Rehabilitation'],
    mortalityRate: 'Moderate (10-15% 30-day mortality)',
    survivalStats: '85% survive initial event; leading cause of long-term disability worldwide.',
    riskLevel: 'High'
  },
  {
    id: 'hemorrhagic_stroke',
    name: 'Hemorrhagic Stroke',
    latinName: 'Apoplexia Hemorrhagica',
    category: 'Cerebrovascular',
    affectedRegions: ['Basal Ganglia', 'Thalamus', 'Cerebellum', 'Pons', 'Subarachnoid Space'],
    description: "Bleeding into brain parenchyma or subarachnoid space caused by vessel rupture, hypertension, or aneurysm.",
    pathophysiology: "Vessel rupture creates expanding hematoma, causing mechanical tissue displacement, intracranial hypertension, and cytotoxic edema.",
    probableCure: "Emergency neurosurgical evacuation or aneurysm clipping/coiling can save life and limit disability.",
    cureStatus: 'Treatable / Non-Curable',
    medicines: ['Nicardipine / Labetalol (BP control)', 'Andexanet Alfa (Factor Xa reversal)', 'Praxbind (Dabigatran reversal)', 'Nimodipine'],
    treatments: ['Endovascular Aneurysm Coiling', 'Surgical Aneurysm Clipping', 'External Ventricular Drain (EVD)', 'Craniotomy Hematoma Evacuation'],
    mortalityRate: 'High (30-40% 30-day mortality)',
    survivalStats: 'Only 20-30% of survivors regain full functional independence at 6 months.',
    riskLevel: 'Critical / Fatal'
  },
  {
    id: 'brain_aneurysm',
    name: 'Cerebral Aneurysm',
    latinName: 'Aneurysma Intracraniale',
    category: 'Cerebrovascular',
    affectedRegions: ['Circle of Willis', 'Anterior Communicating Artery', 'Middle Cerebral Artery'],
    description: "Focal dilation or sac-like outpouching of a cerebral artery wall prone to sudden rupture and subarachnoid hemorrhage.",
    pathophysiology: "Hemodynamic stress weakening the tunica media layer of cerebral arterial bifurcations.",
    probableCure: "Fully curable via prophylactic endovascular coiling or surgical clipping prior to rupture.",
    cureStatus: 'Curable',
    medicines: ['Nimodipine (vasospasm prevention)', 'Antihypertensives', 'Analgesics'],
    treatments: ['Endovascular Platinum Coil Embolization', 'Pipeline Flow Diverter Stenting', 'Microvascular Surgical Clipping'],
    mortalityRate: 'High if ruptured (50% mortality)',
    survivalStats: 'Unruptured: Excellent prognosis (>98% cure). Ruptured: 50% mortality; 33% of survivors have permanent neurological deficit.',
    riskLevel: 'High'
  },
  {
    id: 'avm',
    name: 'Brain Arteriovenous Malformation (AVM)',
    latinName: 'Malformatio Arteriovenosa',
    category: 'Cerebrovascular',
    affectedRegions: ['Cerebral Cortex', 'Subcortical White Matter', 'Cerebellum'],
    description: "Congenital abnormal tangle of blood vessels connecting cerebral arteries directly to veins without intervening capillary bed.",
    pathophysiology: "High-pressure arterial blood feeding directly into low-pressure venous network, leading to vessel wall stress, aneurysm, and rupture risk.",
    probableCure: "Curable via complete surgical resection, stereotactic radiosurgery, or embolization.",
    cureStatus: 'Curable',
    medicines: ['Anticonvulsants (for AVM-related seizures)', 'Antihypertensives'],
    treatments: ['Microsurgical Resection', 'Stereotactic Gamma Knife Radiosurgery', 'Endovascular Embolization (Onyx / N-BCA glue)'],
    mortalityRate: 'Moderate (10% mortality per hemorrhage event)',
    survivalStats: 'Annual rupture risk 2 to 4% per year. Complete obliteration provides permanent cure.',
    riskLevel: 'High'
  },
  {
    id: 'vascular_dementia',
    name: 'Vascular Dementia',
    latinName: 'Dementia Vascularis',
    category: 'Cerebrovascular',
    affectedRegions: ['Subcortical White Matter', 'Thalamus', 'Basal Ganglia', 'Internal Capsule'],
    description: "Cognitive impairment caused by chronic cerebral microvascular disease or recurrent small vessel silent strokes.",
    pathophysiology: "Ischemic leukoaraiosis, arteriolosclerosis, and lacunar infarcts destroying frontostriatal white matter connections.",
    probableCure: "No cure for existing infarcts, but disease progression preventable with strict cardiovascular risk control.",
    cureStatus: 'Preventable',
    medicines: ['Aspirin', 'Clopidogrel', 'Atorvastatin', 'Antihypertensives', 'Donepezil (modest benefit)'],
    treatments: ['Rigorous Blood Pressure Control (<130/80)', 'Statin Lipid Lowering', 'Smoking Cessation & Diabetes Management', 'Cognitive Rehabilitation'],
    mortalityRate: 'Moderate',
    survivalStats: '5-year survival rate ~50% post-diagnosis (slightly lower than Alzheimer\'s due to vascular co-morbidities).',
    riskLevel: 'Moderate'
  },

  // 3. NEURO-ONCOLOGY
  {
    id: 'gbm',
    name: 'Glioblastoma Multiforme (GBM)',
    latinName: 'Astrocytoma Grade IV',
    category: 'Neuro-Oncology',
    affectedRegions: ['Frontal Lobe', 'Temporal Lobe', 'Parietal Lobe', 'Corpus Callosum'],
    description: "Most aggressive and common primary malignant brain tumor in adults (WHO Grade IV Astrocytoma).",
    pathophysiology: "High-grade astrocytic tumor with prominent microvascular proliferation, pseudopalisading necrosis, and diffuse parenchymal invasion.",
    probableCure: "No permanent cure currently. Multimodal therapy extends median survival. CAR-T and mRNA vaccines in active clinical trials.",
    cureStatus: 'Terminal / High Mortality',
    medicines: ['Temozolomide (Temodar)', 'Bevacizumab (Avastin)', 'Dexamethasone (edema reduction)', 'Carmustine Wafers (Gliadel)'],
    treatments: ['Maximal Safe Surgical Resection', 'Stupp Protocol (Radiotherapy + Concurrent Temozolomide)', 'Optune Tumor Treating Fields (TTFields)', 'Clinical Trials'],
    mortalityRate: 'Extremely High (>95% 5-yr mortality)',
    survivalStats: 'Median survival 14 to 16 months with standard of care. 5-year survival rate < 6.8%.',
    riskLevel: 'Critical / Fatal'
  },
  {
    id: 'meningioma',
    name: 'Meningioma',
    latinName: 'Meningioma Benignum',
    category: 'Neuro-Oncology',
    affectedRegions: ['Parasagittal Dural Sinus', 'Sphenoid Wing', 'Olfactory Groove', 'Cerebellopontine Angle'],
    description: "Most common benign primary brain tumor, arising from arachnoid cap cells of the meninges surrounding the brain.",
    pathophysiology: "Slow-growingextra-axial tumor compressing adjacent brain parenchyma without direct tissue invasion (90% WHO Grade I).",
    probableCure: "Curable in >90% of cases via complete surgical resection (Simpson Grade 1/2).",
    cureStatus: 'Curable',
    medicines: ['Dexamethasone (perioperative edema)', 'Anticonvulsants (if presenting with seizures)'],
    treatments: ['Microsurgical Resection', 'Stereotactic Radiosurgery (Gamma Knife)', 'Active Surveillance (Watchful Waiting for small asymptomatic lesions)'],
    mortalityRate: 'Low (5-year overall survival >90%)',
    survivalStats: 'Benign WHO Grade I has 10-year survival rate exceeding 80-90% post-resection.',
    riskLevel: 'Low'
  },
  {
    id: 'pituitary_adenoma',
    name: 'Pituitary Adenoma',
    latinName: 'Adenoma Hypophysialis',
    category: 'Neuro-Oncology',
    affectedRegions: ['Pituitary Gland', 'Sella Turcica', 'Optic Chiasm', 'Hypothalamus'],
    description: "Benign neoplasm of the anterior pituitary gland causing hormonal hypersecretion or bitemporal hemianopia optic chiasm compression.",
    pathophysiology: "Monoclonal expansion of anterior pituitary cells (Prolactinoma, GH-secreting, ACTH-secreting Cushing's, or Non-functioning).",
    probableCure: "Curable via medical dopamine agonist therapy (Prolactinomas) or transsphenoidal endonasal surgery.",
    cureStatus: 'Curable',
    medicines: ['Cabergoline (Dostinex)', 'Bromocriptine', 'Octreotide (Sandostatin)', 'Pasireotide', 'Pegvisomant'],
    treatments: ['Dopamine Agonist Pharmacotherapy (First-line for Prolactinoma)', 'Transsphenoidal Endoscopic Surgery', 'Stereotactic Radiotherapy'],
    mortalityRate: 'Very Low',
    survivalStats: 'Normal life expectancy when hormone levels and mass effect are controlled.',
    riskLevel: 'Low'
  },

  // 4. AUTOIMMUNE & INFLAMMATORY
  {
    id: 'multiple_sclerosis',
    name: 'Multiple Sclerosis (MS)',
    latinName: 'Sclerosis Multiplex',
    category: 'Autoimmune & Inflammatory',
    affectedRegions: ['Optic Nerve', 'Corpus Callosum', 'Periventricular White Matter', 'Brainstem', 'Spinal Cord'],
    description: "Chronic autoimmune demyelinating disease of the central nervous system marked by recurrent neurological relapses.",
    pathophysiology: "Autoreactive T and B lymphocytes crossing blood-brain barrier to attack myelin basic protein, causing demyelinating plaques and axonal loss.",
    probableCure: "No cure. High-efficacy Disease-Modifying Therapies (DMTs) achieve No Evidence of Disease Activity (NEDA) in >80% of patients.",
    cureStatus: 'Treatable / Non-Curable',
    medicines: ['Ocrelizumab (Ocrevus)', 'Ofatumumab (Kesimpta)', 'Natalizumab (Tysabri)', 'Fingolimod (Gilenya)', 'High-Dose IV Methylprednisolone'],
    treatments: ['Disease-Modifying Therapies (DMTs)', 'High-Dose Corticosteroid Relapse Pulses', 'Plasmapheresis (PLEX)', 'Autologous Stem Cell Transplant (aHSCT)'],
    mortalityRate: 'Low',
    survivalStats: 'Life expectancy shortened by only 5 to 7 years compared to general population.',
    riskLevel: 'Moderate'
  },
  {
    id: 'nmosd',
    name: 'Neuromyelitis Optica Spectrum Disorder (NMOSD)',
    latinName: 'Morbus Devic',
    category: 'Autoimmune & Inflammatory',
    affectedRegions: ['Optic Nerve', 'Spinal Cord (Longitudinal)', 'Area Postrema of Brainstem'],
    description: "Severe autoimmune astrocytopathy characterized by recurrent optic neuritis and longitudinally extensive transverse myelitis.",
    pathophysiology: "Pathogenic IgG autoantibodies targeting Aquaporin-4 (AQP4) water channels on astrocyte end-feet, initiating complement-mediated necrosis.",
    probableCure: "No cure. Targeted monoclonal antibody therapies prevent up to 95% of relapses.",
    cureStatus: 'Treatable / Non-Curable',
    medicines: ['Eculizumab (Soliris)', 'Inebilizumab (Uplizna)', 'Satralizumab (Enspryng)', 'Rituximab', 'Azathioprine'],
    treatments: ['Complement Inhibitor / Anti-CD19 Monoclonal Therapy', 'Emergency Plasma Exchange (PLEX)', 'Maintenance Immunosuppression'],
    mortalityRate: 'Moderate-High if untreated',
    survivalStats: 'Relapse prevention therapies have reduced 5-year mortality from 30% down to <5%.',
    riskLevel: 'High'
  },
  {
    id: 'autoimmune_encephalitis',
    name: 'Anti-NMDA Receptor Encephalitis',
    latinName: 'Encephalitis Autoimmunis',
    category: 'Autoimmune & Inflammatory',
    affectedRegions: ['Hippocampus', 'Limbic System', 'Frontal Lobe', 'Basal Ganglia'],
    description: "Severe autoimmune encephalitis presenting with psychiatric psychosis, memory loss, seizures, movement disorders, and autonomic instability.",
    pathophysiology: "IgG1 antibodies binding the GluN1 subunit of NMDA receptors, causing receptor cross-linking and internalizing synaptic NMDA receptors.",
    probableCure: "Highly curable (>80% full/near-full recovery) with prompt immunotherapy and ovarian teratoma removal if present.",
    cureStatus: 'Curable',
    medicines: ['High-Dose IV Methylprednisolone', 'Intravenous Immunoglobulin (IVIG)', 'Rituximab', 'Cyclophosphamide'],
    treatments: ['First-line Immunotherapy (Steroids + IVIG/PLEX)', 'Second-line Immunotherapy (Rituximab)', 'Ovarian Teratoma Resection'],
    mortalityRate: 'Low-Moderate (5-7% mortality with treatment)',
    survivalStats: '>80% make good neurological recovery; full recovery can take 12-24 months.',
    riskLevel: 'Moderate'
  },

  // 5. EPILEPSY & SEIZURES
  {
    id: 'tle',
    name: 'Temporal Lobe Epilepsy (TLE)',
    latinName: 'Epilepsia Lobis Temporalis',
    category: 'Epilepsy & Seizures',
    affectedRegions: ['Hippocampus', 'Amygdala', 'Parahippocampal Gyrus', 'Temporal Lobe'],
    description: "Most common focal epilepsy syndrome in adults, often associated with hippocampal sclerosis and focal impaired awareness seizures.",
    pathophysiology: "Hyperexcitable network synchronization driven by mesial temporal sclerosis, neuronal loss in CA1/CA3 regions, and mossy fiber sprouting.",
    probableCure: "Curable / long-term seizure freedom achieved in 60-80% of drug-resistant cases via surgical temporal lobectomy or laser ablation.",
    cureStatus: 'Curable',
    medicines: ['Levetiracetam (Keppra)', 'Lamotrigine (Lamictal)', 'Carbamazepine (Tegretol)', 'Lacosamide (Vimpat)', 'Topiramate'],
    treatments: ['Anterior Temporal Lobectomy (ATL)', 'MRI-Guided Laser Interstitial Thermal Therapy (LITT)', 'Responsive Neurostimulation (RNS)', 'Vagus Nerve Stimulation (VNS)'],
    mortalityRate: 'Low-Moderate (SUDEP risk 1 in 1,000 per year)',
    survivalStats: 'Seizure freedom post-surgery restores normal life expectancy and reduces SUDEP risk dramatically.',
    riskLevel: 'Moderate'
  },
  {
    id: 'status_epilepticus',
    name: 'Status Epilepticus',
    latinName: 'Status Epilepticus',
    category: 'Epilepsy & Seizures',
    affectedRegions: ['Global Brain Cortex', 'Thalamus', 'Hippocampus'],
    description: "Medical emergency defined by continuous seizure activity lasting >5 minutes or recurrent seizures without recovery of consciousness between episodes.",
    pathophysiology: "Failure of endogenous GABAergic seizure termination mechanisms and persistent glutamatergic NMDA excitation causing systemic acidosis and excitotoxic cell death.",
    probableCure: "Fully curable/reversible if terminated within 30 minutes with IV benzodiazepines and antiepileptic infusions.",
    cureStatus: 'Curable',
    medicines: ['Lorazepam (IV Ativan)', 'Midazolam (IM/IV)', 'Levetiracetam (Keppra IV)', 'Fosphenytoin (IV)', 'Propofol / Ketamine (refractory status)'],
    treatments: ['Immediate IV Benzodiazepine administration', 'Second-line IV Antiepileptic loading', 'Continuous EEG Monitoring & Continuous Anesthetic Infusion'],
    mortalityRate: 'High (15-20% overall mortality)',
    survivalStats: 'Time to treatment is critical: mortality increases from 5% (<30 min) up to 35% (>60 min duration).',
    riskLevel: 'Critical / Fatal'
  },

  // 6. INFECTIOUS
  {
    id: 'bacterial_meningitis',
    name: 'Bacterial Meningitis',
    latinName: 'Meningitis Purulenta',
    category: 'Infectious',
    affectedRegions: ['Meninges', 'Subarachnoid Space', 'Cerebrospinal Fluid', 'Cerebral Cortex'],
    description: "Life-threatening acute purulent bacterial infection of the leptomeninges surrounding the brain and spinal cord.",
    pathophysiology: "Bacterial blood-brain barrier invasion (Neisseria meningitidis, Streptococcus pneumoniae) producing severe subarachnoid inflammation and intracranial hypertension.",
    probableCure: "Curable with emergency intravenous empiric antibiotic and dexamethasone therapy within 1 hour of presentation.",
    cureStatus: 'Curable',
    medicines: ['Ceftriaxone / Cefotaxime (IV)', 'Vancomycin (IV)', 'Ampicillin (for Listeria)', 'Dexamethasone (adjunctive anti-inflammatory)'],
    treatments: ['Emergency IV Antibiotics (<1 hour window)', 'Adjunctive IV Dexamethasone Steroid Therapy', 'Lumbar Puncture CSF Diagnostics', 'ICP Monitoring'],
    mortalityRate: 'High (10-25% mortality with treatment)',
    survivalStats: '100% fatal if untreated. With modern intensive therapy, ~85% survive; 20% of survivors suffer hearing loss, seizures, or motor deficits.',
    riskLevel: 'Critical / Fatal'
  },
  {
    id: 'herpes_encephalitis',
    name: 'Herpes Simplex Encephalitis (HSE)',
    latinName: 'Encephalitis Herpetica',
    category: 'Infectious',
    affectedRegions: ['Temporal Lobe (Bilateral)', 'Orbitofrontal Cortex', 'Limbic System'],
    description: "Severe, necrotizing viral brain infection caused by Herpes Simplex Virus Type 1 (HSV-1), causing rapid temporal lobe hemorrhagic necrosis.",
    pathophysiology: "Retrograde axonal transport of HSV-1 along olfactory or trigeminal nerves into temporal lobes, causing focal lytic neuronal infection.",
    probableCure: "Curable/survivable if high-dose intravenous Acyclovir is started immediately upon clinical suspicion.",
    cureStatus: 'Curable',
    medicines: ['Acyclovir (IV 10mg/kg q8h for 14-21 days)', 'Foscarnet (for acyclovir-resistant strains)', 'Anticonvulsants'],
    treatments: ['Emergency Intravenous Acyclovir Therapy', 'CSF PCR Diagnostic Testing', 'Seizure & Cerebral Edema Management'],
    mortalityRate: 'High (70% untreated, ~15-20% with acyclovir)',
    survivalStats: 'Early treatment reduces mortality from 70% down to 15-20%; ~50% of survivors have long-term memory or behavioral deficits.',
    riskLevel: 'Critical / Fatal'
  },

  // 7. TRAUMATIC & INJURY
  {
    id: 'tbi',
    name: 'Traumatic Brain Injury (TBI)',
    latinName: 'Trauma Capitis Intracraniale',
    category: 'Traumatic & Injury',
    affectedRegions: ['Frontal Poles', 'Temporal Lobe Tips', 'Diffuse Axonal Tracts', 'Cortex'],
    description: "Brain damage resulting from external mechanical impact, blast wave, or acceleration/deceleration forces.",
    pathophysiology: "Primary biomechanical disruption (contusions, lacerations) followed by secondary cascade (ischemia, cerebral edema, excitotoxicity, mitochondrial failure).",
    probableCure: "Structural damage is permanent, but secondary injury is preventable and treatable with neurointensive care and rehabilitation.",
    cureStatus: 'Treatable / Non-Curable',
    medicines: ['Hypertonic Saline (3% / 23.4%)', 'Mannitol (osmotic diuretic)', 'Levetiracetam (seizure prophylaxis)', 'Propofol'],
    treatments: ['Decompressive Hemicraniectomy', 'Intracranial Pressure (ICP) Monitoring & EVD Placement', 'Targeted Temperature Management', 'Comprehensive Neuro-Rehabilitation'],
    mortalityRate: 'Variable (Severe TBI mortality 30-40%)',
    survivalStats: 'Mild TBI <1% mortality. Severe TBI (GCS 3-8) has 30-40% mortality and 50% long-term severe disability rate.',
    riskLevel: 'High'
  },
  {
    id: 'cte',
    name: 'Chronic Traumatic Encephalopathy (CTE)',
    latinName: 'Encephalopathia Traumatica Chronica',
    category: 'Traumatic & Injury',
    affectedRegions: ['Frontal Lobe', 'Temporal Lobe', 'Amygdala', 'Sulcal Depths'],
    description: "Progressive neurodegenerative tauopathy caused by repetitive mild traumatic brain injuries or subconcussive head impacts.",
    pathophysiology: "Perivascular accumulation of hyperphosphorylated Tau protein neurofibrillary tangles preferentially localized at the depths of cortical sulci.",
    probableCure: "No cure currently. Preventable by avoiding repetitive head trauma in contact sports and military service.",
    cureStatus: 'Preventable',
    medicines: ['SSRIs (Sertraline for mood/aggression)', 'Memantine', 'Atypical Antipsychotics (for severe behavioral symptoms)'],
    treatments: ['Trauma Prevention Protocols', 'Symptomatic Psychiatric Therapy', 'Cognitive & Behavioral Rehabilitation', 'Supportive Family Care'],
    mortalityRate: 'Moderate (elevated suicide risk)',
    survivalStats: 'Insidious onset years or decades post-trauma; progressive course over 10 to 20 years.',
    riskLevel: 'Moderate'
  },

  // 8. PSYCHIATRIC & AFFECTIVE
  {
    id: 'mdd',
    name: 'Major Depressive Disorder (MDD)',
    latinName: 'Depressio Major',
    category: 'Psychiatric & Affective',
    affectedRegions: ['Dorsolateral Prefrontal Cortex', 'Anterior Cingulate Cortex', 'Amygdala', 'Hippocampus'],
    description: "Mood disorder characterized by persistent low mood, anhedonia, fatigue, executive dysfunction, and feelings of worthlessness.",
    pathophysiology: "Monoaminergic (serotonin, norepinephrine, dopamine) neurotransmission deficit, reduced hippocampal BDNF neuroplasticity, and frontolimbic network dysregulation.",
    probableCure: "High remission rates (65-80%) with combination of antidepressant pharmacotherapy, CBT, and neuromodulation (rTMS / ECT / Ketamine).",
    cureStatus: 'Treatable / Non-Curable',
    medicines: ['Escitalopram (Lexapro)', 'Sertraline (Zoloft)', 'Venlafaxine (Effexor)', 'Bupropion (Wellbutrin)', 'Esketamine (Spravato)'],
    treatments: ['Cognitive Behavioral Therapy (CBT)', 'Repetitive Transcranial Magnetic Stimulation (rTMS)', 'Electroconvulsive Therapy (ECT)', 'Intravenous Ketamine Infusion'],
    mortalityRate: 'Low-Moderate (15% lifetime suicide risk in severe untreated MDD)',
    survivalStats: 'Effective multimodal treatment achieves complete clinical remission in >70% of patients.',
    riskLevel: 'Moderate'
  },
  {
    id: 'schizophrenia',
    name: 'Schizophrenia Spectrum',
    latinName: 'Schizophrenia',
    category: 'Psychiatric & Affective',
    affectedRegions: ['Prefrontal Cortex', 'Auditory Cortex (Wernicke\'s)', 'Thalamus', 'Ventral Striatum'],
    description: "Severe neurodevelopmental psychiatric disorder characterized by delusions, auditory hallucinations, disorganized speech, and negative symptoms.",
    pathophysiology: "Hyperdopaminergia in mesolimbic pathway (delusions/hallucinations) combined with cortical hypodopaminergia and NMDA receptor hypofunction.",
    probableCure: "No permanent cure, but high functional control achieved with modern atypical antipsychotics and Long-Acting Injectables (LAIs).",
    cureStatus: 'Treatable / Non-Curable',
    medicines: ['Clozapine (Clozaril)', 'Risperidone (Risperdal)', 'Olanzapine (Zyprexa)', 'Aripiprazole (Abilify)', 'Cobenfy (Xanomeline-Trospium)'],
    treatments: ['Atypical Antipsychotic Pharmacotherapy', 'Long-Acting Injectable (LAI) Formulations', 'Cognitive Behavioral Therapy for Psychosis (CBTp)', 'Social Skills Training'],
    mortalityRate: 'Moderate (Life expectancy reduced by 15-20 years)',
    survivalStats: '5-10% lifetime suicide risk; increased cardiovascular co-morbidity requires active medical monitoring.',
    riskLevel: 'Moderate'
  },

  // 9. NEURODEVELOPMENTAL & GENETIC
  {
    id: 'adhd',
    name: 'ADHD (Executive Deficit)',
    latinName: 'Perturbatio Hyperkineticus',
    category: 'Neurodevelopmental & Genetic',
    affectedRegions: ['Prefrontal Cortex', 'Basal Ganglia', 'Frontostriatal Networks', 'Anterior Cingulate'],
    description: "Neurodevelopmental disorder characterized by persistent patterns of inattention, hyperactivity, and executive function impairment.",
    pathophysiology: "Hypofunction of catecholaminergic (dopamine and norepinephrine) neurotransmission in frontostriatal circuits regulating attention and impulse control.",
    probableCure: "Highly treatable (70-80% response rate) with stimulant/non-stimulant medications and behavioral interventions.",
    cureStatus: 'Treatable / Non-Curable',
    medicines: ['Methylphenidate (Concerta, Ritalin)', 'Amphetamine/Dextroamphetamine (Adderall, Vyvanse)', 'Atomoxetine (Strattera)', 'Guanfacine (Intuniv)'],
    treatments: ['Central Nervous System Stimulants', 'Executive Function Coaching', 'Cognitive Behavioral Therapy (CBT)', 'Behavioral Classroom Modifications'],
    mortalityRate: 'Very Low',
    survivalStats: 'Normal life expectancy; effective treatment significantly reduces accidental injury risk.',
    riskLevel: 'Low'
  },
  {
    id: 'autism',
    name: 'Autism Spectrum Disorder (ASD)',
    latinName: 'Autismus Infantilis',
    category: 'Neurodevelopmental & Genetic',
    affectedRegions: ['Frontal Lobe', 'Temporal Lobe', 'Cerebellum', 'Amygdala', 'Fusiform Face Area'],
    description: "Neurodevelopmental condition characterized by variations in social communication, restricted repetitive behaviors, and sensory processing differences.",
    pathophysiology: "Altered synaptogenesis, hyper-local neural connectivity, disrupted long-range frontoparietal connectivity, and GABA/glutamate imbalance.",
    probableCure: "Not a disease to be cured; neurodivergent phenotype supported with early behavioral, communication, and occupational interventions.",
    cureStatus: 'Symptomatic Control Only',
    medicines: ['Aripiprazole (for severe irritability)', 'Risperidone', 'Atomoxetine (for co-occurring ADHD)'],
    treatments: ['Applied Behavior Analysis (ABA)', 'Speech and Language Therapy', 'Occupational Therapy (Sensory Integration)', 'Social Communication Groups'],
    mortalityRate: 'Low',
    survivalStats: 'Near-normal life expectancy; support needs vary widely across the spectrum.',
    riskLevel: 'Low'
  },

  // 10. MOVEMENT & NEUROMUSCULAR
  {
    id: 'essential_tremor',
    name: 'Essential Tremor (ET)',
    latinName: 'Tremor Essentialis',
    category: 'Movement & Neuromuscular',
    affectedRegions: ['Cerebellum', 'Inferior Olive', 'Thalamus (Vim Nucleus)'],
    description: "Most common movement disorder, characterized by kinetic/action tremor primarily affecting hands, head, or voice.",
    pathophysiology: "Oscillatory pacemaker activity in the cerebello-thalamo-cortical circuit driven by cerebellar GABAergic dysfunction.",
    probableCure: "Curable/controllable with Focused Ultrasound (MRgFUS) Thalamotomy or Vim-DBS in medically refractory cases.",
    cureStatus: 'Curable',
    medicines: ['Propranolol (Inderal)', 'Primidone (Mysoline)', 'Topiramate', 'Gabapentin', 'Botulinum Toxin Injections'],
    treatments: ['Beta-Blocker Pharmacotherapy', 'MR-Guided Focused Ultrasound Thalamotomy (MRgFUS)', 'Vim Nucleus Deep Brain Stimulation (DBS)'],
    mortalityRate: 'Very Low (Does not reduce lifespan)',
    survivalStats: 'Normal life expectancy; progressive action tremor managed effectively with medication or ultrasound ablation.',
    riskLevel: 'Low'
  },

  // 11. SLEEP & CIRCADIAN
  {
    id: 'narcolepsy',
    name: 'Narcolepsy Type 1 & 2',
    latinName: 'Narcolepsia',
    category: 'Sleep & Circadian',
    affectedRegions: ['Hypothalamus (Orexin/Hypocretin Neurons)', 'Locus Coeruleus', 'Pons'],
    description: "Neurological sleep disorder characterized by excessive daytime sleepiness, cataplexy (Type 1), sleep paralysis, and rapid REM onset.",
    pathophysiology: "Autoimmune destruction of ~70,000 hypocretin/orexin-producing neurons in the lateral hypothalamus.",
    probableCure: "No cure. Orexin receptor agonists currently in breakthrough clinical trials.",
    cureStatus: 'Treatable / Non-Curable',
    medicines: ['Sodium Oxybate (Xyrem)', 'Pitolisant (Wakix)', 'Solriamfetol (Sunosi)', 'Modafinil (Provigil)', 'Armodafinil'],
    treatments: ['Orexinergic & Central Stimulant Therapy', 'Sodium Oxybate Nighttime Dosing', 'Scheduled Daytime Naps', 'Sleep Hygiene Optimization'],
    mortalityRate: 'Very Low',
    survivalStats: 'Normal life expectancy with proper pharmacological management.',
    riskLevel: 'Low'
  },

  // 12. TOXIC & METABOLIC
  {
    id: 'wernicke_korsakoff',
    name: 'Wernicke-Korsakoff Syndrome',
    latinName: 'Encephalopathia Wernicke',
    category: 'Toxic & Metabolic',
    affectedRegions: ['Mammillary Bodies', 'Thalamus (Dorsomedial Nucleus)', 'Periaqueductal Grey', 'Cerebellum'],
    description: "Neurological disorder caused by severe thiamine (Vitamin B1) deficiency, common in chronic alcohol use, causing confusion, ataxia, ophthalmoplegia, and anterograde amnesia.",
    pathophysiology: "Thiamine pyrophosphate depletion impairing glucose metabolism in B1-dependent brain regions, leading to neuronal cell death and gliosis.",
    probableCure: "Acute Wernicke encephalopathy is fully curable/reversible if high-dose IV thiamine is administered immediately.",
    cureStatus: 'Curable',
    medicines: ['Thiamine (Vitamin B1 IV 500mg t.i.d.)', 'Magnesium Sulfate (cofactor)', 'Multivitamins'],
    treatments: ['High-Dose Intravenous Thiamine Therapy', 'Alcohol Cessation Program', 'Nutritional Support & Rehabilitation'],
    mortalityRate: 'Moderate-High if untreated (20% acute mortality)',
    survivalStats: 'Early IV thiamine prevents permanent Korsakoff amnesia in >80% of patients.',
    riskLevel: 'Moderate'
  }
];
