'use client';

import { useState, useEffect } from "react";
import getBookings from "@/libs/getBookings";
import { useSession } from "next-auth/react";
import dayjs, { Dayjs } from "dayjs";
import { BookItem } from "../../../interfaces";
import updateBooking from "@/libs/updateBooking";
import { ToastContainer, toast } from "react-toastify";
import deleteBooking from "@/libs/deleteBooking";
import LocationDateReserve from "@/components/booking/LocationDateReserve"; // ใช้ LocationDateReserve

export default function BookingList() {
    const [items, setItems] = useState<any>({ data: [] });
    const [loading, setLoading] = useState(true);
    const { data: session } = useSession();
    const [apptDate, setApptDate] = useState<Map<string, Dayjs>>(new Map());
    const [bookTime, setBookTime] = useState<Map<string, Dayjs>>(new Map());
    const [bookDuration, setBookDuration] = useState<Map<string, string>>(new Map());

    if (!session) return (<div></div>);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await getBookings(session.user.token);
                if (!response.success) throw new Error("Failed to fetch data.");
                setItems(response);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchItems();
    }, []);

    const handleUpdateBooking = async (bookingId: string) => {
        if (session) {
            const time = bookTime.get(bookingId);
            const formattedTime = time ? time.format("HH:mm") : "00:00"; // ให้ค่า default หรือแสดงข้อความ error
    
            const response = await updateBooking(
                bookingId,
                session.user.token,
                apptDate.get(bookingId)?.format("YYYY-MM-DD") || "",
                bookTime.get(bookingId)?.format("HH:mm") || "",
                bookDuration.get(bookingId) || ""
            );
            
            if (response.success === true) {
                toast.success("Update Booking Successfully.");
            } else toast.error(response.message ? response.message : `An Error has occurred while update booking.`);
        } else toast.error("Invalid Date or Session.");
    };

    const handleDeleteBooking = async (bookingId: string) => {
        if (session) {
            const response = await deleteBooking(bookingId, session.user.token);
            if (response.success === true) {
                toast.success("Delete Booking Successfully.");
            } else toast.error(response.message ? response.message : `An Error has occurred while delete booking.`);

            window.location.reload(); // รีเฟรชหน้าเว็บ
        } else toast.error("Invalid Session.");
    };

    if (loading) return (<div>Loading...</div>);

    if (items && items.data && items.data.length > 0 && apptDate.size == 0) {

        const initialApptDateMapState = new Map<string, Dayjs>();
        const initialBookTimeMapState = new Map<string, Dayjs>();
        const initialBookDurationState = new Map<string, string>();

        items.data.map((item: BookItem) => {
            initialApptDateMapState.set(item._id, dayjs(new Date(item.apptDate)));
            initialBookTimeMapState.set(item._id, dayjs(new Date(item.bookTime)));
            initialBookDurationState.set(item._id, String(item.bookDuration));
        });

        setApptDate(initialApptDateMapState);
        setBookTime(initialBookTimeMapState);
        setBookDuration(initialBookDurationState);
    }

    return (
        <div>
            {items && items.data && items.data.length === 0 ? (
                <div className="mt-[5%] text-4xl text-center text-white">No Booking.</div>
            ) : items && items.data && items.data.map((item: BookItem) => (
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2 text-black" key={item._id}>
                    <div className="text-xl">{item.massage.name}</div>
                    <div className="text-sm">Date: {item.apptDate}</div>
                    <div className="text-sm">Time: {item.bookTime}</div>
                    <div className="text-md">Duration: {item.bookDuration} hours</div>
                    <div className="flex flex-row gap-3">
                        <div>
                            <div className="text-md text-black">Appt Date</div>
                            <LocationDateReserve
                                onDurationChange={(value: string) => {
                                    setBookDuration(prev => new Map(prev).set(item._id, value));
                                }}
                                onDateChange={(value: Dayjs) => {
                                    setApptDate(prev => new Map(prev).set(item._id, value));
                                }}
                                onBookTimeChange={(value: Dayjs) => {
                                    setBookTime(prev => new Map(prev).set(item._id, value));
                                }}
                            />
                        </div>
                        
                        
                    </div>
                    <div className="flex flex-row gap-2 mt-[3px]">
                        <button
                            className="block rounded-md bg-lime-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm duration-300"
                            onClick={() => handleUpdateBooking(item._id)}
                        >
                            Update
                        </button>
                        <button
                            className="block rounded-md bg-red-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm duration-300"
                            onClick={() => handleDeleteBooking(item._id)}
                        >
                            Delete
                            
                        </button>
                    </div>
                </div>
            ))}
            <ToastContainer />
        </div>
    );
}