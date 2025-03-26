'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import getUserProfile from '@/libs/getUserProfile';
import { editUser } from '@/app/actions/editUser';

export default function Page() {
    const [user, setUser] = useState<{ _id: string; name: string; email: string; tel?: string } | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { data: session } = useSession();

    useEffect(() => {
        const fetchUser = async () => {
            if (!session || !session.user.token) {
                setError("Session or token is missing.");
                setIsLoading(false);
                return;
            }
    
            try {
                const profileResponse = await getUserProfile(session.user.token);
                console.log("Fetched Profile Data:", profileResponse);
    
                if (!profileResponse || !profileResponse.success || !profileResponse.data) {
                    console.error("Invalid profile response:", profileResponse);
                    setError("User profile is invalid.");
                    return;
                }
    
                const profile = profileResponse.data;
    
                if (!profile._id) {
                    console.error("User profile is missing _id!");
                    setError("User profile is invalid.");
                    return;
                }
    
                setUser({
                    _id: profile._id,  
                    name: profile.name || '',
                    email: profile.email || '',
                    tel: profile.tel || ''
                });
    
                console.log("Updated User State:", profile);
    
            } catch (error) {
                console.error("Error fetching user profile:", error);
                setError("Error fetching user profile.");
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
                <form action={editUser} className="gap-2">
                    <input type="hidden" name="_id" value={user?._id || ''} />

                    <div className="flex items-center w-1/2 my-2">
                        <label className="w-auto block text-gray-700 pr=4" htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name" 
                            defaultValue={user?.name}
                            className=" mx-2 bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label className="w-auto block text-gray-700 pr=4" htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Email" 
                            defaultValue={user?.email}
                            className="mx-1 bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label className="w-auto block text-gray-700 pr=4" htmlFor="tel">Telephone</label>
                        <input 
                            type="number" 
                            name="tel" 
                            placeholder="Telephone" 
                            defaultValue={user?.tel}
                            className="mx-1 bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
                        />
                    </div>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">
                        Submit
                    </button>
                </form>
            </div>
        </main>
    );
}
