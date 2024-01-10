"use client";

const Header = () => {
  // const [currentImage, setCurrentImage] = useState(0);

  return (
    <div>
      {/* Top */}
      <div className='relative -z-10  h-24 sm:h-60 w-full'>
        <img
          src='/images/image.jpg'
          alt='Background'
          className=' absolute h-full w-full object-cover pb-4 opacity-40 blur-xl'
        />
      </div>
      <div className='relative -top-9 z-10 flex w-full justify-center'>
        <div className='absolute  border-spacing-4 animate-border rounded-full border-4 border-green-500 bg-white bg-gradient-to-r from-red-500  via-purple-500 to-blue-500 bg-[length:400%_400%] p-1'>
          <img
            src='/images/avatar-ed.png'
            alt='edndacomputer'
            className='h-20 w-20 rounded-full object-cover'
          />
        </div>
      </div>
      {/* Main Section */}
    </div>
  );
};

export default Header;
