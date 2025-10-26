'use client';

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (this is a placeholder)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
          {/* Contact Info */}
          <div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I'm always open to new opportunities, collaborations, and interesting
              projects. Feel free to reach out if you'd like to connect!
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-black mb-2">Email</h3>
                <a
                  href="mailto:your.email@example.com"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  your.email@example.com
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-black mb-2">Social</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-black mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-black mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-black mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-black text-white hover:bg-gray-900 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
