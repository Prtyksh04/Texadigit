import Image from "next/image";
import AboutUsHeader from "../components/OtherComponents/Header"
import Link from "next/link";
import CategoriesSection from "../components/Sidebar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const DigitalMarketing = () => {
    return (
        <>
            <Navbar />
            <AboutUsHeader
                title="Digital Marketing"
                breadcrumbText="Digital Marketing"
            />
            <div className="flex m-16 gap-x-8">
                <CategoriesSection />
                <div>
                    <Image
                        alt="WebDevelopment"
                        src="/images/DigitalMarketing.jpg"
                        height={800}
                        width={1000}
                    />
                    <h1 className="text-3xl font-semibold mt-4">Digital Marketing</h1>
                    <nav className="flex items-center gap-2 text-md text-gray-600">
                        <Link href="/" className="hover:underline">
                            Marketing
                        </Link>
                        <span >/</span>
                        <Link href="/" className="hover:underline">
                            Grow your Business
                        </Link>
                    </nav>
                    <p className="text-gray-600 mt-4 text-xl text-justify">Every large and small business requires digital marketing services. We include the whole range of digital marketing campaigns like SEO, PPC, Email Marketing, Social Media Marketing, and Local Business listing to increase business revenue.</p>
                    <p className="text-gray-600 mt-4 text-xl text-justify"><strong className="text-gray-500">Grow Your Business</strong> we'll offer a 360 digital marketing service to you that's drives traffic sales and can provide a 100% return on your investment. we've helped quite 1000 customers increase their online businesses through effective digital mix technology.</p>
                    <div>
                        <div className="flex w-4/5 h-auto gap-x-8 mt-4 mb-8">
                            <div className="border-l-2 border-[#e80566] h-32"></div>
                            <div>
                                <h3 className="text-xl text-justify mt-4 line-clamp-2">
                                    We are one of Jaipur's Largest Digital Marketing Services provider company with their best innovative team of Internet marketing specialist.
                                </h3>
                                <div className="flex">
                                    <p>___</p>
                                    <p className="m-2">Mr. Pratyaksh Saini</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <h1>Something we have add here</h1> */}
                    <p className="text-gray-600 mt-4 text-xl text-justify">
                        Digital Marketing may be a very wide function, it can include everything from online brand reputation, market price , PR (PR), product, and services pricing and lots of more. Mostly we specialise in the marketing communications side of the equation and the way this compares to finish client sales.
                    </p>
                    <ol className="list-decimal ml-12 text-gray-500 text-lg">
                        <li>SMO</li>
                        <li>SEO</li>
                        <li>EMAIL MARKETING</li>
                        <li>Social Media Marketing</li>
                        <li>PPC (Per Page Click)</li>
                    </ol>
                    <div className="mt-4 flex gap-x-2 ml-8">
                        <button className="bg-gray-200 py-2 px-2 rounded-md hover:bg-[#65258a] hover:text-white whitespace-nowrap">WEB DEVELOPMENT</button>
                        <button className="bg-gray-200 py-2 px-2 rounded-md hover:bg-[#65258a] hover:text-white whitespace-nowrap">APP DEVELOPMENT</button>
                        <button className="bg-gray-200 py-2 px-2 rounded-md hover:bg-[#65258a] hover:text-white whitespace-nowrap">CCTV CAMERA INSTALLATION</button>
                        <button className="bg-gray-200 py-2 px-2 rounded-md hover:bg-[#65258a] hover:text-white whitespace-nowrap">COMPUTER LAB INSTALLATION</button>
                        <button className="bg-gray-200 py-2 px-2 rounded-md hover:bg-[#65258a] hover:text-white whitespace-nowrap">DATA ENTRY</button>
                    </div>
                    <hr className="w-3/2 mt-12" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DigitalMarketing;