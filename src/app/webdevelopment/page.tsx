import Image from "next/image";
import AboutUsHeader from "../components/OtherComponents/Header";
import Link from "next/link";
import CategoriesSection from "../components/Sidebar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TextAdvice from "../components/TextAdvice";
import Head from "next/head";

const WebsiteDevelopment = () => {
    return (
        <>
            <Head>
                <title>Website Development Services | Imagine Digi</title>
                <meta name="description" content="Professional website development services to enhance your online presence. Get high-quality, responsive, and user-friendly websites tailored to your business needs." />
                <meta name="keywords" content="Website Development, Web Design, Web Development Services, Responsive Websites, Professional Web Development" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Website Development Services | Imagine Digi" />
                <meta property="og:description" content="Professional website development services to enhance your online presence. Get high-quality, responsive, and user-friendly websites tailored to your business needs." />
                <meta property="og:url" content="https://www.imaginedigi.com/webdevelopment" />
                <meta property="og:image" content="https://www.imaginedigi.com/images/Web_Development.jpeg" />
                <meta name="twitter:title" content="Website Development Services | Imagine Digi" />
                <meta name="twitter:description" content="Professional website development services to enhance your online presence. Get high-quality, responsive, and user-friendly websites tailored to your business needs." />
                <meta name="twitter:image" content="https://www.imaginedigi.com/images/Web_Development.jpeg" />
                <script type="application/ld+json">
                    {`
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Website Development",
            "provider": {
                "@type": "Organization",
                "name": "Imagine Digi",
                "url": "https://www.imaginedigi.com",
                "logo": "https://www.imaginedigi.com/logo.png"
            },
            "areaServed": "Worldwide",
            "description": "Professional website development services including responsive and high-performing websites for businesses."
        }
        `}
                </script>
            </Head>

            <Navbar />
            <AboutUsHeader
                title="Website Development"
                breadcrumbText="Website Development"
            />

            {/* Wrapper for responsive layout */}
            <div className="flex flex-col md:flex-row m-4 md:m-16 gap-4 md:gap-8">
                {/* Sidebar section (smaller width) */}
                <div className="w-full md:w-1/4">
                    <CategoriesSection />
                </div>

                {/* Main content section (larger width) */}
                <div className="w-full md:w-3/4">
                    {/* Responsive Image */}
                    <Image
                        alt="Web Development"
                        src="/images/Web_Development.jpeg"
                        height={700}
                        width={800}
                        className="w-full h-auto"
                    />

                    {/* Title */}
                    <h1 className="text-2xl md:text-3xl font-semibold mt-4">
                        Website Development
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

                    {/* Content paragraphs */}
                    <p className="text-gray-600 mt-4 text-justify md:text-lg text-sm">
                        Your website represents your brand. A site that’s slow, unreliable, or difficult to use may drive customers and prospects away. Internal teams also suffer when small website changes are slow to implement, and larger changes seem impossible.
                    </p>
                    <p className="text-gray-600 mt-4 text-justify md:text-lg text-sm">
                        Starting a web development project may feel overwhelming, leading businesses to stick with the status quo—risking missed opportunities and competitive disadvantages.
                        With over 5 years of experience developing on leading CMS platforms and a well-refined project management process, Blue Fountain Media builds high-performing sites across various industries. We’ve tackled numerous challenges for our clients and achieved exceptional results along the way.
                    </p>

                    {/* Text Advice component */}
                    <TextAdvice
                        advice="We introduce a specific strategy on the thought of which the website design and development are executed."
                        name="Mr. Sanjay Arora"
                    />

                    {/* Another paragraph */}
                    <p className="text-gray-600 mt-4 text-base md:text-lg text-sm">
                        Web development is the first requirement of companies today. Everyday new companies emerge in the online arena, making it crowded. It’s important to have a quality website to ensure good visibility.
                    </p>

                    {/* Ordered list */}
                    <ol className="list-decimal ml-6 md:ml-12 text-gray-500 text-sm md:text-lg">
                        <li>Asp.Net Development</li>
                        <li>PHP Development</li>
                        <li>WordPress Development</li>
                    </ol>

                    {/* Button group */}
                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 ml-0 md:ml-8 text-sm">
                        <button className="bg-gray-200 py-2 px-4 rounded-md hover:bg-[#65258a] hover:text-white">SEO</button>
                        <button className="bg-gray-200 py-2 px-4 rounded-md hover:bg-[#65258a] hover:text-white">DIGITAL MARKETING</button>
                        <button className="bg-gray-200 py-2 px-4 rounded-md hover:bg-[#65258a] hover:text-white">APP DEVELOPMENT</button>
                    </div>

                    {/* Horizontal rule */}
                    <hr className="w-full border-gray-300 mt-12" />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default WebsiteDevelopment;
