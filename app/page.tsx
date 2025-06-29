'use client';

import { useState } from 'react';
import AddURLButton from '@/features/AddURLButton/AddURLButton';
import AddURLDialog from '@/features/AddURLDialog/AddURLDialog';
import WebsiteCard from '@/features/WebsiteCard/WebsiteCard';
import { overlay } from 'overlay-kit';

interface Website {
  id: number;
  url: string;
  name: string;
}

export default function Home() {
  const [websites, setWebsites] = useState<Website[]>([]);

  const addWebPageCard = (url: string, name: string) => {
    setWebsites([...websites, { id: Date.now(), url, name }]);
  };

  const deleteWebsite = (id: number) => {
    setWebsites(websites.filter((website) => website.id !== id));
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
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {websites.map((website) => (
          <WebsiteCard
            key={website.id}
            url={website.url}
            name={website.name}
            onDelete={() => deleteWebsite(website.id)}
          />
        ))}
      </div>
    </>
  );
}
