'use client';

import { Choose } from '@/components/choose-card/choose';
import GameMain from '@/components/main-card/main-card';
import Status from '@/components/status/Status';
import { useCounterStore, usePointStore } from '@/lib/store/useCounter';

const InvestigativeAgency = () => {
  const { increaseCount } = useCounterStore();

  const { increasePoint } = usePointStore();

  return (
    <main>
      <div className='flex flex-col items-center justify-center gap-6'>
        <Status count={0} newCount={2} />

        <GameMain
          headerLabel='88년생 이사라씨 아시나요?'
          image='/person/woman-color.svg'
          role='박연진 수사관'
        />

        <Choose
          first='모르는데요.'
          firstCount={increaseCount}
          firstPoint={increasePoint}
          second='네 압니다.'
        />
      </div>
    </main>
  );
};

export default InvestigativeAgency;
