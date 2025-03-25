import Link from "next/link";
import Image from "next/image";

export default function BacktoWebsiteButton() {
    return (
        <Link
            href="/home"
            className="inline-flex items-center gap-2 bg-[#FAFAFA] text-[#0C0C0C] font-inter text-[15pt] font-normal py-[12px] px-[20px] rounded-full border border-[#FAFAFA] shadow-md hover:bg-white transition"
        >
            <span>Back to Website</span>
            <Image
                src="/svg/signin_register/Chevron_Right.svg"
                alt="Back arrow"
                width={20}
                height={20}
            />
        </Link>
    );
}
