'use client';

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import SwitchPage from "@/components/signin_register/SwitchPage";
import Banner from "@/components/signin_register/Banner";
import BacktoWebsiteButton from "@/components/signin_register/BacktoWebsiteButton";
import Logo from "@/components/navbar/Logo";

export default function SignOutPage() {
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut({ callbackUrl: '/' }); // Redirect after logout
    };

    return (
        <main className="relative w-full h-screen flex flex-row overflow-auto bg-[#0C0C0C] text-white">
            <div className="relative w-1/2 h-full">
                <Banner />
                <div className="absolute top-6 right-6 z-20">
                    <BacktoWebsiteButton />
                </div>
                <div className="absolute mx-11 top-5 z-20">
                    <Logo />
                </div>
            </div>

            <div className="w-1/2 h-full flex flex-col px-[153px] py-[122px] justify-center">
                <h1 className="text-[64px] font-bold mb-4">Leaving Already?</h1>
                <p className="text-[18px] mb-10 text-white/70">
                    We hope to see you again soon!
                </p>

                <button
                    onClick={handleSignOut}
                    className="text-[20px] h-[72px] bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-100 transition-all"
                >
                    Sign Out
                </button>

                <div className="text-sm text-white/60 mt-6 flex items-center gap-2">
                    Changed your mind?
                    <SwitchPage title="Go back to Home" pageRef="/home" />
                </div>
            </div>
        </main>
    );
}
