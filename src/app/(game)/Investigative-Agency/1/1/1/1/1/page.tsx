'use client';
import PhoneCall from '@/components/call/call';
import { Choose } from '@/components/choose-card/choose';
import GameMain from '@/components/main-card/main-card';
import Status from '@/components/status/Status';
import { useCounterStore, usePointStore } from '@/lib/store/useCounter';

import { useState } from 'react';

const InvestigativeAgency = () => {
  const [call, setCall] = useState(true);

  const number = '010-5678-1234';

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
          <Status count={5} newCount={5} />

          <GameMain
            headerLabel='문동은씨 사건을 맡게 된 전재준 검사입니다. 제 말대로 잘 따라오시면 피해자 입증은 문제 없을 겁니다. 일단 이 번호 카카오톡에 등록하고 지시를 따라주세요. 가장 중요한 건 타인에게 절대 발설하면 안 된다는 겁니다.'
            image='/person/man-color.svg'
            role='전재준 검사'
          />

          <Choose
            first='네, 알겠습니다.'
            firstCount={increaseCount}
            firstPoint={increasePoint}
            second='검사님 신원을 알 수 있을까요?'
          />
        </div>
      )}
    </main>
  );
};

export default InvestigativeAgency;
