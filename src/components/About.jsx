import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBolt, FaRocket, FaSearchDollar, FaMobileAlt,
  FaHandshake, FaLaptopCode
} from 'react-icons/fa';
import aboutBg from '../assets/about.jpg';

const features = [
  {
    icon: <FaRocket className="text-[#58A6FF] text-4xl group-hover:scale-125 transition-transform duration-300" />,
    title: 'Launch with Precision',
    desc: 'From startups to enterprises, we turn bold ideas into lightning-fast digital solutions with unmatched precision.',
    border: 'border-[#58A6FF]',
  },
  {
    icon: <FaMobileAlt className="text-[#FF6EC4] text-4xl group-hover:scale-125 transition-transform duration-300" />,
    title: 'Mobile-First Experience',
    desc: 'Engineered for every screen interfaces that are intuitive, responsive, and ready to wow on any device.',
    border: 'border-[#FF6EC4]',
  },
  {
    icon: <FaSearchDollar className="text-[#9B5DE5] text-4xl group-hover:scale-125 transition-transform duration-300" />,
    title: 'Rank & Convert',
    desc: 'SEO-optimized, conversion focused architecture designed to drive traffic and revenue growth.',
    border: 'border-[#9B5DE5]',
  },
  {
    icon: <FaBolt className="text-yellow-400 text-4xl group-hover:scale-125 transition-transform duration-300" />,
    title: 'Speed to Market',
    desc: 'Agile builds, scalable code, and fast iteration cycles to help you ship features at top speed.',
    border: 'border-yellow-400',
  },
];

const highlights = [
  {
    icon: <FaHandshake className="text-green-400 text-3xl animate-pulse" />,
    title: 'True Tech Partnership',
    desc: 'We don’t just build we collaborate, consult, and scale with you to achieve real business impact.',
    border: 'border-green-400',
  },
  {
    icon: <FaLaptopCode className="text-[#FF6EC4] text-3xl animate-pulse" />,
    title: 'Future-Ready Code',
    desc: 'Clean, modular, and scalable codebases that grow with your product and your team.',
    border: 'border-[#FF6EC4]',
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-4 sm:px-8 md:px-16 lg:px-20 text-[#E6EDF3] font-['Inter'] bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="absolute inset-0 bg-[#0D1117]/80 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#58A6FF] via-[#9B5DE5] to-[#FF6EC4] text-transparent bg-clip-text font-['Space Grotesk']"
        >
          Your Vision, Our Engineering Power.
        </motion.h2>

        {/* Sub Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-[#ffffff] max-w-3xl mx-auto mb-16 px-4 leading-relaxed"
        >
          <span className="font-bold bg-gradient-to-r from-[#58A6FF] via-[#9B5DE5] to-[#FF6EC4] text-transparent bg-clip-text">
            Vearnify
          </span>{' '}
          crafts mission-driven digital products that fuse strategy, design, and engineering — purpose-built to scale your vision with confidence.
        </motion.p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-24 px-2">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
              className={`group bg-[#161B22]/20 p-6 rounded-2xl border ${item.border} shadow-xl hover:shadow-[0_0_30px] hover:shadow-current transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 font-['Space Grotesk'] group-hover:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-[#AAB1B9] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Secondary Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 font-['Space Grotesk'] bg-gradient-to-r from-[#9B5DE5] to-[#58A6FF] text-transparent bg-clip-text"
        >
          Built with Engineering Excellence
        </motion.h3>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto px-2"
        >
          {highlights.map((highlight, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-4 bg-[#0D1117]/70 p-6 rounded-xl border ${highlight.border} hover:shadow-[0_0_25px] hover:shadow-current transition duration-300`}
            >
              <div className="mt-1">{highlight.icon}</div>
              <div>
                <h4 className="text-lg font-semibold mb-1 font-['Space Grotesk'] text-white">
                  {highlight.title}
                </h4>
                <p className="text-sm text-[#C9D1D9] leading-relaxed">{highlight.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
