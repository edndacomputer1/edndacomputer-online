import React from "react";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";

const LatestPhotos = () => {
  return (
    <div className="mt-3 rounded-xl bg-[#161616] p-2">
      <div className=" flex  justify-between gap-x-6">
        <div className="flex w-full items-center justify-between p-2">
          <p className="font-Intermedium text-white">Latest Video</p>
          <Link
            href={"/"}
            className="flex w-fit items-center gap-x-2 rounded-full bg-neutral-900 p-1 px-2 font-Intermedium text-neutral-300 transition-all duration-300 ease-in hover:bg-neutral-800">
            <TbBrandYoutubeFilled className="text-red-600" />
            <span>@edndacomputer</span>
          </Link>
        </div>
      </div>

      <div className="  mt-3  h-56 w-full">
        <Image
          width={800}
          height={800}
          className="h-full w-full rounded-2xl object-cover"
          src="/images/f.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default LatestPhotos;
