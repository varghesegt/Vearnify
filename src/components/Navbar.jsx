import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import {
  FaHome, FaCogs, FaMoneyBillWave, FaUserTie, FaEnvelopeOpenText
} from 'react-icons/fa'; // Updated: FaConciergeBell → FaCogs

const navLinks = [
  { name: 'Home', to: 'home', icon: <FaHome /> },
  { name: 'About', to: 'about', icon: <FaUserTie /> },
  { name: 'Services', to: 'services', icon: <FaCogs /> }, // 👈 Updated icon
  { name: 'Pricing', to: 'pricing', icon: <FaMoneyBillWave /> },
  { name: 'Contact', to: 'contact', icon: <FaEnvelopeOpenText /> },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-[999] backdrop-blur-xl bg-black/60 border-b border-border shadow-[0_2px_10px_rgba(88,166,255,0.1)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center h-16">
        {/* Logo */}
        <ScrollLink
          to="home"
          smooth
          duration={500}
          offset={-60}
          spy
          onSetActive={() => setActive('home')}
          className="text-2xl font-bold font-poppins bg-gradient-to-r from-[#58A6FF] via-[#9B5DE5] to-[#FF6EC4] text-transparent bg-clip-text cursor-pointer"
        >
          VEARNIFY
        </ScrollLink>

        {/* Desktop Nav */}
        <LayoutGroup>
          <ul className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <motion.li key={link.name} layout className="group relative">
                <ScrollLink
                  to={link.to}
                  spy
                  smooth
                  duration={500}
                  offset={-60}
                  onSetActive={() => setActive(link.to)}
                  className={`flex items-center gap-2 px-4 py-2 font-secondary font-medium rounded-xl transition-all duration-300 relative ${
                    active === link.to
                      ? 'text-white bg-gradient-to-r from-[#9B5DE5] to-[#58A6FF] shadow-[0_0_10px_#58A6FF]'
                      : 'text-gray-300 hover:text-primary hover:bg-white/5'
                  }`}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-200">{link.icon}</span>
                  {link.name}
                  <motion.span
                    layoutId="underline"
                    className={`absolute bottom-0 left-4 right-4 h-[2px] rounded-full ${
                      active === link.to
                        ? 'bg-gradient-to-r from-[#58A6FF] via-[#9B5DE5] to-[#58A6FF]'
                        : 'bg-transparent'
                    }`}
                  />
                </ScrollLink>
              </motion.li>
            ))}
          </ul>
        </LayoutGroup>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl transition-transform duration-300 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX className="hover:rotate-90 transition-transform" /> : <FiMenu className="hover:scale-110" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden w-full flex flex-col items-center justify-center gap-3 px-6 py-6 text-white font-medium text-base text-center bg-gradient-to-b from-[#0D1117] via-[#12151c] to-[#0D1117] shadow-xl rounded-b-2xl"
          >
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full max-w-xs flex justify-center`}
              >
                <ScrollLink
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-60}
                  spy
                  onClick={() => {
                    setActive(link.to);
                    closeMenu();
                  }}
                  className={`flex items-center justify-center gap-3 w-full px-4 py-3 rounded-xl transition-all duration-300 ${
                    active === link.to
                      ? 'bg-gradient-to-r from-[#58A6FF] via-[#9B5DE5] to-[#FF6EC4] text-white shadow-md'
                      : 'hover:text-primary hover:bg-white/10 text-gray-300'
                  }`}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span className="text-base font-medium">{link.name}</span>
                </ScrollLink>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
