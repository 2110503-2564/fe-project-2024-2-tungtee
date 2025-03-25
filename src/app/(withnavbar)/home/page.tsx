'use client';

import Footer from "@/components/home/page/Footer";
import FirstPage from "@/components/home/page/FirstPage";
import FourthPage from "@/components/home/page/FourthPage";
import SecondPage from "@/components/home/page/SecondPage";
import ThirdPage from "@/components/home/page/ThirdPage";

export default function Page() {
    return (
        <main className="relative w-full h-screen overflow-auto hide-scrollbar">
            
            <FirstPage/>
            <div className="h-36"></div>
            <SecondPage/>
            <div className="h-36"></div>
            <ThirdPage/>
            <div className="h-36"></div>
            <FourthPage/>
            <div className="h-36"></div>
            <Footer/>
            
        </main>
    );
}
