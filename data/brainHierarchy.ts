export interface BrainHierarchyNode {
  id: string;
  name: string;
  latinName?: string;
  code?: string;
  description?: string;
  functionSummary?: string;
  neurotransmitters?: string[];
  connections?: string[];
  clinicalNotes?: string;
  targetStructureId?: string;
  children?: BrainHierarchyNode[];
}

export const COMPLETE_BRAIN_HIERARCHY: BrainHierarchyNode[] = [
  {
    id: 'sec-1-cerebrum',
    name: '1. Cerebrum (≈85% of Brain)',
    description: 'Largest part of the human brain controlling voluntary actions, thought, memory, and high-level sensory processing.',
    targetStructureId: 'frontal_lobe',
    children: [
      {
        id: 'cerebrum-cortex',
        name: 'Cerebral Cortex (Gray Matter)',
        targetStructureId: 'frontal_lobe',
        children: [
          { id: 'frontal_lobe', name: 'Frontal Lobe', targetStructureId: 'frontal_lobe' },
          { id: 'parietal_lobe', name: 'Parietal Lobe', targetStructureId: 'parietal_lobe' },
          { id: 'temporal_lobe', name: 'Temporal Lobe', targetStructureId: 'temporal_lobe' },
          { id: 'occipital_lobe', name: 'Occipital Lobe', targetStructureId: 'occipital_lobe' },
          { id: 'insular_cortex', name: 'Insular Cortex (Insula)', targetStructureId: 'frontal_lobe' },
          { id: 'limbic_cortex', name: 'Limbic Cortex', targetStructureId: 'hippocampus' }
        ]
      },
      {
        id: 'cerebrum-white-matter',
        name: 'White Matter Conduits',
        targetStructureId: 'corpus_callosum',
        children: [
          { id: 'corpus_callosum', name: 'Corpus Callosum', targetStructureId: 'corpus_callosum' },
          { id: 'internal_capsule', name: 'Internal Capsule', targetStructureId: 'corpus_callosum' },
          { id: 'external_capsule', name: 'External Capsule', targetStructureId: 'corpus_callosum' },
          { id: 'extreme_capsule', name: 'Extreme Capsule', targetStructureId: 'corpus_callosum' },
          { id: 'corona_radiata', name: 'Corona Radiata', targetStructureId: 'corpus_callosum' },
          { id: 'slf', name: 'Superior Longitudinal Fasciculus', targetStructureId: 'corpus_callosum' },
          { id: 'ilf', name: 'Inferior Longitudinal Fasciculus', targetStructureId: 'corpus_callosum' },
          { id: 'uncinate_fasciculus', name: 'Uncinate Fasciculus', targetStructureId: 'corpus_callosum' },
          { id: 'cingulum_bundle', name: 'Cingulum Bundle', targetStructureId: 'corpus_callosum' },
          { id: 'arcuate_fasciculus', name: 'Arcuate Fasciculus', targetStructureId: 'corpus_callosum' }
        ]
      },
      {
        id: 'basal_ganglia_section',
        name: 'Basal Ganglia Complex',
        targetStructureId: 'basal_ganglia',
        children: [
          { id: 'caudate_nucleus', name: 'Caudate Nucleus', targetStructureId: 'basal_ganglia' },
          { id: 'putamen', name: 'Putamen', targetStructureId: 'basal_ganglia' },
          {
            id: 'globus_pallidus',
            name: 'Globus Pallidus',
            targetStructureId: 'basal_ganglia',
            children: [
              { id: 'gpe', name: 'External Segment (GPe)', targetStructureId: 'basal_ganglia' },
              { id: 'gpi', name: 'Internal Segment (GPi)', targetStructureId: 'basal_ganglia' }
            ]
          },
          { id: 'nucleus_accumbens', name: 'Nucleus Accumbens', targetStructureId: 'basal_ganglia' },
          { id: 'subthalamic_nucleus', name: 'Subthalamic Nucleus', targetStructureId: 'basal_ganglia' },
          {
            id: 'substantia_nigra',
            name: 'Substantia Nigra',
            targetStructureId: 'basal_ganglia',
            children: [
              { id: 'snc', name: 'Pars Compacta (SNc)', targetStructureId: 'basal_ganglia' },
              { id: 'snr', name: 'Pars Reticulata (SNr)', targetStructureId: 'basal_ganglia' }
            ]
          }
        ]
      },
      {
        id: 'limbic_system_section',
        name: 'Limbic System & Emotional Circuit',
        targetStructureId: 'hippocampus',
        children: [
          {
            id: 'hippocampus',
            name: 'Hippocampus',
            targetStructureId: 'hippocampus',
            children: [
              { id: 'dentate_gyrus', name: 'Dentate Gyrus', targetStructureId: 'hippocampus' },
              { id: 'ca1', name: 'Cornu Ammonis 1 (CA1)', targetStructureId: 'hippocampus' },
              { id: 'ca2', name: 'Cornu Ammonis 2 (CA2)', targetStructureId: 'hippocampus' },
              { id: 'ca3', name: 'Cornu Ammonis 3 (CA3)', targetStructureId: 'hippocampus' },
              { id: 'ca4', name: 'Cornu Ammonis 4 (CA4)', targetStructureId: 'hippocampus' },
              { id: 'subiculum', name: 'Subiculum', targetStructureId: 'hippocampus' }
            ]
          },
          {
            id: 'amygdala',
            name: 'Amygdala',
            targetStructureId: 'amygdala',
            children: [
              { id: 'basolateral_complex', name: 'Basolateral Complex', targetStructureId: 'amygdala' },
              { id: 'central_nucleus', name: 'Central Nucleus', targetStructureId: 'amygdala' },
              { id: 'cortical_nucleus', name: 'Cortical Nucleus', targetStructureId: 'amygdala' },
              { id: 'medial_nucleus', name: 'Medial Nucleus', targetStructureId: 'amygdala' }
            ]
          },
          { id: 'mammillary_bodies', name: 'Mammillary Bodies', targetStructureId: 'hypothalamus' },
          { id: 'septal_nuclei', name: 'Septal Nuclei', targetStructureId: 'hippocampus' },
          { id: 'fornix', name: 'Fornix Pathway', targetStructureId: 'hippocampus' },
          { id: 'cingulate_gyrus', name: 'Cingulate Gyrus', targetStructureId: 'frontal_lobe' },
          { id: 'parahippocampal_gyrus', name: 'Parahippocampal Gyrus', targetStructureId: 'hippocampus' },
          { id: 'entorhinal_cortex', name: 'Entorhinal Cortex', targetStructureId: 'hippocampus' }
        ]
      },
      {
        id: 'ventricles_section',
        name: 'Ventricular System',
        targetStructureId: 'ventricles',
        children: [
          { id: 'left_ventricle', name: 'Left Lateral Ventricle', targetStructureId: 'ventricles' },
          { id: 'right_ventricle', name: 'Right Lateral Ventricle', targetStructureId: 'ventricles' },
          { id: 'third_ventricle', name: 'Third Ventricle', targetStructureId: 'ventricles' },
          { id: 'cerebral_aqueduct', name: 'Cerebral Aqueduct', targetStructureId: 'ventricles' },
          { id: 'fourth_ventricle', name: 'Fourth Ventricle', targetStructureId: 'ventricles' }
        ]
      }
    ]
  },
  {
    id: 'sec-2-diencephalon',
    name: '2. Diencephalon',
    description: 'Central relay station linking cerebrum with nervous system.',
    targetStructureId: 'thalamus',
    children: [
      {
        id: 'thalamus',
        name: 'Thalamus',
        targetStructureId: 'thalamus',
        children: [
          { id: 'anterior_nucleus', name: 'Anterior Nucleus', targetStructureId: 'thalamus' },
          { id: 'mediodorsal_nucleus', name: 'Mediodorsal Nucleus', targetStructureId: 'thalamus' },
          { id: 'ventral_anterior', name: 'Ventral Anterior (VA)', targetStructureId: 'thalamus' },
          { id: 'ventral_lateral', name: 'Ventral Lateral (VL)', targetStructureId: 'thalamus' },
          {
            id: 'ventral_posterior',
            name: 'Ventral Posterior Nucleus',
            targetStructureId: 'thalamus',
            children: [
              { id: 'vpl', name: 'Ventral Posterolateral (VPL)', targetStructureId: 'thalamus' },
              { id: 'vpm', name: 'Ventral Posteromedial (VPM)', targetStructureId: 'thalamus' }
            ]
          },
          { id: 'pulvinar', name: 'Pulvinar Nucleus', targetStructureId: 'thalamus' },
          { id: 'lgb', name: 'Lateral Geniculate Body (Visual Relay)', targetStructureId: 'thalamus' },
          { id: 'mgb', name: 'Medial Geniculate Body (Auditory Relay)', targetStructureId: 'thalamus' }
        ]
      },
      {
        id: 'hypothalamus',
        name: 'Hypothalamus',
        targetStructureId: 'hypothalamus',
        children: [
          { id: 'supraoptic_nucleus', name: 'Supraoptic Nucleus', targetStructureId: 'hypothalamus' },
          { id: 'paraventricular_nucleus', name: 'Paraventricular Nucleus', targetStructureId: 'hypothalamus' },
          { id: 'arcuate_nucleus', name: 'Arcuate Nucleus', targetStructureId: 'hypothalamus' },
          { id: 'ventromedial_nucleus', name: 'Ventromedial Nucleus', targetStructureId: 'hypothalamus' },
          { id: 'dorsomedial_nucleus', name: 'Dorsomedial Nucleus', targetStructureId: 'hypothalamus' },
          { id: 'lateral_hypothalamus', name: 'Lateral Hypothalamus', targetStructureId: 'hypothalamus' },
          { id: 'suprachiasmatic_nucleus', name: 'Suprachiasmatic Nucleus (Circadian Master Clock)', targetStructureId: 'hypothalamus' },
          { id: 'hypo_mammillary_bodies', name: 'Mammillary Bodies', targetStructureId: 'hypothalamus' },
          { id: 'tuber_cinereum', name: 'Tuber Cinereum', targetStructureId: 'hypothalamus' }
        ]
      },
      {
        id: 'epithalamus',
        name: 'Epithalamus',
        targetStructureId: 'pineal_gland',
        children: [
          { id: 'pineal_gland', name: 'Pineal Gland', targetStructureId: 'pineal_gland' },
          { id: 'habenula', name: 'Habenula', targetStructureId: 'pineal_gland' },
          { id: 'stria_medullaris', name: 'Stria Medullaris', targetStructureId: 'pineal_gland' }
        ]
      },
      {
        id: 'subthalamus',
        name: 'Subthalamus',
        targetStructureId: 'thalamus',
        children: [
          { id: 'subthalamic_nuc', name: 'Subthalamic Nucleus', targetStructureId: 'thalamus' },
          { id: 'zona_incerta', name: 'Zona Incerta', targetStructureId: 'thalamus' }
        ]
      }
    ]
  },
  {
    id: 'sec-3-brainstem',
    name: '3. Brainstem',
    description: 'Conduit connecting cerebrum and cerebellum with spinal cord; governs vital functions.',
    targetStructureId: 'brain_stem',
    children: [
      {
        id: 'midbrain',
        name: 'Midbrain (Mesencephalon)',
        targetStructureId: 'brain_stem',
        children: [
          {
            id: 'tectum',
            name: 'Tectum',
            targetStructureId: 'brain_stem',
            children: [
              { id: 'superior_colliculus', name: 'Superior Colliculus (Visual Reflexes)', targetStructureId: 'brain_stem' },
              { id: 'inferior_colliculus', name: 'Inferior Colliculus (Auditory Reflexes)', targetStructureId: 'brain_stem' }
            ]
          },
          { id: 'tegmentum', name: 'Tegmentum', targetStructureId: 'brain_stem' },
          { id: 'cerebral_peduncles', name: 'Cerebral Peduncles', targetStructureId: 'brain_stem' },
          { id: 'pag', name: 'Periaqueductal Gray (PAG)', targetStructureId: 'brain_stem' },
          { id: 'red_nucleus', name: 'Red Nucleus', targetStructureId: 'brain_stem' },
          { id: 'midbrain_sn', name: 'Substantia Nigra', targetStructureId: 'brain_stem' },
          { id: 'cn_iii_iv', name: 'Cranial Nerve Nuclei III-IV', targetStructureId: 'brain_stem' }
        ]
      },
      {
        id: 'pons',
        name: 'Pons',
        targetStructureId: 'pons',
        children: [
          { id: 'pontine_nuclei', name: 'Pontine Nuclei', targetStructureId: 'pons' },
          { id: 'reticular_formation_pons', name: 'Reticular Formation', targetStructureId: 'pons' },
          { id: 'locus_coeruleus', name: 'Locus Coeruleus (Norepinephrine Hub)', targetStructureId: 'pons' },
          { id: 'cn_v_viii', name: 'Cranial Nerve Nuclei V-VIII', targetStructureId: 'pons' }
        ]
      },
      {
        id: 'medulla',
        name: 'Medulla Oblongata',
        targetStructureId: 'medulla',
        children: [
          { id: 'medulla_olive', name: 'Inferior Olive', targetStructureId: 'medulla' },
          { id: 'medulla_pyramids', name: 'Corticospinal Pyramids', targetStructureId: 'medulla' },
          { id: 'nucleus_gracilis', name: 'Nucleus Gracilis', targetStructureId: 'medulla' },
          { id: 'nucleus_cuneatus', name: 'Nucleus Cuneatus', targetStructureId: 'medulla' },
          { id: 'reticular_formation_medulla', name: 'Reticular Formation', targetStructureId: 'medulla' },
          { id: 'respiratory_centers', name: 'Medullary Respiratory Centers', targetStructureId: 'medulla' },
          { id: 'cardiovascular_centers', name: 'Cardiovascular Regulators', targetStructureId: 'medulla' },
          { id: 'cn_viii_xii', name: 'Cranial Nerve Nuclei VIII-XII', targetStructureId: 'medulla' }
        ]
      }
    ]
  },
  {
    id: 'sec-4-cerebellum',
    name: '4. Cerebellum',
    description: 'Coordinates balance, motor precision, timing, and fine muscle execution.',
    targetStructureId: 'cerebellum',
    children: [
      { id: 'vermis', name: 'Cerebellar Vermis', targetStructureId: 'cerebellum' },
      { id: 'right_cerebellar_hemisphere', name: 'Right Cerebellar Hemisphere', targetStructureId: 'cerebellum' },
      { id: 'left_cerebellar_hemisphere', name: 'Left Cerebellar Hemisphere', targetStructureId: 'cerebellum' },
      {
        id: 'cerebellar_lobes',
        name: 'Cerebellar Lobes',
        targetStructureId: 'cerebellum',
        children: [
          { id: 'anterior_lobe', name: 'Anterior Lobe', targetStructureId: 'cerebellum' },
          { id: 'posterior_lobe', name: 'Posterior Lobe', targetStructureId: 'cerebellum' },
          { id: 'flocculonodular_lobe', name: 'Flocculonodular Lobe', targetStructureId: 'cerebellum' }
        ]
      },
      {
        id: 'deep_cerebellar_nuclei',
        name: 'Deep Cerebellar Nuclei',
        targetStructureId: 'cerebellum',
        children: [
          { id: 'dentate_nucleus', name: 'Dentate Nucleus', targetStructureId: 'cerebellum' },
          { id: 'emboliform_nucleus', name: 'Emboliform Nucleus', targetStructureId: 'cerebellum' },
          { id: 'globose_nucleus', name: 'Globose Nucleus', targetStructureId: 'cerebellum' },
          { id: 'fastigial_nucleus', name: 'Fastigial Nucleus', targetStructureId: 'cerebellum' }
        ]
      },
      {
        id: 'cerebellar_peduncles',
        name: 'Cerebellar Peduncles',
        targetStructureId: 'cerebellum',
        children: [
          { id: 'superior_peduncle', name: 'Superior Peduncle', targetStructureId: 'cerebellum' },
          { id: 'middle_peduncle', name: 'Middle Peduncle', targetStructureId: 'cerebellum' },
          { id: 'inferior_peduncle', name: 'Inferior Peduncle', targetStructureId: 'cerebellum' }
        ]
      }
    ]
  },
  {
    id: 'sec-5-meninges',
    name: '5. Meninges',
    description: 'Triple membrane protective sheath surrounding the brain and spinal cord.',
    targetStructureId: 'frontal_lobe',
    children: [
      { id: 'dura_mater', name: 'Dura Mater (Outer Tough Membrane)', targetStructureId: 'frontal_lobe' },
      { id: 'arachnoid_mater', name: 'Arachnoid Mater (Middle Webbed Layer)', targetStructureId: 'frontal_lobe' },
      { id: 'pia_mater', name: 'Pia Mater (Inner Vascular Coat)', targetStructureId: 'frontal_lobe' }
    ]
  },
  {
    id: 'sec-6-csf-system',
    name: '6. Cerebrospinal Fluid System',
    description: 'Buoyancy and metabolic waste clearance fluid circuit.',
    targetStructureId: 'ventricles',
    children: [
      { id: 'choroid_plexus', name: 'Choroid Plexus (CSF Generator)', targetStructureId: 'ventricles' },
      { id: 'csf_lat_ventricles', name: 'Lateral Ventricles', targetStructureId: 'ventricles' },
      { id: 'csf_third_ventricle', name: 'Third Ventricle', targetStructureId: 'ventricles' },
      { id: 'csf_aqueduct', name: 'Cerebral Aqueduct (Sylvius)', targetStructureId: 'ventricles' },
      { id: 'csf_fourth_ventricle', name: 'Fourth Ventricle', targetStructureId: 'ventricles' },
      { id: 'foramina_luschka', name: 'Foramina of Luschka', targetStructureId: 'ventricles' },
      { id: 'foramen_magendie', name: 'Foramen of Magendie', targetStructureId: 'ventricles' },
      { id: 'subarachnoid_space', name: 'Subarachnoid Space', targetStructureId: 'ventricles' }
    ]
  },
  {
    id: 'sec-7-blood-supply',
    name: '7. Blood Supply & Cerebrovascular Tree',
    description: 'High-pressure oxygenated blood conduits powering cerebral metabolism.',
    targetStructureId: 'frontal_lobe',
    children: [
      { id: 'ica', name: 'Internal Carotid Artery System', targetStructureId: 'frontal_lobe' },
      { id: 'va', name: 'Vertebral Arteries', targetStructureId: 'brain_stem' },
      { id: 'basilar_art', name: 'Basilar Artery Trunk', targetStructureId: 'pons' },
      { id: 'circle_of_willis', name: 'Circle of Willis (Arterial Anastomosis)', targetStructureId: 'hypothalamus' },
      { id: 'aca', name: 'Anterior Cerebral Artery (ACA)', targetStructureId: 'frontal_lobe' },
      { id: 'mca', name: 'Middle Cerebral Artery (MCA)', targetStructureId: 'temporal_lobe' },
      { id: 'pca', name: 'Posterior Cerebral Artery (PCA)', targetStructureId: 'occipital_lobe' },
      { id: 'venous_sinuses', name: 'Dural Venous Sinuses', targetStructureId: 'frontal_lobe' }
    ]
  },
  {
    id: 'sec-8-cranial-nerves',
    name: '8. Cranial Nerves (CN I - XII)',
    description: 'Twelve paired peripheral nerves originating directly from brainstem nuclei.',
    targetStructureId: 'brain_stem',
    children: [
      { id: 'cn1', name: 'I Olfactory Nerve (Smell)', targetStructureId: 'frontal_lobe' },
      { id: 'cn2', name: 'II Optic Nerve (Vision)', targetStructureId: 'occipital_lobe' },
      { id: 'cn3', name: 'III Oculomotor Nerve (Eye Movements)', targetStructureId: 'brain_stem' },
      { id: 'cn4', name: 'IV Trochlear Nerve (Superior Oblique Eye Control)', targetStructureId: 'brain_stem' },
      { id: 'cn5', name: 'V Trigeminal Nerve (Facial Sensation & Mastication)', targetStructureId: 'pons' },
      { id: 'cn6', name: 'VI Abducens Nerve (Lateral Rectus Eye Control)', targetStructureId: 'pons' },
      { id: 'cn7', name: 'VII Facial Nerve (Facial Expressions & Taste)', targetStructureId: 'pons' },
      { id: 'cn8', name: 'VIII Vestibulocochlear Nerve (Auditory & Balance)', targetStructureId: 'pons' },
      { id: 'cn9', name: 'IX Glossopharyngeal Nerve (Swallowing & Pharynx)', targetStructureId: 'medulla' },
      { id: 'cn10', name: 'X Vagus Nerve (Autonomic Cardiac & Visceral Control)', targetStructureId: 'medulla' },
      { id: 'cn11', name: 'XI Accessory Nerve (Neck & Shoulder Movements)', targetStructureId: 'medulla' },
      { id: 'cn12', name: 'XII Hypoglossal Nerve (Tongue Motility)', targetStructureId: 'medulla' }
    ]
  },
  {
    id: 'sec-9-functional-systems',
    name: '9. Functional Networks & Behavioral Systems',
    description: 'Distributed large-scale neural circuits governing human behavior.',
    targetStructureId: 'frontal_lobe',
    children: [
      { id: 'func_motor', name: 'Somatomotor Control Network', targetStructureId: 'frontal_lobe' },
      { id: 'func_sensory', name: 'Somatosensory Processing Network', targetStructureId: 'parietal_lobe' },
      { id: 'func_visual', name: 'Visual Cortex System', targetStructureId: 'occipital_lobe' },
      { id: 'func_auditory', name: 'Auditory Processing System', targetStructureId: 'temporal_lobe' },
      { id: 'func_olfactory', name: 'Olfactory System', targetStructureId: 'hippocampus' },
      { id: 'func_gustatory', name: 'Gustatory System', targetStructureId: 'frontal_lobe' },
      { id: 'func_vestibular', name: 'Vestibular Balance System', targetStructureId: 'cerebellum' },
      { id: 'func_language', name: 'Language Network (Broca & Wernicke)', targetStructureId: 'temporal_lobe' },
      { id: 'func_memory', name: 'Memory Consolidation Circuit (Papez)', targetStructureId: 'hippocampus' },
      { id: 'func_emotion', name: 'Emotion & Fear Circuitry', targetStructureId: 'amygdala' },
      { id: 'func_reward', name: 'Dopaminergic Mesolimbic Reward Network', targetStructureId: 'basal_ganglia' },
      { id: 'func_attention', name: 'Dorsal & Ventral Attention Network', targetStructureId: 'parietal_lobe' },
      { id: 'func_executive', name: 'Frontoparietal Executive Control Network', targetStructureId: 'frontal_lobe' },
      { id: 'func_dmn', name: 'Default Mode Network (DMN)', targetStructureId: 'frontal_lobe' },
      { id: 'func_salience', name: 'Salience Network', targetStructureId: 'amygdala' },
      { id: 'func_ans', name: 'Autonomic Nervous System (Sympathetic / Parasympathetic)', targetStructureId: 'hypothalamus' }
    ]
  },
  {
    id: 'sec-10-cellular-level',
    name: '10. Microscopic Cellular & Synaptic Level',
    description: 'Histological building blocks of neural computation.',
    targetStructureId: 'hippocampus',
    children: [
      {
        id: 'cell_neurons',
        name: 'Neurons (Electrical Excitability)',
        targetStructureId: 'hippocampus',
        children: [
          { id: 'soma', name: 'Pyramidal Soma & Perikaryon', targetStructureId: 'hippocampus' },
          { id: 'dendrites', name: 'Dendritic Arbor & Spines', targetStructureId: 'hippocampus' },
          { id: 'axon', name: 'Myelinated Axon Fiber', targetStructureId: 'corpus_callosum' },
          { id: 'axon_hillock', name: 'Axon Hillock (Spike Generator)', targetStructureId: 'hippocampus' },
          { id: 'synapse', name: 'Synaptic Cleft & Terminals', targetStructureId: 'hippocampus' },
          { id: 'axon_terminal', name: 'Presynaptic Bouton Terminal', targetStructureId: 'hippocampus' }
        ]
      },
      {
        id: 'cell_glia',
        name: 'Glial Support Cells',
        targetStructureId: 'hippocampus',
        children: [
          { id: 'astrocytes', name: 'Astrocytes (Blood-Brain Barrier & Metabolic Support)', targetStructureId: 'hippocampus' },
          { id: 'oligodendrocytes', name: 'Oligodendrocytes (CNS Myelination)', targetStructureId: 'corpus_callosum' },
          { id: 'microglia', name: 'Microglia (Immune Phagocytes)', targetStructureId: 'hippocampus' },
          { id: 'ependymal', name: 'Ependymal Cells (CSF Cilia Lining)', targetStructureId: 'ventricles' },
          { id: 'ng2_cells', name: 'NG2 Cells (Oligodendrocyte Precursors)', targetStructureId: 'corpus_callosum' }
        ]
      },
      {
        id: 'cell_synaptic_components',
        name: 'Synaptic & Molecular Machinery',
        targetStructureId: 'hippocampus',
        children: [
          { id: 'neurotransmitters', name: 'Neurotransmitters (Glutamate, GABA, Dopamine, ACh)', targetStructureId: 'hippocampus' },
          { id: 'receptors', name: 'Postsynaptic Receptors (AMPA, NMDA, Dopaminergic)', targetStructureId: 'hippocampus' },
          { id: 'ion_channels', name: 'Voltage-Gated Na+/K+/Ca2+ Ion Channels', targetStructureId: 'hippocampus' },
          { id: 'myelin', name: 'Lipid Myelin Sheath', targetStructureId: 'corpus_callosum' },
          { id: 'nodes_ranvier', name: 'Nodes of Ranvier (Saltatory Conduction)', targetStructureId: 'corpus_callosum' }
        ]
      }
    ]
  }
];
