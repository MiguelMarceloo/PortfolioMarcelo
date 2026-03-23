import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

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
    <section id="contact" className="py-20 bg-background text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-sm font-bold text-center mb-16 font-poppins text-muted uppercase tracking-[0.3em]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Column: Text & CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-5xl font-bold font-poppins mb-6 leading-tight">
                Let's build something <span className="bg-gradient-to-r from-accent-primary to-accent-tertiary bg-clip-text text-transparent">extraordinary</span>.
              </h3>
              <p className="text-muted/80 font-poppins text-lg mb-10 leading-relaxed">
                Whether you have a specific project in mind or just want to explore possibilities, I'm always open to discussing new opportunities and challenges.
              </p>
              
              <a
                href="mailto:miguelmarcelooo25@gmail.com"
                className="inline-flex items-center gap-4 bg-white text-background px-10 py-5 rounded-3xl font-poppins font-bold text-xl hover:scale-105 transition-all shadow-xl hover:shadow-accent-primary/20"
              >
                Get in Touch
                <div className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
              </a>
            </motion.div>

            {/* Right Column: Info Cards */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: "Email", value: "miguelmarcelooo25@gmail.com", link: "mailto:miguelmarcelooo25@gmail.com", color: "from-accent-primary/20" },
                { label: "Phone", value: "+63 908 876 0769", link: "tel:+639088760769", color: "from-accent-secondary/20" },
                { label: "LinkedIn", value: "miguelmarcelooo", link: "https://www.linkedin.com/in/miguelmarcelooo/", color: "from-accent-tertiary/20" },
                { label: "Location", value: "Punturin Valenzuela City, Metro Manila", color: "from-white/10" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className={`relative group bg-card/60 backdrop-blur-sm border border-white/5 p-6 rounded-3xl hover:bg-card hover:border-white/10 transition-all duration-500 overflow-hidden`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="relative">
                    <span className="text-[10px] font-poppins font-bold uppercase tracking-widest text-muted mb-2 block">
                      {item.label}
                    </span>
                    {item.link ? (
                      <a href={item.link} target={item.label === "LinkedIn" ? "_blank" : undefined} rel="noopener noreferrer" className="text-lg font-poppins font-semibold text-white group-hover:text-accent-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-poppins font-semibold text-white">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
