import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight } from 'react-icons/fa';
import home1 from '../assets/home1.jpg';

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center px-4 sm:px-6 md:px-12 pt-20 pb-12 bg-cover bg-center bg-no-repeat text-[#E6EDF3] overflow-hidden"
      style={{ backgroundImage: `url(${home1})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0D1117]/70 backdrop-blur-sm z-0" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center w-full max-w-[92vw] sm:max-w-[90vw] md:max-w-3xl px-4 sm:px-6 py-8 sm:py-12 bg-[#0D1117]/60 backdrop-blur-lg rounded-3xl border border-[#21262D] shadow-[0_0_60px_#58A6FF30]"
      >
        {/* Title */}
        <h1 className="text-[clamp(1.7rem,5vw,3rem)] font-extrabold leading-tight mb-4 font-poppins text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
          Elevate Your Brand with{' '}
          <span className="bg-gradient-to-r from-[#00C6FF] via-[#9B5DE5] to-[#FF6EC4] text-transparent bg-clip-text">
            Vearnify
          </span>
        </h1>

        {/* Typing Animation */}
        <div className="text-[clamp(0.85rem,1.5vw,1.15rem)] font-semibold text-[#58A6FF] mb-5 min-h-[28px] font-space tracking-wide uppercase leading-tight">
          <TypeAnimation
  sequence={[
    'Trusted by Brands, Loved by Clients', 2000,
    'Web Design that Turns Clicks into Clients', 2000,
    'From First Click to Lifelong Clients', 2000,
  ]}
  wrapper="span"
  speed={45}
  repeat={Infinity}
/>

        </div>

        {/* Description */}
        <p className="text-[clamp(0.9rem,1rem,1.1rem)] text-white leading-relaxed mb-4 font-inter font-medium">
          At{' '}
          <span className="bg-gradient-to-r from-[#00C6FF] via-[#9B5DE5] to-[#FF6EC4] text-transparent bg-clip-text font-bold">
            Vearnify
          </span>
          , we create stunning, performance driven websites that{' '}
          <span className="text-[#00C6FF] font-semibold">convert visitors into loyal clients</span>. Whether you're a creator, founder, or startup we craft digital journeys with{' '}
          <span className="text-[#FF6EC4] font-semibold">speed</span>,{' '}
          <span className="text-[#9B5DE5] font-semibold">style</span>, and{' '}
          <span className="text-[#00C6FF] font-semibold">scalability</span>.
        </p>

        {/* Sub-Text */}
        <p className="text-xs sm:text-sm text-[#8B949E] mb-6 sm:mb-8 italic font-dm font-light tracking-wide">
          Let’s craft your digital masterpiece from idea to impact.
        </p>

        {/* CTA Button */}
        <motion.div whileHover={{ scale: 1.07 }} className="inline-block">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 sm:gap-3 px-5 py-2.5 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wide rounded-xl bg-gradient-to-r from-[#00C6FF] to-[#9B5DE5] text-white hover:from-[#58A6FF] hover:to-[#FF6EC4] transition-all duration-300 shadow-lg shadow-[#58A6FF40] font-space"
          >
            Book Your Free Strategy Call <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
