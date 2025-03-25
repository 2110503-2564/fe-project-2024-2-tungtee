import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOption"
import getUserProfile from "@/libs/getUserProfile"
import Massage from "@/db/models/Massage"
import { dbConnect } from "@/db/dbConnect"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export default async function DashboardPage() {

    const addMassage = async (addMassageForm: FormData) => {
        "use server"
        const name = addMassageForm.get("name")
        const picture = addMassageForm.get("picture")
        const address = addMassageForm.get("address")
        const district = addMassageForm.get("district")
        const province = addMassageForm.get("province")
        const tel = addMassageForm.get("tel")
        const open = addMassageForm.get("open")
        const close = addMassageForm.get("close")
        const hourRate = addMassageForm.get("hourRate")

        try {
            await dbConnect()
            const massage = await Massage.create({
                "name": name,
                "picture": picture,
                "address": address,
                "district": district,
                "province": province,
                "tel": tel,
                "open": open,
                "close": close,
                "hourRate": hourRate
            })
        } catch (error) {
            console.log(error)
        }
        revalidateTag("massages")
        redirect("/search")
    }


    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null 

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)

    return (
        <main className="bg-slate-100 m-5 p-5 mt-[150px]">
            <div className="text-2xl text-black">Your Dashboard Role:{profile.data.role}</div>
            <table className="table-auto border-separate border-spacing-2 text-black"><tbody>
                <tr><td>Email</td><td>{profile.data.email}</td></tr>
                <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
                <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
            </tbody></table>

            { 
                (profile.data.role == "admin")?
                    <form action={addMassage}>
                        <div className="text-xl text-blue-700">Create Massage</div>
                        
                        <div className="flex items-center w-1/2 my-2">
                            <label className="w-auto block text-gray-700 pr=4" htmlFor="name">Name</label>
                            <input type="text" required id="name" name="name" placeholder="Massage Name" 
                            className=" mx-2 bg-white border-2 border-gray-200 rounded w-full p-2
                            text-gray-700 focus:outline-none focus:border-blue-400"/>
                        </div>
                        
                        <div className="flex items-center w-1/2 my-2">
                            <label className="w-auto block text-gray-700 pr=4" htmlFor="picture">Picture</label>
                            <input type="text" required id="picture" name="picture" placeholder="Link" 
                            className="mx-2 bg-white border-2 border-gray-200 rounded w-full p-2
                            text-gray-700 focus:outline-none focus:border-blue-400"/>
                        </div>

                        <div className="flex items-center w-1/2 my-2">
                            <label className="w-auto block text-gray-700 pr=4" htmlFor="address">Address</label>
                            <input type="text" required id="address" name="address" placeholder="Address" 
                            className="mx-2 bg-white border-2 border-gray-200 rounded w-full p-2
                            text-gray-700 focus:outline-none focus:border-blue-400"/>
                        </div>

                        <div className="flex items-center w-1/2 my-2">
                            <label className="w-auto block text-gray-700 pr=4" htmlFor="district">District</label>
                            <input type="number" required id="district" name="district" placeholder="District" 
                            className="mx-1 bg-white border-2 border-gray-200 rounded w-full p-2
                            text-gray-700 focus:outline-none focus:border-blue-400"/>
                        </div>

                        <div>
                            <label className="w-auto block text-gray-700 pr=4" htmlFor="tel">Province</label>
                            <input type="number" required id="tel" name="tel" placeholder="Province" 
                            className="mx-1 bg-white border-2 border-gray-200 rounded w-full p-2
                            text-gray-700 focus:outline-none focus:border-blue-400"/>
                        </div>

                        <div>
                            <label className="w-auto block text-gray-700 pr=4" htmlFor="province">Telephone</label>
                            <input type="number" required id="province" name="province" placeholder="Telephone" 
                            className="mx-1 bg-white border-2 border-gray-200 rounded w-full p-2
                            text-gray-700 focus:outline-none focus:border-blue-400"/>
                        </div>

                        <div>
                            <label className="w-auto block text-gray-700 pr=4" htmlFor="open">Open</label>
                            <input type="number" required id="open" name="open" placeholder="Telephone" 
                            className="mx-1 bg-white border-2 border-gray-200 rounded w-full p-2
                            text-gray-700 focus:outline-none focus:border-blue-400"/>
                        </div>

                        <div>
                            <label className="w-auto block text-gray-700 pr=4" htmlFor="clsoe">Close</label>
                            <input type="number" required id="clsoe" name="clsoe" placeholder="Telephone" 
                            className="mx-1 bg-white border-2 border-gray-200 rounded w-full p-2
                            text-gray-700 focus:outline-none focus:border-blue-400"/>
                        </div>
                        

                        <div className="flex items-center w-1/2 my-2">
                            <label className="w-auto block text-gray-700 pr=4" htmlFor="dayRate">Rate</label>
                            <input type="text" required id="dayRate" name="dayRate" placeholder="Daily Rate (including insurance)" 
                            className="mx-2 bg-white border-2 border-gray-200 rounded w-full p-2
                            text-gray-700 focus:outline-none focus:border-blue-400"/>
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">Add New Massage</button>
                    </form>
                    :null
            }
        </main>
    )
}