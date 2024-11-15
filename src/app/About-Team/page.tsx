'use client'
import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar';
import AboutUsHeader from '../components/OtherComponents/Header';
import ServiceMetrics from '../components/ServiceMetrics';
import emailjs from '@emailjs/browser';
import { FaArrowRight } from 'react-icons/fa';
import ClientSection from '../components/ClientSection';
import Footer from '../components/Footer';
import TeamGrid from '../components/TeamGrid';

const AboutTeam = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent the default form submission
        const serviceId = "service_ztyv7np";
        const templateId = "template_p92r7oh";
        const publicKey = "Xqrhiit8dKelSSaMk";

        // Prepare template params
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            from_mobile: formData.mobile,
            message: formData.message,
        };

        // Send the email using EmailJS
        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Email sent successfully!", response);
                // Clear form after successful submission
                setFormData({
                    name: "",
                    email: "",
                    mobile: "",
                    message: "",
                });
            })
            .catch((error) => {
                console.error("Error sending email:", error);
            });
    };

    const openGoogleMaps = () => {
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=Sector+18,Gurugram,Haryana,122022`;
        window.open(googleMapsUrl, '_blank');
    };


    return (
        <>
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
            <Navbar />
            <AboutUsHeader
                title='Our Team'
                breadcrumbText='Our Team'
            />
            <div className="flex justify-center mt-12 mb-12">
                <div className="text-center max-w-lg md:max-w-xl">
                    <strong className="text-[#e80566] font-normal mb-2">Our Team</strong>
                    <h1 className='text-2xl md:text-3xl font-semibold mb-4'>What Can We Do For You</h1>
                    <hr className="border-b-2 border-[#e80566] mb-4 animate-hrServiceSection" />
                    <p className="lead mb-4 text-center text-sm md:text-base">
                        Teamwork begins by building trust. And the only way to do that is to overcome our need for invulnerability.
                    </p>
                    <span className="animate-border mx-auto mb-4"></span>
                </div>
            </div>
            <TeamGrid />
            <ServiceMetrics />
            <div className="flex flex-wrap lg:flex-nowrap gap-10 p-8 lg:p-16 bg-white">
                {/* Contact Form */}
                <div className="bg-gray-50 rounded-lg shadow-lg p-8 flex-1">
                    <h2 className="text-2xl font-bold mb-6">Contact us for any query?</h2>
                    <form className="space-y-4" onSubmit={sendEmail}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter name"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-pink-500"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-pink-500"
                        />
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="Enter Mobile"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-pink-500"
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-pink-500"
                            rows={4}
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-pink-500 text-white font-semibold py-3 rounded-lg hover:bg-pink-600 transition-colors"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Business Info */}
                <div className="flex-1 space-y-8">
                    <div className="my-2">
                        <h2 className="text-3xl font-bold">Looking for an excellent Business idea?</h2>
                        <p className="text-gray-600 mt-4">
                            Seamlessly deliver pandemic e-services and next-generation initiatives.
                        </p>
                        <button className="mt-6 inline-flex items-center px-4 py-2 border border-purple-500 text-purple-600 rounded-lg hover:bg-purple-100 text-center my-2"
                            onClick={openGoogleMaps}
                        >
                            Get Directions
                            <FaArrowRight className="ml-2 mt-1 text-xs text-black" />
                        </button>
                    </div>
                    <hr className="w-5/6 text-center ml-6" />
                    <div>
                        <h3 className="text-xl font-semibold">Contact us</h3>
                        <p className="text-gray-400 mt-1 font-normal mb-2">
                            Phone: +91-9871610154,+91-7988695795, +91-9711679777
                        </p>
                        <p className="text-gray-400 mt-1 font-normal">
                            Email: office@imaginedigi.com
                        </p>
                    </div>
                </div>
            </div>
            <ClientSection />
            <Footer />
        </>
    )
}

export default AboutTeam;