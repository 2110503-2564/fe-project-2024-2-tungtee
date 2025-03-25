'use client';

import Image from "next/image";

export default function FiveStarCard() {
    return (
        <div className="w-[30rem] bg-white/10 overflow-hidden shadow-md text-white"> {/* ปรับขนาด w */}
            {/* Resort Image */}
            <div className="relative w-full h-[20rem]"> {/* ปรับขนาด h */}
                <Image
                    src="/img/home/topCard/secondCard.png"
                    alt="Oasis Sands Resort"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Resort Info */}
            <div className="p-4">
                <p className="text-lg font-semibold">Oasis Sands Resort</p>
                <p className="text-sm text-white/70">Bangkok, Thailand</p>

                {/* Rating Row */}
                <div className="flex items-center gap-2 mt-2">
                    {/* Stars */}
                    <div className="flex text-yellow-400 text-base">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span className="text-white/30">★</span> {/* Empty star */}
                    </div>

                    {/* Visit Count */}
                    <p className="text-sm text-white/60">(1.8k Visited)</p>
                </div>
            </div>
        </div>
    );
}