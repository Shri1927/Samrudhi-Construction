import { Link } from 'react-router-dom';
import { Droplets } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Droplets className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">Samruddhi Construction</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
            <Link to="/projects" className="text-gray-600 hover:text-blue-600">Projects</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;