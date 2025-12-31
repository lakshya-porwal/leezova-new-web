'use client';

import React, { useEffect, useRef } from 'react';
import { Spotlight } from './components/ui/spotlight-new';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const blueDivRef = useRef<HTMLDivElement>(null);
  const handRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current || !handRef.current) return;

    const container = containerRef.current;

    const ctx = gsap.context(() => {
      gsap.set(textRef.current, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${window.innerHeight * 1.2}`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      // ✅ Viewport-based motion
      tl.to(handRef.current, {
        y: () => {
          const containerHeight = containerRef.current!.offsetHeight;
          const handHeight = handRef.current!.offsetHeight;

          return containerHeight - handHeight - 80; // bottom padding
        },
        ease: "none",
      });

      tl.to(
        textRef.current,
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        ">-=0.1"
      );
    }, container);

    return () => ctx.revert();
  }, []);


  return (
    // 🔹 100vh SECTION
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* 🔵 BACKGROUND LAYER */}
      <div className="relative z-0 h-full w-full">
        <Spotlight />

        <div className="h-full flex flex-col justify-evenly text-center">
          <div className="border border-amber-500 text-7xl">
            Leezova
          </div>
        </div>
      </div>

      {/* 🟡 TOP INTERACTIVE LAYER (ONLY 100vh) */}
      <div className="absolute inset-0 z-50 border border-amber-500 pointer-events-auto flex flex-col pb-10 justify-between">
        <div ref={handRef} className="items-end flex justify-end border border-red-500 pr-36">
          <Image src="/hand.png" alt="Magic" width={300} height={200} />
        </div>
        <div ref={blueDivRef} className="border border-red-500 text-left pl-[100px] pr-64 justify-between flex py-auto items-center">
          <div ref={textRef} className='text-3xl text-left'>That's what we do, Leezova's Magic</div>
          <Image src="/mouse.png" alt="Magic" width={260} height={130} />
        </div>
      </div>
    </div>
  );
};

export default Page;
