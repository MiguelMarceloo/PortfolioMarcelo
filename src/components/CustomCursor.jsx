import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const springConfig = { damping: 20, stiffness: 200 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const mouseMove = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", mouseMove);

    const handleHover = () => setCursorVariant("hover");
    const handleLeave = () => setCursorVariant("default");

    const interactiveElements = document.querySelectorAll("a, button, [role='button']");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      height: 32,
      width: 32,
      backgroundColor: "transparent",
      border: "2px solid rgba(99, 102, 241, 0.5)", // Accent color
    },
    hover: {
      height: 64,
      width: 64,
      backgroundColor: "rgba(99, 102, 241, 0.15)",
      border: "none",
      mixBlendMode: "screen",
    },
  };

  return (
    <motion.div
      className="hidden md:block fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
      variants={variants}
      animate={cursorVariant}
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
       <div className="absolute inset-0 rounded-full bg-accent-primary/10 blur-sm scale-75" />
    </motion.div>
  );
};

export default CustomCursor;
