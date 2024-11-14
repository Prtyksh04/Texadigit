import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const SocialIcons: React.FC = () => {
  return (
    <div className="flex space-x-4 mt-8">
      {/* Facebook Icon */}
      <a href="https://www.facebook.com/profile.php?id=61559233679037" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800">
        <FaFacebookF size={25} />
      </a>

      {/* LinkedIn Icon */}
      <a href="https://www.linkedin.com/company/imagine-digi/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800">
        <FaLinkedinIn size={25} />
      </a>
    </div>
  );
};

export default SocialIcons;
