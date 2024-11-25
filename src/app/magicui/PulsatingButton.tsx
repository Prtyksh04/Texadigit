import PulsatingButton from "@/components/ui/pulsating-button";
import Link from "next/link";
export function PulsatingButtonDemo() {
    return <PulsatingButton className="bg-[#ff0687]">
        <Link href={"/contactus"}>
            Get Started Now
        </Link>
    </PulsatingButton>;
}
