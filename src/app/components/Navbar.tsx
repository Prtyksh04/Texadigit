'use client'
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isWebDevOpen, setIsWebDevOpen] = useState(false);
    const [isAppDevOpen, setIsAppDevOpen] = useState(false);
    const [isDigitalMarketingOpen, setIsDigitalMarketingOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsAboutOpen(false);
                setIsServicesOpen(false);
                setIsWebDevOpen(false);
                setIsAppDevOpen(false);
                setIsDigitalMarketingOpen(false);
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

    const toggleDropdown = (dropdown: 'about' | 'services' | 'webdev' | 'appdev' | 'digital', event?: React.MouseEvent) => {
        if (event) {
            event.stopPropagation();
        }

        if (dropdown === 'about') {
            setIsAboutOpen(!isAboutOpen);
            setIsServicesOpen(false);
            setIsWebDevOpen(false);
        } else if (dropdown === 'services') {
            setIsServicesOpen(!isServicesOpen);
            setIsAboutOpen(false);
            if (!isServicesOpen) {
                setIsWebDevOpen(false);
            }
        } else if (dropdown === 'webdev') {
            if (isAppDevOpen) {
                setIsAppDevOpen(!isAppDevOpen);
            }
            if (isDigitalMarketingOpen) {
                setIsDigitalMarketingOpen(!isDigitalMarketingOpen);
            }
            setIsWebDevOpen(!isWebDevOpen);
        } else if (dropdown === 'appdev') {
            setIsAppDevOpen(!isAppDevOpen);
            if (isWebDevOpen) {
                setIsWebDevOpen(!isWebDevOpen);
            }
            if (isDigitalMarketingOpen) {
                setIsDigitalMarketingOpen(!isDigitalMarketingOpen);
            }
        } else if (dropdown === 'digital') {
            setIsDigitalMarketingOpen(!isDigitalMarketingOpen);
            if (isWebDevOpen) {
                setIsWebDevOpen(false);
            }
            if (isAppDevOpen) {
                setIsAppDevOpen(false);
            }
        }
    };

    return (
        <header className="header">
            <nav className="navbar fixed top-0 w-full bg-gradient-to-r from-[#005eff] to-[#608BC1] text-white shadow-lg z-50 backdrop-blur-lg">
                <div className="container mx-auto flex items-center justify-between px-4 py-2">
                    <Link href="/" className="text-lg font-bold text-white">
                        <Image src="/images/png/Colorlogo-nobackground.png"
                            alt='logo'
                            className='cursor-pointer'
                            width={80}
                            height={16}
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
                                    onClick={(e) => toggleDropdown('about', e)}
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

                                {/* About Dropdown Menu */}
                                <div
                                    className={`lg:absolute left-0 mt-0 w-full lg:w-48 bg-white shadow-md rounded-md overflow-hidden z-20 transition-all duration-300 ease-in-out ${isAboutOpen ? 'block' : 'hidden'
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
                                    onClick={(e) => toggleDropdown('services', e)}
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
                                    className={`lg:absolute left-0 mt-0 w-full lg:w-48 bg-white shadow-md rounded-md overflow-visible z-20 transition-all duration-300 ease-in-out ${isServicesOpen ? 'block' : 'hidden'
                                        }`}
                                >
                                    <ul>
                                        <li>
                                            <div
                                                className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-[#65258a] hover:text-white cursor-pointer group"
                                                onClick={(e) => toggleDropdown('digital', e)}
                                            >
                                                Digital Marketing
                                                <svg
                                                    className={`ml-2 h-4 w-4 transition-transform duration-500 ${isDigitalMarketingOpen ? '-rotate-90' : ''}`}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            <div
                                                className={`lg:absolute left-0 top-0 w-full lg:w-48 lg:ml-52 bg-white shadow-md rounded-md z-30 ${isDigitalMarketingOpen ? 'block' : 'hidden'
                                                    } ${isMenuOpen ? 'relative lg:left-full ml-4' : ''}`}
                                            >
                                                <ul>
                                                    <li>
                                                        <Link href="/digital-marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#65258a] hover:text-white">
                                                            SEO (Search Engine Optimization)
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/digital-marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#65258a] hover:text-white">
                                                            SEM (Search Engine Marketing)
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/digital-marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#65258a] hover:text-white">
                                                            SMM (Social Media Marketing)
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/digital-marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#65258a] hover:text-white">
                                                            SMO (Social Media Optimization)
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/digital-marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#65258a] hover:text-white">
                                                            Email Marketing
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        {/* Website Development with nested dropdown */}
                                        <li className="relative">
                                            <div
                                                className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-[#65258a] hover:text-white cursor-pointer group"
                                                onClick={(e) => toggleDropdown('webdev', e)}
                                            >
                                                Web Development
                                                <svg
                                                    className={`ml-2 h-4 w-4 transition-transform duration-500 ${isWebDevOpen ? '-rotate-90' : ''}`}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>

                                            {/* Nested Dropdown for Website Development */}
                                            <div
                                                className={`lg:absolute left-0 top-0 w-full lg:w-48 lg:ml-52 bg-white shadow-md rounded-md z-30 ${isWebDevOpen ? 'block' : 'hidden'
                                                    } ${isMenuOpen ? 'relative lg:left-full ml-4' : ''}`}
                                            >
                                                <ul>
                                                    <li>
                                                        <Link href="/website-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#65258a] hover:text-white">
                                                            .Net Development
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/website-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#65258a] hover:text-white">
                                                            PHP Development
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/website-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#65258a] hover:text-white">
                                                            WordPress Development
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/website-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#65258a] hover:text-white">
                                                            Cordinate Development
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div
                                                className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-[#65258a] hover:text-white cursor-pointer group"
                                                onClick={(e) => toggleDropdown('appdev', e)}
                                            >
                                                App Development
                                                <svg
                                                    className={`ml-2 h-4 w-4 transition-transform duration-500 ${isAppDevOpen ? '-rotate-90' : ''}`}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                            {/* Nested Dropdown for App Development */}
                                            <div
                                                className={`lg:absolute left-0 top-0 w-full lg:w-48 bg-white shadow-md lg:mt-8 lg:ml-52 rounded-md z-30 ${isAppDevOpen ? 'block' : 'hidden'
                                                    } ${isMenuOpen ? 'relative lg:left-full lg:mt-4' : ''}`}
                                            >
                                                <ul>
                                                    <li>
                                                        <Link href="/app-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#65258a] hover:text-white">
                                                            IOS Development
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/app-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#65258a] hover:text-white">
                                                            Android Development
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <Link
                                                href={"/data-entry"}
                                                className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-[#65258a] hover:text-white cursor-pointer group"
                                            >
                                                Data Entry
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            {/* Other Links */}
                            {/* <li className="relative group">
                                <Link href="/projects" className="block py-2 px-4 rounded transition-colors duration-300">Projects</Link>
                            </li> */}
                            <li className="relative group">
                                <Link href="/oursolution    " className="block py-2 px-4 rounded transition-colors duration-300">Our Solutions</Link>
                            </li>
                            <li className="relative group">
                                <Link href="/contactus" className="block py-2 px-4 rounded transition-colors duration-300">Contact Us</Link>
                            </li>
                        </ul>

                        {/* Enquiry Now Button for Mobile */}
                        <Link href="/contactus" className="lg:hidden block bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors duration-300 my-4 mx-4">
                            Enquiry Now
                        </Link>
                    </div>

                    {/* CTA Button for Large Screens */}
                    <Link href="/contactus" className="hidden lg:inline-block bg-white text-[#65258a] px-4 py-2 rounded hover:bg-pink-200  transition-colors duration-300">
                        Enquiry Now
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;