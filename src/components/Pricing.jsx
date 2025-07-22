import React, { useEffect, useRef } from "react";
import pricingBg from "../assets/pricing.jpg";
import { FaCheckCircle, FaCrown } from "react-icons/fa";

const plans = [
  {
    title: "Starter Site Essentials",
    badge: "basic",
    price: 9999,
    original: 12999,
    billing: "One-time (1 Year)",
    tagline: "Ideal for students, freelancers & new creators launching online",
    discountTag: "💸 Limited-Time Offer: Save 23%",
    features: [
      "2-Page Website: Home + Contact/About",
      "Clean, responsive layout for all devices",
      "Direct WhatsApp/Call Integration",
      "Social Media Links + Location Maps",
      "3 Months of Expert Support",
    ],
    wpMessage: "Hi! I'm interested in the Starter Site Essentials plan for ₹9,999.",
  },
  {
    title: "Pro Presence Package",
    badge: "premium",
    price: 14999,
    original: 19999,
    billing: "One-time (1 Year)",
    tagline: "Perfect for cafés, salons, consultants & local brands",
    discountTag: "🧳 Save 25% Instantly",
    features: [
      "3 Pages: Home, Menu/Services, Contact",
      "Branded QR Menu or Service PDF",
      "One-click WhatsApp Orders/Appointments",
      "Testimonials + Social Proof Section",
      "6 Months Premium Support",
    ],
    wpMessage: "Hi! I’d like to know more about the Pro Presence Package for ₹14,999.",
  },
  {
    title: "Brand Builder Suite",
    badge: "elite",
    price: 29999,
    original: 39999,
    billing: "One-time (1 Year)",
    tagline: "Designed for clinics, educators, restaurants & influencers",
    discountTag: "🔥 Save ₹10,000 Today",
    features: [
      "5 Pages: Home, About, Services, Reviews, Contact",
      "Digital & Print-ready QR Brochure/Menu",
      "Full SEO + Speed Optimization",
      "Lead Capture Form (Email + Sheets)",
      "1 Year Premium Support + 5 Free Content Updates",
      "Custom Icons, Animations & Visuals",
      "Premium Hosting + CDN",
      "One-click Social Share Buttons",
    ],
    wpMessage: "Hi! I'm ready to begin with the Brand Builder Suite for ₹29,999.",
  },
  {
    title: "Launch Lite (Monthly)",
    badge: "basic",
    price: 1999,
    original: 2999,
    billing: "/month",
    tagline: "A budget-friendly monthly plan for small starters",
    discountTag: "🧠 Smart Launch: Save 33%",
    features: [
      "3 Pages + Hosting + Domain",
      "Fully Responsive Design",
      "QR Menu / Product PDF Support",
      "Basic Monthly Updates",
      "WhatsApp Support (Business Hours)",
    ],
    wpMessage: "Hi! I want to get started with Launch Lite at ₹1,999/month.",
  },
  {
    title: "Digital Growth Engine",
    badge: "premium",
    price: 3499,
    original: 4999,
    billing: "/month",
    tagline: "Perfect for scaling brands with fast updates & optimizations",
    discountTag: "📈 ₹1,500/mo Savings",
    features: [
      "5 Pages + Live Menu via Google Sheets",
      "Unlimited Monthly Content Updates",
      "Fast Hosting + Custom Domain",
      "SEO Ready (Meta, Speed, Structure)",
      "Priority Response Support",
    ],
    wpMessage: "Hi! I'm interested in the Digital Growth Engine plan at ₹3,499/month.",
  },
  {
    title: "Elite Partner Program",
    badge: "elite",
    price: 4999,
    original: 6999,
    billing: "/month",
    tagline: "Complete monthly care: strategy, design, SEO & updates",
    discountTag: "🚀 Save ₹2,000 Every Month",
    features: [
      "5 Premium Pages: Home, About, Services, Reviews, Contact",
      "Digital & Printable Brochures / QR Menus",
      "Full SEO + Core Web Speed Optimization",
      "Integrated Lead Forms",
      "1 Monthly Content Update + Priority Support",
      "Custom UI Icons & Web Animations",
      "Premium Hosting CDN",
      "Social Media Share Links Included",
    ],
    wpMessage:
      "Hi! I’m ready to join the Elite Partner Program at ₹4,999/month.",
  },
];


const addons = [
  "Extra Page – ₹999",
  "Custom Contact Form – ₹1,499",
  "PDF Brochure/Menu – ₹1,499",
  "Image Gallery/Carousel – ₹999",
  "Multi-language Setup – ₹1,999",
  "Booking or Lead Form Setup – ₹2,499",
  "Full E-commerce Setup – ₹9,999+",
  "Content Upload & Alignment – ₹1,499",
];


const getBadgeStyle = (type) => {
  switch (type) {
    case "basic":
      return "bg-[#58A6FF]";
    case "premium":
      return "bg-[#9B5DE5]";
    case "elite":
      return "bg-gradient-to-r from-[#FF6EC4] to-[#9B5DE5]";
    default:
      return "bg-gray-500";
  }
};

