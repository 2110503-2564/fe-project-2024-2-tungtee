import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookItem } from "../../../interfaces";

type MassState = {
    massItems: BookItem[]; // Corrected to massItems
};

const initialState: MassState = { massItems: [] };

export const massSlice = createSlice({
    name: "mass",
    initialState,
    reducers: {
        addBooking: (state, action: PayloadAction<BookItem>) => {
            state.massItems.push(action.payload);
        },
        removeBooking: (state, action: PayloadAction<BookItem>) => {
            const remainItems = state.massItems.filter((obj) => {
                return (
                    obj.name !== action.payload.name ||
                    obj.bookDate !== action.payload.bookDate ||
                    obj.bookTime !== action.payload.bookTime
                );
            });
            state.massItems = remainItems;
        },
    },
});

export const { addBooking, removeBooking } = massSlice.actions;
export default massSlice.reducer;