'use client'
import Image from 'next/image';
import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const CallToActionSection: React.FC = () => {
  return (
    <section
      id="callActionBG"
      className="relative pt-12 pb-12 bg-cover bg-center flex flex-col items-center"
    >
      {/* Background Image */}
      <Image
        src="/images/cta-bg.jpg"
        objectFit="cover"
        layout="fill"
        priority
        alt="cta-bg"
        className="absolute inset-0 z-0"
      />

      {/* CTA Images */}
      <div className="hidden lg:block absolute left-0 bottom-0 z-0">
        <Image src="/images/cta-1-man.svg" width={200} height={200} alt="cta-man" className="img-left" />
      </div>
      <div className="hidden lg:block absolute right-0 bottom-0 z-0">
        <Image src="/images/cta-1-mike.svg" width={200} height={200} alt="cta-mike" className="img-right" />
      </div>

      <div className="container mx-auto relative z-10 flex flex-col items-center">
        {/* Headline and Subheading */}
        <div className="text-center text-white mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Send A Call Back Request</h2>
          <p className="text-base md:text-lg mt-2">
            We are available 24/7. Fill in your details and we will call you within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col lg:flex-row justify-center items-center text-center w-full max-w-4xl relative" method="post">
          {/* Name Input */}
          <div className="w-full lg:w-1/3 px-2 mb-4 z-10">
            <div className="form-group">
              <input
                type="text"
                className="form-control w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
                placeholder="Type Your Name"
                required
              />
            </div>
          </div>

          {/* Mobile Input */}
          <div className="w-full lg:w-1/3 px-2 mb-4 z-10">
            <div className="form-group">
              <input
                type="text"
                className="form-control w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
                placeholder="Your Mobile"
                pattern="^((\\+91-?)|0)?[0-9]{10}$"
                title="Please enter a valid mobile number"
                maxLength={10}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="w-full lg:w-1/4 px-2 mb-4 z-10 flex justify-center">
            <button
              type="submit"
              className="btn-submit bg-[#e80566] text-white text-lg md:text-xl px-6 py-2 rounded-lg hover:bg-[#d00459] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e80566] transition flex items-center"
            >
              <FaPaperPlane className="mr-2" />
              Send
            </button>
          </div>
        </form>
      </div>

      {/* Styles for small screens */}
      <style jsx>{`
        @media (max-width: 639px) {
          #callActionBG {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            padding-top: 2rem;
            padding-bottom: 2rem;
          }

          #callActionBG::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 50%;
            background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);
            z-index: 1;
          }

          .container {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            height: 100%;
          }

          .text-center {
            margin-bottom: 2rem;
            position: relative;
            z-index: 2;
          }

          form {
            display: flex;
            flex-direction: column;
            width: 90%;
            max-width: 400px;
            margin-top: auto;
            background-color: rgba(255, 255, 255, 0.9);
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .form-group {
            margin-bottom: 1rem;
          }

          .btn-submit {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default CallToActionSection;