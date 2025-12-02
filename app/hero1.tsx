"use client";

import React, { useState, useEffect } from 'react';

function Hero1() {
  const [isImmersive, setIsImmersive] = useState(false);
  
  // Inject style for hiding scrollbar
  useEffect(() => {
    const styleId = 'hide-scrollbar-style';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        .hide-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, []); 

  return (
    <div className='h-full w-full relative overflow-hidden bg-black/[0.96] flex flex-col items-center justify-center py-[30px]'>
        {/* Toggle Switch Container */}
        <div className="flex items-center gap-6">
          {/* Static PDP Label */}
          <span className={`text-sm font-medium transition-colors duration-300 ${
            !isImmersive ? 'text-white' : 'text-gray-400'
          }`}>
            Static Page
          </span>

          {/* Toggle Switch */}
          <button
            onClick={() => setIsImmersive(!isImmersive)}
            className={`relative w-32 h-14 rounded-full border overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black ${
              isImmersive 
                ? 'border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.6)]' 
                : 'bg-gray-800 border-gray-600'
            }`}
          >
            {/* Gradient Background */}
            <div className={`absolute inset-0 transition-opacity duration-300 ${
              isImmersive ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/80 via-blue-500/90 to-indigo-600"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-400/50 to-transparent"></div>
            </div>

            {/* Sliding Thumb */}
            <span
              className={`absolute top-1.5 w-11 h-11 bg-white rounded-full transition-transform duration-300 shadow-lg flex items-center justify-center ${
                isImmersive ? 'translate-x-[4.5rem]' : 'translate-x-1'
              }`}
            >
              {/* Blue Icon inside thumb */}
              <svg 
                className="w-5 h-5 text-blue-500" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 10V3L4 14h7v7l9-11h-7z" 
                />
              </svg>
            </span>
          </button>

          {/* Immersive PDP Label */}
          <span className={`text-sm font-medium transition-colors duration-300 ${
            isImmersive ? 'text-white' : 'text-gray-400'
          }`}>
            Immersive Pages
          </span>
        </div>

        <div className='h-full w-full flex flex-col px-8 md:px-16 lg:px-24 py-6 relative z-10'>
            <div className={`h-full w-full rounded-2xl p-2 transition-all duration-500 ${
              isImmersive 
                ? 'bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-blue-400/50 shadow-[0_0_30px_rgba(59,130,246,0.6)]' 
                : 'bg-transparent border-0 shadow-none'
            }`}>
                <div 
                  className={`h-full w-full rounded-xl p-4 transition-all duration-500 overflow-y-auto max-h-[calc(100vh-200px)] ${
                    isImmersive ? 'hide-scrollbar' : ''
                  }`}
                  style={isImmersive ? { 
                    background: 'linear-gradient(to top, #000000, #434343)',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                  } : {
                    background: '#FBF3D1'
                  }}
                >
                    {/* Navbar */}
                    <div className={`flex justify-between items-center h-16 w-full px-6 md:px-8 border-b mt-8 transition-all duration-500 ${
                      isImmersive 
                        ? 'bg-black backdrop-blur-md rounded-full border-gray-700/30 shadow-lg' 
                        : 'bg-[#E8D9B0] border-[#8b6f47] rounded-none shadow-none'
                    }`}>
                        {/* Logo */}
                        {isImmersive && (
                            <div className='flex items-center gap-2'>
                                <div className='w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg'>
                                    <span className='text-white font-bold text-lg'>L</span>
                                </div>
                                <span className='text-white font-semibold text-lg hidden sm:block'>Leezova</span>
                            </div>
                        )}
                        {!isImmersive && (
                            <div className='flex items-center gap-2'>
                                <span className='text-[#5a4a3a] font-semibold text-lg'>Leezova</span>
                            </div>
                        )}

                        {/* Navigation Links */}
                        <div className='flex items-center gap-2 md:gap-6'>
                            <a 
                                href='#home' 
                                className={`px-4 py-2 transition-all duration-200 text-sm md:text-base font-medium ${
                                  isImmersive 
                                    ? 'text-gray-300 hover:text-white relative group' 
                                    : 'text-[#6b5a4a] hover:text-[#5a4a3a]'
                                }`}
                            >
                                Home
                                {isImmersive && (
                                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300'></span>
                                )}
                            </a>
                            <a 
                                href='#about' 
                                className={`px-4 py-2 transition-all duration-200 text-sm md:text-base font-medium ${
                                  isImmersive 
                                    ? 'text-gray-300 hover:text-white relative group' 
                                    : 'text-[#6b5a4a] hover:text-[#5a4a3a]'
                                }`}
                            >
                                About
                                {isImmersive && (
                                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300'></span>
                                )}
                            </a>
                            <a 
                                href='#contact' 
                                className={`px-4 py-2 transition-all duration-200 text-sm md:text-base font-medium ${
                                  isImmersive 
                                    ? 'text-gray-300 hover:text-white relative group' 
                                    : 'text-[#6b5a4a] hover:text-[#5a4a3a]'
                                }`}
                            >
                                Contact
                                {isImmersive && (
                                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300'></span>
                                )}
                            </a>
                        </div>

                        {/* User Icon */}
                        <div className='flex items-center gap-3'>
                            <button className={`w-10 h-10 rounded-full border transition-all duration-200 flex items-center justify-center shadow-md group ${
                              isImmersive 
                                ? 'bg-gradient-to-br from-gray-700 to-gray-800 border-gray-600 hover:border-blue-500 hover:shadow-blue-500/20' 
                                : 'bg-[#E8D9B0] border-[#8b6f47] hover:border-[#a0826d]'
                            }`}>
                                <svg 
                                    className={`w-5 h-5 transition-colors duration-200 ${
                                      isImmersive 
                                        ? 'text-gray-400 group-hover:text-blue-400' 
                                        : 'text-[#6b5a4a] group-hover:text-[#5a4a3a]'
                                    }`}
                                    fill='none' 
                                    viewBox='0 0 24 24' 
                                    stroke='currentColor'
                                >
                                    <path 
                                        strokeLinecap='round' 
                                        strokeLinejoin='round' 
                                        strokeWidth={2} 
                                        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' 
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Content Below Navbar */}
                    <div className='mt-12 px-4 md:px-8'>
                        {/* Hero Section */}
                        <div className={`max-w-4xl mx-auto mb-16 transition-all duration-500 ${
                          isImmersive ? 'text-center' : 'text-left'
                        }`}>
                            <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight transition-all duration-500 ${
                              isImmersive 
                                ? 'text-white' 
                                : 'text-[#5a4a3a]'
                            }`} style={!isImmersive ? { 
                              textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                            } : {}}>
                                {isImmersive ? (
                                    <>
                                        Immersive Product Experience
                                        <span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'>
                                            That Engages
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        Static Product Pages
                                        <span className='block text-[#8b6f47]' style={{
                                          textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                                        }}>
                                            That Inform
                                        </span>
                                    </>
                                )}
                            </h1>
                            <p className={`text-lg md:text-xl mb-8 max-w-2xl transition-all duration-500 ${
                              isImmersive ? 'text-gray-300 mx-auto' : 'text-[#6b5a4a]'
                            }`}>
                                {isImmersive 
                                    ? 'Experience products in a whole new way with interactive views, immersive environments, and engaging storytelling.'
                                    : 'Traditional product pages with clear information, specifications, and straightforward navigation.'
                                }
                            </p>
                            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-500 ${
                              isImmersive ? 'justify-center' : 'justify-start'
                            }`}>
                                <button className={`px-8 py-3 font-semibold transition-all duration-300 ${
                                  isImmersive 
                                    ? 'rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105' 
                                    : 'rounded-none bg-[#8b6f47] text-[#FBF3D1] border-2 border-[#a0826d]'
                                }`}>
                                    Get Started
                                </button>
                                <button className={`px-8 py-3 font-semibold transition-all duration-300 ${
                                  isImmersive 
                                    ? 'rounded-full bg-gray-800/50 backdrop-blur-sm text-white border border-gray-700 hover:border-gray-600' 
                                    : 'rounded-none bg-[#E8D9B0] text-[#6b5a4a] border-2 border-[#8b6f47]'
                                }`}>
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Features Grid */}
                        {isImmersive ? (
                            <>
                                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16'>
                                    {[
                                        {
                                            icon: '🎯',
                                            title: 'Interactive 3D',
                                            description: 'Explore products from every angle with interactive 3D models'
                                        },
                                        {
                                            icon: '✨',
                                            title: 'Immersive Story',
                                            description: 'Engaging storytelling that brings products to life'
                                        },
                                        {
                                            icon: '🚀',
                                            title: 'Enhanced Engagement',
                                            description: 'Higher conversion rates through engaging experiences'
                                        }
                                    ].map((feature, index) => (
                                        <div 
                                            key={index}
                                            className='p-6 rounded-xl backdrop-blur-sm border bg-black/40 border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group'
                                        >
                                            <div className='text-4xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                                                {feature.icon}
                                            </div>
                                            <h3 className='text-xl font-semibold mb-2 text-white'>
                                                {feature.title}
                                            </h3>
                                            <p className='text-sm text-gray-400'>
                                                {feature.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Additional Content Sections */}
                                <div className='max-w-6xl mx-auto mt-24 space-y-24 pb-16'>
                                    {/* Services Section */}
                                    <div className='text-center'>
                                        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                                            Our Services
                                        </h2>
                                        <p className='text-gray-400 max-w-2xl mx-auto mb-12'>
                                            Comprehensive solutions designed to transform your digital presence
                                        </p>
                                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                                            {[
                                                { title: 'Web Development', desc: 'Custom web solutions' },
                                                { title: 'Mobile Apps', desc: 'iOS & Android development' },
                                                { title: 'Cloud Services', desc: 'Scalable infrastructure' },
                                                { title: 'AI Integration', desc: 'Smart automation' }
                                            ].map((service, idx) => (
                                                <div key={idx} className='p-6 rounded-lg bg-black/30 border border-gray-800 hover:border-blue-500/50 transition-all'>
                                                    <h3 className='text-lg font-semibold text-white mb-2'>{service.title}</h3>
                                                    <p className='text-sm text-gray-400'>{service.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Stats Section */}
                                    <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                                        {[
                                            { number: '500+', label: 'Projects Completed' },
                                            { number: '200+', label: 'Happy Clients' },
                                            { number: '50+', label: 'Team Members' },
                                            { number: '10+', label: 'Years Experience' }
                                        ].map((stat, idx) => (
                                            <div key={idx} className='text-center p-6 rounded-lg bg-black/30 border border-gray-800'>
                                                <div className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2'>
                                                    {stat.number}
                                                </div>
                                                <div className='text-sm text-gray-400'>{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Technology Stack */}
                                    <div>
                                        <h2 className='text-3xl md:text-4xl font-bold text-white mb-8 text-center'>
                                            Technology Stack
                                        </h2>
                                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
                                            {['React', 'Next.js', 'Node.js', 'Python', 'AWS', 'Docker'].map((tech, idx) => (
                                                <div key={idx} className='p-4 rounded-lg bg-black/30 border border-gray-800 hover:border-blue-500/50 transition-all text-center'>
                                                    <span className='text-white font-medium'>{tech}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Testimonials */}
                                    <div>
                                        <h2 className='text-3xl md:text-4xl font-bold text-white mb-8 text-center'>
                                            What Clients Say
                                        </h2>
                                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                                            {[
                                                { quote: 'Outstanding service and innovative solutions', author: 'John Doe', role: 'CEO, Tech Corp' },
                                                { quote: 'Transformed our digital presence completely', author: 'Jane Smith', role: 'CTO, Startup Inc' },
                                                { quote: 'Professional team with exceptional expertise', author: 'Mike Johnson', role: 'Founder, Digital Co' }
                                            ].map((testimonial, idx) => (
                                                <div key={idx} className='p-6 rounded-lg bg-black/30 border border-gray-800'>
                                                    <p className='text-gray-300 mb-4 italic'>"{testimonial.quote}"</p>
                                                    <div className='text-sm'>
                                                        <div className='text-white font-semibold'>{testimonial.author}</div>
                                                        <div className='text-gray-400'>{testimonial.role}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA Section */}
                                    <div className='text-center p-12 rounded-2xl bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border border-blue-500/30'>
                                        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                                            Ready to Transform Your Business?
                                        </h2>
                                        <p className='text-gray-300 mb-8 max-w-2xl mx-auto'>
                                            Let's discuss how we can help you achieve your goals with cutting-edge technology
                                        </p>
                                        <button className='px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all'>
                                            Schedule a Consultation
                                        </button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className='flex flex-col gap-4 mt-16 max-w-2xl'>
                                <div className='text-[#5a4a3a]'>
                                    <h3 className='text-xl font-semibold mb-1'>Clear Layout</h3>
                                    <p className='text-[#6b5a4a]'>Clean and organized layout for easy navigation</p>
                                </div>
                                <div className='text-[#5a4a3a]'>
                                    <h3 className='text-xl font-semibold mb-1'>Quick Access</h3>
                                    <p className='text-[#6b5a4a]'>Fast access to all product information and specs</p>
                                </div>
                                <div className='text-[#5a4a3a]'>
                                    <h3 className='text-xl font-semibold mb-1'>Reliable Performance</h3>
                                    <p className='text-[#6b5a4a]'>Consistent performance across all devices</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero1