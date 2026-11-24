export type OSPhase = 'idle' | 'ignition' | 'booting' | 'desktop';

export type NavTabId = 'home' | 'about' | 'projects' | 'gallery' | 'mind_dump' | 'music' | 'contact';

export interface TelemetryData {
  cpu: number;
  memory: number;
  disk: number;
  uptime: number; // in seconds
  coffee: number;
  sleep: number;
  creativity: string;
}

export interface SystemAlert {
  id: string;
  type: 'warning' | 'info' | 'critical';
  title: string;
  message: string;
  timestamp: string;
}
