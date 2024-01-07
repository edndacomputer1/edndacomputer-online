import React from "react";

const Cards = () => {
  return (
    <div>
      <div className='mt-8 flex justify-between gap-x-6 rounded-xl bg-[#161616]'>
        <img
          src='/images/icons/sunglasses.svg'
          alt=''
          className='h-9 w-10 rounded-lg object-cover'
        />
      </div>
      <div className='flex-1'>
        <h4 className='text-center font-Interegular text-lg text-white md:text-left'>
          Mega
        </h4>
        <p className='hidden font-Interegular text-sm text-neutral-500 md:block'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eros
          magna, laoreet sed ipsum ac, ultricies ultrices elit. Integer
          efficitur pretium ipsum ac fermentum. Fusce finibus malesuada ligula,
          sed aliquam nunc congue id. Fusce facilisis.{" "}
        </p>
        <div className='border-neutral-800 uppercase'></div>
      </div>
    </div>
  );
};

export default Cards;
