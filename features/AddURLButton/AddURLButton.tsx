'use client';

import { Button } from '@/components/ui/button';

interface AddURLButtonProps {
  onClick: () => void;
}

const AddURLButton = ({ onClick }: AddURLButtonProps) => {
  return (
    <div className="fixed top-4 right-4">
      <Button className="font-bold" onClick={onClick}>
        외부 링크 추가하기
      </Button>
    </div>
  );
};

export default AddURLButton;