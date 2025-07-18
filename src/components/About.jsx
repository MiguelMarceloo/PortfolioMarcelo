const About = () => (
  <section id="about" className="py-16 bg-[#171719] text-center">
    <h2 className="text-[16px] font-bold text-center mb-8 font-spaceGrotesk text-[#7e7e7f] uppercase">
      About
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-6">
      I'm a passionate web developer with experience in building modern, responsive, and interactive web applications.
    </p>

    {/* Download Resume Button */}
    <a
      href="/Curriculum-Vitae-Marcelo-Lawrence-Miguel-T..pdf"
      download
      className="inline-block bg-[#1f1f21] text-white px-6 py-2 rounded-full hover:bg-[#333] transition"
    >
      Download Resume
    </a>
  </section>
);

export default About;
