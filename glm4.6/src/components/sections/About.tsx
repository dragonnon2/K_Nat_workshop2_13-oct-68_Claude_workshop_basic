const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm a passionate Full Stack Developer with over 5 years of experience building
                web applications that solve real-world problems. My journey in tech started with
                a curiosity about how things work on the internet, and has evolved into a
                career focused on creating clean, efficient, and user-friendly solutions.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I specialize in modern JavaScript frameworks, with a strong foundation in both
                frontend and backend technologies. I believe in writing code that is not only
                functional but also maintainable and scalable.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer community through
                technical writing and mentoring.
              </p>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-1">5+ Years</h4>
                  <p className="text-sm text-gray-600">Development Experience</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-1">50+ Projects</h4>
                  <p className="text-sm text-gray-600">Successfully Delivered</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-1">10+ Tech Stack</h4>
                  <p className="text-sm text-gray-600">Technologies Mastered</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-1">Remote Ready</h4>
                  <p className="text-sm text-gray-600">Available Worldwide</p>
                </div>
              </div>
            </div>

            {/* Image/Visual Content */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Placeholder for profile image */}
                <div className="w-80 h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-24 h-24 text-gray-400 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <p className="text-gray-500">Your Photo</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-black rounded-lg opacity-10"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-400 rounded-lg opacity-10"></div>
              </div>
            </div>
          </div>

          {/* Personal Interests */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Beyond Coding
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Continuous Learning</h4>
                <p className="text-sm text-gray-600">
                  Always exploring new technologies and best practices to stay current in the ever-evolving tech landscape.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Community Engagement</h4>
                <p className="text-sm text-gray-600">
                  Active in tech communities, mentoring junior developers, and contributing to open-source projects.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Problem Solving</h4>
                <p className="text-sm text-gray-600">
                  Passionate about tackling complex challenges and finding innovative solutions to real-world problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;