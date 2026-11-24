'use client';

import React, { useEffect, useState } from 'react';
import { useOSStore } from '@/store/useOSStore';
import { Oscilloscope } from '@/components/telemetry/Oscilloscope';
import { FileText, Github, Linkedin, Instagram, Mail } from 'lucide-react';

export const LeftSidebar: React.FC = () => {
  const { uptimeSeconds, tickUptime } = useOSStore();
  const [metrics, setMetrics] = useState({
    cpu: 23,
    memory: 46,
    disk: 71,
  });

  // Dynamic uptime timer & jitter for telemetry metrics
  useEffect(() => {
    const timer = setInterval(() => {
      tickUptime();
    }, 1000);

    const jitterTimer = setInterval(() => {
      setMetrics((prev) => ({
        cpu: Math.min(85, Math.max(12, prev.cpu + Math.floor(Math.random() * 5 - 2))),
        memory: Math.min(90, Math.max(40, prev.memory + Math.floor(Math.random() * 3 - 1))),
        disk: 71, // Steady disk
      }));
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(jitterTimer);
    };
  }, [tickUptime]);

  const formatUptime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <aside className="w-full lg:w-64 flex flex-col gap-3 bg-[#060B14]/80 border-r border-cyber-green/15 p-3.5 backdrop-blur-sm select-none">
      {/* 1. SYSTEM_STATUS Panel */}
      <div className="cyber-panel p-3 rounded">
        <div className="tech-bracket-tl" />
        <div className="tech-bracket-tr" />
        <div className="tech-bracket-bl" />
        <div className="tech-bracket-br" />

        <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-cyber-green/15">
          <div className="w-1.5 h-1.5 rounded-full bg-cyber-green shadow-[0_0_6px_#00FF66]" />
          <span className="text-[11px] font-bold text-white tracking-widest uppercase">
            SYSTEM_STATUS
          </span>
        </div>

        <div className="flex flex-col gap-1 text-[11px] font-mono">
          <div className="flex justify-between">
            <span className="text-cyber-muted">USER</span>
            <span className="text-white font-semibold">: ABYAN</span>
          </div>
          <div className="flex justify-between">
            <span className="text-cyber-muted">STATUS</span>
            <span className="text-cyber-green font-semibold">: ONLINE</span>
          </div>
          <div className="flex justify-between">
            <span className="text-cyber-muted">UPTIME</span>
            <span className="text-white">: {formatUptime(uptimeSeconds)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-cyber-muted">COFFEE</span>
            <span className="text-cyber-amber">: 87%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-cyber-muted">SLEEP</span>
            <span className="text-cyber-red">: 12%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-cyber-muted">CREATIVITY</span>
            <span className="text-cyber-cyan font-bold">: OVERFLOWING</span>
          </div>
        </div>
      </div>

      {/* 2. QUICK ACCESS Links */}
      <div className="cyber-panel p-3 rounded">
        <div className="tech-bracket-tl" />
        <div className="tech-bracket-tr" />
        <div className="tech-bracket-bl" />
        <div className="tech-bracket-br" />

        <div className="text-[10px] font-bold text-cyber-muted tracking-wider uppercase mb-2">
          QUICK ACCESS
        </div>

        <div className="flex flex-col gap-1.5 text-[11px]">
          <a
            href="#resume"
            className="flex items-center gap-2 text-cyber-muted hover:text-white hover:bg-cyber-green/10 px-2 py-1 rounded transition"
          >
            <FileText className="w-3.5 h-3.5 text-cyber-green" />
            <span>RESUME.DOC</span>
          </a>
          <a
            href="https://github.com/mohammedabyan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyber-muted hover:text-white hover:bg-cyber-green/10 px-2 py-1 rounded transition"
          >
            <Github className="w-3.5 h-3.5 text-cyber-green" />
            <span>GITHUB</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyber-muted hover:text-white hover:bg-cyber-green/10 px-2 py-1 rounded transition"
          >
            <Linkedin className="w-3.5 h-3.5 text-cyber-green" />
            <span>LINKEDIN</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyber-muted hover:text-white hover:bg-cyber-green/10 px-2 py-1 rounded transition"
          >
            <Instagram className="w-3.5 h-3.5 text-cyber-green" />
            <span>INSTAGRAM</span>
          </a>
          <a
            href="mailto:abyan@example.com"
            className="flex items-center gap-2 text-cyber-muted hover:text-white hover:bg-cyber-green/10 px-2 py-1 rounded transition"
          >
            <Mail className="w-3.5 h-3.5 text-cyber-green" />
            <span>EMAIL ME</span>
          </a>
        </div>
      </div>

      {/* 3. Real-Time Hardware Oscilloscope Graphs */}
      <div className="cyber-panel p-3 rounded">
        <div className="tech-bracket-tl" />
        <div className="tech-bracket-tr" />
        <div className="tech-bracket-bl" />
        <div className="tech-bracket-br" />

        <div className="text-[10px] font-bold text-cyber-muted tracking-wider uppercase mb-1">
          TELEMETRY_MONITOR
        </div>

        <Oscilloscope label="CPU" percentage={metrics.cpu} color="#00FF66" />
        <Oscilloscope label="MEMORY" percentage={metrics.memory} color="#00F0FF" />
        <Oscilloscope label="DISK" percentage={metrics.disk} color="#FFB800" />
      </div>

      {/* 4. TODAY'S MOOD Block */}
      <div className="cyber-panel p-3 rounded flex flex-col items-center text-center">
        <div className="text-[10px] font-bold text-cyber-muted tracking-wider uppercase mb-1 w-full text-left">
          TODAY&apos;S MOOD
        </div>
        <div className="text-cyber-green font-display font-bold tracking-widest text-sm glow-text-green my-1">
          SHIP IT.
        </div>
        {/* Pixel Cat Face */}
        <pre className="text-[9px] font-mono text-cyber-green leading-none opacity-85 select-none">
{` /\\_/\\
( o.o )
 > ^ < `}
        </pre>
      </div>
    </aside>
  );
};
