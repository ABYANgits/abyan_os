'use client';

import React, { useState } from 'react';
import { useOSStore } from '@/store/useOSStore';
import { FEATURED_PROJECTS } from '@/data/projects';
import { Database, ArrowRight, ExternalLink } from 'lucide-react';

export const ProjectDatabase: React.FC = () => {
  const { setActiveTab } = useOSStore();
  const [activePageIndex, setActivePageIndex] = useState(0);

  return (
    <div className="cyber-panel p-4 rounded w-full relative">
      <div className="tech-bracket-tl" />
      <div className="tech-bracket-tr" />
      <div className="tech-bracket-bl" />
      <div className="tech-bracket-br" />

      {/* Header with Title and View All */}
      <div className="flex items-center justify-between border-b border-cyber-green/15 pb-2 mb-3">
        <div className="flex items-center gap-2">
          <Database className="w-3.5 h-3.5 text-cyber-green" />
          <span className="text-[11px] font-bold text-cyber-green uppercase tracking-wider">
            /PROJECT_DATABASE
          </span>
        </div>
        <button
          onClick={() => setActiveTab('projects')}
          className="flex items-center gap-1.5 text-[10px] text-cyber-cyan hover:underline font-mono tracking-wider font-semibold"
        >
          <span>VIEW ALL (17)</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* Projects Grid / Carousel Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {FEATURED_PROJECTS.slice(0, 3).map((project) => (
          <div
            key={project.id}
            className="bg-[#091120] border border-cyber-green/20 hover:border-cyber-green/50 rounded p-3 flex flex-col justify-between transition-all duration-200 group"
          >
            <div>
              {/* Project Number & Tag */}
              <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                <span className="text-cyber-green font-bold text-xs">{project.number}</span>
                <span className="text-[9px] px-1.5 py-0.5 bg-cyber-green/10 text-cyber-green border border-cyber-green/30 rounded uppercase font-semibold">
                  {project.tag}
                </span>
              </div>

              {/* Title */}
              <h4 className="text-xs font-display font-bold text-white tracking-wide uppercase line-clamp-1 group-hover:text-cyber-green transition">
                {project.title}
              </h4>

              {/* Graphical Project Preview Box */}
              <div className="w-full h-24 my-2.5 rounded bg-[#060D18] border border-cyber-green/15 overflow-hidden relative flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(#00FF66_1px,transparent_1px)] [background-size:8px_8px] opacity-20" />

                {/* Conceptual Vector Graphics for each project */}
                {project.id === 'abnormal-activity-detection' && (
                  <div className="relative flex flex-col items-center">
                    <div className="w-16 h-10 border border-cyber-red/80 rounded relative flex items-center justify-center">
                      <span className="text-[7px] text-cyber-red font-mono absolute top-0.5 left-1">
                        ANOMALY: 94.2%
                      </span>
                      <div className="w-2 h-2 rounded-full bg-cyber-red animate-ping" />
                    </div>
                    <span className="text-[8px] text-cyber-muted mt-1 font-mono">CV_TENSOR_FLOW</span>
                  </div>
                )}

                {project.id === 'parent-teacher-platform' && (
                  <div className="w-20 h-14 border border-cyber-cyan/50 rounded p-1 bg-[#091529]/80 flex flex-col gap-1">
                    <div className="h-1.5 w-10 bg-cyber-cyan/60 rounded" />
                    <div className="h-1 w-full bg-gray-600/40 rounded" />
                    <div className="h-1 w-14 bg-gray-600/40 rounded" />
                    <div className="flex gap-1 mt-auto">
                      <div className="h-2 w-4 bg-cyber-green/80 rounded text-[5px]" />
                      <div className="h-2 w-4 bg-cyber-amber/80 rounded text-[5px]" />
                    </div>
                  </div>
                )}

                {project.id === '3d-pacman-game' && (
                  <div className="relative flex items-center gap-1">
                    {/* Pacman retro circle */}
                    <div className="w-8 h-8 rounded-full bg-cyber-amber relative clip-path-pacman flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-black absolute top-1.5 right-2" />
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse" />
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-[11px] font-mono text-cyber-muted line-clamp-2 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Open Project CTA */}
            <div className="mt-3 pt-2 border-t border-cyber-green/10 flex justify-between items-center">
              <span className="text-[9px] text-cyber-dim font-mono">STATUS: SHIPPED</span>
              <a
                href={project.github || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[10px] font-mono text-cyber-green group-hover:text-cyber-cyan transition font-semibold"
              >
                <span>OPEN PROJECT</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dots below */}
      <div className="flex justify-center items-center gap-1.5 mt-3">
        {[0, 1, 2].map((idx) => (
          <button
            key={idx}
            onClick={() => setActivePageIndex(idx)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              activePageIndex === idx
                ? 'bg-cyber-green w-4 shadow-[0_0_6px_#00FF66]'
                : 'bg-cyber-dim hover:bg-cyber-muted'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
