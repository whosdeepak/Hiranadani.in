import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
};

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Homeowner, Cone Residences",
      comment: "The cone design of our apartment provides us with the most breathtaking views of the city. The innovative architecture maximizes natural light and gives us a sense of space that traditional buildings simply can't match.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      name: "Raj Malhotra",
      role: "Business Owner, Hiranandani Business Tower",
      comment: "Moving our company headquarters to the Hiranandani Business Tower was the best decision we've made. The cone structure not only impresses our clients but has also improved our team's productivity and well-being.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      name: "Anjali Patel",
      role: "Resident, The Cone Meadows",
      comment: "Living in The Cone Meadows has transformed our lifestyle. The community spaces are thoughtfully designed, and the unique architecture of our building makes it stand out in the neighborhood.",
      rating: 4,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-800"></div>
        <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-blue-600"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-blue-700"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Voices of Satisfaction
          </h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our residents and business owners about their experience
            with Hiranandani's innovative cone properties.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
            <button
              onClick={prevTestimonial}
              className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-blue-800" />
            </button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
            <button
              onClick={nextTestimonial}
              className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-blue-800" />
            </button>
          </div>

          <div className="overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out flex"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${testimonials.length * 100}%`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-50 rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3 flex flex-col items-center">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="mt-4 text-xl font-bold text-gray-900 text-center">{testimonial.name}</h3>
                      <p className="text-blue-800 text-sm mb-2 text-center">{testimonial.role}</p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <Quote className="w-12 h-12 text-blue-200 mb-4" />
                      <p className="text-gray-700 text-lg leading-relaxed italic">
                        "{testimonial.comment}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === currentIndex ? 'bg-blue-800' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};