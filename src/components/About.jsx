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
    <section id="about" className="py-20 bg-background text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-sm font-bold text-center mb-16 font-poppins text-muted uppercase tracking-[0.3em]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {/* Objective Card */}
          <motion.div
            className="bg-card/50 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-12 mb-10 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold font-poppins text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-accent-primary/20 rounded-lg flex items-center justify-center text-accent-primary text-base">01</span>
              Objective
            </h3>
            <p className="text-base md:text-lg text-muted/90 leading-relaxed font-poppins">
              Senior Software Engineer with hands-on experience in building, maintaining, and improving web applications. Skilled in full-stack development, cloud deployment, and database management. Experienced in working with Laravel, JavaScript frameworks, MongoDB, MySQL, AWS, Azure, and CI/CD using GitHub Actions. Comfortable leading tasks, reviewing code, supporting team members, and working closely with stakeholders to deliver reliable and easy-to-use software solutions.
            </p>
          </motion.div>

          {/* Soft Skills Section */}
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              className="bg-card/50 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-12 mb-10 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold font-poppins text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-8 bg-accent-secondary/20 rounded-lg flex items-center justify-center text-accent-secondary text-base">02</span>
                {skillGroup.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillGroup.items.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-accent-primary/5 hover:border-accent-primary/20 transition-all cursor-default group"
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-primary group-hover:scale-150 transition-transform" />
                    <span className="text-sm md:text-base text-muted/90 group-hover:text-white font-poppins transition-colors">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Download Resume Button */}
          <motion.div
            className="text-center pt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-white text-background px-10 py-4 rounded-2xl hover:scale-105 transition-all font-poppins font-bold text-lg shadow-xl hover:shadow-accent-primary/20"
            >
              View Full Resume
              <div className="absolute inset-0 rounded-2xl bg-accent-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
