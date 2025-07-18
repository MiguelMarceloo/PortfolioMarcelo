import React, { useEffect, useRef } from "react";

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section py-16 bg-[#171719] text-white text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="mb-8">Let's work together! Feel free to reach out.</p>
      <a
        href="mailto:your.email@example.com"
        className="px-6 py-3 bg-blue-500 rounded hover:bg-blue-600 transition-colors duration-300"
      >
        Email Me
      </a>
    </section>
  );
};

export default Contact;