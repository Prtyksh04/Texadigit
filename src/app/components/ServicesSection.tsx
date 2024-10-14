import React from 'react';
import Link from 'next/link';
import { MagicCardDemo } from '../magicui/MagicCardDemo';
import { ShinyButtonDemo } from '../magicui/ShinyButtonDemo';

const ServicesSection: React.FC = () => {
    return (
        <section className="services-section relative pt-16 pb-16 px-4 md:px-8 lg:px-16">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

            <style>
                {`
                    @keyframes hrServiceSection {
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
                    .animate-hrServiceSection {
                        width: 10%; /* Adjusted width to 10% */
                        animation: hrServiceSection 6s ease-in-out infinite; 
                        margin: 0 auto; /* Centering the hr */
                    }
                `}
            </style>
            
            <div className="container mx-auto relative z-10">
                <div className="flex justify-center">
                    <div className="text-center max-w-lg md:max-w-xl">
                        <strong className="text-[#e80566] font-normal mb-2">Our Services</strong>
                        <h1 className='text-2xl md:text-3xl font-semibold mb-4'>What Can We Do For You</h1>
                        <hr className="border-b-2 border-[#e80566] mb-4 animate-hrServiceSection" />
                        <p className="lead mb-4 text-center text-sm md:text-base">
                            Get your attractive website at the lowest cost and show your website on the first page of <br /> Google to attract thousands of customers.
                        </p>
                        <span className="animate-border mx-auto mb-4"></span>
                    </div>
                </div>

                {/* MagicCardDemo Component */}
                <MagicCardDemo />
                
                {/* ShinyButtonDemo Button */}
                <div className="flex justify-center mt-4">
                    <ShinyButtonDemo />
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
