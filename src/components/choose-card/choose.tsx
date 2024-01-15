'use client';

import { Button } from '@/components/ui/button';
import { Card } from '../ui/card';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

interface FooterProps {
  first: string;
  second: string;
  firstCount?: (by: number) => void;
  firstPoint?: (by: number) => void;
  secondCount?: (by: number) => void;
  secondPoint?: (by: number) => void;
}

export const Choose = ({
  first,
  second,
  firstCount,
  firstPoint,
  secondCount,
  secondPoint,
}: FooterProps) => {
  const router = useRouter();
  const pathname = usePathname();

  console.log(pathname + '/fe');

  return (
    <Card className='p-2 w-[400px] min-h-[60px] '>
      <div className='grid grid-cols-2 gap-2'>
        <Button
          size='lg'
          className='col-span-1 text-xl py-2 text-balance font-bold h-auto'
          variant='outline'
          onClick={() => {
            firstCount && firstCount(1);
            firstPoint && firstPoint(10);
            router.push(pathname + '/1');
          }}
        >
          {first}
        </Button>
        <Button
          size='lg'
          className='col-span-1 text-xl py-2 text-balance font-bold h-auto'
          disabled
          variant='outline'
          onClick={() => {
            secondCount && secondCount(1);
            secondPoint && secondPoint(10);
            router.push(pathname + '/2');
          }}
        >
          {second}
        </Button>
      </div>
    </Card>
  );
};
