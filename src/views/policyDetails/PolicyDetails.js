import React from 'react';
import PolicyStatus from 'components/PolicyStatus/PolicyStatus';
import moment from 'moment';
import CardContainer from 'components/cardContainer/CardContainer';
import TitleAndText from 'components/TitleAndText/TitleAndText';
import ListOfIncludedExtras from 'components/ListOfIncludedExtras/ListOfInlcudedExtras'
import PageTitle from 'components/PageTitle';


export default function PolicyDetailsPage({ policyData, setActiveComponent }) {
    let formattedStartDate = moment(policyData.policyDetails.start).format('Do MMM YY');
    let formattedEndDate = moment(policyData.policyDetails.end).format('Do MMM YY');
    let formattedPurchasedDate = moment(policyData.car.purchaseDate).format('Do MMM YY');
    let formattedDatePassedTest = moment(policyData.policyHolder.datePassedTest).format('Do MMM YY');
    let formattedDOB = moment(policyData.policyHolder.DOB).format('Do MMM YY');
    let formattedukResidentSince = moment(policyData.policyHolder.ukResidentSince).format('Do MMM YY');

    // If data are missing then here is the default text

    let carMakeAndModelTextFormatted = (policyData.car.make && policyData.car.model) ?
        `${policyData.car.make} ${policyData.car.model}` :
        'Error: No car details found';

    let carRegistrationText = policyData.car.registration ?
        policyData.car.registration :
        'Error: no registration details found';

    let policyNumberFormatted = policyData.policyNumber ?
        policyData.policyNumber :
        'Error: no policy number found';

    let policyType = policyData.policyType ?
        policyData.policyType :
        'Error: no cover type on record';

    let NCBTextFormatted = policyData.policyHolder.NCB > 0 ?
        `${policyData.policyHolder.NCB} years` :
        '0';
    return (
        <>
            <PageTitle text="Your Policy's details" />


            <CardContainer>

                <section className='flex flex-col px-20 py-10'>
                    <div className='flex justify-between items-center mb-4'>
                        <div className="w-4/12">
                            <PolicyStatus start={policyData.policyDetails.start} end={policyData.policyDetails.end} />
                            <p data-testid='policyNumber' className='mb-3'><span className='font-bold'>Policy Number:</span> {policyNumberFormatted}</p>
                        </div>
                        <TitleAndText
                            title="Policy start and end date"
                            text={`${formattedStartDate} - ${formattedEndDate}`}
                        />
                    </div>

                    <div className='flex justify-between items-center mb-4'>
                        <TitleAndText
                            title="Cover type"
                            text={policyType}
                        />

                        <TitleAndText
                            title="Usage"
                            text={policyData.policyDetails.usage}
                        />

                    </div>

                    <div className='flex justify-between items-center mb-4'>
                        <TitleAndText
                            title="Compulsory excess"
                            text={`£${policyData.policyDetails.excess.compulsory}`}
                        />

                        <TitleAndText
                            title="Voluntary excess"
                            text={`£${policyData.policyDetails.excess.voluntary}`}
                        />
                    </div>

                    <div className='flex justify-between items-center mb-4'>
                        <div className='w-4/12'>

                            <ListOfIncludedExtras title="What's included" data={policyData.policyDetails.extras} />

                        </div>
                        <div className="w-4/12">
                            <ListOfIncludedExtras title="Optional Extras" data={policyData.policyDetails.optionalExtras} />
                        </div>
                    </div>
                </section>
            </CardContainer>

            <h2 className="font-sans text-4xl font-bold text-rose-600 mt-10 mb-5">Vehicles</h2>
            <CardContainer>
                <section className="flex flex-col px-20 py-10">

                    <div className="flex items-center mb-6">
                        <div className='w-28 h-28 inline-block relative rounded bg-gray-300'>
                            <div className='icon-car'></div>
                        </div>
                        <div className="px-8">
                            <h2 className='font-sans font-bold text-lg mb-0.5'>Your Car</h2>
                            <p className='mb-3' data-testid='carDetails'>{carMakeAndModelTextFormatted}</p>
                            <p className="bg-amber-300 py-2 px-4 rounded" data-testid='registration'>{carRegistrationText}</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-3'>
                        <div className='mb-4'>
                            <h3 className='font-bold mb-2'>Annual milage</h3>
                            <p>{policyData.car.annualMilage}</p>
                        </div>
                        <div className='mb-4'>
                            <h3 className='font-bold mb-2'>Vehicle value</h3>
                            <p>£{policyData.car.value}</p>
                        </div>
                        <div className='mb-4'>
                            <h3 className='font-bold mb-2'>Overnight location</h3>
                            <p>{policyData.car.overnightLocation}</p>
                        </div>
                        <div className='mb-4'>
                            <h3 className='font-bold mb-2'>Registered owner</h3>
                            <p>{policyData.car.registeredOwner}</p>
                        </div>
                        <div className='mb-4'>
                            <h3 className='font-bold mb-2'>Purchase date</h3>
                            <p>{formattedPurchasedDate}</p>
                        </div>
                    </div>
                </section>
            </CardContainer>

            <h2 className="font-sans text-4xl font-bold text-rose-600 mt-10 mb-5">Vehicles</h2>

            <CardContainer>
                <section className="flex flex-col px-20 py-10">
                    <div className="flex items-center mb-6">
                        <div className='w-20 h-20 inline-block relative rounded bg-gray-300'>
                            <div className='icon-profile'></div>
                        </div>
                        <div className="px-8">
                            <h3 className='font-sans font-bold text-lg mb-0.5'>{policyData.policyHolder.name}</h3>
                            <p className='mb-3' >Main driver</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-3'>
                        <div className='mb-10'>
                            <h3 className='font-bold mb-2'>Address</h3>
                            <p>{policyData.policyHolder.address[0]}</p>
                            <p>{policyData.policyHolder.address[1]}</p>
                            <p>{policyData.policyHolder.address[2]}</p>
                        </div>
                        <div className='mb-10'>
                            <h3 className='font-bold mb-2'>Occupation</h3>
                            <p>{policyData.policyHolder.occupation}</p>
                        </div>
                        <div className='mb-10'>
                            <h3 className='font-bold mb-2'>Date of birth</h3>
                            <p>{formattedDOB}</p>
                        </div>
                        <div className='mb-10'>
                            <h3 className='font-bold mb-2'>Lived in UK since</h3>
                            <p>{formattedukResidentSince}</p>
                        </div>
                        <div className='mb-10'>
                            <h3 className='font-bold mb-2'>Licence type</h3>
                            <p>{policyData.policyHolder.licenceType}</p>
                        </div>
                        <div className='mb-10'>
                            <h3 className='font-bold mb-2'>Date passed test</h3>
                            <p>{formattedDatePassedTest}</p>
                        </div>
                        <div className='mb-10'>
                            <h3 className='font-bold mb-2'>Driving licence number</h3>
                            <p>{policyData.policyHolder.drivingLicenceNumber}</p>
                        </div>
                        <div className='mb-10'>
                            <h3 className='font-bold mb-2'>No Claims Discount</h3>
                            <p>{NCBTextFormatted}</p>
                        </div>
                    </div>


                </section>
            </CardContainer>
        </>
    )
}

