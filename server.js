import express from 'express';
import next from 'next';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import os from 'os';

const dev = process.env.NODE_ENV === 'development';
const hostname = '0.0.0.0';
const port = parseInt(process.env.PORT || '8080', 10);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

const BRAIN_STRUCTURES = [
  { id: 'frontal_lobe', name: 'Frontal Lobe', latinName: 'Lobus Frontalis', category: 'Neocortex', bloodSupply: 'Anterior Cerebral Artery (ACA), Middle Cerebral Artery (MCA)' },
  { id: 'parietal_lobe', name: 'Parietal Lobe', latinName: 'Lobus Parietalis', category: 'Neocortex', bloodSupply: 'Middle Cerebral Artery (MCA)' },
  { id: 'temporal_lobe', name: 'Temporal Lobe', latinName: 'Lobus Temporalis', category: 'Neocortex', bloodSupply: 'Middle Cerebral Artery (MCA), Posterior Cerebral Artery (PCA)' },
  { id: 'occipital_lobe', name: 'Occipital Lobe', latinName: 'Lobus Occipitalis', category: 'Neocortex', bloodSupply: 'Posterior Cerebral Artery (PCA)' },
  { id: 'cerebellum', name: 'Cerebellum', latinName: 'Cerebellum', category: 'Hindbrain', bloodSupply: 'PICA, AICA, Superior Cerebellar Artery (SCA)' },
  { id: 'brain_stem', name: 'Brain Stem', latinName: 'Truncus Encephali', category: 'Brainstem', bloodSupply: 'Basilar Artery, Vertebral Arteries' },
  { id: 'corpus_callosum', name: 'Corpus Callosum', latinName: 'Corpus Callosum', category: 'White Matter Tract', bloodSupply: 'Anterior Cerebral Artery (ACA)' },
  { id: 'thalamus', name: 'Thalamus', latinName: 'Thalamus', category: 'Diencephalon', bloodSupply: 'Thalamoperforating Arteries' },
  { id: 'hypothalamus', name: 'Hypothalamus', latinName: 'Hypothalamus', category: 'Diencephalon', bloodSupply: 'Circle of Willis Branches' },
  { id: 'amygdala', name: 'Amygdala', latinName: 'Corpus Amygdaloideum', category: 'Limbic System', bloodSupply: 'Anterior Choroidal Artery' },
  { id: 'hippocampus', name: 'Hippocampus', latinName: 'Hippocampus', category: 'Limbic System', bloodSupply: 'Posterior Cerebral Artery (PCA)' },
  { id: 'basal_ganglia', name: 'Basal Ganglia', latinName: 'Nuclei Basales', category: 'Subcortical Nuclei', bloodSupply: 'Lenticulostriate Arteries' },
  { id: 'pons', name: 'Pons', latinName: 'Pons', category: 'Hindbrain', bloodSupply: 'Pontine Arteries' },
  { id: 'medulla', name: 'Medulla Oblongata', latinName: 'Medulla Oblongata', category: 'Brainstem', bloodSupply: 'Anterior Spinal Artery, PICA' }
];

app.prepare().then(() => {
  const server = express();

  // Production Middlewares
  server.use(compression());
  server.use(cors({ origin: '*' }));
  server.use(
    helmet({
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false
    })
  );
  server.use(express.json());

  // Telemetry REST API Endpoints
  server.get('/health', (req, res) => {
    res.json({
      status: 'HEALTHY',
      version: '2.0.0',
      uptimeSeconds: Math.floor(process.uptime()),
      timestamp: new Date().toISOString()
    });
  });

  server.get('/api/server/status', (req, res) => {
    const memory = process.memoryUsage();
    res.json({
      server: 'NeuroVerse Enterprise Production Node',
      version: '2.0.0',
      port,
      cpus: os.cpus().length,
      platform: os.platform(),
      totalMemMB: Math.round(os.totalmem() / 1024 / 1024),
      freeMemMB: Math.round(os.freemem() / 1024 / 1024),
      processMemory: {
        rssMB: Math.round(memory.rss / 1024 / 1024),
        heapTotalMB: Math.round(memory.heapTotal / 1024 / 1024),
        heapUsedMB: Math.round(memory.heapUsed / 1024 / 1024)
      },
      uptimeSeconds: Math.floor(process.uptime()),
      activeGLBModelSize: '3.94 MB (BodyParts3D)',
      status: 'ONLINE'
    });
  });

  server.get('/api/brain/structures', (req, res) => {
    res.json({
      total: BRAIN_STRUCTURES.length,
      structures: BRAIN_STRUCTURES
    });
  });

  server.get('/api/brain/eeg', (req, res) => {
    const timestamp = Date.now();
    res.json({
      timestamp,
      channels: [
        { id: 'FP1-F7', freqHz: (38 + Math.random() * 8).toFixed(1), microvolts: Math.floor(40 + Math.random() * 25) },
        { id: 'FP2-F8', freqHz: (36 + Math.random() * 8).toFixed(1), microvolts: Math.floor(45 + Math.random() * 20) },
        { id: 'T3-C3', freqHz: (10 + Math.random() * 4).toFixed(1), microvolts: Math.floor(55 + Math.random() * 20) },
        { id: 'C4-T4', freqHz: (18 + Math.random() * 6).toFixed(1), microvolts: Math.floor(35 + Math.random() * 15) },
        { id: 'P3-O1', freqHz: (50 + Math.random() * 10).toFixed(1), microvolts: Math.floor(65 + Math.random() * 25) },
        { id: 'P4-O2', freqHz: (45 + Math.random() * 8).toFixed(1), microvolts: Math.floor(58 + Math.random() * 20) }
      ]
    });
  });

  // Next.js App Router Catch-all
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`🚀 NeuroVerse Upgraded Enterprise Server listening on http://localhost:${port}`);
  });
}).catch((ex) => {
  console.error('Server Initialization Error:', ex.stack);
  process.exit(1);
});
