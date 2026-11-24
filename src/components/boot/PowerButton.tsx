'use client';

import React from 'react';
import { useOSStore } from '@/store/useOSStore';
import { Power } from 'lucide-react';

export const PowerButton: React.FC = () => {
  const { pressPower } = useOSStore();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#05070B] text-center select-none relative overflow-hidden px-4">
      {/* Background cyber dust / grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#00FF66_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      {/* Title above */}
      <div className="mb-8 flex flex-col items-center gap-1">
        <span className="text-[11px] font-mono tracking-widest text-cyber-muted uppercase">
          0. BEFORE PRESSING POWER
        </span>
        <h2 className="text-xl sm:text-2xl font-display font-bold text-white tracking-wider glow-text-green">
          ABYAN.OS ARCHITECTURE
        </h2>
      </div>

      {/* Central Circular Sci-Fi Reactor Power Button */}
      <div className="relative flex items-center justify-center group cursor-pointer" onClick={pressPower}>
        {/* Outer ambient glow pulses */}
        <div className="absolute -inset-6 rounded-full bg-cyber-green/10 blur-xl group-hover:bg-cyber-green/25 transition duration-700 animate-pulse" />

        {/* Outer Mechanical Notched Ring */}
        <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full border-2 border-cyber-green/30 flex items-center justify-center p-3 bg-gradient-to-b from-[#0A1629] via-[#050B14] to-[#03060B] shadow-[0_0_35px_rgba(0,255,102,0.15)] group-hover:border-cyber-green transition duration-300">
          {/* Radial tick marks */}
          <div className="absolute inset-1 rounded-full border border-dashed border-cyber-green/20 pointer-events-none animate-spin" style={{ animationDuration: '30s' }} />

          {/* Inner Reactor Core */}
          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#071120] border-2 border-cyber-green/60 flex flex-col items-center justify-center shadow-[inset_0_0_20px_rgba(0,255,102,0.3)] group-hover:scale-105 group-hover:shadow-[inset_0_0_30px_rgba(0,255,102,0.6)] transition duration-300">
            {/* Glowing Power Glyph */}
            <Power className="w-12 h-12 text-cyber-green filter drop-shadow-[0_0_12px_#00FF66] group-hover:scale-110 transition duration-300" />
          </div>
        </div>
      </div>

      {/* Status Prompts Below */}
      <div className="mt-8 flex flex-col items-center gap-2 font-mono">
        <div className="px-3 py-1 bg-[#091424] border border-cyber-green/30 rounded text-cyber-green text-xs font-semibold tracking-widest shadow-[0_0_10px_rgba(0,255,102,0.2)]">
          [ SYSTEM_IDLE ]
        </div>
        <p className="text-sm font-bold text-white tracking-wider uppercase animate-pulse">
          PRESS TO INITIALIZE
        </p>
        <span className="text-[10px] text-cyber-muted tracking-wider">
          &gt; CLICK THE POWER REACTOR TO INITIALIZE AUDIO &amp; BOOT KERNEL
        </span>
      </div>
    </div>
  );
};
