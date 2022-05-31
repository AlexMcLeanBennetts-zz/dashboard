import { render, screen } from '@testing-library/react';
import ShortPolicyDetailCard from './ShortPolicyDetailCard';

const car = {
    registration: 'KN58VFC',
    make: 'Ford',
    model: 'Focus',
    value: 1500,
    annualMilage: 6000,
    purchaseDate: '12/09/2021',
    overnightLocation: 'Public Road',
    registeredOwner: 'Policyholder',
};
let policyDetails = {
    start: '2022-02-02',
    end: '2023-02-01',
    NCB: '10',
};
const policyNumber = 'ABC123';

const amendDetailsClick = jest.fn();

describe('when passed in props', () => {

    it('should be able to pass in customised heading text', () => {
        const headingText = 'some test heading text';

        render(<ShortPolicyDetailCard headingText={headingText} policyNumber={policyNumber} car={car} policyDetails={policyDetails} amendDetailsClick={amendDetailsClick} />)

        const headingTextInDocument = screen.getByText(headingText);
        expect(headingTextInDocument).toBeInTheDocument();
    })
    it('should have a button to make changes to the policy', () => {
        render(<ShortPolicyDetailCard policyNumber={policyNumber} car={car} policyDetails={policyDetails} amendDetailsClick={amendDetailsClick} />)

        const makeAChangeButton = screen.getByRole('button', { name: 'Make A Change' });
        expect(makeAChangeButton).toBeInTheDocument();
    })
    it('should have the make and model of the car displayed', () => {
        const makeAndModel = `${car.make} ${car.model}`;
        render(<ShortPolicyDetailCard policyNumber={policyNumber} car={car} policyDetails={policyDetails} amendDetailsClick={amendDetailsClick} />)

        const makeAndModelInDocument = screen.getByText(makeAndModel);
        expect(makeAndModelInDocument).toBeInTheDocument();
    })
    it('should display the registration', () => {
        render(<ShortPolicyDetailCard policyNumber={policyNumber} car={car} policyDetails={policyDetails} amendDetailsClick={amendDetailsClick} />)

        const registrationText = screen.getByText(car.registration);
        expect(registrationText).toBeInTheDocument();
    })
    it('should have a button to view more details', () => {
        render(<ShortPolicyDetailCard policyNumber={policyNumber} car={car} policyDetails={policyDetails} amendDetailsClick={amendDetailsClick} />)

        const viewDetailsButton = screen.getByRole('button', { name: 'View policy details' });
    })
    it('should display the text "active policy" when the policy is active', () => {
        render(<ShortPolicyDetailCard policyNumber={policyNumber} car={car} policyDetails={policyDetails} amendDetailsClick={amendDetailsClick} />)

        const acitvePolicyText = screen.getByText('Active Policy');
        expect(acitvePolicyText).toBeInTheDocument();
    })
    it('should display the text "Inactive policy" when the policy is inactive', () => {
        policyDetails = {
            start: '2021-02-02',
            end: '2022-02-01',
            NCB: '10',
        };
        render(<ShortPolicyDetailCard policyNumber={policyNumber} car={car} policyDetails={policyDetails} amendDetailsClick={amendDetailsClick} />)

        const inacitvePolicyText = screen.getByText('Inactive Policy');
        expect(inacitvePolicyText).toBeInTheDocument();
    })
    it('should display the policy number', () => {
        render(<ShortPolicyDetailCard policyNumber={policyNumber} car={car} policyDetails={policyDetails} amendDetailsClick={amendDetailsClick} />)

        const policyNumberText = screen.getByText(`${policyNumber}`);
        expect(policyNumberText).toBeInTheDocument();
    })
    it('should show the pollicy start and end date in a formatted manner', () => {
        policyDetails = {
            start: '2022-02-02',
            end: '2023-02-01',
            NCB: '10',
        };
        const formattedDateText = '2nd Feb 22 - 1st Feb 23';
        render(<ShortPolicyDetailCard policyNumber={policyNumber} car={car} policyDetails={policyDetails} amendDetailsClick={amendDetailsClick} />)

        const formatedDateTextInDocument = screen.getByText(formattedDateText);
        expect(formatedDateTextInDocument).toBeInTheDocument();
    })
    it('should display the number of years of NCB as a string in the format of "{number} years"', () => {
        render(<ShortPolicyDetailCard policyNumber={policyNumber} car={car} policyDetails={policyDetails} amendDetailsClick={amendDetailsClick} />)

        const NCBText = screen.getByText(`${policyDetails.NCB} years`);
        expect(NCBText).toBeInTheDocument();
    })
    it('should display "0" when there is no NCB', () => {
        policyDetails = {
            start: '2022-02-02',
            end: '2023-02-01',
            NCB: '0',
        };

        render(<ShortPolicyDetailCard policyNumber={policyNumber} car={car} policyDetails={policyDetails} amendDetailsClick={amendDetailsClick} />)

        const NCBText = screen.getByTestId('NCB-text');
        expect(NCBText).toHaveTextContent('0');
    })
})

describe('when props are missing it has a fallback', () => {
    it('the header should have default text if no modifying prop is passed in', () => {
        const defaultText = 'Save money when you make changes online in Your Account'

        render(<ShortPolicyDetailCard policyNumber={policyNumber} car={car} policyDetails={policyDetails} amendDetailsClick={amendDetailsClick} />)

        const headerText = screen.getByText(defaultText);
        expect(headerText).toBeInTheDocument();
    })
    it('if no policy number is present then it should show an error text on the page', () => {
        render(<ShortPolicyDetailCard car={car} policyDetails={policyDetails} amendDetailsClick={amendDetailsClick} />)

        const policyNumberText = screen.getByTestId('policyNumber');
        expect(policyNumberText).toHaveTextContent('Error: no policy number found');
    })
    it('if no car make and model information is available', () => {
        render(<ShortPolicyDetailCard policyDetails={policyDetails} amendDetailsClick={amendDetailsClick} />)

        const carMakeAndModelText = screen.getByTestId('carDetails');
        expect(carMakeAndModelText).toHaveTextContent('Error: No car details found');
    })
    it('if no car registration', () => {
        render(<ShortPolicyDetailCard policyDetails={policyDetails} amendDetailsClick={amendDetailsClick} />)

        const carRegistrationText = screen.getByTestId('registration');
        expect(carRegistrationText).toHaveTextContent('Error: no registration details found')
    })
    it('if no props are passed in then it does not break the build', () => {
        render(<ShortPolicyDetailCard />);

        const section = screen.getByTestId('shortPolicyDetailCard')
        expect(section).toBeInTheDocument();
    })
})