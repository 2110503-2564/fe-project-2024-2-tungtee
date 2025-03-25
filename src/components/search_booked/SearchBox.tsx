
export default function SearchBox() {

    

    return (
        <div className="w-full h-auto bg-[#1C1C1C] rounded-xl flex flex-row gap-4 p-4">
            <div className="w-full h-8 bg-[#2C2C2C] rounded-md flex items-center px-4 py-6 gap-2">
                <div className="w-5 h-5 bg-[#4A4A4A] rounded-full" />
                <p className="text-xs font-normal">Location</p>
            </div>
            <div className="w-1/2 h-8 bg-[#2C2C2C] rounded-md flex items-center px-4 py-6 gap-2">
                <div className="w-5 h-5 bg-[#4A4A4A] rounded-full" />
                <p className="text-xs font-normal">Date & Time</p>
            </div>
            <div className="w-1/3 h-8 bg-[#2C2C2C] rounded-md flex items-center px-4 py-6 gap-2">
                <div className="w-5 h-5 bg-[#4A4A4A] rounded-full" />
                <p className="text-xs font-normal">Person</p>
            </div>
            <div className="w-1/4 h-8 bg-[#FAFAFA] rounded-md flex items-center justify-center px-4 py-6 gap-2">
                <div className="w-5 h-5 bg-[#4A4A4A] rounded-full" />
                <p className="text-md font-bold text-[#0C0C0C]">Search</p>
            </div>
        </div>
    );
}


