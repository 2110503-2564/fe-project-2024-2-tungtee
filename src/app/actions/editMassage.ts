"use server";

import Massage from "@/db/models/Massage";
import { dbConnect } from "@/db/dbConnect";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function editMassage(editUserForm: FormData) {
    const name = editUserForm.get("name");
    const picture = editUserForm.get("picture");
    const address = editUserForm.get("address");
    const district = editUserForm.get("district");
    const province = editUserForm.get("province");
    const tel = editUserForm.get("tel");
    const open = editUserForm.get("open");
    const close = editUserForm.get("close");
    const hourRate = editUserForm.get("hourRate");

    try {
        await dbConnect();
        const updatedMassage = await Massage.findByIdAndUpdate(
            massageId,
            {name,
            picture,
            address,
            district,
            province,
            tel,
            open,
            close,
            hourRate,},
            {new : true}
        );

        if (!updatedMassage) {
            console.error("Massage not found.");
            return;
        }

    } catch (error) {
        console.error("Error saving user:", error);
    }

    revalidateTag("massages");
    redirect("/search");
}