'use client';

import React, { useState, useEffect } from 'react';
import { useOSStore } from '@/store/useOSStore';
import { ArrowRight, CheckCircle2, FastForward } from 'lucide-react';

const BOOT_MODULES = [
  'SYSTEM FILES',
  'USER PROFILE',
  'PROJECTS DATABASE',
  'MEMORIES',
  'OVERTHINKING MODULE',
  'CAFFEINE LEVELS',
];

export const BootSequence: React.FC = () => {
  const { finishBoot } = useOSStore();
  const [currentStage, setCurrentStage] = useState(1);
  const [verifiedModules, setVerifiedModules] = useState<number>(0);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    // Stage 1: Load modules incrementally
    const interval = setInterval(() => {
      setVerifiedModules((prev) => {
        if (prev < BOOT_MODULES.length) {
          setProgress(Math.floor(((prev + 1) / BOOT_MODULES.length) * 34));
          return prev + 1;
        }
        return prev;
      });
    }, 350);

    // Stage 2: Synchronize Personality at 2.4s
    const stage2Timer = setTimeout(() => {
      setCurrentStage(2);
      setProgress(68);
    }, 2400);

    // Stage 3: Finalize Interface at 4.0s
    const stage3Timer = setTimeout(() => {
      setCurrentStage(3);
      setProgress(99);
    }, 4000);

    // Stage 4: Boot Complete at 5.5s
    const stage4Timer = setTimeout(() => {
      setCurrentStage(4);
      setProgress(100);
    }, 5500);

    // Automatically enter desktop at 7.2s
    const completeTimer = setTimeout(() => {
      finishBoot();
    }, 7200);

    return () => {
      clearInterval(interval);
      clearTimeout(stage2Timer);
      clearTimeout(stage3Timer);
      clearTimeout(stage4Timer);
      clearTimeout(completeTimer);
    };
  }, [finishBoot]);

  return (
    <div className="fixed inset-0 z-50 bg-[#05070B] flex flex-col justify-between p-6 sm:p-10 select-none overflow-hidden font-mono">
      {/* Background Watermark "M.A.K" */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <span className="text-[20vw] font-display font-extrabold text-white tracking-widest">
          M.A.K
        </span>
      </div>

      {/* Top Banner with Skip Control */}
      <div className="flex items-center justify-between border-b border-cyber-green/20 pb-3 z-10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyber-green animate-ping" />
          <span className="text-xs font-bold text-white tracking-widest uppercase">
            3. INTRO LOADER SEQUENCE (BOOTING UP)
          </span>
        </div>

        <button
          onClick={finishBoot}
          className="flex items-center gap-1.5 px-3 py-1 bg-[#0C1629] border border-cyber-green/40 hover:border-cyber-green text-cyber-green text-[11px] rounded transition shadow-[0_0_10px_rgba(0,255,102,0.15)] font-semibold"
        >
          <span>SKIP BOOT</span>
          <FastForward className="w-3 h-3" />
        </button>
      </div>

      {/* Main 4-Stage Horizontal HUD Progression */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-auto z-10">
        {/* Stage 1: Initializing Modules */}
        <div
          className={`cyber-panel p-4 rounded transition-all duration-300 ${
            currentStage >= 1
              ? 'border-cyber-green/40 shadow-[0_0_15px_rgba(0,255,102,0.1)]'
              : 'opacity-40'
          }`}
        >
          <div className="tech-bracket-tl" />
          <div className="tech-bracket-tr" />
          <div className="text-[11px] font-bold text-cyber-green mb-1">
            &gt; INITIALIZING ABYAN.OS
          </div>
          <p className="text-[9px] text-cyber-muted mb-3">Loading core modules...</p>

          <div className="space-y-1.5 text-[10px]">
            {BOOT_MODULES.map((mod, i) => (
              <div key={mod} className="flex justify-between items-center">
                <span className="text-gray-300">&gt; {mod}</span>
                {i < verifiedModules ? (
                  <span className="text-cyber-green font-bold">[OK]</span>
                ) : (
                  <span className="text-cyber-dim font-bold">[..]</span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 pt-2 border-t border-cyber-green/15 text-[10px] text-cyber-green">
            PROGRESS: {currentStage === 1 ? progress : 34}%
          </div>
        </div>

        {/* Stage 2: Synchronizing Personality */}
        <div
          className={`cyber-panel p-4 rounded transition-all duration-300 flex flex-col justify-between ${
            currentStage >= 2
              ? 'border-cyber-cyan/50 shadow-[0_0_15px_rgba(0,240,255,0.15)]'
              : 'opacity-30'
          }`}
        >
          <div className="tech-bracket-tl" />
          <div className="tech-bracket-tr" />
          <div>
            <div className="text-[11px] font-bold text-cyber-cyan mb-1">
              &gt; SYNCHRONIZING PERSONALITY...
            </div>
            <p className="text-[9px] text-cyber-muted mb-2">Neural weights alignment</p>

            {/* Silhouette Graphic Container */}
            <div className="w-full h-32 rounded bg-[#070E1A] border border-cyber-cyan/25 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:8px_8px] opacity-20" />
              <div className="w-16 h-20 rounded-t-full bg-gradient-to-t from-black to-cyber-cyan/30 border-t border-cyber-cyan/50 shadow-[0_0_15px_#00F0FF]" />
              <span className="absolute bottom-2 font-display text-[10px] tracking-widest text-cyber-cyan/70">
                M.A.K
              </span>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-cyber-cyan/15 text-[10px] text-cyber-cyan">
            PROGRESS: {currentStage >= 2 ? (currentStage === 2 ? progress : 68) : 0}%
          </div>
        </div>

        {/* Stage 3: Finalizing Interface */}
        <div
          className={`cyber-panel p-4 rounded transition-all duration-300 flex flex-col justify-between items-center text-center ${
            currentStage >= 3
              ? 'border-cyber-amber/50 shadow-[0_0_15px_rgba(255,184,0,0.15)]'
              : 'opacity-30'
          }`}
        >
          <div className="tech-bracket-tl" />
          <div className="tech-bracket-tr" />
          <div className="w-full text-left">
            <div className="text-[11px] font-bold text-cyber-amber mb-1">
              &gt; FINALIZING INTERFACE...
            </div>
          </div>

          {/* Radial 99% Gauge */}
          <div className="my-auto relative flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-4 border-cyber-amber/20 border-t-cyber-amber animate-spin shadow-[0_0_15px_#FFB800]" />
            <div className="absolute flex flex-col items-center">
              <span className="text-xl font-display font-bold text-white">
                {currentStage >= 3 ? (currentStage === 3 ? progress : 99) : 0}%
              </span>
              <span className="text-[8px] text-cyber-amber uppercase tracking-wider font-semibold">
                ALMOST THERE
              </span>
            </div>
          </div>

          <div className="w-full text-center text-[10px] text-cyber-amber pt-2 border-t border-cyber-amber/15">
            CALIBRATING VIEWPORT
          </div>
        </div>

        {/* Stage 4: Boot Complete */}
        <div
          className={`cyber-panel p-4 rounded transition-all duration-300 flex flex-col justify-between ${
            currentStage >= 4
              ? 'border-cyber-green shadow-[0_0_20px_rgba(0,255,102,0.3)] bg-[#0A1626]'
              : 'opacity-30'
          }`}
        >
          <div className="tech-bracket-tl" />
          <div className="tech-bracket-tr" />
          <div>
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-cyber-green mb-2">
              <CheckCircle2 className="w-4 h-4 text-cyber-green" />
              <span>&gt; BOOT COMPLETE</span>
            </div>

            <div className="space-y-1 text-xs text-white my-3">
              <p className="font-bold">Welcome back, Abyan.</p>
              <p className="text-cyber-muted text-[11px]">Make today count.</p>
            </div>

            <div className="flex items-center gap-1.5 text-cyber-green text-[11px] font-bold animate-pulse">
              <span>&gt; ENTERING SYSTEM</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="mt-4 pt-2 border-t border-cyber-green/30 flex justify-between items-center text-[10px]">
            <span className="text-cyber-green font-bold">100% READY</span>
            <button
              onClick={finishBoot}
              className="px-2 py-0.5 bg-cyber-green text-black font-bold rounded text-[9px] hover:bg-cyber-cyan transition"
            >
              LAUNCH NOW
            </button>
          </div>
        </div>
      </div>

      {/* Global Bottom Progress Bar */}
      <div className="w-full z-10 flex flex-col gap-1">
        <div className="flex justify-between text-[11px] text-cyber-muted">
          <span>KERNEL: LINUX-ABYAN-X86_64</span>
          <span className="text-cyber-green font-bold">{progress}%</span>
        </div>
        <div className="w-full h-1.5 bg-[#0C1524] rounded-full overflow-hidden border border-cyber-green/30">
          <div
            className="h-full bg-gradient-to-r from-cyber-green to-cyber-cyan shadow-[0_0_8px_#00FF66] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
