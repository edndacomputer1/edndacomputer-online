import React from "react";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { RiVerifiedBadgeFill } from "react-icons/ri";

import Image from "next/image";

const LatestPosts = () => {
  return (
    <section className="mx-auto w-full max-w-lg font-Interegular">
      <div className="mt-3 rounded-xl bg-[#161616] p-2 ">
        <div className=" flex  justify-between gap-x-6 ">
          <div className="flex w-full items-center justify-between p-2">
            <p className="font-Intermedium text-white">Latest Post</p>
            <Link
              href={"/"}
              className="flex w-fit items-center gap-x-3 rounded-full bg-neutral-900 p-1 px-2 font-Intermedium text-neutral-300 transition-all duration-300 ease-in hover:bg-neutral-800">
              <BsTwitterX />
              <span>@edndacomputer</span>
            </Link>
          </div>
        </div>
        <div className="mt-3 rounded-2xl bg-[#1C1C1C] p-3 ">
          <div className="flex gap-x-4">
            <Image
              width={800}
              height={800}
              className="h-11 w-11 rounded-full"
              src="/images/206.png"
              alt=""
            />
            <div>
              <div className="flex items-center gap-x-2 ">
                <p className="font-Intermedium text-base text-white">
                  edndacomputer{" "}
                </p>
                <RiVerifiedBadgeFill className="text-xl text-[#26a8ff]" />
              </div>
              <div className="flex items-center gap-x-2 font-Interegular">
                <span className="text-neutral-400">@joe</span>
                <span className="h-[3px] w-[3px]  rounded-full bg-neutral-600" />
                <button className="font-Intermedium text-sm text-blue-600">
                  Follow
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="my-3 text-base text-white">
              Propting in AI = The new writing
            </h3>
            <div className="flex items-center gap-x-2 font-Intermedium text-sm text-neutral-400">
              <p className="">10:39 PM </p>
              <span className="h-[3px] w-[3px]  rounded-full bg-neutral-600" />
              <p>Jul 23, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
