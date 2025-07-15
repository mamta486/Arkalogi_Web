import React, { useState } from "react";
import logo from "../assets/logo1.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#FFFFFF] w-full px-6 sm:px-10 md:px-[98px] ">
      <div className="w-full mx-auto flex items-center justify-between h-[70px]">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Arkalogi Logo"
            className="lg:w-[158.72px] lg:h-[36.35px] sm:w-[140px] sm:h-[36.35px] md:w-[120px] md:h-[36.35px] object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center gap-10 font-medium font-Inter text-[16px] text-[#000000] tracking-normal">
          <a href="#" className="hover:text-[#253E7F]">About</a>
          <a href="#" className="hover:text-[#253E7F] flex">Services <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></span></a>
          
          {/* <div className="relative group">
            <button className="flex items-center gap-1 hover:text-[#253E7F]">
              Services 
            </button>
            
          </div> */}
          <a href="#" className="hover:text-[#253E7F]">Careers</a>
          {/* <a href="#" className="hover:text-[#253E7F]">Contact </a> */}
        </div>

        {/* Sign up Button */}
        <div className="hidden md:block font-Inter">
          <button className="bg-[#253E7F] text-white px-5 py-3 hover:scale-105 transition rounded-[6px] leading-[100%] tracking-normal font-medium font-Inter text-[16px] cursor-pointer">
            Contact us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {!menuOpen ? (
            <>
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </>
          ) : (
            <svg className="w-6 h-6 text-black" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" stroke="black" strokeWidth="2" strokeLinecap="round" />
              <line x1="6" y1="6" x2="18" y2="18" stroke="black" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-400 rounded-md shadow-md px-6 pt-4 pb-4 mb-2 space-y-4 text-black font-medium font-Inter">
          <a href="#" onClick={() => setMenuOpen(false)} className="block">About</a>
          <button className="flex items-center gap-1">Services <span className="text-xs">▼</span></button>
          <a href="#" onClick={() => setMenuOpen(false)} className="block">Careers</a>
          <a href="#" onClick={() => setMenuOpen(false)} className="block">Contact </a>
          <button className="mt-4 w-full bg-[#253E7F] text-white py-2 rounded-[6px] ">
            Contact us
          </button>
        </div>
      )}
    </nav>
  );
}
