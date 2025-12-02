"use client";

import { useEffect, useRef } from "react";
import { Spotlight } from "./components/ui/spotlight-new";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero1 from "./hero1";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const handRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const blueDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !blueDivRef.current || !textRef.current || !handRef.current) return;
    if (typeof window === "undefined") return;

    const container = containerRef.current;

    const ctx = gsap.context(() => {

      gsap.set(textRef.current, { opacity: 0 });


      gsap.set(blueDivRef.current, { y: 0 });


      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=110%", // scroll distance for hand animation
          scrub: true,
          pin: true,       // pin entire hero while hand scrolls
          pinSpacing: true,
          markers: false,
          invalidateOnRefresh: true,
        },
      });


      tl.to(handRef.current, {
        y: 345,
        ease: "power2.out",
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

    return () => {
      // Find and kill any ScrollTriggers associated with this container
      // This must happen before React unmounts to prevent DOM conflicts
      try {
        const triggers = ScrollTrigger.getAll();
        triggers.forEach(trigger => {
          try {
            // Check multiple ways the trigger element might be stored
            const triggerElement = trigger.trigger || trigger.vars?.trigger;
            if (triggerElement === container) {
              trigger.kill();
            }
          } catch (e) {
            // Ignore errors when checking individual triggers
          }
        });
      } catch (e) {
        // Ignore errors if ScrollTrigger is not available
      }
      // Then revert the context (this also cleans up ScrollTriggers)
      ctx.revert();
    };
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <div
        ref={containerRef}
        className="h-screen w-full relative overflow-hidden bg-black/[0.96]"
      >
        <Spotlight />

        <div className="p-4 max-w-7xl h-full mx-auto relative z-10 w-full flex items-center justify-center">
          <div className="text-center w-full relative">

            {/* HERO ANIMATION BLOCK */}
            <div className="h-screen w-full flex flex-col items-end pointer-events-none z-0 -translate-y-[200px]">

              {/* Hand Image */}
              <div ref={handRef} className="rotate-[-20deg] translate-y-[120px]">
                <Image
                  src="/hand.png"
                  alt="Hand"
                  width={400}
                  height={800}
                  className="opacity-60"
                />
              </div>

              {/* Mouse + Text (STATIC UNTIL TEXT APPEARS) */}
              <div
                ref={blueDivRef}
                className="mt-auto w-full flex justify-between"
              >
                <div
                  ref={textRef}
                  className="text-white text-4xl md:text-6xl font-bold text-left"
                >
                  That's what we do, Leezova's Magic
                </div>

                <div className="mr-[60px] translate-y-[80px]">
                  <Image
                    src="/mouse.png"
                    alt="Mouse"
                    width={350}
                    height={100}
                    className="opacity-60"
                  />
                </div>
              </div>
            </div>

            {/* STATIC HERO TEXT */}
            <div className="relative z-10 -mt-40">
              <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                LEEZOVA
              </h1>
              <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto">
                Technologies that make your business grow.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* NEW CONTENT / PAGE SCROLL */}
      <div className="min-h-screen bg-black text-white text-3xl flex items-center justify-center">
        new content
      </div>
    <Hero1 />
    </>
  );
}
