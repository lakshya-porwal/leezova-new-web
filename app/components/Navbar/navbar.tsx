"use client";

import React, { useState } from "react";
import Link from "next/link";
import { navRoutes } from "./routes";

const PlaceholderIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className="text-gray-400"
  >
    <rect x="3" y="3" width="6" height="6" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="15" y="3" width="6" height="6" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="3" y="15" width="6" height="6" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="15" y="15" width="6" height="6" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

const NAV_LINK_BASE = "px-4 py-2 rounded-lg transition-colors";
const NAV_LINK_ACTIVE = "bg-[#2d3447] text-white";
const NAV_LINK_INACTIVE = "text-gray-300 hover:bg-[#2d3447] hover:text-white";
const DEFAULT_DESCRIPTION = "Explore our offerings and discover how we can help you achieve your goals.";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<{ routeId: string; itemIndex: number } | null>(null);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    target.style.display = 'none';
    const fallback = target.nextElementSibling as HTMLElement;
    if (fallback) fallback.classList.remove('hidden');
  };

  const handleRightPanelMouseEnter = (routeId: string) => {
    if (hoveredItem?.routeId === routeId) {
      setHoveredItem({ routeId, itemIndex: hoveredItem.itemIndex });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">★</span>
            <span className="text-xl font-semibold">LEEZOVA</span>
          </Link>

          <div className="flex items-center space-x-1">
            {navRoutes.map((route, index) => {
              const routeId = route.path || `nav-${index}-${route.label.toLowerCase().replace(/\s+/g, '-')}`;
              const isActive = activeDropdown === routeId;
              const navLinkClassName = `${NAV_LINK_BASE} ${isActive ? NAV_LINK_ACTIVE : NAV_LINK_INACTIVE}`;

              const activeItem = route.dropdownItems && (hoveredItem?.routeId === routeId
                ? route.dropdownItems[hoveredItem.itemIndex]
                : route.dropdownItems[0]);

              return (
                <div
                  key={routeId}
                  className="relative"
                  onMouseEnter={() => route.hasDropdown && setActiveDropdown(routeId)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {route.path ? (
                    <Link href={route.path} className={navLinkClassName}>
                      {route.label}
                    </Link>
                  ) : (
                    <div className={`${navLinkClassName} cursor-pointer`}>
                      {route.label}
                    </div>
                  )}

                  {route.hasDropdown && isActive && route.dropdownItems && (
                    <div
                      className="absolute top-full left-0 pt-2 w-[600px] z-50"
                      onMouseEnter={() => setActiveDropdown(routeId)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="bg-[#2d3447] rounded-lg shadow-2xl overflow-hidden">
                        <div className="grid grid-cols-2 gap-0">
                          <div className="p-6 space-y-4">
                            <div className="space-y-1">
                              {route.dropdownItems.map((item, idx) => (
                                <Link
                                  key={idx}
                                  href={item.path}
                                  className="block px-3 py-2 rounded-md hover:bg-[#3a4155] cursor-pointer transition-colors"
                                  onMouseEnter={() => setHoveredItem({ routeId, itemIndex: idx })}
                                  onMouseLeave={() => setHoveredItem(null)}
                                >
                                  <div className="font-medium text-white">{item.label}</div>
                                  {item.description && (
                                    <div className="text-sm text-gray-400">{item.description}</div>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>

                          <div
                            className="p-6 bg-[#252b3f]"
                            onMouseEnter={() => handleRightPanelMouseEnter(routeId)}
                          >
                            {activeItem && (
                              <div className="mb-4">
                                {activeItem.image ? (
                                  <div className="w-full h-48 rounded-lg overflow-hidden mb-4 backdrop-blur-md bg-black/20">
                                    <div className={`w-full h-full rounded-lg transition-all duration-500 ease-in-out ${
                                      hoveredItem?.routeId === routeId ? 'ml-0 mt-0' : 'ml-2 mt-2'
                                    }`}>
                                      <img
                                        src={activeItem.image}
                                        alt={activeItem.label}
                                        className="w-full h-full object-cover rounded-lg"
                                        onError={handleImageError}
                                      />
                                      <div className="w-full h-48 bg-[#3a4155] rounded-lg flex items-center justify-center hidden">
                                        <PlaceholderIcon size={48} />
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="w-16 h-16 bg-[#3a4155] rounded-lg flex items-center justify-center mb-4">
                                    <PlaceholderIcon size={24} />
                                  </div>
                                )}
                                <h3 className="text-xl font-semibold text-white mb-2">
                                  {activeItem.label}
                                </h3>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                  {activeItem.description || DEFAULT_DESCRIPTION}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <button className="px-6 py-2 bg-[#2d3447] hover:bg-[#3a4155] rounded-lg font-medium transition-colors">
            Schedule a Call
          </button>
        </div>
      </div>
    </div>
  );
}
