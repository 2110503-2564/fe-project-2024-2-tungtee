import Link from "next/link";

export default function SignIn( {title, pageRef} : {title:string, pageRef:string}) {
    return (
        <Link href={pageRef} className={`text-center my-auto font-inter text-[13pt] font-normal text-[#FAFAFA] py-[12px] px-[20px] rounded-full border border-[#FAFAFA]`}>
            {title}
        </Link>
    );
}