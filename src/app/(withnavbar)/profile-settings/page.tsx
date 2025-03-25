'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import getUserProfile from '@/libs/getUserProfile';
import { editUser } from '@/app/actions/editUser';

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
            <div className="bg-white p-6 rounded-lg shadow-lg w-[350px]">
                <h1 className="text-center text-black text-lg mb-4">Edit Profile</h1>
                <form action={editUser}>

                        <div className="flex items-center w-1/2 my-2">
                            <label className="w-auto block text-gray-700 pr=4" htmlFor="name">Name</label>
                            <input type="text" required id="name" name="name" placeholder="Massage Name" 
                            className=" mx-2 bg-white border-2 border-gray-200 rounded w-full p-2
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
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">Add New Massage</button>
                    </form>
            </div>
        </main>
    );
}
