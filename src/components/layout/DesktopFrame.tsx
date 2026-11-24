'use client';

import React from 'react';
import { useOSStore } from '@/store/useOSStore';
import { TopNavbar } from '@/components/layout/TopNavbar';
import { LeftSidebar } from '@/components/layout/LeftSidebar';
import { BottomDock } from '@/components/layout/BottomDock';
import { HeroBanner } from '@/components/dashboard/HeroBanner';
import { SirMewnon } from '@/components/mascot/SirMewnon';
import { AboutMePanel } from '@/components/dashboard/AboutMePanel';
import { ProjectDatabase } from '@/components/dashboard/ProjectDatabase';
import { RandomThoughtCard } from '@/components/dashboard/RandomThoughtCard';
import { SystemAlertsCard } from '@/components/dashboard/SystemAlertsCard';
import { VisualMemoryStrip } from '@/components/dashboard/VisualMemoryStrip';
import { MiniTerminal } from '@/components/terminal/MiniTerminal';

export const DesktopFrame: React.FC = () => {
  const { activeTab } = useOSStore();

  return (
    <div className="flex flex-col min-h-screen bg-[#05070B] text-cyber-muted font-mono relative overflow-hidden">
      {/* 1. Persistent Top Navigation Bar */}
      <TopNavbar />

      {/* 2. Middle Operational Area: Sidebar + Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row w-full max-w-[1720px] mx-auto overflow-hidden">
        {/* Left Telemetry Sidebar */}
        <LeftSidebar />

        {/* Center Main Dashboard Viewport */}
        <main className="flex-1 p-3 sm:p-5 overflow-y-auto space-y-4 max-h-[calc(100vh-88px)]">
          {/* Top Hero Row with Sir Mewnon Companion */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-4 border-b border-cyber-green/15 pb-4">
            <div className="flex-1 w-full">
              <HeroBanner />
            </div>
            <div className="flex-shrink-0 self-end md:self-start">
              <SirMewnon />
            </div>
          </div>

          {/* Bento Grid Row 1: About Me & Project Database */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 items-stretch">
            <div className="xl:col-span-4">
              <AboutMePanel />
            </div>
            <div className="xl:col-span-8">
              <ProjectDatabase />
            </div>
          </div>

          {/* Bento Grid Row 2: Random Thought & System Alerts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
            <RandomThoughtCard />
            <SystemAlertsCard />
          </div>

          {/* Bento Grid Row 3: Visual Memory Photo Strip */}
          <div className="w-full">
            <VisualMemoryStrip />
          </div>
        </main>
      </div>

      {/* 3. Persistent Bottom System Dock */}
      <BottomDock />

      {/* 4. Interactive Terminal Drawer (Toggled by Dock or State) */}
      <MiniTerminal />
    </div>
  );
};
