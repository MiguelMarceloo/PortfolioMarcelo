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
    <footer className="bg-[#171719] text-white py-8 md:py-12 font-spaceGrotesk border-t border-[#2E2E30]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Lawrence Miguel T. Marcelo</h2>
            <p className="text-[#7E7E7F] text-sm md:text-base leading-relaxed">
              Software Engineer specializing in full-stack development with expertise in cloud-native applications, MongoDB, and modern JavaScript frameworks.
            </p>
          </div>
          <div className="md:w-2/3 flex flex-col sm:flex-row gap-8 md:justify-end">
            <div className="flex-1 sm:max-w-[200px]">
              <h3 className="text-base md:text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-[#7E7E7F] text-sm">
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
                    href="#experience"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("experience");
                    }}
                    className="hover:text-white transition-colors duration-300"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#education"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("education");
                    }}
                    className="hover:text-white transition-colors duration-300"
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="#certifications"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("certifications");
                    }}
                    className="hover:text-white transition-colors duration-300"
                  >
                    Certifications
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
              </ul>
            </div>
            <div className="flex-1 sm:max-w-[250px]">
              <h3 className="text-base md:text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-3 text-[#7E7E7F] text-sm">
                <li className="flex items-start gap-2">
                  <img src={locationIcon} alt="Location" className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Punturin Valenzuela City, Metro Manila</span>
                </li>
                <li className="flex items-start gap-2">
                  <img src={callIcon} alt="Phone" className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <a href="tel:+639088760769" className="hover:text-white transition-colors">
                    +63 908 876 0769
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <img src={sendIcon} alt="Email" className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <a href="mailto:miguelmarcelooo25@gmail.com" className="hover:text-white transition-colors break-words">
                    miguelmarcelooo25@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-[#2E2E30] pt-6 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/miguelmarcelooo/" target="_blank" rel="noopener noreferrer">
                <AiOutlineLinkedin className="w-5 h-5 md:w-6 md:h-6 hover:text-blue-500 transition-colors duration-300" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="w-5 h-5 md:w-6 md:h-6 hover:text-blue-600 transition-colors duration-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="w-5 h-5 md:w-6 md:h-6 hover:text-white transition-colors duration-300" />
              </a>
            </div>
            <p className="text-[#7E7E7F] text-xs md:text-sm">
              Copyright 2025 Lawrence Miguel T. Marcelo | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;