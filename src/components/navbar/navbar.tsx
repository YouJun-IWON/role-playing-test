'use client';

import { useCounterStore, usePointStore } from '@/lib/store/useCounter';

const Navbar = () => {
  const { nowCount, totalCount } = useCounterStore();

  const { point } = usePointStore();

  return (
    <div className='flex items-center justify-between w-full p-6 text-white text-2xl'>
      <div>
        {nowCount} / {totalCount}
      </div>

      <div>{point} points</div>
    </div>
  );
};

export default Navbar;
