import Image from "next/image";
import AboutUsHeader from "../components/OtherComponents/Header"
import Link from "next/link";
import CategoriesSection from "../components/Sidebar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TextAdvice from "../components/TextAdvice";

const AppDevelopment = () => {
    return (
        <>
            <Navbar />
            <AboutUsHeader
                title="Mobile App Development"
                breadcrumbText="App Development"
            />


            <div className="flex flex-col md:flex-row m-4 md:m-16 gap-4 md:gap-8">
                <div className="w-full md:w-1/4">
                    <CategoriesSection />
                </div>
                <div className="w-full md:w-3/4">
                    {/* Responsive Image */}
                    <Image
                        alt="WebDevelopment"
                        src="/images/MobileApp.jpg"
                        height={700}
                        width={800}
                        className="w-full h-auto"
                    />
                    <h1 className="text-2xl md:text-3xl font-semibold mt-4">
                        Mobile App Development
                    </h1>

                    {/* Breadcrumb navigation */}
                    <nav className="flex items-center gap-2 text-sm md:text-md text-gray-600">
                        <Link href="/" className="hover:underline">
                            Design
                        </Link>
                        <span>/</span>
                        <Link href="/" className="hover:underline">
                            Development
                        </Link>
                    </nav>
                    <p className="text-gray-600 mt-4 text-justify md:text-xl">
                        Mobile Application and Web Development isn&apos;t just a stage today but also an entire win-win situation for successful enterprises or startups. Imagine Digi is an offshore Mobile and Web application development company in Jaipur, Rajasthan, helping enterprises and startups build custom mobile and web applications. From analyzing processes, conducting usability studies, and interface design, to back-end development and integration, our dedicated team of skilled mobile app developers in Jaipur also contributes their innovative designs to make the mobile application unique and user-friendly in every way.
                    </p>

                    <p className="text-gray-600 mt-4 text-xl text-justify">
                        We call ourselves a cutting-edge technology consulting and mobile application development company in Jaipur. Since the mobile application market is the new emerging sector in the digital world, we&apos;ve focused on providing top-notch solutions using up-and-coming and trending technologies like IoT, Big Data Analytics, and Mobile-Cloud. We offer requirements analysis, exceptional UI/UX design, a full lifecycle development process, security integration, and custom solutions for iPhone and Android apps.
                    </p>

                    <TextAdvice
                        advice="Imagine Digi keeps surprising us with their capability to adapt to almost any request we have and to keep themselves at the leading edge of the software technologies."
                        name="Mr. Nitin Chanchlani"
                    />
                    <p className="text-gray-600 mt-4 text-justify md:text-xl">
                        Imagine Digi emphasizes rather on producing better user experience by utilizing our extensive technical expertise in building custom mobile and web apps. From the wireframes to the designing then implementation, Our app developers in Jaipur specialise in all the phases associated with Mobile App designing and development.
                    </p>
                    <ol className="list-decimal ml-6 md:ml-12 text-gray-500 text-sm md:text-lg mt-4">
                        <li>IOS Development</li>
                        <li>Android Development</li>
                    </ol>
                    <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 ml-0 md:ml-8">
                        <button className="bg-gray-200 py-2 px-4 rounded-md hover:bg-[#65258a] hover:text-white">WEB DEVELOPMENT</button>
                        <button className="bg-gray-200 py-2 px-4 rounded-md hover:bg-[#65258a] hover:text-white">SEO</button>
                        <button className="bg-gray-200 py-2 px-4 rounded-md hover:bg-[#65258a] hover:text-white">DIGITAL MARKETING</button>
                    </div>
                    <hr className="w-full border-gray-300 mt-12" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AppDevelopment;