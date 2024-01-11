import React from "react";

function Footer() {
  return (
    <div className="bg-[#111111]">
      <div className="items-bg-red-500 mt-6 flex w-full  flex-col justify-center p-3 ">
        <div className="font-Interegular text-neutral-500">
          <span>© {new Date().getFullYear()}</span>
          <span> Portfolio by @edndacomputer</span>
        </div>
        <div className="mt-3 flex items-center gap-x-4 text-white">
          <p className="cursor-pointer transition-all duration-200 ease-in hover:text-neutral-700">
            Purchase Courses
          </p>
          <span className="h-1 w-1 rounded-full bg-white" />
          <p className="cursor-pointer transition-all duration-200 ease-in hover:text-neutral-700">
            Become a Team
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
