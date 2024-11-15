// components/Footer.tsx

import React from 'react';
import Image from 'next/image';
import { Facebook, Linkedin} from 'lucide-react';


const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      {/* Footer Top */}
      <div className="footer-top bg-gradient-to-r from-[#65258a] to-[#e60667] px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="w-full md:w-9/12">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 p-4">
                  <div className="footer-nav-wrap text-white">
                    <Image
                      src="/images/png/Colorlogo-nobackground.png"
                      alt="logo"
                      className="mb-2"
                      width={80}
                      height={16}
                    />
                    <p>We are Providing the Best services in IT Sector.</p>
                    <div className="social-nav mt-4">
                      <ul className="list-unstyled flex space-x-4">
                        <li className="tooltip-hover">
                          <a href={"https://www.linkedin.com/company/imagine-digi/about/?viewAsMember=true"} className="text-gray-600 hover:text-blue-600">
                            <Linkedin size={20} fill='white' />
                          </a>
                        </li>
                        <li className="tooltip-hover">
                          <div className="tooltip-item">
                            <a href="https://www.facebook.com/profile.php?id=61559233679037" className="text-gray-600 hover:text-blue-600">
                              <Facebook size={20} fill='white' />
                            </a>
                          </div>
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
                        <a className="nav-link" href="/About-Us">About Imagine Digi</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href={"#"}>Our Latest Projects</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href={"#"}>About Our Services</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/contactus">Contact Us</a>
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
                        <a className="nav-link" href="/About-Us">Legal Information</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/About-Us">Privacy Policy</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/contactus">Report Abuse</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/About-Us">Terms of Service</a>
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
                    <span className="fas fa-phone mr-2"></span>
                    +91-9871610154, <br />+91-7988695795, +91-9711679777
                  </li>
                  <li className="flex items-center py-2">
                    <span className="fas fa-envelope mr-2"></span>
                    office@imaginedigi.com
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
                Copyrights © 2024. All rights reserved by
                <a href="/" target="_blank" rel="noopener noreferrer"> Imagine Digi</a>
              </p>
            </div>
            <div className="hidden md:flex">
              <ul className='flex gap-8'>
                <li>
                  <a href="/About-Us">Privacy Policy</a>
                </li>
                <li>
                  <a href="/About-Us">Terms &amp; Conditions</a>
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
