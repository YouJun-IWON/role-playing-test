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
        <Status count={2} newCount={2} />

        <GameMain
          headerLabel='이사라씨가 문동은씨 명의로 계좌를 만들어 범죄에 이용했는데 알고 있나요?'
          image='/person/woman-color.svg'
          role='박연진 수사관'
        />

        <Choose
          first='네?'
          firstCount={increaseCount}
          firstPoint={increasePoint}
          second='무슨 말이죠?'
        />
      </div>
    </main>
  );
};

export default InvestigativeAgency;
