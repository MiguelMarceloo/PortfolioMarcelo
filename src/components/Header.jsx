import React from "react";
import likedIcon from "../assests/linked.svg";
import facebookIcon from "../assests/facebook.svg";
import twitterIcon from "../assests/twitter.svg";
import sendIcon from "../assests/send.svg";
import locationIcon from "../assests/location.svg";
import callIcon from "../assests/call.svg";

const Header = () => (
  <header className="bg-[#171719] text-white py-4 ">
    <div className="container mx-auto flex justify-between items-center">
      {/* Left side: Portfolio title and social icons */}
      <h1 className="text-2xl font-bold flex items-center">
        <img src={likedIcon} alt="Liked Icon" className="inline w-8 h-8 mr-2" />
        <img src={facebookIcon} alt="Facebook Icon" className="inline w-8 h-8 mr-2" />
        <img src={twitterIcon} alt="Twitter Icon" className="inline w-8 h-8 mr-2" />
      </h1>

      {/* Right side: Contact icons */}
      <div className="flex items-center space-x-2 font-spaceGrotesk">
        <img src={sendIcon} alt="Send Icon" className="inline w-4 h-4" />
        <span className="text-sm text-[#7e7e7f] pr-4">miguelmarcelooo25@gmail.com</span>
        <div className="flex items-center space-x-2">
          <img src={locationIcon} alt="Location Icon" className="inline w-4 h-4 " />
          <span className="text-sm text-[#7e7e7f] pr-4">Valenzuela City</span>
          
        </div>
        <img src={callIcon} alt="Call Icon" className="inline w-4 h-4" />
        <span className="text-sm text-[#7e7e7f] pr-4">+69 988760769</span>
      </div>
    </div>
  </header>
);

export default Header;
