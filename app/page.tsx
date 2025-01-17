'use client';

import AddURLButton from '@/features/AddURLButton/AddURLButton';
import AddURLDialog from '@/features/AddURLDialog/AddURLDialog';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const addWebPageCard = (url: string, name: string) => {
    console.log(url, name);
  };

  return (
    <>
      <AddURLButton onClick={() => setIsOpen(true)} />
      <AddURLDialog isOpen={isOpen} onAddURL={addWebPageCard} onClose={() => setIsOpen(false)} />
    </>
  );
}
