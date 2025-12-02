"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactUs() {
  const mapWrapperRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const stampRef = useRef<SVGGElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const rotateStamp = () => {
      setRotation((prev) => (prev + 0.5) % 360);
    };

    const interval = setInterval(rotateStamp, 20);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.clear();

    if (!mapWrapperRef.current || !mapRef.current || !pinRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(pinRef.current, { scale: 0, opacity: 0 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: mapWrapperRef.current,
            start: "top top",
            end: "+=100%",
            pin: true,
            scrub: true,
          },
        })
        .to(mapRef.current, {
          scale: 2.5,
          duration: 1,
        })
        .to(
          pinRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
          },
          "-=0.3"
        );
    }, mapWrapperRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-16">
            <div className="lg:col-span-2">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
                Let's work together!
              </h1>
              <p className="text-gray-400 text-lg mb-12 max-w-2xl">
                Let us help you become ever greater at what you do. Fill out the following form and we will get back to you in the next 24 hours.
              </p>

              <form className="space-y-8">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-3 text-gray-400"
                  >
                    01 What's your name?
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-0 border-b border-gray-600 pb-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Type your full name"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-3 text-gray-400"
                  >
                    02 What's your email address?
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-0 border-b border-gray-600 pb-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="name@email.com"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-3 text-gray-400"
                  >
                    03 What's your phone number?
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-transparent border-0 border-b border-gray-600 pb-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="+91 9826000000"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-3 text-gray-400"
                  >
                    04 What's your company/organization name?
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full bg-transparent border-0 border-b border-gray-600 pb-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Type your company/organization name"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="services"
                    className="block text-sm font-medium mb-3 text-gray-400"
                  >
                    05 What services are you looking for?
                  </label>
                  <div className="relative">
                    <select
                      id="services"
                      className="w-full bg-transparent border-0 border-b border-gray-600 pb-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-black text-white">Choose from a list here</option>
                      <option value="web" className="bg-black text-white">Web Development</option>
                      <option value="mobile" className="bg-black text-white">Mobile Development</option>
                      <option value="consulting" className="bg-black text-white">Consulting</option>
                    </select>
                    <div className="absolute right-0 top-0 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="project"
                    className="block text-sm font-medium mb-3 text-gray-400"
                  >
                    06 Tell us about your project
                  </label>
                  <textarea
                    id="project"
                    rows={6}
                    className="w-full bg-transparent border-0 border-b border-gray-600 pb-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Please type your project description"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="mt-8 px-8 py-4 border border-gray-600 rounded-lg text-white font-medium hover:border-blue-500 hover:text-blue-500 transition-all duration-300 flex items-center gap-2 group"
                >
                  SEND MESSAGE
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>
            </div>

            <div className="lg:col-span-1 space-y-12">
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-64 h-64">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      ref={stampRef}
                      style={{
                        transformOrigin: '100px 100px',
                        transform: `rotate(${rotation}deg)`,
                      }}
                    >
                      <circle
                        cx="100"
                        cy="100"
                        r="95"
                        fill="none"
                        stroke="#4169E1"
                        strokeWidth="2"
                      />
                      <text
                        x="100"
                        y="100"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="12"
                        fill="#4169E1"
                        fontFamily="monospace"
                        fontWeight="bold"
                      >
                        <textPath href="#circlePath" startOffset="0%">
                          GET IN TOUCH • GET IN TOUCH • GET IN TOUCH • GET IN TOUCH • GET IN TOUCH • GET IN TOUCH • GET IN TOUCH • GET IN TOUCH
                        </textPath>
                      </text>
                      <path
                        id="circlePath"
                        d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
                        fill="none"
                      />
                    </g>
                    <g transform="translate(100, 100) scale(0.12) translate(-512, -512)">
                      <path d="M321 317.25L155 122H321V317.25L155 903H248.163H321V535.52V317.25Z" fill="#4169E1"/>
                      <path d="M335 122H471.765V697.077H800V834H509.484H335V122Z" fill="#4169E1"/>
                      <path d="M484 122L540 122V684H484V122Z" fill="#4169E1"/>
                      <path d="M814.51 698H869V903H335V848.333H814.51V698Z" fill="#4169E1"/>
                    </g>
                  </svg>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-white">CALL US</h2>
                  <p className="text-gray-400 mb-2">+91 9826000000</p>
                  <p className="text-gray-400">+91 9826000001</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-white">ADDRESS</h2>
                  <p className="text-gray-400">
                    Sahu Complex, 2rd Floor
                    <br />
                    Indore, MP 453001
                    <br />
                    India
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-white">EMAIL</h2>
                  <p className="text-gray-400 mb-2">info@leezova.com</p>
                  <p className="text-gray-400">support@leezova.com</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-white">SOCIAL MEDIA</h2>
                  <div className="flex gap-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-gray-600 rounded flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-gray-600 rounded flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-gray-600 rounded flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-gray-600 rounded flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={mapWrapperRef}
        className="wrapper h-screen w-full relative bg-gray-900 overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            ref={mapRef}
            className="content relative w-full h-full bg-[#f5f5f5]"
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 800"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="mapGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#e0e0e0" strokeWidth="0.5" opacity="0.3"/>
                </pattern>
              </defs>
              
              <rect width="1200" height="800" fill="#f5f5f5"/>
              <rect width="1200" height="800" fill="url(#mapGrid)"/>
              
              <g id="water">
                <path d="M 0 600 Q 200 550 400 580 T 800 600 L 1200 600 L 1200 800 L 0 800 Z" fill="#b3d9ff" opacity="0.4"/>
                <path d="M 100 700 Q 300 650 500 680 T 900 700 L 1200 700 L 1200 800 L 100 800 Z" fill="#99ccff" opacity="0.3"/>
              </g>
              
              <g id="parks">
                <ellipse cx="200" cy="200" rx="80" ry="60" fill="#90ee90" opacity="0.4"/>
                <ellipse cx="800" cy="300" rx="100" ry="70" fill="#90ee90" opacity="0.4"/>
                <ellipse cx="500" cy="550" rx="90" ry="65" fill="#90ee90" opacity="0.4"/>
                <rect x="350" y="150" width="120" height="100" rx="8" fill="#90ee90" opacity="0.3"/>
              </g>
              
              <g id="majorRoads">
                <line x1="0" y1="200" x2="1200" y2="200" stroke="#888888" strokeWidth="8" opacity="0.6"/>
                <line x1="0" y1="400" x2="1200" y2="400" stroke="#888888" strokeWidth="8" opacity="0.6"/>
                <line x1="0" y1="600" x2="1200" y2="600" stroke="#888888" strokeWidth="8" opacity="0.6"/>
                <line x1="200" y1="0" x2="200" y2="800" stroke="#888888" strokeWidth="8" opacity="0.6"/>
                <line x1="600" y1="0" x2="600" y2="800" stroke="#888888" strokeWidth="8" opacity="0.6"/>
                <line x1="1000" y1="0" x2="1000" y2="800" stroke="#888888" strokeWidth="8" opacity="0.6"/>
              </g>
              
              <g id="secondaryRoads">
                <line x1="0" y1="100" x2="1200" y2="100" stroke="#aaaaaa" strokeWidth="4" opacity="0.5"/>
                <line x1="0" y1="300" x2="1200" y2="300" stroke="#aaaaaa" strokeWidth="4" opacity="0.5"/>
                <line x1="0" y1="500" x2="1200" y2="500" stroke="#aaaaaa" strokeWidth="4" opacity="0.5"/>
                <line x1="100" y1="0" x2="100" y2="800" stroke="#aaaaaa" strokeWidth="4" opacity="0.5"/>
                <line x1="400" y1="0" x2="400" y2="800" stroke="#aaaaaa" strokeWidth="4" opacity="0.5"/>
                <line x1="800" y1="0" x2="800" y2="800" stroke="#aaaaaa" strokeWidth="4" opacity="0.5"/>
              </g>
              
              <g id="trainLines">
                <path d="M 0 250 Q 300 200 600 250 T 1200 250" fill="none" stroke="#4169e1" strokeWidth="6" opacity="0.7"/>
                <path d="M 0 450 Q 300 400 600 450 T 1200 450" fill="none" stroke="#4169e1" strokeWidth="6" opacity="0.7"/>
                <path d="M 250 0 Q 250 200 250 400 T 250 800" fill="none" stroke="#4169e1" strokeWidth="6" opacity="0.7"/>
                <path d="M 750 0 Q 750 200 750 400 T 750 800" fill="none" stroke="#4169e1" strokeWidth="6" opacity="0.7"/>
              </g>
              
              <g id="buildings">
                <rect x="150" y="120" width="60" height="50" fill="#c0c0c0" opacity="0.6" rx="2"/>
                <rect x="250" y="100" width="80" height="70" fill="#c0c0c0" opacity="0.6" rx="2"/>
                <rect x="380" y="130" width="70" height="55" fill="#c0c0c0" opacity="0.6" rx="2"/>
                <rect x="650" y="110" width="90" height="75" fill="#c0c0c0" opacity="0.6" rx="2"/>
                <rect x="780" y="140" width="65" height="50" fill="#c0c0c0" opacity="0.6" rx="2"/>
                <rect x="950" y="125" width="75" height="60" fill="#c0c0c0" opacity="0.6" rx="2"/>
                
                <rect x="120" y="320" width="70" height="60" fill="#c0c0c0" opacity="0.6" rx="2"/>
                <rect x="220" y="340" width="85" height="65" fill="#c0c0c0" opacity="0.6" rx="2"/>
                <rect x="420" y="330" width="75" height="55" fill="#c0c0c0" opacity="0.6" rx="2"/>
                <rect x="720" y="350" width="80" height="70" fill="#c0c0c0" opacity="0.6" rx="2"/>
                <rect x="880" y="320" width="70" height="60" fill="#c0c0c0" opacity="0.6" rx="2"/>
                
                <rect x="180" y="520" width="90" height="75" fill="#c0c0c0" opacity="0.6" rx="2"/>
                <rect x="320" y="540" width="75" height="65" fill="#c0c0c0" opacity="0.6" rx="2"/>
                <rect x="480" y="530" width="85" height="70" fill="#c0c0c0" opacity="0.6" rx="2"/>
                <rect x="680" y="550" width="70" height="60" fill="#c0c0c0" opacity="0.6" rx="2"/>
                <rect x="820" y="520" width="80" height="75" fill="#c0c0c0" opacity="0.6" rx="2"/>
              </g>
              
              <g id="landmarks">
                <circle cx="600" cy="400" r="25" fill="#ff6b6b" opacity="0.7"/>
                <text x="600" y="405" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">★</text>
                
                <circle cx="300" cy="250" r="20" fill="#4ecdc4" opacity="0.7"/>
                <circle cx="850" cy="350" r="20" fill="#4ecdc4" opacity="0.7"/>
                <circle cx="450" cy="550" r="20" fill="#4ecdc4" opacity="0.7"/>
              </g>
            </svg>

            <div
              ref={pinRef}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{ transformOrigin: "center bottom" }}
            >
              <div className="relative">
                <svg
                  width="40"
                  height="50"
                  viewBox="0 0 24 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C7.58 0 4 3.58 4 8C4 13.5 12 24 12 24C12 24 20 13.5 20 8C20 3.58 16.42 0 12 0Z"
                    fill="#EF4444"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="8" r="3" fill="#FFFFFF" />
                </svg>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white/90 text-black text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
                Sahu Complex, 2rd Floor
                  <br />
                  Indore, MP 453001
                  <br />
                  India
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

