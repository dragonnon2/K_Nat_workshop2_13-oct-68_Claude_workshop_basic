const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm">
            © {currentYear} Your Name. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="mailto:your.email@example.com"
              className="hover:text-white transition-colors"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
