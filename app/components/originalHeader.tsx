"use client";

import React, { useRef, useState } from "react";

import Link from "next/link";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import {
  PiBellSimple,
  PiPhoneLight,
  PiGlobeSimpleThin,
  PiUploadThin,
  PiArrowSquareOutThin,
  PiXCircleLight,
  PiFacebookLogoLight,
  PiLinkedinLogoLight,
  PiLinkLight,
  PiInstagramLogoThin,
} from "react-icons/pi";

import { FcCheckmark } from "react-icons/fc";
import { FaAngleRight, FaTwitter } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { TbBrandYoutubeFilled, TbCopy } from "react-icons/tb";
import Links from "./Links";
import { BsTwitterX, BsThreads, BsWhatsapp, BsMessenger } from "react-icons/bs";
// import { LiaFlagUsaSolid } from "react-icons/lia";

// import Stories from "@/app/components/Stories";
// import stories from "../../data";
// import Stars from "./Stars";
// import Location from "./Location";
// import Services from "./Services";
// import Store from "./Store";
// import Message from "./Message";
import Footer from "./Footer";

import { Spotify } from "react-spotify-embed";
import Image from "next/image";

const inviteUrl = `josephhjamess46@gmail.com`;

function Header() {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const [dialog, setDialog] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = ["/images/img5.jpg", "/images/img6.jpg", "/images/img3.jpg"];

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0", "1 0"],
  });

  const onCopy = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const links = [
    {
      iconFirst: <PiFacebookLogoLight className="text-2xl" />,
      name: "Share on Facebook",

      lastIcon: <FaAngleRight />,
    },
    {
      iconFirst: <PiLinkedinLogoLight className="text-2xl" />,
      name: "Share on LinkedIn",
      lastIcon: <FaAngleRight />,
    },
    {
      iconFirst: <FaTwitter className="text-2xl" />,
      name: "Share on X",
      lastIcon: <FaAngleRight />,
    },
    {
      iconFirst: <BsThreads className="text-2xl" />,
      name: "Share on Threads",
      lastIcon: <FaAngleRight />,
    },
    {
      iconFirst: <BsWhatsapp className="text-2xl" />,
      name: "Share on Whatsapp",
      lastIcon: <FaAngleRight />,
    },
    {
      iconFirst: <BsMessenger className="text-2xl" />,
      name: "Share on Messanger",
      lastIcon: <FaAngleRight />,
    },
    {
      iconFirst: <PiLinkLight className="text-2xl" />,
      name: "josephhjamess46@gmail.com",
      stri: "Copy",
      lastIcon: <FaAngleRight />,
    },
  ];

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <motion.div
        ref={ref}
        className="  fixed top-11 z-20 flex w-full justify-center "
        style={{ opacity: scrollYProgress }}>
        <div className=" flex w-[640px] items-center justify-between  rounded-lg border border-neutral-800 bg-[#161616]  p-2">
          <Image
            width={800}
            height={800}
            className="h-9 w-9  rounded-md object-cover"
            src="/images/img7.jpg"
            alt=""
          />
          <h1 className="font-Intermedium text-white">JoScript Joe</h1>
          <button
            onClick={() => setOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-700 text-neutral-300">
            <PiUploadThin />
          </button>
        </div>
      </motion.div>
      <div className=" relative -z-10  h-60 w-full">
        <Image
          width={1000}
          height={1000}
          className=" absolute h-full w-full object-cover opacity-40 blur-xl"
          src="/images/img9.jpg"
          alt=""
        />
      </div>

      <div className="   relative -top-9 z-10 flex w-full justify-center">
        <div className="absolute  rounded-full bg-[#111111] p-1">
          <Image
            width={800}
            height={800}
            className="h-16 w-16 rounded-full object-cover "
            src="/images/img4.png"
            alt=""
          />
        </div>
      </div>

      <div className="h-screen bg-[#111111] p-3">
        <div className="mx-auto h-screen max-w-lg bg-[#111111] pt-14">
          <div>
            <div className="text-center">
              <h3 className="flex items-center justify-center gap-x-2 font-Intermedium text-2xl text-white">
                JoScript Joe
                <RiVerifiedBadgeFill className="text-xl text-[#B5924F]" />
              </h3>
              <div className="mt-3 flex items-center justify-center gap-x-2 font-Interegular text-neutral-500">
                <p>Est. 1999</p>
                <span className="h-[3px] w-[3px]  rounded-full bg-neutral-600" />
                <p>Auckland, NZ</p>
                <span className="h-[3px] w-[3px]  rounded-full bg-neutral-600" />
                <p>He/Him</p>
              </div>
            </div>

            <div>
              <p className="my-3 text-center font-Intermedium text-neutral-500">
                JoScript Joe is a software designer and content creator based in
                New York.
              </p>

              <div className="flex justify-center gap-x-7">
                <Link
                  href={"https://github.com/joscript/"}
                  className="flex items-center gap-x-2 rounded-xl p-1 px-2 transition-all duration-100 ease-in hover:bg-neutral-900">
                  <PiGlobeSimpleThin className=" text-xl text-neutral-500" />
                  <p className="font-Intermedium text-white">Joscript.com</p>
                </Link>

                <div className=" flex cursor-pointer  items-center  gap-x-2 rounded-xl p-1 px-2 transition-all duration-100 ease-in hover:bg-neutral-900">
                  <PiPhoneLight className=" text-xl text-neutral-500" />
                  <p className="font-Intermedium text-white"> 555-123-4567</p>
                </div>
              </div>
            </div>

            <div className="my-6 flex items-center justify-center gap-x-2">
              <button
                onClick={() => setOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50">
                <PiUploadThin />
              </button>

              <button
                onClick={onCopy}
                className="flex h-10  w-80 items-center justify-center gap-x-3 rounded-lg bg-slate-50 transition-all duration-300 ease-in hover:bg-neutral-100">
                <span className="font-Intermedium ">
                  {copied ? "copied" : "hey@josephhjamess46@gmail.com"}
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
                      <FcCheckmark className="h-4 w-4" />
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
                      <TbCopy className="h-4 w-4" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <button
                onClick={() => setDialog(true)}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50">
                <PiBellSimple />
              </button>
            </div>

            <div className="flex justify-center  gap-x-5">
              {/* <Stories stories={stories} /> */}
            </div>

            <div className="mt-5 ">
              <Links />
            </div>

            <div>
              <div className=" mt-8 flex justify-between gap-x-6 rounded-xl bg-[#161616] p-3 ">
                <Image
                  width={800}
                  height={800}
                  className="h-9 w-10 rounded-lg object-cover"
                  src="/images/f.jpg"
                  alt=""
                />
                <div className="flex-1  ">
                  <h4 className="text-center font-Interegular text-lg text-white md:text-left">
                    Ultra
                  </h4>
                  <p className="hidden font-Interegular text-sm text-neutral-500 md:block">
                    A high quality Framer portfolio template <br /> designed for
                    creatives.
                  </p>

                  <div className="mt-3 hidden h-7 w-fit items-center justify-center rounded-md border border-neutral-800 px-2 font-Interegular text-xs uppercase text-white md:flex">
                    Store
                  </div>
                </div>

                <button className="flex h-fit items-center gap-x-2 rounded-lg bg-neutral-800 p-2 text-white">
                  <span className="hidden font-Intermedium text-xs md:block ">
                    View
                  </span>
                  <PiArrowSquareOutThin />
                </button>
              </div>

              <div className=" mt-3 flex justify-between gap-x-6 rounded-xl bg-[#161616] p-3 ">
                <Image
                  width={800}
                  height={800}
                  className="h-9 w-10 rounded-lg object-cover"
                  src="/images/cry.jpg"
                  alt=""
                />

                <div className="flex-1  ">
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
                  <span className="hidden font-Intermedium text-xs md:block">
                    Get
                  </span>
                  <PiArrowSquareOutThin />
                </button>
              </div>

              <div className="mt-3 flex justify-between gap-x-6 rounded-xl bg-[#161616] p-3 ">
                <Image
                  width={800}
                  height={800}
                  className="h-9 w-10 rounded-lg object-cover"
                  src="/images/yellow.jpg"
                  alt=""
                />
                <div className="flex-1">
                  <h4 className="text-center font-Interegular text-lg text-white md:text-left">
                    AR & Design
                  </h4>
                  <p className="hidden font-Interegular text-sm text-neutral-500 md:block">
                    Opportunities and challenges for designers <br /> working
                    with AR.
                  </p>

                  <div className="mt-3 hidden h-7 w-fit items-center justify-center  rounded-md border border-neutral-800 px-2 font-Interegular text-xs uppercase text-white md:flex">
                    Blog post
                  </div>
                </div>

                <button className="flex h-fit items-center gap-x-2 rounded-lg bg-neutral-800 p-2 text-white">
                  <span className="hidden font-Intermedium text-xs md:block">
                    Read
                  </span>
                  <PiArrowSquareOutThin />
                </button>
              </div>
            </div>

            <div className="mt-3 rounded-xl bg-[#161616] p-2 ">
              <div className=" flex  justify-between gap-x-6 ">
                <div className="flex w-full items-center justify-between p-2">
                  <p className="font-Intermedium text-white">Latest Post</p>
                  <Link
                    href={"/"}
                    className="flex w-fit items-center gap-x-3 rounded-full bg-neutral-900 p-1 px-2 font-Intermedium text-neutral-300 transition-all duration-300 ease-in hover:bg-neutral-800">
                    <BsTwitterX />
                    <span>@Joscript</span>
                  </Link>
                </div>
              </div>

              <div className="mt-3 rounded-2xl bg-[#1C1C1C] p-3 ">
                <div className="flex gap-x-4">
                  <Image
                    width={800}
                    height={800}
                    className="h-11 w-11 rounded-full"
                    src="/images/img1.jpg"
                    alt=""
                  />

                  <div>
                    <div className="flex items-center gap-x-2 ">
                      <p className="font-Intermedium text-base text-white">
                        JoScript Joe
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

            {/* Latest Video */}
            <div className="mt-3 rounded-xl bg-[#161616] p-2  ">
              <div className=" flex  justify-between gap-x-6  ">
                <div className="flex w-full items-center justify-between p-2">
                  <p className="font-Intermedium text-white">Latest Video</p>
                  <Link
                    href={"/"}
                    className="flex w-fit items-center gap-x-2 rounded-full bg-neutral-900 p-1 px-2 font-Intermedium text-neutral-300 transition-all duration-300 ease-in hover:bg-neutral-800">
                    <TbBrandYoutubeFilled className="text-red-600" />
                    <span>@Joscript</span>
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

            {/* Latest photos */}
            <div className="mt-3 rounded-xl bg-[#161616] p-2 ">
              <div className=" flex  justify-between gap-x-6  ">
                <div className="flex w-full items-center justify-between p-2">
                  <p className="font-Intermedium text-white">Latest Photos</p>
                  <Link
                    href={"/"}
                    className="flex w-fit items-center gap-x-2 rounded-full bg-neutral-900 p-1 px-2 font-Intermedium text-neutral-300 transition-all duration-300 ease-in hover:bg-neutral-800">
                    <PiInstagramLogoThin />
                    <span className="font-Intermedium">@Joscript</span>
                  </Link>
                </div>
              </div>

              <div className=" relative  ">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={images[currentImage]}
                    alt={`Slide ${currentImage}`}
                    className=" h-72 w-full rounded-md object-cover opacity-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
                <div className="absolute  top-1/2 flex  w-full transform items-center justify-between">
                  <button
                    className="mx-2 rounded-full bg-gray-800 p-2 text-white focus:outline-none"
                    onClick={handlePrev}>
                    {"<"}
                  </button>
                  <button
                    className=" absolute right-3 mr-auto rounded-full bg-gray-800 p-2 text-white focus:outline-none"
                    onClick={handleNext}>
                    {">"}
                  </button>
                </div>
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
                  {images.map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ backgroundColor: "#999" }}
                      animate={{
                        backgroundColor:
                          index === currentImage ? "#4CAF50" : "#999",
                      }}
                      style={{ width: 10, height: 10, borderRadius: "50%" }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Store */}
            {/* <Store /> */}

            {/* Music */}
            <div className="mt-3 rounded-xl bg-[#161616] p-2 ">
              <div className=" flex  justify-between gap-x-6 ">
                <div className="flex w-full items-center justify-between p-2">
                  <p className="font-Intermedium text-white">Latest Played</p>
                  <Link
                    href={"/"}
                    className="flex w-fit items-center gap-x-2 rounded-full bg-neutral-900 p-1 px-2 font-Intermedium text-neutral-300 transition-all duration-300 ease-in hover:bg-neutral-800">
                    <PiInstagramLogoThin />
                    <span className="font-Intermedium">@Joscript</span>
                  </Link>
                </div>
              </div>
              <Spotify
                className="my-3 h-20 w-full"
                link="https://open.spotify.com/playlist/37i9dQZF1DX0A8zVl7p82B?si=c2c06a3f57c24b48"
              />
            </div>

            {/* Services */}
            {/* <Services /> */}

            {/* Testimonial */}
            <div className="mt-3 rounded-xl bg-[#161616] p-2  ">
              <div className="  flex justify-between  ">
                <p className="font-Intermedium text-white">Testimonials</p>
              </div>

              <div className=" mt-3 overflow-x-auto   ">
                <div className=" flex  w-[1000px] gap-x-3 p-2   ">
                  <div className=" w-[300px] cursor-pointer rounded-xl bg-neutral-800 p-5 transition-all duration-150 ease-in  hover:bg-neutral-800/40 ">
                    <p className="font-Interegular text-white">
                      Joscript design expertise elevated our product to new
                      heights. A perfect blend of aesthetics and usability.
                      Working with him was a delight!
                    </p>
                    <Image
                      width={800}
                      height={800}
                      className="my-3 h-9 w-9 rounded-full object-cover"
                      src="/images/img9.jpg"
                      alt=""
                    />
                    <p className="font-Interegular text-white">JoScript</p>
                    <span className="font-Interegular text-neutral-500">
                      Founder, Beta
                    </span>
                    {/* <Stars num={4} /> */}
                  </div>

                  <div className=" w-[300px] cursor-pointer rounded-xl bg-neutral-800 p-5 transition-all duration-150 ease-in  hover:bg-neutral-800/40">
                    <p className="font-Interegular text-white">
                      Joscript design expertise elevated our product to new
                      heights. A perfect blend of aesthetics and usability.
                      Working with him was a delight!
                    </p>
                    <Image
                      width={800}
                      height={800}
                      className="my-3 h-9 w-9 rounded-full object-cover"
                      src="/images/img9.jpg"
                      alt=""
                    />
                    <p className="font-Interegular text-white">JoScript</p>
                    <span className="font-Interegular text-neutral-500">
                      Founder, Beta
                    </span>
                    {/* <Stars num={4} /> */}
                  </div>
                  <div className=" w-[300px] cursor-pointer rounded-xl bg-neutral-800 p-5 transition-all duration-150 ease-in  hover:bg-neutral-800/40">
                    <p className="font-Interegular text-white">
                      Joscript design expertise elevated our product to new
                      heights. A perfect blend of aesthetics and usability.
                      Working with him was a delight!
                    </p>
                    <Image
                      width={800}
                      height={800}
                      className="my-3 h-9 w-9 rounded-full object-cover"
                      src="/images/img9.jpg"
                      alt=""
                    />
                    <p className="font-Interegular text-white">JoScript</p>
                    <span className="font-Interegular text-neutral-500">
                      Founder, Beta
                    </span>
                    {/* <Stars num={4} /> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}

            {/* <Location /> */}

            {/* Message */}
            {/* <Message /> */}
          </div>
          <Footer />
        </div>
      </div>

      <motion.div
        initial={{
          display: !open ? "none" : "block",
        }}
        animate={{
          display: open ? "flex" : "none",
          transition: { duration: !open ? 1 : 0 },
        }}
        transition={{ duration: 0.8 }}
        className="fixed bottom-0 left-0 right-0 z-50 flex h-full w-full items-center justify-center overscroll-y-none bg-black/60 backdrop-blur-xl">
        <div className="max-w-md  rounded-xl bg-[#161616] px-3 py-3">
          <div className="flex items-center justify-between text-white">
            <p className="font-Intermedium text-xl">Share this profile</p>

            <div className="cursor-pointer" onClick={() => setOpen(false)}>
              <PiXCircleLight className="text-2xl text-neutral-300" />
            </div>
          </div>

          <div className="mt-3 ">
            {links.map((link, indx) => (
              <div
                key={indx}
                className={`mt-1 flex cursor-pointer  items-center justify-between rounded-xl p-2 text-neutral-300 transition-all duration-300 ease-in-out hover:bg-neutral-800 ${
                  indx === links.length - 1 &&
                  "bg-neutral-950 hover:bg-neutral-950"
                }`}>
                <div className="flex items-center gap-x-2 ">
                  {link.iconFirst}
                  <p
                    key={indx}
                    className={` font-Intermedium ${
                      indx === links.length - 1 ? "text-base " : "text-lg"
                    }  `}>
                    {link.name}
                  </p>
                </div>
                {indx === links.length - 1 ? (
                  <span
                    onClick={onCopy}
                    className="flex cursor-pointer items-center  gap-x-1 rounded-lg bg-neutral-300 p-1 px-1 font-Intermedium text-neutral-600 ">
                    {copied ? "Copied" : link.stri}

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
                          <FcCheckmark className="h-4 w-4" />
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
                          <TbCopy className="h-4 w-4" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                ) : (
                  link.lastIcon
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{
          display: !dialog ? "none" : "block",
        }}
        animate={{
          display: dialog ? "flex" : "none",
          transition: { duration: !dialog ? 1 : 0 },
        }}
        transition={{ duration: 0.8 }}
        className="fixed bottom-0 left-0 right-0 z-10 flex h-full w-full items-center justify-center overscroll-y-none bg-black/60 backdrop-blur-xl">
        <div className="max-w-md  rounded-xl bg-[#161616] px-3 py-3">
          <div className="relative flex justify-center ">
            <div
              className="absolute right-2 top-2 cursor-pointer "
              onClick={() => setDialog(false)}>
              <PiXCircleLight className="text-2xl text-neutral-300" />
            </div>
            <Image
              width={800}
              height={800}
              className="h-14 w-14 rounded-full object-cover "
              src="/images/f.jpg"
              alt=""
            />
          </div>
          <p className="mt-3 text-center font-Interegular text-neutral-300">
            Subscribe to JoScript
          </p>
          <p className="my-1 text-center font-Intermedium text-neutral-600">
            Stay up to date with everything important
          </p>

          <form action="">
            <input
              className="mt-2 w-full rounded-lg bg-neutral-800 p-2 font-Intermedium text-neutral-400 outline-none ring-neutral-500 placeholder:text-neutral-600 focus:ring-2 "
              type="text"
              placeholder="Your email"
              name=""
              id=""
            />
            <button className="mt-2 w-full rounded-lg bg-neutral-800 p-2 font-Intermedium text-neutral-200">
              Subscribe
            </button>
          </form>
        </div>
      </motion.div>
    </>
  );
}

export default Header;
