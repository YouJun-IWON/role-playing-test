'use client';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

import { HiPhone } from 'react-icons/hi2';

interface PhoneCallProps {
  setCall?: any;
  number?: string;
}

const PhoneCall = ({ setCall, number }: PhoneCallProps) => {
  const router = useRouter();

  return (
    <div className='flex h-[550px] px-10  flex-col items-center justify-between text-white '>
      <div className='z-10 text-center space-y-2'>
        <p className='text-3xl font-semibold '>{number}</p>
        <p className='text-2xl'>대한민국</p>
      </div>

      <div className='flex w-full z-10 justify-between items-center'>
        <button
          onClick={() => router.push('/')}
          className='flex flex-col items-center'
        >
          <HiPhone className='mb-2 h-20 w-20 rounded-full bg-red-600 p-4 rotate-[135deg] text-white' />
          <span className='text-base text-white'>거절</span>
        </button>
        <button onClick={() => setCall(false)} className='flex flex-col items-center'>
          <HiPhone className='mb-2 h-20 w-20 fill-white rounded-full bg-green-500 p-4 text-white' />
          <span className='text-base text-white'>응답</span>
        </button>
      </div>
    </div>
  );
};

export default PhoneCall;
