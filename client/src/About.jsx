import React from 'react';
import Navbar from './Navbar';
const About = () => {
  return (
    <>
    <Navbar/>
    <div className="w-full bg-white text-[#1F1E55]">

      {/* Hero / Brand Intro */}
      <section className="text-center px-6 md:px-16 py-20 bg-gradient-to-b from-white to-[#F8F9FF]">
        <h1 className="text-4xl font-extrabold mb-4">Meet <span className="text-[#8A151D]">Aqulien</span></h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Aqulien is more than a water bottle — it's a symbol of futuristic design and practical innovation.
          Engineered with <span className='font-bold'>steel durability</span>, <span className='font-bold'>better grip </span >, and a smart <span className='font-bold'>suction base /span</span>, it's made for Earth, inspired by beyond.
        </p>
        <img src="/logo.png" alt="Aqulien Logo" className="mx-auto mt-8 w-28 h-28" />
      </section>

      {/* Section 1: Image Left, Text Right */}
      <section className="flex flex-col md:flex-row items-center gap-10 px-6 md:px-16 py-16">
        <img
          src="/image.png"
          alt="Steel Bottle"
          className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
        />
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold">Built to Last</h2>
          <p className="text-lg leading-relaxed">
            Our stainless-steel core is engineered for endurance. Whether it’s an office desk or mountain trail, Aqulien keeps your beverage at the perfect temperature for hours.
          </p>
          <p className="text-lg leading-relaxed">
            The design is minimal, modern, and made to fit your everyday carry without compromise.
          </p>
        </div>
      </section>

      {/* Section 2: Text Left, Image Right */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-10 px-6 md:px-16 py-16">
        <img
          src="./cap.webp"
          alt="Suction Grip Bottle"
          className="w-full h-90 md:w-1/2 rounded-2xl shadow-lg object-cover"
        />
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold">Stay Grounded, Never Spilled</h2>
          <p className="text-lg leading-relaxed">
            With our patented suction cup base, Aqulien stands firm on any surface. No more accidental spills, just confidence with every placement.
          </p>
          <p className="text-lg leading-relaxed">
            It's ideal for workspaces, yoga mats, car dashboards — anywhere you want smart stability.
          </p>
        </div>
      </section>

      {/* Section 3: Mission */}
      <section className="px-6 md:px-16 py-20 text-center bg-[#F9FAFB]">
        <h2 className="text-3xl font-bold mb-6">Why Aqulien?</h2>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          We’re on a mission to blend <strong>design</strong>, <strong>sustainability</strong>, and <strong>smart functionality</strong>.
          Aqulien products are BPA-free, reusable, and responsibly built to reduce single-use waste — because hydration shouldn’t cost the planet.
        </p>
      </section>

      {/* Section 4: Call to Action */}
      <section className="px-6 md:px-16 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Go Beyond Ordinary?</h2>
        <p className="text-lg mb-6">Experience the future of hydration with Aqulien.</p>
        <a
          href="/"
          className="inline-block bg-[#8A151D] text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#721219] transition duration-300"
        >
          Comming soon...
        </a>
      </section>
    </div>
    </>
  );
};

export default About;
