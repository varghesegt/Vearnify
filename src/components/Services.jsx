import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode, FaMobileAlt, FaRocket,
  FaSearch, FaMagic, FaHandshake
} from 'react-icons/fa';
import serviceBg from '../assets/service.jpg';

const services = [
  {
    title: "Custom Web Development",
    subtitle: "Crafted by Vearnify",
    icon: <FaCode />,
    desc: "High performance websites using React, Node.js & Firebase. Lightning fast, ultra secure, and 100% scalable to your business goals.",
    border: "border-[#58A6FF]",
  },
  {
    title: "Mobile-First Experiences",
    subtitle: "Flawless on Every Screen",
    icon: <FaMobileAlt />,
    desc: "Designed for thumbs, not cursors. Every page adapts beautifully delivering buttery smooth performance on mobile, tablet, and desktop.",
    border: "border-[#FF6EC4]",
  },
  {
    title: "Rapid Delivery in Days",
    subtitle: "Speed Without Sacrifice",
    icon: <FaRocket />,
    desc: "From zero to launch in 7-10 days. We deliver pixel perfect results with speed, precision, and brand aligned aesthetics.",
    border: "border-[#9B5DE5]",
  },
  {
    title: "SEO & Google Domination",
    subtitle: "Rank. Reach. Convert.",
    icon: <FaSearch />,
    desc: "We bake in SEO from the ground up increasing visibility, clicks, and conversions. Outrank competitors without paying for ads.",
    border: "border-[#FFD200]",
  },
  {
    title: "Immersive UI/UX Design",
    subtitle: "Delight That Drives Loyalty",
    icon: <FaMagic />,
    desc: "Strategic, sleek, and animated. Our interfaces don’t just look good they build trust and keep users engaged longer.",
    border: "border-[#00F260]",
  },
  {
    title: "1:1 Founder Support",
    subtitle: "Your Growth Ally",
    icon: <FaHandshake />,
    desc: "We’re your digital co-pilot. From launch to scale, you get direct access to us for support, strategy, and ongoing optimization.",
    border: "border-[#fc466b]",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-20 px-4 sm:px-6 md:px-10 text-white font-['Inter'] overflow-hidden"
      style={{
        backgroundImage: `url(${serviceBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0D1117]/90 backdrop-blur-sm" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[clamp(1.8rem,6vw,3rem)] font-extrabold mb-4 bg-gradient-to-r from-[#58A6FF] to-[#9B5DE5] text-transparent bg-clip-text font-space"
        >
          Vearnify Services
        </motion.h2>

        {/* Subtitle */}
        <p className="text-[clamp(1rem,2vw,1.25rem)] text-white/100 max-w-2xl mx-auto mb-12 font-medium">
          From bold startups to growing brands, <span className="font-semibold text-white">Vearnify</span> delivers{' '}
          <span className="bg-gradient-to-r from-[#58A6FF] to-[#9B5DE5] text-transparent bg-clip-text font-semibold">
            high-impact, conversion-focused websites
          </span>{' '}
          that spark attention and fuel results.
        </p>

        {/* Service Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-2 sm:px-0">
          {services.map((srv, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
              className={`p-[2px] rounded-3xl border ${srv.border} hover:shadow-[0_0_25px] hover:shadow-current transition-all`}
            >
              <div className="bg-white/1 backdrop-sm rounded-3xl p-6 sm:p-7 h-full hover:shadow-[0_0_30px_#58A6FF66] transition-all duration-300 border border-white/5">

                <div className="text-4xl mb-4 text-white drop-shadow-md">
                  {srv.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{srv.title}</h3>
                <h4 className="text-xs sm:text-sm font-semibold mb-3 uppercase tracking-wide bg-gradient-to-r from-[#FFD200] to-[#FF6EC4] text-transparent bg-clip-text">

                  {srv.subtitle}
                </h4>
                <p className="text-[#ffffff] text-[0.9rem] leading-relaxed">
                  {srv.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
