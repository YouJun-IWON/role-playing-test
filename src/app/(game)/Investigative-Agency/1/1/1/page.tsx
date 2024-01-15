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
          headerLabel='본인이 피해자인지 공범인지 조사해야 하는데 협조하시면 비대면으로 수사를 할 거고, 비협조시 강압수사를 하게 됩니다. 어떻게 하시겠어요?'
          image='/person/woman-color.svg'
          role='박연진 수사관'
        />

        <Choose
          first='비대면으로 할게요.'
          firstCount={increaseCount}
          firstPoint={increasePoint}
          second='강압수사 받을게요.'
        />
      </div>
    </main>
  );
};

export default InvestigativeAgency;
