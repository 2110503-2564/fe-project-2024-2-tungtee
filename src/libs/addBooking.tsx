export default async function addBooking(id: string, token: string, apptDate: string, bookTime: string, bookDuration:string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/massages/${id}/bookings`, {
        method: "POST",
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

    return await response.json();
}