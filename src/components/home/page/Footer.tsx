export default function Footer() {
    return (
        <div className="w-screen h-auto flex flex-col gap-10 pt-[100px] px-[8%]">
            <h1 className="text-3xl font-bold">TungTEE</h1>
            <div className="flex flex-row gap-16">
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">Page</h2>
                    <div className="flex flex-col gap-1">
                        <p className="font-normal text-[#9A9A9A]">Home</p>
                        <p className="font-normal text-[#9A9A9A]">Search</p>
                        <p className="font-normal text-[#9A9A9A]">About us</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">Features</h2>
                    <div className="flex flex-col gap-1">
                        <p className="font-normal text-[#9A9A9A]">Find Massage</p>
                        <p className="font-normal text-[#9A9A9A]">Book Appointments</p>
                        <p className="font-normal text-[#9A9A9A]">View Appointments</p>
                        <p className="font-normal text-[#9A9A9A]">Reviews</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">Cookie</h2>
                    <div className="flex flex-col gap-1">
                        <p className="font-normal text-[#9A9A9A]">Data Collect</p>
                        <p className="font-normal text-[#9A9A9A]">Term</p>
                        <p className="font-normal text-[#9A9A9A]">privacy</p>
                    </div>
                </div>
            </div>
            <div className="h-36"></div>
        </div>
    );
}