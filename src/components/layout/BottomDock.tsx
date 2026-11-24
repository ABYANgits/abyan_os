'use client';

import React, { useEffect, useState } from 'react';
import { useOSStore } from '@/store/useOSStore';
import { Terminal, Github, Linkedin, Instagram, Mail, Wifi } from 'lucide-react';

export const BottomDock: React.FC = () => {
  const { toggleTerminal, terminalOpen } = useOSStore();
  const [timeStr, setTimeStr] = useState('10:42:18 PM');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-[#060B14]/90 border-t border-cyber-green/20 backdrop-blur-md px-4 py-2 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono z-40 select-none">
      {/* 1. Terminal Mini Trigger */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleTerminal}
          className={`flex items-center gap-2 px-2.5 py-1 rounded border transition ${
            terminalOpen
              ? 'bg-cyber-green text-black border-cyber-green shadow-[0_0_10px_#00FF66]'
              : 'bg-[#0B1424] text-cyber-green border-cyber-green/30 hover:border-cyber-green'
          }`}
          title="Toggle interactive terminal drawer"
        >
          <Terminal className="w-3.5 h-3.5" />
          <span className="font-semibold tracking-wider">TERMINAL [ &gt;_ ]</span>
        </button>

        <div className="hidden sm:flex items-center gap-1.5 text-cyber-muted text-[10px]">
          <span className="text-cyber-green">abyan@os:~$</span>
          <span>whoami</span>
          <span className="text-gray-500">&gt;</span>
          <span className="text-white">passionate &bull; curious &bull; builder</span>
        </div>
      </div>

      {/* 2. Middle Stats: Current Time & Location */}
      <div className="flex items-center gap-4 text-xs">
        <div className="flex items-center gap-1.5">
          <span className="text-cyber-muted text-[10px] uppercase">TIME:</span>
          <span className="text-white font-bold tracking-wider">{timeStr}</span>
        </div>

        <div className="hidden md:flex items-center gap-1.5">
          <span className="text-cyber-muted text-[10px] uppercase">LOCATION:</span>
          <span className="text-white font-medium">Bangalore, India</span>
          <span className="text-[10px] text-cyber-muted font-mono">(12.9716&deg; N, 77.5946&deg; E)</span>
        </div>
      </div>

      {/* 3. Right: Social Connect & System Boot Ready Badge */}
      <div className="flex items-center gap-4">
        {/* Let's connect icons */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-cyber-muted uppercase hidden lg:inline">CONNECT:</span>
          <a
            href="https://github.com/mohammedabyan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyber-muted hover:text-cyber-green transition p-1"
            title="GitHub"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyber-muted hover:text-cyber-green transition p-1"
            title="LinkedIn"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyber-muted hover:text-cyber-green transition p-1"
            title="Instagram"
          >
            <Instagram className="w-3.5 h-3.5" />
          </a>
          <a
            href="mailto:abyan@example.com"
            className="text-cyber-muted hover:text-cyber-green transition p-1"
            title="Email"
          >
            <Mail className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Boot Sequence Status */}
        <div className="flex items-center gap-2 bg-[#050B14] border border-cyber-green/30 px-2 py-0.5 rounded text-[10px]">
          <Wifi className="w-3 h-3 text-cyber-green animate-pulse" />
          <span className="text-cyber-green font-semibold">[############] 100%</span>
          <span className="text-white font-bold">SYSTEM READY</span>
        </div>
      </div>
    </footer>
  );
};
