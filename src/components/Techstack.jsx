import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaAws, FaGithub, FaWordpress, FaGitAlt, FaDocker, FaLaravel, FaSass } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiRedis, SiNextdotjs, SiVuedotjs, SiMongodb } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaNpm } from "react-icons/fa";
import { SiMysql, SiMariadb } from "react-icons/si";
import Marquee from "react-fast-marquee";

const Techstack = () => {
  const techStackItems = [
    { icon: <FaHtml5 className="text-orange-500 text-7xl" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-500 text-7xl" />, name: "CSS" },
    { icon: <FaNodeJs className="text-green-500 text-7xl" />, name: "Node.js" },
    { icon: <SiTypescript className="text-blue-400 text-7xl" />, name: "TypeScript" },
    { icon: <FaLaravel className="text-red-500 text-7xl" />, name: "Laravel" },
    { icon: <FaReact className="text-blue-500 text-7xl" />, name: "React.js" },
    { icon: <SiNextdotjs className="text-black text-7xl" />, name: "Next.js" },
    { icon: <SiVuedotjs className="text-green-500 text-7xl" />, name: "Vue.js" },
    { icon: <FaSass className="text-pink-500 text-7xl" />, name: "Sass" },
    { icon: <SiTailwindcss className="text-blue-400 text-7xl" />, name: "Tailwind CSS" },
    { icon: <FaAws className="text-orange-400 text-7xl" />, name: "AWS" },
    { icon: <VscAzure className="text-blue-500 text-7xl" />, name: "Azure" },
    { icon: <FaDocker className="text-blue-500 text-7xl" />, name: "Docker" },
    { icon: <SiRedis className="text-red-500 text-7xl" />, name: "Redis" },
    { icon: <SiMongodb className="text-green-500 text-7xl" />, name: "MongoDB" },
    { icon: <SiMysql className="text-red-500 text-7xl" />, name: "MySQL" },
    { icon: <SiMariadb className="text-blue-500 text-7xl" />, name: "MariaDB" },
    { icon: <FaNpm className="text-red-500 text-7xl" />, name: "npm" },
    { icon: <FaGithub className="text-gray-300 text-7xl" />, name: "GitHub" },
    { icon: <FaGitAlt className="text-orange-400 text-7xl" />, name: "Git" },
    { icon: <FaWordpress className="text-blue-500 text-7xl" />, name: "WordPress" },
  ];

  return (
    <section
      id="techstack"
      className="min-h-screen bg-[#171719] text-white flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-[16px] font-bold text-center mb-8 font-spaceGrotesk text-[#7e7e7f] uppercase">Tech Stack</h2>

        <Marquee speed={70} gradient={false} pauseOnHover>
          {techStackItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center mx-8">
              {item.icon}
              <span className="mt-2 text-sm">{item.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Techstack;