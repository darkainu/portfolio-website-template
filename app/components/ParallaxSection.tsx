
import React from "react";

const ParallaxSection: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background layer - Sky */}
      <div
        className="absolute inset-0 bg-fixed bg-cover"
        style={{
          backgroundImage: './images/sky.webp',
          transform: "translateZ(-1px) scale(2)",
          zIndex: -1,
        }}
      />
      
      {/* Foreground layer - Dunes */}
      <div
        className="absolute inset-0 bg-fixed bg-cover"
        style={{
          backgroundImage: '/images/dunes.webp',
          transform: "translateZ(0) scale(1.5)",
          zIndex: -2,
        }}
      />
    </div>
  );
};

export default ParallaxSection;
