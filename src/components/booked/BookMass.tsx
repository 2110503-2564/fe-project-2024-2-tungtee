'use client';
import { AppDispatch, useAppSelector, RootState } from "@/redux/store"; // Import RootState
import { useDispatch } from "react-redux";
import { removeBooking } from "@/redux/features/massSlice";
import { BookItem } from "../../../interfaces";

export default function BookMass() {
    const massItems = useAppSelector((state: RootState) => state.massSlice.massItems); // Corrected to massItems and RootState
    const dispatch = useDispatch<AppDispatch>();

    return (
        <>
            {massItems.map((item: BookItem) => (
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={item.id}>
                    <div className="text-xl">{item.name}</div>
                    <div className="text-sm">
                        Date: {item.bookDate}
                    </div>
                    <div className="text-sm">
                        Time: {item.bookTime}
                    </div>
                    <div className="text-md">Duration: {item.bookDuration} hours</div>
                    <button
                        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
                        onClick={() => dispatch(removeBooking(item))}
                    >
                        Delete Book
                    </button>
                </div>
            ))}
        </>
    );
}