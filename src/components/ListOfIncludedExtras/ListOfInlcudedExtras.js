import React from "react";
import iconTick from 'assets/svg/tick-green.svg';
import iconCross from 'assets/svg/cross-red.svg';



export default function ListOfIncludedExtras({ title, data }) {
    return (
        <>
            <h3 className='font-bold'>{title}</h3>
            <ul aria-labelledby={title}>
                {Object.entries(data).map(([key, value]) => {
                    return <ListItem key={key} title={key} included={value} />
                })}
            </ul>
        </>
    )
}

function ListItem({ title, included }) {
    return (
        <li>
            <img className='w-8 h-8 inline-block' src={included ? iconTick : iconCross} alt={included ? 'Included' : 'Not included'}></img>
            {title}
        </li>
    )
}