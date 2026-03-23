import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiLayout, FiShield, FiMousePointer, FiDatabase } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      title: "Rethink Safety",
      description: "A comprehensive SaaS Safety Management System designed to streamline incident reporting, risk management, and compliance for industrial organizations.",
      tech: ["Laravel", "React", "MongoDB", "AWS"],
      link: "https://rethinksafety.com/",
      type: "SaaS Product",
      icon: <FiShield className="text-accent-primary" />,
      color: "from-blue-500/20 to-indigo-500/20"
    },
    {
      title: "Rethink EHS (Staging)",
      description: "Cloud-based Environmental, Health, and Safety (EHS) platform featuring real-time analytics, automated workflows, and proactive risk assessment modules.",
      tech: ["Vue.js", "Laravel", "MySQL", "Azure"],
      link: "https://staging.rethinkehs.com/",
      type: "Enterprise Platform",
      icon: <FiDatabase className="text-accent-secondary" />,
      color: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: "Mouse Tester Pro",
      description: "A high-precision web utility for testing mouse polling rates, button latency, and scroll wheel accuracy. Optimized for low-latency browser performance.",
      tech: ["React", "Vercel", "Framer Motion"],
      link: "https://mousetesterpro-phi.vercel.app/",
      type: "Utilities & Tools",
      icon: <FiMousePointer className="text-accent-tertiary" />,
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "4Loop Web App",
      description: "A custom full-stack web application featuring complex state management and responsive data visualization, deployed on Render-accelerated infrastructure.",
      tech: ["React.js", "Render", "Node.js"],
      link: "https://fourloop-7qc6.onrender.com/",
      type: "Web Application",
      icon: <FiLayout className="text-purple-500" />,
      color: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-sm font-bold text-center mb-16 font-poppins text-muted uppercase tracking-[0.3em]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-card/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 md:p-10 hover:bg-card/60 transition-all duration-500 shadow-2xl hover:shadow-accent-primary/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-2xl group-hover:scale-110 transition-transform duration-500">
                    {project.icon}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 rounded-full border border-white/10 hover:bg-accent-primary hover:text-white transition-all text-muted"
                      title="View Live Site"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent-primary mb-2 block opacity-70">
                    {project.type}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold font-poppins text-white group-hover:text-accent-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted/80 text-sm md:text-base font-poppins leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] md:text-xs font-semibold px-3 py-1 bg-white/5 rounded-full border border-white/5 text-muted/60">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
