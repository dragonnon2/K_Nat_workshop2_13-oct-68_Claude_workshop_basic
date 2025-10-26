const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured online shopping platform with payment integration, inventory management, and admin dashboard.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/username/project',
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative task management application with real-time updates, team workspaces, and productivity analytics.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/username/project',
    },
    {
      title: 'AI Content Generator',
      description:
        'AI-powered content generation tool for marketing copy, blog posts, and social media content.',
      technologies: ['TypeScript', 'OpenAI API', 'Express', 'MongoDB'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/username/project',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
          Featured Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 bg-white p-6 hover:border-gray-300 transition-all hover:shadow-lg"
            >
              {/* Project Title */}
              <h3 className="text-xl font-bold text-black mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-gray-200 text-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-black hover:text-gray-600 transition-colors"
                >
                  Live Demo →
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-black hover:text-gray-600 transition-colors"
                >
                  GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
