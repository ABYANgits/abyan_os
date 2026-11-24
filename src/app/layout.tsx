import type { Metadata } from 'next';
import { JetBrains_Mono, Orbitron, Inter } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ABYAN.OS v2.7.1 — Digital Operating System & Portfolio',
  description: 'Interactive sci-fi portfolio and command center designed by Mohammed Abyan Kalkeri.',
  keywords: ['Mohammed Abyan', 'Abyan Kalkeri', 'Portfolio', 'AI Engineer', 'Web Developer', 'Operating System', 'Cyberpunk'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${orbitron.variable} ${inter.variable}`}>
      <body className="bg-cyber-void text-cyber-muted font-mono antialiased overflow-x-hidden min-h-screen selection:bg-cyber-green selection:text-black">
        {/* Subtle Ambient Scanline Overlay */}
        <div className="scanlines-overlay" />
        {children}
      </body>
    </html>
  );
}
