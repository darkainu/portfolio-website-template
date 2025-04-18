'use client'
import React, { useState, useRef, useEffect } from 'react';

const ParallaxSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    setWindowHeight(window.innerHeight);

    const handleScroll = (e: Event) => {
      const target = e.target as HTMLDivElement;
      setScrollPosition(target.scrollTop);
    };

    const updateDimensions = () => {
      setWindowHeight(window.innerHeight);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    container?.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      container?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollPercentage = windowHeight ? Math.min(1, Math.max(0, scrollPosition / windowHeight)) : 0;
  const skyOpacity = Math.max(0, Math.min(1, 1 - scrollPercentage));
  const treesOpacity = Math.max(0, Math.min(1, scrollPercentage));

  return (    <div ref={containerRef} className="relative min-h-screen overflow-y-auto h-screen">
      <div
        className="fixed inset-0 w-full h-full transition-all duration-500"
        style={{
          backgroundImage: `url('/images/dunes.webp')`,
          opacity: skyOpacity,
          transform: `translateY(${scrollPosition * 0.02}px)`, // Subtle upward movement
          zIndex: -2,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div
        className="fixed inset-0 w-full h-full transition-all duration-500"
        style={{
          backgroundImage: `url('/images/sky.webp')`,
          opacity: treesOpacity,
          transform: `translateY(${scrollPosition * 0.05}px)`,
          zIndex: -1,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          height: '120vh', // Adding extra height
          top: '-10vh'     // Positioning slightly higher
        }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;