import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">Dachshund Info</Link>
        </div>
        <div className="space-x-4">
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/gallery"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Gallery
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/care"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Care
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
