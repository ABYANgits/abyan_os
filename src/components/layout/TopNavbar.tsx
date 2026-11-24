'use client';

import React from 'react';
import { useOSStore } from '@/store/useOSStore';
import { useAudioStore } from '@/store/useAudioStore';
import { NavTabId } from '@/types/os';
import { Play, Pause, SkipBack, SkipForward, Disc3 } from 'lucide-react';

const NAV_TABS: { id: NavTabId; label: string }[] = [
  { id: 'home', label: '//_HOME' },
  { id: 'about', label: '/ABOUT' },
  { id: 'projects', label: '/PROJECTS' },
  { id: 'gallery', label: '/GALLERY' },
  { id: 'mind_dump', label: '/MIND_DUMP' },
  { id: 'music', label: '/MUSIC' },
  { id: 'contact', label: '/CONTACT' },
];

export const TopNavbar: React.FC = () => {
  const { activeTab, setActiveTab } = useOSStore();
  const { isPlaying, togglePlay, currentTrack, currentTime } = useAudioStore();

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercent = (currentTime / currentTrack.duration) * 100;

  return (
    <header className="w-full bg-[#070D18]/90 border-b border-cyber-green/20 backdrop-blur-md px-4 py-2 flex flex-wrap items-center justify-between gap-4 select-none z-40">
      {/* Left: OS Title */}
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-cyber-green shadow-[0_0_8px_#00FF66] animate-pulse" />
        <span className="font-display tracking-widest text-xs font-bold text-white uppercase glow-text-green">
          ABYAN.OS <span className="text-cyber-green font-mono font-normal text-[11px]">v2.7.1</span>
        </span>
      </div>

      {/* Center: Sci-Fi Nav Tabs */}
      <nav className="flex items-center gap-1 md:gap-3 overflow-x-auto text-[11px] font-mono tracking-wider">
        {NAV_TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-2.5 py-1 transition-all duration-150 uppercase whitespace-nowrap ${
                isActive
                  ? 'text-cyber-green font-semibold'
                  : 'text-cyber-muted hover:text-white hover:bg-cyber-panel/40'
              }`}
            >
              {isActive && (
                <>
                  <span className="absolute -top-1 left-0 text-[10px] text-cyber-green">┌</span>
                  <span className="absolute -top-1 right-0 text-[10px] text-cyber-green">┐</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-cyber-green shadow-[0_0_6px_#00FF66]" />
                </>
              )}
              {tab.label}
            </button>
          );
        })}
      </nav>

      {/* Right: NOW PLAYING Widget */}
      <div className="hidden lg:flex items-center gap-3 bg-[#050B14] border border-cyber-green/25 rounded px-3 py-1.5 shadow-[0_0_10px_rgba(0,255,102,0.08)]">
        <div className="relative flex items-center justify-center w-7 h-7 rounded bg-cyber-dark border border-cyber-green/30">
          <Disc3
            className={`w-4 h-4 text-cyber-green ${
              isPlaying ? 'animate-spin' : ''
            }`}
            style={{ animationDuration: '4s' }}
          />
        </div>

        <div className="flex flex-col text-[10px] leading-tight">
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] text-cyber-green uppercase font-semibold">NOW_PLAYING</span>
            <span className="text-gray-400">|</span>
            <span className="text-white font-medium truncate max-w-[110px]">
              {currentTrack.artist}
            </span>
          </div>
          <span className="text-cyber-muted truncate max-w-[120px] text-[10px]">
            {currentTrack.title}
          </span>
          {/* Audio Progress Scrubber */}
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[8px] text-cyber-muted">{formatTime(currentTime)}</span>
            <div className="w-16 h-1 bg-[#1A2638] rounded-full overflow-hidden">
              <div
                className="h-full bg-cyber-green shadow-[0_0_4px_#00FF66]"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-[8px] text-cyber-muted">{formatTime(currentTrack.duration)}</span>
          </div>
        </div>

        {/* Audio Controls */}
        <div className="flex items-center gap-1 ml-1">
          <button
            onClick={() => {}}
            className="text-cyber-muted hover:text-cyber-green transition p-0.5"
            title="Previous"
          >
            <SkipBack className="w-3 h-3" />
          </button>
          <button
            onClick={togglePlay}
            className="w-5 h-5 rounded-full bg-cyber-green text-black flex items-center justify-center shadow-[0_0_8px_#00FF66] hover:scale-105 transition"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-2.5 h-2.5 fill-black" />
            ) : (
              <Play className="w-2.5 h-2.5 fill-black ml-0.5" />
            )}
          </button>
          <button
            onClick={() => {}}
            className="text-cyber-muted hover:text-cyber-green transition p-0.5"
            title="Next"
          >
            <SkipForward className="w-3 h-3" />
          </button>
        </div>
      </div>
    </header>
  );
};
