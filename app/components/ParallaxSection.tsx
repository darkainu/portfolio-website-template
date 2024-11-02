import React from "react";

const ParallaxSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="fixed inset-0 w-full h-full perspective-1">
      {/* Background layer - Sky */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/sky.webp')`,
          transform: "translateZ(-1px) scale(2)",
          zIndex: -1,
        }}
      />
      
      {/* Foreground layer - Dunes */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/dunes.webp')`,
          transform: "translateZ(0) scale(1.5)",
          zIndex: -2,
        }}
      />
      
      {/* Content layer */}
      <div className="absolute w-full h-full overflow-y-auto overflow-x-hidden">
        {children}
      </div>
    </div>
  );
};export default ParallaxSection;