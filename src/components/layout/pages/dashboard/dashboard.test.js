import { screen, render } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('Setup', () => {
    it('renders a loader if no data is present', async () => {
        const { container } = render(
            <Dashboard />
        )

        const loader = screen.getByTestId('circularLoader');
        expect(loader).toBeInTheDocument();
    })
    it('renders a main section if data is present', () => {
        const policyInformation =
        {
            policyNumber: 'ABC123',
            name: 'Alex McLean',
            address: ['1 Road name', 'Town name', 'XX12 3XY'],
            policyType: 'fullyComp',
            price: {
                total: '134.55',
                type: 'monthly',
            },
            car: {
                registration: 'KN58VFC',
                make: 'Ford',
                model: 'Focus',
                value: 1500,
                annualMilage: 6000,
                purchaseDate: '12/09/2021',
                overnightLocation: 'Public Road',
                registeredOwner: 'Policyholder',
            },
            policyDetails: {
                start: '2022-02-02',
                end: '2023-02-01',
                NCD: '10',
            },
            paymentInformation: {
                accountNumber: 123456789,
                sortCode: '12-34-56',
            }
        }

        const { container } = render(
            <Dashboard policyData={policyInformation} />
        )

        const main = screen.getByRole('main');
        expect(main).toBeInTheDocument();
    })
})