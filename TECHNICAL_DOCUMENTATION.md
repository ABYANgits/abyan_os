# ABYAN.OS — Technical Documentation & Architecture Reference

> **Document Version:** 1.0.0  
> **Target OS:** Modern Chromium / WebKit Browsers (Desktop primary, responsive secondary)  
> **Framework:** Next.js (App Router) + TypeScript + Tailwind CSS  

---

## 1. System Architecture & Lifecycle

The operating system manages four distinct runtime stages governed by a centralized Zustand store (`useOSStore`):

```
       +-----------------------------------------------+
       |             [ SYSTEM_IDLE ]                   |
       |  - Reactor power button glows in dark         |
       |  - Audio engine locked (browser restriction)  |
       +-----------------------------------------------+
                              |
                     User clicks power button
                              v
       +-----------------------------------------------+
       |           [ POWER_IGNITION ]                  |
       |  - Unlocks Web Audio API context              |
       |  - Plays ignition SFX                         |
       |  - Radial canvas particle burst animation     |
       +-----------------------------------------------+
                              |
                     Explosion completes (~1200ms)
                              v
       +-----------------------------------------------+
       |           [ BOOT_SEQUENCE ]                   |
       |  - 4-stage terminal progress pipeline         |
       |  - Progress indicators: 34% -> 68% -> 99%     |
       |  - Identity reveal & "Welcome back, Abyan"    |
       +-----------------------------------------------+
                              |
                     Boot completed (~3500ms)
                              v
       +-----------------------------------------------+
       |           [ DESKTOP_READY ]                   |
       |  - Full HUD mounted                           |
       |  - Telemetry graphs start running             |
       |  - Background music player unlocked           |
       |  - Interactive terminal enabled               |
       +-----------------------------------------------+
```

---

## 2. Global State Stores

### 2.1 OS State Store (`src/store/useOSStore.ts`)
```typescript
export type OSPhase = 'idle' | 'ignition' | 'booting' | 'desktop';

export interface OSStore {
  phase: OSPhase;
  bootProgress: number;
  activeTab: string;
  uptimeSeconds: number;
  terminalOpen: boolean;
  activeWindow: string | null;
  
  // Actions
  pressPower: () => void;
  setBootProgress: (val: number) => void;
  finishBoot: () => void;
  reboot: () => void;
  setActiveTab: (tab: string) => void;
  toggleTerminal: () => void;
  openWindow: (id: string) => void;
  closeWindow: () => void;
}
```

### 2.2 Audio Subsystem Store (`src/store/useAudioStore.ts`)
```typescript
export interface Track {
  title: string;
  artist: string;
  src: string;
  duration: number; // in seconds
  coverUrl?: string;
}

export interface AudioStore {
  isPlaying: boolean;
  currentTrack: Track;
  currentTime: number;
  volume: number;
  isMuted: boolean;
  
  // Actions
  togglePlay: () => void;
  seek: (seconds: number) => void;
  setVolume: (val: number) => void;
  nextTrack: () => void;
  prevTrack: () => void;
}
```

---

## 3. Telemetry Oscilloscope Engine (`src/components/telemetry/Oscilloscope.tsx`)

The CPU, Memory, and Disk hardware monitors in the left sidebar render real-time waveforms using an HTML5 `<canvas>` element driven by `requestAnimationFrame`.

### Mathematical Formulation
To produce the characteristic oscilloscope visual:
$$y(x, t) = A \cdot \sin(k \cdot x + \omega \cdot t) \cdot \text{noise}(x, t) + y_0$$

Where:
* $A$ is the amplitude scaling based on current metric percentage (e.g. 23% CPU $\implies$ lower peak amplitude, 71% Disk $\implies$ heightened amplitude).
* $\omega$ is the horizontal shift velocity.
* `noise(x, t)` adds high-frequency harmonic flutter simulating electronic jitter.

By rendering strictly onto a lightweight `2DContext` with `transform: translateZ(0)`, the graphs achieve consistent 60 FPS performance without triggering DOM recalculations or memory leaks.

---

## 4. Interactive Terminal Command Registry (`src/components/terminal/commands.ts`)

The bottom dock mini-terminal accepts interactive keyboard input and resolves commands through an extensible dispatcher:

```typescript
export interface CommandContext {
  args: string[];
  output: (line: string) => void;
  clear: () => void;
  openTab: (tab: string) => void;
}

export type CommandHandler = (ctx: CommandContext) => void;

export const COMMAND_REGISTRY: Record<string, CommandHandler> = {
  help: ({ output }) => {
    output('ABYAN.OS v2.7.1 System CLI');
    output('Available commands:');
    output('  whoami     - Print profile identity');
    output('  projects   - Display portfolio projects');
    output('  skills     - List technical proficiencies');
    output('  contact    - Retrieve communication channels');
    output('  clear      - Clear terminal screen');
    output('  reboot     - Restart ABYAN.OS boot sequence');
  },
  whoami: ({ output }) => {
    output('> Mohammed Abyan Kalkeri');
    output('> Developer. Problem Solver. Pixel Pusher.');
    output('> Tech enthusiast from Bangalore, India.');
  },
  // Additional commands...
};
```

---

## 5. Styling & Visual Effects Directives

* **CRT Scanline Overlay:** Implemented via a fixed CSS pseudo-element (`pointer-events: none`) using a 2px repeating linear gradient with subtle opacity:
  ```css
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0.15) 1px,
    transparent 1px,
    transparent 2px
  );
  ```
* **Neon Glow Effects:** Applied using layered `drop-shadow` filters rather than heavy blur containers to maintain 60 FPS:
  ```css
  filter: drop-shadow(0 0 8px rgba(0, 255, 102, 0.6))
          drop-shadow(0 0 20px rgba(0, 255, 102, 0.2));
  ```
* **Sci-Fi Border Brackets:** Corners of cards utilize custom CSS `clip-path` or SVG overlay brackets (`//_HOME`, `[ - X ]`, corner tick marks) identical to `MOCKUP-001.pdf`.
