import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import Techstack from "../components/Techstack";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const App = () => {
  const [aboutInView, setAboutInView] = useState(false);
  const [experienceInView, setExperienceInView] = useState(false);
  const [educationInView, setEducationInView] = useState(false);
  const [certificationsInView, setCertificationsInView] = useState(false);
  const [techstackInView, setTechstackInView] = useState(false);
  const [contactInView, setContactInView] = useState(false);

  // Scroll event listener to detect if an element is in view
  const handleScroll = (id, setInView) => {
    const element = document.getElementById(id);
    if (!element) return;

    const scrollPosition = window.scrollY + window.innerHeight;
    const elementPosition = element.offsetTop;

    if (scrollPosition >= elementPosition) {
      setInView(true);
    } else {
      setInView(false);
    }
  };

  // Scroll to top of the page on component mount (refresh)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handleScrollAbout = () => handleScroll("about", setAboutInView);
    const handleScrollExperience = () => handleScroll("experience", setExperienceInView);
    const handleScrollEducation = () => handleScroll("education", setEducationInView);
    const handleScrollCertifications = () => handleScroll("certifications", setCertificationsInView);
    const handleScrollTechstack = () => handleScroll("techstack", setTechstackInView);
    const handleScrollContact = () => handleScroll("contact", setContactInView);

    window.addEventListener("scroll", handleScrollAbout);
    window.addEventListener("scroll", handleScrollExperience);
    window.addEventListener("scroll", handleScrollEducation);
    window.addEventListener("scroll", handleScrollCertifications);
    window.addEventListener("scroll", handleScrollTechstack);
    window.addEventListener("scroll", handleScrollContact);

    return () => {
      window.removeEventListener("scroll", handleScrollAbout);
      window.removeEventListener("scroll", handleScrollExperience);
      window.removeEventListener("scroll", handleScrollEducation);
      window.removeEventListener("scroll", handleScrollCertifications);
      window.removeEventListener("scroll", handleScrollTechstack);
      window.removeEventListener("scroll", handleScrollContact);
    };
  }, []);

  return (
    <div>
      <Header />
      <Menu />
      <Hero />

      {/* About Section with scroll animation */}
      <motion.div
        id="about"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <About />
      </motion.div>

      {/* Experience Section with scroll animation */}
      <motion.div
        id="experience"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: experienceInView ? 1 : 0, y: experienceInView ? 0 : 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Experience />
      </motion.div>

      {/* Education Section with scroll animation */}
      <motion.div
        id="education"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: educationInView ? 1 : 0, y: educationInView ? 0 : 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Education />
      </motion.div>

      {/* Certifications Section with scroll animation */}
      <motion.div
        id="certifications"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: certificationsInView ? 1 : 0, y: certificationsInView ? 0 : 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Certifications />
      </motion.div>

      {/* Techstack Section with scroll animation */}
      <motion.div
        id="techstack"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: techstackInView ? 1 : 0, y: techstackInView ? 0 : 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Techstack />
      </motion.div>

      {/* Contact Section with scroll animation */}
      <motion.div
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: contactInView ? 1 : 0, y: contactInView ? 0 : 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Contact />
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
