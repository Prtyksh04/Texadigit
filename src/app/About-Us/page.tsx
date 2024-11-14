import Image from "next/image";
import AboutUsHeader from "../components/OtherComponents/Header";
import SocialIcons from "../components/SocialIcons";
import ClientSection from "../components/ClientSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <AboutUsHeader
                title="About Us"
                breadcrumbText="About Us"
            />
            <div className="flex flex-col md:flex-row justify-between items-start px-4 py-8 bg-white mt-8 gap-x-8">
                {/* Left: Image */}
                <div className="flex-1 mb-4 md:mb-0 shadow-lg rounded-lg mt-12">
                    <Image
                        src="/images/aboutus.gif"
                        alt="Texadigit illustration"
                        width={400}
                        height={400}
                        className="w-full h-auto rounded-lg"
                    />
                </div>

                {/* Right: Content */}
                <div className="flex-1 md:ml-8">
                    <h1 className="text-4xl font-semibold text-gray-900">Imagine Digi</h1>
                    <p className="text-lg text-gray-600 mb-4">An IT Solution</p>

                    <div className="space-y-2">
                        <p><strong>Phone:</strong> +91-9871610154, +91-79886959795</p>
                        <p><strong>Email:</strong> support@texadigit.in</p>
                    </div>

                    <p className="text-gray-600 mt-4 text-xl">
                        <strong className="text-gray-600">Imagine Digi</strong> is a youthful structure firm with a group of executives
                        who have broad involvement in App/web composition, improvement, and
                        digital showcasing. Each one among us has spent a superb arrangement
                        of time working in corporate, tending to issues, and taking care of issues.
                    </p>
                    <p className="text-gray-600 mt-4 text-xl">
                        Our group of expert originators and engineers have an uncommon way to deal with
                        the specialty of web website plan. We, as a whole, realize the best approach to
                        make your web store sell with the help of visual depiction. We offer a whole
                        scope of custom programming administrations for organizations that need to attempt
                        business over the web.
                    </p>
                    <SocialIcons />
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start px-4 py-8 bg-white mt-8 gap-x-12">
                {/* Right: Content */}
                <div className="flex-1 md:ml-8 mt-12">
                    <p className="text-gray-600 mt-4 text-xl">
                        <strong className="text-gray-600">Imagine Digi</strong> is an IT arrangement and fix organization. Our administrations extend from Web Development including Website Development, Web/Graphic Design, Web Hosting/Domain Registration, Website Maintenance/Lead Tracking, E-Commerce Web Solutions, Content Management, Open Source Customization to Digital Marketing like program Optimization, Social Media Marketing , program Marketing close by giving discussion to its customers on Business Process, Marketing . some of the supporting administrations gave additionally incorporate upkeep and backing of the online entrance.
                    </p>
                    <p className="text-gray-600 mt-4 text-xl">
                        Advances like HTML5, CSS3, PHP, Asp.Net, JavaScript, Java, jQuery, WordPress, Joomla, MySQL and so on and mastery in Photoshop, InDesign, Graphic plans and so on. the business offers a vigorous recommendation improvement .
                    </p>
                    <SocialIcons />
                    {/* Left: Image */}
                </div>
                <div className="flex-1 mb-4 md:mb-0 shadow-lg rounded-lg mt-12">
                    <Image
                        src="/images/aboutus.gif"
                        alt="Texadigit illustration"
                        width={300}
                        height={300}
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>
            <ClientSection />
            <Footer />
        </>
    )
}

export default AboutUs;