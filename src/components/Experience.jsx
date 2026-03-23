import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "SENIOR SOFTWARE ENGINEER",
      company: "Rethink Safety",
      period: "November 2025 - Present",
      responsibilities: [
        "Lead the development and maintenance of company software systems",
        "Review code and make sure standards and best practices are followed",
        "Support and guide junior developers with their tasks",
        "Work with teams to understand requirements and deliver solutions",
        "Help plan system design and new features",
        "Monitor system performance and fix issues when needed",
        "Assist in deployments and production support"
      ]
    },
    {
      title: "SOFTWARE ENGINEER",
      company: "Rethink Safety",
      period: "October 2023 - October 2025",
      responsibilities: [
        "Developed a safety management web system from start to finish",
        "Built backend features using Laravel and frontend using React and Vue",
        "Designed and managed databases using MongoDB and MySQL",
        "Set up automated deployments using GitHub Actions",
        "Managed cloud services on AWS and Azure",
        "Integrated third-party APIs and external systems",
        "Tested, debugged, and fixed system issues"
      ]
    },
    {
      title: "FULL STACK DEVELOPER INTERN",
      company: "Achieve Without Borders",
      period: "December 2022 - March 2023",
      responsibilities: [
        "Assisted in developing business applications using the Odoo system",
        "Helped update backend features using Python",
        "Worked with the team to understand requirements and complete tasks",
        "Created simple documentation for system updates"
      ]
    },
    {
      title: "FRONT-END DEVELOPER INTERN",
      company: "Melham Construction Corporation",
      period: "September 2022 - November 2022",
      responsibilities: [
        "Assisted in building basic and responsive web pages",
        "Used HTML, CSS, and JavaScript for front-end tasks",
        "Fixed simple UI and layout issues"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background text-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-sm font-bold text-center mb-16 font-poppins text-muted uppercase tracking-[0.3em]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary via-accent-secondary to-transparent hidden md:block opacity-20" />

          <motion.div 
            className="space-y-12"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30, x: index % 2 === 0 ? -20 : 20 },
                  show: { opacity: 1, y: 0, x: 0 }
                }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                transition={{ duration: 0.6 }}
              >
                {/* Content Card */}
                <div className="w-full md:w-[45%]">
                  <div className="bg-card/50 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-8 hover:bg-card/80 transition-all group shadow-xl">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold font-poppins text-white group-hover:text-accent-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-accent-secondary font-poppins text-sm font-medium mt-1">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-xs font-poppins text-muted bg-white/5 px-3 py-1 rounded-full border border-white/10 shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-muted/90 leading-relaxed font-poppins">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-2 shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 border-accent-primary shadow-[0_0_15px_rgba(99,102,241,0.5)] z-20" />

                {/* Spacer for asymmetric layout */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
