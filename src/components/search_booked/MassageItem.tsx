import Image from "next/image";

export default function MassageItem({ massName, imgSrc, province, open, close}: {massName:string, imgSrc:string, province:string, open:string, close:string}) {




    return (
        <div className="w-[20rem] h-full bg-white/10 overflow-hidden shadow-md text-white rounded-xl"> {/* ปรับขนาด w */}
            {/* Resort Image */}
            <div className="relative w-full h-[20rem]"> {/* ปรับขนาด h */}
                <Image
                    src={imgSrc}
                    alt="Mass Picture"
                    fill
                    className="object-cover rounded-xl"
                />
            </div>

            {/* Resort Info */}
            <div className="p-4">
                <p className="text-lg font-semibold">{massName}</p>
                <p className="text-sm text-white/70">{province}, Thailand </p>
                <p className="text-sm text-white/70 my-2">{open} - {close}</p>

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