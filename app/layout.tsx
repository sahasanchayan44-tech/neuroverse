import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NeuroVerse 3D — Futuristic Holographic Brain Platform',
  description: 'Ultra-realistic, interactive 3D human brain scientific visualization with Next.js, Three.js, React Three Fiber, and Firebase integration.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-neuro-dark text-white font-sans overflow-hidden">
        {children}
      </body>
    </html>
  );
}
