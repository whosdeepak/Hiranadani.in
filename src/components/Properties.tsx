import React, { useState } from 'react';
import { MapPin, Home, Building, Users, BarChart, ChevronRight } from 'lucide-react';

type Property = {
  id: number;
  name: string;
  location: string;
  price: string;
  type: 'Residential' | 'Commercial' | 'Mixed Use';
  size: string;
  features: string[];
  image: string;
};

export const Properties: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const properties: Property[] = [
    {
      id: 1,
      name: "Cone Residences",
      location: "Mumbai, India",
      price: "Starting at ₹2.5 Cr",
      type: "Residential",
      size: "1200-3000 sq.ft.",
      features: ["3-5 Bedrooms", "Panoramic Views", "Smart Home", "Pool Access"],
      image: "https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      name: "Hiranandani Business Tower",
      location: "Bangalore, India",
      price: "Starting at ₹1.2 Cr",
      type: "Commercial",
      size: "1000-10000 sq.ft.",
      features: ["24/7 Security", "Dedicated Parking", "Conference Facilities", "High-speed Internet"],
      image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      name: "The Cone Meadows",
      location: "Chennai, India",
      price: "Starting at ₹1.8 Cr",
      type: "Residential",
      size: "1100-2800 sq.ft.",
      features: ["2-4 Bedrooms", "Garden Access", "Fitness Center", "Children's Play Area"],
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      name: "Hiranandani Business Park",
      location: "Hyderabad, India",
      price: "Starting at ₹95 Lakhs",
      type: "Commercial",
      size: "800-5000 sq.ft.",
      features: ["Modern Office Spaces", "Meeting Rooms", "Cafeteria", "Ample Parking"],
      image: "https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 5,
      name: "The Cone Plaza",
      location: "Pune, India",
      price: "Starting at ₹3.5 Cr",
      type: "Mixed Use",
      size: "1500-8000 sq.ft.",
      features: ["Retail Spaces", "Residential Apartments", "Entertainment Zone", "Food Court"],
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 6,
      name: "Hiranandani Gardens",
      location: "Thane, India",
      price: "Starting at ₹1.4 Cr",
      type: "Residential",
      size: "950-2200 sq.ft.",
      features: ["1-3 Bedrooms", "Landscaped Gardens", "Swimming Pool", "Clubhouse"],
      image: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
  ];

  const filters = ['All', 'Residential', 'Commercial', 'Mixed Use'];

  const filteredProperties = activeFilter === 'All'
    ? properties
    : properties.filter(property => property.type === activeFilter);

  const TypeIcon = ({ type }: { type: string }) => {
    switch (type) {
      case 'Residential':
        return <Home className="h-5 w-5" />;
      case 'Commercial':
        return <Building className="h-5 w-5" />;
      case 'Mixed Use':
        return <Users className="h-5 w-5" />;
      default:
        return <Building className="h-5 w-5" />;
    }
  };

  return (
    <section id="properties" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Cone Properties
          </h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of innovative cone-inspired properties that are redefining
            the standards of modern living and working spaces.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1 bg-gray-200 rounded-lg">
            {filters.map(filter => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                  activeFilter === filter
                    ? 'bg-blue-800 text-white'
                    : 'text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="relative h-60">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow-md">
                  <div className="flex items-center space-x-1">
                    <TypeIcon type={property.type} />
                    <span className="text-sm font-medium text-gray-800">{property.type}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{property.name}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-blue-800 font-bold">{property.price}</span>
                  <span className="text-gray-600 text-sm">{property.size}</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="flex items-center justify-center w-full bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Enquire Now
                    <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors"
          >
            Explore All Properties
            <ChevronRight size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};