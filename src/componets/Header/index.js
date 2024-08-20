import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blue-sm bg-n-8/90 backdrop-blur-sm bg-[#0e0c15e6]">
      <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="/">
          <img
            src="images/colorful-bird-illustration-gradient_343694-1741.avif"
            width="60"
            height="35"
            alt="logo"
            className="rounded-full"
          />
        </a>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav
          className={`lg:flex ${
            menuOpen ? "block" : "hidden"
          } fixed lg:static inset-0 lg:inset-auto bg-n-8 lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto mt-[90px] lg:flex-row bg-[#0e0c15e6] lg:mt-0 lg:bg-transparent">
            <div className="block relative font-code text-2xl uppercase text-n-1 transition-colors text-[#c4b9ad] hover:text-gray-50 cursor-pointer px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:text-n-1/50 lg:leading-5 lg:hover:text-n-1 xl:px-12">
              Features
            </div>
            <div className="block relative font-code text-2xl uppercase text-n-1 transition-colors text-[#c4b9ad] hover:text-gray-50 cursor-pointer px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:text-n-1/50 lg:leading-5 lg:hover:text-n-1 xl:px-12">
              How to use
            </div>
            <div className="block relative font-code text-2xl uppercase text-n-1 transition-colors text-[#c4b9ad] hover:text-gray-50 cursor-pointer px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:text-n-1/50 lg:leading-5 lg:hover:text-n-1 xl:px-12">
              Pricing
            </div>
            <div className="block relative font-code text-2xl uppercase text-n-1 transition-colors text-[#c4b9ad] hover:text-gray-50 cursor-pointer px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:text-n-1/50 lg:leading-5 lg:hover:text-n-1 xl:px-12">
              Roadmap
            </div>
          </div>
        </nav>

        <div className="hidden lg:flex items-center">
          <span className="block relative font-code text-2xl uppercase text-n-1 transition-colors text-[#c4b9ad] hover:text-gray-50 cursor-pointer px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:text-n-1/50 lg:leading-5 lg:hover:text-n-1 xl:px-12">
            create account
          </span>
          <button className="btn">SIGN IN</button>
        </div>

        {/* Mobile Navigation Overlay */}
        {menuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-10"
            onClick={toggleMenu}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Header;
