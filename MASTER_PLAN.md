# ABYAN.OS — Master Architecture & Project Plan

> **System Designation:** ABYAN.OS v2.7.1  
> **Classification:** Futuristic Interactive Digital Operating System / Personal Portfolio  
> **Visual Reference:** `MOCKUP-001.pdf` (Pages 1 & 2)  
> **Architect & Decision Maker:** Mohammed Abyan Kalkeri  

---

## 1. Executive Summary & Vision

**ABYAN.OS** is a digital operating system disguised as an interactive portfolio. It transforms the conventional personal portfolio into an immersive, cyberpunk command-center experience. Rather than browsing a standard static webpage, the user boots up a digital machine, observes hardware telemetry, interacts with an AI cyber-companion (**Sir Mewnon**), controls a background audio subsystem, enters terminal commands, and navigates projects through modular bento-style OS panels.

---

## 2. Core Architecture & Technology Stack

```
+--------------------------------------------------------------------------+
|                            USER INTERACTION                              |
+--------------------------------------------------------------------------+
                                     |
                                     v
+--------------------------------------------------------------------------+
|                  OS LIFECYCLE STATE MACHINE (Zustand)                   |
|   [ SYSTEM_IDLE ] ---> [ POWER_IGNITION ] ---> [ BOOT_SEQUENCE ]        |
|                                                      |                   |
|                                                      v                   |
|                                             [ DESKTOP_READY ]            |
+--------------------------------------------------------------------------+
                                     |
                                     v
+--------------------------------------------------------------------------+
|                       CORE RUNTIME ENGINE & UI                           |
|  +--------------------+  +----------------------+  +------------------+  |
|  | Next.js App Router |  | Framer Motion & CSS  |  | HTML5 Canvas FX  |  |
|  | (SSG/SSR + Routing)|  | (HUD UI & Layouts)   |  | (Waveforms/Burst)|  |
|  +--------------------+  +----------------------+  +------------------+  |
|  +--------------------+  +----------------------+  +------------------+  |
|  | Web Audio / Howler |  | Tailwind CSS Tokens  |  | Mini-Terminal CLI|  |
|  | (BGM & SFX Engine) |  | (Neon & Scanlines)   |  | (Interactive)    |  |
|  +--------------------+  +----------------------+  +------------------+  |
+--------------------------------------------------------------------------+
```

### 2.1 Technology Rationale
* **Next.js 14/15 (App Router) + React 18/19:** Provides optimal performance through Static Site Generation (SSG), dynamic nested routing for deep links (e.g. `/projects/[slug]`), and fast image optimization (`next/image`).
* **TypeScript:** Ensures strict typing for system telemetry, window management, audio track metadata, and CLI commands.
* **Tailwind CSS + Custom CSS Variables:** Atomic utility styling with dynamic theme variables for neon glows, grid borders, and CRT scanlines.
* **Framer Motion:** High-performance layout animations, spring physics for window minimization, and stage-by-stage boot loader sequencing.
* **Zustand:** Ultra-lightweight global store managing OS lifecycle, audio player, active windows, and hardware telemetry.
* **HTML5 Canvas:** Renders live oscilloscope hardware waveforms (CPU, Memory, Disk) and the power-activation radial burst without DOM overhead.
* **Howler.js / Web Audio API:** Manages interface sound effects (clicks, typing, boot hum) and the persistent background music player.

---

## 3. Design System & Cyberpunk HUD Tokens

### 3.1 Color Palette
```css
:root {
  /* Surface & Background */
  --os-black-void: #05070B;
  --os-surface-dark: #0A0E17;
  --os-panel-bg: rgba(10, 14, 23, 0.85);
  --os-panel-border: rgba(0, 255, 102, 0.2);
  --os-panel-border-cyan: rgba(0, 240, 255, 0.2);
  
  /* Primary Cyber Accents */
  --os-neon-green: #00FF66;
  --os-neon-cyan: #00F0FF;
  --os-neon-amber: #FFB800;
  --os-neon-purple: #BD00FF;
  --os-neon-red: #FF3366;
  
  /* Text & Telemetry */
  --os-text-primary: #F0F6FC;
  --os-text-muted: #8B949E;
  --os-text-dim: #484F58;
}
```

### 3.2 Typography Hierarchy
* **HUD Display & Main Headlines:** `Orbitron` / `Space Grotesk` (uppercase, geometric, high-tech).
* **Terminal & Telemetry:** `JetBrains Mono` / `Space Mono` (monospace, crisp readability).
* **General UI & Descriptions:** `Inter` / `Plus Jakarta Sans` (clean, neutral sans-serif).

---

## 4. System Components & Layout Breakdown

### 4.1 Activation & Boot Journey (MOCKUP-001 Page 1)
1. **State 0: System Idle (`SYSTEM_IDLE`)**
   * Central sci-fi circular power reactor button with pulsing green emblem (`⏻`).
   * Ambient dark void with subtle floating micro-particles.
   * Status prompt: `[ SYSTEM_IDLE ]` / `PRESS TO INITIALIZE`.
2. **State 1: Power Ignition (`POWER_IGNITION`)**
   * Triggered on button click (satisfies user interaction required for Web Audio autoplay).
   * High-intensity radial energy burst rendered on HTML5 Canvas with cyan/green light trails and lens flare.
3. **State 2: 4-Stage Boot Loader (`BOOT_SEQUENCE`)**
   * **Stage 1 (Initializing Modules):** Checklist verification (`SYSTEM FILES`, `USER PROFILE`, `PROJECTS DATABASE`, `MEMORIES`, `OVERTHINKING MODULE`, `CAFFEINE LEVELS`). Progress: 34%.
   * **Stage 2 (Synchronizing Personality):** Abyan silhouette reveal with glowing aura and "M.A.K" watermark. Progress: 68%.
   * **Stage 3 (Finalizing Interface):** Circular radial gauge counting to 99%. `ALMOST THERE...`.
   * **Stage 4 (Boot Complete):** Terminal banner: `Welcome back, Abyan. Make today count. > ENTERING SYSTEM`. Transition to desktop.

