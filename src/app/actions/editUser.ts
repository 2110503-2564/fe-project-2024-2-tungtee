"use server";

import User from "@/db/models/User";
import { dbConnect } from "@/db/dbConnect";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function editUser(editUserForm: FormData) {
    const userId = editUserForm.get("_id") as string;
    if (!userId) {
        console.error("User ID is required for updating.");
        return;
    }

    const updates: { name?: string; email?: string; tel?: string } = {};

    const name = editUserForm.get("name") as string;
    const email = editUserForm.get("email") as string;
    const tel = editUserForm.get("tel") as string;

    if (name) updates.name = name;
    if (email) updates.email = email;
    if (tel) updates.tel = tel;

    try {
        await dbConnect();
        
        const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });

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
