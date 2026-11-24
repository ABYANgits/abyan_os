import { create } from 'zustand';
import { OSPhase, NavTabId } from '@/types/os';

interface OSState {
  phase: OSPhase;
  bootProgress: number;
  activeTab: NavTabId;
  uptimeSeconds: number;
  terminalOpen: boolean;
  activeModal: string | null;
  audioUnlocked: boolean;

  // Actions
  pressPower: () => void;
  setBootProgress: (val: number) => void;
  finishBoot: () => void;
  reboot: () => void;
  setActiveTab: (tab: NavTabId) => void;
  toggleTerminal: () => void;
  openModal: (modalId: string) => void;
  closeModal: () => void;
  tickUptime: () => void;
}

export const useOSStore = create<OSState>((set) => ({
  phase: 'idle',
  bootProgress: 0,
  activeTab: 'home',
  uptimeSeconds: 13338, // Starts at 03:42:18 as in MOCKUP-001
  terminalOpen: false,
  activeModal: null,
  audioUnlocked: false,

  pressPower: () =>
    set({
      phase: 'ignition',
      audioUnlocked: true,
    }),

  setBootProgress: (val: number) =>
    set({
      bootProgress: Math.min(100, Math.max(0, val)),
    }),

  finishBoot: () =>
    set({
      phase: 'desktop',
      bootProgress: 100,
    }),

  reboot: () =>
    set({
      phase: 'idle',
      bootProgress: 0,
    }),

  setActiveTab: (tab: NavTabId) =>
    set({
      activeTab: tab,
    }),

  toggleTerminal: () =>
    set((state) => ({
      terminalOpen: !state.terminalOpen,
    })),

  openModal: (modalId: string) =>
    set({
      activeModal: modalId,
    }),

  closeModal: () =>
    set({
      activeModal: null,
    }),

  tickUptime: () =>
    set((state) => ({
      uptimeSeconds: state.uptimeSeconds + 1,
    })),
}));
