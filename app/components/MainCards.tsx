import React from "react";
import Image from "next/image";
import { PiArrowSquareOutThin } from "react-icons/pi";

const MainCards = () => {
  return (
    <div className='max-w-lg w-full mx-auto bg-[#111111]'>
      <div className=' bg-[#161616] gap-x-6 p-3 rounded-xl mt-8 flex justify-between '>
        <Image
          width={800}
          height={800}
          className='w-10 h-9 rounded-lg object-cover'
          src='/images/icons/document.svg'
          alt=''
        />
        <div className='flex-1  '>
          <h4 className='font-Interegular text-white text-lg text-center md:text-left'>
            Resume
          </h4>
          <p className='font-Interegular text-sm text-neutral-500 hidden md:block'>
            A high quality Framer portfolio template <br /> designed for
            creatives.
          </p>

          <div className='uppercase border border-neutral-800 h-7 w-fit px-2 justify-center text-xs font-Interegular items-center rounded-md text-white mt-3 hidden md:flex'>
            Store
          </div>
        </div>

        <button className='text-white flex items-center gap-x-2 h-fit bg-neutral-800 p-2 rounded-lg'>
          <span className='font-Intermedium text-xs hidden md:block '>
            View
          </span>
          <PiArrowSquareOutThin />
        </button>
      </div>

      <div className=' bg-[#161616] gap-x-6 p-3 rounded-xl mt-3 flex justify-between '>
        <Image
          width={800}
          height={800}
          className='w-10 h-9 rounded-lg object-cover'
          src='/images/icons/cloud.svg'
          alt=''
        />

        <div className='flex-1'>
          <h4 className='font-Interegular text-white text-lg text-center md:text-left'>
            Grainy Gradients
          </h4>
          <p className='font-Interegular text-sm text-neutral-500 hidden md:block'>
            16 free 8k wallpapers for desktop and <br /> mobile.
          </p>

          <div className='uppercase border border-neutral-800 h-7 w-fit px-2  justify-center text-xs font-Interegular items-center rounded-md text-white mt-3 hidden md:flex'>
            Downloadable
          </div>
        </div>

        <button className='text-white flex items-center gap-x-2 h-fit bg-neutral-800 p-2 rounded-lg'>
          <span className='font-Intermedium text-xs hidden md:block'>Get</span>
          <PiArrowSquareOutThin />
        </button>
      </div>

      <div className='bg-[#161616] gap-x-6 p-3 rounded-xl mt-3 flex justify-between '>
        <Image
          width={800}
          height={800}
          className='w-10 h-9 rounded-lg object-cover'
          src='/images/icons/user.svg'
          alt=''
        />
        <div className='flex-1'>
          <h4 className='font-Interegular text-white text-lg text-center md:text-left'>
            AR & Design
          </h4>
          <p className='font-Interegular text-sm text-neutral-500 hidden md:block'>
            Opportunities and challenges for designers <br /> working with AR.
          </p>

          <div className='uppercase border border-neutral-800 h-7 w-fit px-2  justify-center text-xs font-Interegular items-center rounded-md text-white mt-3 hidden md:flex'>
            Blog post
          </div>
        </div>

        <button className='text-white flex items-center gap-x-2 h-fit bg-neutral-800 p-2 rounded-lg'>
          <span className='font-Intermedium text-xs hidden md:block'>Read</span>
          <PiArrowSquareOutThin />
        </button>
      </div>
    </div>
  );
};

export default MainCards;
