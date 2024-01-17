import React from "react";
import Image from "next/image";
import { PiArrowSquareOutThin } from "react-icons/pi";
import Link from "next/link";

const MainCards = () => {
  return (
    <div className="mx-auto w-full max-w-lg bg-card">
      <div className=" mt-8 flex justify-between gap-x-6 rounded-xl bg-card-foreground p-3 ">
        <Image
          width={800}
          height={800}
          className="h-9 w-10 rounded-lg object-cover"
          src="/images/icons/document.svg"
          alt=""
        />
        <div className="flex-1">
          <h4 className="text-center font-Interegular text-lg text-white md:text-left">
            Resume
          </h4>
          <p className="hidden font-Interegular text-sm text-neutral-500 md:block">
            A high quality Framer portfolio template <br /> designed for
            creatives.
          </p>

          <div className="mt-3 hidden h-7 w-fit items-center justify-center rounded-md border border-neutral-800 px-2 font-Interegular text-xs uppercase text-white md:flex">
            Store
          </div>
        </div>

        <Link href="./ed-estrella-resume-2024.pdf" target="_blank">
          <button className="flex h-fit items-center gap-x-2 rounded-lg bg-neutral-800 p-2 text-white">
            <span className="hidden font-Intermedium text-xs md:block ">
              View
            </span>
            <PiArrowSquareOutThin />
          </button>
        </Link>
      </div>

      <div className=" mt-3 flex justify-between gap-x-6 rounded-xl bg-[#161616] p-3 ">
        <Image
          width={800}
          height={800}
          className="h-9 w-10 rounded-lg object-cover"
          src="/images/icons/cloud.svg"
          alt=""
        />

        <div className="flex-1">
          <h4 className="text-center font-Interegular text-lg text-white md:text-left">
            Grainy Gradients
          </h4>
          <p className="hidden font-Interegular text-sm text-neutral-500 md:block">
            16 free 8k wallpapers for desktop and <br /> mobile.
          </p>

          <div className="mt-3 hidden h-7 w-fit items-center justify-center  rounded-md border border-neutral-800 px-2 font-Interegular text-xs uppercase text-white md:flex">
            Downloadable
          </div>
        </div>

        <button className="flex h-fit items-center gap-x-2 rounded-lg bg-neutral-800 p-2 text-white">
          <span className="hidden font-Intermedium text-xs md:block">Get</span>
          <PiArrowSquareOutThin />
        </button>
      </div>

      <div className="mt-3 flex justify-between gap-x-6 rounded-xl bg-[#161616] p-3 ">
        <Image
          width={800}
          height={800}
          className="h-9 w-10 rounded-lg object-cover"
          src="/images/icons/user.svg"
          alt=""
        />
        <div className="flex-1">
          <h4 className="text-center font-Interegular text-lg text-white md:text-left">
            AR & Design
          </h4>
          <p className="hidden font-Interegular text-sm text-neutral-500 md:block">
            Opportunities and challenges for designers <br /> working with AR.
          </p>

          <div className="mt-3 hidden h-7 w-fit items-center justify-center  rounded-md border border-neutral-800 px-2 font-Interegular text-xs uppercase text-white md:flex">
            Blog post
          </div>
        </div>

        <button className="flex h-fit items-center gap-x-2 rounded-lg bg-neutral-800 p-2 text-white">
          <span className="hidden font-Intermedium text-xs md:block">Read</span>
          <PiArrowSquareOutThin />
        </button>
      </div>
    </div>
  );
};

export default MainCards;
