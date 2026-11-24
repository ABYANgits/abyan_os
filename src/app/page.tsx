'use client';

import React from 'react';
import { useOSStore } from '@/store/useOSStore';
import { PowerButton } from '@/components/boot/PowerButton';
import { EnergyExplosionCanvas } from '@/components/boot/EnergyExplosionCanvas';
import { BootSequence } from '@/components/boot/BootSequence';
import { DesktopFrame } from '@/components/layout/DesktopFrame';

export default function HomePage() {
  const { phase } = useOSStore();

  switch (phase) {
    case 'idle':
      return <PowerButton />;
    case 'ignition':
      return <EnergyExplosionCanvas />;
    case 'booting':
      return <BootSequence />;
    case 'desktop':
    default:
      return <DesktopFrame />;
  }
}
