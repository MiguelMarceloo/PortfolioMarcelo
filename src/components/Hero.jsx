import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect } from "react";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) / 25;
      const moveY = (clientY - window.innerHeight / 2) / 25;
      mouseX.set(moveX);
      mouseY.set(moveY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const blobX = useTransform(mouseX, (value) => -value);
  const blobY = useTransform(mouseY, (value) => -value);

  return (
    <section id="home" className="relative min-h-screen bg-background text-white flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Immersive Animated Background Blobs with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
           style={{ x: blobX, y: blobY }}
          className="absolute w-[600px] h-[600px] bg-accent-primary/20 rounded-full blur-[120px] -top-20 -left-20"
          animate={{
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          style={{ x: useTransform(mouseX, (v) => v * 1.5), y: useTransform(mouseY, (v) => v * 1.5) }}
          className="absolute w-[500px] h-[500px] bg-accent-secondary/15 rounded-full blur-[100px] -right-20 -bottom-20"
          animate={{
            scale: [0.9, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          style={{ x: useTransform(mouseX, (v) => v * 0.8), y: useTransform(mouseY, (v) => v * 0.8) }}
          className="absolute w-[450px] h-[450px] bg-accent-tertiary/10 rounded-full blur-[110px] left-1/4 top-1/4"
          animate={{
            scale: [0.8, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Hero Content with Glassmorphism */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
           className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl w-full text-center"
           initial={{ opacity: 0, scale: 0.9, y: 30 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs md:text-sm font-poppins font-semibold uppercase tracking-wider mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Available for New Projects
          </motion.span>

          {/* Name */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-poppins tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Lawrence Miguel{" "}
            <span className="bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary bg-clip-text text-transparent">
              Marcelo
            </span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            className="text-lg sm:text-xl md:text-2xl font-medium font-poppins text-muted mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Senior Software Engineer
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-sm sm:text-base md:text-lg text-muted/80 max-w-2xl mx-auto font-poppins leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Senior Software Engineer with hands-on experience in building, maintaining, and improving web applications. Skilled in full-stack development, cloud deployment, and database management.
          </motion.p>

          {/* Actions */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#experience"
              className="px-8 py-3 bg-white text-background font-poppins font-bold rounded-xl hover:scale-105 transition-all shadow-lg hover:shadow-accent-primary/20"
            >
              Recent Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border border-white/20 text-white font-poppins font-bold rounded-xl hover:bg-white/5 transition-all"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
