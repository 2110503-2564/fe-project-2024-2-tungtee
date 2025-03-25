'use client';

import Image from 'next/image';
import BacktoWebsiteButton from '@/components/booking/BacktoWebsiteButton';
import LocationDateReserve from '@/components/booking/LocationDateReserve';
import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect, useCallback } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { addBooking } from '@/redux/features/massSlice';
import { MassItem, BookItem } from '../../../../../interfaces';
import getMassage from '@/libs/getMassage';
import Footer from '@/components/footer/Footer';
import { dbConnect } from '@/db/dbConnect';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import Booking from '@/db/models/Booking';


export default function Page({ params }: { params: { mid: string } }) {


    interface MassageResponse {
        success: boolean;
        data: MassItem;
    }

    const [massageDetail, setMassageDetail] = useState<MassageResponse | null>(null);
    const [selectedInput, setSelectedInput] = useState<string | null>(null);
    const dispatch = useDispatch<AppDispatch>();

    const [bookDate, setBookDate] = useState<Dayjs | null>(dayjs)
    const [bookTime, setBookTime] = useState<Dayjs | null>(dayjs)
    const [duration, setDuration] = useState<string>("1")


    
    const makeBooking = async () => {
        alert("🛒 makeBooking ถูกเรียกแล้ว!"); // Debug ตรงนี้

        const { mid } = params;
        const massageName = massageDetail?.data?.name; // แทนที่การใช้ name


        if (mid && massageName && bookDate && duration && bookTime) {
            const item: BookItem = {
                id: mid,
                name: massageName,
                bookDate: dayjs(bookDate).format("YYYY/MM/DD"),
                bookTime: dayjs(bookTime).format("HH:mm"),
                bookDuration: duration
            }
            dispatch(addBooking(item))

            alert("📦 ส่งข้อมูลไปที่ Redux: " + JSON.stringify(item))

            
        } else {
            alert("⚠️ ข้อมูลไม่ครบ! ตรวจสอบค่า mid:" + JSON.stringify(mid))
            alert("⚠️ ข้อมูลไม่ครบ! ตรวจสอบค่า mid:" + JSON.stringify(massageName))
            alert("⚠️ ข้อมูลไม่ครบ! ตรวจสอบค่า mid:" + JSON.stringify(bookDate))
            alert("⚠️ ข้อมูลไม่ครบ! ตรวจสอบค่า mid:" + JSON.stringify(duration))
            alert("⚠️ ข้อมูลไม่ครบ! ตรวจสอบค่า mid:" + JSON.stringify(bookTime))
        }
    }

    // const addBookingtoWeb = async (addBookForm: FormData) => {
    //     "use server"
    //     const apptDate = addBookForm.get("name")
    //     const user = addBookForm.get("user")
    //     const massage = addBookForm.get("massage")
    //     const createdAt = addBookForm.get("createdAt")

    //     try {
    //         await dbConnect()
    //         const book = await Booking.create({
    //             "apptDate": apptDate,
    //             "user": user,
    //             "massage": massage,
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }
    //     revalidateTag("books")
    //     redirect("/home")
    // }

    useEffect(() => {
        const fetchMassageDetail = async () => {
            try {
                const response = await getMassage(params.mid);
                setMassageDetail(response);
            } catch (error) {
                console.error('Error fetching massage detail:', error);
            }

        };

        fetchMassageDetail();
    }, [params.mid]);

    const massageItem = massageDetail?.data;


    const handleFocus = useCallback((inputName: string) => {
        setSelectedInput(inputName);
    }, []);

    const handleAddPaymentClick = useCallback(() => {
        alert('Add new payment method clicked!');
    }, []);

    const getInputClass = useCallback(
        (name: string) => {
            return `w-full h-[72px] px-4 py-3 rounded-md border text-white placeholder-white/70 transition-all ${selectedInput === name ? 'bg-white/30 border-white' : 'bg-white/20 border-white/30'
                } cursor-pointer`;
        },
        [selectedInput]
    );

    if (!massageItem) {
        return <p>Loading...</p>;
    }




    return (
        <form
            // onSubmit={handleSubmit} // You can define this function
            className="w-full h-screen overflow-auto hide-scrollbar pt-[100px] px-[8%] flex flex-col gap-8"
        >
            <BacktoWebsiteButton />

            <h1 className="text-3xl font-bold">Checkout</h1>

            <div className="w-full h-auto gap-8 flex flex-row">

                <div className="w-full h-auto flex flex-col gap-8">

                    {/* Personal Details */}
                    <div className="w-full h-auto bg-[#1C1C1C] rounded-xl p-6 flex flex-col gap-4">
                        <h2 className="text-xl font-semibold">Personal Details</h2>
                        <div className="flex flex-row gap-4">
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="First Name"
                                className="w-full h-[72px] px-4 py-3 rounded-md bg-white/20 border border-white/30 placeholder-white/70"
                            />
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Last Name"
                                className="w-full h-[72px] px-4 py-3 rounded-md bg-white/20 border border-white/30 placeholder-white/70"
                            />
                        </div>

                        <div className="flex flex-row gap-4">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                className="w-full h-[72px] px-4 py-3 rounded-md bg-white/20 border border-white/30 placeholder-white/70"
                            />
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="+66 Tel Number"
                                className="w-full h-[72px] px-4 py-3 rounded-md bg-white/20 border border-white/30 placeholder-white/70"
                                inputMode="numeric"
                                maxLength={12} // Includes the 2 dashes
                                onInput={(e: React.FormEvent<HTMLInputElement>) => {
                                    const input = e.currentTarget;
                                    let value = input.value.replace(/\D/g, ''); // remove all non-numeric

                                    if (value.length > 3 && value.length <= 6) {
                                        value = `${value.slice(0, 3)}-${value.slice(3)}`;
                                    } else if (value.length > 6) {
                                        value = `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6, 10)}`;
                                    }

                                    input.value = value;
                                }}
                            />
                        </div>
                    </div>



                    {/* Booking Details */}
                    <div className="w-full h-auto bg-[#1C1C1C] rounded-xl p-6 flex flex-col gap-4 ">
                        <h2 className="text-xl font-semibold">Booking Detail</h2> {/* เปลี่ยนเป็นภาษาไทย */}
                        <LocationDateReserve onDateChange={(value: Dayjs) => { setBookDate(value) }}
                            onDurationChange={(value: string) => { setDuration(value) }}
                            onBookTimeChange={(value: Dayjs) => { setBookTime(value) }} />
                    </div>






                    {/* Payment Details */}
                    <div className="w-full h-auto bg-[#1C1C1C] rounded-xl p-6 flex flex-col gap-4">
                        <h2 className="text-xl font-semibold">Payment Details</h2>

                        {/* <div className="flex flex-row gap-4">
                            <input
                                type="text"
                                id="payment1"
                                name="payment1"
                                placeholder="Payment method 1"
                                className="w-full h-[72px] px-4 py-3 rounded-md bg-white/20 border border-white/30 placeholder-white/70"
                            />
                            <input
                                type="text"
                                id="payment2"
                                name="payment2"
                                placeholder="Payment method 2"
                                className="w-full h-[72px] px-4 py-3 rounded-md bg-white/20 border border-white/30 placeholder-white/70"
                            />
                        </div>

                        <div className="flex flex-row gap-4">
                            <input
                                type="text"
                                id="payment3"
                                name="payment3"
                                placeholder="Payment method 3"
                                className="w-full h-[72px] px-4 py-3 rounded-md bg-white/20 border border-white/30 placeholder-white/70"
                            />
                            <input
                                type="text"
                                id="addPayment"
                                name="addPayment"
                                placeholder="Add Payment method"
                                className="w-full h-[72px] px-4 py-3 rounded-md bg-white/20 border border-white/30 placeholder-white/70"
                            />
                        </div> */}


                        <div className="flex flex-row flex-wrap gap-4">
                            <input
                                type="text"
                                id="payment1"
                                name="payment1"
                                placeholder="Payment method 1"
                                className={`${getInputClass('payment1')} w-[48%]`}
                                onFocus={() => handleFocus('payment1')}
                                readOnly
                            />
                            <input
                                type="text"
                                id="payment2"
                                name="payment2"
                                placeholder="Payment method 2"
                                className={`${getInputClass('payment2')} w-[48%]`}
                                onFocus={() => handleFocus('payment2')}
                                readOnly
                            />
                            <input
                                type="text"
                                id="payment3"
                                name="payment3"
                                placeholder="Payment method 3"
                                className={`${getInputClass('payment3')} w-[48%]`}
                                onFocus={() => handleFocus('payment3')}
                                readOnly
                            />
                            <div
                                role="button"
                                tabIndex={0}
                                onClick={handleAddPaymentClick}
                                onKeyDown={(e) => e.key === 'Enter' && handleAddPaymentClick()}
                                className="w-[48%] h-[72px] px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white/70 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all"
                            >
                                + Add Payment Method
                            </div>
                        </div>



                    </div>

                    {/* Policy */}
                    <div className="w-full h-auto bg-[#1C1C1C] rounded-xl p-6 flex flex-col gap-4">
                        <h2 className="text-xl font-semibold">Cancel Policy</h2>
                        <p>Free cancellation before Nov 30.</p>
                        <p>After that, the booking is non-refundable. Learn more</p>

                        <h2 className="text-xl font-semibold">Ground rules</h2>
                        <p>We ask every guest to remember a few simple things about what makes a great guest.</p>
                        <p>• Follow the massage rules</p>
                        <p>• Cooperation with the massage</p>
                    </div>

                </div>

                {/* Summary Section */}
                <div className="w-1/3 h-auto flex flex-col gap-8">
                    <div className="w-full h-auto bg-[#1C1C1C] p-6 rounded-xl flex flex-col gap-4">
                        <div className="relative w-full h-[20rem]">
                            <Image
                                src={massageItem.picture}
                                alt="Oasis Sands Resort"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>

                        <h1 className="text-lg font-semibold">Summary</h1>
                        <div className="flex-grow h-px bg-[#2C2C2C]"></div>

                        <div className="flex flex-row justify-between">
                            <p className="text-[#818181]">Place</p>
                            <p>{massageItem.name}</p>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="text-[#818181]">Total Guests</p>
                            <p>1</p>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="text-[#818181]">Date & Time</p>
                            <p>??</p>
                        </div>

                        <div className="flex-grow h-px bg-[#2C2C2C]"></div>

                        <h1 className="text-lg font-semibold">Price Details</h1>
                        <div className="flex flex-row justify-between">
                            <p className="text-[#818181]">Price per hour</p>
                            <p>{massageItem.hourRate} ฿</p>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="text-[#818181]">Total Guests</p>
                            <p>1</p>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="text-[#818181]">Duration</p>
                            <p>???</p>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p className="text-[#818181]">Vat 7%</p>
                            <p>??? ฿</p>
                        </div>

                        <div className="flex-grow h-px bg-[#2C2C2C]"></div>

                        <div className="flex flex-row justify-between">
                            <h1 className="text-lg font-semibold">Total Price</h1>
                            <h1 className="text-lg font-semibold">{massageItem.hourRate} ฿</h1>
                        </div>
                    </div>

                    {/* Terms & Submit */}
                    <div className="w-full h-auto bg-white/5 p-6 rounded-xl flex flex-col">
                        <div className="flex flex-row w-full gap-4">
                            <input
                                type="checkbox"
                                id="terms"
                                name="terms"
                                required
                                className="accent-white w-6 h-6"
                            />
                            <label htmlFor="terms" className="flex items-center gap-1">
                                By clicking this, I agree to TungTee<br />
                                Terms & conditions and Privacy Policy
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="text-[20px] mt-4 h-[72px] bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-100 transition-all"
                            onClick={makeBooking}
                        >
                            Pay for My Booking
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </form>

    );
}