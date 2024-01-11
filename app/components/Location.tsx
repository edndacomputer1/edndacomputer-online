"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Link from "next/link";
import React from "react";
import { LiaFlagUsaSolid } from "react-icons/lia";

function Location() {
  const path = usePathname();

  return (
    <div>
      <div className="mt-3 rounded-xl bg-[#161616] p-2 ">
        <div className=" flex  justify-between gap-x-6">
          <div className="flex w-full items-center justify-between p-2">
            <p className="font-Intermedium text-white">
              {path === "/youtuber" ? "Currently in" : "My Location "}
            </p>
            <Link
              href={"/"}
              className="flex w-fit items-center gap-x-2 rounded-full bg-neutral-900 p-1 px-2 font-Intermedium text-neutral-300 transition-all duration-300 ease-in hover:bg-neutral-800">
              <LiaFlagUsaSolid />
              <span className="font-Intermedium">USA</span>
            </Link>
          </div>
        </div>

        <div className="mt-3  h-56 w-full">
          <Image
            width={1000}
            height={1000}
            className="h-full w-full rounded-2xl object-cover"
            // src="/images/mapp.webp"
            src={
              path === "/youtuber" ? "/images/mappp.webp" : "/images/mapp.webp"
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Location;
