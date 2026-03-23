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
    { name: "Microsoft Certified Professional Python 2020", date: "Issued July 2020" },
    { name: "Safety Officer 2 - Occupational Safety and Health (OSH)", date: "" }
  ];

  return (
    <section id="certifications" className="py-20 bg-background text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-sm font-bold text-center mb-16 font-poppins text-muted uppercase tracking-[0.3em]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="group relative bg-card/60 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:bg-card hover:border-accent-primary/50 transition-all duration-500 shadow-xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {/* Decorative Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent-primary/10 blur-3xl group-hover:bg-accent-primary/20 transition-all" />
                
                <div className="relative flex flex-col h-full">
                  <span className="text-accent-secondary font-poppins text-xs font-bold tracking-widest uppercase mb-4 opacity-60 group-hover:opacity-100 transition-opacity">
                    {cert.date}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold font-poppins text-white leading-tight group-hover:text-accent-primary transition-colors">
                    {cert.name}
                  </h3>
                  <div className="mt-auto pt-6 flex items-center gap-2">
                    <div className="h-0.5 w-0 group-hover:w-8 bg-accent-primary transition-all duration-500" />
                    <span className="text-[10px] font-poppins text-muted uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Verified</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
