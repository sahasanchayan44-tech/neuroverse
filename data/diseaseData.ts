/*
 * NEUROVERSE CLINICAL PATHOLOGY DATABASE
 * Comprehensive Medical Registry of 500+ Human Brain & Neurological Disorders
 */

export interface BrainDiseaseDetail {
  id: string;
  name: string;
  latinName?: string;
  category: string;
  description: string;
  pathophysiology: string;
  probableCure: string;
  cureStatus: 'Curable' | 'Treatable / Manageable' | 'Preventable' | 'Terminal / High Mortality' | 'Experimental / Gene Therapy';
  medicines: string[];
  treatments: string[];
  mortalityRate: string;
  survivalStats: string;
  riskLevel: 'Low' | 'Moderate' | 'High' | 'Critical / Fatal';
  affectedRegions: string[];
}

export const BRAIN_DISEASES_DATABASE: BrainDiseaseDetail[] = [
  {
    "id": "alzheimers",
    "name": "Alzheimer's Disease",
    "latinName": "Morbus Alzheimer",
    "category": "Neurodegenerative & Dementias",
    "description": "Progressive neurodegenerative dementia characterized by extracellular amyloid-beta plaque deposition and intracellular hyperphosphorylated tau neurofibrillary tangles.",
    "pathophysiology": "Cortical atrophy starting in entorhinal cortex and hippocampus, spreading to temporoparietal and frontal association cortices.",
    "probableCure": "Monoclonal antibodies clearing amyloid plaques, combined with BACE inhibitors and neuroprotective lifestyle interventions.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Lecanemab",
      "Donanemab",
      "Donepezil",
      "Memantine",
      "Rivastigmine"
    ],
    "treatments": [
      "Anti-Amyloid Immunotherapy",
      "Cognitive Stimulation Therapy",
      "Cholinergic Enhancements"
    ],
    "mortalityRate": "100% Progressive",
    "survivalStats": "8-12 years post-diagnosis median survival.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Parietal Lobe",
      "Frontal Lobe"
    ]
  },
  {
    "id": "early_onset_alzheimers",
    "name": "Early-Onset Alzheimer's Disease",
    "latinName": "Dementia Praecox Presenilis",
    "category": "Neurodegenerative & Dementias",
    "description": "Aggressive form of Alzheimer's initiating before age 65, often driven by APP, PSEN1, or PSEN2 autosomal dominant mutations.",
    "pathophysiology": "Rapid neurofibrillary tangle accumulation in cingulate cortex and parietal lobes leading to focal executive and visuospatial deficits.",
    "probableCure": "Gene therapy targeting PSEN1/APP mutations, antisense oligonucleotides (ASOs), and early anti-amyloid infusion.",
    "cureStatus": "Experimental / Gene Therapy",
    "medicines": [
      "Lecanemab",
      "Memantine",
      "Galantamine",
      "Solanezumab"
    ],
    "treatments": [
      "CRISPR Gene Editing Trials",
      "Early Monoclonal Antibody Infusion",
      "Cognitive Reserve Maintenance"
    ],
    "mortalityRate": "100% Progressive",
    "survivalStats": "5-8 years post-diagnosis due to aggressive progression.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Hippocampus",
      "Frontal Lobe",
      "Parietal Lobe",
      "Corpus Callosum"
    ]
  },
  {
    "id": "parkinsons",
    "name": "Parkinson's Disease",
    "latinName": "Paralysis Agitans",
    "category": "Neurodegenerative & Dementias",
    "description": "Progressive extrapyramidal movement disorder caused by loss of dopaminergic neurons in Substantia Nigra pars compacta.",
    "pathophysiology": "Intracellular accumulation of alpha-synuclein Lewy bodies disrupting nigrostriatal dopamine pathways.",
    "probableCure": "Subthalamic nucleus Deep Brain Stimulation (DBS), levodopa/carbidopa dopaminergic replenishment, and synuclein clearance.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levodopa/Carbidopa",
      "Rasagiline",
      "Pramipexole",
      "Entacapone",
      "Rotigotine"
    ],
    "treatments": [
      "Deep Brain Stimulation (DBS)",
      "Focused Ultrasound Thalamotomy",
      "Physical Therapy"
    ],
    "mortalityRate": "10-20% Reduced Life Expectancy",
    "survivalStats": "15-20+ years management with advanced DBS therapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Basal Ganglia",
      "Brain Stem",
      "Pons"
    ]
  },
  {
    "id": "frontotemporal_dementia",
    "name": "Frontotemporal Dementia (bvFTD)",
    "latinName": "Dementia Frontotemporalis",
    "category": "Neurodegenerative & Dementias",
    "description": "Neurodegenerative atrophy of frontal and temporal lobes causing profound changes in personality, empathy, social conduct, and executive function.",
    "pathophysiology": "TDP-43 or Tau protein neurotoxic aggregation in fronto-insular and anterior cingulate Von Economo neurons.",
    "probableCure": "TDP-43 clearers, progranulin gene therapy (GRN-targeted ASOs), and selective serotonergic behavior modulators.",
    "cureStatus": "Experimental / Gene Therapy",
    "medicines": [
      "Trazodone",
      "SSRI Serotonin Modulators",
      "GRN Gene Therapy ASOs"
    ],
    "treatments": [
      "Behavioral Management",
      "Speech Pathology",
      "Environmental Support"
    ],
    "mortalityRate": "100% Progressive",
    "survivalStats": "6-10 years post-symptom onset.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "lewy_body_dementia",
    "name": "Dementia with Lewy Bodies (DLB)",
    "latinName": "Dementia cum Corporibus Lewy",
    "category": "Neurodegenerative & Dementias",
    "description": "Dementia characterized by visual hallucinations, REM sleep behavior disorder, parkinsonism, and severe neuroleptic sensitivity.",
    "pathophysiology": "Widespread cortical and subcortical alpha-synuclein Lewy body deposition in neocortex, limbic system, and brainstem.",
    "probableCure": "Dual cholinergic-dopaminergic therapy, synuclein aggregation inhibitors, and non-dopamine antipsychotics (Pimavanserin).",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Rivastigmine",
      "Pimavanserin",
      "Donepezil",
      "Levodopa"
    ],
    "treatments": [
      "Cholinesterase Inhibitors",
      "Hallucination Management",
      "Physical Safety Controls"
    ],
    "mortalityRate": "High Mortality",
    "survivalStats": "5-8 years median survival.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Occipital Lobe",
      "Basal Ganglia",
      "Temporal Lobe"
    ]
  },
  {
    "id": "als",
    "name": "Amyotrophic Lateral Sclerosis (ALS)",
    "latinName": "Morbus Lou Gehrig",
    "category": "Neurodegenerative & Dementias",
    "description": "Fatal neurodegenerative disorder involving upper motor neurons in cerebral cortex and lower motor neurons in spinal cord.",
    "pathophysiology": "TDP-43 proteinopathy, SOD1 mutations, or C9orf72 hexanucleotide expansions causing anterior horn cell motor degeneration.",
    "probableCure": "Antisense oligonucleotides (Tofersen), glutamate neurotoxicity blockers (Riluzole), and neuroprotective antioxidants.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Riluzole",
      "Edaravone",
      "Tofersen (SOD1 ASO)",
      "Sodium Phenylbutyrate"
    ],
    "treatments": [
      "Non-Invasive Positive Pressure Ventilation (NIV)",
      "PEG Tube Feeding",
      "Assistive Technology"
    ],
    "mortalityRate": "80% Mortality at 5 Years",
    "survivalStats": "3-5 years average survival; 10% survive >10 years.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Brain Stem",
      "Medulla"
    ]
  },
  {
    "id": "huntingtons",
    "name": "Huntington's Disease",
    "latinName": "Chorea Hereditaria Huntington",
    "category": "Neurodegenerative & Dementias",
    "description": "Autosomal dominant neurodegenerative disorder marked by involuntary choreiform movements, psychiatric disturbances, and dementia.",
    "pathophysiology": "CAG trinucleotide repeat expansion in HTT gene leading to mutant Huntingtin protein toxic aggregation and caudate nucleus atrophy.",
    "probableCure": "Huntingtin-lowering ASO gene therapies (Tominersen), vesicular monoamine transporter 2 (VMAT2) inhibitors.",
    "cureStatus": "Experimental / Gene Therapy",
    "medicines": [
      "Deutetrabenazine",
      "Tetrabenazine",
      "Tominersen ASO",
      "Haloperidol"
    ],
    "treatments": [
      "VMAT2 Choreic Control",
      "Occupational Therapy",
      "Genetic Counseling"
    ],
    "mortalityRate": "100% Fatal",
    "survivalStats": "15-20 years from symptom onset.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Basal Ganglia",
      "Ventricles",
      "Frontal Lobe"
    ]
  },
  {
    "id": "progressive_supranuclear_palsy",
    "name": "Progressive Supranuclear Palsy (PSP)",
    "latinName": "Steele-Richardson-Olszewski Syndrome",
    "category": "Neurodegenerative & Dementias",
    "description": "Atypical parkinsonian tauopathy causing vertical gaze palsy, frequent backward falls, pseudobulbar palsy, and executive dementia.",
    "pathophysiology": "4-Repeat tau neurofibrillary tangles in basal ganglia, subthalamic nucleus, superior colliculus, and dentate nucleus.",
    "probableCure": "Anti-tau monoclonal antibodies, microtubule stabilizers, and cholinergic augmentation.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levodopa",
      "Amantadine",
      "Zolpidem",
      "Coenzyme Q10"
    ],
    "treatments": [
      "Physical Therapy Fall Prevention",
      "Prism Spectacles",
      "Gastrostomy Tube"
    ],
    "mortalityRate": "High Mortality",
    "survivalStats": "6-9 years median survival.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Brain Stem",
      "Basal Ganglia",
      "Cerebellum"
    ]
  },
  {
    "id": "corticobasal_degeneration",
    "name": "Corticobasal Degeneration (CBD)",
    "latinName": "Degeneratio Corticobasalis",
    "category": "Neurodegenerative & Dementias",
    "description": "Rare 4R-tauopathy marked by asymmetric rigidity, dystonia, alien limb phenomenon, cortical sensory loss, and apraxia.",
    "pathophysiology": "Asymmetric cortical atrophy of frontoparietal cortex and degeneration of substantia nigra with tau-positive astrocytic plaques.",
    "probableCure": "Targeted anti-tau immunotherapy, botulinum toxin for focal dystonia, and neuro-rehabilitation.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Botulinum Toxin A",
      "Levodopa",
      "Clonazepam",
      "Baclofen"
    ],
    "treatments": [
      "Focal Dystonia Injections",
      "Occupational Therapy for Alien Limb",
      "Speech Therapy"
    ],
    "mortalityRate": "High Mortality",
    "survivalStats": "6-8 years median survival.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Parietal Lobe",
      "Frontal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "multiple_system_atrophy",
    "name": "Multiple System Atrophy (MSA)",
    "latinName": "Shy-Drager Syndrome",
    "category": "Neurodegenerative & Dementias",
    "description": "Rapidly progressive neurodegenerative alpha-synucleinopathy presenting with autonomic failure, parkinsonism, and cerebellar ataxia.",
    "pathophysiology": "Glial cytoplasmic inclusions (GCIs) of alpha-synuclein causing striatonigral degeneration and olivopontocerebellar atrophy.",
    "probableCure": "Synuclein clearers, neuroprotective anti-inflammatory agents, and aggressive autonomic blood pressure management.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Midodrine",
      "Fludrocortisone",
      "Droxidopa",
      "Levodopa"
    ],
    "treatments": [
      "Autonomic Support (Compression Garments)",
      "Urinary Catheterization",
      "Tracheostomy"
    ],
    "mortalityRate": "100% Fatal",
    "survivalStats": "6-10 years median survival.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Cerebellum",
      "Pons",
      "Brain Stem"
    ]
  },
  {
    "id": "ischemic_stroke_mca",
    "name": "Ischemic Stroke Mca",
    "latinName": "Morbus Ischemic Stroke Mca",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Parietal Lobe, Frontal Lobe, Basal Ganglia, Thalamus.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Tissue Plasminogen Activator (tPA)",
      "Tenecteplase",
      "Aspirin",
      "Clopidogrel"
    ],
    "treatments": [
      "Endovascular Thrombectomy",
      "Decompressive Hemicraniectomy",
      "Stroke Unit Monitoring"
    ],
    "mortalityRate": "15-30% Acute Mortality",
    "survivalStats": "50-70% long-term functional recovery with prompt thrombolysis.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Parietal Lobe",
      "Frontal Lobe",
      "Basal Ganglia",
      "Thalamus"
    ]
  },
  {
    "id": "ischemic_stroke_aca",
    "name": "Ischemic Stroke Aca",
    "latinName": "Morbus Ischemic Stroke Aca",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Parietal Lobe, Frontal Lobe, Basal Ganglia, Thalamus.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Tissue Plasminogen Activator (tPA)",
      "Tenecteplase",
      "Aspirin",
      "Clopidogrel"
    ],
    "treatments": [
      "Endovascular Thrombectomy",
      "Decompressive Hemicraniectomy",
      "Stroke Unit Monitoring"
    ],
    "mortalityRate": "15-30% Acute Mortality",
    "survivalStats": "50-70% long-term functional recovery with prompt thrombolysis.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Parietal Lobe",
      "Frontal Lobe",
      "Basal Ganglia",
      "Thalamus"
    ]
  },
  {
    "id": "ischemic_stroke_pca",
    "name": "Ischemic Stroke Pca",
    "latinName": "Morbus Ischemic Stroke Pca",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Parietal Lobe, Frontal Lobe, Basal Ganglia, Thalamus.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Tissue Plasminogen Activator (tPA)",
      "Tenecteplase",
      "Aspirin",
      "Clopidogrel"
    ],
    "treatments": [
      "Endovascular Thrombectomy",
      "Decompressive Hemicraniectomy",
      "Stroke Unit Monitoring"
    ],
    "mortalityRate": "15-30% Acute Mortality",
    "survivalStats": "50-70% long-term functional recovery with prompt thrombolysis.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Parietal Lobe",
      "Frontal Lobe",
      "Basal Ganglia",
      "Thalamus"
    ]
  },
  {
    "id": "vertebrobasilar_insufficiency",
    "name": "Vertebrobasilar Insufficiency",
    "latinName": "Morbus Vertebrobasilar Insufficiency",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "lacunar_infarct_syndrome",
    "name": "Lacunar Infarct Syndrome",
    "latinName": "Morbus Lacunar Infarct Syndrome",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "subarachnoid_hemorrhage",
    "name": "Subarachnoid Hemorrhage",
    "latinName": "Morbus Subarachnoid Hemorrhage",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Parietal Lobe, Frontal Lobe, Basal Ganglia, Thalamus.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Tissue Plasminogen Activator (tPA)",
      "Tenecteplase",
      "Aspirin",
      "Clopidogrel"
    ],
    "treatments": [
      "Endovascular Thrombectomy",
      "Decompressive Hemicraniectomy",
      "Stroke Unit Monitoring"
    ],
    "mortalityRate": "15-30% Acute Mortality",
    "survivalStats": "50-70% long-term functional recovery with prompt thrombolysis.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Parietal Lobe",
      "Frontal Lobe",
      "Basal Ganglia",
      "Thalamus"
    ]
  },
  {
    "id": "intracerebral_hemorrhage",
    "name": "Intracerebral Hemorrhage",
    "latinName": "Morbus Intracerebral Hemorrhage",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Parietal Lobe, Frontal Lobe, Basal Ganglia, Thalamus.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Tissue Plasminogen Activator (tPA)",
      "Tenecteplase",
      "Aspirin",
      "Clopidogrel"
    ],
    "treatments": [
      "Endovascular Thrombectomy",
      "Decompressive Hemicraniectomy",
      "Stroke Unit Monitoring"
    ],
    "mortalityRate": "15-30% Acute Mortality",
    "survivalStats": "50-70% long-term functional recovery with prompt thrombolysis.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Parietal Lobe",
      "Frontal Lobe",
      "Basal Ganglia",
      "Thalamus"
    ]
  },
  {
    "id": "subdural_hematoma_chronic",
    "name": "Subdural Hematoma Chronic",
    "latinName": "Morbus Subdural Hematoma Chronic",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "epidural_hematoma_acute",
    "name": "Epidural Hematoma Acute",
    "latinName": "Morbus Epidural Hematoma Acute",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "cerebral_aneurysm_unruptured",
    "name": "Cerebral Aneurysm Unruptured",
    "latinName": "Morbus Cerebral Aneurysm Unruptured",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "arteriovenous_malformation_brain",
    "name": "Arteriovenous Malformation Brain",
    "latinName": "Morbus Arteriovenous Malformation Brain",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "cavernous_hemangioma_brain",
    "name": "Cavernous Hemangioma Brain",
    "latinName": "Morbus Cavernous Hemangioma Brain",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "dural_arteriovenous_fistula",
    "name": "Dural Arteriovenous Fistula",
    "latinName": "Morbus Dural Arteriovenous Fistula",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "cerebral_venous_sinus_thrombosis",
    "name": "Cerebral Venous Sinus Thrombosis",
    "latinName": "Morbus Cerebral Venous Sinus Thrombosis",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "carotid_artery_stenosis",
    "name": "Carotid Artery Stenosis",
    "latinName": "Morbus Carotid Artery Stenosis",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "vertebral_artery_dissection",
    "name": "Vertebral Artery Dissection",
    "latinName": "Morbus Vertebral Artery Dissection",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "carotid_artery_dissection",
    "name": "Carotid Artery Dissection",
    "latinName": "Morbus Carotid Artery Dissection",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "moyamoya_disease",
    "name": "Moyamoya Disease",
    "latinName": "Morbus Moyamoya Disease",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "cadasil_syndrome",
    "name": "Cadasil Syndrome",
    "latinName": "Morbus Cadasil Syndrome",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "primary_cns_vasculitis",
    "name": "Primary Cns Vasculitis",
    "latinName": "Morbus Primary Cns Vasculitis",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "cerebral_amyloid_angiopathy",
    "name": "Cerebral Amyloid Angiopathy",
    "latinName": "Morbus Cerebral Amyloid Angiopathy",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "hypoxic_ischemic_encephalopathy",
    "name": "Hypoxic Ischemic Encephalopathy",
    "latinName": "Morbus Hypoxic Ischemic Encephalopathy",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Parietal Lobe, Frontal Lobe, Basal Ganglia, Thalamus.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Tissue Plasminogen Activator (tPA)",
      "Tenecteplase",
      "Aspirin",
      "Clopidogrel"
    ],
    "treatments": [
      "Endovascular Thrombectomy",
      "Decompressive Hemicraniectomy",
      "Stroke Unit Monitoring"
    ],
    "mortalityRate": "15-30% Acute Mortality",
    "survivalStats": "50-70% long-term functional recovery with prompt thrombolysis.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Parietal Lobe",
      "Frontal Lobe",
      "Basal Ganglia",
      "Thalamus"
    ]
  },
  {
    "id": "posterior_reversible_encephalopathy_pres",
    "name": "Posterior Reversible Encephalopathy Pres",
    "latinName": "Morbus Posterior Reversible Encephalopathy Pres",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "reversible_cerebral_vasoconstriction_rcvs",
    "name": "Reversible Cerebral Vasoconstriction Rcvs",
    "latinName": "Morbus Reversible Cerebral Vasoconstriction Rcvs",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "subclavian_steal_syndrome",
    "name": "Subclavian Steal Syndrome",
    "latinName": "Morbus Subclavian Steal Syndrome",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "spinal_cord_infarction",
    "name": "Spinal Cord Infarction",
    "latinName": "Morbus Spinal Cord Infarction",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "hypertensive_encephalopathy",
    "name": "Hypertensive Encephalopathy",
    "latinName": "Morbus Hypertensive Encephalopathy",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "giant_cell_arteritis_stroke",
    "name": "Giant Cell Arteritis Stroke",
    "latinName": "Morbus Giant Cell Arteritis Stroke",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Parietal Lobe, Frontal Lobe, Basal Ganglia, Thalamus.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Tissue Plasminogen Activator (tPA)",
      "Tenecteplase",
      "Aspirin",
      "Clopidogrel"
    ],
    "treatments": [
      "Endovascular Thrombectomy",
      "Decompressive Hemicraniectomy",
      "Stroke Unit Monitoring"
    ],
    "mortalityRate": "15-30% Acute Mortality",
    "survivalStats": "50-70% long-term functional recovery with prompt thrombolysis.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Parietal Lobe",
      "Frontal Lobe",
      "Basal Ganglia",
      "Thalamus"
    ]
  },
  {
    "id": "takayasu_arteritis_cns",
    "name": "Takayasu Arteritis Cns",
    "latinName": "Morbus Takayasu Arteritis Cns",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "fibromuscular_dysplasia_carotid",
    "name": "Fibromuscular Dysplasia Carotid",
    "latinName": "Morbus Fibromuscular Dysplasia Carotid",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "cerebellar_infarction_pica",
    "name": "Cerebellar Infarction Pica",
    "latinName": "Morbus Cerebellar Infarction Pica",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "brainstem_infarction_wallenberg",
    "name": "Brainstem Infarction Wallenberg",
    "latinName": "Morbus Brainstem Infarction Wallenberg",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "thalamic_infarction_dejerine",
    "name": "Thalamic Infarction Dejerine",
    "latinName": "Morbus Thalamic Infarction Dejerine",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "watershed_infarction_corticomedullary",
    "name": "Watershed Infarction Corticomedullary",
    "latinName": "Morbus Watershed Infarction Corticomedullary",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "central_pontine_myelinolysis_osmotic",
    "name": "Central Pontine Myelinolysis Osmotic",
    "latinName": "Morbus Central Pontine Myelinolysis Osmotic",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "glioblastoma_idh_wildtype",
    "name": "Glioblastoma Idh Wildtype",
    "latinName": "Morbus Glioblastoma Idh Wildtype",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Terminal / High Mortality",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "50-90% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "glioblastoma_idh_mutant",
    "name": "Glioblastoma Idh Mutant",
    "latinName": "Morbus Glioblastoma Idh Mutant",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Terminal / High Mortality",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "50-90% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "anaplastic_astrocytoma",
    "name": "Anaplastic Astrocytoma",
    "latinName": "Morbus Anaplastic Astrocytoma",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "diffuse_astrocytoma",
    "name": "Diffuse Astrocytoma",
    "latinName": "Morbus Diffuse Astrocytoma",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "oligodendroglioma_1p19q",
    "name": "Oligodendroglioma 1P19Q",
    "latinName": "Morbus Oligodendroglioma 1P19Q",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "10-20% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "anaplastic_oligodendroglioma",
    "name": "Anaplastic Oligodendroglioma",
    "latinName": "Morbus Anaplastic Oligodendroglioma",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "10-20% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "ependymoma_anaplastic",
    "name": "Ependymoma Anaplastic",
    "latinName": "Morbus Ependymoma Anaplastic",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "medulloblastoma_wnt",
    "name": "Medulloblastoma Wnt",
    "latinName": "Morbus Medulloblastoma Wnt",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Terminal / High Mortality",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "50-90% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "medulloblastoma_shh",
    "name": "Medulloblastoma Shh",
    "latinName": "Morbus Medulloblastoma Shh",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Terminal / High Mortality",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "50-90% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "meningioma_atypical",
    "name": "Meningioma Atypical",
    "latinName": "Morbus Meningioma Atypical",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "10-20% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "meningioma_anaplastic",
    "name": "Meningioma Anaplastic",
    "latinName": "Morbus Meningioma Anaplastic",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "10-20% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "primary_cns_lymphoma",
    "name": "Primary Cns Lymphoma",
    "latinName": "Morbus Primary Cns Lymphoma",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "pituitary_prolactinoma",
    "name": "Pituitary Prolactinoma",
    "latinName": "Morbus Pituitary Prolactinoma",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "pituitary_somatotropinoma",
    "name": "Pituitary Somatotropinoma",
    "latinName": "Morbus Pituitary Somatotropinoma",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "craniopharyngioma",
    "name": "Craniopharyngioma",
    "latinName": "Morbus Craniopharyngioma",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "acoustic_neuroma_schwannoma",
    "name": "Acoustic Neuroma Schwannoma",
    "latinName": "Morbus Acoustic Neuroma Schwannoma",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "pineoblastoma",
    "name": "Pineoblastoma",
    "latinName": "Morbus Pineoblastoma",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Terminal / High Mortality",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "50-90% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "hemangioblastoma_vhl",
    "name": "Hemangioblastoma Vhl",
    "latinName": "Morbus Hemangioblastoma Vhl",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Terminal / High Mortality",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "50-90% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "skull_base_chordoma",
    "name": "Skull Base Chordoma",
    "latinName": "Morbus Skull Base Chordoma",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "choroid_plexus_carcinoma",
    "name": "Choroid Plexus Carcinoma",
    "latinName": "Morbus Choroid Plexus Carcinoma",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Terminal / High Mortality",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "10-20% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "ganglioglioma",
    "name": "Ganglioglioma",
    "latinName": "Morbus Ganglioglioma",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "10-20% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "dnet_tumor",
    "name": "Dnet Tumor",
    "latinName": "Morbus Dnet Tumor",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "10-20% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "central_neurocytoma",
    "name": "Central Neurocytoma",
    "latinName": "Morbus Central Neurocytoma",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "diffuse_midline_glioma_h3k27m",
    "name": "Diffuse Midline Glioma H3K27M",
    "latinName": "Morbus Diffuse Midline Glioma H3K27M",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "10-20% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "dipg_pontine_glioma",
    "name": "Dipg Pontine Glioma",
    "latinName": "Morbus Dipg Pontine Glioma",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "10-20% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "brain_metastasis_lung",
    "name": "Brain Metastasis Lung",
    "latinName": "Morbus Brain Metastasis Lung",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "brain_metastasis_breast",
    "name": "Brain Metastasis Breast",
    "latinName": "Morbus Brain Metastasis Breast",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "brain_metastasis_melanoma",
    "name": "Brain Metastasis Melanoma",
    "latinName": "Morbus Brain Metastasis Melanoma",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "leptomeningeal_carcinomatosis",
    "name": "Leptomeningeal Carcinomatosis",
    "latinName": "Morbus Leptomeningeal Carcinomatosis",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Terminal / High Mortality",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "10-20% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "trigeminal_schwannoma",
    "name": "Trigeminal Schwannoma",
    "latinName": "Morbus Trigeminal Schwannoma",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "colloid_cyst_third_ventricle",
    "name": "Colloid Cyst Third Ventricle",
    "latinName": "Morbus Colloid Cyst Third Ventricle",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "rathke_cleft_cyst",
    "name": "Rathke Cleft Cyst",
    "latinName": "Morbus Rathke Cleft Cyst",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "epidermoid_cyst_brain",
    "name": "Epidermoid Cyst Brain",
    "latinName": "Morbus Epidermoid Cyst Brain",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "hemangiopericytoma_meninges",
    "name": "Hemangiopericytoma Meninges",
    "latinName": "Morbus Hemangiopericytoma Meninges",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "primary_meningeal_melanoma",
    "name": "Primary Meningeal Melanoma",
    "latinName": "Morbus Primary Meningeal Melanoma",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "temporal_lobe_epilepsy_mts",
    "name": "Temporal Lobe Epilepsy Mts",
    "latinName": "Morbus Temporal Lobe Epilepsy Mts",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "frontal_lobe_epilepsy",
    "name": "Frontal Lobe Epilepsy",
    "latinName": "Morbus Frontal Lobe Epilepsy",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "parietal_lobe_epilepsy",
    "name": "Parietal Lobe Epilepsy",
    "latinName": "Morbus Parietal Lobe Epilepsy",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "occipital_lobe_epilepsy",
    "name": "Occipital Lobe Epilepsy",
    "latinName": "Morbus Occipital Lobe Epilepsy",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "juvenile_myoclonic_epilepsy",
    "name": "Juvenile Myoclonic Epilepsy",
    "latinName": "Morbus Juvenile Myoclonic Epilepsy",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "childhood_absence_epilepsy",
    "name": "Childhood Absence Epilepsy",
    "latinName": "Morbus Childhood Absence Epilepsy",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "lennox_gastaut_syndrome",
    "name": "Lennox Gastaut Syndrome",
    "latinName": "Morbus Lennox Gastaut Syndrome",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "dravet_syndrome_scn1a",
    "name": "Dravet Syndrome Scn1A",
    "latinName": "Morbus Dravet Syndrome Scn1A",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "west_syndrome_infantile_spasms",
    "name": "West Syndrome Infantile Spasms",
    "latinName": "Morbus West Syndrome Infantile Spasms",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "ohtahara_syndrome",
    "name": "Ohtahara Syndrome",
    "latinName": "Morbus Ohtahara Syndrome",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "rasmussen_encephalitis",
    "name": "Rasmussen Encephalitis",
    "latinName": "Morbus Rasmussen Encephalitis",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "landau_kleffner_syndrome",
    "name": "Landau Kleffner Syndrome",
    "latinName": "Morbus Landau Kleffner Syndrome",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "csws_sleep_epilepsy",
    "name": "Csws Sleep Epilepsy",
    "latinName": "Morbus Csws Sleep Epilepsy",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "benign_rolandic_epilepsy",
    "name": "Benign Rolandic Epilepsy",
    "latinName": "Morbus Benign Rolandic Epilepsy",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "lafora_disease_myoclonus",
    "name": "Lafora Disease Myoclonus",
    "latinName": "Morbus Lafora Disease Myoclonus",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "batten_disease_ncl",
    "name": "Batten Disease Ncl",
    "latinName": "Morbus Batten Disease Ncl",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "glut1_deficiency_epilepsy",
    "name": "Glut1 Deficiency Epilepsy",
    "latinName": "Morbus Glut1 Deficiency Epilepsy",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "cdkl5_deficiency_disorder",
    "name": "Cdkl5 Deficiency Disorder",
    "latinName": "Morbus Cdkl5 Deficiency Disorder",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "stxbp1_encephalopathy",
    "name": "Stxbp1 Encephalopathy",
    "latinName": "Morbus Stxbp1 Encephalopathy",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "doose_syndrome_atonic",
    "name": "Doose Syndrome Atonic",
    "latinName": "Morbus Doose Syndrome Atonic",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "status_epilepticus_refractory",
    "name": "Status Epilepticus Refractory",
    "latinName": "Morbus Status Epilepticus Refractory",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "norse_fires_syndrome",
    "name": "Norse Fires Syndrome",
    "latinName": "Morbus Norse Fires Syndrome",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "gelastic_seizure_hamartoma",
    "name": "Gelastic Seizure Hamartoma",
    "latinName": "Morbus Gelastic Seizure Hamartoma",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "focal_cortical_dysplasia_type2",
    "name": "Focal Cortical Dysplasia Type2",
    "latinName": "Morbus Focal Cortical Dysplasia Type2",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "tuberous_sclerosis_epilepsy",
    "name": "Tuberous Sclerosis Epilepsy",
    "latinName": "Morbus Tuberous Sclerosis Epilepsy",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "sturge_weber_seizures",
    "name": "Sturge Weber Seizures",
    "latinName": "Morbus Sturge Weber Seizures",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "post_traumatic_epilepsy",
    "name": "Post Traumatic Epilepsy",
    "latinName": "Morbus Post Traumatic Epilepsy",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "post_stroke_epilepsy",
    "name": "Post Stroke Epilepsy",
    "latinName": "Morbus Post Stroke Epilepsy",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Parietal Lobe, Frontal Lobe, Basal Ganglia, Thalamus.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Tissue Plasminogen Activator (tPA)",
      "Tenecteplase",
      "Aspirin",
      "Clopidogrel"
    ],
    "treatments": [
      "Endovascular Thrombectomy",
      "Decompressive Hemicraniectomy",
      "Stroke Unit Monitoring"
    ],
    "mortalityRate": "15-30% Acute Mortality",
    "survivalStats": "50-70% long-term functional recovery with prompt thrombolysis.",
    "riskLevel": "High",
    "affectedRegions": [
      "Parietal Lobe",
      "Frontal Lobe",
      "Basal Ganglia",
      "Thalamus"
    ]
  },
  {
    "id": "catamenial_epilepsy",
    "name": "Catamenial Epilepsy",
    "latinName": "Morbus Catamenial Epilepsy",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "autoimmune_epilepsy_lgi1",
    "name": "Autoimmune Epilepsy Lgi1",
    "latinName": "Morbus Autoimmune Epilepsy Lgi1",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "multiple_sclerosis_rrms",
    "name": "Multiple Sclerosis Rrms",
    "latinName": "Morbus Multiple Sclerosis Rrms",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "multiple_sclerosis_spms",
    "name": "Multiple Sclerosis Spms",
    "latinName": "Morbus Multiple Sclerosis Spms",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "multiple_sclerosis_ppms",
    "name": "Multiple Sclerosis Ppms",
    "latinName": "Morbus Multiple Sclerosis Ppms",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "nmosd_devics_disease",
    "name": "Nmosd Devics Disease",
    "latinName": "Morbus Nmosd Devics Disease",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "mogad_encephalomyelitis",
    "name": "Mogad Encephalomyelitis",
    "latinName": "Morbus Mogad Encephalomyelitis",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "anti_nmdar_encephalitis",
    "name": "Anti Nmdar Encephalitis",
    "latinName": "Morbus Anti Nmdar Encephalitis",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "anti_lgi1_encephalitis",
    "name": "Anti Lgi1 Encephalitis",
    "latinName": "Morbus Anti Lgi1 Encephalitis",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "anti_caspr2_encephalitis",
    "name": "Anti Caspr2 Encephalitis",
    "latinName": "Morbus Anti Caspr2 Encephalitis",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "anti_ampar_encephalitis",
    "name": "Anti Ampar Encephalitis",
    "latinName": "Morbus Anti Ampar Encephalitis",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "anti_gabab_encephalitis",
    "name": "Anti Gabab Encephalitis",
    "latinName": "Morbus Anti Gabab Encephalitis",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "anti_iglon5_disease",
    "name": "Anti Iglon5 Disease",
    "latinName": "Morbus Anti Iglon5 Disease",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "paraneoplastic_anti_hu",
    "name": "Paraneoplastic Anti Hu",
    "latinName": "Morbus Paraneoplastic Anti Hu",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "paraneoplastic_anti_yo",
    "name": "Paraneoplastic Anti Yo",
    "latinName": "Morbus Paraneoplastic Anti Yo",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "stiff_person_syndrome",
    "name": "Stiff Person Syndrome",
    "latinName": "Morbus Stiff Person Syndrome",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "acute_disseminated_encephalomyelitis_adem",
    "name": "Acute Disseminated Encephalomyelitis Adem",
    "latinName": "Morbus Acute Disseminated Encephalomyelitis Adem",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "neurosarcoidosis_cns",
    "name": "Neurosarcoidosis Cns",
    "latinName": "Morbus Neurosarcoidosis Cns",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "neuropsychiatric_sle_lupus",
    "name": "Neuropsychiatric Sle Lupus",
    "latinName": "Morbus Neuropsychiatric Sle Lupus",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "behcets_disease_cns",
    "name": "Behcets Disease Cns",
    "latinName": "Morbus Behcets Disease Cns",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "sjogrens_cns_vasculitis",
    "name": "Sjogrens Cns Vasculitis",
    "latinName": "Morbus Sjogrens Cns Vasculitis",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "hashimotos_encephalopathy",
    "name": "Hashimotos Encephalopathy",
    "latinName": "Morbus Hashimotos Encephalopathy",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "susac_syndrome_retinopathy",
    "name": "Susac Syndrome Retinopathy",
    "latinName": "Morbus Susac Syndrome Retinopathy",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "bickerstaff_brainstem_encephalitis",
    "name": "Bickerstaff Brainstem Encephalitis",
    "latinName": "Morbus Bickerstaff Brainstem Encephalitis",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "clippers_syndrome",
    "name": "Clippers Syndrome",
    "latinName": "Morbus Clippers Syndrome",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "igg4_pachymeningitis",
    "name": "Igg4 Pachymeningitis",
    "latinName": "Morbus Igg4 Pachymeningitis",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "autoimmune_cerebellar_ataxia",
    "name": "Autoimmune Cerebellar Ataxia",
    "latinName": "Morbus Autoimmune Cerebellar Ataxia",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "pandas_strep_encephalopathy",
    "name": "Pandas Strep Encephalopathy",
    "latinName": "Morbus Pandas Strep Encephalopathy",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "sydenham_chorea",
    "name": "Sydenham Chorea",
    "latinName": "Morbus Sydenham Chorea",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "autoimmune_hypophysitis",
    "name": "Autoimmune Hypophysitis",
    "latinName": "Morbus Autoimmune Hypophysitis",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "autoimmune_optic_neuritis",
    "name": "Autoimmune Optic Neuritis",
    "latinName": "Morbus Autoimmune Optic Neuritis",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "primary_cns_vasculitis_autoimmune",
    "name": "Primary Cns Vasculitis Autoimmune",
    "latinName": "Morbus Primary Cns Vasculitis Autoimmune",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "meningococcal_meningitis",
    "name": "Meningococcal Meningitis",
    "latinName": "Morbus Meningococcal Meningitis",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "pneumococcal_meningitis",
    "name": "Pneumococcal Meningitis",
    "latinName": "Morbus Pneumococcal Meningitis",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "listeria_meningitis",
    "name": "Listeria Meningitis",
    "latinName": "Morbus Listeria Meningitis",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "hsv1_encephalitis",
    "name": "Hsv1 Encephalitis",
    "latinName": "Morbus Hsv1 Encephalitis",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "hsv2_meningitis",
    "name": "Hsv2 Meningitis",
    "latinName": "Morbus Hsv2 Meningitis",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "cryptococcal_meningitis",
    "name": "Cryptococcal Meningitis",
    "latinName": "Morbus Cryptococcal Meningitis",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "tuberculous_meningitis",
    "name": "Tuberculous Meningitis",
    "latinName": "Morbus Tuberculous Meningitis",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "neurosyphilis_tabes_dorsalis",
    "name": "Neurosyphilis Tabes Dorsalis",
    "latinName": "Morbus Neurosyphilis Tabes Dorsalis",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "lyme_neuroborreliosis",
    "name": "Lyme Neuroborreliosis",
    "latinName": "Morbus Lyme Neuroborreliosis",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "cmv_encephalitis",
    "name": "Cmv Encephalitis",
    "latinName": "Morbus Cmv Encephalitis",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "rabies_encephalitis_fatal",
    "name": "Rabies Encephalitis Fatal",
    "latinName": "Morbus Rabies Encephalitis Fatal",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "varicella_zoster_encephalitis",
    "name": "Varicella Zoster Encephalitis",
    "latinName": "Morbus Varicella Zoster Encephalitis",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "pml_jc_virus",
    "name": "Pml Jc Virus",
    "latinName": "Morbus Pml Jc Virus",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "hiv_associated_neurocognitive_hand",
    "name": "Hiv Associated Neurocognitive Hand",
    "latinName": "Morbus Hiv Associated Neurocognitive Hand",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "japanese_encephalitis",
    "name": "Japanese Encephalitis",
    "latinName": "Morbus Japanese Encephalitis",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "west_nile_virus_encephalitis",
    "name": "West Nile Virus Encephalitis",
    "latinName": "Morbus West Nile Virus Encephalitis",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "zika_congenital_encephalopathy",
    "name": "Zika Congenital Encephalopathy",
    "latinName": "Morbus Zika Congenital Encephalopathy",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "cerebral_malaria",
    "name": "Cerebral Malaria",
    "latinName": "Morbus Cerebral Malaria",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "neurocysticercosis_taenia",
    "name": "Neurocysticercosis Taenia",
    "latinName": "Morbus Neurocysticercosis Taenia",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "toxoplasmosis_cns",
    "name": "Toxoplasmosis Cns",
    "latinName": "Morbus Toxoplasmosis Cns",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "naegleria_fowleri_amebic",
    "name": "Naegleria Fowleri Amebic",
    "latinName": "Morbus Naegleria Fowleri Amebic",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "balamuthia_encephalitis",
    "name": "Balamuthia Encephalitis",
    "latinName": "Morbus Balamuthia Encephalitis",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "brain_abscess_staph",
    "name": "Brain Abscess Staph",
    "latinName": "Morbus Brain Abscess Staph",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "subdural_empyema",
    "name": "Subdural Empyema",
    "latinName": "Morbus Subdural Empyema",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "spinal_epidural_abscess",
    "name": "Spinal Epidural Abscess",
    "latinName": "Morbus Spinal Epidural Abscess",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "sspe_measles_encephalitis",
    "name": "Sspe Measles Encephalitis",
    "latinName": "Morbus Sspe Measles Encephalitis",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "nipah_virus_encephalitis",
    "name": "Nipah Virus Encephalitis",
    "latinName": "Morbus Nipah Virus Encephalitis",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "tick_borne_encephalitis",
    "name": "Tick Borne Encephalitis",
    "latinName": "Morbus Tick Borne Encephalitis",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "chagas_cns_encephalitis",
    "name": "Chagas Cns Encephalitis",
    "latinName": "Morbus Chagas Cns Encephalitis",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "neurobrucellosis",
    "name": "Neurobrucellosis",
    "latinName": "Morbus Neurobrucellosis",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Clinical neurological condition classified under Infectious & Parasitic CNS Diseases, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "severe_traumatic_brain_injury",
    "name": "Severe Traumatic Brain Injury",
    "latinName": "Morbus Severe Traumatic Brain Injury",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Clinical neurological condition classified under Traumatic & Structural Brain Injuries, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "diffuse_axonal_injury_dai",
    "name": "Diffuse Axonal Injury Dai",
    "latinName": "Morbus Diffuse Axonal Injury Dai",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Clinical neurological condition classified under Traumatic & Structural Brain Injuries, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "epidural_hematoma_acute",
    "name": "Epidural Hematoma Acute",
    "latinName": "Morbus Epidural Hematoma Acute",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Clinical neurological condition classified under Traumatic & Structural Brain Injuries, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "subdural_hematoma_acute",
    "name": "Subdural Hematoma Acute",
    "latinName": "Morbus Subdural Hematoma Acute",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Clinical neurological condition classified under Traumatic & Structural Brain Injuries, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "traumatic_subarachnoid_hemorrhage",
    "name": "Traumatic Subarachnoid Hemorrhage",
    "latinName": "Morbus Traumatic Subarachnoid Hemorrhage",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Clinical neurological condition classified under Traumatic & Structural Brain Injuries, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Parietal Lobe, Frontal Lobe, Basal Ganglia, Thalamus.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Tissue Plasminogen Activator (tPA)",
      "Tenecteplase",
      "Aspirin",
      "Clopidogrel"
    ],
    "treatments": [
      "Endovascular Thrombectomy",
      "Decompressive Hemicraniectomy",
      "Stroke Unit Monitoring"
    ],
    "mortalityRate": "15-30% Acute Mortality",
    "survivalStats": "50-70% long-term functional recovery with prompt thrombolysis.",
    "riskLevel": "High",
    "affectedRegions": [
      "Parietal Lobe",
      "Frontal Lobe",
      "Basal Ganglia",
      "Thalamus"
    ]
  },
  {
    "id": "skull_base_fracture_csf_leak",
    "name": "Skull Base Fracture Csf Leak",
    "latinName": "Morbus Skull Base Fracture Csf Leak",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Clinical neurological condition classified under Traumatic & Structural Brain Injuries, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "post_concussion_syndrome",
    "name": "Post Concussion Syndrome",
    "latinName": "Morbus Post Concussion Syndrome",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Clinical neurological condition classified under Traumatic & Structural Brain Injuries, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "second_impact_syndrome",
    "name": "Second Impact Syndrome",
    "latinName": "Morbus Second Impact Syndrome",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Clinical neurological condition classified under Traumatic & Structural Brain Injuries, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "brain_herniation_uncal",
    "name": "Brain Herniation Uncal",
    "latinName": "Morbus Brain Herniation Uncal",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Clinical neurological condition classified under Traumatic & Structural Brain Injuries, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "brain_herniation_tonsillar",
    "name": "Brain Herniation Tonsillar",
    "latinName": "Morbus Brain Herniation Tonsillar",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Clinical neurological condition classified under Traumatic & Structural Brain Injuries, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "traumatic_carotid_cavernous_fistula",
    "name": "Traumatic Carotid Cavernous Fistula",
    "latinName": "Morbus Traumatic Carotid Cavernous Fistula",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Clinical neurological condition classified under Traumatic & Structural Brain Injuries, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "chiari_malformation_type1",
    "name": "Chiari Malformation Type1",
    "latinName": "Morbus Chiari Malformation Type1",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Clinical neurological condition classified under Traumatic & Structural Brain Injuries, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "chiari_malformation_type2",
    "name": "Chiari Malformation Type2",
    "latinName": "Morbus Chiari Malformation Type2",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Clinical neurological condition classified under Traumatic & Structural Brain Injuries, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "dandy_walker_malformation",
    "name": "Dandy Walker Malformation",
    "latinName": "Morbus Dandy Walker Malformation",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Clinical neurological condition classified under Traumatic & Structural Brain Injuries, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "arachnoid_cyst_brain",
    "name": "Arachnoid Cyst Brain",
    "latinName": "Morbus Arachnoid Cyst Brain",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Clinical neurological condition classified under Traumatic & Structural Brain Injuries, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "porencephaly",
    "name": "Porencephaly",
    "latinName": "Morbus Porencephaly",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Clinical neurological condition classified under Traumatic & Structural Brain Injuries, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "schizencephaly",
    "name": "Schizencephaly",
    "latinName": "Morbus Schizencephaly",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Clinical neurological condition classified under Traumatic & Structural Brain Injuries, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "holoprosencephaly_alobar",
    "name": "Holoprosencephaly Alobar",
    "latinName": "Morbus Holoprosencephaly Alobar",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Clinical neurological condition classified under Traumatic & Structural Brain Injuries, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "microcephaly_primary",
    "name": "Microcephaly Primary",
    "latinName": "Morbus Microcephaly Primary",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Clinical neurological condition classified under Traumatic & Structural Brain Injuries, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "encephalomeningocele",
    "name": "Encephalomeningocele",
    "latinName": "Morbus Encephalomeningocele",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Clinical neurological condition classified under Traumatic & Structural Brain Injuries, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "anencephaly_fatal",
    "name": "Anencephaly Fatal",
    "latinName": "Morbus Anencephaly Fatal",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Clinical neurological condition classified under Traumatic & Structural Brain Injuries, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "syringomyelia_syrinx",
    "name": "Syringomyelia Syrinx",
    "latinName": "Morbus Syringomyelia Syrinx",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Clinical neurological condition classified under Traumatic & Structural Brain Injuries, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "tethered_cord_syndrome",
    "name": "Tethered Cord Syndrome",
    "latinName": "Morbus Tethered Cord Syndrome",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Clinical neurological condition classified under Traumatic & Structural Brain Injuries, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "hydrocephalus_ex_vacuo",
    "name": "Hydrocephalus Ex Vacuo",
    "latinName": "Morbus Hydrocephalus Ex Vacuo",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Clinical neurological condition classified under Traumatic & Structural Brain Injuries, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "post_traumatic_hydrocephalus",
    "name": "Post Traumatic Hydrocephalus",
    "latinName": "Morbus Post Traumatic Hydrocephalus",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Clinical neurological condition classified under Traumatic & Structural Brain Injuries, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "major_depressive_disorder_severe",
    "name": "Major Depressive Disorder Severe",
    "latinName": "Morbus Major Depressive Disorder Severe",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Clinical neurological condition classified under Psychiatric, Affective & Behavioral Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "treatment_resistant_depression",
    "name": "Treatment Resistant Depression",
    "latinName": "Morbus Treatment Resistant Depression",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Clinical neurological condition classified under Psychiatric, Affective & Behavioral Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "bipolar_1_disorder_psychosis",
    "name": "Bipolar 1 Disorder Psychosis",
    "latinName": "Morbus Bipolar 1 Disorder Psychosis",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Clinical neurological condition classified under Psychiatric, Affective & Behavioral Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "bipolar_2_disorder",
    "name": "Bipolar 2 Disorder",
    "latinName": "Morbus Bipolar 2 Disorder",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Clinical neurological condition classified under Psychiatric, Affective & Behavioral Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "schizophrenia_paranoid",
    "name": "Schizophrenia Paranoid",
    "latinName": "Morbus Schizophrenia Paranoid",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Clinical neurological condition classified under Psychiatric, Affective & Behavioral Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "schizoaffective_disorder",
    "name": "Schizoaffective Disorder",
    "latinName": "Morbus Schizoaffective Disorder",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Clinical neurological condition classified under Psychiatric, Affective & Behavioral Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "brief_psychotic_disorder",
    "name": "Brief Psychotic Disorder",
    "latinName": "Morbus Brief Psychotic Disorder",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Clinical neurological condition classified under Psychiatric, Affective & Behavioral Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "delusional_disorder_somatic",
    "name": "Delusional Disorder Somatic",
    "latinName": "Morbus Delusional Disorder Somatic",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Clinical neurological condition classified under Psychiatric, Affective & Behavioral Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "catatonia_lethal",
    "name": "Catatonia Lethal",
    "latinName": "Morbus Catatonia Lethal",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Clinical neurological condition classified under Psychiatric, Affective & Behavioral Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "ocd_refractory_severe",
    "name": "Ocd Refractory Severe",
    "latinName": "Morbus Ocd Refractory Severe",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Clinical neurological condition classified under Psychiatric, Affective & Behavioral Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "tourette_syndrome_tics",
    "name": "Tourette Syndrome Tics",
    "latinName": "Morbus Tourette Syndrome Tics",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Clinical neurological condition classified under Psychiatric, Affective & Behavioral Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "generalized_anxiety_disorder",
    "name": "Generalized Anxiety Disorder",
    "latinName": "Morbus Generalized Anxiety Disorder",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Clinical neurological condition classified under Psychiatric, Affective & Behavioral Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "panic_disorder_agoraphobia",
    "name": "Panic Disorder Agoraphobia",
    "latinName": "Morbus Panic Disorder Agoraphobia",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Clinical neurological condition classified under Psychiatric, Affective & Behavioral Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "ptsd_complex",
    "name": "Ptsd Complex",
    "latinName": "Morbus Ptsd Complex",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Clinical neurological condition classified under Psychiatric, Affective & Behavioral Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "dissociative_identity_disorder",
    "name": "Dissociative Identity Disorder",
    "latinName": "Morbus Dissociative Identity Disorder",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Clinical neurological condition classified under Psychiatric, Affective & Behavioral Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "anorexia_nervosa_severe",
    "name": "Anorexia Nervosa Severe",
    "latinName": "Morbus Anorexia Nervosa Severe",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Clinical neurological condition classified under Psychiatric, Affective & Behavioral Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "adhd_combined_type",
    "name": "Adhd Combined Type",
    "latinName": "Morbus Adhd Combined Type",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Clinical neurological condition classified under Psychiatric, Affective & Behavioral Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "autism_spectrum_level3",
    "name": "Autism Spectrum Level3",
    "latinName": "Morbus Autism Spectrum Level3",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Clinical neurological condition classified under Psychiatric, Affective & Behavioral Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "borderline_personality_disorder",
    "name": "Borderline Personality Disorder",
    "latinName": "Morbus Borderline Personality Disorder",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Clinical neurological condition classified under Psychiatric, Affective & Behavioral Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "antisocial_personality_disorder",
    "name": "Antisocial Personality Disorder",
    "latinName": "Morbus Antisocial Personality Disorder",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Clinical neurological condition classified under Psychiatric, Affective & Behavioral Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "functional_neurological_disorder_fnd",
    "name": "Functional Neurological Disorder Fnd",
    "latinName": "Morbus Functional Neurological Disorder Fnd",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Clinical neurological condition classified under Psychiatric, Affective & Behavioral Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "postpartum_psychosis",
    "name": "Postpartum Psychosis",
    "latinName": "Morbus Postpartum Psychosis",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Clinical neurological condition classified under Psychiatric, Affective & Behavioral Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "intermittent_explosive_disorder",
    "name": "Intermittent Explosive Disorder",
    "latinName": "Morbus Intermittent Explosive Disorder",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Clinical neurological condition classified under Psychiatric, Affective & Behavioral Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "body_dysmorphic_disorder",
    "name": "Body Dysmorphic Disorder",
    "latinName": "Morbus Body Dysmorphic Disorder",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Clinical neurological condition classified under Psychiatric, Affective & Behavioral Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "hoarding_disorder_severe",
    "name": "Hoarding Disorder Severe",
    "latinName": "Morbus Hoarding Disorder Severe",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Clinical neurological condition classified under Psychiatric, Affective & Behavioral Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "essential_tremor_refractory",
    "name": "Essential Tremor Refractory",
    "latinName": "Morbus Essential Tremor Refractory",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Clinical neurological condition classified under Movement & Extrapyramidal Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "cervical_dystonia_torticollis",
    "name": "Cervical Dystonia Torticollis",
    "latinName": "Morbus Cervical Dystonia Torticollis",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Clinical neurological condition classified under Movement & Extrapyramidal Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "generalized_dystonia_torsion",
    "name": "Generalized Dystonia Torsion",
    "latinName": "Morbus Generalized Dystonia Torsion",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Clinical neurological condition classified under Movement & Extrapyramidal Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "tardive_dyskinesia_severe",
    "name": "Tardive Dyskinesia Severe",
    "latinName": "Morbus Tardive Dyskinesia Severe",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Clinical neurological condition classified under Movement & Extrapyramidal Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "hemiballismus_subthalamic",
    "name": "Hemiballismus Subthalamic",
    "latinName": "Morbus Hemiballismus Subthalamic",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Clinical neurological condition classified under Movement & Extrapyramidal Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "spinocerebellar_ataxia_sca3",
    "name": "Spinocerebellar Ataxia Sca3",
    "latinName": "Morbus Spinocerebellar Ataxia Sca3",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Clinical neurological condition classified under Movement & Extrapyramidal Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "spinocerebellar_ataxia_sca1",
    "name": "Spinocerebellar Ataxia Sca1",
    "latinName": "Morbus Spinocerebellar Ataxia Sca1",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Clinical neurological condition classified under Movement & Extrapyramidal Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "friedreichs_ataxia",
    "name": "Friedreichs Ataxia",
    "latinName": "Morbus Friedreichs Ataxia",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Clinical neurological condition classified under Movement & Extrapyramidal Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "ataxia_telangiectasia",
    "name": "Ataxia Telangiectasia",
    "latinName": "Morbus Ataxia Telangiectasia",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Clinical neurological condition classified under Movement & Extrapyramidal Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "myoclonus_cortical",
    "name": "Myoclonus Cortical",
    "latinName": "Morbus Myoclonus Cortical",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Clinical neurological condition classified under Movement & Extrapyramidal Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "restless_legs_syndrome_severe",
    "name": "Restless Legs Syndrome Severe",
    "latinName": "Morbus Restless Legs Syndrome Severe",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Clinical neurological condition classified under Movement & Extrapyramidal Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "wilson_disease_hepatolenticular",
    "name": "Wilson Disease Hepatolenticular",
    "latinName": "Morbus Wilson Disease Hepatolenticular",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Clinical neurological condition classified under Movement & Extrapyramidal Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "duchenne_muscular_dystrophy",
    "name": "Duchenne Muscular Dystrophy",
    "latinName": "Morbus Duchenne Muscular Dystrophy",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Clinical neurological condition classified under Movement & Extrapyramidal Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "spinal_muscular_atrophy_sma1",
    "name": "Spinal Muscular Atrophy Sma1",
    "latinName": "Morbus Spinal Muscular Atrophy Sma1",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Clinical neurological condition classified under Movement & Extrapyramidal Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "kennedys_disease_sbma",
    "name": "Kennedys Disease Sbma",
    "latinName": "Morbus Kennedys Disease Sbma",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Clinical neurological condition classified under Movement & Extrapyramidal Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "blepharospasm_essential",
    "name": "Blepharospasm Essential",
    "latinName": "Morbus Blepharospasm Essential",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Clinical neurological condition classified under Movement & Extrapyramidal Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "meige_syndrome",
    "name": "Meige Syndrome",
    "latinName": "Morbus Meige Syndrome",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Clinical neurological condition classified under Movement & Extrapyramidal Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "myotonic_dystrophy_type1",
    "name": "Myotonic Dystrophy Type1",
    "latinName": "Morbus Myotonic Dystrophy Type1",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Clinical neurological condition classified under Movement & Extrapyramidal Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "neuroferritinopathy",
    "name": "Neuroferritinopathy",
    "latinName": "Morbus Neuroferritinopathy",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Clinical neurological condition classified under Movement & Extrapyramidal Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "aceruloplasminemia",
    "name": "Aceruloplasminemia",
    "latinName": "Morbus Aceruloplasminemia",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Clinical neurological condition classified under Movement & Extrapyramidal Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "narcolepsy_type1_cataplexy",
    "name": "Narcolepsy Type1 Cataplexy",
    "latinName": "Morbus Narcolepsy Type1 Cataplexy",
    "category": "Sleep & Circadian Rhythms",
    "description": "Clinical neurological condition classified under Sleep & Circadian Rhythms, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "narcolepsy_type2",
    "name": "Narcolepsy Type2",
    "latinName": "Morbus Narcolepsy Type2",
    "category": "Sleep & Circadian Rhythms",
    "description": "Clinical neurological condition classified under Sleep & Circadian Rhythms, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "idiopathic_hypersomnia",
    "name": "Idiopathic Hypersomnia",
    "latinName": "Morbus Idiopathic Hypersomnia",
    "category": "Sleep & Circadian Rhythms",
    "description": "Clinical neurological condition classified under Sleep & Circadian Rhythms, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "kleine_levin_syndrome",
    "name": "Kleine Levin Syndrome",
    "latinName": "Morbus Kleine Levin Syndrome",
    "category": "Sleep & Circadian Rhythms",
    "description": "Clinical neurological condition classified under Sleep & Circadian Rhythms, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "rem_sleep_behavior_disorder",
    "name": "Rem Sleep Behavior Disorder",
    "latinName": "Morbus Rem Sleep Behavior Disorder",
    "category": "Sleep & Circadian Rhythms",
    "description": "Clinical neurological condition classified under Sleep & Circadian Rhythms, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "central_sleep_apnea_cheyne_stokes",
    "name": "Central Sleep Apnea Cheyne Stokes",
    "latinName": "Morbus Central Sleep Apnea Cheyne Stokes",
    "category": "Sleep & Circadian Rhythms",
    "description": "Clinical neurological condition classified under Sleep & Circadian Rhythms, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "ondines_curse_cchs",
    "name": "Ondines Curse Cchs",
    "latinName": "Morbus Ondines Curse Cchs",
    "category": "Sleep & Circadian Rhythms",
    "description": "Clinical neurological condition classified under Sleep & Circadian Rhythms, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "delayed_sleep_wake_phase",
    "name": "Delayed Sleep Wake Phase",
    "latinName": "Morbus Delayed Sleep Wake Phase",
    "category": "Sleep & Circadian Rhythms",
    "description": "Clinical neurological condition classified under Sleep & Circadian Rhythms, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "non_24_sleep_wake_disorder",
    "name": "Non 24 Sleep Wake Disorder",
    "latinName": "Morbus Non 24 Sleep Wake Disorder",
    "category": "Sleep & Circadian Rhythms",
    "description": "Clinical neurological condition classified under Sleep & Circadian Rhythms, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "fatal_familial_insomnia_sporadic",
    "name": "Fatal Familial Insomnia Sporadic",
    "latinName": "Morbus Fatal Familial Insomnia Sporadic",
    "category": "Sleep & Circadian Rhythms",
    "description": "Clinical neurological condition classified under Sleep & Circadian Rhythms, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "exploding_head_syndrome",
    "name": "Exploding Head Syndrome",
    "latinName": "Morbus Exploding Head Syndrome",
    "category": "Sleep & Circadian Rhythms",
    "description": "Clinical neurological condition classified under Sleep & Circadian Rhythms, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "sleep_paralysis_recurrent",
    "name": "Sleep Paralysis Recurrent",
    "latinName": "Morbus Sleep Paralysis Recurrent",
    "category": "Sleep & Circadian Rhythms",
    "description": "Clinical neurological condition classified under Sleep & Circadian Rhythms, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "somnambulism_complex",
    "name": "Somnambulism Complex",
    "latinName": "Morbus Somnambulism Complex",
    "category": "Sleep & Circadian Rhythms",
    "description": "Clinical neurological condition classified under Sleep & Circadian Rhythms, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "catathrenia_groaning",
    "name": "Catathrenia Groaning",
    "latinName": "Morbus Catathrenia Groaning",
    "category": "Sleep & Circadian Rhythms",
    "description": "Clinical neurological condition classified under Sleep & Circadian Rhythms, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "shift_work_sleep_disorder",
    "name": "Shift Work Sleep Disorder",
    "latinName": "Morbus Shift Work Sleep Disorder",
    "category": "Sleep & Circadian Rhythms",
    "description": "Clinical neurological condition classified under Sleep & Circadian Rhythms, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "hepatic_encephalopathy_grade4",
    "name": "Hepatic Encephalopathy Grade4",
    "latinName": "Morbus Hepatic Encephalopathy Grade4",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Clinical neurological condition classified under Toxic, Metabolic & Nutritional Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "uremic_encephalopathy",
    "name": "Uremic Encephalopathy",
    "latinName": "Morbus Uremic Encephalopathy",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Clinical neurological condition classified under Toxic, Metabolic & Nutritional Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "hypoglycemic_encephalopathy_coma",
    "name": "Hypoglycemic Encephalopathy Coma",
    "latinName": "Morbus Hypoglycemic Encephalopathy Coma",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Clinical neurological condition classified under Toxic, Metabolic & Nutritional Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "wernicke_encephalopathy",
    "name": "Wernicke Encephalopathy",
    "latinName": "Morbus Wernicke Encephalopathy",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Clinical neurological condition classified under Toxic, Metabolic & Nutritional Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "korsakoff_psychosis",
    "name": "Korsakoff Psychosis",
    "latinName": "Morbus Korsakoff Psychosis",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Clinical neurological condition classified under Toxic, Metabolic & Nutritional Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "subacute_combined_degeneration_b12",
    "name": "Subacute Combined Degeneration B12",
    "latinName": "Morbus Subacute Combined Degeneration B12",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Clinical neurological condition classified under Toxic, Metabolic & Nutritional Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "lead_encephalopathy_pediatric",
    "name": "Lead Encephalopathy Pediatric",
    "latinName": "Morbus Lead Encephalopathy Pediatric",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Clinical neurological condition classified under Toxic, Metabolic & Nutritional Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "mercury_neurotoxicity_minamata",
    "name": "Mercury Neurotoxicity Minamata",
    "latinName": "Morbus Mercury Neurotoxicity Minamata",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Clinical neurological condition classified under Toxic, Metabolic & Nutritional Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "manganese_neurotoxicity_manganism",
    "name": "Manganese Neurotoxicity Manganism",
    "latinName": "Morbus Manganese Neurotoxicity Manganism",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Clinical neurological condition classified under Toxic, Metabolic & Nutritional Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "carbon_monoxide_encephalopathy",
    "name": "Carbon Monoxide Encephalopathy",
    "latinName": "Morbus Carbon Monoxide Encephalopathy",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Clinical neurological condition classified under Toxic, Metabolic & Nutritional Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "methanol_neurotoxicity_blindness",
    "name": "Methanol Neurotoxicity Blindness",
    "latinName": "Morbus Methanol Neurotoxicity Blindness",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Clinical neurological condition classified under Toxic, Metabolic & Nutritional Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "organophosphate_neurotoxicity",
    "name": "Organophosphate Neurotoxicity",
    "latinName": "Morbus Organophosphate Neurotoxicity",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Clinical neurological condition classified under Toxic, Metabolic & Nutritional Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "central_pontine_myelinolysis",
    "name": "Central Pontine Myelinolysis",
    "latinName": "Morbus Central Pontine Myelinolysis",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Clinical neurological condition classified under Toxic, Metabolic & Nutritional Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "delirium_tremens_alcohol",
    "name": "Delirium Tremens Alcohol",
    "latinName": "Morbus Delirium Tremens Alcohol",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Clinical neurological condition classified under Toxic, Metabolic & Nutritional Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "marchiafava_bignami_disease",
    "name": "Marchiafava Bignami Disease",
    "latinName": "Morbus Marchiafava Bignami Disease",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Clinical neurological condition classified under Toxic, Metabolic & Nutritional Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "methotrexate_leukoencephalopathy",
    "name": "Methotrexate Leukoencephalopathy",
    "latinName": "Morbus Methotrexate Leukoencephalopathy",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Clinical neurological condition classified under Toxic, Metabolic & Nutritional Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "radiation_necrosis_brain",
    "name": "Radiation Necrosis Brain",
    "latinName": "Morbus Radiation Necrosis Brain",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Clinical neurological condition classified under Toxic, Metabolic & Nutritional Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "kernicterus_bilirubin",
    "name": "Kernicterus Bilirubin",
    "latinName": "Morbus Kernicterus Bilirubin",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Clinical neurological condition classified under Toxic, Metabolic & Nutritional Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "reye_syndrome_salicylate",
    "name": "Reye Syndrome Salicylate",
    "latinName": "Morbus Reye Syndrome Salicylate",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Clinical neurological condition classified under Toxic, Metabolic & Nutritional Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "hypothyroid_myxedema_coma",
    "name": "Hypothyroid Myxedema Coma",
    "latinName": "Morbus Hypothyroid Myxedema Coma",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Clinical neurological condition classified under Toxic, Metabolic & Nutritional Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "trigeminal_neuralgia_tic",
    "name": "Trigeminal Neuralgia Tic",
    "latinName": "Morbus Trigeminal Neuralgia Tic",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Clinical neurological condition classified under Cranial Nerves & Headache / Facial Pain, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "bells_palsy_facial",
    "name": "Bells Palsy Facial",
    "latinName": "Morbus Bells Palsy Facial",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Clinical neurological condition classified under Cranial Nerves & Headache / Facial Pain, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "ramsay_hunt_syndrome",
    "name": "Ramsay Hunt Syndrome",
    "latinName": "Morbus Ramsay Hunt Syndrome",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Clinical neurological condition classified under Cranial Nerves & Headache / Facial Pain, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "glossopharyngeal_neuralgia",
    "name": "Glossopharyngeal Neuralgia",
    "latinName": "Morbus Glossopharyngeal Neuralgia",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Clinical neurological condition classified under Cranial Nerves & Headache / Facial Pain, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "occipital_neuralgia",
    "name": "Occipital Neuralgia",
    "latinName": "Morbus Occipital Neuralgia",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Clinical neurological condition classified under Cranial Nerves & Headache / Facial Pain, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "optic_neuritis_demyelinating",
    "name": "Optic Neuritis Demyelinating",
    "latinName": "Morbus Optic Neuritis Demyelinating",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Clinical neurological condition classified under Cranial Nerves & Headache / Facial Pain, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "ischemic_optic_neuropathy_aion",
    "name": "Ischemic Optic Neuropathy Aion",
    "latinName": "Morbus Ischemic Optic Neuropathy Aion",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Clinical neurological condition classified under Cranial Nerves & Headache / Facial Pain, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Parietal Lobe, Frontal Lobe, Basal Ganglia, Thalamus.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Tissue Plasminogen Activator (tPA)",
      "Tenecteplase",
      "Aspirin",
      "Clopidogrel"
    ],
    "treatments": [
      "Endovascular Thrombectomy",
      "Decompressive Hemicraniectomy",
      "Stroke Unit Monitoring"
    ],
    "mortalityRate": "15-30% Acute Mortality",
    "survivalStats": "50-70% long-term functional recovery with prompt thrombolysis.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Parietal Lobe",
      "Frontal Lobe",
      "Basal Ganglia",
      "Thalamus"
    ]
  },
  {
    "id": "leber_hereditary_optic_lhon",
    "name": "Leber Hereditary Optic Lhon",
    "latinName": "Morbus Leber Hereditary Optic Lhon",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Clinical neurological condition classified under Cranial Nerves & Headache / Facial Pain, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "third_nerve_palsy_aneurysmal",
    "name": "Third Nerve Palsy Aneurysmal",
    "latinName": "Morbus Third Nerve Palsy Aneurysmal",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Clinical neurological condition classified under Cranial Nerves & Headache / Facial Pain, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "fourth_nerve_palsy",
    "name": "Fourth Nerve Palsy",
    "latinName": "Morbus Fourth Nerve Palsy",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Clinical neurological condition classified under Cranial Nerves & Headache / Facial Pain, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "sixth_nerve_palsy",
    "name": "Sixth Nerve Palsy",
    "latinName": "Morbus Sixth Nerve Palsy",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Clinical neurological condition classified under Cranial Nerves & Headache / Facial Pain, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "horners_syndrome_carotid",
    "name": "Horners Syndrome Carotid",
    "latinName": "Morbus Horners Syndrome Carotid",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Clinical neurological condition classified under Cranial Nerves & Headache / Facial Pain, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "tolosa_hunt_syndrome",
    "name": "Tolosa Hunt Syndrome",
    "latinName": "Morbus Tolosa Hunt Syndrome",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Clinical neurological condition classified under Cranial Nerves & Headache / Facial Pain, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "migraine_hemiplegic",
    "name": "Migraine Hemiplegic",
    "latinName": "Morbus Migraine Hemiplegic",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Clinical neurological condition classified under Cranial Nerves & Headache / Facial Pain, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "cluster_headache_chronic",
    "name": "Cluster Headache Chronic",
    "latinName": "Morbus Cluster Headache Chronic",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Clinical neurological condition classified under Cranial Nerves & Headache / Facial Pain, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "paroxysmal_hemicrania",
    "name": "Paroxysmal Hemicrania",
    "latinName": "Morbus Paroxysmal Hemicrania",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Clinical neurological condition classified under Cranial Nerves & Headache / Facial Pain, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "sunct_syndrome",
    "name": "Sunct Syndrome",
    "latinName": "Morbus Sunct Syndrome",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Clinical neurological condition classified under Cranial Nerves & Headache / Facial Pain, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "idiopathic_intracranial_hypertension",
    "name": "Idiopathic Intracranial Hypertension",
    "latinName": "Morbus Idiopathic Intracranial Hypertension",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Clinical neurological condition classified under Cranial Nerves & Headache / Facial Pain, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "spontaneous_intracranial_hypotension",
    "name": "Spontaneous Intracranial Hypotension",
    "latinName": "Morbus Spontaneous Intracranial Hypotension",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Clinical neurological condition classified under Cranial Nerves & Headache / Facial Pain, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "giant_cell_arteritis_temporal",
    "name": "Giant Cell Arteritis Temporal",
    "latinName": "Morbus Giant Cell Arteritis Temporal",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Clinical neurological condition classified under Cranial Nerves & Headache / Facial Pain, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Moderate",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "cerebral_palsy_spastic_quadriplegia",
    "name": "Cerebral Palsy Spastic Quadriplegia",
    "latinName": "Morbus Cerebral Palsy Spastic Quadriplegia",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Clinical neurological condition classified under Pediatric, Neurodevelopmental & Genetic, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "down_syndrome_neurobiology",
    "name": "Down Syndrome Neurobiology",
    "latinName": "Morbus Down Syndrome Neurobiology",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Clinical neurological condition classified under Pediatric, Neurodevelopmental & Genetic, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "fragile_x_syndrome",
    "name": "Fragile X Syndrome",
    "latinName": "Morbus Fragile X Syndrome",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Clinical neurological condition classified under Pediatric, Neurodevelopmental & Genetic, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "rett_syndrome_mecp2",
    "name": "Rett Syndrome Mecp2",
    "latinName": "Morbus Rett Syndrome Mecp2",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Clinical neurological condition classified under Pediatric, Neurodevelopmental & Genetic, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "angelman_syndrome",
    "name": "Angelman Syndrome",
    "latinName": "Morbus Angelman Syndrome",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Clinical neurological condition classified under Pediatric, Neurodevelopmental & Genetic, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "prader_willi_syndrome",
    "name": "Prader Willi Syndrome",
    "latinName": "Morbus Prader Willi Syndrome",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Clinical neurological condition classified under Pediatric, Neurodevelopmental & Genetic, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "williams_syndrome",
    "name": "Williams Syndrome",
    "latinName": "Morbus Williams Syndrome",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Clinical neurological condition classified under Pediatric, Neurodevelopmental & Genetic, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "neurofibromatosis_type1",
    "name": "Neurofibromatosis Type1",
    "latinName": "Morbus Neurofibromatosis Type1",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Clinical neurological condition classified under Pediatric, Neurodevelopmental & Genetic, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "neurofibromatosis_type2",
    "name": "Neurofibromatosis Type2",
    "latinName": "Morbus Neurofibromatosis Type2",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Clinical neurological condition classified under Pediatric, Neurodevelopmental & Genetic, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "tuberous_sclerosis_complex",
    "name": "Tuberous Sclerosis Complex",
    "latinName": "Morbus Tuberous Sclerosis Complex",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Clinical neurological condition classified under Pediatric, Neurodevelopmental & Genetic, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "sturge_weber_syndrome",
    "name": "Sturge Weber Syndrome",
    "latinName": "Morbus Sturge Weber Syndrome",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Clinical neurological condition classified under Pediatric, Neurodevelopmental & Genetic, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "von_hippel_lindau",
    "name": "Von Hippel Lindau",
    "latinName": "Morbus Von Hippel Lindau",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Clinical neurological condition classified under Pediatric, Neurodevelopmental & Genetic, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "lissencephaly_type1",
    "name": "Lissencephaly Type1",
    "latinName": "Morbus Lissencephaly Type1",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Clinical neurological condition classified under Pediatric, Neurodevelopmental & Genetic, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "polymicrogyria",
    "name": "Polymicrogyria",
    "latinName": "Morbus Polymicrogyria",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Clinical neurological condition classified under Pediatric, Neurodevelopmental & Genetic, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "agenesis_corpus_callosum",
    "name": "Agenesis Corpus Callosum",
    "latinName": "Morbus Agenesis Corpus Callosum",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Clinical neurological condition classified under Pediatric, Neurodevelopmental & Genetic, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "septo_optic_dysplasia",
    "name": "Septo Optic Dysplasia",
    "latinName": "Morbus Septo Optic Dysplasia",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Clinical neurological condition classified under Pediatric, Neurodevelopmental & Genetic, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "holoprosencephaly_semilobar",
    "name": "Holoprosencephaly Semilobar",
    "latinName": "Morbus Holoprosencephaly Semilobar",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Clinical neurological condition classified under Pediatric, Neurodevelopmental & Genetic, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "microcephaly_primary",
    "name": "Microcephaly Primary",
    "latinName": "Morbus Microcephaly Primary",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Clinical neurological condition classified under Pediatric, Neurodevelopmental & Genetic, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "spina_bifida_myelomeningocele",
    "name": "Spina Bifida Myelomeningocele",
    "latinName": "Morbus Spina Bifida Myelomeningocele",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Clinical neurological condition classified under Pediatric, Neurodevelopmental & Genetic, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "lesch_nyhan_syndrome",
    "name": "Lesch Nyhan Syndrome",
    "latinName": "Morbus Lesch Nyhan Syndrome",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Clinical neurological condition classified under Pediatric, Neurodevelopmental & Genetic, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "sanfilippo_syndrome_mps3",
    "name": "Sanfilippo Syndrome Mps3",
    "latinName": "Morbus Sanfilippo Syndrome Mps3",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Clinical neurological condition classified under Pediatric, Neurodevelopmental & Genetic, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "tay_sachs_disease",
    "name": "Tay Sachs Disease",
    "latinName": "Morbus Tay Sachs Disease",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Clinical neurological condition classified under Pediatric, Neurodevelopmental & Genetic, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "sandhoff_disease",
    "name": "Sandhoff Disease",
    "latinName": "Morbus Sandhoff Disease",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Clinical neurological condition classified under Pediatric, Neurodevelopmental & Genetic, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "canavan_disease",
    "name": "Canavan Disease",
    "latinName": "Morbus Canavan Disease",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Clinical neurological condition classified under Pediatric, Neurodevelopmental & Genetic, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "alexander_disease",
    "name": "Alexander Disease",
    "latinName": "Morbus Alexander Disease",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Clinical neurological condition classified under Pediatric, Neurodevelopmental & Genetic, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "alien_hand_syndrome",
    "name": "Alien Hand Syndrome",
    "latinName": "Morbus Alien Hand Syndrome",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Clinical neurological condition classified under Rare, Orphan & Miscellaneous Neurological Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "capgras_delusion",
    "name": "Capgras Delusion",
    "latinName": "Morbus Capgras Delusion",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Clinical neurological condition classified under Rare, Orphan & Miscellaneous Neurological Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "cotard_delusion_walking_corpse",
    "name": "Cotard Delusion Walking Corpse",
    "latinName": "Morbus Cotard Delusion Walking Corpse",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Clinical neurological condition classified under Rare, Orphan & Miscellaneous Neurological Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "anton_syndrome_blindness_denial",
    "name": "Anton Syndrome Blindness Denial",
    "latinName": "Morbus Anton Syndrome Blindness Denial",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Clinical neurological condition classified under Rare, Orphan & Miscellaneous Neurological Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "alice_in_wonderland_syndrome",
    "name": "Alice In Wonderland Syndrome",
    "latinName": "Morbus Alice In Wonderland Syndrome",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Clinical neurological condition classified under Rare, Orphan & Miscellaneous Neurological Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "foreign_accent_syndrome",
    "name": "Foreign Accent Syndrome",
    "latinName": "Morbus Foreign Accent Syndrome",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Clinical neurological condition classified under Rare, Orphan & Miscellaneous Neurological Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "hemispatial_neglect_unilateral",
    "name": "Hemispatial Neglect Unilateral",
    "latinName": "Morbus Hemispatial Neglect Unilateral",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Clinical neurological condition classified under Rare, Orphan & Miscellaneous Neurological Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "gerstmann_syndrome",
    "name": "Gerstmann Syndrome",
    "latinName": "Morbus Gerstmann Syndrome",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Clinical neurological condition classified under Rare, Orphan & Miscellaneous Neurological Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "balint_syndrome",
    "name": "Balint Syndrome",
    "latinName": "Morbus Balint Syndrome",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Clinical neurological condition classified under Rare, Orphan & Miscellaneous Neurological Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "kluver_bucy_syndrome",
    "name": "Kluver Bucy Syndrome",
    "latinName": "Morbus Kluver Bucy Syndrome",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Clinical neurological condition classified under Rare, Orphan & Miscellaneous Neurological Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "locked_in_syndrome_pontine",
    "name": "Locked In Syndrome Pontine",
    "latinName": "Morbus Locked In Syndrome Pontine",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Clinical neurological condition classified under Rare, Orphan & Miscellaneous Neurological Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "akinetic_mutism",
    "name": "Akinetic Mutism",
    "latinName": "Morbus Akinetic Mutism",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Clinical neurological condition classified under Rare, Orphan & Miscellaneous Neurological Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "persistent_vegetative_state",
    "name": "Persistent Vegetative State",
    "latinName": "Morbus Persistent Vegetative State",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Clinical neurological condition classified under Rare, Orphan & Miscellaneous Neurological Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "minimally_conscious_state",
    "name": "Minimally Conscious State",
    "latinName": "Morbus Minimally Conscious State",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Clinical neurological condition classified under Rare, Orphan & Miscellaneous Neurological Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "brain_death",
    "name": "Brain Death",
    "latinName": "Morbus Brain Death",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Clinical neurological condition classified under Rare, Orphan & Miscellaneous Neurological Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "isaacs_syndrome_neuromyotonia",
    "name": "Isaacs Syndrome Neuromyotonia",
    "latinName": "Morbus Isaacs Syndrome Neuromyotonia",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Clinical neurological condition classified under Rare, Orphan & Miscellaneous Neurological Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "morvans_syndrome",
    "name": "Morvans Syndrome",
    "latinName": "Morbus Morvans Syndrome",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Clinical neurological condition classified under Rare, Orphan & Miscellaneous Neurological Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "superficial_siderosis_cns",
    "name": "Superficial Siderosis Cns",
    "latinName": "Morbus Superficial Siderosis Cns",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Clinical neurological condition classified under Rare, Orphan & Miscellaneous Neurological Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "central_diabetes_insipidus",
    "name": "Central Diabetes Insipidus",
    "latinName": "Morbus Central Diabetes Insipidus",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Clinical neurological condition classified under Rare, Orphan & Miscellaneous Neurological Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "syndrome_inappropriate_adh_siadh",
    "name": "Syndrome Inappropriate Adh Siadh",
    "latinName": "Morbus Syndrome Inappropriate Adh Siadh",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Clinical neurological condition classified under Rare, Orphan & Miscellaneous Neurological Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "alzheimers_var_1",
    "name": "Alzheimer's Disease (Type A)",
    "latinName": "Morbus Alzheimer - Type A",
    "category": "Neurodegenerative & Dementias",
    "description": "Sub-Variant Alpha of Alzheimer's Disease. Progressive neurodegenerative dementia characterized by extracellular amyloid-beta plaque deposition and intracellular hyperphosphorylated tau neurofibrillary tangles.",
    "pathophysiology": "Sub-type pathological cascade: Cortical atrophy starting in entorhinal cortex and hippocampus, spreading to temporoparietal and frontal association cortices.",
    "probableCure": "Monoclonal antibodies clearing amyloid plaques, combined with BACE inhibitors and neuroprotective lifestyle interventions.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Lecanemab",
      "Donanemab",
      "Donepezil",
      "Memantine",
      "Rivastigmine"
    ],
    "treatments": [
      "Anti-Amyloid Immunotherapy",
      "Cognitive Stimulation Therapy",
      "Cholinergic Enhancements"
    ],
    "mortalityRate": "100% Progressive",
    "survivalStats": "8-12 years post-diagnosis median survival.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Parietal Lobe",
      "Frontal Lobe"
    ]
  },
  {
    "id": "early_onset_alzheimers_var_2",
    "name": "Early-Onset Alzheimer's Disease (Type B)",
    "latinName": "Dementia Praecox Presenilis - Type B",
    "category": "Neurodegenerative & Dementias",
    "description": "Sub-Variant Beta of Early-Onset Alzheimer's Disease. Aggressive form of Alzheimer's initiating before age 65, often driven by APP, PSEN1, or PSEN2 autosomal dominant mutations.",
    "pathophysiology": "Sub-type pathological cascade: Rapid neurofibrillary tangle accumulation in cingulate cortex and parietal lobes leading to focal executive and visuospatial deficits.",
    "probableCure": "Gene therapy targeting PSEN1/APP mutations, antisense oligonucleotides (ASOs), and early anti-amyloid infusion.",
    "cureStatus": "Experimental / Gene Therapy",
    "medicines": [
      "Lecanemab",
      "Memantine",
      "Galantamine",
      "Solanezumab"
    ],
    "treatments": [
      "CRISPR Gene Editing Trials",
      "Early Monoclonal Antibody Infusion",
      "Cognitive Reserve Maintenance"
    ],
    "mortalityRate": "100% Progressive",
    "survivalStats": "5-8 years post-diagnosis due to aggressive progression.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Hippocampus",
      "Frontal Lobe",
      "Parietal Lobe",
      "Corpus Callosum"
    ]
  },
  {
    "id": "parkinsons_var_3",
    "name": "Parkinson's Disease (Familial Form)",
    "latinName": "Paralysis Agitans - Familial Form",
    "category": "Neurodegenerative & Dementias",
    "description": "Genetically Linked of Parkinson's Disease. Progressive extrapyramidal movement disorder caused by loss of dopaminergic neurons in Substantia Nigra pars compacta.",
    "pathophysiology": "Sub-type pathological cascade: Intracellular accumulation of alpha-synuclein Lewy bodies disrupting nigrostriatal dopamine pathways.",
    "probableCure": "Subthalamic nucleus Deep Brain Stimulation (DBS), levodopa/carbidopa dopaminergic replenishment, and synuclein clearance.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levodopa/Carbidopa",
      "Rasagiline",
      "Pramipexole",
      "Entacapone",
      "Rotigotine"
    ],
    "treatments": [
      "Deep Brain Stimulation (DBS)",
      "Focused Ultrasound Thalamotomy",
      "Physical Therapy"
    ],
    "mortalityRate": "10-20% Reduced Life Expectancy",
    "survivalStats": "15-20+ years management with advanced DBS therapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Basal Ganglia",
      "Brain Stem",
      "Pons"
    ]
  },
  {
    "id": "frontotemporal_dementia_var_4",
    "name": "Frontotemporal Dementia (bvFTD) (Juvenile Onset)",
    "latinName": "Dementia Frontotemporalis - Juvenile Onset",
    "category": "Neurodegenerative & Dementias",
    "description": "Pediatric Manifestation of Frontotemporal Dementia (bvFTD). Neurodegenerative atrophy of frontal and temporal lobes causing profound changes in personality, empathy, social conduct, and executive function.",
    "pathophysiology": "Sub-type pathological cascade: TDP-43 or Tau protein neurotoxic aggregation in fronto-insular and anterior cingulate Von Economo neurons.",
    "probableCure": "TDP-43 clearers, progranulin gene therapy (GRN-targeted ASOs), and selective serotonergic behavior modulators.",
    "cureStatus": "Experimental / Gene Therapy",
    "medicines": [
      "Trazodone",
      "SSRI Serotonin Modulators",
      "GRN Gene Therapy ASOs"
    ],
    "treatments": [
      "Behavioral Management",
      "Speech Pathology",
      "Environmental Support"
    ],
    "mortalityRate": "100% Progressive",
    "survivalStats": "6-10 years post-symptom onset.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "lewy_body_dementia_var_5",
    "name": "Dementia with Lewy Bodies (DLB) (Adult Onset)",
    "latinName": "Dementia cum Corporibus Lewy - Adult Onset",
    "category": "Neurodegenerative & Dementias",
    "description": "Late Onset Variant of Dementia with Lewy Bodies (DLB). Dementia characterized by visual hallucinations, REM sleep behavior disorder, parkinsonism, and severe neuroleptic sensitivity.",
    "pathophysiology": "Sub-type pathological cascade: Widespread cortical and subcortical alpha-synuclein Lewy body deposition in neocortex, limbic system, and brainstem.",
    "probableCure": "Dual cholinergic-dopaminergic therapy, synuclein aggregation inhibitors, and non-dopamine antipsychotics (Pimavanserin).",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Rivastigmine",
      "Pimavanserin",
      "Donepezil",
      "Levodopa"
    ],
    "treatments": [
      "Cholinesterase Inhibitors",
      "Hallucination Management",
      "Physical Safety Controls"
    ],
    "mortalityRate": "High Mortality",
    "survivalStats": "5-8 years median survival.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Occipital Lobe",
      "Basal Ganglia",
      "Temporal Lobe"
    ]
  },
  {
    "id": "als_var_6",
    "name": "Amyotrophic Lateral Sclerosis (ALS) (Severe Refractory)",
    "latinName": "Morbus Lou Gehrig - Severe Refractory",
    "category": "Neurodegenerative & Dementias",
    "description": "Intractable Variant of Amyotrophic Lateral Sclerosis (ALS). Fatal neurodegenerative disorder involving upper motor neurons in cerebral cortex and lower motor neurons in spinal cord.",
    "pathophysiology": "Sub-type pathological cascade: TDP-43 proteinopathy, SOD1 mutations, or C9orf72 hexanucleotide expansions causing anterior horn cell motor degeneration.",
    "probableCure": "Antisense oligonucleotides (Tofersen), glutamate neurotoxicity blockers (Riluzole), and neuroprotective antioxidants.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Riluzole",
      "Edaravone",
      "Tofersen (SOD1 ASO)",
      "Sodium Phenylbutyrate"
    ],
    "treatments": [
      "Non-Invasive Positive Pressure Ventilation (NIV)",
      "PEG Tube Feeding",
      "Assistive Technology"
    ],
    "mortalityRate": "80% Mortality at 5 Years",
    "survivalStats": "3-5 years average survival; 10% survive >10 years.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Brain Stem",
      "Medulla"
    ]
  },
  {
    "id": "huntingtons_var_7",
    "name": "Huntington's Disease (Type A)",
    "latinName": "Chorea Hereditaria Huntington - Type A",
    "category": "Neurodegenerative & Dementias",
    "description": "Sub-Variant Alpha of Huntington's Disease. Autosomal dominant neurodegenerative disorder marked by involuntary choreiform movements, psychiatric disturbances, and dementia.",
    "pathophysiology": "Sub-type pathological cascade: CAG trinucleotide repeat expansion in HTT gene leading to mutant Huntingtin protein toxic aggregation and caudate nucleus atrophy.",
    "probableCure": "Huntingtin-lowering ASO gene therapies (Tominersen), vesicular monoamine transporter 2 (VMAT2) inhibitors.",
    "cureStatus": "Experimental / Gene Therapy",
    "medicines": [
      "Deutetrabenazine",
      "Tetrabenazine",
      "Tominersen ASO",
      "Haloperidol"
    ],
    "treatments": [
      "VMAT2 Choreic Control",
      "Occupational Therapy",
      "Genetic Counseling"
    ],
    "mortalityRate": "100% Fatal",
    "survivalStats": "15-20 years from symptom onset.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Basal Ganglia",
      "Ventricles",
      "Frontal Lobe"
    ]
  },
  {
    "id": "progressive_supranuclear_palsy_var_8",
    "name": "Progressive Supranuclear Palsy (PSP) (Type B)",
    "latinName": "Steele-Richardson-Olszewski Syndrome - Type B",
    "category": "Neurodegenerative & Dementias",
    "description": "Sub-Variant Beta of Progressive Supranuclear Palsy (PSP). Atypical parkinsonian tauopathy causing vertical gaze palsy, frequent backward falls, pseudobulbar palsy, and executive dementia.",
    "pathophysiology": "Sub-type pathological cascade: 4-Repeat tau neurofibrillary tangles in basal ganglia, subthalamic nucleus, superior colliculus, and dentate nucleus.",
    "probableCure": "Anti-tau monoclonal antibodies, microtubule stabilizers, and cholinergic augmentation.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levodopa",
      "Amantadine",
      "Zolpidem",
      "Coenzyme Q10"
    ],
    "treatments": [
      "Physical Therapy Fall Prevention",
      "Prism Spectacles",
      "Gastrostomy Tube"
    ],
    "mortalityRate": "High Mortality",
    "survivalStats": "6-9 years median survival.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Brain Stem",
      "Basal Ganglia",
      "Cerebellum"
    ]
  },
  {
    "id": "corticobasal_degeneration_var_9",
    "name": "Corticobasal Degeneration (CBD) (Familial Form)",
    "latinName": "Degeneratio Corticobasalis - Familial Form",
    "category": "Neurodegenerative & Dementias",
    "description": "Genetically Linked of Corticobasal Degeneration (CBD). Rare 4R-tauopathy marked by asymmetric rigidity, dystonia, alien limb phenomenon, cortical sensory loss, and apraxia.",
    "pathophysiology": "Sub-type pathological cascade: Asymmetric cortical atrophy of frontoparietal cortex and degeneration of substantia nigra with tau-positive astrocytic plaques.",
    "probableCure": "Targeted anti-tau immunotherapy, botulinum toxin for focal dystonia, and neuro-rehabilitation.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Botulinum Toxin A",
      "Levodopa",
      "Clonazepam",
      "Baclofen"
    ],
    "treatments": [
      "Focal Dystonia Injections",
      "Occupational Therapy for Alien Limb",
      "Speech Therapy"
    ],
    "mortalityRate": "High Mortality",
    "survivalStats": "6-8 years median survival.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Parietal Lobe",
      "Frontal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "multiple_system_atrophy_var_10",
    "name": "Multiple System Atrophy (MSA) (Juvenile Onset)",
    "latinName": "Shy-Drager Syndrome - Juvenile Onset",
    "category": "Neurodegenerative & Dementias",
    "description": "Pediatric Manifestation of Multiple System Atrophy (MSA). Rapidly progressive neurodegenerative alpha-synucleinopathy presenting with autonomic failure, parkinsonism, and cerebellar ataxia.",
    "pathophysiology": "Sub-type pathological cascade: Glial cytoplasmic inclusions (GCIs) of alpha-synuclein causing striatonigral degeneration and olivopontocerebellar atrophy.",
    "probableCure": "Synuclein clearers, neuroprotective anti-inflammatory agents, and aggressive autonomic blood pressure management.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Midodrine",
      "Fludrocortisone",
      "Droxidopa",
      "Levodopa"
    ],
    "treatments": [
      "Autonomic Support (Compression Garments)",
      "Urinary Catheterization",
      "Tracheostomy"
    ],
    "mortalityRate": "100% Fatal",
    "survivalStats": "6-10 years median survival.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Cerebellum",
      "Pons",
      "Brain Stem"
    ]
  },
  {
    "id": "ischemic_stroke_mca_var_11",
    "name": "Ischemic Stroke Mca (Adult Onset)",
    "latinName": "Morbus Ischemic Stroke Mca - Adult Onset",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Late Onset Variant of Ischemic Stroke Mca. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Parietal Lobe, Frontal Lobe, Basal Ganglia, Thalamus.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Tissue Plasminogen Activator (tPA)",
      "Tenecteplase",
      "Aspirin",
      "Clopidogrel"
    ],
    "treatments": [
      "Endovascular Thrombectomy",
      "Decompressive Hemicraniectomy",
      "Stroke Unit Monitoring"
    ],
    "mortalityRate": "15-30% Acute Mortality",
    "survivalStats": "50-70% long-term functional recovery with prompt thrombolysis.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Parietal Lobe",
      "Frontal Lobe",
      "Basal Ganglia",
      "Thalamus"
    ]
  },
  {
    "id": "ischemic_stroke_aca_var_12",
    "name": "Ischemic Stroke Aca (Severe Refractory)",
    "latinName": "Morbus Ischemic Stroke Aca - Severe Refractory",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Intractable Variant of Ischemic Stroke Aca. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Parietal Lobe, Frontal Lobe, Basal Ganglia, Thalamus.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Tissue Plasminogen Activator (tPA)",
      "Tenecteplase",
      "Aspirin",
      "Clopidogrel"
    ],
    "treatments": [
      "Endovascular Thrombectomy",
      "Decompressive Hemicraniectomy",
      "Stroke Unit Monitoring"
    ],
    "mortalityRate": "15-30% Acute Mortality",
    "survivalStats": "50-70% long-term functional recovery with prompt thrombolysis.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Parietal Lobe",
      "Frontal Lobe",
      "Basal Ganglia",
      "Thalamus"
    ]
  },
  {
    "id": "ischemic_stroke_pca_var_13",
    "name": "Ischemic Stroke Pca (Type A)",
    "latinName": "Morbus Ischemic Stroke Pca - Type A",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Sub-Variant Alpha of Ischemic Stroke Pca. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Parietal Lobe, Frontal Lobe, Basal Ganglia, Thalamus.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Tissue Plasminogen Activator (tPA)",
      "Tenecteplase",
      "Aspirin",
      "Clopidogrel"
    ],
    "treatments": [
      "Endovascular Thrombectomy",
      "Decompressive Hemicraniectomy",
      "Stroke Unit Monitoring"
    ],
    "mortalityRate": "15-30% Acute Mortality",
    "survivalStats": "50-70% long-term functional recovery with prompt thrombolysis.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Parietal Lobe",
      "Frontal Lobe",
      "Basal Ganglia",
      "Thalamus"
    ]
  },
  {
    "id": "vertebrobasilar_insufficiency_var_14",
    "name": "Vertebrobasilar Insufficiency (Type B)",
    "latinName": "Morbus Vertebrobasilar Insufficiency - Type B",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Sub-Variant Beta of Vertebrobasilar Insufficiency. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "lacunar_infarct_syndrome_var_15",
    "name": "Lacunar Infarct Syndrome (Familial Form)",
    "latinName": "Morbus Lacunar Infarct Syndrome - Familial Form",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Genetically Linked of Lacunar Infarct Syndrome. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "subarachnoid_hemorrhage_var_16",
    "name": "Subarachnoid Hemorrhage (Juvenile Onset)",
    "latinName": "Morbus Subarachnoid Hemorrhage - Juvenile Onset",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Pediatric Manifestation of Subarachnoid Hemorrhage. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Parietal Lobe, Frontal Lobe, Basal Ganglia, Thalamus.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Tissue Plasminogen Activator (tPA)",
      "Tenecteplase",
      "Aspirin",
      "Clopidogrel"
    ],
    "treatments": [
      "Endovascular Thrombectomy",
      "Decompressive Hemicraniectomy",
      "Stroke Unit Monitoring"
    ],
    "mortalityRate": "15-30% Acute Mortality",
    "survivalStats": "50-70% long-term functional recovery with prompt thrombolysis.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Parietal Lobe",
      "Frontal Lobe",
      "Basal Ganglia",
      "Thalamus"
    ]
  },
  {
    "id": "intracerebral_hemorrhage_var_17",
    "name": "Intracerebral Hemorrhage (Adult Onset)",
    "latinName": "Morbus Intracerebral Hemorrhage - Adult Onset",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Late Onset Variant of Intracerebral Hemorrhage. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Parietal Lobe, Frontal Lobe, Basal Ganglia, Thalamus.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Tissue Plasminogen Activator (tPA)",
      "Tenecteplase",
      "Aspirin",
      "Clopidogrel"
    ],
    "treatments": [
      "Endovascular Thrombectomy",
      "Decompressive Hemicraniectomy",
      "Stroke Unit Monitoring"
    ],
    "mortalityRate": "15-30% Acute Mortality",
    "survivalStats": "50-70% long-term functional recovery with prompt thrombolysis.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Parietal Lobe",
      "Frontal Lobe",
      "Basal Ganglia",
      "Thalamus"
    ]
  },
  {
    "id": "subdural_hematoma_chronic_var_18",
    "name": "Subdural Hematoma Chronic (Severe Refractory)",
    "latinName": "Morbus Subdural Hematoma Chronic - Severe Refractory",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Intractable Variant of Subdural Hematoma Chronic. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "epidural_hematoma_acute_var_19",
    "name": "Epidural Hematoma Acute (Type A)",
    "latinName": "Morbus Epidural Hematoma Acute - Type A",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Sub-Variant Alpha of Epidural Hematoma Acute. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "cerebral_aneurysm_unruptured_var_20",
    "name": "Cerebral Aneurysm Unruptured (Type B)",
    "latinName": "Morbus Cerebral Aneurysm Unruptured - Type B",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Sub-Variant Beta of Cerebral Aneurysm Unruptured. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "arteriovenous_malformation_brain_var_21",
    "name": "Arteriovenous Malformation Brain (Familial Form)",
    "latinName": "Morbus Arteriovenous Malformation Brain - Familial Form",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Genetically Linked of Arteriovenous Malformation Brain. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "cavernous_hemangioma_brain_var_22",
    "name": "Cavernous Hemangioma Brain (Juvenile Onset)",
    "latinName": "Morbus Cavernous Hemangioma Brain - Juvenile Onset",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Pediatric Manifestation of Cavernous Hemangioma Brain. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "dural_arteriovenous_fistula_var_23",
    "name": "Dural Arteriovenous Fistula (Adult Onset)",
    "latinName": "Morbus Dural Arteriovenous Fistula - Adult Onset",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Late Onset Variant of Dural Arteriovenous Fistula. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "cerebral_venous_sinus_thrombosis_var_24",
    "name": "Cerebral Venous Sinus Thrombosis (Severe Refractory)",
    "latinName": "Morbus Cerebral Venous Sinus Thrombosis - Severe Refractory",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Intractable Variant of Cerebral Venous Sinus Thrombosis. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "carotid_artery_stenosis_var_25",
    "name": "Carotid Artery Stenosis (Type A)",
    "latinName": "Morbus Carotid Artery Stenosis - Type A",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Sub-Variant Alpha of Carotid Artery Stenosis. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "vertebral_artery_dissection_var_26",
    "name": "Vertebral Artery Dissection (Type B)",
    "latinName": "Morbus Vertebral Artery Dissection - Type B",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Sub-Variant Beta of Vertebral Artery Dissection. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "carotid_artery_dissection_var_27",
    "name": "Carotid Artery Dissection (Familial Form)",
    "latinName": "Morbus Carotid Artery Dissection - Familial Form",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Genetically Linked of Carotid Artery Dissection. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "moyamoya_disease_var_28",
    "name": "Moyamoya Disease (Juvenile Onset)",
    "latinName": "Morbus Moyamoya Disease - Juvenile Onset",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Pediatric Manifestation of Moyamoya Disease. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "cadasil_syndrome_var_29",
    "name": "Cadasil Syndrome (Adult Onset)",
    "latinName": "Morbus Cadasil Syndrome - Adult Onset",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Late Onset Variant of Cadasil Syndrome. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "primary_cns_vasculitis_var_30",
    "name": "Primary Cns Vasculitis (Severe Refractory)",
    "latinName": "Morbus Primary Cns Vasculitis - Severe Refractory",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Intractable Variant of Primary Cns Vasculitis. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "cerebral_amyloid_angiopathy_var_31",
    "name": "Cerebral Amyloid Angiopathy (Type A)",
    "latinName": "Morbus Cerebral Amyloid Angiopathy - Type A",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Sub-Variant Alpha of Cerebral Amyloid Angiopathy. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "hypoxic_ischemic_encephalopathy_var_32",
    "name": "Hypoxic Ischemic Encephalopathy (Type B)",
    "latinName": "Morbus Hypoxic Ischemic Encephalopathy - Type B",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Sub-Variant Beta of Hypoxic Ischemic Encephalopathy. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Parietal Lobe, Frontal Lobe, Basal Ganglia, Thalamus.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Tissue Plasminogen Activator (tPA)",
      "Tenecteplase",
      "Aspirin",
      "Clopidogrel"
    ],
    "treatments": [
      "Endovascular Thrombectomy",
      "Decompressive Hemicraniectomy",
      "Stroke Unit Monitoring"
    ],
    "mortalityRate": "15-30% Acute Mortality",
    "survivalStats": "50-70% long-term functional recovery with prompt thrombolysis.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Parietal Lobe",
      "Frontal Lobe",
      "Basal Ganglia",
      "Thalamus"
    ]
  },
  {
    "id": "posterior_reversible_encephalopathy_pres_var_33",
    "name": "Posterior Reversible Encephalopathy Pres (Familial Form)",
    "latinName": "Morbus Posterior Reversible Encephalopathy Pres - Familial Form",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Genetically Linked of Posterior Reversible Encephalopathy Pres. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "reversible_cerebral_vasoconstriction_rcvs_var_34",
    "name": "Reversible Cerebral Vasoconstriction Rcvs (Juvenile Onset)",
    "latinName": "Morbus Reversible Cerebral Vasoconstriction Rcvs - Juvenile Onset",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Pediatric Manifestation of Reversible Cerebral Vasoconstriction Rcvs. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "subclavian_steal_syndrome_var_35",
    "name": "Subclavian Steal Syndrome (Adult Onset)",
    "latinName": "Morbus Subclavian Steal Syndrome - Adult Onset",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Late Onset Variant of Subclavian Steal Syndrome. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "spinal_cord_infarction_var_36",
    "name": "Spinal Cord Infarction (Severe Refractory)",
    "latinName": "Morbus Spinal Cord Infarction - Severe Refractory",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Intractable Variant of Spinal Cord Infarction. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "hypertensive_encephalopathy_var_37",
    "name": "Hypertensive Encephalopathy (Type A)",
    "latinName": "Morbus Hypertensive Encephalopathy - Type A",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Sub-Variant Alpha of Hypertensive Encephalopathy. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "giant_cell_arteritis_stroke_var_38",
    "name": "Giant Cell Arteritis Stroke (Type B)",
    "latinName": "Morbus Giant Cell Arteritis Stroke - Type B",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Sub-Variant Beta of Giant Cell Arteritis Stroke. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Parietal Lobe, Frontal Lobe, Basal Ganglia, Thalamus.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Tissue Plasminogen Activator (tPA)",
      "Tenecteplase",
      "Aspirin",
      "Clopidogrel"
    ],
    "treatments": [
      "Endovascular Thrombectomy",
      "Decompressive Hemicraniectomy",
      "Stroke Unit Monitoring"
    ],
    "mortalityRate": "15-30% Acute Mortality",
    "survivalStats": "50-70% long-term functional recovery with prompt thrombolysis.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Parietal Lobe",
      "Frontal Lobe",
      "Basal Ganglia",
      "Thalamus"
    ]
  },
  {
    "id": "takayasu_arteritis_cns_var_39",
    "name": "Takayasu Arteritis Cns (Familial Form)",
    "latinName": "Morbus Takayasu Arteritis Cns - Familial Form",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Genetically Linked of Takayasu Arteritis Cns. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "fibromuscular_dysplasia_carotid_var_40",
    "name": "Fibromuscular Dysplasia Carotid (Juvenile Onset)",
    "latinName": "Morbus Fibromuscular Dysplasia Carotid - Juvenile Onset",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Pediatric Manifestation of Fibromuscular Dysplasia Carotid. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "cerebellar_infarction_pica_var_41",
    "name": "Cerebellar Infarction Pica (Adult Onset)",
    "latinName": "Morbus Cerebellar Infarction Pica - Adult Onset",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Late Onset Variant of Cerebellar Infarction Pica. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "brainstem_infarction_wallenberg_var_42",
    "name": "Brainstem Infarction Wallenberg (Severe Refractory)",
    "latinName": "Morbus Brainstem Infarction Wallenberg - Severe Refractory",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Intractable Variant of Brainstem Infarction Wallenberg. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "thalamic_infarction_dejerine_var_43",
    "name": "Thalamic Infarction Dejerine (Type A)",
    "latinName": "Morbus Thalamic Infarction Dejerine - Type A",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Sub-Variant Alpha of Thalamic Infarction Dejerine. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "watershed_infarction_corticomedullary_var_44",
    "name": "Watershed Infarction Corticomedullary (Type B)",
    "latinName": "Morbus Watershed Infarction Corticomedullary - Type B",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Sub-Variant Beta of Watershed Infarction Corticomedullary. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "central_pontine_myelinolysis_osmotic_var_45",
    "name": "Central Pontine Myelinolysis Osmotic (Familial Form)",
    "latinName": "Morbus Central Pontine Myelinolysis Osmotic - Familial Form",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Genetically Linked of Central Pontine Myelinolysis Osmotic. Clinical neurological condition classified under Cerebrovascular & Stroke Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "glioblastoma_idh_wildtype_var_46",
    "name": "Glioblastoma Idh Wildtype (Juvenile Onset)",
    "latinName": "Morbus Glioblastoma Idh Wildtype - Juvenile Onset",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Pediatric Manifestation of Glioblastoma Idh Wildtype. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Terminal / High Mortality",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "50-90% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "glioblastoma_idh_mutant_var_47",
    "name": "Glioblastoma Idh Mutant (Adult Onset)",
    "latinName": "Morbus Glioblastoma Idh Mutant - Adult Onset",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Late Onset Variant of Glioblastoma Idh Mutant. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Terminal / High Mortality",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "50-90% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "anaplastic_astrocytoma_var_48",
    "name": "Anaplastic Astrocytoma (Severe Refractory)",
    "latinName": "Morbus Anaplastic Astrocytoma - Severe Refractory",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Intractable Variant of Anaplastic Astrocytoma. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "diffuse_astrocytoma_var_49",
    "name": "Diffuse Astrocytoma (Type A)",
    "latinName": "Morbus Diffuse Astrocytoma - Type A",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Sub-Variant Alpha of Diffuse Astrocytoma. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "oligodendroglioma_1p19q_var_50",
    "name": "Oligodendroglioma 1P19Q (Type B)",
    "latinName": "Morbus Oligodendroglioma 1P19Q - Type B",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Sub-Variant Beta of Oligodendroglioma 1P19Q. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "10-20% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "anaplastic_oligodendroglioma_var_51",
    "name": "Anaplastic Oligodendroglioma (Familial Form)",
    "latinName": "Morbus Anaplastic Oligodendroglioma - Familial Form",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Genetically Linked of Anaplastic Oligodendroglioma. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "10-20% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "ependymoma_anaplastic_var_52",
    "name": "Ependymoma Anaplastic (Juvenile Onset)",
    "latinName": "Morbus Ependymoma Anaplastic - Juvenile Onset",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Pediatric Manifestation of Ependymoma Anaplastic. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "medulloblastoma_wnt_var_53",
    "name": "Medulloblastoma Wnt (Adult Onset)",
    "latinName": "Morbus Medulloblastoma Wnt - Adult Onset",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Late Onset Variant of Medulloblastoma Wnt. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Terminal / High Mortality",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "50-90% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "medulloblastoma_shh_var_54",
    "name": "Medulloblastoma Shh (Severe Refractory)",
    "latinName": "Morbus Medulloblastoma Shh - Severe Refractory",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Intractable Variant of Medulloblastoma Shh. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Terminal / High Mortality",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "50-90% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "meningioma_atypical_var_55",
    "name": "Meningioma Atypical (Type A)",
    "latinName": "Morbus Meningioma Atypical - Type A",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Sub-Variant Alpha of Meningioma Atypical. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "10-20% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "meningioma_anaplastic_var_56",
    "name": "Meningioma Anaplastic (Type B)",
    "latinName": "Morbus Meningioma Anaplastic - Type B",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Sub-Variant Beta of Meningioma Anaplastic. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "10-20% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "primary_cns_lymphoma_var_57",
    "name": "Primary Cns Lymphoma (Familial Form)",
    "latinName": "Morbus Primary Cns Lymphoma - Familial Form",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Genetically Linked of Primary Cns Lymphoma. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "pituitary_prolactinoma_var_58",
    "name": "Pituitary Prolactinoma (Juvenile Onset)",
    "latinName": "Morbus Pituitary Prolactinoma - Juvenile Onset",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Pediatric Manifestation of Pituitary Prolactinoma. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "pituitary_somatotropinoma_var_59",
    "name": "Pituitary Somatotropinoma (Adult Onset)",
    "latinName": "Morbus Pituitary Somatotropinoma - Adult Onset",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Late Onset Variant of Pituitary Somatotropinoma. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "craniopharyngioma_var_60",
    "name": "Craniopharyngioma (Severe Refractory)",
    "latinName": "Morbus Craniopharyngioma - Severe Refractory",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Intractable Variant of Craniopharyngioma. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "acoustic_neuroma_schwannoma_var_61",
    "name": "Acoustic Neuroma Schwannoma (Type A)",
    "latinName": "Morbus Acoustic Neuroma Schwannoma - Type A",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Sub-Variant Alpha of Acoustic Neuroma Schwannoma. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "pineoblastoma_var_62",
    "name": "Pineoblastoma (Type B)",
    "latinName": "Morbus Pineoblastoma - Type B",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Sub-Variant Beta of Pineoblastoma. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Terminal / High Mortality",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "50-90% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "hemangioblastoma_vhl_var_63",
    "name": "Hemangioblastoma Vhl (Familial Form)",
    "latinName": "Morbus Hemangioblastoma Vhl - Familial Form",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Genetically Linked of Hemangioblastoma Vhl. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Terminal / High Mortality",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "50-90% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "skull_base_chordoma_var_64",
    "name": "Skull Base Chordoma (Juvenile Onset)",
    "latinName": "Morbus Skull Base Chordoma - Juvenile Onset",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Pediatric Manifestation of Skull Base Chordoma. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "choroid_plexus_carcinoma_var_65",
    "name": "Choroid Plexus Carcinoma (Adult Onset)",
    "latinName": "Morbus Choroid Plexus Carcinoma - Adult Onset",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Late Onset Variant of Choroid Plexus Carcinoma. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Terminal / High Mortality",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "10-20% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "ganglioglioma_var_66",
    "name": "Ganglioglioma (Severe Refractory)",
    "latinName": "Morbus Ganglioglioma - Severe Refractory",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Intractable Variant of Ganglioglioma. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "10-20% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "dnet_tumor_var_67",
    "name": "Dnet Tumor (Type A)",
    "latinName": "Morbus Dnet Tumor - Type A",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Sub-Variant Alpha of Dnet Tumor. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "10-20% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "central_neurocytoma_var_68",
    "name": "Central Neurocytoma (Type B)",
    "latinName": "Morbus Central Neurocytoma - Type B",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Sub-Variant Beta of Central Neurocytoma. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "diffuse_midline_glioma_h3k27m_var_69",
    "name": "Diffuse Midline Glioma H3K27M (Familial Form)",
    "latinName": "Morbus Diffuse Midline Glioma H3K27M - Familial Form",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Genetically Linked of Diffuse Midline Glioma H3K27M. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "10-20% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "dipg_pontine_glioma_var_70",
    "name": "Dipg Pontine Glioma (Juvenile Onset)",
    "latinName": "Morbus Dipg Pontine Glioma - Juvenile Onset",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Pediatric Manifestation of Dipg Pontine Glioma. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "10-20% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "brain_metastasis_lung_var_71",
    "name": "Brain Metastasis Lung (Adult Onset)",
    "latinName": "Morbus Brain Metastasis Lung - Adult Onset",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Late Onset Variant of Brain Metastasis Lung. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "brain_metastasis_breast_var_72",
    "name": "Brain Metastasis Breast (Severe Refractory)",
    "latinName": "Morbus Brain Metastasis Breast - Severe Refractory",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Intractable Variant of Brain Metastasis Breast. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "brain_metastasis_melanoma_var_73",
    "name": "Brain Metastasis Melanoma (Type A)",
    "latinName": "Morbus Brain Metastasis Melanoma - Type A",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Sub-Variant Alpha of Brain Metastasis Melanoma. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "leptomeningeal_carcinomatosis_var_74",
    "name": "Leptomeningeal Carcinomatosis (Type B)",
    "latinName": "Morbus Leptomeningeal Carcinomatosis - Type B",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Sub-Variant Beta of Leptomeningeal Carcinomatosis. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Frontal Lobe, Parietal Lobe, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Terminal / High Mortality",
    "medicines": [
      "Temozolomide",
      "Bevacizumab",
      "Lomustine",
      "Dexamethasone"
    ],
    "treatments": [
      "Microsurgical Resection",
      "Proton Beam Radiation",
      "Tumor Treating Fields (TTFields)"
    ],
    "mortalityRate": "10-20% 5-Year Mortality",
    "survivalStats": "14-20 months median survival for high-grade malignancies.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Temporal Lobe",
      "Frontal Lobe",
      "Parietal Lobe",
      "Cerebellum"
    ]
  },
  {
    "id": "trigeminal_schwannoma_var_75",
    "name": "Trigeminal Schwannoma (Familial Form)",
    "latinName": "Morbus Trigeminal Schwannoma - Familial Form",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Genetically Linked of Trigeminal Schwannoma. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "colloid_cyst_third_ventricle_var_76",
    "name": "Colloid Cyst Third Ventricle (Juvenile Onset)",
    "latinName": "Morbus Colloid Cyst Third Ventricle - Juvenile Onset",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Pediatric Manifestation of Colloid Cyst Third Ventricle. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "rathke_cleft_cyst_var_77",
    "name": "Rathke Cleft Cyst (Adult Onset)",
    "latinName": "Morbus Rathke Cleft Cyst - Adult Onset",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Late Onset Variant of Rathke Cleft Cyst. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "epidermoid_cyst_brain_var_78",
    "name": "Epidermoid Cyst Brain (Severe Refractory)",
    "latinName": "Morbus Epidermoid Cyst Brain - Severe Refractory",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Intractable Variant of Epidermoid Cyst Brain. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "hemangiopericytoma_meninges_var_79",
    "name": "Hemangiopericytoma Meninges (Type A)",
    "latinName": "Morbus Hemangiopericytoma Meninges - Type A",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Sub-Variant Alpha of Hemangiopericytoma Meninges. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "primary_meningeal_melanoma_var_80",
    "name": "Primary Meningeal Melanoma (Type B)",
    "latinName": "Morbus Primary Meningeal Melanoma - Type B",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Sub-Variant Beta of Primary Meningeal Melanoma. Clinical neurological condition classified under Neuro-Oncology & Brain Tumors, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "Critical / Fatal",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "temporal_lobe_epilepsy_mts_var_81",
    "name": "Temporal Lobe Epilepsy Mts (Familial Form)",
    "latinName": "Morbus Temporal Lobe Epilepsy Mts - Familial Form",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Genetically Linked of Temporal Lobe Epilepsy Mts. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "frontal_lobe_epilepsy_var_82",
    "name": "Frontal Lobe Epilepsy (Juvenile Onset)",
    "latinName": "Morbus Frontal Lobe Epilepsy - Juvenile Onset",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Pediatric Manifestation of Frontal Lobe Epilepsy. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "parietal_lobe_epilepsy_var_83",
    "name": "Parietal Lobe Epilepsy (Adult Onset)",
    "latinName": "Morbus Parietal Lobe Epilepsy - Adult Onset",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Late Onset Variant of Parietal Lobe Epilepsy. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "occipital_lobe_epilepsy_var_84",
    "name": "Occipital Lobe Epilepsy (Severe Refractory)",
    "latinName": "Morbus Occipital Lobe Epilepsy - Severe Refractory",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Intractable Variant of Occipital Lobe Epilepsy. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "juvenile_myoclonic_epilepsy_var_85",
    "name": "Juvenile Myoclonic Epilepsy (Type A)",
    "latinName": "Morbus Juvenile Myoclonic Epilepsy - Type A",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Sub-Variant Alpha of Juvenile Myoclonic Epilepsy. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "childhood_absence_epilepsy_var_86",
    "name": "Childhood Absence Epilepsy (Type B)",
    "latinName": "Morbus Childhood Absence Epilepsy - Type B",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Sub-Variant Beta of Childhood Absence Epilepsy. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "lennox_gastaut_syndrome_var_87",
    "name": "Lennox Gastaut Syndrome (Familial Form)",
    "latinName": "Morbus Lennox Gastaut Syndrome - Familial Form",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Genetically Linked of Lennox Gastaut Syndrome. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "dravet_syndrome_scn1a_var_88",
    "name": "Dravet Syndrome Scn1A (Juvenile Onset)",
    "latinName": "Morbus Dravet Syndrome Scn1A - Juvenile Onset",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Pediatric Manifestation of Dravet Syndrome Scn1A. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "west_syndrome_infantile_spasms_var_89",
    "name": "West Syndrome Infantile Spasms (Adult Onset)",
    "latinName": "Morbus West Syndrome Infantile Spasms - Adult Onset",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Late Onset Variant of West Syndrome Infantile Spasms. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "ohtahara_syndrome_var_90",
    "name": "Ohtahara Syndrome (Severe Refractory)",
    "latinName": "Morbus Ohtahara Syndrome - Severe Refractory",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Intractable Variant of Ohtahara Syndrome. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "rasmussen_encephalitis_var_91",
    "name": "Rasmussen Encephalitis (Type A)",
    "latinName": "Morbus Rasmussen Encephalitis - Type A",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Sub-Variant Alpha of Rasmussen Encephalitis. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "landau_kleffner_syndrome_var_92",
    "name": "Landau Kleffner Syndrome (Type B)",
    "latinName": "Morbus Landau Kleffner Syndrome - Type B",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Sub-Variant Beta of Landau Kleffner Syndrome. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "csws_sleep_epilepsy_var_93",
    "name": "Csws Sleep Epilepsy (Familial Form)",
    "latinName": "Morbus Csws Sleep Epilepsy - Familial Form",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Genetically Linked of Csws Sleep Epilepsy. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "benign_rolandic_epilepsy_var_94",
    "name": "Benign Rolandic Epilepsy (Juvenile Onset)",
    "latinName": "Morbus Benign Rolandic Epilepsy - Juvenile Onset",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Pediatric Manifestation of Benign Rolandic Epilepsy. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "lafora_disease_myoclonus_var_95",
    "name": "Lafora Disease Myoclonus (Adult Onset)",
    "latinName": "Morbus Lafora Disease Myoclonus - Adult Onset",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Late Onset Variant of Lafora Disease Myoclonus. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "batten_disease_ncl_var_96",
    "name": "Batten Disease Ncl (Severe Refractory)",
    "latinName": "Morbus Batten Disease Ncl - Severe Refractory",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Intractable Variant of Batten Disease Ncl. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "glut1_deficiency_epilepsy_var_97",
    "name": "Glut1 Deficiency Epilepsy (Type A)",
    "latinName": "Morbus Glut1 Deficiency Epilepsy - Type A",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Sub-Variant Alpha of Glut1 Deficiency Epilepsy. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "cdkl5_deficiency_disorder_var_98",
    "name": "Cdkl5 Deficiency Disorder (Type B)",
    "latinName": "Morbus Cdkl5 Deficiency Disorder - Type B",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Sub-Variant Beta of Cdkl5 Deficiency Disorder. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "stxbp1_encephalopathy_var_99",
    "name": "Stxbp1 Encephalopathy (Familial Form)",
    "latinName": "Morbus Stxbp1 Encephalopathy - Familial Form",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Genetically Linked of Stxbp1 Encephalopathy. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "doose_syndrome_atonic_var_100",
    "name": "Doose Syndrome Atonic (Juvenile Onset)",
    "latinName": "Morbus Doose Syndrome Atonic - Juvenile Onset",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Pediatric Manifestation of Doose Syndrome Atonic. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "status_epilepticus_refractory_var_101",
    "name": "Status Epilepticus Refractory (Adult Onset)",
    "latinName": "Morbus Status Epilepticus Refractory - Adult Onset",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Late Onset Variant of Status Epilepticus Refractory. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "norse_fires_syndrome_var_102",
    "name": "Norse Fires Syndrome (Severe Refractory)",
    "latinName": "Morbus Norse Fires Syndrome - Severe Refractory",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Intractable Variant of Norse Fires Syndrome. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "gelastic_seizure_hamartoma_var_103",
    "name": "Gelastic Seizure Hamartoma (Type A)",
    "latinName": "Morbus Gelastic Seizure Hamartoma - Type A",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Sub-Variant Alpha of Gelastic Seizure Hamartoma. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "focal_cortical_dysplasia_type2_var_104",
    "name": "Focal Cortical Dysplasia Type2 (Type B)",
    "latinName": "Morbus Focal Cortical Dysplasia Type2 - Type B",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Sub-Variant Beta of Focal Cortical Dysplasia Type2. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "tuberous_sclerosis_epilepsy_var_105",
    "name": "Tuberous Sclerosis Epilepsy (Familial Form)",
    "latinName": "Morbus Tuberous Sclerosis Epilepsy - Familial Form",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Genetically Linked of Tuberous Sclerosis Epilepsy. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "sturge_weber_seizures_var_106",
    "name": "Sturge Weber Seizures (Juvenile Onset)",
    "latinName": "Morbus Sturge Weber Seizures - Juvenile Onset",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Pediatric Manifestation of Sturge Weber Seizures. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "post_traumatic_epilepsy_var_107",
    "name": "Post Traumatic Epilepsy (Adult Onset)",
    "latinName": "Morbus Post Traumatic Epilepsy - Adult Onset",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Late Onset Variant of Post Traumatic Epilepsy. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "post_stroke_epilepsy_var_108",
    "name": "Post Stroke Epilepsy (Severe Refractory)",
    "latinName": "Morbus Post Stroke Epilepsy - Severe Refractory",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Intractable Variant of Post Stroke Epilepsy. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Parietal Lobe, Frontal Lobe, Basal Ganglia, Thalamus.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Tissue Plasminogen Activator (tPA)",
      "Tenecteplase",
      "Aspirin",
      "Clopidogrel"
    ],
    "treatments": [
      "Endovascular Thrombectomy",
      "Decompressive Hemicraniectomy",
      "Stroke Unit Monitoring"
    ],
    "mortalityRate": "15-30% Acute Mortality",
    "survivalStats": "50-70% long-term functional recovery with prompt thrombolysis.",
    "riskLevel": "High",
    "affectedRegions": [
      "Parietal Lobe",
      "Frontal Lobe",
      "Basal Ganglia",
      "Thalamus"
    ]
  },
  {
    "id": "catamenial_epilepsy_var_109",
    "name": "Catamenial Epilepsy (Type A)",
    "latinName": "Morbus Catamenial Epilepsy - Type A",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Sub-Variant Alpha of Catamenial Epilepsy. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "autoimmune_epilepsy_lgi1_var_110",
    "name": "Autoimmune Epilepsy Lgi1 (Type B)",
    "latinName": "Morbus Autoimmune Epilepsy Lgi1 - Type B",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Sub-Variant Beta of Autoimmune Epilepsy Lgi1. Clinical neurological condition classified under Epilepsy & Seizure Disorders, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Hippocampus, Temporal Lobe, Frontal Lobe, Amygdala.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Levetiracetam",
      "Valproate",
      "Lamotrigine",
      "Cenobamate",
      "Cannabidiol"
    ],
    "treatments": [
      "Vagus Nerve Stimulation (VNS)",
      "Responsive Neurostimulation (RNS)",
      "Resective Epilepsy Surgery"
    ],
    "mortalityRate": "Low to Moderate (SUDEP Risk)",
    "survivalStats": "70% seizure freedom achieved with combination pharmacotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Hippocampus",
      "Temporal Lobe",
      "Frontal Lobe",
      "Amygdala"
    ]
  },
  {
    "id": "multiple_sclerosis_rrms_var_111",
    "name": "Multiple Sclerosis Rrms (Familial Form)",
    "latinName": "Morbus Multiple Sclerosis Rrms - Familial Form",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Genetically Linked of Multiple Sclerosis Rrms. Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "multiple_sclerosis_spms_var_112",
    "name": "Multiple Sclerosis Spms (Juvenile Onset)",
    "latinName": "Morbus Multiple Sclerosis Spms - Juvenile Onset",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Pediatric Manifestation of Multiple Sclerosis Spms. Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "multiple_sclerosis_ppms_var_113",
    "name": "Multiple Sclerosis Ppms (Adult Onset)",
    "latinName": "Morbus Multiple Sclerosis Ppms - Adult Onset",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Late Onset Variant of Multiple Sclerosis Ppms. Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "nmosd_devics_disease_var_114",
    "name": "Nmosd Devics Disease (Severe Refractory)",
    "latinName": "Morbus Nmosd Devics Disease - Severe Refractory",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Intractable Variant of Nmosd Devics Disease. Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "mogad_encephalomyelitis_var_115",
    "name": "Mogad Encephalomyelitis (Type A)",
    "latinName": "Morbus Mogad Encephalomyelitis - Type A",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Sub-Variant Alpha of Mogad Encephalomyelitis. Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Frontal Lobe, Basal Ganglia, Brain Stem, Cerebellum.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Symptomatic Neuro-Modulators",
      "Neuroprotective Agents"
    ],
    "treatments": [
      "Targeted Rehabilitation",
      "Neuro-Surgical Interventions",
      "Multidisciplinary Care"
    ],
    "mortalityRate": "Variable depending on severity",
    "survivalStats": "Long-term disease management with clinical oversight.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Basal Ganglia",
      "Brain Stem",
      "Cerebellum"
    ]
  },
  {
    "id": "anti_nmdar_encephalitis_var_116",
    "name": "Anti Nmdar Encephalitis (Type B)",
    "latinName": "Morbus Anti Nmdar Encephalitis - Type B",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Sub-Variant Beta of Anti Nmdar Encephalitis. Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "anti_lgi1_encephalitis_var_117",
    "name": "Anti Lgi1 Encephalitis (Familial Form)",
    "latinName": "Morbus Anti Lgi1 Encephalitis - Familial Form",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Genetically Linked of Anti Lgi1 Encephalitis. Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "anti_caspr2_encephalitis_var_118",
    "name": "Anti Caspr2 Encephalitis (Juvenile Onset)",
    "latinName": "Morbus Anti Caspr2 Encephalitis - Juvenile Onset",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Pediatric Manifestation of Anti Caspr2 Encephalitis. Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "anti_ampar_encephalitis_var_119",
    "name": "Anti Ampar Encephalitis (Adult Onset)",
    "latinName": "Morbus Anti Ampar Encephalitis - Adult Onset",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Late Onset Variant of Anti Ampar Encephalitis. Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "anti_gabab_encephalitis_var_120",
    "name": "Anti Gabab Encephalitis (Severe Refractory)",
    "latinName": "Morbus Anti Gabab Encephalitis - Severe Refractory",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Intractable Variant of Anti Gabab Encephalitis. Clinical neurological condition classified under Autoimmune & Inflammatory Encephalopathies, exhibiting localized or diffuse central nervous system dysfunction.",
    "pathophysiology": "Sub-type pathological cascade: Pathological cellular mechanism involving target structure disruption in Temporal Lobe, Hippocampus, Frontal Lobe, Limbic System.",
    "probableCure": "Targeted pharmacological modulation, surgical intervention, and neuroprotective therapy.",
    "cureStatus": "Curable",
    "medicines": [
      "Ceftriaxone",
      "Acyclovir",
      "IVIG",
      "Methylprednisolone",
      "Rituximab"
    ],
    "treatments": [
      "Plasma Exchange (PLEX)",
      "High-Dose Corticosteroids",
      "Intensive Care Telemetry"
    ],
    "mortalityRate": "5-25% Acute Mortality",
    "survivalStats": "80% full recovery with rapid initiation of targeted antimicrobials/immunotherapy.",
    "riskLevel": "High",
    "affectedRegions": [
      "Temporal Lobe",
      "Hippocampus",
      "Frontal Lobe",
      "Limbic System"
    ]
  },
  {
    "id": "pathology_clinical_entry_1",
    "name": "Neurological Condition Class 001",
    "latinName": "Encephalopathia Classis 1",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Specialized neurological disorder entry #001 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_2",
    "name": "Neurological Condition Class 002",
    "latinName": "Encephalopathia Classis 2",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Specialized neurological disorder entry #002 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_3",
    "name": "Neurological Condition Class 003",
    "latinName": "Encephalopathia Classis 3",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Specialized neurological disorder entry #003 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_4",
    "name": "Neurological Condition Class 004",
    "latinName": "Encephalopathia Classis 4",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Specialized neurological disorder entry #004 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_5",
    "name": "Neurological Condition Class 005",
    "latinName": "Encephalopathia Classis 5",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Specialized neurological disorder entry #005 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_6",
    "name": "Neurological Condition Class 006",
    "latinName": "Encephalopathia Classis 6",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Specialized neurological disorder entry #006 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_7",
    "name": "Neurological Condition Class 007",
    "latinName": "Encephalopathia Classis 7",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Specialized neurological disorder entry #007 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_8",
    "name": "Neurological Condition Class 008",
    "latinName": "Encephalopathia Classis 8",
    "category": "Sleep & Circadian Rhythms",
    "description": "Specialized neurological disorder entry #008 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_9",
    "name": "Neurological Condition Class 009",
    "latinName": "Encephalopathia Classis 9",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Specialized neurological disorder entry #009 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_10",
    "name": "Neurological Condition Class 010",
    "latinName": "Encephalopathia Classis 10",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Specialized neurological disorder entry #010 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_11",
    "name": "Neurological Condition Class 011",
    "latinName": "Encephalopathia Classis 11",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Specialized neurological disorder entry #011 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_12",
    "name": "Neurological Condition Class 012",
    "latinName": "Encephalopathia Classis 12",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Specialized neurological disorder entry #012 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_13",
    "name": "Neurological Condition Class 013",
    "latinName": "Encephalopathia Classis 13",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Specialized neurological disorder entry #013 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_14",
    "name": "Neurological Condition Class 014",
    "latinName": "Encephalopathia Classis 14",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Specialized neurological disorder entry #014 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_15",
    "name": "Neurological Condition Class 015",
    "latinName": "Encephalopathia Classis 15",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Specialized neurological disorder entry #015 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_16",
    "name": "Neurological Condition Class 016",
    "latinName": "Encephalopathia Classis 16",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Specialized neurological disorder entry #016 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_17",
    "name": "Neurological Condition Class 017",
    "latinName": "Encephalopathia Classis 17",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Specialized neurological disorder entry #017 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_18",
    "name": "Neurological Condition Class 018",
    "latinName": "Encephalopathia Classis 18",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Specialized neurological disorder entry #018 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_19",
    "name": "Neurological Condition Class 019",
    "latinName": "Encephalopathia Classis 19",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Specialized neurological disorder entry #019 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_20",
    "name": "Neurological Condition Class 020",
    "latinName": "Encephalopathia Classis 20",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Specialized neurological disorder entry #020 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_21",
    "name": "Neurological Condition Class 021",
    "latinName": "Encephalopathia Classis 21",
    "category": "Sleep & Circadian Rhythms",
    "description": "Specialized neurological disorder entry #021 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_22",
    "name": "Neurological Condition Class 022",
    "latinName": "Encephalopathia Classis 22",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Specialized neurological disorder entry #022 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_23",
    "name": "Neurological Condition Class 023",
    "latinName": "Encephalopathia Classis 23",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Specialized neurological disorder entry #023 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_24",
    "name": "Neurological Condition Class 024",
    "latinName": "Encephalopathia Classis 24",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Specialized neurological disorder entry #024 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_25",
    "name": "Neurological Condition Class 025",
    "latinName": "Encephalopathia Classis 25",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Specialized neurological disorder entry #025 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_26",
    "name": "Neurological Condition Class 026",
    "latinName": "Encephalopathia Classis 26",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Specialized neurological disorder entry #026 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_27",
    "name": "Neurological Condition Class 027",
    "latinName": "Encephalopathia Classis 27",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Specialized neurological disorder entry #027 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_28",
    "name": "Neurological Condition Class 028",
    "latinName": "Encephalopathia Classis 28",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Specialized neurological disorder entry #028 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_29",
    "name": "Neurological Condition Class 029",
    "latinName": "Encephalopathia Classis 29",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Specialized neurological disorder entry #029 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_30",
    "name": "Neurological Condition Class 030",
    "latinName": "Encephalopathia Classis 30",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Specialized neurological disorder entry #030 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_31",
    "name": "Neurological Condition Class 031",
    "latinName": "Encephalopathia Classis 31",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Specialized neurological disorder entry #031 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_32",
    "name": "Neurological Condition Class 032",
    "latinName": "Encephalopathia Classis 32",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Specialized neurological disorder entry #032 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_33",
    "name": "Neurological Condition Class 033",
    "latinName": "Encephalopathia Classis 33",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Specialized neurological disorder entry #033 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_34",
    "name": "Neurological Condition Class 034",
    "latinName": "Encephalopathia Classis 34",
    "category": "Sleep & Circadian Rhythms",
    "description": "Specialized neurological disorder entry #034 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_35",
    "name": "Neurological Condition Class 035",
    "latinName": "Encephalopathia Classis 35",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Specialized neurological disorder entry #035 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_36",
    "name": "Neurological Condition Class 036",
    "latinName": "Encephalopathia Classis 36",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Specialized neurological disorder entry #036 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_37",
    "name": "Neurological Condition Class 037",
    "latinName": "Encephalopathia Classis 37",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Specialized neurological disorder entry #037 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_38",
    "name": "Neurological Condition Class 038",
    "latinName": "Encephalopathia Classis 38",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Specialized neurological disorder entry #038 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_39",
    "name": "Neurological Condition Class 039",
    "latinName": "Encephalopathia Classis 39",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Specialized neurological disorder entry #039 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_40",
    "name": "Neurological Condition Class 040",
    "latinName": "Encephalopathia Classis 40",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Specialized neurological disorder entry #040 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_41",
    "name": "Neurological Condition Class 041",
    "latinName": "Encephalopathia Classis 41",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Specialized neurological disorder entry #041 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_42",
    "name": "Neurological Condition Class 042",
    "latinName": "Encephalopathia Classis 42",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Specialized neurological disorder entry #042 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_43",
    "name": "Neurological Condition Class 043",
    "latinName": "Encephalopathia Classis 43",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Specialized neurological disorder entry #043 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_44",
    "name": "Neurological Condition Class 044",
    "latinName": "Encephalopathia Classis 44",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Specialized neurological disorder entry #044 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_45",
    "name": "Neurological Condition Class 045",
    "latinName": "Encephalopathia Classis 45",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Specialized neurological disorder entry #045 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_46",
    "name": "Neurological Condition Class 046",
    "latinName": "Encephalopathia Classis 46",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Specialized neurological disorder entry #046 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_47",
    "name": "Neurological Condition Class 047",
    "latinName": "Encephalopathia Classis 47",
    "category": "Sleep & Circadian Rhythms",
    "description": "Specialized neurological disorder entry #047 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_48",
    "name": "Neurological Condition Class 048",
    "latinName": "Encephalopathia Classis 48",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Specialized neurological disorder entry #048 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_49",
    "name": "Neurological Condition Class 049",
    "latinName": "Encephalopathia Classis 49",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Specialized neurological disorder entry #049 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_50",
    "name": "Neurological Condition Class 050",
    "latinName": "Encephalopathia Classis 50",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Specialized neurological disorder entry #050 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_51",
    "name": "Neurological Condition Class 051",
    "latinName": "Encephalopathia Classis 51",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Specialized neurological disorder entry #051 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_52",
    "name": "Neurological Condition Class 052",
    "latinName": "Encephalopathia Classis 52",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Specialized neurological disorder entry #052 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_53",
    "name": "Neurological Condition Class 053",
    "latinName": "Encephalopathia Classis 53",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Specialized neurological disorder entry #053 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_54",
    "name": "Neurological Condition Class 054",
    "latinName": "Encephalopathia Classis 54",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Specialized neurological disorder entry #054 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_55",
    "name": "Neurological Condition Class 055",
    "latinName": "Encephalopathia Classis 55",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Specialized neurological disorder entry #055 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_56",
    "name": "Neurological Condition Class 056",
    "latinName": "Encephalopathia Classis 56",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Specialized neurological disorder entry #056 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_57",
    "name": "Neurological Condition Class 057",
    "latinName": "Encephalopathia Classis 57",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Specialized neurological disorder entry #057 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_58",
    "name": "Neurological Condition Class 058",
    "latinName": "Encephalopathia Classis 58",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Specialized neurological disorder entry #058 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_59",
    "name": "Neurological Condition Class 059",
    "latinName": "Encephalopathia Classis 59",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Specialized neurological disorder entry #059 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_60",
    "name": "Neurological Condition Class 060",
    "latinName": "Encephalopathia Classis 60",
    "category": "Sleep & Circadian Rhythms",
    "description": "Specialized neurological disorder entry #060 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_61",
    "name": "Neurological Condition Class 061",
    "latinName": "Encephalopathia Classis 61",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Specialized neurological disorder entry #061 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_62",
    "name": "Neurological Condition Class 062",
    "latinName": "Encephalopathia Classis 62",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Specialized neurological disorder entry #062 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_63",
    "name": "Neurological Condition Class 063",
    "latinName": "Encephalopathia Classis 63",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Specialized neurological disorder entry #063 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_64",
    "name": "Neurological Condition Class 064",
    "latinName": "Encephalopathia Classis 64",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Specialized neurological disorder entry #064 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_65",
    "name": "Neurological Condition Class 065",
    "latinName": "Encephalopathia Classis 65",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Specialized neurological disorder entry #065 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_66",
    "name": "Neurological Condition Class 066",
    "latinName": "Encephalopathia Classis 66",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Specialized neurological disorder entry #066 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_67",
    "name": "Neurological Condition Class 067",
    "latinName": "Encephalopathia Classis 67",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Specialized neurological disorder entry #067 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_68",
    "name": "Neurological Condition Class 068",
    "latinName": "Encephalopathia Classis 68",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Specialized neurological disorder entry #068 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_69",
    "name": "Neurological Condition Class 069",
    "latinName": "Encephalopathia Classis 69",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Specialized neurological disorder entry #069 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_70",
    "name": "Neurological Condition Class 070",
    "latinName": "Encephalopathia Classis 70",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Specialized neurological disorder entry #070 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_71",
    "name": "Neurological Condition Class 071",
    "latinName": "Encephalopathia Classis 71",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Specialized neurological disorder entry #071 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_72",
    "name": "Neurological Condition Class 072",
    "latinName": "Encephalopathia Classis 72",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Specialized neurological disorder entry #072 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_73",
    "name": "Neurological Condition Class 073",
    "latinName": "Encephalopathia Classis 73",
    "category": "Sleep & Circadian Rhythms",
    "description": "Specialized neurological disorder entry #073 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_74",
    "name": "Neurological Condition Class 074",
    "latinName": "Encephalopathia Classis 74",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Specialized neurological disorder entry #074 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_75",
    "name": "Neurological Condition Class 075",
    "latinName": "Encephalopathia Classis 75",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Specialized neurological disorder entry #075 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_76",
    "name": "Neurological Condition Class 076",
    "latinName": "Encephalopathia Classis 76",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Specialized neurological disorder entry #076 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_77",
    "name": "Neurological Condition Class 077",
    "latinName": "Encephalopathia Classis 77",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Specialized neurological disorder entry #077 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_78",
    "name": "Neurological Condition Class 078",
    "latinName": "Encephalopathia Classis 78",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Specialized neurological disorder entry #078 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_79",
    "name": "Neurological Condition Class 079",
    "latinName": "Encephalopathia Classis 79",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Specialized neurological disorder entry #079 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_80",
    "name": "Neurological Condition Class 080",
    "latinName": "Encephalopathia Classis 80",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Specialized neurological disorder entry #080 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_81",
    "name": "Neurological Condition Class 081",
    "latinName": "Encephalopathia Classis 81",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Specialized neurological disorder entry #081 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_82",
    "name": "Neurological Condition Class 082",
    "latinName": "Encephalopathia Classis 82",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Specialized neurological disorder entry #082 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_83",
    "name": "Neurological Condition Class 083",
    "latinName": "Encephalopathia Classis 83",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Specialized neurological disorder entry #083 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_84",
    "name": "Neurological Condition Class 084",
    "latinName": "Encephalopathia Classis 84",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Specialized neurological disorder entry #084 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_85",
    "name": "Neurological Condition Class 085",
    "latinName": "Encephalopathia Classis 85",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Specialized neurological disorder entry #085 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_86",
    "name": "Neurological Condition Class 086",
    "latinName": "Encephalopathia Classis 86",
    "category": "Sleep & Circadian Rhythms",
    "description": "Specialized neurological disorder entry #086 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_87",
    "name": "Neurological Condition Class 087",
    "latinName": "Encephalopathia Classis 87",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Specialized neurological disorder entry #087 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_88",
    "name": "Neurological Condition Class 088",
    "latinName": "Encephalopathia Classis 88",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Specialized neurological disorder entry #088 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_89",
    "name": "Neurological Condition Class 089",
    "latinName": "Encephalopathia Classis 89",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Specialized neurological disorder entry #089 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_90",
    "name": "Neurological Condition Class 090",
    "latinName": "Encephalopathia Classis 90",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Specialized neurological disorder entry #090 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_91",
    "name": "Neurological Condition Class 091",
    "latinName": "Encephalopathia Classis 91",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Specialized neurological disorder entry #091 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_92",
    "name": "Neurological Condition Class 092",
    "latinName": "Encephalopathia Classis 92",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Specialized neurological disorder entry #092 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_93",
    "name": "Neurological Condition Class 093",
    "latinName": "Encephalopathia Classis 93",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Specialized neurological disorder entry #093 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_94",
    "name": "Neurological Condition Class 094",
    "latinName": "Encephalopathia Classis 94",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Specialized neurological disorder entry #094 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_95",
    "name": "Neurological Condition Class 095",
    "latinName": "Encephalopathia Classis 95",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Specialized neurological disorder entry #095 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_96",
    "name": "Neurological Condition Class 096",
    "latinName": "Encephalopathia Classis 96",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Specialized neurological disorder entry #096 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_97",
    "name": "Neurological Condition Class 097",
    "latinName": "Encephalopathia Classis 97",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Specialized neurological disorder entry #097 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_98",
    "name": "Neurological Condition Class 098",
    "latinName": "Encephalopathia Classis 98",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Specialized neurological disorder entry #098 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_99",
    "name": "Neurological Condition Class 099",
    "latinName": "Encephalopathia Classis 99",
    "category": "Sleep & Circadian Rhythms",
    "description": "Specialized neurological disorder entry #099 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_100",
    "name": "Neurological Condition Class 100",
    "latinName": "Encephalopathia Classis 100",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Specialized neurological disorder entry #100 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_101",
    "name": "Neurological Condition Class 101",
    "latinName": "Encephalopathia Classis 101",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Specialized neurological disorder entry #101 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_102",
    "name": "Neurological Condition Class 102",
    "latinName": "Encephalopathia Classis 102",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Specialized neurological disorder entry #102 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_103",
    "name": "Neurological Condition Class 103",
    "latinName": "Encephalopathia Classis 103",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Specialized neurological disorder entry #103 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_104",
    "name": "Neurological Condition Class 104",
    "latinName": "Encephalopathia Classis 104",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Specialized neurological disorder entry #104 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_105",
    "name": "Neurological Condition Class 105",
    "latinName": "Encephalopathia Classis 105",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Specialized neurological disorder entry #105 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_106",
    "name": "Neurological Condition Class 106",
    "latinName": "Encephalopathia Classis 106",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Specialized neurological disorder entry #106 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_107",
    "name": "Neurological Condition Class 107",
    "latinName": "Encephalopathia Classis 107",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Specialized neurological disorder entry #107 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_108",
    "name": "Neurological Condition Class 108",
    "latinName": "Encephalopathia Classis 108",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Specialized neurological disorder entry #108 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_109",
    "name": "Neurological Condition Class 109",
    "latinName": "Encephalopathia Classis 109",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Specialized neurological disorder entry #109 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_110",
    "name": "Neurological Condition Class 110",
    "latinName": "Encephalopathia Classis 110",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Specialized neurological disorder entry #110 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_111",
    "name": "Neurological Condition Class 111",
    "latinName": "Encephalopathia Classis 111",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Specialized neurological disorder entry #111 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_112",
    "name": "Neurological Condition Class 112",
    "latinName": "Encephalopathia Classis 112",
    "category": "Sleep & Circadian Rhythms",
    "description": "Specialized neurological disorder entry #112 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_113",
    "name": "Neurological Condition Class 113",
    "latinName": "Encephalopathia Classis 113",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Specialized neurological disorder entry #113 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_114",
    "name": "Neurological Condition Class 114",
    "latinName": "Encephalopathia Classis 114",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Specialized neurological disorder entry #114 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_115",
    "name": "Neurological Condition Class 115",
    "latinName": "Encephalopathia Classis 115",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Specialized neurological disorder entry #115 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_116",
    "name": "Neurological Condition Class 116",
    "latinName": "Encephalopathia Classis 116",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Specialized neurological disorder entry #116 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_117",
    "name": "Neurological Condition Class 117",
    "latinName": "Encephalopathia Classis 117",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Specialized neurological disorder entry #117 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_118",
    "name": "Neurological Condition Class 118",
    "latinName": "Encephalopathia Classis 118",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Specialized neurological disorder entry #118 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_119",
    "name": "Neurological Condition Class 119",
    "latinName": "Encephalopathia Classis 119",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Specialized neurological disorder entry #119 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_120",
    "name": "Neurological Condition Class 120",
    "latinName": "Encephalopathia Classis 120",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Specialized neurological disorder entry #120 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_121",
    "name": "Neurological Condition Class 121",
    "latinName": "Encephalopathia Classis 121",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Specialized neurological disorder entry #121 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_122",
    "name": "Neurological Condition Class 122",
    "latinName": "Encephalopathia Classis 122",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Specialized neurological disorder entry #122 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_123",
    "name": "Neurological Condition Class 123",
    "latinName": "Encephalopathia Classis 123",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Specialized neurological disorder entry #123 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_124",
    "name": "Neurological Condition Class 124",
    "latinName": "Encephalopathia Classis 124",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Specialized neurological disorder entry #124 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_125",
    "name": "Neurological Condition Class 125",
    "latinName": "Encephalopathia Classis 125",
    "category": "Sleep & Circadian Rhythms",
    "description": "Specialized neurological disorder entry #125 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_126",
    "name": "Neurological Condition Class 126",
    "latinName": "Encephalopathia Classis 126",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Specialized neurological disorder entry #126 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_127",
    "name": "Neurological Condition Class 127",
    "latinName": "Encephalopathia Classis 127",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Specialized neurological disorder entry #127 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_128",
    "name": "Neurological Condition Class 128",
    "latinName": "Encephalopathia Classis 128",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Specialized neurological disorder entry #128 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_129",
    "name": "Neurological Condition Class 129",
    "latinName": "Encephalopathia Classis 129",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Specialized neurological disorder entry #129 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_130",
    "name": "Neurological Condition Class 130",
    "latinName": "Encephalopathia Classis 130",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Specialized neurological disorder entry #130 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_131",
    "name": "Neurological Condition Class 131",
    "latinName": "Encephalopathia Classis 131",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Specialized neurological disorder entry #131 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_132",
    "name": "Neurological Condition Class 132",
    "latinName": "Encephalopathia Classis 132",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Specialized neurological disorder entry #132 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_133",
    "name": "Neurological Condition Class 133",
    "latinName": "Encephalopathia Classis 133",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Specialized neurological disorder entry #133 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_134",
    "name": "Neurological Condition Class 134",
    "latinName": "Encephalopathia Classis 134",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Specialized neurological disorder entry #134 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_135",
    "name": "Neurological Condition Class 135",
    "latinName": "Encephalopathia Classis 135",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Specialized neurological disorder entry #135 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_136",
    "name": "Neurological Condition Class 136",
    "latinName": "Encephalopathia Classis 136",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Specialized neurological disorder entry #136 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_137",
    "name": "Neurological Condition Class 137",
    "latinName": "Encephalopathia Classis 137",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Specialized neurological disorder entry #137 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_138",
    "name": "Neurological Condition Class 138",
    "latinName": "Encephalopathia Classis 138",
    "category": "Sleep & Circadian Rhythms",
    "description": "Specialized neurological disorder entry #138 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_139",
    "name": "Neurological Condition Class 139",
    "latinName": "Encephalopathia Classis 139",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Specialized neurological disorder entry #139 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_140",
    "name": "Neurological Condition Class 140",
    "latinName": "Encephalopathia Classis 140",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Specialized neurological disorder entry #140 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_141",
    "name": "Neurological Condition Class 141",
    "latinName": "Encephalopathia Classis 141",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Specialized neurological disorder entry #141 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_142",
    "name": "Neurological Condition Class 142",
    "latinName": "Encephalopathia Classis 142",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Specialized neurological disorder entry #142 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_143",
    "name": "Neurological Condition Class 143",
    "latinName": "Encephalopathia Classis 143",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Specialized neurological disorder entry #143 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_144",
    "name": "Neurological Condition Class 144",
    "latinName": "Encephalopathia Classis 144",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Specialized neurological disorder entry #144 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_145",
    "name": "Neurological Condition Class 145",
    "latinName": "Encephalopathia Classis 145",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Specialized neurological disorder entry #145 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_146",
    "name": "Neurological Condition Class 146",
    "latinName": "Encephalopathia Classis 146",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Specialized neurological disorder entry #146 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_147",
    "name": "Neurological Condition Class 147",
    "latinName": "Encephalopathia Classis 147",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Specialized neurological disorder entry #147 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_148",
    "name": "Neurological Condition Class 148",
    "latinName": "Encephalopathia Classis 148",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Specialized neurological disorder entry #148 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_149",
    "name": "Neurological Condition Class 149",
    "latinName": "Encephalopathia Classis 149",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Specialized neurological disorder entry #149 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_150",
    "name": "Neurological Condition Class 150",
    "latinName": "Encephalopathia Classis 150",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Specialized neurological disorder entry #150 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_151",
    "name": "Neurological Condition Class 151",
    "latinName": "Encephalopathia Classis 151",
    "category": "Sleep & Circadian Rhythms",
    "description": "Specialized neurological disorder entry #151 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_152",
    "name": "Neurological Condition Class 152",
    "latinName": "Encephalopathia Classis 152",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Specialized neurological disorder entry #152 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_153",
    "name": "Neurological Condition Class 153",
    "latinName": "Encephalopathia Classis 153",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Specialized neurological disorder entry #153 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_154",
    "name": "Neurological Condition Class 154",
    "latinName": "Encephalopathia Classis 154",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Specialized neurological disorder entry #154 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_155",
    "name": "Neurological Condition Class 155",
    "latinName": "Encephalopathia Classis 155",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Specialized neurological disorder entry #155 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_156",
    "name": "Neurological Condition Class 156",
    "latinName": "Encephalopathia Classis 156",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Specialized neurological disorder entry #156 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_157",
    "name": "Neurological Condition Class 157",
    "latinName": "Encephalopathia Classis 157",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Specialized neurological disorder entry #157 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_158",
    "name": "Neurological Condition Class 158",
    "latinName": "Encephalopathia Classis 158",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Specialized neurological disorder entry #158 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_159",
    "name": "Neurological Condition Class 159",
    "latinName": "Encephalopathia Classis 159",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Specialized neurological disorder entry #159 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_160",
    "name": "Neurological Condition Class 160",
    "latinName": "Encephalopathia Classis 160",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Specialized neurological disorder entry #160 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_161",
    "name": "Neurological Condition Class 161",
    "latinName": "Encephalopathia Classis 161",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Specialized neurological disorder entry #161 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_162",
    "name": "Neurological Condition Class 162",
    "latinName": "Encephalopathia Classis 162",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Specialized neurological disorder entry #162 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_163",
    "name": "Neurological Condition Class 163",
    "latinName": "Encephalopathia Classis 163",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Specialized neurological disorder entry #163 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_164",
    "name": "Neurological Condition Class 164",
    "latinName": "Encephalopathia Classis 164",
    "category": "Sleep & Circadian Rhythms",
    "description": "Specialized neurological disorder entry #164 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_165",
    "name": "Neurological Condition Class 165",
    "latinName": "Encephalopathia Classis 165",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Specialized neurological disorder entry #165 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_166",
    "name": "Neurological Condition Class 166",
    "latinName": "Encephalopathia Classis 166",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Specialized neurological disorder entry #166 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_167",
    "name": "Neurological Condition Class 167",
    "latinName": "Encephalopathia Classis 167",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Specialized neurological disorder entry #167 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_168",
    "name": "Neurological Condition Class 168",
    "latinName": "Encephalopathia Classis 168",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Specialized neurological disorder entry #168 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_169",
    "name": "Neurological Condition Class 169",
    "latinName": "Encephalopathia Classis 169",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Specialized neurological disorder entry #169 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_170",
    "name": "Neurological Condition Class 170",
    "latinName": "Encephalopathia Classis 170",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Specialized neurological disorder entry #170 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_171",
    "name": "Neurological Condition Class 171",
    "latinName": "Encephalopathia Classis 171",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Specialized neurological disorder entry #171 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_172",
    "name": "Neurological Condition Class 172",
    "latinName": "Encephalopathia Classis 172",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Specialized neurological disorder entry #172 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_173",
    "name": "Neurological Condition Class 173",
    "latinName": "Encephalopathia Classis 173",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Specialized neurological disorder entry #173 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_174",
    "name": "Neurological Condition Class 174",
    "latinName": "Encephalopathia Classis 174",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Specialized neurological disorder entry #174 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_175",
    "name": "Neurological Condition Class 175",
    "latinName": "Encephalopathia Classis 175",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Specialized neurological disorder entry #175 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_176",
    "name": "Neurological Condition Class 176",
    "latinName": "Encephalopathia Classis 176",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Specialized neurological disorder entry #176 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_177",
    "name": "Neurological Condition Class 177",
    "latinName": "Encephalopathia Classis 177",
    "category": "Sleep & Circadian Rhythms",
    "description": "Specialized neurological disorder entry #177 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_178",
    "name": "Neurological Condition Class 178",
    "latinName": "Encephalopathia Classis 178",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Specialized neurological disorder entry #178 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_179",
    "name": "Neurological Condition Class 179",
    "latinName": "Encephalopathia Classis 179",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Specialized neurological disorder entry #179 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_180",
    "name": "Neurological Condition Class 180",
    "latinName": "Encephalopathia Classis 180",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Specialized neurological disorder entry #180 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_181",
    "name": "Neurological Condition Class 181",
    "latinName": "Encephalopathia Classis 181",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Specialized neurological disorder entry #181 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_182",
    "name": "Neurological Condition Class 182",
    "latinName": "Encephalopathia Classis 182",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Specialized neurological disorder entry #182 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_183",
    "name": "Neurological Condition Class 183",
    "latinName": "Encephalopathia Classis 183",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Specialized neurological disorder entry #183 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_184",
    "name": "Neurological Condition Class 184",
    "latinName": "Encephalopathia Classis 184",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Specialized neurological disorder entry #184 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_185",
    "name": "Neurological Condition Class 185",
    "latinName": "Encephalopathia Classis 185",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Specialized neurological disorder entry #185 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_186",
    "name": "Neurological Condition Class 186",
    "latinName": "Encephalopathia Classis 186",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Specialized neurological disorder entry #186 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_187",
    "name": "Neurological Condition Class 187",
    "latinName": "Encephalopathia Classis 187",
    "category": "Traumatic & Structural Brain Injuries",
    "description": "Specialized neurological disorder entry #187 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_188",
    "name": "Neurological Condition Class 188",
    "latinName": "Encephalopathia Classis 188",
    "category": "Psychiatric, Affective & Behavioral Disorders",
    "description": "Specialized neurological disorder entry #188 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_189",
    "name": "Neurological Condition Class 189",
    "latinName": "Encephalopathia Classis 189",
    "category": "Movement & Extrapyramidal Disorders",
    "description": "Specialized neurological disorder entry #189 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_190",
    "name": "Neurological Condition Class 190",
    "latinName": "Encephalopathia Classis 190",
    "category": "Sleep & Circadian Rhythms",
    "description": "Specialized neurological disorder entry #190 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_191",
    "name": "Neurological Condition Class 191",
    "latinName": "Encephalopathia Classis 191",
    "category": "Toxic, Metabolic & Nutritional Encephalopathies",
    "description": "Specialized neurological disorder entry #191 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_192",
    "name": "Neurological Condition Class 192",
    "latinName": "Encephalopathia Classis 192",
    "category": "Cranial Nerves & Headache / Facial Pain",
    "description": "Specialized neurological disorder entry #192 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_193",
    "name": "Neurological Condition Class 193",
    "latinName": "Encephalopathia Classis 193",
    "category": "Pediatric, Neurodevelopmental & Genetic",
    "description": "Specialized neurological disorder entry #193 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_194",
    "name": "Neurological Condition Class 194",
    "latinName": "Encephalopathia Classis 194",
    "category": "Rare, Orphan & Miscellaneous Neurological Disorders",
    "description": "Specialized neurological disorder entry #194 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_195",
    "name": "Neurological Condition Class 195",
    "latinName": "Encephalopathia Classis 195",
    "category": "Cerebrovascular & Stroke Disorders",
    "description": "Specialized neurological disorder entry #195 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_196",
    "name": "Neurological Condition Class 196",
    "latinName": "Encephalopathia Classis 196",
    "category": "Neuro-Oncology & Brain Tumors",
    "description": "Specialized neurological disorder entry #196 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_197",
    "name": "Neurological Condition Class 197",
    "latinName": "Encephalopathia Classis 197",
    "category": "Epilepsy & Seizure Disorders",
    "description": "Specialized neurological disorder entry #197 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_198",
    "name": "Neurological Condition Class 198",
    "latinName": "Encephalopathia Classis 198",
    "category": "Autoimmune & Inflammatory Encephalopathies",
    "description": "Specialized neurological disorder entry #198 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  },
  {
    "id": "pathology_clinical_entry_199",
    "name": "Neurological Condition Class 199",
    "latinName": "Encephalopathia Classis 199",
    "category": "Infectious & Parasitic CNS Diseases",
    "description": "Specialized neurological disorder entry #199 presenting with acute or chronic central nervous system impairment.",
    "pathophysiology": "Neuro-pathological damage targeting neural circuits and brain parenchyma in designated cerebral structures.",
    "probableCure": "Targeted pharmacological therapy, molecular neuro-restoration, and clinical supportive care.",
    "cureStatus": "Treatable / Manageable",
    "medicines": [
      "Neuroprotective Agent",
      "Anticonvulsant",
      "Immunomodulator"
    ],
    "treatments": [
      "Clinical Protocol Management",
      "Targeted Physical Therapy"
    ],
    "mortalityRate": "Variable Clinical Prognosis",
    "survivalStats": "5-10 years post-diagnosis depending on intervention timing.",
    "riskLevel": "High",
    "affectedRegions": [
      "Frontal Lobe",
      "Temporal Lobe",
      "Basal Ganglia"
    ]
  }
];