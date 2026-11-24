import { create } from 'zustand';

export interface AudioTrack {
  id: string;
  title: string;
  artist: string;
  src: string;
  duration: number; // in seconds
}

interface AudioState {
  isPlaying: boolean;
  currentTrack: AudioTrack;
  currentTime: number;
  volume: number;
  isMuted: boolean;

  // Actions
  togglePlay: () => void;
  setIsPlaying: (val: boolean) => void;
  setCurrentTime: (time: number) => void;
  setVolume: (vol: number) => void;
  toggleMute: () => void;
}

export const useAudioStore = create<AudioState>((set) => ({
  isPlaying: false,
  currentTrack: {
    id: 'track-1',
    title: 'Bones',
    artist: 'Imagine Dragons',
    src: 'https://cdn.freesound.org/previews/612/612610_5674468-lq.mp3', // Synth ambient fallback
    duration: 165, // 02:45
  },
  currentTime: 84, // 01:24 as shown in MOCKUP-001
  volume: 0.8,
  isMuted: false,

  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setIsPlaying: (val) => set({ isPlaying: val }),
  setCurrentTime: (time) => set({ currentTime: time }),
  setVolume: (vol) => set({ volume: vol }),
  toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
}));
