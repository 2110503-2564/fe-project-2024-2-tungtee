export default function SubHearderFilter({ title }: { title: string }) {
    return (
        <div className="flex flex-row justify-between items-end">
            <h2 className="text-md font-medium">{title}</h2>
            <div className="w-5 h-5 bg-[#4A4A4A] rounded-full mx-3" />
        </div>
    );
}
