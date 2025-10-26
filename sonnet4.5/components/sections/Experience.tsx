const Experience = () => {
  const experiences = [
    {
      company: 'Tech Company Inc.',
      role: 'Senior Full Stack Developer',
      period: '2022 - Present',
      responsibilities: [
        'Led development of customer-facing web applications',
        'Architected scalable microservices infrastructure',
        'Mentored junior developers and conducted code reviews',
        'Improved application performance by 40%',
      ],
    },
    {
      company: 'Digital Agency',
      role: 'Full Stack Developer',
      period: '2020 - 2022',
      responsibilities: [
        'Built responsive web applications for various clients',
        'Collaborated with design team to implement UI/UX',
        'Integrated third-party APIs and payment systems',
        'Maintained and optimized existing codebases',
      ],
    },
    {
      company: 'Startup Co.',
      role: 'Junior Developer',
      period: '2019 - 2020',
      responsibilities: [
        'Developed features for MVP product launch',
        'Wrote unit and integration tests',
        'Participated in agile development processes',
        'Contributed to technical documentation',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
          Experience
        </h2>

        {/* Timeline */}
        <div className="space-y-12 max-w-3xl">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-gray-200">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-black rounded-full" />

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-black mb-1">
                  {exp.role}
                </h3>
                <p className="text-lg text-gray-600 mb-2">{exp.company}</p>
                <p className="text-sm text-gray-400 mb-4">{exp.period}</p>

                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
