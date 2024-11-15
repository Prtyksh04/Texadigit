import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  title: string;
  breadcrumbText: string;
}

const AboutUsHeader = ({ title, breadcrumbText }: HeaderProps) => {
  return (
    <div className="relative h-48 md:h-64 bg-gradient-to-r from-[#133E87] to-[#608BC1] mt-12">
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
        {/* Responsive title font size */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {title}
        </h1>
        <nav className="flex items-center gap-2 text-sm sm:text-lg">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="text-white/80">›</span>
          <span className="text-white/80">{breadcrumbText}</span>
        </nav>
      </div>
    </div>
  );
};

export default AboutUsHeader;
