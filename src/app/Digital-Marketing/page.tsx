import Image from "next/image";
import AboutUsHeader from "../components/OtherComponents/Header";
import Link from "next/link";
import CategoriesSection from "../components/Sidebar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TextAdvice from "../components/TextAdvice";

const DigitalMarketing = () => {
    return (
        <>
            {/* SEO Meta Tags */}
            <head>
                <title>Digital Marketing Services | Grow Your Business with Imagine Digi</title>
                <meta 
                    name="description" 
                    content="Imagine Digi offers comprehensive digital marketing services including SEO, PPC, Email Marketing, Social Media Marketing, and more to help businesses grow their online presence."
                />
                <meta 
                    name="keywords" 
                    content="Digital Marketing, SEO, PPC, Social Media Marketing, Email Marketing, Grow Your Business, Digital Marketing Services"
                />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Digital Marketing Services | Grow Your Business with Imagine Digi" />
                <meta property="og:description" content="Professional digital marketing services for SEO, PPC, Social Media Marketing, and more to help businesses boost their online presence and drive sales." />
                <meta property="og:url" content="https://www.imaginedigi.com/Digital-Marketing" />
                <meta property="og:image" content="https://www.imaginedigi.com/images/Digital-Marketing.jpg" />
                <meta name="twitter:title" content="Digital Marketing Services | Grow Your Business with Imagine Digi" />
                <meta name="twitter:description" content="Comprehensive digital marketing services including SEO, PPC, Email Marketing, Social Media Marketing, and more to help businesses achieve growth online." />
                <meta name="twitter:image" content="https://www.imaginedigi.com/images/Digital-Marketing.jpg" />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Digital Marketing",
                        "provider": {
                            "@type": "Organization",
                            "name": "Imagine Digi",
                            "url": "https://www.imaginedigi.com",
                            "logo": "https://www.imaginedigi.com/logo.png"
                        },
                        "areaServed": "Worldwide",
                        "description": "Comprehensive digital marketing services including SEO, PPC, Email Marketing, and Social Media Marketing to grow online businesses and improve revenue."
                    }
                    `}
                </script>
            </head>

            <Navbar />
            <AboutUsHeader
                title="Digital Marketing"
                breadcrumbText="Digital Marketing"
            />
            <div className="flex flex-col md:flex-row m-4 md:m-16 gap-4 md:gap-8">
                {/* Sidebar */}
                <div className="w-full md:w-1/4">
                    <CategoriesSection />
                </div>

                {/* Main Content */}
                <div className="w-full md:w-3/4">
                    {/* Image */}
                    <Image
                        alt="Digital Marketing Services"
                        src="/images/DigitalMarketing.jpg"
                        height={800}
                        width={1000}
                        className="w-full h-auto"
                    />

                    {/* Main Title */}
                    <h1 className="text-2xl md:text-3xl font-semibold mt-4">
                        Digital Marketing Services
                    </h1>

                    {/* Breadcrumb Navigation */}
                    <nav className="flex items-center gap-2 text-sm md:text-md text-gray-600">
                        <Link href="/" className="hover:underline">Marketing</Link>
                        <span>/</span>
                        <Link href="/" className="hover:underline">Grow Your Business</Link>
                    </nav>

                    {/* Content */}
                    <p className="text-gray-600 mt-4 text-justify md:text-lg text-sm">
                        Every large and small business requires digital marketing services. We offer a complete range of digital marketing campaigns including SEO, PPC, Email Marketing, Social Media Marketing, and Local Business listings to help increase business revenue.
                    </p>

                    <p className="text-gray-600 mt-4 text-justify md:text-lg text-sm">
                        <strong className="text-gray-500">Grow Your Business</strong> — we&apos;ll offer a 360° digital marketing service that drives traffic, increases sales, and delivers a 100% return on investment. We&apos;ve helped over 1,000 customers grow their online businesses through an effective digital marketing mix and advanced technologies.
                    </p>

                    {/* Testimonial */}
                    <TextAdvice
                        advice="We are one of Gurgaon&apos;s largest digital marketing service providers, with a highly innovative team of internet marketing specialists."
                        name="Mr. Varun Khaitan"
                    />

                    <p className="text-gray-600 mt-4 text-justify md:text-lg text-sm">
                        Digital Marketing may be a very wide function, covering everything from online brand reputation, market pricing, PR, and product/service marketing. We specialize in the marketing communications side of the equation, ensuring a seamless connection to client sales.
                    </p>

                    {/* Services List */}
                    <ol className="list-decimal ml-6 md:ml-12 text-gray-500 text-sm md:text-lg mt-4">
                        <li>SMO (Social Media Optimization)</li>
                        <li>SEO (Search Engine Optimization)</li>
                        <li>Email Marketing</li>
                        <li>Social Media Marketing</li>
                        <li>PPC (Pay Per Click)</li>
                    </ol>

                    {/* Related Services */}
                    <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 ml-0 md:ml-8 text-sm">
                        <button className="bg-gray-200 py-2 px-2 rounded-md hover:bg-[#65258a] hover:text-white whitespace-nowrap">
                            WEB DEVELOPMENT
                        </button>
                        <button className="bg-gray-200 py-2 px-2 rounded-md hover:bg-[#65258a] hover:text-white whitespace-nowrap">
                            APP DEVELOPMENT
                        </button>
                        <button className="bg-gray-200 py-2 px-2 rounded-md hover:bg-[#65258a] hover:text-white whitespace-nowrap">
                            DATA ENTRY
                        </button>
                    </div>

                    {/* Horizontal Rule */}
                    <hr className="w-full border-gray-300 mt-12" />
                </div>
            </div>

            <Footer />
        </>
    );
};

export default DigitalMarketing;
