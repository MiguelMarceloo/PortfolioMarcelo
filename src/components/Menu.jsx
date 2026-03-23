import React, { useState } from "react";
import { motion } from "framer-motion";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Tech", href: "#techstack" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-4xl">
      <div className="bg-card/40 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 flex justify-between items-center shadow-2xl transition-all duration-300">
        <a href="#home" className="text-xl font-bold font-poppins bg-gradient-to-r from-accent-primary to-accent-tertiary bg-clip-text text-transparent group relative">
          MM
          <div className="absolute -inset-2 bg-accent-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 bg-card/50 backdrop-blur-xl border border-white/10 px-8 py-3 rounded-2xl shadow-xl">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-poppins font-bold uppercase tracking-widest text-muted hover:text-white transition-all transform hover:scale-110 active:scale-95"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-xl transition-colors"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="absolute top-full left-0 right-0 mt-4 bg-card/90 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 md:hidden shadow-3xl"
        >
          <ul className="flex flex-col space-y-6">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={toggleMenu}
                  className="block text-xl font-poppins font-bold text-center text-white hover:text-accent-primary transition-colors py-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Menu;
  
