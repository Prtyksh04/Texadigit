
import React from 'react';
import Image from 'next/image';
import { HyperTextDemo } from '../magicui/HyperText';
import { PulsatingButtonDemo } from '../magicui/PulsatingButton';

import { Merriweather } from '@next/font/google';

const lato = Merriweather({
    weight: '300',
    subsets: ['latin'],
})


const HeroSection: React.FC = () => {
    return (
        <div className={lato.className}>
            <section id="heroSectionBG" className=" relative">
                <Image
                    src="/images/t3-hero-shape.svg"
                    alt="hero-shape"
                    width={1300}
                    height={1300}
                    className="absolute inset-0 object-cover sw-screen h-screen lg:w-auto lg:h-auto"
                />
                <div className="container mx-auto z-10 relative">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-5/12 w-full mb-8 lg:mb-0">
                            <div className="text-white pt-4 lg:pl-32 flex flex-col items-center lg:block lg:text-white text-center lg:text-justify">
                                <span className="block md:text-lg mt-16 text-md">IT Services Provider</span>
                                <HyperTextDemo />
                                <p className="lead md:text-xl  font-normal mt-2 text-md">
                                    Get your attractive website at the lowest cost and show your website on the first page of Google, attracting thousands of your customers.
                                </p>
                                <div className="action-btns lg:mt-6 mr-2 mt-8">
                                    <PulsatingButtonDemo />
                                </div>
                            </div>
                        </div>
                        {/* <div className="lg:w-7/12 w-full flex justify-end mt-16 pr-16"> */}
                        <div className="lg:w-7/12 w-full flex justify-center lg:justify-end pr-0 lg:pr-16 lg:mt-16 -mt-20 z-[-1]">
                            <Image
                                src="/images/t3-hero-img.svg"
                                alt="hero"
                                className="img-fluid custom-width"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
