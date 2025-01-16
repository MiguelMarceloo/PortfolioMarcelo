import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-screen bg-[#171719] text-white flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Gradient Circles */}
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20"
          initial={{ x: "-50%", y: "-50%", scale: 0.5 }}
          animate={{
            x: ["-50%", "0%", "50%", "0%", "-50%"], // Oscillate around the center
            y: ["-50%", "0%", "50%", "0%", "-50%"], // Oscillate around the center
            scale: [0.5, 1, 0.8, 1, 0.5], // Pulsating scale
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20"
          initial={{ x: "50%", y: "50%", scale: 0.5 }}
          animate={{
            x: ["50%", "0%", "-50%", "0%", "50%"], // Reverse oscillate for x-axis
            y: ["50%", "0%", "-50%", "0%", "50%"], // Reverse oscillate for y-axis
            scale: [0.5, 1, 0.8, 1, 0.5], // Pulsating scale
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-green-500 to-teal-500 rounded-full blur-3xl opacity-20"
          initial={{ x: "-50%", y: "50%", scale: 0.5 }}
          animate={{
            x: ["-50%", "0%", "50%", "0%", "-50%"], // Diagonal oscillate for x-axis
            y: ["50%", "0%", "-50%", "0%", "50%"], // Diagonal oscillate for y-axis
            scale: [0.5, 1, 0.8, 1, 0.5], // Pulsating scale
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
            delay: 4,
          }}
        />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center">
        {/* Hero Title Animation */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold font-spaceGrotesk"
          initial={{ opacity: 0, y: -50, rotate: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Full Stack
        </motion.h1>

        {/* Hero Description Animation */}
        <motion.p
          className="text-sm text-[#7e7e7f] mt-4 font-spaceGrotesk text-center md:w-1/2 mx-auto"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </motion.p>

        {/* Button Animation with Bounce Effect */}
        <motion.div
          className="flex items-center justify-center space-x-4 mt-8"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.5,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <a
            href="#projects"
            className="px-7 py-2 font-spaceGrotesk bg-white text-[#7e7e7f] text-sm font-semibold rounded-full hover:bg-gray-200"
          >
            Projects
          </a>
          <a
            href="#techstack"
            className="px-7 py-2 font-spaceGrotesk bg-white text-[#7e7e7f] text-sm font-semibold rounded-full hover:bg-gray-200"
          >
            Tech Stack
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;