"use server";

import Massage from "@/db/models/User";
import { dbConnect } from "@/db/dbConnect";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function editUser(editUserForm: FormData) {
    const userId = editUserForm.get("_id");
    const name = editUserForm.get("name");
    const email = editUserForm.get("email");
    const tel = editUserForm.get("tel");

    if (!userId) {
        console.error("User ID is required for updating.");
        return;
    }

    try {
        await dbConnect();
        
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { name, email, tel },
            { new: true }
        );

        if (!updatedUser) {
            console.error("User not found.");
            return;
        }
        
    } catch (error) {
        console.error("Error updating user:", error);
    }

    revalidateTag("users");
    redirect("/profile-settings");
}
