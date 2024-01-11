import React from "react";
import { PiGlobeSimpleThin, PiPhoneLight } from "react-icons/pi";
import Link from "next/link";
import siteConfig from "@/lib/siteConfig";

const FrontPageContact = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-x-7 sm:flex-row">
      <Link
        href={"https://wwww.edndacomputer.xyz"}
        className="flex items-center gap-x-2 gap-y-4 rounded-xl p-1 px-2 transition-all duration-100 ease-in hover:bg-neutral-900">
        <PiGlobeSimpleThin className="h-8 w-8 text-xl text-neutral-400" />
        <p className="font-Intermedium text-white">{siteConfig.url}</p>
      </Link>

      <Link
        href="tel:+18055858602"
        className="flex cursor-pointer  items-center  gap-x-2 rounded-xl p-1 px-2 transition-all duration-100 ease-in hover:bg-neutral-900">
        <PiPhoneLight className="h-8 w-8 text-xl text-neutral-400" />
        <p className="font-Intermedium text-white">{siteConfig.phoneNumber}</p>
      </Link>
    </div>
  );
};

export default FrontPageContact;
