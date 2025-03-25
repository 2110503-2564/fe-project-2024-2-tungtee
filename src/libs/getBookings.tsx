export default async function getMassage(id:string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1//api/v1/appointments`, {next: {tags:['books']}})
    if (!response.ok) {
        throw new Error("Failed to fectch massages")
    } 

    return await response.json() 
}