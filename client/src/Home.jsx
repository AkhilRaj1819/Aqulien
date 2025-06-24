import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';

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
      <div className="w-full h-[83vh]">
        <Spline scene="/scene.splinecode" onLoad={handleLoad} />
      </div>

      <div className="absolute top-[75%] left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-black text-lg mb-4 px-4">
          Crafted with cosmic precision, designed to turn heads on Earth.
        </p>
        <button className='bg-[#222157] text-white px-4 py-2 rounded-full'>Comming soon....</button>
      </div>
    </div>
  );
}
