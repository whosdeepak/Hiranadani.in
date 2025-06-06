import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      title: 'Cone Living',
      subtitle: 'Redefining Urban Living',
      description: 'Experience the future of real estate with our iconic cone structures',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      cta: 'Explore Properties',
    },
    {
      title: 'Premium Locations',
      subtitle: 'Strategic Placement',
      description: 'Prime real estate in the most sought-after metropolitan areas',
      image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      cta: 'View Locations',
    },
    {
      title: 'Luxury Amenities',
      subtitle: 'Unparalleled Comfort',
      description: 'State-of-the-art facilities designed for modern living',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      cta: 'Discover Amenities',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Slider Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/30 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col h-full justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mt-32">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 transform ${
                index === activeSlide
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ display: index === activeSlide ? 'block' : 'none' }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-4">
                {slide.subtitle}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mb-8">
                {slide.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#properties"
                  className="inline-flex items-center bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors"
                >
                  {slide.cta}
                  <ArrowRight size={20} className="ml-2" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center bg-white hover:bg-gray-100 text-blue-900 px-6 py-3 rounded-md text-lg font-medium transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Navigation */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === activeSlide ? 'bg-white' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white flex flex-col items-center opacity-70 hover:opacity-100">
            <span className="text-sm mb-1">Scroll Down</span>
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};