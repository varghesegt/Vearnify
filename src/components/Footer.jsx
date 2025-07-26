import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="relative bg-[#0D1117] text-[#E6EDF3] pt-16 pb-8 px-4 sm:px-10 md:px-20 border-t border-[#21262D] mt-0">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center text-center md:text-left">
        {/* About */}
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-[#58A6FF] to-[#9B5DE5] text-transparent bg-clip-text mb-4">
            Vearnify
          </h3>
          <p className="text-[#8B949E] leading-relaxed">
            Crafting standout websites & digital solutions for creators, startups, and small businesses. Build bold with Vearnify.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-[#E6EDF3]">Quick Links</h4>
          <ul className="space-y-2">
            {['home', 'about', 'services', 'pricing', 'contact'].map((section) => (
              <li key={section}>
                <ScrollLink
                  to={section}
                  smooth={true}
                  duration={600}
                  offset={-60}
                  className="cursor-pointer hover:text-[#58A6FF] transition duration-300"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Socials */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-[#E6EDF3]">Let’s Connect</h4>
          <p className="text-[#8B949E] mb-2">
            Email:{' '}
            <a href="mailto:hello@vearnify.com" className="text-[#58A6FF] hover:underline">
              varghese.gt.dev@gmail.com
            </a>
          </p>
          <p className="text-[#8B949E] mb-4">
            Phone:{' '}
            <a href="tel:+917871844464" className="text-[#9B5DE5] hover:underline">
              +91 78718 44464
            </a>
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://github.com/vearnify" target="_blank" rel="noreferrer">
              <FaGithub className="text-2xl hover:text-[#58A6FF] hover:scale-110 transition duration-300" />
            </a>
            <a href="https://linkedin.com/in/vearnify" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-2xl hover:text-[#58A6FF] hover:scale-110 transition duration-300" />
            </a>
            <a href="https://instagram.com/vearnify" target="_blank" rel="noreferrer">
              <FaInstagram className="text-2xl hover:text-[#9B5DE5] hover:scale-110 transition duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-[#21262D]"></div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#8B949E]">
        <p>© {new Date().getFullYear()} Vearnify. All Rights Reserved.</p>
        <ScrollLink to="home" smooth={true} duration={600}>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-[#161B22]/80 border border-[#21262D] rounded-full hover:border-[#58A6FF] hover:shadow-[0_0_10px_#58A6FF] transition duration-300">
            <FaArrowUp />
            Back to Top
          </button>
        </ScrollLink>
      </div>
    </footer>
  );
};

export default Footer;
