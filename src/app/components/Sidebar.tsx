import React from 'react';
import Link from 'next/link';

const CategoriesSection = () => {
  const categories = [
    {
      name: "Website Development",
      href: "/services/website-development"
    },
    {
      name: "App Development",
      href: "/services/app-development"
    },
    {
      name: "Digital Marketing",
      href: "/services/digital-marketing"
    },
    {
      name: "CCTV Camera Installation",
      href: "/services/cctv-installation"
    },
    {
      name: "Computer Lab Installation",
      href: "/services/lab-installation"
    },
    {
      name: "Data Entry Work",
      href: "/services/data-entry"
    }
  ];

  return (
    <div className="w-full max-w-3xl p-6 mr-8">
      <h2 className="text-2xl font-medium text-gray-600 mb-6">
        CATEGORIES
      </h2>
      
      <div className="space-y-4">
        {categories.map((category, index) => (
          <React.Fragment key={category.name}>
            <Link 
              href={category.href}
              className="block text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              {category.name}
            </Link>
            
            {index < categories.length - 1 && (
              <div className="border-b border-gray-200" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;