'use client';

import { OverlayProvider } from 'overlay-kit';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <OverlayProvider>{children}</OverlayProvider>;
};

export default Providers;
