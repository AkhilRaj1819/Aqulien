import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import Navbar from './Navbar';
export default function Home() {
  const splineRef = useRef(null);

  const handleLoad = (scene) => {
    splineRef.current = scene;
  };

  const triggerColorChange = (eventName) => {
    if (splineRef.current) {
      splineRef.current.emitEvent('event', eventName);
      console.log(`🎨 Triggered Spline event: ${eventName}`);
    }
  };

  return (
    <div className="relative w-full h-[93vh]">
      <Navbar/>
      {/* Spline Model */}
      <div className="w-full mt-[-110px]  h-[100vh]">
        <Spline scene="/scene.splinecode" onLoad={handleLoad} />
      </div>

      {/* Text & Button Overlay */}
      <div className="absolute top-[85%] left-1/2 transform -translate-x-1/2 text-center px-4">
        <p className="text-[#1F1E55] text-xl md:text-2xl font-medium mb-5 max-w-[600px] mx-auto leading-relaxed">
          Crafted with cosmic precision, <br /> designed to turn heads on Earth.
        </p>
        <button className="bg-[#8A151D] hover:bg-[#a31d26] text-white px-8 py-3 rounded-full text-sm font-semibold shadow-md transition-all duration-300">
          Coming Soon...
        </button>
      </div>
    </div>
  );
}
