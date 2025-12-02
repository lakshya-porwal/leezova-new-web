"use client";

import { useState } from "react";

export default function OurProducts() {
  const [selectedOption, setSelectedOption] = useState("ERP");

  const options = [
    "ERP",
    "Warehousing",
    "Transportation",
    "E Commerce",
    "CRM",
  ];

  const descriptions: Record<string, string> = {
    "ERP": "An ERP (Enterprise Resource Planning) app is a software that integrates all key business processes—like finance, inventory, HR, and sales—into one platform. It streamlines operations, improves efficiency, and provides real-time insights for better decision-making.",
    "Warehousing": "A comprehensive warehousing management system that optimizes inventory control, storage operations, and logistics. It enables real-time tracking of goods, automated stock management, and efficient warehouse space utilization for maximum productivity.",
    "Transportation": "An advanced transportation management solution that coordinates logistics, fleet management, and route optimization. It helps businesses streamline shipping operations, reduce costs, and improve delivery efficiency across all transportation channels.",
    "E Commerce": "A powerful e-commerce platform that enables businesses to create, manage, and scale online stores. It provides seamless shopping experiences, integrated payment processing, inventory management, and comprehensive analytics for online retail success.",
    "CRM": "A Customer Relationship Management system that helps businesses manage interactions with customers and prospects. It centralizes customer data, tracks sales pipelines, automates marketing campaigns, and enhances customer service to drive growth and retention."
  };

  const currentDescription = descriptions[selectedOption] || descriptions["ERP"];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center my-12">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="flex items-center justify-start w-full h-full">
          <div className="w-1/3 flex flex-col">
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => setSelectedOption(option)}
                className={`pl-[50px] py-2 cursor-pointer transition-colors ${
                  selectedOption === option
                    ? "text-white bg-gray-800/70"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                {option}
              </div>
            ))}
          </div>
          <div className="border-l-1 w-full h-full flex flex-col items-center pt-4">
            <div className="h-full w-1/2 border-2 border-yellow-500 flex flex-col items-center justify-center gap-6 pt-[30px] pb-[20px] rounded-t-3xl">
              {/* Mobile Phone Container */}
              <div className="w-full flex items-center justify-center pt-6 border-b-2 border-gray-800">
                <div className="w-[240px] h-[320px] bg-gray-900 rounded-t-[32px] px-2.5 pt-2.5 shadow-2xl border-4 border-b-0 border-gray-800 relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />
                  
                  {/* Screen */}
                  <div className="w-full h-full bg-black rounded-t-[26px] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-gray-800 to-transparent flex items-center justify-between px-3 z-20">
                      <div className="text-white text-xs font-semibold">9:41</div>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 border border-white rounded-sm">
                          <div className="w-3/4 h-full bg-white rounded-sm" />
                        </div>
                        <div className="w-1 h-1 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Description Container */}
              <div className="w-full text-center text-gray-500 text-sm py-4">
                <p>{currentDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

