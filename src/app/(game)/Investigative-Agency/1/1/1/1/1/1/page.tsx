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
        <Status count={5} newCount={5} />

        <GameMain
          headerLabel='일단 카톡으로 공문 보내드릴테니 녹취를 위해 육성으로 읽어주시고 확인했다고 말씀해주세요.'
          image='/person/man-color.svg'
          role='전재준 검사'
        />

        <Choose
          first='네 알겠습니다.'
          firstCount={increaseCount}
          firstPoint={increasePoint}
          second='보내주세요.'
        />
      </div>
    </main>
  );
};

export default InvestigativeAgency;
