import express from 'express';
import next from 'next';

// Force production mode for fast 60 FPS asset loading and zero 404s
const dev = false;
const hostname = '0.0.0.0';
const port = parseInt(process.env.PORT || '8080', 10);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  // Health check endpoint
  server.get('/health', (req, res) => {
    res.json({ status: 'OK', mode: 'production', app: 'NeuroVerse 3D Server', uptime: process.uptime() });
  });

  // Serve Next.js static files and pages
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`🧠 NeuroVerse Always-On Production Server listening on http://localhost:${port}`);
  });
}).catch((ex) => {
  console.error('Server crash prevented, restarting:', ex.stack);
});
