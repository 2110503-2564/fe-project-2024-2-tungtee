'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation'; // เพิ่ม useRouter

export default function TopCard({ massageName, imgSrc, id }: { massageName: string; imgSrc: string; id:string }) {
    const router = useRouter(); // เรียกใช้งาน useRouter

    function onCardClick() {
        router.push(`/booking/${id}`);
    }

    return (
        <div className="w-72 h-96 rounded-2xl overflow-hidden shadow-md text-white relative my-10 cursor-pointer" // เพิ่ม cursor-pointer และ onClick
            onClick={onCardClick}
        >
            {/* Image with overlay content inside */}
            <Image
                src={imgSrc}
                alt="Second Card Image"
                fill
                className="object-cover"
            />

            {/* Overlay info */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="texหt-lg font-semibold">Oasis Sands Resort</p>
                <p className="text-sm text-white/70">Bangkok, Thailand </p>

                <div className="flex items-center gap-2 mt-2">
                    <div className="flex text-yellow-400 text-base">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span className="text-white/30">★</span>
                    </div>
                    <p className="text-sm text-white/60">(1.8k Visited)</p>
                </div>
            </div>
        </div>
    );
}