
import React, { useEffect, useState } from 'react';

interface WebsiteCardProps {
  url: string;
  name: string;
  onDelete: () => void;
}

const WebsiteCard: React.FC<WebsiteCardProps> = ({ url, name, onDelete }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const response = await fetch(`/api/metadata?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        if (data.og?.image) {
          setThumbnailUrl(data.og.image);
        } else {
          setThumbnailUrl(`https://www.google.com/s2/favicons?sz=64&domain_url=${encodeURIComponent(url)}`);
        }
      } catch (error) {
        console.error('Error fetching metadata:', error);
        setThumbnailUrl(`https://www.google.com/s2/favicons?sz=64&domain_url=${encodeURIComponent(url)}`);
      }
    };

    fetchMetadata();
  }, [url]);

  return (
    <div className="relative group w-[200px] h-[200px]">
      <div className="border rounded-lg w-full h-full flex flex-col">
        {thumbnailUrl ? (
          <img src={thumbnailUrl} alt={name} className="w-full h-3/4 object-cover" />
        ) : (
          <div className="w-full h-3/4 bg-gray-200 animate-pulse" />
        )}
        <p className="p-2 text-center">{name}</p>
      </div>
      <button
        onClick={onDelete}
        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
      >
        X
      </button>
    </div>
  );
};

export default WebsiteCard;
