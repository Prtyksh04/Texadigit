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
            <div className="flex m-16 gap-x-8">
                <CategoriesSection />
                <div>
                    <Image
                        alt="WebDevelopment"
                        src="/images/MobileApp.jpg"
                        height={800}
                        width={1000}
                    />
                    <h1 className="text-3xl font-semibold mt-4">Mobile App Development</h1>
                    <nav className="flex items-center gap-2 text-md text-gray-600">
                        <Link href="/" className="hover:underline">
                            Design
                        </Link>
                        <span >/</span>
                        <Link href="/" className="hover:underline">
                            Development
                        </Link>
                    </nav>
                    <p className="text-gray-600 mt-4 text-xl text-justify">Mobile Application and Web Development isn't just a stage today yet additionally an entire success win condition for an effective undertakings or new companies. Texadigit is a seaward Mobile and Web application advancement organization in Jaipur, Rajasthan which helps undertakings and new companies building custom versatile and web applications. From breaking down procedure, convenience studies, and interface configuration, to back-end improvement and coordination our committed group of gifted versatile App designers in Jaipur additionally contribute their inventive plans to make the portable application exceptional and easy to use inside and out.</p>
                    <p className="text-gray-600 mt-4 text-xl text-justify">We call ourselves as a cutting edge innovation counseling and versatile application improvement organization in Jaipur. since the versatile Application showcase is that the new developing business sector inside the advanced world, we've concentrated on giving the absolute best indent arrangement utilizing up and coming and drifting innovations like iOT, Big Data Analytics, Mobile-Cloud. we offer prerequisites examination, awesome UI/UX configuration, full lifecycle improvement process, Security incorporation, altered answer for iPhone Apps and Android Apps</p>
                    <TextAdvice
                        advice="Texadigit keeps surprising us with their capability to adapt to almost any request we have and to keep themselves at the leading edge of the software technologies."
                        name="Mr. Nitin Chanchlani"
                    />
                    <p className="text-gray-600 mt-4 text-xl text-justify">
                        Texadigit emphasizes rather on producing better user experience by utilizing our extensive technical expertise in building custom mobile and web apps. From the wireframes to the designing then implementation, Our app developers in Jaipur specialise in all the phases associated with Mobile App designing and development.
                    </p>
                    <ol className="list-decimal ml-12 text-gray-500 text-lg">
                        <li>IOS Development</li>
                        <li>Android Development</li>
                    </ol>
                    <div className="mt-4 flex gap-x-8 ml-8">
                        <button className="bg-gray-200 py-2 px-4 rounded-md hover:bg-[#65258a] hover:text-white">WEB DEVELOPMENT</button>
                        <button className="bg-gray-200 py-2 px-4 rounded-md hover:bg-[#65258a] hover:text-white">SEO</button>
                        <button className="bg-gray-200 py-2 px-4 rounded-md hover:bg-[#65258a] hover:text-white">DIGITAL MARKETING</button>
                    </div>
                    <hr className="w-3/2 mt-12" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AppDevelopment;