'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink( {title, pageRef} : {title:string, pageRef:string}) {

    const pathname = usePathname();
    const isActive = pathname === pageRef;

    return (
        <Link href={pageRef} className='flex flex-col items-center gap-[4px] text-center text-[13pt] font-inter font-normal text-[#FAFAFA]'>
            <div className='h-[3px] w-[24px] rounded-full'/>
            {title}
            <div className={`h-[3px] w-[24px] rounded-full transition-all duration-300 ${isActive ? 'bg-white' : 'bg-transparent'}`}/>
        </Link>
    );

}