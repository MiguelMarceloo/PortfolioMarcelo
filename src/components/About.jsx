import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { category: "Soft Skills", items: [
      "Adaptability & continuous learning",
      "Collaborative communication",
      "Analytical problem-solving",
      "Attention to detail",
      "Agile teamwork",
      "Time & priority management",
      "Leadership & mentoring",
      "Strategic thinking",
      "Customer-centric mindset",
      "Resilience under pressure"
    ]}
  ];

  return (
    <section id="about" className="py-12 md:py-16 bg-[#171719] text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-base md:text-lg font-bold text-center mb-8 md:mb-12 font-spaceGrotesk text-[#7e7e7f] uppercase"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-[#1f1f21] rounded-lg p-6 md:p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg md:text-xl font-bold font-spaceGrotesk text-white mb-4">
              Objective
            </h3>
            <p className="text-sm md:text-base text-[#b0b0b0] leading-relaxed">
              Results-driven and detail-oriented Software Engineer with extensive experience in designing, developing, and deploying full-stack web applications. Highly proficient in modern backend technologies and database systems, with a strong emphasis on MongoDB for scalable data architecture, performance tuning, and robust data modeling. Skilled in deploying cloud-native applications on AWS and Microsoft Azure, and in implementing continuous integration and delivery (CI/CD) pipelines using GitHub Actions to streamline development workflows. Seeking to contribute to an innovative and growth-focused organization where I can leverage my technical expertise, cloud proficiency, and team-oriented mindset to deliver secure, high-performance software solutions that drive real business value.
            </p>
          </motion.div>

          {/* Soft Skills Section */}
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              className="bg-[#1f1f21] rounded-lg p-6 md:p-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg md:text-xl font-bold font-spaceGrotesk text-white mb-6">
                {skillGroup.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {skillGroup.items.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2"
                  >
                    <span className="text-[#7e7e7f] mt-1">•</span>
                    <span className="text-sm md:text-base text-[#b0b0b0]">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Download Resume Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="/Curriculum-Vitae-Marcelo-Lawrence-Miguel-T..pdf"
              download
              className="inline-block bg-white text-[#7e7e7f] px-6 md:px-8 py-3 rounded-full hover:bg-gray-200 transition font-spaceGrotesk font-semibold text-sm md:text-base"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
