import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaHospital,
  FaUtensils,
  FaStore,
  FaIndustry,
  FaLaptopCode,
  FaUserTie,
  FaWhatsapp,
  FaTshirt,
  FaNetworkWired,
} from "react-icons/fa";
import pricingBg from "../assets/pricing.jpg";

// Same businessSolutions array...
const businessSolutions = [
  {
    icon: <FaStore className="text-pink-400 text-2xl" />,
    title: "Salons & Beauty Studios",
    tagline: "Transform style into substance with a vibrant online identity.",
    borderColor: "border-pink-400",
    features: [
      "Service Showcase with Pricing",
      "Before/After Gallery",
      "WhatsApp Booking CTA",
      "Client Testimonials",
      "Team Introduction Cards",
      "Smooth Animations & Effects",
    ],
  },
  {
    icon: <FaHospital className="text-red-400 text-2xl" />,
    title: "Clinics & Healthcare",
    tagline: "Empower patient trust with clarity and convenience.",
    borderColor: "border-red-400",
    features: [
      "Doctor Profiles & Timings",
      "Health Packages Display",
      "Direct WhatsApp Consultation",
      "Service & Facility Highlights",
      "FAQ Accordion",
      "Emergency Contact Spotlight",
    ],
  },
  {
    icon: <FaUtensils className="text-yellow-400 text-2xl" />,
    title: "Cafes & Restaurants",
    tagline: "Turn cravings into delightful digital experiences.",
    borderColor: "border-yellow-400",
    features: [
      "Interactive Digital Menu",
      "Instagram Feed Display",
      "Location with Google Maps",
      "Promotions Carousel",
      "Order Now CTA",
      "Gallery of Signature Dishes",
    ],
  },
  {
    icon: <FaStore className="text-orange-400 text-2xl" />,
    title: "E-commerce Startups",
    tagline: "Build cart-worthy experiences right from the homepage.",
    borderColor: "border-orange-400",
    features: [
      "Product Showcases with Tags",
      "Filter & Category UI (Frontend)",
      "Sale Offers / Badges",
      "Testimonials Carousel",
      "Animated Add to Cart Button",
      "FAQ Section with Accordion",
    ],
  },
  {
    icon: <FaUserTie className="text-cyan-400 text-2xl" />,
    title: "Coaching Institutes",
    tagline: "Engage students with structured, informative layouts.",
    borderColor: "border-cyan-400",
    features: [
      "Course Category Cards",
      "Trainer/Faculty Profiles",
      "WhatsApp Enquiry Button",
      "Student Testimonials",
      "Class Timetable Display",
      "Gallery & Achievements",
    ],
  },
  {
    icon: <FaLaptopCode className="text-green-400 text-2xl" />,
    title: "Designers & Freelancers",
    tagline: "Stand out with a polished portfolio that sells.",
    borderColor: "border-green-400",
    features: [
      "Filterable Project Portfolio",
      "Service Cards with Pricing",
      "Testimonial Slider",
      "Dribbble / Behance Links",
      "Hire Me Button",
      "Blog & Article Integration",
    ],
  },
  {
    icon: <FaIndustry className="text-blue-400 text-2xl" />,
    title: "Manufacturers & Industries",
    tagline: "Highlight engineering excellence and capability.",
    borderColor: "border-blue-400",
    features: [
      "Product Display Gallery",
      "Certifications & Awards Section",
      "Factory Tour Carousel",
      "Client Logos Showcase",
      "Case Studies / Use Cases",
      "Download Brochure CTA",
    ],
  },
  {
    icon: <FaUserTie className="text-purple-400 text-2xl" />,
    title: "Business Portfolios",
    tagline: "Elevate professional credibility with structure.",
    borderColor: "border-purple-400",
    features: [
      "Dynamic Hero Banner with CTA",
      "Vision & Mission Highlights",
      "Custom Icons for Services",
      "Overview of Offerings",
      "Quick CTA Anchors",
      "Terms & Privacy Policy Pages",
    ],
  },
  {
    icon: <FaIndustry className="text-rose-400 text-2xl" />,
    title: "Real Estate Agencies",
    tagline: "Project your properties with immersive visuals.",
    borderColor: "border-rose-400",
    features: [
      "Property Gallery Grid",
      "Google Maps Integration",
      "Instant WhatsApp Enquiry",
      "Brochure Download Option",
      "Project Highlights & Plans",
      "Client Testimonials Section",
    ],
  },
  {
    icon: <FaHospital className="text-indigo-400 text-2xl" />,
    title: "Colleges & Schools",
    tagline: "Modern and informative academic showcases.",
    borderColor: "border-indigo-400",
    features: [
      "Academic Program Overview",
      "Faculty Profiles",
      "Admissions CTA Button",
      "Events & Announcements",
      "Alumni Testimonials",
      "Photo & Campus Tour Gallery",
    ],
  },
  {
    icon: <FaTshirt className="text-fuchsia-400 text-2xl" />,
    title: "Boutiques & Textile Brands",
    tagline: "Make every fabric click-worthy and fashionable.",
    borderColor: "border-fuchsia-400",
    features: [
      "Lookbook Style Product Gallery",
      "Seasonal Collections Highlight",
      "Direct WhatsApp Enquiry CTA",
      "Animated Size Chart",
      "Client Photos & Testimonials",
      "Shop Now Integration (Frontend)",
    ],
  },
  {
    icon: <FaNetworkWired className="text-lime-400 text-2xl" />,
    title: "IT Service Providers",
    tagline: "Position your tech with confidence.",
    borderColor: "border-lime-400",
    features: [
      "Services Overview Section",
      "Project Case Studies",
      "Tech Stack Icons",
      "Download Service Deck CTA",
      "Testimonials & Partnerships",
      "Pricing Cards (Frontend Only)",
    ],
  },
];

