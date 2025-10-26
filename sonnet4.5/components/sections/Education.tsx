const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container-custom">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
          Education
        </h2>

        {/* Education Content */}
        <div className="max-w-3xl">
          <div className="border border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-black mb-2">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              University Name | 2015 - 2019
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-black mb-2">
                  Achievements & Activities
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Graduated with Honors (GPA: 3.8/4.0)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>President of Computer Science Club</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Dean's List for 6 consecutive semesters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Research: Machine Learning Applications in Web Development</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-black mb-2">
                  Relevant Coursework
                </h4>
                <p className="text-gray-600">
                  Data Structures & Algorithms, Web Development, Database Systems,
                  Software Engineering, Computer Networks, Artificial Intelligence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
