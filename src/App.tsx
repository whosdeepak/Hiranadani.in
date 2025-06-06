import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Properties } from './components/Properties';
import { Testimonials } from './components/Testimonials';
import { NewsUpdates } from './components/NewsUpdates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Properties />
      <Testimonials />
      <NewsUpdates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;