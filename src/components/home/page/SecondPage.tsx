'use client';

import TopCard from "../components/TopCard";
import TopMiddleCard from "../components/TopMiddleCard";
import ViewMoreButton from "../components/ViewMoreButton";

export default function SecondPage() {
    return (
        <div className="w-screen h-auto flex flex-col items-center gap-52 pt-[100px] px-[400px]">
            {/* Header Section */}
            <div className="w-auto h-auto flex flex-col gap-5">
                <h1 className="text-[30pt] font-bold leading-tight text-center">
                    Our Most Amazing<br />
                    Visited Massage on 2024
                </h1>
                <p className="text-[15pt] text-center text-[#9A9A9A]">
                    Take a look at our best choices for the massages of the year. <br />
                    We picked these based on feedback from our amazing customers.
                </p>
            </div>

            {/* Cards Section */}
            <div className="w-full h-auto flex flex-row justify-between items-end">
                <TopCard massageName="Oasis" imgSrc="/img/home/topCard/secondCard.png" id="67e087004a96583049e80ed5" />
                <TopMiddleCard />
                <TopCard massageName="Oasis" imgSrc="/img/home/topCard/secondCard.png" id="67e087004a96583049e80ed5"/>
            </div>

            
        </div>
    );
}

