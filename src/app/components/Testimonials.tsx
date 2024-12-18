'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Pritam God",
            title: "CEO, Vandana Packers & Movers",
            image: "/images/port-3.png",
            feedback: "One of the best IT and Digital Marketing Companies in Gurgaon. Skilled personnel and always ready for our support. Manage my work less time and well."
        },
        {
            name: "Partam Ram",
            title: "Astrologer",
            image: "/images/port-2.png",
            feedback: "They also complete their work in time. This team provides the best support after."
        },
        {
            name: "Anil Goyel",
            title: "",
            image: "/images/port-1.jpg",
            feedback: "I needed a better and efficient team to take my business further in Gurgaon, and Imagine Digi is the best for that."
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        let intervalId :NodeJS.Timeout | undefined ;
        setIsAutoPlaying(true);
        if (isAutoPlaying) {
            intervalId = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
            }, 5000); // Change testimonial every 5 seconds
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isAutoPlaying, testimonials.length]);


    return (
        <section id="TasBG" className="relative pt-12 pb-12 testimonial-section" style={{ height: '400px' }}>
            <style>
                {`
                    @keyframes hrTestimonial {
                        0% {
                            transform: translateX(-450%);
                        }
                        50% {
                            transform: translateX(calc(-340%));
                        }
                        100% {
                            transform: translateX(-450%);
                        }
                    }
                    .animate-hrTestimonial {
                        width: 10%;
                        animation: hrTestimonial 6s ease-in-out infinite;
                        margin: 0 auto;
                    }
                    .testimonial-container {
                        width: 100%;
                        height: 270px;
                        overflow: hidden;
                        border-radius: 8px;
                        background-color: rgba(255, 255, 255, 0.1);
                    }
                    .testimonial-slide {
                        opacity: 0;
                        transition: opacity 0.5s ease-in-out;
                    }
                    .testimonial-slide.active {
                        opacity: 1;
                    }
                `}
            </style>

            <Image
                src="/images/testimonial-bg.png"
                alt="Testimonial Background"
                layout="fill"
                objectFit="cover"
                className="z-0"
            />
            <div className="container mx-auto relative z-10 flex items-center h-full px-4 md:px-16">
                <div className="flex flex-wrap items-center justify-center w-full">
                    <div className="w-full md:w-1/2 mb-6 md:mb-0">
                        <div className="text-white testimonial-heading">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-2 md:text-white text-black">
                                What Our Clients Say <br />
                                About Us
                            </h2>
                            <hr className="border-b-2 border-[#e80566] mb-4 animate-hrTestimonial" />
                            <span className="animate-border mb-4 block"></span>
                            <p className="mb-4 text-base">
                                Imagine Digi also provides the best service to its clients and we are <br /> 
                                deliver projects to our clients within the committed time with <br />
                                100% accuracy.
                            </p>
                            <h3>
                                <Link href="#" className="text-black font-semibold hover:underline">
                                    Give Your Review
                                </Link>
                            </h3>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="relative testimonial-container mb-6 md:mb-8 md:pb-8">
                            <div className={`bg-transparent p-6 rounded-lg shadow-lg h-full md:mt-4 flex flex-col justify-between testimonial-slide ${isAutoPlaying ? 'active' : ''}`}>
                                <div className="flex mb-3 author-info">
                                    <div className="mr-3">
                                        <Image 
                                            src={testimonials[currentIndex].image} 
                                            alt="client" 
                                            height={75} 
                                            width={75} 
                                            className="img-fluid rounded-full" 
                                        />
                                    </div>
                                    <div className="media-body text-white">
                                        <h5 className="mb-0 text-white">{testimonials[currentIndex].name}</h5>
                                        {testimonials[currentIndex].title && <span>{testimonials[currentIndex].title}</span>}
                                    </div>
                                    <span className="fas fa-quote-right icon-md text-white"></span>
                                </div>
                                <div className="client-say text-white mb-16">
                                    <p>{testimonials[currentIndex].feedback}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;