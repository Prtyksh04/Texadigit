import Image from "next/image";
import AboutUsHeader from "../components/OtherComponents/Header"
import Link from "next/link";
import CategoriesSection from "../components/Sidebar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TextAdvice from "../components/TextAdvice";

const DigitalMarketing = () => {
    return (
        <>
            <Navbar />
            <AboutUsHeader
                title="Digital Marketing"
                breadcrumbText="Digital Marketing"
            />
            <div className="flex flex-col md:flex-row m-4 md:m-16 gap-4 md:gap-8">
                <div className="w-full md:w-1/4">
                    <CategoriesSection />
                </div>
                <div className="w-full md:w-3/4">
                    <Image
                        alt="WebDevelopment"
                        src="/images/DigitalMarketing.jpg"
                        height={800}
                        width={1000}
                        className="w-full h-auto"
                    />
                    <h1 className="text-2xl md:text-3xl font-semibold mt-4">
                        Digital Marketing
                    </h1>
                    <nav className="flex items-center gap-2 text-sm md:text-md text-gray-600">
                        <Link href="/" className="hover:underline">
                            Marketing
                        </Link>
                        <span>/</span>
                        <Link href="/" className="hover:underline">
                            Grow your Business
                        </Link>
                    </nav>
                    <p className="text-gray-600 mt-4 text-justify md:text-xl">
                        Every large and small business requires digital marketing services. We offer a complete range of digital marketing campaigns including SEO, PPC, Email Marketing, Social Media Marketing, and Local Business listings to help increase business revenue.
                    </p>

                    <p className="text-gray-600 mt-4 text-justify md:text-xl">
                        <strong className="text-gray-500">Grow Your Business</strong> — we&apos;ll offer a 360° digital marketing service that drives traffic, increases sales, and delivers a 100% return on investment. We&apos;ve helped over 1,000 customers grow their online businesses through an effective digital marketing mix and advanced technologies.
                    </p>

                    <TextAdvice
                        advice="We are one of Jaipur&apos;s largest digital marketing service providers, with a highly innovative team of internet marketing specialists."
                        name="Mr. Nitin Chanchlani"
                    />
                    <p className="text-gray-600 mt-4 text-justify md:text-xl">
                        Digital Marketing may be a very wide function, it can include everything from online brand reputation, market price , PR (PR), product, and services pricing and lots of more. Mostly we specialise in the marketing communications side of the equation and the way this compares to finish client sales.
                    </p>
                    <ol className="list-decimal ml-6 md:ml-12 text-gray-500 text-sm md:text-lg mt-4">
                        <li>SMO</li>
                        <li>SEO</li>
                        <li>EMAIL MARKETING</li>
                        <li>Social Media Marketing</li>
                        <li>PPC (Per Page Click)</li>
                    </ol>
                    <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 ml-0 md:ml-8">
                        <button className="bg-gray-200 py-2 px-2 rounded-md hover:bg-[#65258a] hover:text-white whitespace-nowrap">WEB DEVELOPMENT</button>
                        <button className="bg-gray-200 py-2 px-2 rounded-md hover:bg-[#65258a] hover:text-white whitespace-nowrap">APP DEVELOPMENT</button>
                        <button className="bg-gray-200 py-2 px-2 rounded-md hover:bg-[#65258a] hover:text-white whitespace-nowrap">DATA ENTRY</button>
                    </div>
                    <hr className="w-full border-gray-300 mt-12" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DigitalMarketing;