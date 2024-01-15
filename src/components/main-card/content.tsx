import Image from 'next/image';

interface ContentProps {
  image: string;
}

const Content = ({ image }: ContentProps) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='border w-[300px] h-[300px] flex items-center justify-center rounded-xl bg-slate-500 shadow-lg'>
        <Image src={image} width={250} height={250} alt='person' />
      </div>
    </div>
  );
};

export default Content;
