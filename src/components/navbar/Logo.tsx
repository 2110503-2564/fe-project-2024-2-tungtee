import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href = "/home" className = "flex items-center h-16 gap-[12px] text-[12pt] font-bold">
            <Image src="/img/home/logo.png"
                alt = "Logo"
                width = {40}
                height = {40}
                className = "h-auto w-auto"
            />
            TungTEE
        </Link>
    );
}