### 4.2 Desktop Command Center (MOCKUP-001 Page 2)
1. **Top HUD Navigation Bar:**
   * OS Badge: `ABYAN.OS v2.7.1`.
   * Sci-Fi Nav Tabs: `//_HOME`, `/ABOUT`, `/PROJECTS`, `/GALLERY`, `/MIND_DUMP`, `/MUSIC`, `/CONTACT`.
   * **Now Playing Widget:** Track cover thumbnail, title, artist (`Imagine Dragons - Bones`), progress bar with timestamp, and glowing playback controls.
2. **Left Telemetry Sidebar:**
   * `SYSTEM_STATUS`: Live uptime clock, user profile status, coffee and sleep meters.
   * `QUICK ACCESS`: One-click links (`RESUME.DOC`, `GITHUB`, `LINKEDIN`, `INSTAGRAM`, `EMAIL ME`).
   * **Hardware Telemetry:** Canvas-driven real-time oscilloscope graphs for CPU, Memory, and Disk activity.
   * `TODAY'S MOOD`: Pixel mascot status indicator (`SHIP IT.`).
3. **Main Dashboard Bento Grid:**
   * **Hero Header:** `HELLO, I'M ABYAN_` with typing cursor, bio summary, and quick CTA buttons (`EXPLORE MY WORK ->`, `VIEW SOURCE <GITHUB/>`).
   * **Sir Mewnon Companion:** High-tech cyber-armored cat guardian with interactive speech bubble (`Meow meow! Welcome, human. 🐾`).
   * **/ABOUT_ME Panel:** Concise background story, cyberpunk photography, and read story trigger.
   * **/PROJECT_DATABASE Panel:** Interactive card carousel featuring highlighted projects with tags, descriptions, and view-all modal.
   * **/RANDOM_THOUGHT.EXE:** Terminal quote generator with shuffle button.
   * **/SYSTEM_ALERTS:** Snarky automated health/posture notifications with dismiss action.
4. **Visual Memory Strip (`/VISUAL_MEMORY`):**
   * Horizontal photographic filmstrip displaying personal and travel captures with full-screen lightbox preview.
5. **Bottom Dock System Bar:**
   * Mini Interactive Terminal with command support (`whoami`, `projects`, `clear`, `contact`, `theme`).
   * Current Time (`10:42:18 PM`), Location coordinates (`Bangalore, India`), Social triggers, and Boot Status (`100%`).

---

## 5. Directory Structure Specification

```
src/
├── app/
│   ├── layout.tsx                # App root layout, fonts, meta, audio provider
│   ├── page.tsx                  # Main desktop OS dashboard
│   ├── globals.css               # Design tokens, scanlines, glow filters
│   └── api/                      # Optional endpoints (contact, spotify)
│
├── components/
│   ├── boot/                     # Power & Boot Sequence
│   │   ├── PowerButton.tsx
│   │   ├── EnergyCanvas.tsx
│   │   ├── BootTerminal.tsx
│   │   └── IdentityReveal.tsx
│   │
│   ├── layout/                   # Persistent OS Frame
│   │   ├── DesktopFrame.tsx
│   │   ├── TopNavbar.tsx
│   │   ├── LeftSidebar.tsx
│   │   └── BottomDock.tsx
│   │
│   ├── dashboard/                # Bento Panels
│   │   ├── HeroBanner.tsx
│   │   ├── AboutMePanel.tsx
│   │   ├── ProjectDatabase.tsx
│   │   ├── RandomThoughtCard.tsx
│   │   ├── SystemAlertsCard.tsx
│   │   └── VisualMemoryStrip.tsx
│   │
│   ├── mascot/                   # Sir Mewnon
│   │   ├── SirMewnon.tsx
│   │   └── SpeechBubble.tsx
│   │
│   ├── audio/                    # Sound System
│   │   ├── MusicPlayer.tsx
│   │   └── sfx.ts
│   │
│   ├── telemetry/                # Hardware Graphs
│   │   ├── Oscilloscope.tsx
│   │   └── MetricsDisplay.tsx
│   │
│   └── terminal/                 # Mini Console
│       ├── MiniTerminal.tsx
│       └── commands.ts
│
├── data/                         # Static Content & Metadata
│   ├── projects.ts
│   ├── quotes.ts
│   ├── photos.ts
│   └── resume.ts
│
├── hooks/                        # Custom React Hooks
│   ├── useUptime.ts
│   ├── useAudioEngine.ts
│   └── useOscilloscope.ts
│
├── store/                        # Global State
│   ├── useOSStore.ts
│   └── useAudioStore.ts
│
└── types/                        # TypeScript Definitions
    ├── os.ts
    ├── project.ts
    └── terminal.ts
```

---

## 6. Verification & Quality Standards

1. **Pixel-Perfect Alignment:** All layout elements, padding, borders, and typography must faithfully reproduce `MOCKUP-001.pdf`.
2. **60 FPS Performance:** All live animations (oscilloscope canvas, particle explosions, glow pulses) must use hardware-accelerated transforms and `requestAnimationFrame`.
3. **Web Audio Compliance:** Audio playback and sound effects must initialize strictly upon user activation (Power Button click).
4. **Responsive Integrity:** While optimized for a wide-screen command center, layout elements must adapt fluidly to smaller displays via responsive CSS Grid configurations.
