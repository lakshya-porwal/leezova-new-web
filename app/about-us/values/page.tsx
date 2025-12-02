"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Values() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const values = [
    {
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and ethical practices in all our interactions.",
      bgColor: "bg-black",
      borderColor: "border-transparent",
      icon: (
        <svg viewBox="0 0 100 100" className="w-32 h-32">
          <path
            d="M 50 20 L 60 40 L 80 45 L 65 60 L 68 80 L 50 70 L 32 80 L 35 60 L 20 45 L 40 40 Z"
            fill="none"
            stroke="#4169E1"
            strokeWidth="2"
          />
          <circle cx="50" cy="50" r="15" fill="none" stroke="#4169E1" strokeWidth="2" />
          <circle cx="50" cy="50" r="3" fill="#4169E1" />
        </svg>
      ),
      padding: "pt-10",
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and creative solutions to solve complex challenges and drive progress.",
      bgColor: "bg-black",
      borderColor: "border-transparent",
      icon: (
        <svg viewBox="0 0 100 100" className="w-32 h-32">
          <circle cx="50" cy="50" r="35" fill="none" stroke="#4169E1" strokeWidth="2" />
          <path
            d="M 50 20 L 50 50 L 70 50"
            fill="none"
            stroke="#4169E1"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="50" cy="50" r="8" fill="#4169E1" />
          <path
            d="M 30 70 Q 50 60 70 70"
            fill="none"
            stroke="#4169E1"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      padding: "pb-10",
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in every project, setting and exceeding industry standards.",
      bgColor: "bg-black",
      borderColor: "border-transparent",
      icon: (
        <svg viewBox="0 0 100 100" className="w-32 h-32">
          <path
            d="M 50 15 L 55 40 L 80 40 L 60 55 L 65 80 L 50 65 L 35 80 L 40 55 L 20 40 L 45 40 Z"
            fill="none"
            stroke="#4169E1"
            strokeWidth="2"
          />
          <circle cx="50" cy="50" r="20" fill="none" stroke="#4169E1" strokeWidth="1.5" opacity="0.5" />
        </svg>
      ),
      padding: "pt-10",
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork, both within our organization and with our clients.",
      bgColor: "bg-black",
      borderColor: "border-transparent",
      icon: (
        <svg viewBox="0 0 100 100" className="w-32 h-32">
          <path
            d="M 30 50 Q 30 35 40 35 Q 50 35 50 50 Q 50 35 60 35 Q 70 35 70 50"
            fill="none"
            stroke="#4169E1"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M 40 50 Q 50 65 50 65 Q 50 65 60 50"
            fill="none"
            stroke="#4169E1"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M 45 55 Q 50 60 50 60 Q 50 60 55 55"
            fill="#4169E1"
            opacity="0.3"
          />
        </svg>
      ),
      padding: "pt-10",
    },
    {
      title: "Customer Focus",
      description: "Our clients' success is our success. We prioritize their needs and work tirelessly to deliver value.",
      bgColor: "bg-black",
      borderColor: "border-transparent",
      icon: (
        <svg viewBox="0 0 100 100" className="w-32 h-32">
          <path
            d="M 30 50 Q 30 30 50 30 Q 70 30 70 50 Q 70 70 50 70 Q 30 70 30 50"
            fill="none"
            stroke="#4169E1"
            strokeWidth="3"
          />
          <path
            d="M 45 50 Q 50 55 50 55 Q 50 55 55 50"
            fill="#4169E1"
            opacity="0.3"
          />
          <line x1="40" y1="45" x2="40" y2="48" stroke="#4169E1" strokeWidth="2" />
          <line x1="60" y1="45" x2="60" y2="48" stroke="#4169E1" strokeWidth="2" />
        </svg>
      ),
      padding: "pb-10",
    },
    {
      title: "Sustainability",
      description: "We are committed to sustainable practices and long-term thinking in all our endeavors.",
      bgColor: "bg-black",
      borderColor: "border-transparent",
      icon: (
        <svg viewBox="0 0 100 100" className="w-32 h-32">
          <circle cx="50" cy="50" r="30" fill="none" stroke="#4169E1" strokeWidth="2" />
          <path
            d="M 50 25 L 50 50 L 65 50"
            fill="none"
            stroke="#4169E1"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M 35 65 Q 50 60 65 65"
            fill="none"
            stroke="#4169E1"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="50" cy="50" r="3" fill="#4169E1" />
        </svg>
      ),
      padding: "pt-10",
    },
  ];

  useEffect(() => {
    const setupAnimation = () => {
      if (!containerRef.current) return;

      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      if (cards.length !== 6) return;

      const middleCardIndices = [1, 4];

      cards.forEach((card, index) => {
        const isMiddleCard = middleCardIndices.includes(index);
        
        gsap.set(card, { y: 0 });
        
        gsap.to(card, {
          y: isMiddleCard ? 80 : -80,
          ease: "power1.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1.5,
          },
        });
      });

      ScrollTrigger.refresh();
    };

    const timer = setTimeout(setupAnimation, 200);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars?.trigger === containerRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black pt-24 pb-12 relative">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h1 className="text-[100px] md:text-[300px] font-extrabold text-[#ffffff] opacity-5 select-none">
          VALUES
        </h1>
      </div>
      <div className="w-full h-full flex items-center justify-center my-[100px] relative z-10">
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {values.map((value, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`h-[400px] flex items-center justify-center w-[350px] px-6 ${value.padding} group`}
            >
              <div
                className={`flex items-center justify-center flex-col ${value.borderColor} border-2 h-full w-full rounded-xl p-1 border border-white`}
              >
                <div 
                  className={`flex flex-col ${value.bgColor} h-full w-full rounded-lg relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
                      <path
                        d="M 0 200 Q 100 150 200 200 T 400 200"
                        fill="none"
                        stroke="#4169E1"
                        strokeWidth="2"
                        opacity="0.3"
                      />
                      <path
                        d="M 0 250 Q 150 200 300 250 T 400 250"
                        fill="none"
                        stroke="#4169E1"
                        strokeWidth="2"
                        opacity="0.2"
                      />
                    </svg>
                  </div>

                  <div className="w-full h-full flex items-center justify-center p-4 relative z-10">
                    {value.icon}
                  </div>

                  <div className="w-full h-full flex items-center justify-center flex-col gap-2 p-4 relative z-10">
                    <h1 className="text-2xl font-semibold text-[#4169E1] text-center">
                      {value.title}
                    </h1>
                    <p className="text-sm text-gray-400 text-center leading-relaxed max-w-xs">
                      {value.description}
                    </p>
                   
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
