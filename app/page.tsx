'use client';

import AddURLButton from '@/features/AddURLButton/AddURLButton';
import AddURLDialog from '@/features/AddURLDialog/AddURLDialog';
import { overlay } from 'overlay-kit';

export default function Home() {
  const addWebPageCard = (url: string, name: string) => {
    console.log(url, name);
  };

  return (
    <>
      <AddURLButton
        onClick={() =>
          overlay.open(({ isOpen, close, unmount }) => {
            return (
              <AddURLDialog
                isOpen={isOpen}
                onAddURL={addWebPageCard}
                onClose={close}
                onExit={unmount}
              />
            );
          })
        }
      />
    </>
  );
}
