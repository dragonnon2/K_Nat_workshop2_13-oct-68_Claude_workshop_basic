const Resume = () => {
  return (
    <section id="resume" className="py-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Resume
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8">
            Download my resume to learn more about my experience, skills, and education.
          </p>

          {/* Download Button */}
          <a
            href="/resume.pdf"
            download
            className="inline-block px-8 py-4 bg-black text-white hover:bg-gray-900 transition-colors"
          >
            Download Resume (PDF)
          </a>

          {/* Additional Info */}
          <p className="text-sm text-gray-400 mt-6">
            Last updated: January 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
