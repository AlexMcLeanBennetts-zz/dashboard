import React, { useState } from "react";
import CircularLoader from "../../../circularLoader/CircularLoader";
import CardContainer from '../../../cardContainer/CardContainer';
import ShortPolicyDetailCard from '../../../ShortPolicyDetailCard/ShortPolicyDetailCard';
import IconCard from "../../../IconCard/IconCard";
import Button from "../../../button/Button";
import quoteSVG from '../../../../assets/quotes.svg';
import documentsSVG from '../../../../assets/documents.svg';
import paymentsSVG from '../../../../assets/payments.svg';
import claimsSVG from '../../../../assets/policy.svg';
import multicarImg from '../../../../assets/multi-car.png';
import {
    AMEND_POLICY_DETAILS,
    VIEW_DETAILS,
    MULTICAR_QUOTE,
    REFERAL,
    QUOTES,
    DOCUMENTS,
    PAYMENTS,
    CLAIMS
} from '../../../../constants/ActiveComponents';




const Dashboard = ({ policyData, setActiveComponent }) => {

    const handleClickamendDetails = (e) => {
        e.preventDefault();
        setActiveComponent(AMEND_POLICY_DETAILS);
    }
    const handleClickViewDetails = e => {
        e.preventDefault();
        setActiveComponent(VIEW_DETAILS);
    }
    const multicarClickHandler = e => {
        e.preventDefault();
        setActiveComponent(MULTICAR_QUOTE);
    }
    const handleclickReferral = (e) => {
        e.preventDefault();
        setActiveComponent(REFERAL)
    }
    const handleClickQuotes = (e) => {
        e.preventDefault();
        setActiveComponent(QUOTES)
    }
    const handleClickDocuments = (e) => {
        e.preventDefault();
        setActiveComponent(DOCUMENTS)
    }
    const handleClickPayments = (e) => {
        e.preventDefault();
        setActiveComponent(PAYMENTS)
    }
    const handleClickClaims = (e) => {
        e.preventDefault();
        setActiveComponent(CLAIMS)
    }
    const car = policyData?.car;
    let nameHasBeenSplitToArray = policyData?.name.split(' ');

    return (
        <>
            {policyData ? (
                <main className="container mx-auto w-1/2">
                    <div className='mb-10'>
                        <div className='mb-6'>
                            <p className='font-sans text-6xl font-bold text-rose-600'>Welcome back {nameHasBeenSplitToArray[0]}!</p>
                        </div>
                        <h1 className="font-sans text-3xl font-bold text-rose-600 italic">Your Policy Information</h1>
                    </div>

                    <CardContainer>
                        <ShortPolicyDetailCard
                            car={car}
                            policyDetails={policyData.policyDetails}
                            policyNumber={policyData.policyNumber}
                            amendDetailsClick={handleClickamendDetails}
                            viewDetailsClick={handleClickViewDetails}
                        />
                    </CardContainer>


                    <ul className="flex justify-between">
                        <li>
                            <IconCard path={quoteSVG} title='Quotes' onClickHandler={handleClickQuotes} />
                        </li>
                        <li>
                            <IconCard path={documentsSVG} title='Documents' onClickHandler={handleClickDocuments} />
                        </li>
                        <li>
                            <IconCard path={paymentsSVG} title='Payments' onClickHandler={handleClickPayments} />
                        </li>
                        <li>
                            <IconCard path={claimsSVG} title='Claims' onClickHandler={handleClickClaims} />
                        </li>
                    </ul>

                    <CardContainer>
                        <div className="multicar-container flex flex-nowrap relative overflow-hidden bg-fuchsia-900 p-10">
                            <div className="z-10 m-auto">
                                <img
                                    src={multicarImg}
                                    alt='multicar quote'
                                    className=''
                                />
                            </div>
                            <div className="z-10 pl-10">
                                <h2 className='text-white font-bold text-lg pb-3'>Save £50 on each additional car with out Multicar deal</h2>
                                <p className="text-white pb-4">
                                    As an existing customer of 1st CENTRAL, you can get a £50 discount
                                    for each additional vehicle you or anyone in your household insures
                                    with us directly through our website.
                                </p>
                                <Button
                                    text='Get a multicar quote'
                                    styles='bg-white px-5 py-2 text-fuchsia-900 hover:scale-105'
                                    click={multicarClickHandler}
                                />

                            </div>
                        </div>
                    </CardContainer>

                    <CardContainer>
                        <div className="flex p-8 items-center hover:cursor-pointer">

                            <div className='icon-contact w-20 rounded-full inline-block relative bg-gray-300'></div>

                            <h2 className="text-fuchsia-900 font-bold text-2xl italic pl-6">Contact</h2>
                        </div>
                    </CardContainer>

                    <CardContainer>
                        <div className="flex p-8  items-center hover:cursor-pointer">
                            <div>
                                <div className='icon-settings w-20 rounded-full inline-block relative bg-gray-300'></div>
                            </div>
                            <h2 className="text-fuchsia-900 font-bold text-2xl italic pl-6">Account settings</h2>
                        </div>
                    </CardContainer>

                    <CardContainer>
                        <div className="p-10">
                            <h2 className="text-fuchsia-900 font-bold text-lg pb-3">Refer a friend</h2>
                            <p className="pb-5">
                                Refer a friend to Bennetts, and you'll get a £30 Amazon Gift Certificate
                                if they buy a policy. Your friend gets a £15 Amazon Gift Certificate too.
                                Terms and conditions apply.
                            </p>
                            <Button
                                text='Start referring'
                                styles='bg-slate-200 hover:bg-slate-300 text-fuchsia-900 rounded py-3 px-5 mx-auto'
                                click={handleclickReferral}
                            />
                        </div>
                    </CardContainer>




                </main>

            ) : (
                <CircularLoader />
            )}

        </>
    )
}

export default Dashboard;