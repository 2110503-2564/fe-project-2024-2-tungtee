'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import getUserProfile from '@/libs/getUserProfile';
import { editMassage } from '@/app/actions/editMassage';
import getMassage from '@/libs/getMassage';

export default function Page() {
    const [massage, setMassage] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { data: session } = useSession();

    const id = "" 

    if(!session) return ( <div></div>)

    useEffect(() => {
        const fetchMassage = async () => {
            if (!session || !session.user.token) {
                console.error("Session or token is missing.");
                return;
            }

            try {
                const profile = await getMassage(id);
                console.log("Profile data:", profile);
                setMassage(profile.massage);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMassage();
    }, [session]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <main className='w-auto h-screen bg-white/5 mx-[8%] mt-[100px] flex flex-col gap-2 items-center'>
            <form action={editMassage} className='bg-white/5 p-6 w-1/3'>
                <div className="text-xl text-blue-700">Edit Massage</div>

                <div className="flex items-center my-2 w-full justify-between">
                    <label className="w-auto block text-gray-700 pr=4" htmlFor="name">ID</label>
                    <input
                        type="text"
                        name="_id"
                        placeholder="Massage ID"
                        defaultValue={massage?._id || ''}
                        className=" mx-2 bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus:outline-none focus:border-blue-400"
                    />
                </div>

                <div className="flex items-center my-2 w-full justify-between">
                    <label className="w-auto block text-gray-700 pr=4" htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Massage Name"
                        defaultValue={massage?.name || ''}
                        className=" mx-2 bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus:outline-none focus:border-blue-400"
                    />
                </div>

                <div className="flex items-center my-2 w-full justify-between">
                    <label className="w-auto block text-gray-700 pr=4" htmlFor="name">Picture</label>
                    <input
                        type="text"
                        name="picture"
                        placeholder="Massage Picture"
                        defaultValue={massage?.picture || ''}
                        className=" mx-2 bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus:outline-none focus:border-blue-400"
                    />
                </div>

                <div className="flex items-center my-2 w-full justify-between">
                    <label className="w-auto block text-gray-700 pr=4" htmlFor="name">Address</label>
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        defaultValue={massage?.address || ''}
                        className=" mx-2 bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus:outline-none focus:border-blue-400"
                    />
                </div>

                <div className="flex items-center my-2 w-full justify-between">
                    <label className="w-auto block text-gray-700 pr=4" htmlFor="name">District</label>
                    <input
                        type="text"
                        name="district"
                        placeholder="District"
                        defaultValue={massage?.district || ''}
                        className=" mx-2 bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus:outline-none focus:border-blue-400"
                    />
                </div>

                <div className="flex items-center my-2 w-full justify-between">
                    <label className="w-auto block text-gray-700 pr=4" htmlFor="name">Province</label>
                    <input
                        type="text"
                        name="province"
                        placeholder="Province"
                        defaultValue={massage?.province || ''}
                        className=" mx-2 bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus:outline-none focus:border-blue-400"
                    />
                </div>

                <div className="flex items-center my-2 w-full justify-between">
                    <label className="w-auto block text-gray-700 pr=4" htmlFor="name">Telephone</label>
                    <input
                        type="text"
                        name="tel"
                        placeholder="Telephone"
                        defaultValue={massage?.tel || ''}
                        className=" mx-2 bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus:outline-none focus:border-blue-400"
                    />
                </div>

                <div className="flex items-center my-2 w-full justify-between">
                    <label className="w-auto block text-gray-700 pr=4" htmlFor="name">Open</label>
                    <input
                        type="text"
                        name="open"
                        placeholder="Open time"
                        defaultValue={massage?.open || ''}
                        className=" mx-2 bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus:outline-none focus:border-blue-400"
                    />
                </div>

                <div className="flex items-center my-2 w-full justify-between">
                    <label className="w-auto block text-gray-700 pr=4" htmlFor="name">Close</label>
                    <input
                        type="text"
                        name="close"
                        placeholder="Close time"
                        defaultValue={massage?.close || ''}
                        className=" mx-2 bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus:outline-none focus:border-blue-400"
                    />
                </div>

                <div className="flex items-center my-2 w-full justify-between">
                    <label className="w-auto block text-gray-700 pr=4" htmlFor="name">Hour Rate</label>
                    <input
                        type="text"
                        name="close"
                        placeholder="Hour Rate"
                        defaultValue={massage?.close || ''}
                        className=" mx-2 bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus:outline-none focus:border-blue-400"
                    />
                </div>

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">Submit</button>
            </form>
        </main>
    );
}
