"use server";

import Massage from "@/db/models/Massage";
import { dbConnect } from "@/db/dbConnect";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOption";
import getUserProfile from "@/libs/getUserProfile";


export async function editMassage(editMassageForm: FormData): Promise<void> {
    const session = await getServerSession(authOptions);
    console.log("Session in editMassage:", session);

    if (!session || !session.user.token) return; 

    const profile = await getUserProfile(session.user.token)

    if (profile.data.role !== 'admin') {
        console.error('You do not have permission to edit this massage.');
        return;
    }

    const updates: {
        name?: string;
        picture?: string;
        address?: string;
        district?: string;
        province?: string;
        tel?: string;
        open?: string;
        close?: string;
        hourRate?: string;
    } = {};

    const massageId = editMassageForm.get("_id") as string | null;
    const name = editMassageForm.get("name") as string | null;
    const picture = editMassageForm.get("picture") as string | null;
    const address = editMassageForm.get("address") as string | null;
    const district = editMassageForm.get("district") as string | null;
    const province = editMassageForm.get("province") as string | null; 
    const tel = editMassageForm.get("tel") as string | null;
    const open = editMassageForm.get("open") as string | null;
    const close = editMassageForm.get("close") as string | null;
    const hourRate = editMassageForm.get("hourRate") as string | null;

    if (name) updates.name = name;
    if (picture) updates.picture = picture;
    if (address) updates.address = address;
    if (district) updates.district = district;
    if (province) updates.province = province;
    if (tel) updates.tel = tel;
    if (open) updates.open = open;
    if (close) updates.close = close;
    if (hourRate) updates.hourRate = hourRate;

    try {
        await dbConnect();
        const updatedMassage= await Massage.findByIdAndUpdate(massageId, updates, { new: true });

        if (!updatedMassage) {
            console.error("Massage not found.");
            return;
        }

        console.log("Updated massage:", updatedMassage);
        
    } catch (error) {
        console.error("Error updating massage:", error);
    }

    revalidateTag("massages");
    redirect("/search");
}
