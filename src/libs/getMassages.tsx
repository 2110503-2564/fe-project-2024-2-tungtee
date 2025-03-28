export default async function getMassages() {

    // await new Promise((resolve) => setTimeout(resolve, 5000))

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/massages`)
    
    if (!response.ok) {
        throw new Error("Failed to fectch massages")
    } 

    return await response.json() 
}