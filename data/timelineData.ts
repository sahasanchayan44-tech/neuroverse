export interface EvolutionaryEpoch {
  id: string;
  era: string;
  timeframe: string;
  title: string;
  category: 'Evolutionary History' | 'Human Lifespan Age Group';
  ageGroupRange?: string;
  keyMilestones: string[];
  brainVolumeOrNeurons: string;
  targetRegions: string[];
  description: string;
  scientificImpact: string;
}

export const EVOLUTIONARY_EPOCHS_DATABASE: EvolutionaryEpoch[] = [
  // ==========================================
  // TRACK 1: EVOLUTIONARY HISTORY (PHYLOGENY)
  // ==========================================
  {
    id: 'evo_cnidaria',
    era: 'Pre-Cambrian Era',
    timeframe: '550 - 500 Million Years Ago',
    title: '1. Diffuse Nerve Net & Primitive Reflexes',
    category: 'Evolutionary History',
    keyMilestones: [
      'First appearance of specialized neural tissue',
      'No central brain or cephalization',
      'Bidirectional unmyelinated nerve grid for swimming and feeding reflexes'
    ],
    brainVolumeOrNeurons: '~10,000 diffuse neurons',
    targetRegions: ['Cerebral Cortex', 'Sensory Neurons'],
    description: 'Ancestral cnidarians (jellyfish and hydra) developed the first interconnected nerve nets capable of electrical action potentials without a centralized brain.',
    scientificImpact: 'Established fundamental sodium/potassium voltage-gated ion channels used in all modern human neurons.'
  },
  {
    id: 'evo_bilateria',
    era: 'Cambrian Explosion',
    timeframe: '500 - 450 Million Years Ago',
    title: '2. Cephalization & Bilateral Cerebral Ganglia',
    category: 'Evolutionary History',
    keyMilestones: [
      'Emergence of bilateral symmetry (anterior vs posterior orientation)',
      'Concentration of sensory organs at the head (cephalization)',
      'Paired cerebral ganglia functioning as a primitive brain'
    ],
    brainVolumeOrNeurons: '~50,000 paired ganglionic neurons',
    targetRegions: ['Thalamus', 'Basal Ganglia'],
    description: 'Primitive bilaterians (flatworms and ancestral chordates) evolved head-centric neural clusters, enabling directed locomotion towards sensory cues.',
    scientificImpact: 'Laid the structural foundation for bilateral cerebral hemispheres and nerve cord transmission.'
  },
  {
    id: 'evo_agnatha',
    era: 'Ordovician / Silurian Period',
    timeframe: '450 - 400 Million Years Ago',
    title: '3. Triune Vertebrate Brainstem Emergence',
    category: 'Evolutionary History',
    keyMilestones: [
      'Differentiation of 3 primary brain vesicles: Prosencephalon, Mesencephalon, Rhombencephalon',
      'Emergence of spinal cord myelin and blood-brain barrier precursors',
      'Basic autonomic cardiorespiratory centers'
    ],
    brainVolumeOrNeurons: '~1 - 5 Million neurons (0.1 cm³)',
    targetRegions: ['Brainstem', 'Pons', 'Medulla Oblongata', 'Hypothalamus'],
    description: 'Early jawless and jawed fish developed the classic tripartite vertebrate brain structure, controlling autonomic survival functions.',
    scientificImpact: 'Formed the human reticular activating system, medulla, and basal vegetative survival centers.'
  },
  {
    id: 'evo_teleost',
    era: 'Devonian Period',
    timeframe: '400 - 350 Million Years Ago',
    title: '4. Cerebellar Balance & Optic Tectum Dominance',
    category: 'Evolutionary History',
    keyMilestones: [
      'Enlargement of Cerebellum for high-speed 3D aquatic navigation',
      'Dominant Optic Tectum (ancestor of Superior Colliculus) for visual tracking',
      'Olfactory bulb processing expansion'
    ],
    brainVolumeOrNeurons: '~10 - 50 Million neurons (0.5 cm³)',
    targetRegions: ['Cerebellum', 'Superior Colliculus', 'Olfactory Bulb'],
    description: 'Devonian jawed fishes and early sarcopterygian land-transition species evolved a prominent cerebellum for motor precision and 3D orientation.',
    scientificImpact: 'Origin of human cerebellar Purkinje cell circuits and subcortical visual tracking.'
  },
  {
    id: 'evo_amphibian',
    era: 'Carboniferous / Permian Period',
    timeframe: '350 - 300 Million Years Ago',
    title: '5. Limbic Archicortex & Subcortical Basal Ganglia',
    category: 'Evolutionary History',
    keyMilestones: [
      'Emergence of Archicortex (primitive 3-layered hippocampus)',
      'Development of striatal GO/NO-GO motor loops in basal ganglia',
      'Integration of dual aquatic/terrestrial sensory pathways'
    ],
    brainVolumeOrNeurons: '~100 Million neurons (1 - 2 cm³)',
    targetRegions: ['Hippocampus', 'Basal Ganglia', 'Amygdala'],
    description: 'Early tetrapods and reptiles developed primitive limbic structures for spatial memory, emotional valence, and basal ganglia motor selection.',
    scientificImpact: 'Formed the human trisynaptic hippocampal circuit and amygdala threat processing.'
  },
  {
    id: 'evo_mammal',
    era: 'Mesozoic / Jurassic Period',
    timeframe: '220 - 150 Million Years Ago',
    title: '6. 6-Layered Neocortex & Corpus Callosum Precursor',
    category: 'Evolutionary History',
    keyMilestones: [
      'Origin of the 6-layered neocortex (isocortex)',
      'Enlargement of auditory and olfactory brain regions for nocturnal adaptation',
      'Evolution of endothermy requiring high metabolic brain blood supply (CBF)'
    ],
    brainVolumeOrNeurons: '~1 - 5 Billion neurons (5 - 15 cm³)',
    targetRegions: ['Cerebral Cortex', 'Corpus Callosum', 'Somatosensory Cortex'],
    description: 'Early nocturnal mammals evolved the unique 6-layered neocortex, granting unprecedented sensory processing and behavioural plasticity.',
    scientificImpact: 'Created the human neocortical laminar architecture (Layers I-VI).'
  },
  {
    id: 'evo_primate',
    era: 'Cenozoic / Paleogene Period',
    timeframe: '65 - 35 Million Years Ago',
    title: '7. Foveal Vision & Frontoparietal Grasp Networks',
    category: 'Evolutionary History',
    keyMilestones: [
      'Massive expansion of Primary Visual Cortex (V1-V5) and stereoscopic vision',
      'Evolution of frontoparietal reach-to-grasp motor control',
      'Early prefrontal cortex enlargement for social group navigation'
    ],
    brainVolumeOrNeurons: '~10 - 30 Billion neurons (50 - 150 cm³)',
    targetRegions: ['Occipital Lobe', 'Parietal Lobe', 'Prefrontal Cortex'],
    description: 'Arboreal primates expanded visual and parietal spatial mapping to navigate complex 3D canopy environments and control opposable thumbs.',
    scientificImpact: 'Established human visual cortical dominance and fine manual dexterity networks.'
  },
  {
    id: 'evo_hominid',
    era: 'Pliocene / Early Pleistocene',
    timeframe: '7 - 2 Million Years Ago',
    title: '8. Pre-Motor Broca Area & Tool-Use Encephalization',
    category: 'Evolutionary History',
    keyMilestones: [
      'Brain volume doubling from Australopithecus (~450cm³) to Homo erectus (~900cm³)',
      'Expansion of Broca\'s area for complex gestural and motor imitation',
      'Mirror neuron network amplification for social learning'
    ],
    brainVolumeOrNeurons: '~40 - 60 Billion neurons (450 - 1000 cm³)',
    targetRegions: ['Broca\'s Area', 'Pre-Motor Cortex', 'Temporal Lobe'],
    description: 'Early hominids underwent accelerated brain encephalization driven by bipedalism, dietary shift to cooked meat, and stone tool manufacturing.',
    scientificImpact: 'Paved the way for human motor speech production and technology creation.'
  },
  {
    id: 'evo_sapiens',
    era: 'Late Pleistocene to Modern Era',
    timeframe: '300,000 Years Ago - Present',
    title: '9. Granular Prefrontal & Default Mode Encephalization',
    category: 'Evolutionary History',
    keyMilestones: [
      'Peak brain volume (~1,350 to 1,400 cm³) with globular skull expansion',
      'Massive enlargement of Granular Prefrontal Cortex (Dorsolateral PFC)',
      'Development of Wernicke-Broca linguistic loops and Default Mode Network (DMN)'
    ],
    brainVolumeOrNeurons: '86.1 Billion Neurons (1,350 - 1,400 cm³)',
    targetRegions: ['Prefrontal Cortex', 'Wernicke\'s Area', 'Broca\'s Area', 'Cerebral Cortex'],
    description: 'Homo sapiens evolved modern prefrontal connectivity, supporting abstract symbolic thought, complex language, self-awareness, and culture.',
    scientificImpact: 'The modern human brain containing 86.1 billion neurons and 150 trillion synapses.'
  },

  // ==========================================
  // TRACK 2: HUMAN LIFESPAN AGE GROUPS (ONTOGENY)
  // ==========================================
  {
    id: 'age_embryonic',
    era: 'Prenatal Development',
    timeframe: 'Conception to Week 8',
    title: 'Stage 1: Embryonic Neural Tube Formation',
    category: 'Human Lifespan Age Group',
    ageGroupRange: 'Embryo (Weeks 1 - 8)',
    keyMilestones: [
      'Week 3: Neural plate invagination to form the Neural Tube',
      'Week 4: Neural tube closure (Day 26 anterior, Day 28 posterior neuropore)',
      'Week 5: Primary brain vesicles form (Prosencephalon, Mesencephalon, Rhombencephalon)',
      'Week 7: Secondary vesicles form (Telencephalon, Diencephalon, Metencephalon, Myelencephalon)'
    ],
    brainVolumeOrNeurons: '<1 cm³ (~250,000 new neurons/minute)',
    targetRegions: ['Neural Tube', 'Brainstem', 'Forebrain Vesicle'],
    description: 'The foundation of the central nervous system forms from the ectodermal neural plate, closing to form the ventricles and brain vesicles.',
    scientificImpact: 'Disruption during this phase causes neural tube defects such as Anencephaly or Spina Bifida.'
  },
  {
    id: 'age_fetal',
    era: 'Prenatal Development',
    timeframe: 'Week 9 to Birth (Week 38-40)',
    title: 'Stage 2: Fetal Neurogenesis & Cortical Gyrification',
    category: 'Human Lifespan Age Group',
    ageGroupRange: 'Fetus (Weeks 9 - 40)',
    keyMilestones: [
      'Peak Neurogenesis: 250,000 neurons generated per minute in Ventricular Zone',
      'Radial Glial Guided Migration: Neurons climb radial glia to form 6 cortical layers (inside-out)',
      'Month 6-7: Gyrification begins (folding of Sylvian fissure, central sulcus, and gyri)',
      'Month 8: Auditory and tactile responsiveness to external intra-uterine sound'
    ],
    brainVolumeOrNeurons: '~350 - 400 cm³ at birth (~100 Billion neurons)',
    targetRegions: ['Cerebral Cortex', 'Ventricular Zone', 'Corpus Callosum'],
    description: 'Massive neuron production, cortical lamination, and brain surface folding create the anatomical blueprint of the newborn brain.',
    scientificImpact: 'Establishes all 86 billion neurons that will persist throughout human life.'
  },
  {
    id: 'age_infancy',
    era: 'Postnatal Early Life',
    timeframe: 'Birth to 12 Months',
    title: 'Stage 3: Neonatal Synaptic Blooming & Myelination',
    category: 'Human Lifespan Age Group',
    ageGroupRange: 'Infant (0 - 12 Months)',
    keyMilestones: [
      'Explosive Synaptogenesis: Up to 1 million new neural connections formed per second',
      'Brain Volume Doubling: Grows from 350g at birth to ~750g by 12 months (70% adult volume)',
      'Myelination Cascade: Motor and visual tracts myelinated from caudal-to-rostral',
      'Sensory-motor integration: Grasp reflex, head control, crawling, and first word production'
    ],
    brainVolumeOrNeurons: '~750 cm³ (~70% of adult size)',
    targetRegions: ['Motor Cortex', 'Visual Cortex', 'Cerebellum', 'Brainstem'],
    description: 'Infancy is characterized by hyper-synaptogenesis and sensory-motor tract myelination, allowing rapid motor and perceptual milestones.',
    scientificImpact: 'Critical window for visual deprivation recovery and attachment bonding.'
  },
  {
    id: 'age_toddler',
    era: 'Early Childhood',
    timeframe: 'Ages 1 to 5 Years',
    title: 'Stage 4: Toddler Language Explosion & Memory Circuits',
    category: 'Human Lifespan Age Group',
    ageGroupRange: 'Toddler & Preschool (1 - 5 Yrs)',
    keyMilestones: [
      'Peak Synaptic Density: Synaptic density in visual cortex reaches 150% of adult levels',
      'Broca & Wernicke Acceleration: Vocabulary expands from 50 words at 18 months to >2,000 words at age 5',
      'Hippocampal Maturation: Explicit memory formation replaces infantile amnesia around age 3-4',
      'Brain Volume Reaches 90% of adult size by age 5'
    ],
    brainVolumeOrNeurons: '~1,100 - 1,200 cm³ (90% of adult volume)',
    targetRegions: ['Hippocampus', 'Broca\'s Area', 'Wernicke\'s Area', 'Parietal Lobe'],
    description: 'Rapid growth in linguistic networks and hippocampal memory circuitry enables complex language comprehension, self-identity, and imagination.',
    scientificImpact: 'Peak vulnerability and plasticity period for autism, speech disorders, and environmental enrichment.'
  },
  {
    id: 'age_childhood',
    era: 'Middle Childhood',
    timeframe: 'Ages 6 to 11 Years',
    title: 'Stage 5: Middle Childhood Pruning & Executive Control',
    category: 'Human Lifespan Age Group',
    ageGroupRange: 'Childhood (6 - 11 Yrs)',
    keyMilestones: [
      'Synaptic Pruning Initiated: Unused sensory and motor synapses pruned for network efficiency',
      'Frontoparietal Network Integration: Improvement in sustained attention, working memory, and rule learning',
      'Corpus Callosum Thickening: High-speed interhemispheric communication for bilateral coordination',
      'Fine Motor & Academic Mastery: Reading, writing, and mathematical reasoning circuitry consolidation'
    ],
    brainVolumeOrNeurons: '~1,300 cm³ (Near adult brain mass)',
    targetRegions: ['Prefrontal Cortex', 'Corpus Callosum', 'Parietal Lobe', 'Basal Ganglia'],
    description: 'Brain refinement shifts from raw growth to synaptic pruning and white matter tract strengthening, improving executive focus and academic learning.',
    scientificImpact: 'Key diagnostic window for ADHD, learning disabilities, and dyslexia.'
  },
  {
    id: 'age_adolescence',
    era: 'Adolescence & Young Adult',
    timeframe: 'Ages 12 to 24 Years',
    title: 'Stage 6: Adolescent Prefrontal Pruning & Remodeling',
    category: 'Human Lifespan Age Group',
    ageGroupRange: 'Adolescent (12 - 24 Yrs)',
    keyMilestones: [
      'Dual-Systems Model: Early limbic hyper-reactivity (amygdala) precedes full prefrontal maturation',
      'Massive Prefrontal Synaptic Pruning: Loss of 1-2% cortical grey matter per year in frontal lobes',
      'High-Speed Myelination: Prefrontal-subcortical white matter tracts myelinated until mid-20s',
      'Executive Risk-Reward Calibration: Impulse control, risk evaluation, and abstract moral reasoning fully mature around age 25'
    ],
    brainVolumeOrNeurons: '~1,350 cm³ (Peak cortical white matter density)',
    targetRegions: ['Prefrontal Cortex', 'Amygdala', 'Nucleus Accumbens', 'Cerebral Cortex'],
    description: 'Adolescence involves major prefrontal structural rewiring. The emotional limbic system matures earlier than prefrontal executive control, explaining risk-taking behavior.',
    scientificImpact: 'Peak onset window for schizophrenia, bipolar disorder, major depression, and addiction.'
  },
  {
    id: 'age_adult_peak',
    era: 'Adulthood',
    timeframe: 'Ages 25 to 45 Years',
    title: 'Stage 7: Peak Adult Cognitive Architecture',
    category: 'Human Lifespan Age Group',
    ageGroupRange: 'Adult Peak (25 - 45 Yrs)',
    keyMilestones: [
      'Full Prefrontal Cortical Maturity: Optimal balance between executive control and emotional processing',
      'Peak White Matter Volume: Maximum structural myelination and conduction velocity across corpus callosum and arcuate fasciculus',
      'Optimal Neuro-Metabolic Efficiency: Glucose and oxygen consumption (CMRO2) at steady state',
      'Adult Neurogenesis: Continuous generation of dentate gyrus granule cells in the hippocampus'
    ],
    brainVolumeOrNeurons: '1,350 - 1,400 cm³ (86.1 Billion Neurons)',
    targetRegions: ['Prefrontal Cortex', 'Hippocampus', 'Corpus Callosum', 'Cerebral Cortex'],
    description: 'The human brain achieves its anatomical and functional peak with fully myelinated frontostriatal networks and steady neuro-metabolic efficiency.',
    scientificImpact: 'Gold-standard baseline for human biophysical parameters and cognitive benchmark tests.'
  },
  {
    id: 'age_middle_adulthood',
    era: 'Middle Adulthood',
    timeframe: 'Ages 46 to 65 Years',
    title: 'Stage 8: Middle Adulthood Compensatory Reallocation',
    category: 'Human Lifespan Age Group',
    ageGroupRange: 'Middle Adult (46 - 65 Yrs)',
    keyMilestones: [
      'Gradual Grey Matter Volume Shift: Subtle annual cortical volume reduction (~0.2% per year)',
      'HAROLD Model Activation: Hemispheric Asymmetry Reduction in Older Adults (bilateral prefrontal engagement to maintain cognitive performance)',
      'White Matter Micro-integrity decline: Slow onset of subtle leukoaraiosis or small vessel changes',
      'Peak Crystallized Intelligence: Cumulative knowledge, vocabulary, and complex decision-making remain high'
    ],
    brainVolumeOrNeurons: '~1,300 - 1,350 cm³',
    targetRegions: ['Prefrontal Cortex', 'Subcortical White Matter', 'Hippocampus'],
    description: 'Middle adulthood shows subtle structural shifts, but the brain actively recruits bilateral neural networks (cognitive reserve) to preserve cognitive output.',
    scientificImpact: 'Critical window for vascular risk factor control to prevent mid-life vascular dementia.'
  },
  {
    id: 'age_senescence',
    era: 'Late Adulthood & Senescence',
    timeframe: 'Ages 66+ Years',
    title: 'Stage 9: Late Adulthood Cognitive Reserve & Aging',
    category: 'Human Lifespan Age Group',
    ageGroupRange: 'Senior / Senescence (66+ Yrs)',
    keyMilestones: [
      'Accelerated Cortical Thinning: ~0.5% annual brain volume reduction, prominent in prefrontal and temporal lobes',
      'Reduced Cerebral Blood Flow (CBF): Decline from 54 mL/100g/min down to ~40 mL/100g/min',
      'Microglial Priming: Age-related low-grade neuroinflammation (inflammaging)',
      'Cognitive Reserve Reliance: Highly educated and active individuals retain superior memory function despite structural atrophy'
    ],
    brainVolumeOrNeurons: '~1,200 - 1,280 cm³ (~80-85 Billion Neurons)',
    targetRegions: ['Prefrontal Cortex', 'Hippocampus', 'Temporal Lobe', 'Cerebral Cortex'],
    description: 'Healthy brain aging involves modest structural volume loss and reduced blood flow, but high cognitive reserve and physical activity preserve functional independence.',
    scientificImpact: 'Differentiates healthy physiological brain aging from neurodegenerative pathologies like Alzheimer\'s.'
  }
];
