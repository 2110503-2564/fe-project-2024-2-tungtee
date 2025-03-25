// 'use client';

// import Image from 'next/image';
// import BacktoWebsiteButton from '@/components/booking/BacktoWebsiteButton';
// import LocationDateReserve from '@/components/booking/LocationDateReserve';
// import { useSearchParams } from 'next/navigation';
// import React, { useState, useEffect, useCallback } from 'react';
// import dayjs, { Dayjs } from 'dayjs';
// import { useDispatch } from 'react-redux';
// import { AppDispatch } from '@/redux/store';
// import { addBooking } from '@/redux/features/massSlice';
// import { MassItem, BookItem } from '../../../../interfaces';
// import getMassage from '@/libs/getMassage';
// import Footer from '@/components/footer/Footer';
// import { dbConnect } from '@/db/dbConnect';
// import { revalidateTag } from 'next/cache';
// import { redirect } from 'next/navigation';
// import Booking from '@/db/models/Booking';
// import { getServerSession } from 'next-auth';


// export default function Page() {


//     interface MassageResponse {
//         success: boolean;
//         data: MassItem;
//     }

//     const [massageDetail, setMassageDetail] = useState<MassageResponse | null>(null);
//     const [selectedInput, setSelectedInput] = useState<string | null>(null);
//     const dispatch = useDispatch<AppDispatch>();

//     const [bookDate, setBookDate] = useState<Dayjs | null>(dayjs)
//     const [bookTime, setBookTime] = useState<Dayjs | null>(dayjs)
//     const [duration, setDuration] = useState<string>("1")


    
//     const makeBooking = async () => {
//         alert("🛒 makeBooking ถูกเรียกแล้ว!"); // Debug ตรงนี้

//         const { mid } = params;
//         const massageName = massageDetail?.data?.name; // แทนที่การใช้ name


//         if (mid && massageName && bookDate && duration && bookTime) {
//             const item: BookItem = {
//                 id: mid,
//                 name: massageName,
//                 bookDate: dayjs(bookDate).format("YYYY/MM/DD"),
//                 bookTime: dayjs(bookTime).format("HH:mm"),
//                 bookDuration: duration
//             }
//             dispatch(addBooking(item))

//             alert("📦 ส่งข้อมูลไปที่ Redux: " + JSON.stringify(item))

            
//         } else {
//             alert("⚠️ ข้อมูลไม่ครบ! ตรวจสอบค่า mid:" + JSON.stringify(mid))
//             alert("⚠️ ข้อมูลไม่ครบ! ตรวจสอบค่า mid:" + JSON.stringify(massageName))
//             alert("⚠️ ข้อมูลไม่ครบ! ตรวจสอบค่า mid:" + JSON.stringify(bookDate))
//             alert("⚠️ ข้อมูลไม่ครบ! ตรวจสอบค่า mid:" + JSON.stringify(duration))
//             alert("⚠️ ข้อมูลไม่ครบ! ตรวจสอบค่า mid:" + JSON.stringify(bookTime))
//         }
//     }

//     // const addBookingtoWeb = async (addBookForm: FormData) => {
//     //     "use server"
//     //     const apptDate = addBookForm.get("name")
//     //     const user = addBookForm.get("user")
//     //     const massage = addBookForm.get("massage")
//     //     const createdAt = addBookForm.get("createdAt")

//     //     try {
//     //         await dbConnect()
//     //         const book = await Booking.create({
//     //             "apptDate": apptDate,
//     //             "user": user,
//     //             "massage": massage,
//     //         })
//     //     } catch (error) {
//     //         console.log(error)
//     //     }
//     //     revalidateTag("books")
//     //     redirect("/home")
//     // }

//     useEffect(() => {
//         const fetchMassageDetail = async () => {
//             try {
//                 const response = await getMassage(params.mid);
//                 setMassageDetail(response);
//             } catch (error) {
//                 console.error('Error fetching massage detail:', error);
//             }

//         };

//         fetchMassageDetail();
//     }, [params.mid]);

//     const massageItem = massageDetail?.data;


//     const handleFocus = useCallback((inputName: string) => {
//         setSelectedInput(inputName);
//     }, []);

//     const handleAddPaymentClick = useCallback(() => {
//         alert('Add new payment method clicked!');
//     }, []);

//     const getInputClass = useCallback(
//         (name: string) => {
//             return `w-full h-[72px] px-4 py-3 rounded-md border text-white placeholder-white/70 transition-all ${selectedInput === name ? 'bg-white/30 border-white' : 'bg-white/20 border-white/30'
//                 } cursor-pointer`;
//         },
//         [selectedInput]
//     );

//     if (!massageItem) {
//         return <p>Loading...</p>;
//     }

//     const session = await getServerSession(authOptions)
//         if (!session || !session.user.token) return null 
    
//     const profile = await getUserProfile(session.user.token)
//     var createdAt = new Date(profile.data.createdAt)
    
//         return (
//             <main className="bg-slate-100 m-5 p-5 mt-[150px]">
//                 <div className="text-2xl text-black">Your Dashboard Role:{profile.data.role}</div>
//                 <table className="table-auto border-separate border-spacing-2 text-black"><tbody>
//                     <tr><td>Email</td><td>{profile.data.email}</td></tr>
//                     <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
//                     <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
//                 </tbody></table>
//             </main>
//         )

// }