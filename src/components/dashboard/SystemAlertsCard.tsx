'use client';

import React, { useState, useEffect } from 'react';
import { AlertTriangle, Minus, X } from 'lucide-react';

export const SystemAlertsCard: React.FC = () => {
  const [seconds, setSeconds] = useState(157); // 2m 37s as in MOCKUP-001
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (dismissed) return null;

  const minutes = Math.floor(seconds / 60);
  const remainingSecs = seconds % 60;

  return (
    <div className="cyber-panel p-3.5 rounded flex flex-col justify-between h-full relative group border-cyber-amber/30">
      <div className="tech-bracket-tl" />
      <div className="tech-bracket-tr" />
      <div className="tech-bracket-bl" />
      <div className="tech-bracket-br" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-cyber-amber/20 pb-1.5 mb-2">
        <div className="flex items-center gap-1.5">
          <AlertTriangle className="w-3.5 h-3.5 text-cyber-amber" />
          <span className="text-[10px] font-bold text-cyber-amber uppercase tracking-wider">
            /SYSTEM_ALERTS
          </span>
        </div>
        <div className="flex items-center gap-1 text-cyber-muted text-[10px]">
          <Minus className="w-2.5 h-2.5" />
          <button onClick={() => setDismissed(true)} className="hover:text-cyber-red">
            <X className="w-2.5 h-2.5" />
          </button>
        </div>
      </div>

      {/* Alert Content */}
      <div className="flex items-center justify-between gap-3 py-1">
        <div className="flex flex-col text-[11px] font-mono leading-relaxed">
          <span className="text-cyber-amber font-bold text-[10px]">&gt; WARNING</span>
          <span className="text-gray-300">
            You&apos;ve been on this page for{' '}
            <strong className="text-white font-semibold">
              {minutes} minutes {remainingSecs} seconds
            </strong>.
          </span>
          <span className="text-cyber-muted mt-1">Take a break. Drink water. Go touch some grass.</span>
        </div>

        {/* Pixel Cat Icon */}
        <pre className="text-[8px] font-mono text-cyber-amber leading-none opacity-80 select-none flex-shrink-0">
{` /\\_/\\
( -.- )
  zZz `}
        </pre>
      </div>

      {/* Status Bar */}
      <div className="mt-2 pt-1 border-t border-cyber-amber/10 flex justify-between text-[9px] text-cyber-muted">
        <span>SEVERITY: MILD_CONCERN</span>
        <span className="text-cyber-green">STATUS: HYDRATE</span>
      </div>
    </div>
  );
};
