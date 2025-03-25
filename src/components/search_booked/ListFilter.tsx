export default function ListFilter( {title} : {title:string} ) {
    return (
        <div className="flex flex-row items-center">
            <div className="w-5 h-5 bg-[#4A4A4A] rounded-md mx-3" />
            <p className="text-md font-normal">{title}</p>
        </div>
    );
}
