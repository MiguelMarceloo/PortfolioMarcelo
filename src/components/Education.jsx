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
    <section id="education" className="py-12 md:py-16 bg-[#171719] text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-base md:text-lg font-bold text-center mb-8 md:mb-12 font-spaceGrotesk text-[#7e7e7f] uppercase"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-[#1f1f21] rounded-lg p-4 md:p-6 hover:bg-[#252527] transition-colors"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold font-spaceGrotesk text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-sm md:text-base text-[#7e7e7f] font-spaceGrotesk mb-1">
                    {edu.school}
                  </p>
                  <p className="text-xs md:text-sm text-[#b0b0b0] font-spaceGrotesk">
                    {edu.location}
                  </p>
                </div>
                <span className="text-xs md:text-sm text-[#7e7e7f] font-spaceGrotesk mt-2 md:mt-0 md:text-right">
                  {edu.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
