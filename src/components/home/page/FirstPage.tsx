'use client';

import Image from "next/image";
import BookNowButton from "../components/BookNowButton";

export default function FirstPage() {
    return (
        <div className="relative w-screen h-screen overflow-hidden">
            {/* Background Image */}
            <Image
                src="/img/home/background.png"
                alt="Background"
                fill
                className="object-cover z-[-2]"
                priority
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/33 z-[-1]" />

            {/* Foreground Content */}
            <div className="relative w-full h-full flex flex-row items-center justify-between gap-2 pt-[100px] px-[155px] text-white">
                {/* Left Block */}
                <div className="w-auto h-4/5 flex flex-col gap-20">
                    <div>
                        <h1 className="text-[95pt] font-medium leading-tight">
                            Stay Relaxed,<br />
                            and Heal Deeply
                        </h1>
                        <p className="text-[15pt] mt-4">
                            Book your perfect spa experience effortlessly.<br />
                            Relax, heal, and rejuvenate with just a click!
                        </p>
                    </div>
                    <BookNowButton title="Book Now" pageRef="/search" />
                </div>

                {/* Right Stats Block */}
                <div className="w-auto h-4/5 flex flex-col gap-10">
                    <div>
                        <p className="text-[40pt] font-semibold">8.1k+</p>
                        <p className="text-[17pt]">Successful Bookings</p>
                    </div>
                    <div>
                        <p className="text-[40pt] font-semibold">6.8k+</p>
                        <p className="text-[17pt]">Satisfied Customers</p>
                    </div>
                    <div>
                        <p className="text-[40pt] font-semibold">4.2⭐-</p>
                        <p className="text-[17pt]">Reviewed</p>
                    </div>
                </div>
            </div>
        </div>
    );
}