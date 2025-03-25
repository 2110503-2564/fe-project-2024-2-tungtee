export default async function getMassages() {

    // await new Promise((resolve) => setTimeout(resolve, 5000))

    const response = await fetch("http://localhost:5000/api/v1/massages", {next: {tags:['massages']}})
    if (!response.ok) {
        throw new Error("Failed to fectch massages")
    } 

    return await response.json() 
}