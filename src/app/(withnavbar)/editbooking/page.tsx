'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import getUserProfile from '@/libs/getUserProfile';
import { editBooking } from '@/app/actions/editBooking';
import getBooking from '@/libs/getBooking'

export default function Page() {
    const [booking, setBooking] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { data: session } = useSession();

    const id = ""

    useEffect(() => {
        const fetchBooking = async () => {
            if (!session || !session.user.token) {
                console.error("Session or token is missing.");
                return;
            }

            try {
                const profile = await getBooking(id, session.user.token);
                console.log("Profile data:", profile);
                setBooking(profile.booking);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBooking();
    }, [session]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <main className='w-auto h-screen bg-white/5 mx-[8%] mt-[100px] flex flex-col gap-2 items-center'>
            <form action={editBooking} className='bg-white/5 p-6 w-1/3'>
                <div className="text-xl text-blue-700">Edit Booking</div>

                <div className="flex items-center my-2 w-full justify-between">
                    <label className="w-auto block text-gray-700 pr=4" htmlFor="name">ID</label>
                    <input
                        type="text"
                        name="_id"
                        placeholder="Booking ID"
                        defaultValue={booking?._id || ''}
                        className=" mx-2 bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus:outline-none focus:border-blue-400"
                    />
                </div>

                <div className="flex items-center my-2 w-full justify-between">
                    <label className="w-auto block text-gray-700 pr=4" htmlFor="name">Date</label>
                    <input
                        type="text"
                        name="apptDate"
                        placeholder="Appointment Date"
                        defaultValue={booking?.apptDate || ''}
                        className=" mx-2 bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus:outline-none focus:border-blue-400"
                    />
                </div>

                <div className="flex items-center my-2 w-full justify-between">
                    <label className="w-auto block text-gray-700 pr=4" htmlFor="name">Massage</label>
                    <input
                        type="text"
                        name="massage"
                        placeholder="Massage"
                        defaultValue={booking?.massage || ''}
                        className=" mx-2 bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus:outline-none focus:border-blue-400"
                    />
                </div>

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">Submit</button>
            </form>
        </main>
    );
}
