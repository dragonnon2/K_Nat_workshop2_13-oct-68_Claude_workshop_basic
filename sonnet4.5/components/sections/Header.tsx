'use client';

import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <nav className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#hero" className="text-xl font-bold text-black hover:text-gray-600 transition-colors">
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4 pb-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block text-sm text-gray-600 hover:text-black transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
