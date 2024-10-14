// components/Footer.tsx

import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      {/* Footer Top */}
      <div className="footer-top bg-gradient-to-r from-[#a855f7] to-[#ec489a] px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="w-full md:w-9/12">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 p-4">
                  <div className="footer-nav-wrap text-white">
                    <Image
                      src="/images/logo-color.jpg"
                      alt="logo"
                      className="mb-2"
                      width={150}
                      height={50}
                    />
                    <p>We are Providing the Best services in IT Sector.</p>
                    <div className="social-nav mt-4">
                      <ul className="list-unstyled flex space-x-4">
                        <li className="tooltip-hover">
                          <a href="#" className="rounded">
                            <span className="ti-linkedin"></span>
                          </a>
                          <div className="tooltip-item">Linkedin</div>
                        </li>
                        <li className="tooltip-hover">
                          <a href="#" className="rounded">
                            <span className="ti-dribbble"></span>
                          </a>
                          <div className="tooltip-item">Instagram</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Company Section */}
                <div className="w-full md:w-1/3 p-4">
                  <div className="footer-nav-wrap text-white">
                    <h4 className="text-white">COMPANY</h4>
                    <ul className="nav flex flex-col gap-y-2 py-4">
                      <li className="nav-item">
                        <a className="nav-link" href="about-us.php">About Texadigit</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="all-projects.php">Our Latest Projects</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="all-services.php">About Our Services</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="contact-us.php">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Legal Section */}
                <div className="w-full md:w-1/3 p-4">
                  <div className="footer-nav-wrap text-white">
                    <h4 className="text-white">LEGAL</h4>
                    <ul className="nav flex flex-col gap-y-2 py-4">
                      <li className="nav-item">
                        <a className="nav-link" href="about-us.php">Legal Information</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="about-us.php">Privacy Policy</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="contact-us.php">Report Abuse</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="about-us.php">Terms of Service</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-3/12 p-4">
              <div className="footer-nav-wrap text-white">
                <h4 className="text-white">GET IN TOUCH</h4>
                <ul className="flex flex-col gap-y-2 py-4">
                  <li className="flex items-center py-2">
                    <span className="fas fa-map-marker-alt mr-2"></span>
                    89, Shivram Colony, Mayapuri, Jagatpura, Jaipur, Rajasthan 302017
                  </li>
                  <li className="flex items-center py-2">
                    <span className="fas fa-phone mr-2"></span>
                    +91-98716 10154, <br />+91-7073050836, +91-8619986762
                  </li>
                  <li className="flex items-center py-2">
                    <span className="fas fa-envelope mr-2"></span>
                    texadigitinfo@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="footer-bottom gray-light-bg py-2">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-center md:text-left">
              <p className="copyright-text mb-0">
                Copyrights © 2020. All rights reserved by 
                <a href="http://www.texadigit.in/" target="_blank" rel="noopener noreferrer"> Texadigit</a>
              </p>
            </div>
            <div className="hidden md:flex">
              <ul className='flex gap-8'>
                <li>
                  <a href="about-us.php">Privacy Policy</a>
                </li>
                <li>
                  <a href="about-us.php">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
