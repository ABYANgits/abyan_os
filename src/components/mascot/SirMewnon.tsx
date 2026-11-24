'use client';

import React, { useState } from 'react';
import { ShieldCheck, Sparkles } from 'lucide-react';

const MEWNON_QUOTES = [
  'Meow meow! Welcome, human. 🐾',
  'Firewalls: UP. Vibes: IMMACULATE.',
  'System security: ACTIVE. Zero intrusions detected.',
  'Purring at 44.1kHz standard frequency.',
  'Checking caffeine reserves... Warning: Underflowing.',
  'All systems nominal. You may explore, human.',
];

export const SirMewnon: React.FC = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isBouncing, setIsBouncing] = useState(false);

  const cycleQuote = () => {
    setIsBouncing(true);
    setQuoteIndex((prev) => (prev + 1) % MEWNON_QUOTES.length);
    setTimeout(() => setIsBouncing(false), 300);
  };

  return (
    <div className="relative flex flex-col items-end select-none group">
      {/* Dynamic Dialogue Balloon */}
      <div className="relative mb-2 max-w-[210px] bg-[#0A1424] border border-cyber-green/40 p-2.5 rounded shadow-[0_0_15px_rgba(0,255,102,0.15)] text-[11px] font-mono">
        <div className="flex items-center gap-1.5 text-cyber-green font-bold text-[9px] uppercase tracking-wider mb-1">
          <ShieldCheck className="w-3 h-3 text-cyber-green" />
          <span>SYSTEM_GUARDIAN</span>
        </div>
        <p className="text-gray-200 leading-snug">
          {MEWNON_QUOTES[quoteIndex]}
        </p>
        <span className="text-[9px] text-cyber-muted mt-1 block">
          [ Click Sir Mewnon to interact ]
        </span>
        {/* Dialogue arrow pointing down */}
        <div className="absolute -bottom-2 right-8 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-cyber-green/40" />
      </div>

      {/* Armored Cyber Cat Graphic & Click Trigger */}
      <div
        onClick={cycleQuote}
        className={`relative cursor-pointer transition-transform duration-200 ${
          isBouncing ? 'scale-95' : 'hover:scale-105'
        }`}
        title="Sir. Mewnon — THE PROTECTOR"
      >
        {/* Glowing Aura Ring */}
        <div className="absolute inset-0 bg-cyber-green/10 rounded-full blur-md group-hover:bg-cyber-green/20 transition" />

        {/* Cyber Cat Mascot Visual (SVG Detailed Cyber Mecha Cat) */}
        <div className="relative w-28 h-28 md:w-32 md:h-32 flex items-center justify-center bg-gradient-to-b from-[#0E1A2E] to-[#060B14] border-2 border-cyber-green/40 rounded-xl shadow-[0_0_20px_rgba(0,255,102,0.2)] p-2 overflow-hidden">
          {/* Tech grid background */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#00FF66_1px,transparent_1px)] [background-size:8px_8px]" />

          {/* Detailed Futuristic Cyber Cat Mascot SVG */}
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-cyber-green drop-shadow-[0_0_10px_rgba(0,255,102,0.5)]"
          >
            {/* Mecha Ears */}
            <polygon points="20,40 10,12 38,28" fill="#0D1F38" stroke="#00FF66" strokeWidth="2" />
            <polygon points="80,40 90,12 62,28" fill="#0D1F38" stroke="#00FF66" strokeWidth="2" />
            {/* Inner Ear Neon Highlights */}
            <polygon points="22,35 15,18 34,27" fill="#00FF66" opacity="0.6" />
            <polygon points="78,35 85,18 66,27" fill="#00FF66" opacity="0.6" />

            {/* Armored Cat Helmet / Head */}
            <polygon
              points="20,40 50,24 80,40 85,68 50,86 15,68"
              fill="#08101E"
              stroke="#00FF66"
              strokeWidth="2.5"
            />

            {/* Cyber Visor / Glowing Eyes */}
            <path
              d="M 28 50 Q 50 46 72 50 Q 50 62 28 50 Z"
              fill="#00F0FF"
              className="drop-shadow-[0_0_6px_#00F0FF]"
            />
            {/* Slit pupils */}
            <ellipse cx="40" cy="50" rx="2" ry="5" fill="#05070B" />
            <ellipse cx="60" cy="50" rx="2" ry="5" fill="#05070B" />

            {/* Mecha Snout & Whiskers */}
            <polygon points="46,62 54,62 50,67" fill="#00FF66" />
            {/* Whisker Lines */}
            <line x1="12" y1="58" x2="26" y2="60" stroke="#00FF66" strokeWidth="1.5" />
            <line x1="10" y1="68" x2="25" y2="66" stroke="#00FF66" strokeWidth="1.5" />
            <line x1="88" y1="58" x2="74" y2="60" stroke="#00FF66" strokeWidth="1.5" />
            <line x1="90" y1="68" x2="75" y2="66" stroke="#00FF66" strokeWidth="1.5" />

            {/* Collar & Reactor Core */}
            <circle cx="50" cy="80" r="4.5" fill="#00FF66" className="animate-pulse" />
          </svg>

          {/* Sparkle badge */}
          <div className="absolute bottom-1 right-1 p-0.5 bg-black/60 rounded">
            <Sparkles className="w-3 h-3 text-cyber-green animate-pulse" />
          </div>
        </div>

        {/* Mascot Name Tag */}
        <div className="text-center mt-1">
          <span className="text-[10px] font-bold tracking-wider text-white uppercase block">
            Sir. Mewnon
          </span>
          <span className="text-[8px] text-cyber-green font-mono uppercase">
            THE PROTECTOR
          </span>
        </div>
      </div>
    </div>
  );
};
