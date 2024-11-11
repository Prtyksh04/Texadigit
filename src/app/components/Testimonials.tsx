'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            name: "Pritam God",
            title: "CEO, Vandana Packers & Movers",
            image: "/images/port-3.png",
            feedback: "One of the best IT and Digital Marketing Companies in Jaipur. Skilled personnel and always ready for our support. Manage my work less time and well."
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
            feedback: "I needed a better and efficient team to take my business further in Jaipur, and Imagine Digi is the best for that."
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

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
            width: 10%; /* Adjusted width to 10% */
            animation: hrTestimonial 6s ease-in-out infinite; 
            margin: 0 auto; /* Centering the hr */
          }
          .testimonial-container {
            width: 100%; /* Set fixed width */
            height: 270px; /* Set fixed height to ensure consistent positioning */
            overflow: hidden; /* Prevent overflow */
            border-radius: 8px; /* Optional: add border-radius for aesthetics */
            background-color: rgba(255, 255, 255, 0.1); /* Optional: background color for contrast */
          }
        `}
            </style>

            {/* Background Image */}
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
                            <h2 className="text-2xl md:text-3xl font-semibold mb-2 md:text-white text-black"> {/* Set a text color */}
                                What Our Clients Say <br />
                                About Us
                            </h2>
                            <hr className="border-b-2 border-[#e80566] mb-4 animate-hrTestimonial" />
                            <span className="animate-border mb-4 block"></span>
                            <p className="mb-4 text-base">Imagine Digi also provides the best service to its clients and we are <br /> deliver projects to our clients within the committed time with <br />
                                100% accuracy.</p>
                            <h3>
                                <Link href="https://g.page/texadigit/review?mp" className="text-[#e80566] hover:underline">Give Your Review</Link>
                            </h3>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="relative testimonial-container mb-6 md:mb-8 md:pb-8"> 
                            <div className="bg-transparent p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
                                <div className="flex mb-3 author-info">
                                    <div className="mr-3">
                                        <Image src={testimonials[currentIndex].image} alt="client" height={75} width={75} className="img-fluid rounded-full" />
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
                            <div className="absolute bottom-0 left-0 right-0 flex justify-between p-4">
                                <button onClick={prevTestimonial} className="flex items-center bg-[#e80566] text-white pr-2 py-2 rounded hover:bg-[#c60052]">
                                    <span className="ml-2">Previous</span>
                                </button>
                                <button onClick={nextTestimonial} className="flex items-center bg-[#e80566] text-white pl-4 pr-2 py-2 rounded hover:bg-[#c60052]">
                                    <span className="mr-2">Next</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
