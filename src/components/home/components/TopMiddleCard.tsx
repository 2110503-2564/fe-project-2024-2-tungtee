'use client';

import Image from "next/image";

export default function TopMiddleCard() {
    return (
        <div className="w-[400px] h-[600px] rounded-2xl overflow-hidden shadow-md text-white relative">
            {/* Image with overlay content inside */}
            <Image
                src="/img/home/topCard/secondCard.png"
                alt="Second Card Image"
                fill
                className="object-cover"
            />

            {/* Overlay info */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-lg font-semibold">Oasis Sands Resort</p>
                <p className="text-sm text-white/70">Bangkok, Thailand</p>

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