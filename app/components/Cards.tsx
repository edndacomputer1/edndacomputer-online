import React from "react";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

const Cards = () => {
  return (
    <div className='mx-auto h-screen max-w-lg w-full'>
      <div className=' bg-[#161616] gap-x-6 p-3 rounded-xl mt-8 flex justify-between '>
        <Image
          width={800}
          height={800}
          className='w-10 h-9 rounded-lg object-cover'
          src='/images/icons/star.svg'
          alt=''
        />
        <div className='flex-1  '>
          <h4 className='font-Interegular text-white text-lg text-center md:text-left'>
            Ultra
          </h4>
          <p className='font-Interegular text-sm text-neutral-500 hidden md:block'>
            A high quality Framer portfolio template <br /> designed for
            creatives.
          </p>

          <div className='uppercase border border-neutral-800 h-7 w-fit px-2 justify-center text-xs font-Interegular items-center rounded-md text-white mt-3 hidden md:flex'>
            Store
          </div>
        </div>
        <Button className='flex text-white gap-x-2 items-center bg-neutral-800 p-2 rounded-lg'>
          <span className='text-sm font-Intermedium hidden md:block'>
            View
            <HiArrowTopRightOnSquare />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Cards;
