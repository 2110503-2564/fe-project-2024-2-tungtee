export default async function updateBooking(id: string, token: string, apptDate: string, bookTime: string, bookDuration: string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/bookings/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            "apptDate": apptDate,
            "bookTime": bookTime,
            "bookDuration": bookDuration,
        })
    });

    // if (!response.ok) {
    //     throw new Error("Failed to fetch user profile");
    // }

    return await response.json();
}