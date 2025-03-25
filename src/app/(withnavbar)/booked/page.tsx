'use client';

import HearderFilter from "@/components/search_booked/HearderFilter";
import SubHearderFilter from "@/components/search_booked/SubHearderFilter";
import ListFilter from "@/components/search_booked/ListFilter";
import MassageItem from "@/components/search_booked/MassageItem";
import PriceFilter from "@/components/search_booked/PriceFilter";
import SearchBox from "@/components/search_booked/SearchBox";
import SearchedInfo from "@/components/search_booked/SearchedInfo";
import BookMass from "@/components/booked/BookMass";

export default function Page() {
    return (
        <main className="w-full h-screen overflow-auto hide-scrollbar pt-[100px] px-[8%] flex flex-col gap-8">

            {/* <SearchBox/>

            <div className="w-full h-auto gap-8 flex flex-row">

                <div className="w-96 h-auto bg-[#1C1C1C] p-4 rounded-xl flex flex-col gap-4">
                    <HearderFilter/>


                    <div className="flex-grow h-px bg-[#2C2C2C]"></div>


                    <SubHearderFilter title="Location"/>
                    <div className="flex flex-col gap-2">
                        <ListFilter title="Bangkok"/>
                        <ListFilter title="Bangkok"/>
                        <ListFilter title="Bangkok"/>
                        <ListFilter title="Bangkok"/>
                        <ListFilter title="Bangkok"/>
                    </div>


                    <div className="flex-grow h-px bg-[#2C2C2C]"></div>


                    <SubHearderFilter title="Price"/>
                    <PriceFilter/>
                    <div className="flex-grow h-1 bg-[#4A4A4A] mx-3 rounded-full"></div>


                    <div className="flex-grow h-px bg-[#2C2C2C]"></div>


                    <SubHearderFilter title="Duration"/>
                    <div className="flex flex-col gap-2">
                        <ListFilter title="< 15 min"/>
                        <ListFilter title="15 - 30 min"/>
                        <ListFilter title="30 - 60 min"/>
                        <ListFilter title="1 - 2 hours"/>
                        <ListFilter title="> 2 hours"/>
                    </div>


                    <div className="flex-grow h-px bg-[#2C2C2C]"></div>


                    <SubHearderFilter title="Massage Types"/>
                    <div className="flex flex-col gap-2">
                        <ListFilter title="Swedish"/>
                        <ListFilter title="Deep Tissue"/>
                        <ListFilter title="Hot Stone"/>
                        <ListFilter title="Aromatherapy"/>
                        <ListFilter title="Thai"/>
                        <ListFilter title="Prenatal"/>
                        <ListFilter title="Reflexology"/>
                        <ListFilter title="Shiatsu"/>
                    </div>


                    <div className="flex-grow h-px bg-[#2C2C2C]"></div>


                    <SubHearderFilter title="Services"/>
                    <div className="flex flex-col gap-2">
                        <ListFilter title="Free Wifi"/>
                        <ListFilter title="Air Conditioner"/>
                        <ListFilter title="Heated Massage Beds"/>
                        <ListFilter title="Private Rooms"/>
                        <ListFilter title="Couples Massage"/>
                        <ListFilter title="Foot Spa Treatment"/>
                        <ListFilter title="Cupping Therapy"/>
                        <ListFilter title="Sauna Access"/>
                        <ListFilter title="Organic Oils & Lotions"/>
                    </div>

                </div>

                <div className="w-full h-auto p-4 rounded-xl flex flex-col gap-4">
                    <SearchedInfo/>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#1C1C1C] p-4 rounded-xl">
                        <MassageItem/>
                        <MassageItem/>
                        <MassageItem/>
                        <MassageItem/>
                    </div>
                </div>

            </div> */}
            
            
            <div> DSDS</div>
            <BookMass></BookMass>

        </main>
    );
}