import React from "react";
import { motion } from "framer-motion";
import { AiOutlineMail, AiOutlinePhone, AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";

const Resume = () => {
  return (
    <div className="bg-white min-h-screen font-poppins text-slate-800 p-4 sm:p-12 print:p-0">
      {/* Hide on Print - Control Bar */}
      <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center print:hidden">
        <a href="/" className="text-accent-primary font-bold flex items-center gap-2">
           ← Back to Portfolio
        </a>
        <button 
           onClick={() => window.print()}
           className="bg-accent-primary text-white px-6 py-2 rounded-xl font-bold hover:scale-105 transition-all shadow-lg shadow-accent-primary/20"
        >
           Save as PDF
        </button>
      </div>

      {/* Main Resume Container */}
      <motion.div 
        className="max-w-[210mm] mx-auto bg-white shadow-2xl print:shadow-none p-10 md:p-16 border border-slate-100 print:border-none print:m-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Header */}
        <header className="border-b-4 border-accent-primary pb-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">Lawrence Miguel T. Marcelo</h1>
          <h2 className="text-2xl font-semibold text-accent-primary mb-6">Senior Software Engineer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600">
             <div className="flex items-center gap-3">
                <AiOutlineMail className="text-accent-primary shrink-0" />
                <span>miguelmarcelooo25@gmail.com</span>
             </div>
             <div className="flex items-center gap-3">
                <AiOutlinePhone className="text-accent-primary shrink-0" />
                <span>+63 908 876 0769</span>
             </div>
             <div className="flex items-center gap-3">
                <AiOutlineLinkedin className="text-accent-primary shrink-0" />
                <span>linkedin.com/in/miguelmarcelooo/</span>
             </div>
             <div className="flex items-center gap-3">
                <MdOutlineLocationOn className="text-accent-primary shrink-0" />
                <span>Punturin Valenzuela City, Metro Manila</span>
             </div>
          </div>
        </header>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="md:col-span-2 space-y-10">
            {/* Objective */}
            <section>
              <h3 className="text-lg font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-3">
                <div className="w-6 h-1 rounded-full bg-accent-primary" />
                Professional Summary
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                Senior Software Engineer with hands-on experience in building, maintaining, and improving web applications. Skilled in full-stack development, cloud deployment, and database management. Experienced in working with Laravel, JavaScript frameworks, MongoDB, MySQL, AWS, Azure, and CI/CD using GitHub Actions. Comfortable leading tasks, reviewing code, supporting team members, and working closely with stakeholders to deliver reliable and easy-to-use software solutions.
              </p>
            </section>

            {/* Experience */}
            <section>
              <h3 className="text-lg font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-3">
                <div className="w-6 h-1 rounded-full bg-accent-primary" />
                Work Experience
              </h3>
              
              <div className="space-y-8">
                {/* Current Role */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                     <h4 className="text-xl font-bold">Senior Software Engineer</h4>
                     <span className="text-sm font-bold text-accent-primary bg-accent-primary/5 px-3 py-1 rounded-full">Nov 2025 - Present</span>
                  </div>
                  <p className="text-slate-500 font-bold mb-3 italic">Rethink Safety</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 ml-2 marker:text-accent-primary">
                    <li>Lead the development and maintenance of company software systems</li>
                    <li>Review code and make sure standards and best practices are followed</li>
                    <li>Support and guide junior developers with their tasks</li>
                    <li>Work with teams to understand requirements and deliver solutions</li>
                    <li>Help plan system design and new features</li>
                    <li>Monitor system performance and fix issues when needed</li>
                    <li>Assist in deployments and production support</li>
                  </ul>
                </div>

                {/* Software Engineer */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                     <h4 className="text-xl font-bold">Software Engineer</h4>
                     <span className="text-sm font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full tracking-tight">Oct 2023 - Oct 2025</span>
                  </div>
                  <p className="text-slate-500 font-bold mb-3 italic">Rethink Safety</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-slate-700 ml-2 marker:text-accent-primary">
                    <li>Developed a safety management web system from start to finish</li>
                    <li>Built backend features using Laravel and frontend using React and Vue</li>
                    <li>Designed and managed databases using MongoDB and MySQL</li>
                    <li>Set up automated deployments using GitHub Actions</li>
                    <li>Managed cloud services on AWS and Azure</li>
                    <li>Integrated third-party APIs and external systems</li>
                    <li>Tested, debugged, and fixed system issues</li>
                  </ul>
                </div>

                {/* Internships */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold">Full Stack Developer Intern</h4>
                    <p className="text-xs text-accent-primary font-bold">Achieve Without Borders</p>
                    <p className="text-[10px] text-slate-400 mb-2">Dec 2022 - Mar 2023</p>
                    <ul className="text-[11px] text-slate-600 space-y-1">
                      <li>• Assisted in developing Odoo system applications</li>
                      <li>• Updated backend features using Python</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Front-End Developer Intern</h4>
                    <p className="text-xs text-accent-primary font-bold">Melham Construction Corp</p>
                    <p className="text-[10px] text-slate-400 mb-2">Sep 2022 - Nov 2022</p>
                    <ul className="text-[11px] text-slate-600 space-y-1">
                      <li>• Built responsive web pages via HTML/CSS/JS</li>
                      <li>• Fixed UI and layout issues</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-10">
            {/* Education */}
            <section>
              <h3 className="text-lg font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-3">
                <div className="w-1.5 h-6 rounded-full bg-accent-primary" />
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-accent-primary">Bachelor of Computer Engineering</p>
                  <p className="text-sm text-slate-800">FEU - Institute of Technology</p>
                  <p className="text-xs text-slate-500 mt-1">Aug 2018 - June 2023</p>
                </div>
                <div>
                  <p className="font-bold">Far Eastern University</p>
                  <p className="text-sm text-slate-800">Senior High School</p>
                  <p className="text-xs text-slate-500 mt-1">March 2016 - Jan 2018</p>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h3 className="text-lg font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-3">
                <div className="w-1.5 h-6 rounded-full bg-accent-primary" />
                Certifications
              </h3>
              <ul className="space-y-3 text-[11px] text-slate-700 font-medium">
                <li>• Microsoft Certified Professional Python</li>
                <li>• MTA: Programming using Java</li>
                <li>• CCNA: Introduction to Networks</li>
                <li>• CCNA: Enterprise Networking / Security</li>
                <li>• CCNA: Switching, Routing & Wireless</li>
                <li>• Udemy Web Dev Bootcamp 2024</li>
                <li>• Safety Officer 2 - OSH</li>
              </ul>
            </section>

            {/* Skills */}
            <section>
              <h3 className="text-lg font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-3">
                <div className="w-1.5 h-6 rounded-full bg-accent-primary" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Laravel", "Python", "JavaScript", "TypeScript", "React.js", "Vue.js", "Node.js", "Next.js", "MongoDB", "MySQL", "AWS", "Azure", "Git", "Nginx", "Redis", "Docker", "Tailwind"].map((skill) => (
                  <span key={skill} className="bg-slate-100 text-slate-600 px-3 py-1 rounded text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </motion.div>
      
      {/* Footer Branding for Print */}
      <div className="hidden print:block text-center mt-12 pt-8 border-t border-slate-100 text-[10px] text-slate-400">
         Generated via Lawrence Marcelo's Portfolio | See more at <span className="text-accent-primary underline">miguelmarcelo.dev</span>
      </div>
    </div>
  );
};

export default Resume;
