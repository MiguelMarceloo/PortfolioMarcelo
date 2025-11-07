import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "SOFTWARE ENGINEER",
      company: "Rethink Safety",
      period: "October 2023 - Present",
      responsibilities: [
        "Spearheaded the full development lifecycle of a safety management software solution built from the ground up",
        "Engineered full-stack web applications using PHP (Laravel), HTML5, CSS3, and modern JavaScript frameworks including Vue.js and React.js",
        "Developed and optimized backend architecture and database structures using MongoDB and MySQL",
        "Designed and executed automated deployment pipelines using GitHub Actions",
        "Managed cloud infrastructure on AWS and Microsoft Azure",
        "Integrated external systems and APIs through REST, SOAP, JSON, and XML web services",
        "Mentored junior developers on architecture decisions and coding best practices"
      ]
    },
    {
      title: "FULL STACK DEVELOPER INTERN",
      company: "Achieve Without Borders",
      period: "December 2022 - March 2023",
      responsibilities: [
        "Collaborated with designers and backend teams to deliver responsive UI with HTML, CSS, and JavaScript",
        "Focused on enhancing cross-device web performance"
      ]
    },
    {
      title: "FRONT-END DEVELOPER INTERN",
      company: "Melham Construction Corporation",
      period: "September 2022 - November 2022",
      responsibilities: [
        "Contributed to the development of business applications using the Odoo framework",
        "Leveraged Python for backend logic and module customization",
        "Assisted in integrating new technologies and features into the Odoo platform",
        "Created and maintained technical documentation for system enhancements",
        "Participated in debugging and optimizing application performance"
      ]
    }
  ];

  return (
    <section id="experience" className="py-12 md:py-16 bg-[#171719] text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-base md:text-lg font-bold text-center mb-8 md:mb-12 font-spaceGrotesk text-[#7e7e7f] uppercase"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-[#1f1f21] rounded-lg p-4 md:p-6 hover:bg-[#252527] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 md:mb-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold font-spaceGrotesk text-white">
                    {exp.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#7e7e7f] font-spaceGrotesk">
                    {exp.company}
                  </p>
                </div>
                <span className="text-xs md:text-sm text-[#7e7e7f] font-spaceGrotesk mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-[#b0b0b0] text-xs md:text-sm">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {resp}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
