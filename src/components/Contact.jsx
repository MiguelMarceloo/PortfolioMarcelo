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
      className="section py-12 md:py-16 bg-[#171719] text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-base md:text-lg font-bold text-center mb-8 md:mb-12 font-spaceGrotesk text-[#7e7e7f] uppercase">
          Contact Me
        </h2>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm md:text-base text-[#b0b0b0] mb-8 md:mb-10 leading-relaxed">
            Let's work together! Feel free to reach out for collaboration, job opportunities, or just to connect.
          </p>

          <div className="space-y-4 md:space-y-6 mb-8">
            <div className="bg-[#1f1f21] rounded-lg p-4 md:p-6 hover:bg-[#252527] transition-colors">
              <h3 className="text-xs md:text-sm font-semibold text-[#7e7e7f] mb-2 uppercase">Email</h3>
              <a
                href="mailto:miguelmarcelooo25@gmail.com"
                className="text-sm md:text-base text-white hover:text-blue-400 transition-colors"
              >
                miguelmarcelooo25@gmail.com
              </a>
            </div>

            <div className="bg-[#1f1f21] rounded-lg p-4 md:p-6 hover:bg-[#252527] transition-colors">
              <h3 className="text-xs md:text-sm font-semibold text-[#7e7e7f] mb-2 uppercase">Phone</h3>
              <a
                href="tel:+639088760769"
                className="text-sm md:text-base text-white hover:text-blue-400 transition-colors"
              >
                +63 908 876 0769
              </a>
            </div>

            <div className="bg-[#1f1f21] rounded-lg p-4 md:p-6 hover:bg-[#252527] transition-colors">
              <h3 className="text-xs md:text-sm font-semibold text-[#7e7e7f] mb-2 uppercase">Location</h3>
              <p className="text-sm md:text-base text-white">
                Punturin Valenzuela City, Metro Manila
              </p>
            </div>

            <div className="bg-[#1f1f21] rounded-lg p-4 md:p-6 hover:bg-[#252527] transition-colors">
              <h3 className="text-xs md:text-sm font-semibold text-[#7e7e7f] mb-2 uppercase">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/miguelmarcelooo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base text-white hover:text-blue-400 transition-colors"
              >
                linkedin.com/in/miguelmarcelooo
              </a>
            </div>
          </div>

          <a
            href="mailto:miguelmarcelooo25@gmail.com"
            className="inline-block px-6 md:px-8 py-3 bg-white text-[#7e7e7f] rounded-full hover:bg-gray-200 transition-colors font-spaceGrotesk font-semibold text-sm md:text-base"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;