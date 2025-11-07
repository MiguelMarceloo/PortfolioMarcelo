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
      <div className="relative z-10 text-center px-4">
        {/* Hero Title Animation */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-spaceGrotesk"
          initial={{ opacity: 0, y: -50, rotate: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Lawrence Miguel T. Marcelo
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-semibold font-spaceGrotesk text-[#7e7e7f] mt-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          Software Engineer
        </motion.h2>

        {/* Hero Description Animation */}
        <motion.p
          className="text-xs sm:text-sm md:text-base text-[#7e7e7f] mt-6 font-spaceGrotesk text-center max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          Results-driven and detail-oriented Software Engineer with extensive experience in designing, developing, and deploying full-stack web applications. Highly proficient in modern backend technologies and database systems, with a strong emphasis on MongoDB for scalable data architecture.
        </motion.p>

        {/* Button Animation with Bounce Effect */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8"
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
            href="#experience"
            className="px-6 sm:px-7 py-2 font-spaceGrotesk bg-white text-[#7e7e7f] text-xs sm:text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors w-full sm:w-auto text-center"
          >
            Experience
          </a>
          <a
            href="#techstack"
            className="px-6 sm:px-7 py-2 font-spaceGrotesk bg-white text-[#7e7e7f] text-xs sm:text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors w-full sm:w-auto text-center"
          >
            Tech Stack
          </a>
          <a
            href="#contact"
            className="px-6 sm:px-7 py-2 font-spaceGrotesk bg-white text-[#7e7e7f] text-xs sm:text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors w-full sm:w-auto text-center"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;