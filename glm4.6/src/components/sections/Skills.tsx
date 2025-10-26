import { skills } from '@/data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Tech Stack</h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of the technologies and tools I work with
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <div
                key={category.category}
                className={`bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300 ${
                  index === 0 ? 'md:transform md:hover:-translate-y-2' : ''
                }`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                  {category.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block bg-gray-100 text-gray-700 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Info */}
          <div className="mt-16 text-center">
            <div className="bg-gray-50 rounded-lg p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Always Learning & Growing
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Technology is constantly evolving, and so am I. I'm always exploring new frameworks,
                tools, and best practices to stay current in the rapidly changing tech landscape.
                My focus is on understanding core concepts that transcend specific technologies.
              </p>

              {/* Areas of Expertise */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Frameworks</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">10+</div>
                  <div className="text-sm text-gray-600">Databases</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">20+</div>
                  <div className="text-sm text-gray-600">Tools</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Badges */}
          <div className="mt-12">
            <div className="flex flex-wrap justify-center gap-6">
              {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker'].map((tech) => (
                <div
                  key={tech}
                  className="bg-white border border-gray-200 rounded-lg px-6 py-3 flex items-center space-x-2 hover:border-gray-400 transition-colors"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;