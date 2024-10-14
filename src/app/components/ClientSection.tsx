'use client';
import React from 'react';
import Image from 'next/image';

const ClientSection: React.FC = () => {
    const logos = [
        "/images/clients-logo-01.png",
        "/images/clients-logo-02.png",
        "/images/clients-logo-03.png",
        "/images/clients-logo-04.png",
        "/images/clients-logo-05.png",
        "/images/clients-logo-06.png",
        "/images/clients-logo-07.png",
        "/images/clients-logo-08.png",
    ];

    // Determine animation duration based on screen size
    const isSmallScreen = window.innerWidth < 768; // Change to your breakpoint
    const animationDuration = isSmallScreen ? `${logos.length * 1.5}s` : `${logos.length * 1}s`; // Adjust durations as needed

    return (
        <section id="clientBG" className="client-section relative pt-16 pb-24 px-4 md:px-8">
            {/* Background Image */}
            <div className="absolute inset-0 z-[-1]">
                <Image
                    alt='client-bg'
                    src="/images/client-bg.jpg"
                    fill
                    priority
                    className='object-cover'
                />
            </div>
            <div className="container mx-auto relative z-10">
                {/* Content should be on top of the image */}
                <div className="flex flex-wrap mb-8">
                    {/* Heading Section */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end pr-4">
                        <div className="border-2 p-4 md:p-8 border-black rounded-md text-center md:text-left">
                            <h3 className="text-2xl md:text-4xl font-medium">
                                Who are Happy With Services and Work
                            </h3>
                        </div>
                    </div>
                    {/* Paragraph Section */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                        <div className="client-para">
                            <p className="text-justify text-base md:text-lg">
                                We have many happy clients who are really satisfied with our services and they are our best and regular customers, such as DHL Home Packers & Movers, Turning Point Astrology, Vandana Packers & Movers, etc.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Clients logo start */}
                <div className="flex justify-center overflow-hidden rounded-lg item-center z-10">
                    <div className={`flex animate-slide`} style={{ animationDuration: animationDuration }}>
                        {logos.map((logo, index) => (
                            <div key={index} className="flex-shrink-0 w-32 md:w-40 mx-2 md:mx-4">
                                <Image src={logo} alt="client logo" width={150} height={50} className="client-img grayscale" />
                            </div>
                        ))}
                    </div>
                </div>
                {/* Clients logo end */}
            </div>
            <style jsx>{`
                .client-img.grayscale {
                    filter: grayscale(100%);
                }
                @keyframes slide-lg {
                    0% {
                        transform: translateX(0);
                    }
                    50% {
                        transform: translateX(-15%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }
                @keyframes slide-sm {
                    0% {
                        transform: translateX(0);
                    }
                    50% {
                        transform: translateX(-35%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }
                .animate-slide {
                    display: flex;
                    animation: ${isSmallScreen ? 'slide-sm' : 'slide-lg'} linear infinite;
                }
                @media (min-width: 768px) {
                    .animate-slide {
                        animation: slide-lg linear infinite;
                    }
                }
                @media (max-width: 767px) {
                    .animate-slide {
                        animation: slide-sm linear infinite;
                    }
                }
            `}</style>
        </section>
    );
};

export default ClientSection;
