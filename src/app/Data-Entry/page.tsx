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
                    <p className="text-gray-600 mt-4 text-xl text-justify">Till now, we've worked on quite many projects and therefore the experience assists us to figure challengingly on the info services of the clients. Our services include online data entry to conversion , quick copy paste form processing, processing , data conversions without failure. There are several companies which are totally pleased with the invoice data entry services and extra sorts of legal data entry at an equivalent time.</p>
                    <p className="text-gray-600 mt-4 text-xl text-justify">No matter, you've got Bills and Receipts entry, Labels entry, card data entry or maybe Coupon Redemptions entry, we've the passionate team which works on stretched deadlines. Considering the features of the clients, the simplest quality of the work are going to be answered and therefore the task will get delivered at the proper time. The ideas that are employed by the team are highly creative and confirm for wonderful results with none kind of failure. within the previous couple of years, we've comes up because the best offshore company so as to outsource the info needs of any size and sort .</p>
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