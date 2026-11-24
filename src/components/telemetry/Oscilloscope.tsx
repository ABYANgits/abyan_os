'use client';

import React, { useEffect, useRef } from 'react';

interface OscilloscopeProps {
  label: string;
  percentage: number;
  color?: string;
  height?: number;
}

export const Oscilloscope: React.FC<OscilloscopeProps> = ({
  label,
  percentage,
  color = '#00FF66',
  height = 28,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let offset = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 4;

      const width = canvas.width;
      const midY = canvas.height / 2;
      const amplitude = Math.max(3, (percentage / 100) * (canvas.height / 2.2));
      const frequency = 0.04;

      for (let x = 0; x < width; x++) {
        // Synthesize multi-frequency oscilloscope jitter
        const y =
          midY +
          Math.sin(x * frequency + offset) * amplitude * 0.7 +
          Math.sin(x * 0.08 - offset * 1.5) * (amplitude * 0.3);

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();
      offset += 0.05 + (percentage / 100) * 0.03;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [percentage, color]);

  return (
    <div className="flex flex-col gap-1 w-full my-1.5">
      <div className="flex justify-between items-center text-[10px] font-mono tracking-wider">
        <span className="text-cyber-muted uppercase">{label}</span>
        <span style={{ color }} className="font-semibold">
          {percentage}%
        </span>
      </div>
      <div className="relative w-full bg-[#050B14]/80 border border-cyber-green/15 rounded-sm overflow-hidden px-1 py-0.5">
        <canvas
          ref={canvasRef}
          width={180}
          height={height}
          className="w-full h-[24px] block"
        />
      </div>
    </div>
  );
};
