import React from 'react';
import { ArrowRight, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageSlideshow from '../components/ImageSlideshow';

const Home = () => {
  return (
    <div>
      {/* Hero Section with Slideshow */}
      <div className="relative">
        <ImageSlideshow />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-white z-10">
          <div className="text-center max-w-4xl px-4">
            <div className="flex items-center justify-center mb-4">
              <Droplets className="h-16 w-16 text-blue-400" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Every Drop Counts</h1>
            <p className="text-2xl mb-8">
              Together, let's build a sustainable future through water conservation
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Get Started <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Samruddhi Construction</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our team brings deep expertise in rainwater management and sustainable construction.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Customized Solutions</h3>
              <p className="text-gray-600">
                Tailor-made systems designed to meet specific project requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                We adhere to strict quality standards, ensuring durable and efficient solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-white mb-8">Contact us today for a consultation about your water harvesting needs.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100"
          >
            Contact Us <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;