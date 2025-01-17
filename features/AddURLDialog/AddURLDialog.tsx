'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface AddURLDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAddURL: (url: string, name: string) => void;
}

function AddURLDialog({ isOpen, onClose, onAddURL }: AddURLDialogProps) {
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');

  const clearValues = () => {
    setUrl('');
    setName('');
  };

  const clickAddURLButton = () => {
    if (!url || !name) return;

    onAddURL(url, name);
    clearValues();
    onClose();
  };

  return (
    <DialogContent isOpen={isOpen} onClose={onClose} className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>외부 링크 추가하기</DialogTitle>
        <DialogDescription>URL을 입력해주세요.</DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-4 py-4 px-4">
        <div className="flex items-center gap-4">
          <Label htmlFor="url" className="min-w-10">
            URL
          </Label>
          <Input
            id="url"
            placeholder="https://www.google.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4">
          <Label htmlFor="name" className="min-w-10">
            이름
          </Label>
          <Input
            id="name"
            placeholder="구글"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <Button type="submit" onClick={clickAddURLButton}>
        추가하기
      </Button>
    </DialogContent>
  );
}

export default AddURLDialog;
