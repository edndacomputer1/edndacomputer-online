"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { PiCopy } from "react-icons/pi";
import { RiVerifiedBadgeFill } from "react-icons/ri";

import LinksComponent from "./Links";
import FrontPageContact from "./FrontPageContact";

const Main = () => {
  const [copied, setCopied] = useState(false);
  const inviteUrl = "edndacomputer@riseup.net";

  const onCopy = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <div className="bg-[#111111] p-3">
      <div className="mx-auto max-w-lg bg-[#111111] pt-14">
        <div>
          <div className="items-center text-center">
            <h3 className="flex items-center justify-center gap-x-2 font-Intermedium text-2xl text-white">
              edndacomputer
              <RiVerifiedBadgeFill className="text-xl text-[#B5924F]" />
            </h3>
            <div className="mt-3 flex items-center justify-center gap-x-2 font-Interegular text-neutral-500">
              <p>Est 1985</p>
              <span className="h-[3px] w-[3px] rounded-full bg-neutral-600"></span>
              <p>Ventura, California</p>
              <span className="h-[3px] w-[3px] rounded-full bg-neutral-600"></span>
              <p>He/Him</p>
              <span className="h-[3px] w-[3px] rounded-full bg-neutral-600"></span>
            </div>
          </div>
          Main
          <div>
            <p className="my-3 text-center font-Intermedium text-neutral-500">
              edndacomputer is a software developer from Ventura, California.
            </p>

            <FrontPageContact />
          </div>
          <div className="my-6 flex items-center justify-center gap-x-2">
            <button
              onClick={onCopy}
              className="flex h-10  w-80 items-center justify-center gap-x-3 rounded-lg bg-slate-50 transition-all duration-300 ease-in hover:bg-neutral-100">
              <span className="font-Intermedium ">
                {copied ? "copied" : "edndacomputer@riseup.net"}
              </span>

              <AnimatePresence>
                {copied ? (
                  <motion.span
                    initial={{ scale: 1 }}
                    animate={{ scale: 0.8 }}
                    exit={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 100,
                    }}>
                    <FcCheckmark className="h-6 w-6 text-emerald-500 transition-all duration-500 ease-in" />
                  </motion.span>
                ) : (
                  <motion.span
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                    }}>
                    <PiCopy className="h-4 w-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
          <div className="flex justify-center gap-x-5">
            {/* <Stories stories={stories} /> */}
          </div>
          <div className="mt-5">
            <LinksComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
