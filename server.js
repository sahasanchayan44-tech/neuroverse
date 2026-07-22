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

const COMPUTED_NEURO_PARAMETERS = {
  globalTotalNeuronsBillion: 86.1,
  globalSynapsesTrillion: 150.0,
  globalCerebralBloodFlow: '54 mL/100g/min',
  globalOxygenConsumptionCMRO2: '3.3 mL/100g/min',
  globalGlucoseConsumption: '31 mg/min/100g',
  globalWhiteMatterAxonCount: '200 Million Callosal Axons',
  myelinConductionVelocityRange: '1.0 to 120.0 m/s',
  restingMembranePotentialAverage: '-70 mV',
  actionPotentialThresholdAverage: '-55 mV'
};

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

  // Telemetry & Parameters REST API Endpoints
  server.get('/health', (req, res) => {
    res.json({
      status: 'HEALTHY',
      version: '2.1.0',
      uptimeSeconds: Math.floor(process.uptime()),
      timestamp: new Date().toISOString()
    });
  });

  server.get('/api/brain/parameters', (req, res) => {
    res.json({
      title: 'Computed Human Brain Biophysical Parameters',
      source: 'Unified Neuroinformatics & BodyParts3D Datasets',
      computedMetrics: COMPUTED_NEURO_PARAMETERS
    });
  });

  server.get('/api/server/status', (req, res) => {
    const memory = process.memoryUsage();
    res.json({
      server: 'NeuroVerse Cyberpunk Enterprise Server Node',
      version: '2.1.0',
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
      status: 'ONLINE'
    });
  });

  // Next.js App Router Catch-all
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`🚀 NeuroVerse Sci-Fi Enterprise Server running on http://localhost:${port}`);
  });
}).catch((ex) => {
  console.error('Server Initialization Error:', ex.stack);
  process.exit(1);
});
