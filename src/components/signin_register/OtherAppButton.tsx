export default function OtherAppButton( {title, iconpath} : {title:string, iconpath:string}) {
    return (
        <div className="w-full h-[72px] flex items-center justify-center bg-[#1C1C1C] border-2 border-[#9A9A9A] rounded-lg px-4 py-2 text-white">
            <div className="w-5 h-5 bg-[#4A4A4A] rounded-full mr-3" />
            <span className="text-base">{title}</span>
        </div>
    );
}
