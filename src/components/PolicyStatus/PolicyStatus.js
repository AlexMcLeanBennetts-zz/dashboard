import React from "react";
import usePolicyDetails from '../../hooks/usePolicyIsActive/usePolicyIsActive';

export default function PolicyStatus({ start, end }) {

    const isPolicyActive = usePolicyDetails(start, end);

    let classNames = 'w-4 h-4 rounded-full absolute p-2';
    let formattedClassNames = classNames + (isPolicyActive ? ' bg-green-600' : ' bg-red-600');

    return (
        <div className='bg-slate-200 relative flex items-center w-min py-2 px-4 rounded mb-4'>
            <span data-testid='policyStatusIndicator' className={formattedClassNames}></span>
            <p className='pl-5 whitespace-nowrap'>{isPolicyActive ? 'Active Policy' : 'Inactive Policy'}</p>
        </div>
    )
}