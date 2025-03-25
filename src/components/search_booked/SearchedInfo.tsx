import { useEffect, useState } from "react";
import getMassages from "@/libs/getMassages";
import { MassageResponse } from "../../../interfaces";

export default function SearchedInfo() {
    const [massResponse, setMassResponse] = useState<MassageResponse | null>(null); // กำหนด type

    useEffect(() => {
        const fetchData = async () => {
            const mass = await getMassages();
            setMassResponse(mass);
        };
        fetchData();
    }, []);

    if (!massResponse) {
        return <p>Loading massages...</p>;
    }

    if (!massResponse.data || massResponse.data.length === 0) {
        return <p>No massages available.</p>;
    }

    return (
        <div className="flex flex-row justify-between items-end">
            <div className="flex flex-row items-center gap-1">
                <h2 className="text-md font-medium">{massResponse.data.length}</h2>
                <p className="text-md font-normal">massage available</p>
            </div>
            <div className="flex flex-row items-center gap-2">
                <p className="text-md font-normal">Sort by:</p>
                <h2 className="text-md font-medium">Best match</h2>
                <div className="w-5 h-5 bg-[#4A4A4A] rounded-md" />
            </div>
        </div>
    );
}