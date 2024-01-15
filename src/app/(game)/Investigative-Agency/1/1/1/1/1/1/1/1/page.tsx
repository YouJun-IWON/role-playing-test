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
        <Status count={5} newCount={10} />

        <GameMain
          headerLabel='협조해주셔서 감사합니다. 일단 추가 피해를 막기 위해 문동은씨 명의 계좌는 다 정지 처리했습니다.'
          image='/person/man-color.svg'
          role='전재준 검사'
        />

        <Choose
          first='아, 그럼 제 계좌를 못 쓰나요?.'
          firstCount={increaseCount}
          firstPoint={increasePoint}
          second='그냥 풀어주시면 안되나요?'
        />
      </div>
    </main>
  );
};

export default InvestigativeAgency;
