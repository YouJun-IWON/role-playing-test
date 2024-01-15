import type { Metadata } from 'next';
import { Inter  } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: '보이스 피싱 AI 롤 플레잉',
  description:
    '보이스 피싱 AI 롤 플레잉를 통해 실제와 가까운 환경에서 보이스 피싱을 체험하고 예방하세요.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen font-[inter] antialiased bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800',
          
        )}
      >
        {children}
      </body>
    </html>
  );
}
