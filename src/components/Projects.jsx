const Projects = () => (
    <section id="projects" className="py-16 bg-[#171719]">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
        {[
          { title: "Project 1", description: "Description of Project 1" },
          { title: "Project 2", description: "Description of Project 2" },
          { title: "Project 3", description: "Description of Project 3" },
        ].map((project, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded shadow-md">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default Projects;