'use client';

import React from 'react';
import { useOSStore } from '@/store/useOSStore';
import { ArrowRight, Code2, Mouse } from 'lucide-react';

export const HeroBanner: React.FC = () => {
  const { setActiveTab } = useOSStore();

  return (
    <div className="relative w-full py-4 flex flex-col justify-center select-none">
      {/* Decorative Crosshair Grid Markers */}
      <div className="absolute top-0 left-0 text-cyber-green/40 text-xs font-mono">+</div>
      <div className="absolute top-0 right-12 text-cyber-green/40 text-xs font-mono">+</div>
      <div className="absolute bottom-2 left-1/2 text-cyber-green/20 text-xs font-mono">+</div>

      {/* Breadcrumb line */}
      <div className="flex items-center gap-2 text-[11px] font-mono text-cyber-green mb-1 tracking-wider">
        <span>&gt; INITIALIZING EXPERIENCE...</span>
      </div>

      {/* Main Massive Headline */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-wider leading-tight">
        HELLO,
        <br />
        <span className="text-cyber-green glow-text-green inline-flex items-center">
          I&apos;M ABYAN
          <span className="blinking-cursor" />
        </span>
      </h1>

      {/* Tagline / Subtitle */}
      <p className="mt-3 text-xs sm:text-sm font-mono text-cyber-muted max-w-xl leading-relaxed tracking-wide uppercase">
        I build things for the web, solve problems,
        <br className="hidden sm:inline" />
        and occasionally break stuff (on purpose).
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 mt-5">
        <button
          onClick={() => setActiveTab('projects')}
          className="flex items-center gap-2 px-4 py-2 bg-cyber-green/10 border border-cyber-green text-cyber-green text-xs font-mono font-bold tracking-wider rounded hover:bg-cyber-green hover:text-black transition shadow-[0_0_12px_rgba(0,255,102,0.25)]"
        >
          <span>EXPLORE MY WORK</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <a
          href="https://github.com/mohammedabyan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-[#0B1526] border border-cyber-cyan/40 text-cyber-cyan text-xs font-mono font-bold tracking-wider rounded hover:border-cyber-cyan hover:bg-cyber-cyan/10 transition"
        >
          <Code2 className="w-3.5 h-3.5" />
          <span>VIEW SOURCE &lt;GITHUB/&gt;</span>
        </a>
      </div>

      {/* Scroll cue */}
      <div className="flex items-center gap-2 mt-4 text-[10px] font-mono text-cyber-muted/80">
        <Mouse className="w-3.5 h-3.5 text-cyber-green animate-bounce" />
        <span className="uppercase tracking-widest">SCROLL TO EXPLORE</span>
      </div>
    </div>
  );
};
