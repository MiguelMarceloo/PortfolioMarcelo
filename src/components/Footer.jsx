import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-white py-16 font-poppins border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-accent-primary to-accent-tertiary bg-clip-text text-transparent underline decoration-accent-primary/20 underline-offset-8">
              Lawrence Miguel T. Marcelo
            </h2>
            <p className="text-muted/80 text-lg leading-relaxed max-w-md">
              Senior Software Engineer specializing in full-stack development, cloud-native applications, and CI/CD automation. Experienced in leading development teams and delivering scalable software solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-accent-primary mb-6">Explore</h3>
            <ul className="space-y-4">
              {[
                { name: "Projects", href: "#projects" },
                { name: "About", href: "#about" },
                { name: "Experience", href: "#experience" },
                { name: "Tech Stack", href: "#techstack" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-0 group-hover:w-4 h-px bg-accent-primary transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-accent-secondary mb-6">Contact</h3>
            <ul className="space-y-4 text-muted">
              <li className="hover:text-white transition-colors">miguelmarcelooo25@gmail.com</li>
              <li className="hover:text-white transition-colors">+63 908 876 0769</li>
              <li className="hover:text-white transition-colors">Metro Manila, Philippines</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/miguelmarcelooo/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-accent-primary/20 hover:text-accent-primary transition-all transform hover:-translate-y-1">
              <FaLinkedinIn className="w-6 h-6" />
            </a>
            <a href="https://github.com/MiguelMarceloo" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-accent-secondary/20 hover:text-accent-secondary transition-all transform hover:-translate-y-1">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="mailto:miguelmarcelooo25@gmail.com" className="p-3 rounded-xl bg-white/5 hover:bg-accent-tertiary/20 hover:text-accent-tertiary transition-all transform hover:-translate-y-1">
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
          
          <p className="text-muted text-sm font-medium">
            &copy; {currentYear} Lawrence Miguel Marcelo. <span className="hidden md:inline">Crafted with passion.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
