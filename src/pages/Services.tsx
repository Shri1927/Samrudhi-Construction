import { services } from '../data/services';
import * as LucideIcons from 'lucide-react';

const Services = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            return (
              <div key={service.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <h2 className="text-xl font-bold">{service.title}</h2>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="font-bold mb-2">Initial Consultation</h3>
              <p className="text-gray-600">Understanding your needs and site requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="font-bold mb-2">Design Phase</h3>
              <p className="text-gray-600">Creating custom solutions for your project</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="font-bold mb-2">Implementation</h3>
              <p className="text-gray-600">Expert installation and project management</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">4</div>
              <h3 className="font-bold mb-2">Maintenance</h3>
              <p className="text-gray-600">Ongoing support and system optimization</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;