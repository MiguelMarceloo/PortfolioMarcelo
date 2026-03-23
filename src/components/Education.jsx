import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Computer Engineering",
      school: "Far Eastern University - Institute of Technology",
      period: "August 2018 - June 2023",
      location: "Manila, Philippines"
    },
    {
      degree: "Senior High School",
      school: "Far Eastern University",
      period: "March 2016 - January 2018",
      location: "Manila, Philippines"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-sm font-bold text-center mb-16 font-poppins text-muted uppercase tracking-[0.3em]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="group relative bg-card/50 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-10 hover:bg-card/80 transition-all hover:border-accent-primary/30 shadow-xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-[10px] md:text-xs font-poppins font-bold uppercase tracking-widest mb-4">
                    {edu.period}
                  </span>
                  <h3 className="text-xl md:text-3xl font-bold font-poppins text-white mb-2 group-hover:text-accent-primary transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-muted/90 font-poppins text-sm md:text-lg mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary" />
                    {edu.school}
                  </div>
                  <p className="text-xs md:text-base text-muted/60 font-poppins italic">
                    {edu.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
