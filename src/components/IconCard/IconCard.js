import React from "react";
import CardContainer from "../cardContainer/CardContainer";

export default function IconCard({ path, title, onClickHandler }) {
    return (
        <CardContainer>
            <button className="p-6 rounded hover:scale-105 hover:bg-gray-100 hover:cursor-pointer" onClick={onClickHandler} aria-label={title}>
                <div className="bg-fuchsia-900 p-4 rounded-full mb-4">
                    <img className='h-24 w-24' src={path} alt={title}></img>
                </div>
                <h2 className="text-center text-xl font-bold italic text-fuchsia-900">{title}</h2>
            </button>
        </CardContainer>
    )
}