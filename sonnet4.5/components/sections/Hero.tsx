const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="container-custom w-full">
        <div className="max-w-3xl">
          {/* Greeting */}
          <p className="text-gray-600 text-lg mb-4">Hello, I'm</p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
            Your Name
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-4xl text-gray-600 mb-8">
            Full Stack Developer & Designer
          </h2>

          {/* Value Proposition */}
          <p className="text-lg text-gray-600 mb-12 max-w-2xl leading-relaxed">
            I build elegant digital experiences that solve real problems.
            Specializing in modern web technologies and user-centered design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-black text-white hover:bg-gray-900 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
