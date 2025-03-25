'use client';

import SwitchPage from "@/components/signin_register/SwitchPage";
import OtherAppButton from "@/components/signin_register/OtherAppButton";
import Banner from "@/components/signin_register/Banner";
import BacktoWebsiteButton from "@/components/signin_register/BacktoWebsiteButton";
import Logo from "@/components/navbar/Logo";
import { useState } from "react";
import { useRouter } from "next/navigation";
import userRegister from "@/libs/userRegister";
import { signIn } from "next-auth/react";

export default function Page() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [tel, setTel] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || !email || !password || !tel) {
            alert("Login Fail: Please fill in all fields.");
            return;
        }

        if (password.length < 6){
            alert("Password length more than 6 letter")
            return;
        }

        try {
            alert("Registering user:" + name + email + password);
            console.log("Registering user:", { name, email, password });

            await userRegister(name, email, password, tel);

            alert("User registered successfully.");
            console.log("User registered successfully.");

            alert("Signing in user:" + { email, password });
            console.log("Signing in user:", { email, password });

            const result = await signIn("credentials", {
                redirect: false,
                email,
                password,
            });

            alert("Sign in result:" + result);
            console.log("Sign in result:", result);

            if (result?.error) {
                alert("Login Fail");
                setError("Email or password is incorrect.");
            } else {
                alert("Login success");
                router.push("/");
                router.refresh();
            }
        } catch (err) {
            console.error("Login error:", err);
            alert("name " + name);
            alert("email " + email);
            alert("password " + password);
            setError("Something went wrong. Please try again.");
        }
    };

    const formatPhoneNumber = (value: string) => {
        // ลบอักขระที่ไม่ใช่ตัวเลข
        const numericValue = value.replace(/\D/g, '');

        // จัดรูปแบบเบอร์โทรศัพท์
        let formattedValue = '';
        if (numericValue.length <= 3) {
            formattedValue = numericValue;
        } else if (numericValue.length <= 6) {
            formattedValue = `${numericValue.slice(0, 3)}-${numericValue.slice(3)}`;
        } else {
            formattedValue = `${numericValue.slice(0, 3)}-${numericValue.slice(3, 6)}-${numericValue.slice(6, 10)}`;
        }

        return formattedValue;
    };

    const handleTelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedValue = formatPhoneNumber(e.target.value);
        setTel(formattedValue);
    };

    return (
        <main className="relative w-full h-screen flex flex-row overflow-auto bg-[#0C0C0C]">
            <div className="relative w-1/2 h-full">
                <Banner />
                <div className="absolute top-6 right-6 z-20">
                    <BacktoWebsiteButton />
                </div>
                <div className="absolute mx-11 top-5 z-20">
                    <Logo/>
                </div>
            </div>

            <div className="w-1/2 h-full flex flex-col px-[153px] py-[122px]">
                <h1 className="text-[64px] font-bold mb-2">Create an account</h1>
                <div className="text-[15px] flex items-center gap-2">
                    Already have an account?
                    <SwitchPage title="Login" />
                </div>
                <form onSubmit={handleRegister} 
                className="flex flex-col gap-6 mt-14">
                    <div className="flex flex-row w-full gap-4">
                        <input
                            type="text"
                            id="name"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full h-[72px] px-4 py-3 rounded-md bg-white/20 border border-white/30 placeholder-white/70"
                        />
                        <input
                            type="text"
                            id="Telephone"
                            placeholder="Telophone"
                            value={tel}
                            onChange={handleTelChange}
                            className="w-full h-[72px] px-4 py-3 rounded-md bg-white/20 border border-white/30 placeholder-white/70"
                        />
                    </div>

                    <div className="flex flex-row w-full gap-4">
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-[72px] px-4 py-3 rounded-md bg-white/20 border border-white/30 placeholder-white/70"
                        />
                    </div>

                    <div className="flex flex-row w-full gap-4">
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full h-[72px] px-4 py-3 rounded-md bg-white/20 border border-white/30 placeholder-white/70"
                        />
                    </div>

                    <div className="flex flex-row w-full gap-4">
                        <input
                            type="checkbox"
                            id="terms"
                            className="accent-white w-6 h-6"
                        />
                        <label htmlFor="terms" className="flex items-center gap-1">
                            I agree to the&nbsp;
                            <a href="/terms" className="underline hover:text-gray-300 transition-colors font-bold">
                                Terms & Conditions
                            </a>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="text-[20px] mt-4 h-[72px] bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-100 transition-all"
                    >
                        Create account
                    </button>

                    <div className="flex items-center w-full gap-4 text-white text-sm">
                        <div className="flex-grow h-px bg-white/30"></div>
                        <span className="whitespace-nowrap">Or register with</span>
                        <div className="flex-grow h-px bg-white/30"></div>
                    </div>

                    <div className="flex items-center w-full gap-4 text-white text-sm">
                        <OtherAppButton title="Google" iconpath="" />
                        <OtherAppButton title="Apple" iconpath="" />
                    </div>
                </form>
            </div>
        </main>
    );
}
