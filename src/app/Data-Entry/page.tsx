import Image from "next/image";
import AboutUsHeader from "../components/OtherComponents/Header"
import Link from "next/link";
import CategoriesSection from "../components/Sidebar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TextAdvice from "../components/TextAdvice";

const DataEntry = () => {
    return (
        <>
            <Navbar />
            <AboutUsHeader
                title="Data Entry"
                breadcrumbText="Data Entry Work"
            />
            <div className="flex m-16 gap-x-8">
                <CategoriesSection />
                <div>
                    <Image
                        alt="WebDevelopment"
                        src="/images/DataEntry.jpg"
                        height={800}
                        width={1000}
                    />
                    <h1 className="text-3xl font-semibold mt-4">Data Entry Work</h1>
                    <nav className="flex items-center gap-2 text-md text-gray-600">
                        <Link href="/" className="hover:underline">
                            Data Entry
                        </Link>
                        <span >/</span>
                        <Link href="/" className="hover:underline">
                            Save Time
                        </Link>
                    </nav>
                    <p className="text-gray-600 mt-4 text-xl text-justify">
                        Till now, we&apos;ve worked on many projects, and the experience enables us to tackle challenging client data services. Our offerings include online data entry, conversion, quick copy-paste form processing, and data conversions without error. Several companies are fully satisfied with our invoice data entry services and various other forms of legal data entry at the same time.
                    </p>

                    <p className="text-gray-600 mt-4 text-xl text-justify">
                        Whether it&apos;s Bills and Receipts entry, Labels entry, card data entry, or even Coupon Redemptions entry, we have a passionate team that works to meet tight deadlines. With client requirements in mind, we ensure the highest quality of work, delivering tasks on time. The ideas employed by our team are highly creative, guaranteeing excellent results without any form of failure. Over the past few years, we&apos;ve emerged as the best offshore company to outsource data needs of any size or type.
                    </p>

                    <TextAdvice
                        advice="You can have data without information, but you cannot have information without data."
                        name="Daniel Keys Moran"
                    />
                    <p className="text-gray-600 mt-4 text-xl text-justify">
                        Web development is that the first requirement of companies lately . Everyday a replacement company increase online arena making it swarming. the gang had made it tougher to form a definite segment out there. it is vital to possess a high quality website so on urge an honest visibility.
                    </p>
                    <ol className="list-decimal ml-12 text-gray-500 text-lg">
                        <li>Simple Copy Paste Work</li>
                        <li>Typing Work</li>
                    </ol>
                    <div className="mt-4 flex gap-x-8 ml-8">
                        <button className="bg-gray-200 py-2 px-4 rounded-md hover:bg-[#65258a] hover:text-white">WEB DEVELOPMENT</button>
                        <button className="bg-gray-200 py-2 px-4 rounded-md hover:bg-[#65258a] hover:text-white">APP DEVELOPMENT</button>
                        <button className="bg-gray-200 py-2 px-4 rounded-md hover:bg-[#65258a] hover:text-white">DIGITAL MARKETING</button>
                        <button className="bg-gray-200 py-2 px-4 rounded-md hover:bg-[#65258a] hover:text-white">COMPUTER LAB INSTALLATION</button>
                    </div>
                    <hr className="w-3/2 mt-12" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DataEntry;