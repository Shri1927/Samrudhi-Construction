import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center"><Phone className="h-5 w-5 mr-2" /> +91  8149977874</p>
              <p className="flex items-center"><Mail className="h-5 w-5 mr-2" /> thesamruddhi.construction@gmail.com</p>
              <p className="flex items-center"><MapPin className="h-5 w-5 mr-2" /> Khanapur, Taluka - Akkalkot, Dist-Solapur 413219</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="/services" className="hover:text-blue-400">Services</a></li>
              <li><a href="/projects" className="hover:text-blue-400">Projects</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-300">
              To lead in sustainable construction and water conservation, creating eco-friendly and water-efficient communities through innovative solutions.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Samruddhi Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;