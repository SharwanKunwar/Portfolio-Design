"use client";
import Link from "next/link";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Explore",
    },
    {
      text: "Me",
    },
    {
      text: "Through ",
    },
    {
      text: "My",
    },
    {
      text: "Portfolio",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        
        <Link href="/pages/home">
        <button
          className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Explore
        </button>
        </Link>
      </div>
    </div>
  );
}
