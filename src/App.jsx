import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css'; // or './globals.css'


const App = () => {
  return (
    <div className="font-body bg-background text-fontMain min-h-screen scroll-smooth transition-all duration-300 ease-in-out overflow-x-hidden">
      {/* 🔝 Navbar */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-md">
        <Navbar />
      </header>

      {/* ⚡ Sections */}
      <main className="flex flex-col">
        <section id="home" className="scroll-mt-16">
          <Home />
        </section>

        <section id="about" className="scroll-mt-16">
          <About />
        </section>

        <section id="services" className="scroll-mt-16">
          <Services />
        </section>

        <section id="pricing" className="scroll-mt-16">
          <Pricing />
        </section>

        <section id="contact" className="scroll-mt-16">
          <Contact />
        </section>
      </main>

      {/* 🔚 Footer */}
      <footer className="border-t border-border pt-0">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
