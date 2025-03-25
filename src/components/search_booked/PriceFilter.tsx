export default function PriceFilter() {
    return (
        <div className="flex flex-row justify-between items-center">
            <div className="w-full h-8 bg-[#4A4A4A] rounded-md mx-3 flex items-center px-2">
                <p className="text-xs font-normal">From:</p>
            </div>
            <div className="w-1/5 flex-grow h-1 bg-[#4A4A4A] rounded-full"></div>
            <div className="w-full h-8 bg-[#4A4A4A] rounded-md mx-3 flex items-center px-2">
                <p className="text-xs font-normal">Up To:</p>
            </div>
        </div>
    );
}