const ITEMS_PER_PAGE = 4;

const Pricing = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(businessSolutions.length / ITEMS_PER_PAGE);

  const currentItems = businessSolutions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section
      id="pricing"
      className="relative py-20 px-4 sm:px-6 lg:px-12 text-[#E6EDF3] bg-cover bg-center"
      style={{ backgroundImage: `url(${pricingBg})` }}
    >
      <div className="absolute inset-0 bg-[#0D1117]/90 backdrop-blur-sm z-0" />
      <div className="relative z-10">
        <div className="text-center mb-16 px-2">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#58A6FF] via-[#9B5DE5] to-[#FF6EC7] text-transparent bg-clip-text"
          >
            Business-Specific Website Solutions
          </motion.h2>
          <p className="mt-4 text-white text-base sm:text-lg max-w-3xl mx-auto">
            Tailored frontend features crafted for your industry. Boost
            credibility, attract users, and convert better without the need for backend.
          </p>
        </div>

        {/* Slide Cards with Pagination */}
        <div className="pt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap justify-center gap-6"
            >
              {currentItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  className={`flex flex-col justify-between
                    w-full sm:w-[45%] lg:w-[22%]
                    p-5 md:p-6 rounded-3xl shadow-xl
                    border-2 ${item.borderColor}
                    bg-white/1 backdrop-md
                    hover:ring-1 hover:ring-[#58A6FF]
                    transition-all duration-300 ease-in-out`}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      {item.icon}
                      <h3 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-[#58A6FF] to-[#9B5DE5] text-transparent bg-clip-text">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm text-white mb-4 italic">
                      {item.tagline}
                    </p>
                    <ul className="mt-4 space-y-3">
                      {item.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs md:text-sm text-white"
                        >
                          <FaCheckCircle className="text-green-400 mt-1 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/917871844464?text=${encodeURIComponent(
                      `Hi Vearnify! I’m interested in your ${item.title} plan. Please share details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block w-full text-center bg-gradient-to-r from-[#58A6FF] via-[#9B5DE5] to-[#FF6EC7] text-white font-semibold py-2.5 md:py-3 rounded-xl transition-transform hover:scale-105 shadow-md"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <FaWhatsapp className="text-sm md:text-lg" />
                      Get This Now
                    </div>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination Buttons */}
          <div className="mt-10 flex justify-center gap-3">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  currentPage === i + 1
                    ? "bg-[#58A6FF] text-white"
                    : "bg-white/10 text-[#E6EDF3] hover:bg-white/20"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center text-sm text-white px-4">
          Looking for something more custom?{" "}
          <a
            href="varghese.gt.dev@gmail.com"
            className="text-[#58A6FF] hover:underline"
          >
            Contact us via email
          </a>{" "}
          let's turn your ideas into frontend reality.
        </div>
      </div>
    </section>
  );
};

export default Pricing;
