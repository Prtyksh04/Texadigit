import Image from "next/image";
import AboutUsHeader from "../components/OtherComponents/Header";
import Link from "next/link";
import CategoriesSection from "../components/Sidebar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TextAdvice from "../components/TextAdvice";
import Head from "next/head";

const AppDevelopment = () => {
    return (
        <>
            {/* SEO Meta Tags */}
            <Head>
                <title>Mobile App Development Services | Imagine Digi</title>
                <meta
                    name="description"
                    content="Professional mobile app development services for iPhone and Android. Custom mobile applications built to meet your business needs. Contact Imagine Digi for top-notch mobile solutions."
                />
                <meta
                    name="keywords"
                    content="Mobile App Development, iPhone App Development, Android App Development, Custom Mobile Apps, Mobile Development Company"
                />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Mobile App Development Services | Imagine Digi" />
                <meta property="og:description" content="Professional mobile app development services for iPhone and Android. Custom mobile applications built to meet your business needs." />
                <meta property="og:url" content="https://www.imaginedigi.com/app-development" />
                <meta property="og:image" content="https://www.imaginedigi.com/images/MobileApp.jpg" />
                <meta name="twitter:title" content="Mobile App Development Services | Imagine Digi" />
                <meta name="twitter:description" content="Professional mobile app development services for iPhone and Android. Custom mobile applications built to meet your business needs." />
                <meta name="twitter:image" content="https://www.imaginedigi.com/images/MobileApp.jpg" />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Mobile App Development",
                        "provider": {
                            "@type": "Organization",
                            "name": "Imagine Digi",
                            "url": "https://www.imaginedigi.com",
                            "logo": "https://www.imaginedigi.com/logo.png"
                        },
                        "areaServed": "Worldwide",
                        "description": "Mobile application development services for iPhone and Android with expertise in cutting-edge technologies like IoT, Big Data Analytics, and Mobile-Cloud."
                    }
                    `}
                </script>
            </Head>

            <Navbar />
            <AboutUsHeader title="Mobile App Development" breadcrumbText="App Development" />

            <main className="flex flex-col md:flex-row m-4 md:m-16 gap-4 md:gap-8">
                {/* Sidebar */}
                <aside className="w-full md:w-1/4">
                    <CategoriesSection />
                </aside>

                {/* Main Content */}
                <section className="w-full md:w-3/4">
                    {/* Mobile App Image */}
                    <Image
                        alt="Mobile App Development"
                        src="/images/MobileApp.jpg"
                        height={700}
                        width={800}
                        className="w-full h-auto"
                        priority
                    />

                    <h1 className="text-2xl md:text-3xl font-semibold mt-4">
                        Mobile App Development
                    </h1>

                    {/* Breadcrumb navigation */}
                    <nav className="flex items-center gap-2 text-sm md:text-md text-gray-600">
                        <Link href="/" className="hover:underline">Design</Link>
                        <span>/</span>
                        <Link href="/" className="hover:underline">App Development</Link>
                    </nav>

                    {/* Main Content */}
                    <section className="mt-4">
                        <p className="text-gray-600 text-justify md:text-lg text-sm">
                            Mobile App Development is crucial for modern enterprises or startups. Imagine Digi, based in Gurgaon, provides custom mobile and web app development, specializing in iPhone and Android applications.
                        </p>

                        <p className="text-gray-600 mt-4 text-justify md:text-lg text-sm">
                            We leverage technologies like IoT, Big Data Analytics, and Mobile-Cloud to deliver tailored solutions. Our team handles everything from requirements analysis and UI/UX design to backend development and security integration.
                        </p>

                        {/* Text Advice */}
                        <TextAdvice
                            advice="Imagine Digi is always at the forefront of technology and adapts to any request we have, ensuring top-quality app solutions."
                            name="Mr. Saket Modi"
                        />

                        <p className="text-gray-600 mt-4 text-justify md:text-lg text-sm">
                            Our expertise in mobile app design and development ensures that your business delivers a superior user experience, from wireframes to implementation.
                        </p>

                        {/* Service Offerings List */}
                        <ol className="list-decimal ml-6 md:ml-12 text-gray-500 text-sm md:text-lg mt-4">
                            <li>iOS Development</li>
                            <li>Android Development</li>
                        </ol>

                        {/* Related Services */}
                        <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 ml-0 md:ml-8 text-sm">
                            <button className="bg-gray-200 py-2 px-4 rounded-md hover:bg-[#65258a] hover:text-white">WEB DEVELOPMENT</button>
                            <button className="bg-gray-200 py-2 px-4 rounded-md hover:bg-[#65258a] hover:text-white">SEO</button>
                            <button className="bg-gray-200 py-2 px-4 rounded-md hover:bg-[#65258a] hover:text-white">DIGITAL MARKETING</button>
                        </div>

                        {/* Horizontal Rule */}
                        <hr className="w-full border-gray-300 mt-12" />
                    </section>
                </section>
            </main>

            <Footer />
        </>
    );
}

export default AppDevelopment;
