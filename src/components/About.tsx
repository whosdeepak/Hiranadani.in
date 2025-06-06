import React from 'react';
import { Building2, Users, Award, Clock } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Hiranandani
          </h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering the future of real estate with our innovative cone architecture, 
            setting new standards in urban living.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              The Cone Revolution in Real Estate
            </h3>
            <p className="text-gray-600">
              At Hiranandani, we've pioneered the revolutionary cone architecture that has 
              transformed the skylines of major cities. Our cone-shaped buildings aren't just 
              visually striking—they represent a fundamental rethinking of urban living spaces.
            </p>
            <p className="text-gray-600">
              The unique cone design maximizes natural light, optimizes space efficiency, and 
              creates a harmonious balance between privacy and community. This innovative approach 
              has established Hiranandani as the leader in next-generation real estate development.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
                  <Building2 className="h-6 w-6 text-blue-800" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">50+</h4>
                  <p className="text-gray-600">Cone Projects</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
                  <Users className="h-6 w-6 text-blue-800" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">10,000+</h4>
                  <p className="text-gray-600">Happy Residents</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
                  <Award className="h-6 w-6 text-blue-800" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">25+</h4>
                  <p className="text-gray-600">Design Awards</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
                  <Clock className="h-6 w-6 text-blue-800" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">40+ Years</h4>
                  <p className="text-gray-600">Of Excellence</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100 rounded-tr-3xl rounded-bl-3xl transform rotate-3 z-0"></div>
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Hiranandani Cone Building" 
              className="relative z-10 w-full h-[500px] object-cover rounded-tr-3xl rounded-bl-3xl shadow-xl"
            />
            <div className="absolute bottom-8 right-8 z-20 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-blue-900 font-bold">Hiranandani Cone Tower</p>
              <p className="text-gray-600 text-sm">Our signature development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};