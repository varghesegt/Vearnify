/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html'
  ],

  darkMode: 'class', // Enables dark mode using a class toggle

  theme: {
    extend: {
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

      fontFamily: {
        heading: ['"Space Grotesk"', 'Poppins', 'sans-serif'],
        body: ['Inter', '"DM Sans"', 'sans-serif'],
        serif: ['Spectral', '"Times New Roman"', 'serif'],
      },

      boxShadow: {
        neumorphic: '8px 8px 16px #0a0d12, -8px -8px 16px #10151c',
        soft: '0 2px 8px rgba(0, 0, 0, 0.15)',
        glow: '0 0 10px #58A6FF',
        none: 'none',
      },

      backgroundImage: {
        'gradient-glow': 'linear-gradient(135deg, #58A6FF, #9B5DE5)',
        'radial-faint': 'radial-gradient(circle, rgba(88,166,255,0.15) 0%, transparent 80%)',
      },

      borderRadius: {
        sharp: '0.5rem',
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },

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

    // ✅ Custom plugin to hide scrollbars
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',     // IE and Edge
          'scrollbar-width': 'none',        // Firefox
          '&::-webkit-scrollbar': {
            display: 'none',                // Chrome, Safari, Opera
          },
        },
      })
    },
  ],
}
