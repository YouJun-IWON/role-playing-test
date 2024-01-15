'use client';

import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useEffect, useState } from 'react';

interface StatusProps {
  count: number;
  newCount: number;
}

const Status = ({ count, newCount }: StatusProps) => {
  const [progress, setProgress] = useState(count);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(newCount), 500);
    return () => clearTimeout(timer);
  }, [newCount]);

  return (
    <Card className='w-full flex items-center justify-center'>
      <Progress value={progress} className='w-[100%]' />
    </Card>
  );
};

export default Status;
