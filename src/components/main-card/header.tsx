interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => {
  return (
    <div className='w-full flex flex-col gap-y-4 items-center justify-center'>
      <h1 className='text-xl text-center font-semibold'>{label}</h1>
    </div>
  );
};

export default Header;
