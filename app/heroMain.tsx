// "use client";

// import { useEffect, useRef } from "react";
// import { Spotlight } from "./components/ui/spotlight-new";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Hero1 from "./hero1";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// export default function Home() {
//   const handRef = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const textRef = useRef<HTMLDivElement>(null);
//   const blueDivRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!containerRef.current || !textRef.current || !handRef.current) return;

//     const container = containerRef.current;

//     const ctx = gsap.context(() => {
//       gsap.set(textRef.current, { opacity: 0 });

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: container,
//           start: "top top",
//           end: () => `+=${window.innerHeight * 1.2}`,
//           scrub: true,
//           pin: true,
//           invalidateOnRefresh: true,
//         },
//       });

//       // ✅ Viewport-based motion
//       tl.to(handRef.current, {
//         y: "50vh",
//         ease: "none",
//       });

//       tl.to(
//         textRef.current,
//         {
//           opacity: 1,
//           duration: 0.5,
//           ease: "power2.out",
//         },
//         ">-=0.1"
//       );
//     }, container);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
//       {/* HERO SECTION */}
//       <div
//         ref={containerRef}
//         className="h-screen w-full relative overflow-hidden bg-black/[0.96] border border-white"
//       >
//         <Spotlight />

//         <div className="w-full h-full relative z-10 flex items-center justify-center p-4 w-full border border-yellow-500">
//           <div className="w-full h-full relative text-center border border-green-500">

//             {/* HERO ANIMATION BLOCK */}
//             <div className=" w-full h-full flex flex-col items-end pointer-events-none border border-red-500">

//               {/* HAND */}
//               <div
//                 ref={handRef}
//                 className="relative rotate-[-20deg] translate-y-[12vh] w-[10vw] aspect-[1/2] border border-blue-500"
//               >
//                 <Image
//                   src="/hand.png"
//                   alt="Hand"
//                   fill
//                   className="object-contain opacity-60"
//                   priority  
//                 />
//               </div>

//               {/* TEXT + MOUSE */}
//               <div
//                 ref={blueDivRef}
//                 className="mt-auto w-full flex justify-between"
//               >
//                 <div
//                   ref={textRef}
//                   className="text-white font-bold text-left
//                              text-3xl sm:text-4xl md:text-6xl max-w-[60%]"
//                 >
//                   That's what we do, Leezova's Magic
//                 </div>

//                 {/* MOUSE */}
//                 <div className="relative translate-y-[8vh]
//                                 w-[35vw] max-w-[350px] aspect-[7/2]">
//                   <Image
//                     src="/mouse.png"
//                     alt="Mouse"
//                     fill
//                     className="opacity-60"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* STATIC HERO TEXT */}
//             <div className="relative z-10 -mt-40 text-center">
//               <h1 className="text-4xl md:text-7xl font-bold
//                              bg-clip-text text-transparent
//                              bg-gradient-to-b from-neutral-50 to-neutral-400">
//                 LEEZOVA
//               </h1>
//               <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto">
//                 Technologies that make your business grow.
//               </p>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* NEXT SECTION */}
//       {/* <div className="min-h-screen bg-black text-white text-3xl flex items-center justify-center">
//         new content
//       </div> */}

//       {/* <Hero1 />    */}
//     </>
//   );
// }
