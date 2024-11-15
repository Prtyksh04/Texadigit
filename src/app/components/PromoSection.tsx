// components/PromoSection.tsx
import React from 'react';
import { FaGlobe, FaUser, FaBriefcase, FaAward } from 'react-icons/fa';

const PromoSection: React.FC = () => {
    return (
        <section className="pt-24 pb-24 px-4 md:px-8 lg:px-16">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    {/* First Promo Item */}
                    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                        <div className="bg-[#F3F3E0] p-5 text-center rounded-lg shadow-lg flex flex-col items-center justify-center h-48">
                            <FaGlobe className="text-4xl mb-4" style={{ color: '#005eff' }} />
                            <h5 className="mb-0 font-semibold text-lg">Best Website Development</h5>
                        </div>
                    </div>
                    {/* Second Promo Item */}
                    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                        <div className="bg-[#F4F6FF] p-5 text-center rounded-lg shadow-lg flex flex-col items-center justify-center h-48">
                            <FaUser className="text-4xl mb-4" style={{ color: '#005eff' }} />
                            <h5 className="mb-0 font-semibold text-lg">99.9% Client <br />Satisfaction</h5>
                        </div>
                    </div>
                    {/* Third Promo Item */}
                    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                        <div className="bg-[#B9E5E8] p-5 text-center rounded-lg shadow-lg flex flex-col items-center justify-center h-48">
                            <FaBriefcase className="text-4xl mb-4" style={{ color: '#005eff' }} />
                            <h5 className="mb-0 font-semibold text-lg">Grow Your Business <br /> Now</h5>
                        </div>
                    </div>
                    {/* Fourth Promo Item */}
                    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                        <div className="bg-[#C6E7FF] p-5 text-center rounded-lg shadow-lg flex flex-col items-center justify-center h-48">
                            <FaAward className="text-4xl mb-4" style={{ color: '#005eff' }} />
                            <h5 className="mb-0 font-semibold text-lg">Customers First <br /> Priority</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromoSection;
