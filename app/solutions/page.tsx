"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Solutions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const contentRef = useRef<(HTMLDivElement | null)[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  const cards = [
    {
      title: "Enterprise Solutions Platform",
      description: [
        "Transform your business operations with our comprehensive enterprise solutions platform.",
        "Streamline workflows, enhance productivity, and drive growth.",
        "Scalable infrastructure handling millions of transactions seamlessly."
      ],
      image: "/Platform.webp",
      video: "/videos/platform.mp4"
    },
    {
      title: "Advanced Analytics Dashboard",
      description: [
        "Get instant insights with real-time analytics.",
        "Data-driven decisions powered by predictive intelligence.",
        "Track KPIs and optimize performance."
      ],
      image: "/front-left-side-47.avif",
      video: "/videos/analytics.mp4"
    },
    {
      title: "Secure Cloud Infrastructure",
      description: [
        "Enterprise-grade encrypted cloud security.",
        "99.9% uptime with automated backups.",
        "Continuous monitoring and 24/7 support."
      ],
      image: "/Platform.webp",
      video: "/videos/cloud.mp4"
    },
    {
      title: "Custom Integration Services",
      description: [
        "Integrate seamlessly with third-party apps.",
        "API-first architecture with rapid deployment.",
        "Create a unified business ecosystem."
      ],
      image: "/front-left-side-47.avif",
      video: "/videos/integration.mp4"
    }
  ];

  const [currentVideo, setCurrentVideo] = useState(cards[0].video);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cardEls = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    const contentEls = contentRef.current.filter(Boolean) as HTMLDivElement[];
    if (cardEls.length === 0) return;

    const ctx = gsap.context(() => {
      // Initial stacking
      cardEls.forEach((card, i) => {
        gsap.set(card, {
          x: 0,
          y: i === 0 ? 0 : 200,
          zIndex: 100 + i,
          opacity: i === 0 ? 1 : 0
        });
        (card as any).style.borderRight = "none";
        (card as any).style.borderBottom = "none";
        gsap.set(contentEls[i], { opacity: i === 0 ? 1 : 0 });
      });

      // Scroll timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${cards.length * 220}vh`,
          scrub: 2.4,
          pin: true,
        }
      });

      cardEls.forEach((card, index) => {
        if (index === 0) {
          tl.to({}, { duration: 4 });
        } else {
          const prev = cardEls[index - 1];
          const prevContent = contentEls[index - 1];
          const currContent = contentEls[index];
          const t = index * 7;

          // Hide previous card
          tl.to(prev, {
            x: 0,
            y: 0,
            opacity: 0,
            borderRight: "none",
            borderBottom: "none",
            duration: 2,
            ease: "power2.out"
          }, t);

          tl.to(prevContent, { opacity: 0, duration: 1.4 }, t);

          // Show current card
          tl.fromTo(
            card,
            { x: 0, y: 200, opacity: 0, zIndex: 100 + index },
            {
              x: 0,
              y: 0,
              opacity: 1,
              zIndex: 100 + index,
              borderRight: "2px solid rgba(59,130,246,0.4)",
              borderBottom: "2px solid rgba(59,130,246,0.4)",
              duration: 3,
              ease: "power2.out",
              onStart: () => {
                // Update video for top card
                setCurrentVideo(cards[index].video);
              }
            },
            t + 0.6
          );

          tl.to(prev, { zIndex: 100 + index - 1, duration: 0.1 }, t + 0.6);
          tl.to(currContent, { opacity: 1, duration: 2, ease: "power2.out" }, t + 1.8);
          tl.to({}, { duration: 4 }, t + 5);
        }
      });

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-black py-[100px]">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-6">
        {/* First Row: Stack and Square Card */}
        <div className="relative w-full flex gap-6" style={{ height: "350px" }}>
          {/* Cards Stack */}
          <div className="relative w-2/3 h-full">
            {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="
                absolute top-0 left-0 w-full h-full
                flex items-stretch gap-6 p-6
                bg-black
                rounded-xl
                border-2 border-blue-400/40
                shadow-xl shadow-blue-400/10
              "
            >
              <div className="w-1/3 relative rounded-xl overflow-hidden border-2 border-gray-500 p-1">
                <div className="relative w-full h-full rounded-lg border-2 border-gray-500">
                  <Image
                    src={card.image}
                    alt={card.title}
                    className="object-cover rounded-lg"
                    fill
                  />
                </div>
              </div>

               {/* CONTENT */}
               <div
                 ref={(el) => { contentRef.current[index] = el; }}
                 className="w-2/3 flex flex-col justify-center border-2 border-gray-500 rounded-xl p-4"
               >
                <h2 className="text-4xl font-bold text-white mb-4">{card.title}</h2>
                {card.description.map((d, i) => (
                  <p key={i} className="text-gray-400 text-sm mb-2">{d}</p>
                ))}
              </div>
            </div>
            ))}
          </div>

          {/* Right-side Video Card */}
          <div className="w-1/3 h-full relative">
            <div className="w-full h-full bg-black rounded-xl border-2 border-blue-400/40 shadow-xl shadow-blue-400/10 overflow-hidden">
              <video
                ref={videoRef}
                src="/videoplayback.webm"
                className="w-full h-full object-cover rounded-xl"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>

        {/* Second Row: 2 Cards Below */}
        <div className="w-full flex gap-6" style={{ height: "350px" }}>
        {/* First Card - Same width as stack */}
        <div className="w-2/3 h-full bg-black rounded-xl border-2 border-blue-400/40 shadow-xl shadow-blue-400/10 p-6 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Card 1</h3>
            <p className="text-gray-400 text-sm">Additional content for the first card below</p>
          </div>
        </div>

        {/* Second Card - Same width as square card */}
        <div className="w-1/3 h-full bg-black rounded-xl border-2 border-blue-400/40 shadow-xl shadow-blue-400/10 p-6 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Card 2</h3>
            <p className="text-gray-400 text-sm">Additional content for the second card below</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
