'use client'

import React, { useEffect, useState, useRef } from "react";

const ParallaxSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLDivElement;
      setScrollPosition(target.scrollTop);
    };

    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-y-auto h-screen">
      <div
        className="fixed inset-0 w-full h-[150vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/sky.webp')`,
          transform: `translateY(${scrollPosition * 0.5}px)`,
          zIndex: -2,
        }}
      />
      
      <div
        className="fixed inset-0 w-full h-[150vh] bg-cover bg-bottom"
        style={{
          backgroundImage: `url('/images/dunes.webp')`,
          transform: `translateY(${scrollPosition * 0.3}px)`,
          zIndex: -1,
        }}
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;