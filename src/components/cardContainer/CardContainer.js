import React from "react";

export default function CardContainer({ children }) {
    return (
        <div className='bg-white rounded shadow-lg hover:shadow-xl my-3 overflow-hidden'>
            {children}
        </div>
    )
}