import React from 'react';
import { FaFacebookF, FaInstagram, FaDribbble, FaLinkedinIn } from 'react-icons/fa';

const SocialIcons: React.FC = () => {
  return (
    <div className="flex space-x-4 mt-8">
      {/* Facebook Icon */}
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800">
        <FaFacebookF size={25} />
      </a>

      {/* Instagram Icon */}
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800">
        <FaInstagram size={25} />
      </a>

      {/* Dribbble Icon */}
      <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800">
        <FaDribbble size={25} />
      </a>

      {/* LinkedIn Icon */}
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800">
        <FaLinkedinIn size={25} />
      </a>
    </div>
  );
};

export default SocialIcons;
