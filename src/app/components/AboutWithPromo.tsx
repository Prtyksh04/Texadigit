import React from 'react';

const AboutWithPromo: React.FC = () => {
    return (
        <section className="about-with-promo pt-24 pb-24 bg-gray-100">
            <style>
                {`
                    @keyframes hrAboutWithPromo {
                        0% {
                            transform: translateX(-150%); /* Start slightly to the left */
                        }
                        50% {
                            transform: translateX(-50%); /* Move slightly to the right */
                        }
                        100% {
                            transform: translateX(-150%); /* Return to the left */
                        }
                    }
                    .animate-hrAboutWithPromo {
                        width: 25%; /* Set to desired width */
                        animation: hrAboutWithPromo 4s ease-in-out infinite; 
                        margin: 0 auto; /* Center the hr */
                    }
                `}
            </style>
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="flex flex-wrap items-center">
                    {/* About Content */}
                    <div className="w-full lg:w-1/2 p-4">
                        <div className="about-content-wrap">
                            <h2 className="text-[#e80566] font-medium">Complete IT Solution</h2>
                            <h2 className="text-2xl font-bold mb-4">Why Choose Texadigit?</h2>
                            <hr className="border-b-2 border-[#e80566] mb-4 animate-hrAboutWithPromo" />
                            <span className="animate-border mb-4 block w-16 h-1 bg-secondary mx-auto"></span>
                            <p className="mb-4 text-justify text-[#707070]">
                                Start working with a team that provides everything you need to generate awareness, drive traffic, connect with customers.
                            </p>

                            <ul className="check-list-info list-disc pl-5 text-justify text-[#707070]">
                                <li className="mb-2">Choosing the best IT service provider is one of the most important decisions you can make for the success of your business. If you are a business that is seeking expansion, then updating your IT strategies is of utmost importance.</li>
                                <li className="mb-2"><strong className='text-gray-500'>Professional Consulting Services</strong> - Texadigit provides professional & best services to our clients with 100% satisfaction.</li>
                                <li className="mb-2"><strong className='text-gray-500'>24/7 Support Help Center</strong> – Texadigit provides a 24*7 support center to help our customers.</li>
                                <li>Providing professional quality services to all our clients is of utmost importance to us. To achieve this, we have successfully put all the necessary resources in place, from skills and technology to the ability of our team.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Promo Section */}
                    <div className="w-full lg:w-1/2 p-4">
                        <div className="about-promo-wrap">
                            <div className="flex flex-wrap">
                                {/* Promo Item 1 */}
                                <div className="w-1/2 p-2">
                                    <div className="promo-item bg-white rounded-lg shadow-lg text-center">
                                        <div className="promo-img mb-2 p-3">
                                            <img src="/images/increase.svg" alt="Increased Traffic" width="50" />
                                        </div>
                                        <h5 className="font-semibold text-base">Increased Traffic</h5>
                                        <p className="text-sm">Now increase your website traffic with our best SEO service.</p>
                                        <div className="promo-bottom-shape">
                                            <img src="/images/promo-box-shape-bottom.png" alt="shape" />
                                        </div>
                                    </div>
                                </div>

                                {/* Promo Item 2 */}
                                <div className="w-1/2 p-2 mt-4">
                                    <div className="promo-item bg-white rounded-lg shadow-lg text-center">
                                        <div className="promo-img mb-2 p-3">
                                            <img src="/images/search-engine.svg" alt="Site Optimisation" width="50" />
                                        </div>
                                        <h5 className="font-semibold text-base">Site Optimisation</h5>
                                        <p className="text-sm">Now optimize your business with our best services.</p>
                                        <div className="promo-bottom-shape">
                                            <img src="/images/promo-box-shape-bottom.png" alt="shape" />
                                        </div>
                                    </div>
                                </div>

                                {/* Promo Item 3 */}
                                <div className="w-1/2 p-2">
                                    <div className="promo-item bg-white rounded-lg shadow-lg text-center">
                                        <div className="promo-img mb-2 p-3">
                                            <img src="/images/credit-card.svg" alt="Cost-effectiveness" width="50" />
                                        </div>
                                        <h5 className="font-semibold text-base">Cost-effectiveness</h5>
                                        <p className="text-sm">We can increase your business at the lowest cost.</p>
                                        <div className="promo-bottom-shape">
                                            <img src="/images/promo-box-shape-bottom.png" alt="shape" />
                                        </div>
                                    </div>
                                </div>

                                {/* Promo Item 4 */}
                                <div className="w-1/2 p-2 mt-4">
                                    <div className="promo-item bg-white rounded-lg shadow-lg text-center">
                                        <div className="promo-img mb-2 p-3">
                                            <img src="/images/interface.svg" alt="Page Rankings" width="50" />
                                        </div>
                                        <h5 className="font-semibold text-base">Page Rankings</h5>
                                        <p className="text-sm">We can increase your business ranking on Google and put you on top.</p>
                                        <div className="promo-bottom-shape">
                                            <img src="/images/promo-box-shape-bottom.png" alt="shape" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutWithPromo;
