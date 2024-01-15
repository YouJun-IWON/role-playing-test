'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardDescription,
} from '@/components/ui/card';
import Header from './header';

import Content from './content';

interface GameWrapperProps {
  headerLabel: string;
  image: string;

  role: string;
}

const GameMain = ({ headerLabel, image, role }: GameWrapperProps) => {
  return (
    <Card className='w-[400px] shadow-md flex flex-col items-center justify-center  border-0'>
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent className='w-full bg-brown-100'>
        <Content image={image} />
      </CardContent>

      <CardFooter className='text-lg font-bold'>{role}</CardFooter>
    </Card>
  );
};

export default GameMain;
