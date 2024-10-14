import Image from 'next/image';
import React from 'react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="why-choose-us pt-24 pb-24">
      <style>
        {`
          @keyframes moveHR {
            0% {
              transform: translateX(-75%); /* Start slightly to the left */
            }
            50% {
              transform: translateX(-10%); /* Move slightly to the right */
            }
            100% {
              transform: translateX(-75%); /* Return to the left */
            }
          }
          .animate-moveHR {
            position: absolute;
            bottom: -10px; /* Position under the text */
            left: 50%;
            transform: translateX(-50%); /* Center horizontally */
            width: 15%;
            animation: moveHR 4s ease-in-out infinite;
          }
        `}
      </style>
      <div className="container mx-auto">
        <div className="flex justify-center relative">
          <div className="text-center max-w-3xl">
            <strong className="text-[#e80566] font-medium">Why Choose Us</strong>
            <h2 className="text-4xl font-semibold mb-4 relative">
              We Provide Better Services
              <hr className="border-b-2 border-[#e80566] animate-moveHR" />
            </h2>
            <p className="text-xl text-[#707070] mt-4 leading-tight tracking-tight">
              Globally reinvent cross-unit human capital whereas virtual catalysts for change. Assertively
              network accurate methods of empowerment rather than client-centered improvements.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mt-12">
          {/* Image Section */}
          <div className="md:w-1/2 lg:w-5/12 mb-8 md:mb-0">
            <Image
              src="/images/tab-img.png"
              alt="Why Choose Us"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>

          {/* Promo Section */}
          <div className="w-full lg:w-1/2 p-8">
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
                <div className="w-1/2 p-2">
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

export default WhyChooseUs;
