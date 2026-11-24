'use client';

import React, { useEffect, useRef } from 'react';
import { useOSStore } from '@/store/useOSStore';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  color: string;
  alpha: number;
}

export const EnergyExplosionCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const setOSPhase = useOSStore((s) => s.setBootProgress);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle high DPI
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const centerX = width / 2;
    const centerY = height / 2;

    const particles: Particle[] = [];
    const colors = ['#00FF66', '#00F0FF', '#38BDF8', '#FFFFFF', '#10B981'];

    // Generate radial burst particles
    for (let i = 0; i < 180; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 18 + 6;
      particles.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: Math.random() * 80 + 20,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
      });
    }

    let animationFrameId: number;
    let startTime = Date.now();

    const render = () => {
      const elapsed = Date.now() - startTime;
      ctx.fillStyle = 'rgba(5, 7, 11, 0.25)';
      ctx.fillRect(0, 0, width, height);

      // Render radial glow flare at center
      const flareRadius = Math.min(width, height) * 0.4 * (elapsed / 600);
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        flareRadius
      );
      gradient.addColorStop(0, 'rgba(0, 255, 102, 0.8)');
      gradient.addColorStop(0.3, 'rgba(0, 240, 255, 0.5)');
      gradient.addColorStop(1, 'rgba(5, 7, 11, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, flareRadius, 0, Math.PI * 2);
      ctx.fill();

      // Render particle rays
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha = Math.max(0, 1 - elapsed / 1100);

        ctx.strokeStyle = p.color;
        ctx.lineWidth = 2;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.vx * 3, p.y - p.vy * 3);
        ctx.stroke();
      });

      ctx.globalAlpha = 1;

      if (elapsed < 1100) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        // Transition to booting phase
        useOSStore.setState({ phase: 'booting', bootProgress: 10 });
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [setOSPhase]);

  return (
    <div className="fixed inset-0 z-50 bg-[#05070B] overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-widest uppercase glow-text-green animate-ping opacity-75">
          REACTOR IGNITION
        </h1>
      </div>
    </div>
  );
};
