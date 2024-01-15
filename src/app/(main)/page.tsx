import { Button } from '@/components/ui/button';
import StartButton from './_components/start-button';

export default function Home() {
  return (
    <main className='flex h-full flex-col items-center justify-center '>
      <div className='space-y-6 text-center'>
        <h1 className='text-6xl font-semibold text-white drop-shadow-md'>
          📞 보이스 피싱 연습
        </h1>

        <p className='text-white text-lg '>
          AI를 활용해 실제 보이스 피싱과 최대한 가까운 환경에서
          <br /> 다양한 사례들을 체험해 볼 수 있다.
        </p>

        <div>
          <StartButton>
            <Button variant='secondary' size='lg' className='text-xl'>
              시작하기
            </Button>
          </StartButton>
        </div>
      </div>
    </main>
  );
}
