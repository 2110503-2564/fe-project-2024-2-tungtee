'use client';

import ViewMoreButton from "../components/ViewMoreButton";
import FiveStarCard from "../components/FiveStarCard";

export default function ThirdPage() {
    return (
        <div className="w-screen h-auto flex flex-col items-center justify-between gap-10 pt-[100px] px-[155px]">
            {/* Header Section */}
            <div className="w-full h-auto flex flex-row gap-2">
                <h1 className="text-[40pt] font-bold leading-tight">
                    Explore Our Best List<br />
                    <div className="flex flex-row items-end gap-5">
                        <h1>5-Stars Massage</h1>
                        <p className="text-[15pt] font-normal text-[#9A9A9A] px-12 py-1 tracking-wide">
                            We understand that every visitor has different preference. That’s why our platform’s good
                        </p>
                    </div>
                </h1>
            </div>

            {/* Cards Section */}
            <div className="w-full h-auto flex flex-wrap justify-between my-7">
                <FiveStarCard/>
                <FiveStarCard/>
                <FiveStarCard/>
                <FiveStarCard/>
                <FiveStarCard/>
                <FiveStarCard/>
            </div>

            <div>
                <ViewMoreButton title="View More" pageRef="/massage" />
            </div>
        </div>
    );
}