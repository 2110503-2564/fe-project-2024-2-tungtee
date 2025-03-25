'use client';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Select, MenuItem } from '@mui/material';

export default function LocationDateReserve({
    onDateChange,
    onBookTimeChange,
    onDurationChange,
}: {
    onDateChange: Function;
    onBookTimeChange: Function;
    onDurationChange: Function;
}) {
    const [bookDate, setBookDate] = useState<Dayjs | null>(dayjs());
    const [bookTime, setBookTime] = useState<Dayjs | null>(dayjs());
    const [duration, setDuration] = useState('1');

    return (
        <div className="w-full h-auto bg-[#1C1C1C] rounded-xl p-6 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <label htmlFor="bookingDate" className="text-sm text-white/70">Date</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        className="w-full h-full px-4 py-3 rounded-md bg-white/20 border border-white/30 placeholder-white/70 text-white" // เพิ่ม text-white
                        value={bookDate}
                        onChange={(value) => {
                            setBookDate(value);
                            onDateChange(value);
                        }}
                        sx={{
                            "& .MuiInputBase-input": { color: "white" }, // เปลี่ยนสีตัวอักษรเป็นขาว
                            "& .MuiSvgIcon-root": { color: "white" }, // เปลี่ยนสีไอคอน (นาฬิกา)
                        }}
                    />
                </LocalizationProvider>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="bookingTime" className="text-sm text-white/70">Time</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                        className="w-full h-full px-4 py-3 rounded-md bg-white/20 border border-white/30 placeholder-white/70 text-white" // เพิ่ม text-white
                        value={bookTime}
                        onChange={(value) => {
                            setBookTime(value);
                            onBookTimeChange(value);
                        }}
                        sx={{
                            "& .MuiInputBase-input": { color: "white" }, // เปลี่ยนสีตัวอักษรเป็นขาว
                            "& .MuiSvgIcon-root": { color: "white" }, // เปลี่ยนสีไอคอน (นาฬิกา)
                        }}

                    />
                </LocalizationProvider>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="bookingHours" className="text-sm text-white/70">Duration</label>
                <Select
                    variant="standard"
                    name="duration"
                    id="duration"
                    value={duration}
                    onChange={(e) => {
                        setDuration(e.target.value);
                        onDurationChange(e.target.value);
                    }}
                    className="w-full h-auto px-4 py-3 rounded-md bg-white/20 border border-white/30 placeholder-white/70 text-white" // เพิ่ม text-white
                    sx={{
                        color: "white", // ให้ตัวอักษรเป็นสีขาว
                        "& .MuiSvgIcon-root": { color: "white" }, // ทำให้ไอคอนลูกศรเป็นสีขาว
                    }}
                >

                    <MenuItem value="1" className="text-black">1</MenuItem>
                    <MenuItem value="2" className="text-black">2</MenuItem>
                    <MenuItem value="3" className="text-black">3</MenuItem>
                    <MenuItem value="4" className="text-black">4</MenuItem>
                    <MenuItem value="5" className="text-black">5</MenuItem>
                    <MenuItem value="6" className="text-black">6</MenuItem>
                </Select>
            </div>
        </div>
    );
}