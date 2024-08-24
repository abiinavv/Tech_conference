import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">InnovateLeap 2024</div>
        <ul className="flex space-x-4 text-white">
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#speakersection" className="hover:text-gray-400">Speakers</a></li>
          <li><a href="#sponsors" className="hover:text-gray-400">Sponsors</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          <li><Link to="/timeline" className="hover:text-gray-400">Timeline</Link></li> {/* Add this line */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
