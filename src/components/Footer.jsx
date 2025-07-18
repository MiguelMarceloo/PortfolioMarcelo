import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import sendIcon from "../assests/send.svg";
import locationIcon from "../assests/location.svg";
import callIcon from "../assests/call.svg";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#171719] text-white py-8 font-spaceGrotesk">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/4 mb-8 md:mb-0 pr-4">
            <h2 className="text-2xl font-bold mb-4">Designer</h2>
            <p className="text-[#7E7E7F]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-[#7E7E7F]">
                  <li>
                    <a
                      href="#home"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("home");
                      }}
                      className="hover:text-white transition-colors duration-300"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("about");
                      }}
                      className="hover:text-white transition-colors duration-300"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#techstack"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("techstack");
                      }}
                      className="hover:text-white transition-colors duration-300"
                    >
                      Tech Stack
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("contact");
                      }}
                      className="hover:text-white transition-colors duration-300"
                    >
                      Contact
                    </a>
                  </li>
                  <li><a href="/career" className="hover:text-white transition-colors duration-300">Career</a></li>
                  <li><a href="/projects" className="hover:text-white transition-colors duration-300">Projects</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contacts</h3>
                <ul className="space-y-2 text-[#7E7E7F]">
                  <li className="flex items-center space-x-2">
                    <img src={locationIcon} alt="Location" className="w-4 h-4" />
                    <span>Valenzuela</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <img src={callIcon} alt="Phone" className="w-4 h-4" />
                    <span>(+63) 908 876 0769</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <img src={sendIcon} alt="Email" className="w-4 h-4" />
                    <span className="break-words">miguelmarcelooo25@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#2E2E30] pt-6 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 sm:mb-0">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <AiOutlineLinkedin className="w-6 h-6 hover:text-blue-500 transition-colors duration-300" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="w-6 h-6 hover:text-blue-600 transition-colors duration-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="w-6 h-6 hover:text-white transition-colors duration-300" />
              </a>
            </div>
            <p className="text-[#7E7E7F] text-sm">
              Copyright 2025 | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;