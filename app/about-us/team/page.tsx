"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { teamMembers, teamTypes, TeamMember } from "./team-data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Team() {
  const containerRef = useRef<HTMLDivElement>(null);
  const redDivRef = useRef<HTMLDivElement>(null);
  const [selectedTeam, setSelectedTeam] = useState<string>('all');
  const [row1Members, setRow1Members] = useState<TeamMember[]>([]);
  const [middleRowMembers, setMiddleRowMembers] = useState<TeamMember[]>([]);
  const [row3Members, setRow3Members] = useState<TeamMember[]>([]);

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Calculate member arrays only on client side to avoid hydration mismatch
  useEffect(() => {
    if (selectedTeam === 'all') {
      setRow1Members([]);
      setMiddleRowMembers([]);
      setRow3Members([]);
      return;
    }

    const filteredMembers = teamMembers.filter(member => member.type === selectedTeam);
    const otherTeamMembers = teamMembers.filter(member => member.type !== selectedTeam);
    
    const selectedTeamForMiddle = filteredMembers.slice(0, 5);
    const neededForMiddle = Math.max(0, 5 - selectedTeamForMiddle.length);
    
    const shuffledOtherForMiddle = shuffleArray(otherTeamMembers);
    const randomForMiddle = shuffledOtherForMiddle.slice(0, neededForMiddle);
    
    const middle = [...selectedTeamForMiddle, ...randomForMiddle].slice(0, 5);
    setMiddleRowMembers(middle);
    
    const remainingFromSelectedTeam = filteredMembers.slice(5);
    
    const totalNeededForRows = 8;
    const alreadyUsedInRows = remainingFromSelectedTeam.length;
    const neededFromOtherTeams = Math.max(0, totalNeededForRows - alreadyUsedInRows);
    
    const usedInMiddle = new Set(middle.map(m => m.name));
    const availableOtherMembers = otherTeamMembers.filter(m => !usedInMiddle.has(m.name));
    const shuffledOtherMembers = shuffleArray(availableOtherMembers);
    const randomOtherMembers = shuffledOtherMembers.slice(0, neededFromOtherTeams);
    
    const allRemainingMembers = [...remainingFromSelectedTeam, ...randomOtherMembers];
    
    setRow1Members(allRemainingMembers.slice(0, 4));
    setRow3Members(allRemainingMembers.slice(4, 8));
  }, [selectedTeam]);

  useEffect(() => {
    let ctx: gsap.Context | null = null;
    
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        const columns = gsap.utils.toArray(".team-column") as HTMLElement[];
        
        if (columns.length === 0) {
          console.warn("No columns found with class 'team-column'");
          return;
        }
        
        const triggerElement = redDivRef.current;
        
        if (!triggerElement) return;
        
          columns.forEach((column) => {
            gsap.set(column, { scale: 1 });

            gsap.fromTo(
              column,
              {
                scale: 1.05,
              },
              {
                scale: 0.95,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: triggerElement,
                  start: "top bottom",
                  end: "center center",
                  scrub: 2,
                  markers: false,
                },
              }
            );
          });

        ScrollTrigger.refresh();
      }, containerRef);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (ctx) {
        ctx.revert();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selectedTeam]);

  return (
    <div className="min-h-screen w-full pt-24 relative" ref={containerRef}>
      <div className="h-[500px] flex items-center justify-center">
        <div className="text-left">
          <span className="text-gray-200 text-9xl">The Crew who brew</span>
          <br />
          <span className="text-gray-200 text-9xl">the </span>
          <span className="text-[#4169E1] text-9xl">Code</span>
        </div>
      </div>
      <div className="h-screen w-full relative" ref={redDivRef}>
        <div 
          className="absolute inset-0 z-20 pointer-events-none py-8"
          style={{
            background: 'radial-gradient(circle,rgba(10, 10, 10, 0) 0%, rgba(10, 10, 10, 1) 100%)'
          }}
        ></div>
        <div className="relative z-10 h-full">
        <div className="h-full flex flex-col gap-4 text-black">
          <div className="flex-1">
            <div className="h-full flex gap-2">
              {selectedTeam === 'all' ? (
                <>
                  <div className="flex-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column">Shubham</div>
                  <div className="flex-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column">Riddhesh</div>
                  <div className="flex-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column">Sourabh</div>
                  <div className="flex-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column">Column 4</div>
                </>
              ) : (
                (() => {
                  const membersToShow = row1Members.length >= 4 
                    ? row1Members.slice(0, 4)
                    : [...row1Members, ...Array(4 - row1Members.length).fill(null)].slice(0, 4);
                  
                  return membersToShow.map((member, index) => (
                    <div
                      key={member ? member.name : `empty-row1-${index}`}
                      className="flex-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column"
                    >
                      {member ? member.name : ''}
                    </div>
                  ));
                })()
              )}
            </div>
          </div>
          <div className="flex-1 overflow-hidden relative">
            <div className="h-full flex gap-2">
              {selectedTeam === 'all' ? (
                <>
                  <div className="flex-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column -ml-[10%]">Praveen</div>
                  <div className="flex-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column">Tisha</div>
                  <div className="flex-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column">Rajat</div>
                  <div className="flex-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column">Divyanshi</div>
                  <div className="flex-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column -mr-[10%]">Deepak</div>
                </>
              ) : (
                (() => {
                  const membersToShow = middleRowMembers.length >= 5 
                    ? middleRowMembers.slice(0, 5)
                    : [...middleRowMembers, ...Array(5 - middleRowMembers.length).fill(null)].slice(0, 5);
                  
                  return membersToShow.map((member, index) => {
                    const isFirst = index === 0;
                    const isLast = index === 4;
                    return (
                      <div
                        key={member ? member.name : `empty-${index}`}
                        className={`flex-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column ${
                          isFirst ? '-ml-[10%]' : ''
                        } ${
                          isLast ? '-mr-[10%]' : ''
                        }`}
                      >
                        {member ? member.name : ''}
                      </div>
                    );
                  });
                })()
              )}
            </div>
          </div>
          <div className="flex-1">
            <div className="h-full flex gap-2">
              {selectedTeam === 'all' ? (
                <>
                  <div className="flex-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column">Aastha</div>
                  <div className="flex-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column">Ajay</div>
                  <div className="flex-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column">Swati</div>
                  <div className="flex-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column">Lakshya</div>
                </>
              ) : (
                (() => {
                  const membersToShow = row3Members.length >= 4 
                    ? row3Members.slice(0, 4)
                    : [...row3Members, ...Array(4 - row3Members.length).fill(null)].slice(0, 4);
                  
                  return membersToShow.map((member, index) => (
                    <div
                      key={member ? member.name : `empty-row3-${index}`}
                      className="flex-1 border border-gray-300 dark:border-gray-700 rounded-xl bg-white team-column"
                    >
                      {member ? member.name : ''}
                    </div>
                  ));
                })()
              )}
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="w-full py-4 px-6">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {teamTypes.map((team) => (
            <button
              key={team.id}
              onClick={() => setSelectedTeam(team.id)}
              className={`px-4 py-2 rounded-xl font-medium text-xs transition-all duration-300 ${
                selectedTeam === team.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-black/60 text-gray-300 hover:bg-blue-600 hover:text-white'
              }`}
            >
              {team.label}
            </button>
          ))}
        </div>
      </div>
      <div className="h-screen flex items-center justify-center px-6 my-20">

      <div className="w-full max-w-6xl aspect-[21/9] rounded-2xl overflow-hidden bg-gray-900 border border-red-500 p-2">
        <div className="w-full h-full border border-yellow-500 rounded-lg">
          
        </div>
      </div>
    </div>
  </div>
);
}
