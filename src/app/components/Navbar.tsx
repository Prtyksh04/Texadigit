'use client'
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsAboutOpen(false);
                setIsServicesOpen(false);
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = (dropdown: 'about' | 'services') => {
        if (dropdown === 'about') {
            setIsAboutOpen(!isAboutOpen);
            setIsServicesOpen(false);
        } else {
            setIsServicesOpen(!isServicesOpen);
            setIsAboutOpen(false);
        }
    };

    return (
        <header className="header">
            <nav className="navbar fixed top-0 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg z-50 backdrop-blur-lg">
                <div className="container mx-auto flex items-center justify-between px-4 py-2">
                    <Link href="/" className="text-lg font-bold text-white">
                        <Image src="/images/logo-color.jpg"
                            alt='logo'
                            className='cursor-pointer'
                            width={125}
                            height={45}
                        />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="navbar-toggler block lg:hidden focus:outline-none text-white"
                        type="button"
                        onClick={toggleMenu}
                        aria-label="Toggle navigation"
                    >
                        <span className="text-xl">☰</span>
                    </button>

                    {/* Links */}
                    <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center absolute lg:relative top-full left-0 w-full lg:w-auto bg-gradient-to-r from-purple-500 to-pink-500 lg:bg-none`} ref={dropdownRef}>
                        <ul className="navbar-nav flex flex-col lg:flex-row lg:space-x-1 text-white font-medium">
                            {/* Home */}
                            <li className="relative group">
                                <Link href="/" className="block py-2 px-4 rounded transition-colors duration-300">Home</Link>
                            </li>

                            {/* About Dropdown */}
                            <li className="relative group">
                                <div
                                    className="flex items-center justify-between py-2 px-4 rounded cursor-pointer transition-colors duration-300"
                                    onClick={() => toggleDropdown('about')}
                                >
                                    About
                                    <svg
                                        className={`ml-2 h-4 w-4 transition-transform duration-500 ${isAboutOpen ? 'rotate-180' : ''}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>

                                {/* Dropdown Menu */}
                                <div
                                    className={`lg:absolute left-0 mt-0 w-full lg:w-48 bg-white shadow-md rounded-md overflow-hidden z-10 transition-all duration-300 ease-in-out ${
                                        isAboutOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <ul>
                                        <li>
                                            <Link href="/about-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#65258a] hover:text-white transition-colors">
                                                About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about-team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#65258a] hover:text-white transition-colors">
                                                About Team
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            {/* Services Dropdown */}
                            <li className="relative group">
                                <div 
                                    className="flex items-center justify-between py-2 px-4 rounded cursor-pointer transition-colors duration-300"
                                    onClick={() => toggleDropdown('services')}
                                >
                                    Services
                                    <svg
                                        className={`ml-2 h-4 w-4 transition-transform duration-500 ${isServicesOpen ? 'rotate-180' : ''}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                <div
                                    className={`lg:absolute left-0 mt-0 w-full lg:w-48 bg-white shadow-md rounded-md overflow-hidden z-10 transition-all duration-300 ease-in-out ${
                                        isServicesOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <ul>
                                        <li>
                                            <Link href="/services/web-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#65258a] hover:text-white">
                                                Website Development
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services/app-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#65258a] hover:text-white">
                                                App Development
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services/digital-marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#65258a] hover:text-white">
                                                Digital Marketing
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            {/* Other Links */}
                            <li className="relative group">
                                <Link href="/projects" className="block py-2 px-4 rounded transition-colors duration-300">Projects</Link>
                            </li>
                            <li className="relative group">
                                <Link href="/solutions" className="block py-2 px-4 rounded transition-colors duration-300">Our Solutions</Link>
                            </li>
                            <li className="relative group">
                                <Link href="/contact" className="block py-2 px-4 rounded transition-colors duration-300">Contact Us</Link>
                            </li>
                        </ul>
                        
                        {/* Enquiry Now Button for Mobile */}
                        <Link href="/contact" className="lg:hidden block bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors duration-300 my-4 mx-4">
                            Enquiry Now
                        </Link>
                    </div>

                    {/* CTA Button for Large Screens */}
                    <Link href="/contact" className="hidden lg:inline-block bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors duration-300">
                        Enquiry Now
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;