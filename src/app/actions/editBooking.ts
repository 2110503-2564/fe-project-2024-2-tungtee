"use server";

import Booking from "@/db/models/Booking";
import { dbConnect } from "@/db/dbConnect";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOption";
import getUserProfile from "@/libs/getUserProfile";

export async function editBooking(editBookForm: FormData): Promise<void> {
    const session = await getServerSession(authOptions);
    console.log("Session in editBooking:", session);

    if (!session || !session.user.token) return;

    const profile = await getUserProfile(session.user.token);

    const bookingId = editBookForm.get("_id") as string | null;

    if (!bookingId) {
        console.error("Booking ID is missing.");
        return;
    }

    try {
        // Connect to the database
        await dbConnect();

        // Fetch the booking from the database
        const booking = await Booking.findById(bookingId).populate('user');

        if (!booking) {
            console.error("Booking not found.");
            return;
        }

        console.log(booking.user._id.toString() + " and " + profile.data._id);

        if (profile.data.role !== 'admin' && booking.user._id.toString() !== profile.data._id) {
            console.error('You do not have permission to edit this booking.');
            return;
        }

        const updates: {
            apptDate?: Date;
            massage?: string;
        } = {};

        const apptDate = editBookForm.get("apptDate") as string | null;
        const massage = editBookForm.get("massage") as string | null;

        if (apptDate) updates.apptDate = new Date(apptDate);
        if (massage) updates.massage = massage;

        const updatedBooking = await Booking.findByIdAndUpdate(bookingId, updates, { new: true });

        if (!updatedBooking) {
            console.error("Error updating booking.");
            return;
        }

        console.log("Updated booking:", updatedBooking);

        // Revalidate and redirect
        revalidateTag("bookings");
        redirect("/search");

    } catch (error) {
        console.error("Error updating booking:", error);
    }
}
