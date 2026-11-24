'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useOSStore } from '@/store/useOSStore';
import { X, Minus, Terminal as TerminalIcon } from 'lucide-react';

interface TerminalHistoryItem {
  id: string;
  type: 'input' | 'output' | 'error';
  text: string;
}

export const MiniTerminal: React.FC = () => {
  const { terminalOpen, toggleTerminal, reboot, setActiveTab } = useOSStore();
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<TerminalHistoryItem[]>([
    {
      id: 'init-1',
      type: 'output',
      text: 'ABYAN.OS v2.7.1 Interactive Terminal CLI initialized.',
    },
    {
      id: 'init-2',
      type: 'output',
      text: 'Type "help" to list available system commands.',
    },
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (terminalOpen) {
      inputRef.current?.focus();
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalOpen, history]);

  if (!terminalOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    // Add user command to history
    const newItems: TerminalHistoryItem[] = [
      ...history,
      { id: Date.now().toString(), type: 'input', text: `abyan@os:~$ ${trimmed}` },
    ];

    const parts = trimmed.split(' ');
    const command = parts[0].toLowerCase();

    switch (command) {
      case 'help':
        newItems.push({
          id: `${Date.now()}-out`,
          type: 'output',
          text: `AVAILABLE COMMANDS:
  help       - List available commands
  whoami     - System identity & background
  projects   - Show highlighted projects
  skills     - Display technical proficiencies
  contact    - Communication endpoints
  clear      - Clear terminal screen
  reboot     - Restart ABYAN.OS boot sequence
  quote      - Fetch a random system quote
  sudo       - Elevate privileges (try it)`,
        });
        break;

      case 'whoami':
        newItems.push({
          id: `${Date.now()}-out`,
          type: 'output',
          text: `USER: Mohammed Abyan Kalkeri
ROLE: Full-Stack Developer & AI Systems Builder
LOCATION: Bangalore, India
STATUS: Online and shipping products.`,
        });
        break;

      case 'projects':
        newItems.push({
          id: `${Date.now()}-out`,
          type: 'output',
          text: `[01] Abnormal Activity Detection (PyTorch / CV)
[02] Parent-Teacher Communication Platform (Next.js / PostgreSQL)
[03] 3D Pacman Game (OpenGL / C++)
[04] ABYAN.OS Cyberpunk Dashboard (Next.js / Canvas)
Type "open projects" or use the top navigation tab to explore visually.`,
        });
        break;

      case 'skills':
        newItems.push({
          id: `${Date.now()}-out`,
          type: 'output',
          text: `TECH ARSENAL:
  Languages: TypeScript, JavaScript, Python, C++, SQL
  Frontend : React, Next.js, Tailwind CSS, Framer Motion, HTML5 Canvas
  Backend  : Node.js, Express, PostgreSQL, MongoDB, REST/GraphQL
  AI / ML  : PyTorch, OpenCV, Deep Learning, Computer Vision`,
        });
        break;

      case 'contact':
        newItems.push({
          id: `${Date.now()}-out`,
          type: 'output',
          text: `EMAIL   : abyan@example.com
GITHUB  : https://github.com/mohammedabyan
LINKEDIN: https://linkedin.com`,
        });
        break;

      case 'quote':
        newItems.push({
          id: `${Date.now()}-out`,
          type: 'output',
          text: `“Simplicity is the ultimate sophistication.” — Leonardo da Vinci`,
        });
        break;

      case 'sudo':
        newItems.push({
          id: `${Date.now()}-out`,
          type: 'error',
          text: `Nice try, human. Sir Mewnon has revoked all root permissions.`,
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'reboot':
        newItems.push({
          id: `${Date.now()}-out`,
          type: 'output',
          text: 'Initiating system reboot sequence...',
        });
        setHistory(newItems);
        setTimeout(() => {
          reboot();
        }, 800);
        return;

      case 'open':
        if (parts[1] === 'projects') {
          setActiveTab('projects');
          newItems.push({
            id: `${Date.now()}-out`,
            type: 'output',
            text: 'Navigating to /PROJECTS view.',
          });
        } else {
          newItems.push({
            id: `${Date.now()}-out`,
            type: 'error',
            text: `Unknown destination: ${parts[1] || ''}`,
          });
        }
        break;

      default:
        newItems.push({
          id: `${Date.now()}-err`,
          type: 'error',
          text: `Command not recognized: "${trimmed}". Type "help" for a list of commands.`,
        });
        break;
    }

    setHistory(newItems);
    setInputVal('');
  };

  return (
    <div className="fixed bottom-14 left-4 right-4 md:left-24 md:right-24 max-w-4xl mx-auto bg-[#070D18]/95 border border-cyber-green/40 shadow-[0_0_30px_rgba(0,255,102,0.2)] rounded-t-lg z-50 backdrop-blur-md overflow-hidden flex flex-col h-80 font-mono text-xs">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between bg-[#0A1424] border-b border-cyber-green/20 px-3 py-1.5 select-none">
        <div className="flex items-center gap-2 text-cyber-green">
          <TerminalIcon className="w-3.5 h-3.5" />
          <span className="font-bold tracking-wider text-[11px]">
            ABYAN.OS TERMINAL — bash (pty0)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTerminal}
            className="text-cyber-muted hover:text-white p-0.5"
            title="Minimize"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={toggleTerminal}
            className="text-cyber-muted hover:text-cyber-red p-0.5"
            title="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Scrollable Output Area */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2 select-text">
        {history.map((item) => (
          <div key={item.id} className="leading-relaxed">
            {item.type === 'input' && (
              <span className="text-cyber-green font-semibold">{item.text}</span>
            )}
            {item.type === 'output' && (
              <pre className="text-gray-300 font-mono whitespace-pre-wrap">{item.text}</pre>
            )}
            {item.type === 'error' && (
              <span className="text-cyber-red">{item.text}</span>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Interactive Command Input Line */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCommand(inputVal);
        }}
        className="flex items-center gap-2 bg-[#050A12] border-t border-cyber-green/20 px-3 py-2"
      >
        <span className="text-cyber-green font-bold">abyan@os:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type command (e.g. 'help', 'whoami', 'projects')..."
          className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs placeholder:text-cyber-dim"
          autoFocus
        />
        <button
          type="submit"
          className="px-2 py-0.5 text-[10px] bg-cyber-green text-black font-semibold rounded hover:bg-cyber-cyan transition"
        >
          EXEC
        </button>
      </form>
    </div>
  );
};
