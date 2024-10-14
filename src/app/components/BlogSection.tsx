import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const BlogSection: React.FC = () => {
    return (
        <section className="our-blog-section pt-24 pb-24 relative overflow-hidden px-4 flex items-center justify-center">
            {/* Background effect */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

            <style>
                {`
          @keyframes blogMove {
            0% {
              transform: translateX(-75%);
            }
            50% {
              transform: translateX(calc(100% - 25%));
            }
            100% {
              transform: translateX(-75%);
            }
          }
          .animate-blogMove {
            width: 10%; /* Adjusted width to 10% */
            animation: blogMove 6s ease-in-out infinite; 
            margin: 0 auto; /* Centering the hr */
          }
        `}
            </style>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-5">
                    <strong className="text-[#e80566] font-normal mb-2">Our Services</strong>
                    <h1 className='text-3xl font-semibold mb-4'>What Can We Do For You</h1>
                    <p className="lead mb-4">
                        Get your attractive website at the lowest cost and show your website on the first page of <br />
                        Google to attract thousands of customers.
                    </p>
                    <hr className="border-b-2 border-[#e80566] mb-4 animate-blogMove" />
                    <span className="animate-border mx-auto mb-4"></span>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {/* Blog Card 1 */}
                    <div className="w-full sm:w-1/2 md:w-1/4 h-full mb-6 shadow-lg bg-white rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
                        <div className="relative">
                            <Image src="/images/WebsiteMain.jpg" className="card-img-top h-48 w-full object-cover" alt="Website Development" width={200} height={200}/>
                            <div className="meta-date text-yellow-500 text-3xl absolute top-2 left-2">
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                        </div>
                        <hr className='border-2 border-[#e80566]' />
                        <div className="card-body p-4 h-full flex flex-col">
                            <h3 className="h5 mb-2 card-title flex-grow">
                                <Link href="/best-website-development-company-in-jaipur" className="text-black text-lg font-semibold hover:text-[#e80566]">Website Development</Link>
                            </h3>
                            <p className="text-[#707070] mb-4 flex-grow">We provide the best Website Development Service in Asp.Net, PHP, WordPress &amp; Cordinator technology.</p>
                            <Link href="#" className="text-xs mt-2 flex items-center hover:text-[#e80566] text-black duration-300">
                                Read More
                                <FaArrowRight className="ml-1 text-xs" />
                            </Link>
                        </div>
                    </div>

                    {/* Blog Card 2 */}
                    <div className="w-full sm:w-1/2 md:w-1/4 h-full mb-6 shadow-lg bg-white rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
                        <div className="relative">
                            <Image src="/images/AppMain.png" className="card-img-top h-48 w-full object-cover" alt="Mobile App Development"  width={200} height={200}/>
                            <div className="meta-date text-yellow-500 text-3xl absolute top-2 left-2">
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                        </div>
                        <hr className='border-2 border-[#e80566]' />
                        <div className="card-body p-4 h-full flex flex-col">
                            <h3 className="h5 mb-2 card-title flex-grow">
                                <Link href="/mobile-app-development" className="text-black text-lg font-semibold hover:text-[#e80566]">Mobile App Development</Link>
                            </h3>
                            <p className="text-[#707070] mb-4 flex-grow">We provide the best Mobile App Development Services in iOS &amp; Android for all versions.</p>
                            <Link href="/mobile-app-development" className="text-xs mt-2 flex items-center hover:text-[#e80566] text-black duration-300">
                                Read More
                                <FaArrowRight className="ml-1 text-xs" />
                            </Link>
                        </div>
                    </div>

                    {/* Blog Card 3 */}
                    <div className="w-full sm:w-1/2 md:w-1/4 h-full mb-6 shadow-lg bg-white rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
                        <div className="relative">
                            <Image src="/images/cctvComputerMainindex.png" className="card-img-top h-48 w-full object-cover" alt="CCTV Camera Installation" width={200} height={200}/>
                            <div className="meta-date text-yellow-500 text-3xl absolute top-2 left-2">
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                        </div>
                        <hr className='border-2 border-[#e80566]' />
                        <div className="card-body p-4 h-full flex flex-col">
                            <h3 className="h5 mb-2 card-title flex-grow">
                                <Link href="/cctv-camera-installation-service" className="text-black text-lg font-semibold hover:text-[#e80566]">Computer Lab &amp; CCTV Camera Installation</Link>
                            </h3>
                            <p className="text-[#707070] mb-4 flex-grow">We provide the best Computer &amp; CCTV Camera Installation Services.</p>
                            <Link href="/computer-networking-lab-installation-service" className="text-black text-xs mt-2 flex items-center hover:text-[#e80566] duration-300">
                                Read More
                                <FaArrowRight className="ml-1 text-xs" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
