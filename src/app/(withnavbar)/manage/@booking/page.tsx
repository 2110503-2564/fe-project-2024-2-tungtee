'use client';

import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOption";
import getUserProfile from "@/libs/getUserProfile"
import Massage from "@/db/models/Massage"
import { dbConnect } from "@/db/dbConnect"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export default async function AdminAddBooking() {

    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null 

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)


    if (!profile) return <div>Loading...</div>;  // Handle loading state

    return (
        <main>
            {
                profile.data.role === "admin" ? (
                    <form>
                        {/* Add your form fields here */}
                        <label htmlFor="bookingName">Booking Name:</label>
                        <input type="text" id="bookingName" name="bookingName" required />
                        
                        <label htmlFor="date">Booking Date:</label>
                        <input type="date" id="date" name="date" required />
                        
                        <label htmlFor="time">Booking Time:</label>
                        <input type="time" id="time" name="time" required />

                        <button type="submit">Add Booking</button>
                    </form>
                ) : (
                    <p>You do not have admin privileges to add a booking.</p>
                )
            }
        </main>
    );
}
