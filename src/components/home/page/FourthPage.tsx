'use client';

import TopCard from "../components/TopCard";

export default function FourthPage() {
    return (
        <div className="w-screen h-auto flex flex-col items-center justify-between gap-10 pt-[100px] px-[155px]">
            {/* Header Section */}
            <div className="w-auto h-auto flex flex-col gap-5 my-20">
                <h1 className="text-[30pt] font-bold leading-tight text-center">
                    Our Most Amazing<br />
                    Visited Massage on 2024
                </h1>
                <p className="text-[12pt] text-center text-[#9A9A9A]">
                    Take a look at our best choices for the massages of the year. <br />
                    We picked these based on feedback from our amazing customers.
                </p>
            </div>

            {/* Cards Section */}
            <div className="w-full h-auto flex flex-row justify-between">
                {/* <TopCard massageName="Oasis" imgSrc="/img/home/topCard/secondCard.png" />
                <TopCard massageName="Oasis" imgSrc="/img/home/topCard/secondCard.png" />
                <TopCard massageName="Oasis" imgSrc="/img/home/topCard/secondCard.png" /> */}
            </div>
        </div>
    );
}
