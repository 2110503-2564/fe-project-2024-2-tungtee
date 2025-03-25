import Link from "next/link";

export default function ViewMoreButton({ title, pageRef }: { title: string; pageRef: string }) {
    return (
        <Link href={pageRef} className="inline-block w-fit bg-[#FAFAFA] text-center font-inter text-[13pt] font-normal text-[#0C0C0C] py-[13px] px-[110px] rounded-full border border-[#FAFAFA]">
            {title}
        </Link>
    );
}
