import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';

type NewsItem = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
};

export const NewsUpdates: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Hiranandani Launches New Cone Tower in Mumbai",
      date: "May 15, 2025",
      excerpt: "The latest addition to Mumbai's skyline, our new cone-shaped residential tower offers unparalleled views and innovative living spaces.",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Launch"
    },
    {
      id: 2,
      title: "Hiranandani Group Wins Architectural Excellence Award",
      date: "April 28, 2025",
      excerpt: "Our innovative cone design has been recognized with the prestigious International Architectural Excellence Award for sustainable urban development.",
      image: "https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Award"
    },
    {
      id: 3,
      title: "New Commercial Cone Complex Breaking Ground in Bangalore",
      date: "April 10, 2025",
      excerpt: "Construction begins on our newest commercial project featuring three interconnected cone structures designed for modern business needs.",
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Development"
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest News & Updates
            </h2>
            <div className="w-20 h-1 bg-blue-800 mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl">
              Stay informed about our newest developments, awards, and company news.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center bg-white hover:bg-gray-100 text-blue-900 border border-blue-800 px-6 py-3 rounded-md text-base font-medium transition-colors mt-6 md:mt-0"
          >
            View All News
            <ChevronRight size={20} className="ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-800 px-3 py-1 rounded-full text-white text-xs font-medium">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-800 font-medium hover:text-blue-900"
                >
                  Read More
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};