'use client';

import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function Home() {
    const router = useRouter();

    return (
        <main className="flex flex-col items-center justify-center h-screen m-0 space-y-4">
            <div className="text-white text-2xl font-bold">MANAGE</div> {/* ขยายตัวอักษรและให้เป็นสีขาว */}
            
            <button
                type="button"
                className="text-[20px] px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition-all"
                onClick={() => router.push('/editbooking')}
            >
                EditBooking
            </button>

            <button
                type="button"
                className="text-[20px] px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition-all"
                onClick={() => router.push('/editmassage')}
            >
                EditMassage
            </button>

            <button
                type="button"
                className="text-[20px] px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition-all"
                onClick={() => router.push('/booked/editbooked')}
            >
                EditBooked
            </button>
        </main>
    );
}
