import React, { ReactNode } from "react";

export default function ManageReservationLayout( {children, booking, massage} : {children:React.ReactNode, booking:React.ReactNode, massage:React.ReactNode}) {
    return (
        <div className="flex flex-col w-full">
            { children }
            {/* { massage } */}
            {/* { booking }  */}
        </div>
    )
}