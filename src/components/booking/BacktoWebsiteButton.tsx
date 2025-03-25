import Link from "next/link";
import Image from "next/image";

export default function BacktoWebsiteButton() {
    return (
        <Link
            href="/search"
            className="w-fit inline-flex items-center gap-2 text-[#FAFAFA] font-inter text-[15pt] font-normal py-[12px]"
        >
            <Image
                src="/svg/booking/Chevron_Left.svg"
                alt="Back arrow"
                width={20}
                height={20}
                />
            <span>Back to Website</span>
        </Link>
    );
}
