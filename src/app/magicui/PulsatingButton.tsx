import PulsatingButton from "@/components/ui/pulsating-button";
import Link from "next/link";
export function PulsatingButtonDemo() {
    return <PulsatingButton >
        <Link href={"/contactus"}>
            Get Started Now
        </Link>
    </PulsatingButton>;
}
