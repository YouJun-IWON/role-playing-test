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
        <Status count={10} newCount={10} />

        <GameMain
          headerLabel='네, 혹시 출금이 되면 해당 계좌도 범행에 연루됐다는 뜻입니다.'
          image='/person/man-color.svg'
          role='전재준 검사'
        />

        <Choose
          first='헉, 그러면 어떻게 해요?'
          firstCount={increaseCount}
          firstPoint={increasePoint}
          second='지금 은행에 전화해서 확인해볼 수 있을 까요?'
        />
      </div>
    </main>
  );
};

export default InvestigativeAgency;
