import { education } from '@/data/education';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              My academic background and continuous learning journey
            </p>
          </div>

          {/* Education Cards */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  {/* Main Education Info */}
                  <div className="flex-1">
                    <div className="flex items-start space-x-4">
                      {/* Icon */}
                      <div className="bg-black text-white p-3 rounded-lg flex-shrink-0">
                        <svg
                          className="w-6 h-6"
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

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {edu.degree}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                          <div className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                              />
                            </svg>
                            <span>{edu.institution}</span>
                          </div>
                          <div className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <span>{edu.duration}</span>
                          </div>
                        </div>

                        {/* Achievements */}
                        {edu.achievements && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                            <ul className="space-y-1">
                              {edu.achievements.map((achievement, achIndex) => (
                                <li
                                  key={achIndex}
                                  className="text-sm text-gray-600 flex items-start"
                                >
                                  <span className="text-black mr-2 mt-1">•</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Duration Badge for Mobile */}
                  <div className="md:hidden mt-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white border border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {edu.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Continuous Learning Section */}
          <div className="mt-16 text-center">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Continuous Learning
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Education doesn't stop with formal degrees. I'm constantly learning through
                online courses, workshops, certifications, and hands-on experience with new technologies.
              </p>

              {/* Learning Areas */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-lg font-semibold text-gray-900 mb-1">Online Courses</div>
                  <div className="text-sm text-gray-600">Coursera, Udemy, edX</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-lg font-semibold text-gray-900 mb-1">Certifications</div>
                  <div className="text-sm text-gray-600">AWS, Google, Cloud</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-lg font-semibold text-gray-900 mb-1">Workshops</div>
                  <div className="text-sm text-gray-600">Hackathons, Meetups</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-lg font-semibold text-gray-900 mb-1">Self Study</div>
                  <div className="text-sm text-gray-600">Documentation, Books</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;