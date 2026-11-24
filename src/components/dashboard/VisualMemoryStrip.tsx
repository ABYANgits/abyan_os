'use client';

import React, { useRef } from 'react';
import { useOSStore } from '@/store/useOSStore';
import { Camera, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface MemoryPhoto {
  id: string;
  title: string;
  category: string;
  accent: string;
  sub: string;
}

const MEMORY_PHOTOS: MemoryPhoto[] = [
  {
    id: 'photo-1',
    title: 'URBAN_HORIZON.RAW',
    category: 'Architecture',
    accent: '#00F0FF',
    sub: 'Bangalore Dusk',
  },
  {
    id: 'photo-2',
    title: 'VELOCITY_NIGHT.RAW',
    category: 'Automotive',
    accent: '#00FF66',
    sub: 'Supercar Stance',
  },
  {
    id: 'photo-3',
    title: 'SERENITY_PEAKS.RAW',
    category: 'Landscape',
    accent: '#FFB800',
    sub: 'Mountain Solitude',
  },
  {
    id: 'photo-4',
    title: 'LIGHT_TRAILS.RAW',
    category: 'Long Exposure',
    accent: '#BD00FF',
    sub: 'Highway Stream',
  },
  {
    id: 'photo-5',
    title: 'NEON_DISTRICT.RAW',
    category: 'Street',
    accent: '#00F0FF',
    sub: 'Midnight Alley',
  },
];

export const VisualMemoryStrip: React.FC = () => {
  const { setActiveTab } = useOSStore();
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -220 : 220;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <div className="cyber-panel p-3.5 rounded w-full relative">
      <div className="tech-bracket-tl" />
      <div className="tech-bracket-tr" />
      <div className="tech-bracket-bl" />
      <div className="tech-bracket-br" />

      {/* Header with Navigation Arrows */}
      <div className="flex items-center justify-between border-b border-cyber-green/15 pb-2 mb-2.5">
        <div className="flex items-center gap-2">
          <Camera className="w-3.5 h-3.5 text-cyber-green" />
          <span className="text-[11px] font-bold text-cyber-green uppercase tracking-wider">
            /VISUAL_MEMORY
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => scroll('left')}
            className="p-1 rounded bg-[#091526] text-cyber-muted hover:text-cyber-green border border-cyber-green/20 hover:border-cyber-green transition"
            title="Scroll Left"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-1 rounded bg-[#091526] text-cyber-muted hover:text-cyber-green border border-cyber-green/20 hover:border-cyber-green transition"
            title="Scroll Right"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Scrollable Horizontal Filmstrip */}
      <div
        ref={scrollRef}
        className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none"
        style={{ scrollbarWidth: 'none' }}
      >
        {MEMORY_PHOTOS.map((photo) => (
          <div
            key={photo.id}
            className="min-w-[150px] sm:min-w-[180px] h-28 rounded bg-[#070E1A] border border-cyber-green/20 hover:border-cyber-green p-2 flex flex-col justify-between transition-all duration-200 cursor-pointer group flex-shrink-0"
          >
            {/* Visual Canvas Representation */}
            <div className="w-full h-16 rounded bg-[#050B14] border border-white/5 relative overflow-hidden flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${photo.accent} 0%, transparent 70%)`,
                }}
              />
              <ImageIcon className="w-5 h-5 text-cyber-muted group-hover:scale-110 group-hover:text-cyber-green transition" />
              <div className="absolute top-1 left-1.5 text-[7px] text-cyber-muted font-mono">
                ISO 400 &bull; 1/250s
              </div>
            </div>

            {/* Labels */}
            <div className="flex justify-between items-center text-[10px] font-mono mt-1">
              <span className="text-white font-medium truncate group-hover:text-cyber-green transition">
                {photo.sub}
              </span>
              <span className="text-[8px] text-cyber-muted">{photo.category}</span>
            </div>
          </div>
        ))}

        {/* View All Tile */}
        <div
          onClick={() => setActiveTab('gallery')}
          className="min-w-[110px] h-28 rounded bg-[#0A162B] border border-cyber-cyan/30 hover:border-cyber-cyan flex flex-col items-center justify-center gap-1 cursor-pointer transition text-cyber-cyan hover:scale-105 flex-shrink-0"
        >
          <span className="font-display font-bold text-lg">+23</span>
          <span className="text-[9px] font-mono tracking-wider uppercase font-semibold">
            MORE &gt;
          </span>
        </div>
      </div>
    </div>
  );
};
