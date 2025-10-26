const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Figma', 'Agile/Scrum'],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container-custom">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
          Skills & Technologies
        </h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="border border-gray-200 p-6 hover:border-gray-300 transition-colors"
            >
              <h3 className="text-xl font-bold text-black mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-gray-600">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
