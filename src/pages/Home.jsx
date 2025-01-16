import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Hero from "../components/Hero";
import About from "../components/About";
import Techstack from "../components/Techstack";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const App = () => {
  const [techstackInView, setTechstackInView] = useState(false);
  const [aboutInView, setAboutInView] = useState(false);
  const [projectsInView, setProjectsInView] = useState(false);
  const [contactInView, setContactInView] = useState(false);

  // Scroll event listener to detect if an element is in view
  const handleScroll = (id, setInView) => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const elementPosition = document.getElementById(id).offsetTop;

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
    const handleScrollTechstack = () => handleScroll("techstack", setTechstackInView);
    const handleScrollProjects = () => handleScroll("projects", setProjectsInView);
    const handleScrollContact = () => handleScroll("contact", setContactInView);

    window.addEventListener("scroll", handleScrollAbout);
    window.addEventListener("scroll", handleScrollTechstack);
    window.addEventListener("scroll", handleScrollProjects);
    window.addEventListener("scroll", handleScrollContact);

    return () => {
      window.removeEventListener("scroll", handleScrollAbout);
      window.removeEventListener("scroll", handleScrollTechstack);
      window.removeEventListener("scroll", handleScrollProjects);
      window.removeEventListener("scroll", handleScrollContact);
    };
  }, []);

  return (
    <div>
      <Header />
      <Menu />
      <Hero />

      {/* Techstack Section with scroll animation */}
      <motion.div
        id="techstack"
        initial={{ opacity: 0, y: 50 }}  // Start off-screen with opacity 0
        animate={{ opacity: techstackInView ? 1 : 0, y: techstackInView ? 0 : 50 }} // Slide up and fade in
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Techstack />
      </motion.div>

      {/* About Section with scroll animation */}
      <motion.div
        id="about"
        initial={{ opacity: 0, y: 50 }}  // Start off-screen with opacity 0
        animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 50 }} // Slide up and fade in
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <About />
      </motion.div>

      {/* Projects Section with scroll animation */}
      <motion.div
        id="projects"
        initial={{ opacity: 0, y: 50 }}  // Start off-screen with opacity 0
        animate={{ opacity: projectsInView ? 1 : 0, y: projectsInView ? 0 : 50 }} // Slide up and fade in
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Projects />
      </motion.div>

      {/* Contact Section with scroll animation */}
      <motion.div
        id="contact"
        initial={{ opacity: 0, y: 50 }}  // Start off-screen with opacity 0
        animate={{ opacity: contactInView ? 1 : 0, y: contactInView ? 0 : 50 }} // Slide up and fade in
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Contact />
      </motion.div>
    </div>
  );
};

export default App;