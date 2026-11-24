'use client';

import React from 'react';
import { useOSStore } from '@/store/useOSStore';
import { ArrowRight, User } from 'lucide-react';

export const AboutMePanel: React.FC = () => {
  const { setActiveTab } = useOSStore();

  return (
    <div className="cyber-panel p-4 rounded flex flex-col justify-between h-full relative overflow-hidden group">
      <div className="tech-bracket-tl" />
      <div className="tech-bracket-tr" />
      <div className="tech-bracket-bl" />
      <div className="tech-bracket-br" />

      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-cyber-green/15 pb-2 mb-3">
        <div className="flex items-center gap-2">
          <User className="w-3.5 h-3.5 text-cyber-green" />
          <span className="text-[10px] font-bold text-cyber-green uppercase tracking-wider">
            /ABOUT_ME
          </span>
        </div>
        <span className="text-[9px] text-cyber-muted font-mono">BIO.SYS</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col sm:flex-row gap-3 items-center">
        <div className="flex-1">
          <h3 className="text-xs sm:text-sm font-display font-bold text-white tracking-wide uppercase leading-snug">
            DEVELOPER. PROBLEM SOLVER. PIXEL PUSHER.
          </h3>
          <p className="mt-2 text-[11px] font-mono text-cyber-muted leading-relaxed">
            23 y/o tech enthusiast from India. I love building AI models, web apps, and cool interfaces.
          </p>
          <p className="mt-1.5 text-[11px] font-mono text-cyber-muted leading-relaxed">
            When I&apos;m not coding, I&apos;m either clicking pictures, vibing to music, or overthinking life.
          </p>
        </div>

        {/* Cyberpunk City Skyline Image Thumbnail */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded border border-cyber-green/30 overflow-hidden relative flex-shrink-0 bg-gradient-to-tr from-[#0B1526] via-[#10243E] to-[#0A1A2F]">
          <div className="absolute inset-0 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:6px_6px] opacity-30" />
          {/* Cyberpunk neon city silhouette SVG */}
          <svg viewBox="0 0 100 100" className="w-full h-full object-cover">
            {/* Glowing moon/sun */}
            <circle cx="75" cy="30" r="14" fill="#00FF66" opacity="0.3" filter="blur(2px)" />
            <circle cx="75" cy="30" r="8" fill="#00FF66" opacity="0.6" />
            {/* Skyline silhouettes */}
            <rect x="5" y="45" width="18" height="55" fill="#050912" stroke="#00F0FF" strokeWidth="0.5" />
            <rect x="28" y="32" width="22" height="68" fill="#070D18" stroke="#00FF66" strokeWidth="0.5" />
            <rect x="55" y="50" width="16" height="50" fill="#050912" stroke="#00F0FF" strokeWidth="0.5" />
            <rect x="75" y="38" width="20" height="62" fill="#070D18" stroke="#00FF66" strokeWidth="0.5" />
            {/* Window lights */}
            <rect x="33" y="40" width="2" height="3" fill="#00FF66" />
            <rect x="38" y="48" width="2" height="3" fill="#00F0FF" />
            <rect x="80" y="52" width="2" height="3" fill="#FFB800" />
            <rect x="85" y="60" width="2" height="3" fill="#00FF66" />
          </svg>
          <div className="absolute bottom-1 right-1 text-[8px] bg-black/70 px-1 text-cyber-cyan font-mono">
            BLR.JPG
          </div>
        </div>
      </div>

      {/* Button footer */}
      <div className="mt-3 pt-2 border-t border-cyber-green/10 flex justify-end">
        <button
          onClick={() => setActiveTab('about')}
          className="flex items-center gap-1.5 text-[10px] font-mono text-cyber-green hover:underline tracking-wider uppercase font-semibold"
        >
          <span>READ FULL STORY</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
