const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
          About Me
        </h2>

        {/* Content */}
        <div className="max-w-3xl">
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            I'm a passionate full-stack developer with over 5 years of experience
            building web applications that make a difference. My journey in tech
            started with a curiosity about how things work, which evolved into a
            career dedicated to creating intuitive and powerful digital solutions.
          </p>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            I specialize in modern JavaScript frameworks, with a strong focus on
            React, Next.js, and Node.js. My approach combines technical expertise
            with a deep understanding of user needs, ensuring that every project
            I work on is both functionally robust and delightfully user-friendly.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge with the
            developer community through blog posts and mentorship.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
