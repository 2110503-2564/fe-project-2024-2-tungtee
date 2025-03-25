import type { Metadata } from "next";

import Navbar from "@/components/navbar/Navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOption";
import NextAuthProvider from '@/providers/NextAuthProvider'
import ReduxProvider from "@/redux/ReduxProvider";

export const metadata: Metadata = {
    title: "TUNGTEE Project",
    description: "",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const session = await getServerSession(authOptions)

    return (
        <ReduxProvider>
            <NextAuthProvider session={session}>
                <div style={{ padding: '0', boxSizing: 'border-box', margin: '0' }}>
                <Navbar />
                {children}
                </div>
            </NextAuthProvider>
        </ReduxProvider>
        
    );
}