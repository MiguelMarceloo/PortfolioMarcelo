import React from "react";
import { motion } from "framer-motion";

const Certifications = () => {
  const certifications = [
    { name: "The Complete 2024 Web Development Bootcamp - Udemy", date: "2024" },
    { name: "CCNA: Introduction to Networks", date: "September 2022" },
    { name: "CCNA: Enterprise Networking, Security, and Automation", date: "2022" },
    { name: "CCNA: Switching, Routing, and Wireless Essentials", date: "March 2022" },
    { name: "MTA: Microsoft Certified Professional Python", date: "2022" },
    { name: "Introduction to Packet Tracer - Cisco", date: "July 2021" },
    { name: "MTA: Introduction to Programming using Java", date: "March 2021" },
    { name: "Microsoft Certified Professional Python", date: "July 2020" },
    { name: "Safety Officer 2 - Occupational Safety and Health (OSH)", date: "2020" }
  ];

  return (
    <section id="certifications" className="py-12 md:py-16 bg-[#171719] text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-base md:text-lg font-bold text-center mb-8 md:mb-12 font-spaceGrotesk text-[#7e7e7f] uppercase"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-[#1f1f21] rounded-lg p-4 md:p-5 hover:bg-[#252527] transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <h3 className="text-sm md:text-base font-semibold font-spaceGrotesk text-white mb-2 leading-snug">
                  {cert.name}
                </h3>
                <p className="text-xs md:text-sm text-[#7e7e7f] font-spaceGrotesk">
                  {cert.date}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
