import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaAws, FaGithub, FaWordpress, FaGitAlt, FaLaravel, FaPython, FaGitlab, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiRedis, SiNextdotjs, SiVuedotjs, SiMongodb, SiNginx, SiGithubactions, SiJavascript, SiPhp } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { SiMysql } from "react-icons/si";
import Marquee from "react-fast-marquee";

const Techstack = () => {
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

  const techStackItems = [
    { icon: <FaPython className="text-yellow-500 text-7xl" />, name: "Python" },
    { icon: <SiJavascript className="text-yellow-400 text-7xl" />, name: "JavaScript" },
    { icon: <SiPhp className="text-blue-600 text-7xl" />, name: "PHP" },
    { icon: <FaLaravel className="text-red-500 text-7xl" />, name: "PHP (Laravel)" },
    { icon: <FaHtml5 className="text-orange-500 text-7xl" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-500 text-7xl" />, name: "CSS" },
    { icon: <FaNodeJs className="text-green-500 text-7xl" />, name: "Node.js" },
    { icon: <SiTypescript className="text-blue-400 text-7xl" />, name: "TypeScript" },
    { icon: <FaReact className="text-blue-500 text-7xl" />, name: "React.js" },
    { icon: <SiNextdotjs className="text-white text-7xl" />, name: "Next.js" },
    { icon: <SiVuedotjs className="text-green-500 text-7xl" />, name: "Vue.js" },
    { icon: <SiTailwindcss className="text-blue-400 text-7xl" />, name: "Tailwind" },
    { icon: <FaAws className="text-orange-400 text-7xl" />, name: "AWS" },
    { icon: <VscAzure className="text-blue-500 text-7xl" />, name: "Azure" },
    { icon: <SiMongodb className="text-green-500 text-7xl" />, name: "MongoDB" },
    { icon: <SiMysql className="text-blue-400 text-7xl" />, name: "MySQL" },
    { icon: <SiRedis className="text-red-500 text-7xl" />, name: "Redis" },
    { icon: <SiNginx className="text-green-500 text-7xl" />, name: "Nginx" },
    { icon: <SiGithubactions className="text-blue-500 text-7xl" />, name: "GitHub Actions" },
    { icon: <FaGithub className="text-gray-300 text-7xl" />, name: "GitHub" },
    { icon: <FaGitlab className="text-orange-600 text-7xl" />, name: "GitLab" },
    { icon: <FaGitAlt className="text-orange-400 text-7xl" />, name: "Git Bash" },
    { icon: <FaDatabase className="text-gray-400 text-7xl" />, name: "Wampserver" },
    { icon: <FaWordpress className="text-blue-500 text-7xl" />, name: "WordPress" },
  ];

  return (
    <section
      ref={sectionRef}
      id="techstack"
      className="py-20 bg-background text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-sm font-bold text-center mb-16 font-poppins text-muted uppercase tracking-[0.3em]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Tech Stack
        </motion.h2>

        <motion.div 
           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
           variants={{
             hidden: { opacity: 0 },
             show: {
               opacity: 1,
               transition: {
                 staggerChildren: 0.05
               }
             }
           }}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true }}
        >
          {techStackItems.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                show: { opacity: 1, scale: 1, y: 0 }
              }}
              className="group relative bg-card/40 backdrop-blur-sm border border-white/5 p-6 rounded-3xl flex flex-col items-center justify-center gap-4 hover:bg-card/80 hover:border-accent-primary/50 transition-all duration-500 shadow-lg hover:shadow-accent-primary/10 hover:-translate-y-2"
            >
              {/* Animated Background on Hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative text-5xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                {item.icon}
              </div>
              <span className="relative text-sm font-poppins font-semibold text-muted group-hover:text-white transition-colors">
                {item.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Techstack;
