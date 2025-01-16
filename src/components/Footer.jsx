import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import sendIcon from "../assests/send.svg";
import locationIcon from "../assests/location.svg";
import callIcon from "../assests/call.svg";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
const Footer = () => (
  <footer className="bg-[#171719] text-white py-8 font-spaceGrotesk">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Left Side: Designer and Description */}
        <div className="md:w-1/3 mb-8  md:mb-0 pr-9">
          <h2 className="text-2xl font-bold mb-4">Designer</h2>
          <p className="text-[#7E7E7F]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>

        {/* Right Side: Quick Links, Important, and Contacts */}
        <div className="md:w-1/3 grid grid-cols-1 sm:grid-cols-2 gap-8 font-spaceGrotesk">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-[#7E7E7F]">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/career">Career</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/#techstack">Tech Stack</a>
              </li>
              <li>
                <a href="/#contact" >Contact</a>
              </li>
            </ul>
          </div>

          {/* Important */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Important</h3>
            <ul className="space-y-2 text-[#7E7E7F]">
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/cookies">Cookies Policy</a></li>
            </ul>
          </div> */}

          {/* Contacts */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacts</h3>
            <ul className="space-y-2 text-[#7E7E7F]">
              <li className="flex items-center space-x-2">
                <img src={locationIcon} alt="Location" className="w-4 h-4" />
                <span>Valenzuela</span>
              </li>
              <li className="flex items-center space-x-2">
                <img src={callIcon} alt="Phone" className="w-4 h-4" />
                <span>(+63)&nbsp;908&nbsp;876&nbsp;0769</span>
              </li>
              <li className="flex items-center space-x-2">
                <img src={sendIcon} alt="Email" className="w-4 h-4" />
                <span>miguelmarcelooo25@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section: Social Icons and Copyright */}
      <div className="border-t border-[#2E2E30] pt-6 mt-8">
        <div className="flex justify-between items-center">
          {/* Social Icons */}
          <div className="flex space-x-4">
          <AiOutlineLinkedin />
            <FaFacebook/>
            <FaXTwitter />
          </div>

          {/* Copyright */}
          <p className="text-[#7E7E7F] text-sm">
            Copyright 2024 | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
