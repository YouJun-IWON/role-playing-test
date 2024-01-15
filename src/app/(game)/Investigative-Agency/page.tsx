'use client';
import PhoneCall from '@/components/call/call';
import { Choose } from '@/components/choose-card/choose';
import GameMain from '@/components/main-card/main-card';
import Status from '@/components/status/Status';
import { useCounterStore, usePointStore } from '@/lib/store/useCounter';

import { useState } from 'react';

const InvestigativeAgency = () => {
  const [call, setCall] = useState(true);

  const number = '010-1234-5678';

  const { increaseCount } = useCounterStore();

  const { increasePoint } = usePointStore();

  return (
    <main>
      {call ? (
        <div>
          <div className='bg-gradient-to-b from-[#011627] to-[#082a4d] absolute inset-0 h-full' />
          <PhoneCall setCall={setCall} number={number} />
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center gap-6'>
          <Status count={0} newCount={0} />

          <GameMain
            headerLabel='여보세요. 중앙지방검찰청 박연진 수사관입니다. 문동은씨 맞으시죠?'
            image='/person/woman-color.svg'
            role='박연진 수사관'
          />

          <Choose
            first='네'
            firstCount={increaseCount}
            firstPoint={increasePoint}
            second='아니요'
          />
        </div>
      )}
    </main>
  );
};

export default InvestigativeAgency;
