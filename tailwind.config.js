/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  darkMode: 'class', // Enable dark mode via 'class'

  theme: {
    extend: {
      // 🎨 Custom Colors
      colors: {
        background: '#0D1117',
        primary: '#58A6FF',
        secondary: '#1F6FEB',
        gradientStart: '#58A6FF',
        gradientEnd: '#9B5DE5',
        fontMain: '#E6EDF3',
        fontMuted: '#8B949E',
        border: '#21262D',
      },

      // 🔤 Font Families
      fontFamily: {
        heading: ['Poppins', 'Space Grotesk', 'sans-serif'],
        body: ['Inter', 'DM Sans', 'sans-serif'],
        serif: ['Spectral', 'Times New Roman', 'serif'],
      },

      // 🌫️ Box Shadows
      boxShadow: {
        neumorphic: '8px 8px 16px #0a0d12, -8px -8px 16px #10151c',
        soft: '0 2px 8px rgba(0, 0, 0, 0.15)',
        glow: '0 0 10px #58A6FF',
        none: 'none',
      },

      // 🌀 Background Gradients
      backgroundImage: {
        'gradient-glow': 'linear-gradient(135deg, #58A6FF, #9B5DE5)',
        'radial-faint': 'radial-gradient(circle, rgba(88,166,255,0.15) 0%, transparent 80%)',
      },

      // ⬜ Border Radius
      borderRadius: {
        sharp: '0.5rem',
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },

      // 📦 Container Settings
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },

      // ⚙️ Transition Utilities
      transitionProperty: {
        spacing: 'margin, padding',
        height: 'height',
        transform: 'transform',
        shadow: 'box-shadow',
      },
      transitionDuration: {
        DEFAULT: '250ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animate'),
  ],
};
