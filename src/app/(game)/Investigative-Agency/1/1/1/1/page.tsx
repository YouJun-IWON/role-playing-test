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
        <Status count={2} newCount={5} />

        <GameMain
          headerLabel='곧 저희 검사님이 곧 전화하실텐데 아무에게도 발설하지 말고 기다리세요.'
          image='/person/woman-color.svg'
          role='박연진 수사관'
        />

        <Choose
          first='네 알겠습니다.'
          firstCount={increaseCount}
          firstPoint={increasePoint}
          second='혹시 제가 직접 검찰청에 연락드릴 수 있을까요?'
        />
      </div>
    </main>
  );
};

export default InvestigativeAgency;
