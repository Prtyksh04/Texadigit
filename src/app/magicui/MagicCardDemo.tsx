import { MagicCard } from "@/components/ui/magic-card";
import Image from "next/image";
import { GiSpeaker } from 'react-icons/gi';
import { FaLaptopCode, FaArrowRight } from 'react-icons/fa';
import { GiSmartphone } from 'react-icons/gi';
import Link from "next/link";

export function MagicCardDemo() {
    return (
        <div className="flex flex-col gap-4 lg:h-[250px] lg:flex-row">
            <MagicCard
                className="relative cursor-pointer flex-col items-center justify-center shadow-xl whitespace-nowrap text-center text-4xl"
                gradientColor={"#ffdce5"}
            >
                <div className="mb-4 flex flex-col items-center">
                    <GiSpeaker className="text-[#c7056b] mb-2 text-4xl md:text-6xl" />
                    <h1 className="text-lg font-semibold mb-2 text-base md:text-lg">Digital Marketing</h1>
                    <p className="text-sm text-gray-700 text-base md:text-sm">Boost brand awareness and reach <br /> your customers on a human level.</p>
                    <Link href="#" className="text-xs mt-2 flex items-center hover:scale-110 duration-300">
                        Read More
                        <FaArrowRight className="ml-1 text-xs text-[#e80566]" />
                    </Link>
                </div>
                <Image
                    alt="service-bottom"
                    src="/images/service-bottom-shape.png"
                    width={70}
                    height={70}
                    className="absolute top-40 left-56 hidden lg:block"
                />
            </MagicCard>

            <MagicCard
                className="relative cursor-pointer flex-col items-center justify-center shadow-xl whitespace-nowrap text-center text-4xl"
                gradientColor={"#ffdce5"}
            >
                <div className="mb-4 flex flex-col items-center">
                    <FaLaptopCode className="text-[#c7056b] mb-2 text-4xl md:text-6xl" />
                    <h1 className="text-lg font-semibold mb-2 text-base md:text-lg">Website Development</h1>
                    <p className="text-sm text-gray-700 text-base md:text-sm">Our designers and developers will<br />create an attractive, SEO-friendly</p>
                    <Link href="#" className="text-xs mt-2 flex items-center hover:scale-110 duration-300">
                        Read More
                        <FaArrowRight className="ml-1 text-xs text-[#e80566]" />
                    </Link>
                </div>
                <Image
                    alt="service-bottom"
                    src="/images/service-bottom-shape.png"
                    width={70}
                    height={70}
                    className="absolute top-40 left-56 hidden lg:block"
                />
            </MagicCard>

            <MagicCard
                className="relative cursor-pointer flex-col items-center justify-center shadow-xl whitespace-nowrap text-center text-4xl"
                gradientColor={"#ffdce5"}
            >
                <div className="mb-4 flex flex-col items-center">
                    <GiSmartphone className="text-[#c7056b] mb-2 text-4xl md:text-6xl" />
                    <h1 className="text-lg font-semibold mb-2 text-base md:text-lg">App Development</h1>
                    <p className="text-sm text-gray-700 text-base md:text-sm">Progressively empower business<br />&quot;outside the box!&quot;thinking with</p>
                    <Link href="#" className="text-xs mt-2 flex items-center hover:scale-110 duration-300">
                        Read More
                        <FaArrowRight className="ml-1 text-xs text-[#e80566]" />
                    </Link>
                </div>
                <Image
                    alt="service-bottom"
                    src="/images/service-bottom-shape.png"
                    width={70}
                    height={70}
                    className="absolute top-40 left-56 hidden lg:block"
                />
            </MagicCard>
        </div>
    );
}
