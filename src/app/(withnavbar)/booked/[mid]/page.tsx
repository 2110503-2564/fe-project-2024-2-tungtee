import Image from "next/image"
import getMassage from "@/libs/getMassage"
import Link from "next/link"

export default async function MassageDetailPage( {params} : { params: {mid:string}} ) {

    const massageDetail = await getMassage(params.mid)
    
    return (
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">{massageDetail.data.name}</h1>
            <div className="flex flex-row my-5">
                <Image src = {massageDetail.data.picture}
                    alt='Massage Image'
                    width={0} height={0} sizes="100vw"
                    className='rounded-lg w-[30%] bg-blac'/>
                <div className="text-md mx-5 text-left">{massageDetail.data.description}
                    <div>Adddress: {massageDetail.data.address}</div>
                    <div>district: {massageDetail.data.district}</div>
                    <div>province: {massageDetail.data.province}</div>
                    <div>tel: {massageDetail.data.tel}</div>
                    <div>open: {massageDetail.data.open}</div>
                    <div>close: {massageDetail.data.close}</div>
                    <div>Hour Rental Rate: {massageDetail.data.hourRate} Baht</div>

                    <Link href = {`/booking?id=${params.mid}&name=${massageDetail.data.name}`}>
                        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-4 py-2 text-white shadow-sm">
                            Make Booking
                        </button>
                    </Link>

                </div>
            </div>
        </main>
    )
}

export async function generateStaticParams() {
    return [{mid:'001'}, {mid:'002'}, {mid:'003'}, {mid:'004'}]
}