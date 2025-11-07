import React, { useEffect, useRef } from "react";
import likedIcon from "../assests/linked.svg";
import facebookIcon from "../assests/facebook.svg";
import twitterIcon from "../assests/twitter.svg";
import sendIcon from "../assests/send.svg";
import locationIcon from "../assests/location.svg";
import callIcon from "../assests/call.svg";

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.classList.add("visible");
    }
  }, []);

  return (
    <header
      ref={headerRef}
      id="home"
      className="section bg-[#171719] text-white py-4"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <a href="https://www.linkedin.com/in/miguelmarcelooo/" target="_blank" rel="noopener noreferrer">
            <img src={likedIcon} alt="LinkedIn Icon" className="inline w-6 h-6 md:w-8 md:h-8 hover:opacity-80 transition-opacity duration-300" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook Icon" className="inline w-6 h-6 md:w-8 md:h-8 hover:opacity-80 transition-opacity duration-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter Icon" className="inline w-6 h-6 md:w-8 md:h-8 hover:opacity-80 transition-opacity duration-300" />
          </a>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 font-spaceGrotesk text-center sm:text-left">
          <div className="flex items-center gap-1">
            <img src={sendIcon} alt="Send Icon" className="inline w-3 h-3 md:w-4 md:h-4" />
            <span className="text-xs md:text-sm text-[#7e7e7f]">miguelmarcelooo25@gmail.com</span>
          </div>
          <div className="flex items-center gap-1">
            <img src={locationIcon} alt="Location Icon" className="inline w-3 h-3 md:w-4 md:h-4" />
            <span className="text-xs md:text-sm text-[#7e7e7f]">Punturin Valenzuela City</span>
          </div>
          <div className="flex items-center gap-1">
            <img src={callIcon} alt="Call Icon" className="inline w-3 h-3 md:w-4 md:h-4" />
            <span className="text-xs md:text-sm text-[#7e7e7f]">+63 908 876 0769</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;