import React, { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#171719] py-3 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#7e7e7f] hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-semibold justify-center font-spaceGrotesk">
          <li>
            <a href="#home" className="text-sm text-[#7e7e7f] hover:text-white transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-sm text-[#7e7e7f] hover:text-white transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="text-sm text-[#7e7e7f] hover:text-white transition-colors">
              Experience
            </a>
          </li>
          <li>
            <a href="#education" className="text-sm text-[#7e7e7f] hover:text-white transition-colors">
              Education
            </a>
          </li>
          <li>
            <a href="#certifications" className="text-sm text-[#7e7e7f] hover:text-white transition-colors">
              Certifications
            </a>
          </li>
          <li>
            <a href="#techstack" className="text-sm text-[#7e7e7f] hover:text-white transition-colors">
              Tech Stack
            </a>
          </li>
          <li>
            <a href="#contact" className="text-sm text-[#7e7e7f] hover:text-white transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col space-y-4 mt-4 font-spaceGrotesk">
            <li>
              <a
                href="#home"
                onClick={toggleMenu}
                className="block text-sm text-[#7e7e7f] hover:text-white transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={toggleMenu}
                className="block text-sm text-[#7e7e7f] hover:text-white transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={toggleMenu}
                className="block text-sm text-[#7e7e7f] hover:text-white transition-colors"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#education"
                onClick={toggleMenu}
                className="block text-sm text-[#7e7e7f] hover:text-white transition-colors"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#certifications"
                onClick={toggleMenu}
                className="block text-sm text-[#7e7e7f] hover:text-white transition-colors"
              >
                Certifications
              </a>
            </li>
            <li>
              <a
                href="#techstack"
                onClick={toggleMenu}
                className="block text-sm text-[#7e7e7f] hover:text-white transition-colors"
              >
                Tech Stack
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="block text-sm text-[#7e7e7f] hover:text-white transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Menu;
  