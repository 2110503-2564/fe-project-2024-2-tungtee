import Link from "next/link";

export default function BookNowButton({ title, pageRef }: { title: string; pageRef: string }) {
    return (
        <Link href={pageRef} className="inline-block w-fit bg-[#FAFAFA] text-center font-inter text-[15pt] font-normal text-[#0C0C0C] py-[12px] px-[20px] rounded-full border border-[#FAFAFA]">
            {title}
        </Link>
    );
}
