import express from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const hostname = '0.0.0.0';
const port = parseInt(process.env.PORT || '8080', 10);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  // Health check endpoint
  server.get('/health', (req, res) => {
    res.json({ status: 'OK', app: 'NeuroVerse 3D Server', uptime: process.uptime() });
  });

  // Handle all Next.js pages, SSR, and API routes
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`🧠 NeuroVerse Unified Production Server listening on http://localhost:${port}`);
  });
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
