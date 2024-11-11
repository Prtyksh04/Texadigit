import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RippleDemo } from '../magicui/Ripple';

const CallToActionVideo: React.FC = () => {
    return (
        <section className="relative z-5 call-to-action-video h-64 lg:h-80" style={{
            background: 'rgba(122, 14, 185, 0.86)',
        }}>
            <div className="flex flex-col lg:flex-row h-full">

                {/* Left Side (Image and Play Button) */}
                <div className="relative w-full lg:w-1/2 h-full flex justify-center items-center">
                    <div className="absolute inset-0">
                        <Image 
                            alt='Cta-image' 
                            src='/images/cta-2-girl-img.jpg' 
                            layout="fill" 
                            objectFit="cover" 
                            priority
                        />
                    </div>

                    {/* Gradient Overlay */}
                    <div 
                        className="absolute inset-0 bg-gradient-to-t from-black to-transparent"
                    ></div>

                    {/* Play Button with Ripple Effect */}
                    <Link href="https://www.youtube.com/watch?v=9No-FiEInLA" legacyBehavior>
                        <a className="absolute z-20 flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110">
                            <RippleDemo />
                        </a>
                    </Link>
                </div>

                {/* Right Side (Content with Overlapping Image) */}
                <div className="relative w-full lg:w-1/2 p-4 lg:p-12 text-white">
                    {/* Overlapping Image */}
                    <div className="absolute inset-0 z-0">
                        <Image 
                            alt="Cta Shape" 
                            src="/images/cta-2-shape.png" 
                            objectFit='cover'
                            layout='fill'
                            priority
                        />
                    </div>

                    {/* Text Content placed on top of the overlapping image */}
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Best IT Solution for you !!</h2>
                        <p className="text-base md:text-lg mb-6 text-justify">
                            Imagine Digi is the best IT Service Provider. Imagine Digi is offering the best Digital Marketing services, including SEO, Paid Search, Social Media, Consulting, Lead Generation, Brand Reputation Management, and Web Development Services.
                        </p>
                        <Link href="tel:7733844020" legacyBehavior>
                            <a className="bg-[#6a027c] hover:bg-[#e80566] hover:border-[#6a027c] border-2 border-[#6a027c] text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-md inline-block transition duration-300">
                                Call Now
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToActionVideo;
