"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { BsFileText } from "react-icons/bs";
import { FcCheckmark } from "react-icons/fc";
import { PiCopy, PiGlobeSimpleThin, PiPhoneLight } from "react-icons/pi";
import { RiVerifiedBadgeFill } from "react-icons/ri";

import LinksComponent from "./Links";

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
    <div className='bg-[#111111] p-3'>
      <div className='mx-auto max-w-lg bg-[#111111] pt-14'>
        <div>
          <div className='items-center text-center'>
            <h3 className='flex items-center justify-center gap-x-2 font-Intermedium text-2xl text-white'>
              edndacomputer
              <RiVerifiedBadgeFill className='text-xl text-[#B5924F]' />
            </h3>
            <div className='mt-3 flex items-center justify-center gap-x-2 font-Interegular text-neutral-500'>
              <p>Est 1985</p>
              <span className='h-[3px] w-[3px] rounded-full bg-neutral-600'></span>
              <p>Ventura, California</p>
              <span className='h-[3px] w-[3px] rounded-full bg-neutral-600'></span>
              <p>He/Him</p>
              <span className='h-[3px] w-[3px] rounded-full bg-neutral-600'></span>
            </div>
          </div>
          Main
          <div>
            <p className='my-3 text-center font-Intermedium text-neutral-500'>
              edndacomputer is a software developer from Ventura, California.
            </p>

            <div className='flex flex-col items-center justify-center gap-x-7 sm:flex-row'>
              <Link
                href={"https://wwww.edndacomputer.xyz"}
                className='flex items-center gap-x-2 gap-y-4 rounded-xl p-1 px-2 transition-all duration-100 ease-in hover:bg-neutral-900'
              >
                <PiGlobeSimpleThin className='h-8 w-8 text-xl text-neutral-400' />
                <p className='font-Intermedium text-white'>edndacomputer.xyz</p>
              </Link>

              <Link
                href='tel:+18055858602'
                className='flex cursor-pointer  items-center  gap-x-2 rounded-xl p-1 px-2 transition-all duration-100 ease-in hover:bg-neutral-900'
              >
                <PiPhoneLight className='h-8 w-8 text-xl text-neutral-400' />
                <p className='font-Intermedium text-white'>805 585-8602</p>
              </Link>
            </div>
          </div>
          <div className='my-6 flex items-center justify-center gap-x-2'>
            <button
              onClick={onCopy}
              className='flex h-10  w-80 items-center justify-center gap-x-3 rounded-lg bg-slate-50 transition-all duration-300 ease-in hover:bg-neutral-100'
            >
              <span className='font-Intermedium '>
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
                    }}
                  >
                    <FcCheckmark className='h-6 w-6 text-emerald-500 transition-all duration-500 ease-in' />
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
                    }}
                  >
                    <PiCopy className='h-4 w-4' />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
          <div className='flex justify-center gap-x-5'>
            {/* <Stories stories={stories} /> */}
          </div>
          <div className='mt-5'>
            <LinksComponent />
          </div>
          <div className='mt-5'>
            <div className='flex h-40 w-full flex-row items-center justify-center'>
              <Link
                href='/ed-estrella-resume-2024.pdf'
                target='_blank'
                rel='noreferrer'
              >
                <button className='inline-block animate-border rounded-2xl bg-white bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] p-1'>
                  <div className='flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 font-bold text-white'>
                    <BsFileText className='h-10 w-10' />{" "}
                    <span className='font-Intermedium'>View Resume</span>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
