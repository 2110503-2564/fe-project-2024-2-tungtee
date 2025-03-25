'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import getUserProfile from '@/libs/getUserProfile';
import { editMassage } from '@/app/actions/editMassage';

export default function Page() {
    const [user, setUser] = useState<{ name: string; email: string } | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { data: session } = useSession();

    useEffect(() => {
        const fetchUser = async () => {
            if (!session || !session.user.token) {
                console.error("Session or token is missing.");
                return;
            }

            try {
                const profile = await getUserProfile(session.user.token);
                console.log("Profile data:", profile);

            } catch (error) {
                console.error('Error fetching user role:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUser();
    }, [session]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <main className="flex justify-center items-center h-screen mt-100">
                    <form action={editMassage}>
                        <div className="text-xl text-blue-700">Create Massage</div>
                        
                        <div className="flex items-center w-1/2 my-2">
                            <label className="w-auto block text-gray-700 pr=4" htmlFor="name">Name</label>
                            <input type="text" required id="name" name="name" placeholder="Massage Name" 
                            className=" mx-2 bg-white border-2 border-gray-200 rounded w-full p-2
                            text-gray-700 focus:outline-none focus:border-blue-400"/>
                        </div>
                        
                        <div className="flex items-center w-1/2 my-2">
                            <label className="w-auto block text-gray-700 pr=4" htmlFor="picture">Picture</label>
                            <input type="text" required id="picture" name="picture" placeholder="Link" 
                            className="mx-2 bg-white border-2 border-gray-200 rounded w-full p-2
                            text-gray-700 focus:outline-none focus:border-blue-400"/>
                        </div>

                        <div className="flex items-center w-1/2 my-2">
                            <label className="w-auto block text-gray-700 pr=4" htmlFor="address">Address</label>
                            <input type="text" required id="address" name="address" placeholder="Address" 
                            className="mx-2 bg-white border-2 border-gray-200 rounded w-full p-2
                            text-gray-700 focus:outline-none focus:border-blue-400"/>
                        </div>

                        <div className="flex items-center w-1/2 my-2">
                            <label className="w-auto block text-gray-700 pr=4" htmlFor="district">District</label>
                            <input type="number" required id="district" name="district" placeholder="District" 
                            className="mx-1 bg-white border-2 border-gray-200 rounded w-full p-2
                            text-gray-700 focus:outline-none focus:border-blue-400"/>
                        </div>

                        <div>
                            <label className="w-auto block text-gray-700 pr=4" htmlFor="tel">Province</label>
                            <input type="number" required id="tel" name="tel" placeholder="Province" 
                            className="mx-1 bg-white border-2 border-gray-200 rounded w-full p-2
                            text-gray-700 focus:outline-none focus:border-blue-400"/>
                        </div>

                        <div>
                            <label className="w-auto block text-gray-700 pr=4" htmlFor="province">Telephone</label>
                            <input type="number" required id="province" name="province" placeholder="Telephone" 
                            className="mx-1 bg-white border-2 border-gray-200 rounded w-full p-2
                            text-gray-700 focus:outline-none focus:border-blue-400"/>
                        </div>

                        <div>
                            <label className="w-auto block text-gray-700 pr=4" htmlFor="open">Open</label>
                            <input type="number" required id="open" name="open" placeholder="Telephone" 
                            className="mx-1 bg-white border-2 border-gray-200 rounded w-full p-2
                            text-gray-700 focus:outline-none focus:border-blue-400"/>
                        </div>

                        <div>
                            <label className="w-auto block text-gray-700 pr=4" htmlFor="clsoe">Close</label>
                            <input type="number" required id="clsoe" name="clsoe" placeholder="Telephone" 
                            className="mx-1 bg-white border-2 border-gray-200 rounded w-full p-2
                            text-gray-700 focus:outline-none focus:border-blue-400"/>
                        </div>
                        

                        <div className="flex items-center w-1/2 my-2">
                            <label className="w-auto block text-gray-700 pr=4" htmlFor="dayRate">Rate</label>
                            <input type="text" required id="dayRate" name="dayRate" placeholder="Daily Rate (including insurance)" 
                            className="mx-2 bg-white border-2 border-gray-200 rounded w-full p-2
                            text-gray-700 focus:outline-none focus:border-blue-400"/>
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">Add New Massage</button>
                    </form>
        </main>
    );
}
