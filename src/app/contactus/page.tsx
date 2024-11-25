'use client'
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { PhoneIcon, EnvelopeIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { FaArrowRight } from 'react-icons/fa';
import Footer from "../components/Footer";
import AboutUsHeader from "../components/OtherComponents/Header";
import emailjs from '@emailjs/browser';

const EnquiryNow = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
    });


    const openGoogleMaps = () => {
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=Sector+18,Gurugram,Haryana,122022`;
        window.open(googleMapsUrl, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent the default form submission
        const serviceId = "service_7s3n44a";
        const templateId = "template_3q2fy4j";
        const publicKey = "kE-qLvqR-u99g2EwF";

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

    const contactDetails = [
        {
            icon: <PhoneIcon className="h-10 w-10" />,
            title: "Call Us",
            details: ["+91-9871610154", "+91-7988695795", "+91-9711679777"],
        },

        {
            icon: <EnvelopeIcon className="h-10 w-10" />,
            title: "Mail Us",
            details: ["office@imaginedigi.com",],
        },
        {
            icon: <ChatBubbleLeftRightIcon className="h-10 w-10" />,
            title: "Live Chat",
            details: ["+91-9871610154", "Chat with Us 24/7"],
        },
    ];

    return (
        <>
            <Navbar />
            <AboutUsHeader
                title="Contact Now"
                breadcrumbText="Contact Now"
            />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-6">
                    {contactDetails.map((contact, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center p-8 bg-white rounded-xl shadow-md 
                     hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1
                     border border-gray-100 w-full"
                        >
                            <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300 text-pink-500">
                                {contact.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">{contact.title}</h3>
                            <div className="flex flex-col items-center space-y-2">
                                {contact.details.map((detail, idx) => (
                                    <p key={idx} className="text-gray-600 text-md hover:text-gray-800 transition-colors duration-200">
                                        {detail}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

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
                            required
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-pink-500"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            required
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-pink-500"
                        />
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="Enter Mobile"
                            required
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-pink-500"
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            required
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
                        <h3 className="text-xl font-semibold">Get in touch</h3>
                        <p className="text-gray-400 mt-1 font-normal mb-2">
                            Phone: +91-7988695795, +91-9871610154, +91-9711679777
                        </p>
                        <p className="text-gray-400 mt-1 font-normal">
                            Email: office@imaginedigi.com
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default EnquiryNow;
