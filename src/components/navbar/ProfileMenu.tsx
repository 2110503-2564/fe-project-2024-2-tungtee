'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';  // ✅ ใช้ useSession
import getUserProfile from '@/libs/getUserProfile';

export default function ProfileMenu() {
    const { data: session } = useSession(); // ✅ ดึง session โดยตรง
    const [isOpen, setIsOpen] = useState(false);
    const [role, setRole] = useState<string | null>(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const fetchUserRole = async () => {
            if (!session || !session.user.token) {
                console.error("Session or token is missing.");
                return;
            }

            try {
                const profile = await getUserProfile(session.user.token);
                console.log("Profile data:", profile);

                if (profile?.data?.role) {
                    setRole(profile.data.role);
                } else {
                    console.error("Role not found in profile data.");
                }
            } catch (error) {
                console.error('Error fetching user role:', error);
            }
        };

        fetchUserRole();
    }, [session]); // ✅ ให้ useEffect ทำงานเมื่อ session เปลี่ยน

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !(menuRef.current as any).contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    if (!session) {
        return <div>Loading...</div>; // ✅ ถ้า session ยังไม่โหลด ให้แสดงสถานะโหลด
    }

    console.log("Current role:", role); // ✅ Debug ตรวจสอบค่า role

    return (
        <div className="relative" ref={menuRef}>
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2">
                <img
                    src="/svg/navbar/Profile.svg"
                    alt="Profile Icon"
                    className="w-9 h-9"
                />
            </button>

            <div
                className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 overflow-hidden text-sm text-black transform transition-all duration-200 origin-top-right ${
                    isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
            >
                <Link href="/profile-settings" className="block px-4 py-3 hover:bg-gray-100">
                    Profile Settings
                </Link>

                {role === "admin" && ( // ✅ เช็ค role ว่าเป็น "admin" หรือไม่
                    <Link href="/manage" className="block px-4 py-3 hover:bg-gray-100">
                        Manage
                    </Link>
                )}

                <Link href="/api/auth/signout" className="block px-4 py-3 hover:bg-gray-100">
                    Logout
                </Link>
            </div>
        </div>
    );
}
