import { screen, render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { server } from '../mocks/server';
import moment from 'moment';


import App from '../App';
import testData from '../mocks/data/testData';
import inactivePolicy from '../mocks/data/inactivePolicy.js';

describe('the page has the following items', () => {
    beforeEach(async () => {
        render(<App />)

        const viewDetialsButton = await screen.findByRole('button', { name: /view policy details/i });
        userEvent.click(viewDetialsButton);
        const policyDetailsPage = await screen.findByRole('heading', { name: /Your Policy's details/i });
        expect(policyDetailsPage).toBeInTheDocument();
    })

    it('a title with the phase "Your policy"', async () => {

        const title = await screen.findByRole('heading', { name: /your policy/i });
        expect(title).toBeInTheDocument();

    })

    it('a policy status indicator', async () => {

        const acitvePolicyText = await screen.findByText('Active Policy');
        expect(acitvePolicyText).toBeInTheDocument();

    })

    it('has the start and end date in a formatted manner', async () => {

        const startAndEndDate = await screen.findByText(/3rd Apr 22 - 2nd Apr 23/i)
        expect(startAndEndDate).toBeInTheDocument();

    })

    it('shows the compulsory excess', async () => {

        const compulsoryTitle = await screen.findByRole('heading', { name: 'Compulsory excess' });
        const price = compulsoryTitle.nextElementSibling.textContent;

        expect(price).toMatch(`£${testData.policyDetails.excess.compulsory}`);

    })
    it('shows the voluntary  excess', async () => {

        const voluntaryTitle = await screen.findByRole('heading', { name: 'Voluntary excess' });
        const price = voluntaryTitle.nextElementSibling.textContent;

        expect(price).toMatch(`£${testData.policyDetails.excess.voluntary}`);

    })

    it('displays the usage of the policy', async () => {

        const usage = await screen.findByText(testData.policyDetails.usage);
        expect(usage).toBeInTheDocument();

    })

    it("shows what's included within the policy", () => {

        const list = screen.getAllByRole("list")[0];
        const { getAllByRole } = within(list);
        const items = getAllByRole("listitem");
        const numberIncluded = getAllByRole('img', { name: 'Included' })

        expect(items.length).toBe(4);
        expect(items[0]).toHaveTextContent('90 Days European Cover')
        expect(items[1]).toHaveTextContent('Driving other cars')
        expect(items[2]).toHaveTextContent('Courtesy car')
        expect(items[3]).toHaveTextContent('Key cover')
        expect(numberIncluded.length).toEqual(4);

    })

    it("shows what optional extras are in the policy", () => {

        const list = screen.getAllByRole("list")[1];
        const { getAllByRole } = within(list);
        const items = getAllByRole("listitem");
        const numberNotIncluded = getAllByRole('img', { name: 'Not included' })
        const numberIncluded = getAllByRole('img', { name: 'Included' })

        expect(items.length).toBe(4);
        expect(items[0]).toHaveTextContent('Personal Accident Cover')
        expect(items[1]).toHaveTextContent('Legal Expenses')
        expect(items[2]).toHaveTextContent('Breakdown Cover')
        expect(items[3]).toHaveTextContent('Hire Car Cover')
        expect(numberNotIncluded.length).toEqual(3);
        expect(numberIncluded.length).toEqual(1);

    })

    it('shows the car registration', () => {

        const carRegistration = screen.getByText(testData.car.registration);
        expect(carRegistration).toBeInTheDocument();

    })

    it('shows the annual milage allowance', () => {

        const annualMilage = screen.getByText(testData.car.annualMilage);
        expect(annualMilage).toBeInTheDocument();

    })

    it("shows the vehicle's value", () => {

        const vehicleValueHeading = screen.getByRole('heading', { name: 'Vehicle value' });
        const vehicleValue = vehicleValueHeading.nextElementSibling.textContent;
        expect(vehicleValue).toMatch(`£${testData.car.value}`);

    })

    it('shows the correct overnight location', () => {

        const overnightLocation = screen.getByText(testData.car.overnightLocation);
        expect(overnightLocation).toBeInTheDocument();

    })

    it('shows the registered owner', () => {
        const registeredOwner = screen.getByText(testData.car.registeredOwner);
        expect(registeredOwner).toBeInTheDocument();
    })

    it('shows the purchased date in the correct format', () => {

        let formattedPurchasedDate = moment(testData.car.purchaseDate).format('Do MMM YY');

        const purchaseDateTitle = screen.getByRole('heading', { name: 'Purchase date' })
        const purchaseDate = purchaseDateTitle.nextElementSibling.textContent;

        expect(purchaseDate).not.toEqual(testData.car.purchaseDate);
        expect(purchaseDate).toEqual(formattedPurchasedDate);
    })

    it('shows the policyholders name', () => {
        const policyHoldersName = screen.getByText(testData.policyHolder.name);
        expect(policyHoldersName).toBeInTheDocument();
    })
    it('shows the policyholders address', () => {
        const policyHoldersAdressLine1 = screen.getByText(testData.policyHolder.address[0]);
        const policyHoldersAdressLine2 = screen.getByText(testData.policyHolder.address[1]);
        const policyHoldersAdressLine3 = screen.getByText(testData.policyHolder.address[2]);

        expect(policyHoldersAdressLine1).toBeInTheDocument();
        expect(policyHoldersAdressLine2).toBeInTheDocument();
        expect(policyHoldersAdressLine3).toBeInTheDocument();
    })
    it('shows the policyholders occupation', () => {
        const policyHoldersOccupation = screen.getByText(testData.policyHolder.occupation);
        expect(policyHoldersOccupation).toBeInTheDocument();
    })
    it('shows the policyholders date of birth', () => {
        let formattedDOB = moment(testData.policyHolder.DOB).format('Do MMM YY');

        const DOBTitle = screen.getByRole('heading', { name: 'Date of birth' })
        const DOB = DOBTitle.nextElementSibling.textContent;

        expect(DOB).not.toEqual(testData.policyHolder.DOB);
        expect(DOB).toEqual(formattedDOB);

    })
    it('shows when the policy holder started living in the uk', () => {
        let formattedukResidentSince = moment(testData.policyHolder.ukResidentSince).format('Do MMM YY');

        const ukResidentSinceTitle = screen.getByRole('heading', { name: 'Lived in UK since' })
        const ukResidentSince = ukResidentSinceTitle.nextElementSibling.textContent;

        expect(ukResidentSince).not.toEqual(testData.policyHolder.ukResidentSince);
        expect(ukResidentSince).toEqual(formattedukResidentSince);
    })
    it('shows the policyholders license type', () => {
        const policyHoldersLicenceType = screen.getByText(testData.policyHolder.licenceType);
        expect(policyHoldersLicenceType).toBeInTheDocument();
    })
    it('shows the policyholders Date Passed Test', () => {
        let formattedDatePassedTest = moment(testData.policyHolder.datePassedTest).format('Do MMM YY');

        const datePassedTestTitle = screen.getByRole('heading', { name: 'Date passed test' })
        const datePassedTest = datePassedTestTitle.nextElementSibling.textContent;

        expect(datePassedTest).not.toEqual(testData.policyHolder.datePassedTest);
        expect(datePassedTest).toEqual(formattedDatePassedTest);
    })
    it('shows the policyholders driving licence number', () => {
        const policyHoldersDrivingLicenceNumber = screen.getByText(testData.policyHolder.drivingLicenceNumber);
        expect(policyHoldersDrivingLicenceNumber).toBeInTheDocument();
    })
    it('shows the policyholders No claims discount', () => {
        const policyHoldersNCB = screen.getByText(`${testData.policyHolder.NCB} years`);
        expect(policyHoldersNCB).toBeInTheDocument();
    })

})

describe('Alternate data testing', () => {
    it('should display as inactive policy if it has lapsed', async () => {
        server.resetHandlers(
            rest.get('http://localhost:3000/dashboard', (req, res, ctx) => {
                return res(
                    ctx.json(inactivePolicy),
                )
            }),
        )
        render(<App />)

        const viewDetialsButton = await screen.findByRole('button', { name: /view policy details/i });
        userEvent.click(viewDetialsButton);
        const policyDetailsPage = await screen.findByRole('heading', { name: /Your Policy's details/i });
        expect(policyDetailsPage).toBeInTheDocument();
        const inactivePolicyText = await screen.findByText('Inactive Policy');
        expect(inactivePolicyText).toBeInTheDocument();
    })


})