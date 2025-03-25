'use client';

import { useEffect, useState } from 'react';
import MassageItem from '@/components/search_booked/MassageItem';
import Link from 'next/link';
import getMassages from '@/libs/getMassages';
import { MassageResponse } from '../../../../interfaces';

export default function MassPanel() {
    
    const [massResponse, setMassResponse] = useState<MassageResponse | null>(null); // กำหนด type


    useEffect(() => {
        const fetchData = async () => {
            const mass = await getMassages();
            setMassResponse(mass); // แก้ไขเป็น setMassResponse
        };
        fetchData();
    }, []);

    if (!massResponse) return <p>Massage is Loading ...</p>;

    return (
        <div>
            <div className='flex flex-row gap-3'>
                {massResponse.data.map((massItem) => (
                    <Link href={`/booking/${massItem.id}`} className="" key={massItem.id}>
                        <MassageItem massName={massItem.name} imgSrc={massItem.picture}
                        province={massItem.province} open={massItem.open} close={massItem.close} />
                    </Link>
                ))}
            </div>
        </div>
    );
}