'use client';

import React, { useState } from 'react';
import { SYSTEM_QUOTES } from '@/data/quotes';
import { Quote, Shuffle, Minus, X } from 'lucide-react';

export const RandomThoughtCard: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const currentQuote = SYSTEM_QUOTES[index];

  const shuffleQuote = () => {
    setAnimating(true);
    setIndex((prev) => (prev + 1) % SYSTEM_QUOTES.length);
    setTimeout(() => setAnimating(false), 200);
  };

  return (
    <div className="cyber-panel p-3.5 rounded flex flex-col justify-between h-full relative group">
      <div className="tech-bracket-tl" />
      <div className="tech-bracket-tr" />
      <div className="tech-bracket-bl" />
      <div className="tech-bracket-br" />

      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-cyber-green/15 pb-1.5 mb-2">
        <div className="flex items-center gap-1.5">
          <Quote className="w-3.5 h-3.5 text-cyber-purple" />
          <span className="text-[10px] font-bold text-cyber-purple uppercase tracking-wider">
            /RANDOM_THOUGHT.EXE
          </span>
        </div>
        <div className="flex items-center gap-1 text-cyber-muted text-[10px]">
          <Minus className="w-2.5 h-2.5" />
          <X className="w-2.5 h-2.5" />
        </div>
      </div>

      {/* Quote Body */}
      <div className={`py-2 px-1 transition-opacity duration-200 ${animating ? 'opacity-30' : 'opacity-100'}`}>
        <p className="text-xs sm:text-sm font-mono text-white italic leading-relaxed">
          &ldquo;{currentQuote.quote}&rdquo;
        </p>
        <span className="block mt-2 text-[10px] text-cyber-green font-semibold tracking-wider uppercase text-right">
          — {currentQuote.author}
        </span>
      </div>

      {/* Footer with Shuffle Action */}
      <div className="mt-2 pt-1.5 border-t border-cyber-green/10 flex justify-end">
        <button
          onClick={shuffleQuote}
          className="flex items-center gap-1.5 text-[9px] font-mono text-cyber-cyan hover:text-white px-2 py-0.5 rounded border border-cyber-cyan/30 hover:border-cyber-cyan transition uppercase font-semibold"
        >
          <Shuffle className="w-2.5 h-2.5" />
          <span>NEW QUOTE</span>
        </button>
      </div>
    </div>
  );
};