const Pricing = () => {
  const whatsapp = "917871844464";
  const sliderRef = useRef(null);
  let index = 0;

  useEffect(() => {
    const slider = sliderRef.current;

    // Autoplay Scroll
    const interval = setInterval(() => {
      if (slider) {
        const scrollWidth = slider.scrollWidth;
        const cardWidth = slider.children[0].offsetWidth + 24;
        const visibleCards = Math.floor(slider.offsetWidth / cardWidth);
        index = (index + 1) % (plans.length - visibleCards + 1);
        slider.scrollTo({
          left: index * cardWidth,
          behavior: "smooth",
        });
      }
    }, 4000);

    // Drag-to-scroll
    let isDown = false;
    let startX;
    let scrollLeft;

    const mouseDown = (e) => {
      isDown = true;
      slider.classList.add("cursor-grabbing");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const mouseLeave = () => {
      isDown = false;
      slider.classList.remove("cursor-grabbing");
    };

    const mouseUp = () => {
      isDown = false;
      slider.classList.remove("cursor-grabbing");
    };

    const mouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    };

    const wheelScroll = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        slider.scrollLeft += e.deltaY;
      }
    };

    slider.addEventListener("mousedown", mouseDown);
    slider.addEventListener("mouseleave", mouseLeave);
    slider.addEventListener("mouseup", mouseUp);
    slider.addEventListener("mousemove", mouseMove);
    slider.addEventListener("wheel", wheelScroll);

    return () => {
      clearInterval(interval);
      slider.removeEventListener("mousedown", mouseDown);
      slider.removeEventListener("mouseleave", mouseLeave);
      slider.removeEventListener("mouseup", mouseUp);
      slider.removeEventListener("mousemove", mouseMove);
      slider.removeEventListener("wheel", wheelScroll);
    };
  }, []);

  return (
    <section id="pricing" className="relative text-[#E6EDF3] py-20 px-4 sm:px-6 overflow-hidden">
      <img src={pricingBg} alt="Pricing Background" className="absolute inset-0 w-full h-full object-cover opacity-30 z-0" />
      <div className="absolute inset-0 bg-[#0D1117]/10 backdrop-blur-sm z-0" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-[#58A6FF] via-[#9B5DE5] to-[#FF6EC4] bg-clip-text">
          Smart Plans. Real Results. Zero Guesswork.
        </h2>
        <p className="text-white mb-10 max-w-2xl mx-auto text-sm sm:text-base">
          Select the perfect <span className="text-transparent bg-gradient-to-r from-[#58A6FF] to-[#9B5DE5] bg-clip-text font-semibold">website plan</span> to boost your business, convert leads, and go digital.
        </p>

        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory scrollbar-hide cursor-grab select-none"
        >
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`min-w-[90%] sm:min-w-[350px] flex flex-col justify-between h-[580px] sm:h-[600px] snap-center relative border rounded-2xl p-6 transition duration-1500 shadow-xl hover:shadow-blue-500/30 bg-[#808b9c00] backdrop-blur-md overflow-hidden ${
                plan.badge === "elite" ? "border-[#FF6EC4] ring-2 ring-[#FF6EC4]" : "border-[#21262D]"
              }`}
            >
              <div>
                <div className={`absolute top-0 left-0 text-white text-xs font-semibold px-3 py-1 rounded-br-xl flex items-center gap-1 ${getBadgeStyle(plan.badge)}`}>
                  {plan.badge === "elite" && <FaCrown className="text-yellow-300" />}
                  {plan.badge.charAt(0).toUpperCase() + plan.badge.slice(1)}
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-1 text-white">{plan.title}</h3>
                <p className="text-[#8B949E] mb-2 text-sm">{plan.tagline}</p>

                <div className="flex flex-wrap items-center justify-center gap-2 mb-1">
                  <span className="text-2xl font-bold text-white">₹{plan.price}</span>
                  <span className="line-through text-[#8B949E] text-sm">₹{plan.original}</span>
                  <span className="text-green-400 text-xs">{plan.billing}</span>
                </div>

                <span className="text-xs text-pink-400 font-semibold block mb-3">{plan.discountTag}</span>

                <ul className="text-left space-y-2 text-sm mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FaCheckCircle className="text-[#58A6FF]" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(plan.wpMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block w-full bg-gradient-to-r from-[#58A6FF] to-[#9B5DE5] text-white text-sm font-semibold py-2 rounded-xl transition hover:scale-105"
              >
                Get This Plan
              </a>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-[#161B22]/10 backdrop-md border border-[#30363D] rounded-2xl shadow-xl p-8 text-left">
            <h3 className="text-3xl font-extrabold text-center mb-4 text-transparent bg-gradient-to-r from-[#58A6FF] via-[#9B5DE5] to-[#FF6EC4] bg-clip-text">
              🧩 Universal Add-ons
            </h3>
            <p className="text-white text-center text-base mb-8">
              Add any of these <span className="text-transparent bg-gradient-to-r from-[#58A6FF] to-[#9B5DE5] bg-clip-text font-semibold">extras</span> to customize your website even further.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {addons.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-[#0D1117]/50 border border-[#21262D] rounded-xl shadow-inner hover:shadow-pink-500/20 transition"
                >
                  <FaCheckCircle className="text-[#58A6FF] shrink-0" />
                  <span className="text-[#E6EDF3]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
