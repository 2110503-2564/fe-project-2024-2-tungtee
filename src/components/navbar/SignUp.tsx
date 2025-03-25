import Link from "next/link";

export default function SignUp( {title, pageRef} : {title:string, pageRef:string}) {
    return (
        <Link href={pageRef} className={`bg-[#FAFAFA] text-center my-auto font-inter text-[13pt] font-normal text-[#0C0C0C] py-[12px] px-[20px] rounded-full border border-[#FAFAFA]`}>
            {title}
        </Link>
    );
}