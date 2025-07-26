import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import contactBg from '../assets/contact.jpg';

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-16 px-4 sm:px- md:px-15 lg:px-15 text-[#E6EDF3] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(13,17,23,0.85), rgba(13,17,23,0.85)), url(${contactBg})`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-[#161B22]/10 rounded-2xl shadow-2xl p-8 md:p-12 border border-[#21262D] backdrop-md"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-center bg-gradient-to-r from-[#58A6FF] via-[#9B5DE5] to-[#58A6FF] text-transparent bg-clip-text mb-6">
          Let’s Connect
        </h2>

        <p className="text-center text-base sm:text-lg text-[#C9D1D9] mb-12 leading-relaxed">
          Reach out via{" "}
          <span className="bg-gradient-to-r from-[#58A6FF] to-[#9B5DE5] text-transparent bg-clip-text font-semibold">
            phone
          </span>
          ,{" "}
          <span className="bg-gradient-to-r from-[#9B5DE5] to-[#58A6FF] text-transparent bg-clip-text font-semibold">
            WhatsApp
          </span>
          , or{" "}
          <span className="bg-gradient-to-r from-[#58A6FF] to-[#9B5DE5] text-transparent bg-clip-text font-semibold">
            email
          </span>{" "}
          I’d love to hear from you!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Phone */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="tel:+917871844464"
            className="flex flex-col items-center gap-2 p-6 bg-[#0D1117]/90 border border-[#21262D] hover:border-[#58A6FF] rounded-xl transition duration-300 text-center shadow-md hover:shadow-[#58A6FF]/40"
          >
            <FaPhoneAlt className="text-3xl text-[#58A6FF]" />
            <span className="text-lg font-semibold bg-gradient-to-r from-[#58A6FF] to-[#9B5DE5] text-transparent bg-clip-text">
              Call Me
            </span>
            <span className="text-sm text-[#C9D1D9]">+91 78718 44464</span>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://wa.me/917871844464?text=Hi%20Varghese%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-6 bg-[#0D1117]/90 border border-[#21262D] hover:border-[#9B5DE5] rounded-xl transition duration-300 text-center shadow-md hover:shadow-[#9B5DE5]/40"
          >
            <FaWhatsapp className="text-3xl text-[#9B5DE5]" />
            <span className="text-lg font-semibold bg-gradient-to-r from-[#9B5DE5] to-[#58A6FF] text-transparent bg-clip-text">
              WhatsApp
            </span>
            <span className="text-sm text-[#C9D1D9]">Chat Instantly →</span>
          </motion.a>

          {/* Email */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="mailto:varghese.gt.dev@gmail.com?subject=Project%20Inquiry&body=Hi%20Varghese%2C%20I%20am%20interested%20in%20working%20with%20you..."
            className="flex flex-col items-center gap-2 p-6 bg-[#0D1117]/90 border border-[#21262D] hover:border-[#58A6FF] rounded-xl transition duration-300 text-center shadow-md hover:shadow-[#58A6FF]/40"
          >
            <FaEnvelope className="text-3xl text-[#58A6FF]" />
            <span className="text-lg font-semibold bg-gradient-to-r from-[#58A6FF] to-[#9B5DE5] text-transparent bg-clip-text">
              Email
            </span>
            <span className="text-sm text-[#C9D1D9]">varghese.gt.dev@gmail.com</span>
          </motion.a>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg sm:text-xl text-[#C9D1D9] font-medium">
            I usually respond{" "}
            <span className="bg-gradient-to-r from-[#58A6FF] to-[#9B5DE5] text-transparent bg-clip-text font-semibold">
              quickly
            </span>
            , and I’m{" "}
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#58A6FF] text-transparent bg-clip-text font-semibold">
              ready to collaborate
            </span>{" "}
            on your next big idea.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
