import React from "react";
import Link from "next/link";
import {
  BsDiscord,
  BsGithub,
  BsLinkedin,
  BsSpotify,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";

const LinksComponent = () => {
  return (
    <div className="mx-auto mt-8 flex flex-wrap justify-center gap-5">
      <Link href="http://www.github.com/edndacomputer1">
        <button
          type="button"
          className="me-2 inline-flex items-center rounded-lg bg-[#333] p-2.5 text-center text-sm font-medium text-[#fafafa] hover:bg-[#333]/80 focus:outline-none focus:ring-4 focus:ring-[#f5f5f5]"
        >
          <BsGithub className="h-6 w-6" />
          <span className="sr-only">Icon description</span>
        </button>
      </Link>
      <Link href="https://www.twitter/com/edndacomputer">
        <button
          type="button"
          className="me-2 inline-flex items-center rounded-lg bg-black p-2.5 text-center text-sm font-medium text-white hover:bg-black/80 focus:outline-none focus:ring-4 focus:ring-white"
        >
          <BsTwitterX className="h-6 w-6" />
          <span className="sr-only">Icon description</span>
        </button>
      </Link>
      <Link href="https://www.discord.com">
        <button
          type="button"
          className="me-2 inline-flex items-center rounded-lg bg-[#5865F2] p-2.5 text-center text-sm font-medium text-white hover:bg-[#5865F2]/80 focus:outline-none focus:ring-4 focus:ring-white"
        >
          <BsDiscord className="h-6 w-6" />
          <span className="sr-only">Icon description</span>
        </button>
      </Link>
      <Link href="https://www.youtube.com">
        <button
          type="button"
          className="me-2 inline-flex items-center rounded-lg bg-[#FF0000] p-2.5 text-center text-sm font-medium text-[#FFFFFF] hover:bg-[#FF0000]/80 focus:outline-none focus:ring-4 focus:ring-[#FFFFFF]"
        >
          <BsYoutube className="h-6 w-6" />
          <span className="sr-only">Icon description</span>
        </button>
      </Link>
      <Link href="https://www.linkedin.com/in/edestrella/">
        <button
          type="button"
          className="me-2 inline-flex items-center rounded-lg bg-[#0077B5] p-2.5 text-center text-sm font-medium text-[#FFFFFF] hover:bg-[#0077B5]/80 focus:outline-none focus:ring-4 focus:ring-[#FFFFFF]"
        >
          <BsLinkedin className="h-6 w-6" />
          <span className="sr-only">Icon description</span>
        </button>
      </Link>
      <Link href="https://open.spotify.com/user/31zbv5yioqynnmovvff4l3htefxa">
        <button
          type="button"
          className="me-2 inline-flex items-center rounded-lg bg-[#1DB954] p-2.5 text-center text-sm font-medium text-[#101414] hover:bg-[#1DB954]/80 focus:outline-none focus:ring-4 focus:ring-[#101414]"
        >
          <BsSpotify className="h-6 w-6" />
          <span className="sr-only">Icon description</span>
        </button>
      </Link>
    </div>
  );
};

export default LinksComponent;
