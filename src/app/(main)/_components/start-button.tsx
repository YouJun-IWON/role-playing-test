'use client';

import { useRouter } from 'next/navigation';

interface StartButtonProps {
  children: React.ReactNode;
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
}

const StartButton = ({
  children,
  mode = 'redirect',
  asChild,
}: StartButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push('/Investigative-Agency');
  };

  if (mode === 'modal') {
    return <span>TODO: Implement modal</span>;
  }

  return (
    <span onClick={onClick} className='cursor-pointer'>
      {children}
    </span>
  );
};

export default StartButton;
