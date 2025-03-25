'use server'

const userRegister = async (
    name: string,
    email: string,
    password: string,
    tel: string
) => {
    const response = await fetch(
        `${process.env.BACKEND_URL}/api/v1/auth/register`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                tel: tel,
                email: email,
                role: "user",
                password: password,
            }),
        }
    );

    if (!response.ok) {
        throw new Error("Failed to register");
    }

    return await response.json();
};

export default userRegister;