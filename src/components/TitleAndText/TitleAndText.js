import React from "react";

export default function TitleAndText({ title, text }) {
    return (
        <div className="w-4/12">
            <h3 className='font-bold'>{title}</h3>
            <p>{text}</p>
        </div>
    )
} 