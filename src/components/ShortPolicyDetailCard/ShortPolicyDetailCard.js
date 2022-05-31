import React from "react";
import moment from 'moment';

import Button from "../button/Button";
import PolicyStatus from "../PolicyStatus/PolicyStatus";


export default function ShortPolicyDetailCard({
    car,
    policyDetails,
    policyNumber,
    amendDetailsClick,
    viewDetailsClick,
    headingText
}) {
    let formattedStartDate = moment(policyDetails?.start).format('Do MMM YY');
    let formattedEndDate = moment(policyDetails?.end).format('Do MMM YY');

    // If data are missing then here is the default text
    let headingTextFormatted = headingText ?
        headingText :
        ' Save money when you make changes online in Your Account';

    let carMakeAndModelTextFormatted = (car?.make && car?.model) ?
        `${car.make} ${car.model}` :
        'Error: No car details found';

    let carRegistrationText = car?.registration ?
        car.registration :
        'Error: no registration details found';

    let policyNumberFormatted = policyNumber ?
        policyNumber :
        'Error: no policy number found';

    let NCBTextFormatted = policyDetails?.NCB > 0 ?
        `${policyDetails?.NCB} years` :
        '0';

    return (
        <section data-testid='shortPolicyDetailCard'>
            <div className="w-full bg-fuchsia-900 p-4 flex justify-between items-center">
                <div className="icon w-20 rounded-full inline-block relative bg-fuchsia-600"></div>
                <div className="w-7/12">
                    <p className="font-sans text-xl font-bold text-white leading-6">
                        {headingTextFormatted}
                    </p>
                </div>
                <div>
                    <Button
                        text='Make A Change'
                        click={amendDetailsClick}
                        styles='bg-white text-fuchsia-900 whitespace-nowrap px-5 py-2 rounded hover:shadow-lg hover:scale-110'
                    />
                </div>
            </div>
            <div className='flex p-6'>
                <div className='w-6/12'>
                    <div className="flex items-center">
                        <div className='w-28 h-28 inline-block relative rounded bg-gray-300'>
                            <div className='icon-car'></div>
                        </div>
                        <div className="px-8">
                            <h2 className='font-sans font-bold text-lg mb-0.5'>Your Car</h2>
                            <p className='mb-3' data-testid='carDetails'>{carMakeAndModelTextFormatted}</p>
                            <p className="bg-amber-300 py-2 px-4 rounded" data-testid='registration'>{carRegistrationText}</p>
                        </div>
                    </div>
                    <Button
                        text="View policy details"
                        styles='bg-slate-200 hover:bg-slate-300 text-fuchsia-900 rounded py-3 px-5 mx-auto mt-10'
                        click={viewDetailsClick}
                    />
                </div>
                <div className='w-6/12'>
                    <div>
                        <div>
                            <PolicyStatus start={policyDetails?.start} end={policyDetails?.end} />
                            <p data-testid='policyNumber' className='mb-3'><span className='font-bold'>Policy Number:</span> {policyNumberFormatted}</p>
                        </div>
                        <div className="mb-3">
                            <h3 className='font-bold'>Policy start and end date</h3>
                            <p>{formattedStartDate} - {formattedEndDate}</p>
                        </div>
                        <div>
                            <h3 className='font-bold'>No Claims Discount</h3>
                            <p data-testid='NCB-text'>{NCBTextFormatted}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}