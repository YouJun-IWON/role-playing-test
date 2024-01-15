'use client';

import { Choose } from '@/components/choose-card/choose';
import GameMain from '@/components/main-card/main-card';
import Status from '@/components/status/Status';
import { useCounterStore, usePointStore } from '@/lib/store/useCounter';
import Image from 'next/image';

const InvestigativeAgency = () => {
  const { increaseCount } = useCounterStore();

  const { increasePoint } = usePointStore();

  return (
    <main>
      <div className='flex flex-col items-center justify-center gap-6'>
        <Status count={5} newCount={5} />

        <Image src='/test/kakao.png' width={400} height={400} alt='kakao' />

        <Choose
          first='확인했습니다.'
          firstCount={increaseCount}
          firstPoint={increasePoint}
          second='다 읽었습니다.'
        />
      </div>
    </main>
  );
};

export default InvestigativeAgency;
