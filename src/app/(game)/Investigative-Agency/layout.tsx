import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '보이스 피싱 전화를 받고 예방해보세요.',
  description: '해당 사이트로 들어가 보이스 피싱을 체험하고 사전에 예방하세요.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col h-full items-center justify-between'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
