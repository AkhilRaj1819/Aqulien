import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // ✅ Updated links with name and path
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-gray-400/20">
      <div className="flex justify-between items-center px-6 md:px-12 py-5">
        <span
          className="font-nasalization text-[24px] md:text-[28px] font-extrabold tracking-wide cursor-pointer"
          style={{ color: '#1F1E55' }}
          onClick={() => navigate('/')}
        >
          Aqulien
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-[16px] font-medium">
          {navLinks.map(({ name, path }) => (
            <li
              key={name}
              className="relative cursor-pointer text-[#9596A0] hover:text-[#8A151D] transition-colors duration-300"
              onClick={() => navigate(path)}
            >
              {name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#8A151D] transition-all duration-300 hover:w-full rounded"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#1F1E55] focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col items-center gap-6 pb-6 text-[16px] font-medium md:hidden bg-white/10 backdrop-blur-md border-t border-gray-400/20">
          {navLinks.map(({ name, path }) => (
            <li
              key={name}
              className="cursor-pointer text-[#9596A0] hover:text-[#8A151D] transition-colors duration-300"
              onClick={() => {
                navigate(path);
                setIsOpen(false); // Close mobile menu on click
              }}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
