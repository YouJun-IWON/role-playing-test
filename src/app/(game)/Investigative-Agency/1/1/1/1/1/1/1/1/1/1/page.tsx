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
        <Status count={10} newCount={20} />

        <GameMain
          headerLabel='지금 은행에 가서 출금이 되는지 확인하고, 만약 된다면 전액 출금하세요. 그리고 수사 협조 시간 2시간을 드릴테니, 제가 말한 장소에 가서 저희와 함께 수사 중인 금융감독원 직원 분께 전달하세요.'
          image='/person/man-color.svg'
          role='전재준 검사'
        />

        <Choose
          first='그럼 제 돈은요?'
          firstCount={increaseCount}
          firstPoint={increasePoint}
          second='지금 은행에 전화해서 확인해볼 수 있을 까요?'
        />
      </div>
    </main>
  );
};

export default InvestigativeAgency;
