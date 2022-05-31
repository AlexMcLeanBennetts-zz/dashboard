import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('there should be a component to display main policy details', () => {
    it('contains the policy number, start/end date, NCD, car registration & make', async () => {
        render(<App />)

        const policyNumber = await screen.findByText('XYZ789');
        const startDate = await screen.findByText(/3rd Apr 22/);
        const endDate = await screen.findByText(/2nd Apr 23/);
        const carReg = await screen.findByText('FW32ETR');
        const carMake = await screen.findByText('BMW 132D');

        expect(policyNumber).toBeInTheDocument();
        expect(startDate).toBeInTheDocument();
        expect(endDate).toBeInTheDocument();
        expect(carReg).toBeInTheDocument();
        expect(carMake).toBeInTheDocument();
    })

    it('has an array of buttons for quotes, documents, payments and claims', async () => {
        render(<App />)

        const quotesButton = await screen.findByRole('img', { name: /quotes/i });
        const documentsButton = await screen.findByRole('img', { name: /documents/i });
        const paymentsButton = await screen.findByRole('img', { name: /payments/i });
        const claimsButton = await screen.findByRole('img', { name: /claims/i });


        expect(quotesButton).toBeInTheDocument();
        expect(documentsButton).toBeInTheDocument();
        expect(paymentsButton).toBeInTheDocument();
        expect(claimsButton).toBeInTheDocument();

    })

    it('should have a multi-car quote CTA', async () => {
        render(<App />)

        const multicarContainer = await screen.findByRole('heading', { name: /Multicar/i });
        const getMulticarQuote = await screen.findByRole('button', { name: /Get a multicar quote/i });

        expect(multicarContainer).toBeInTheDocument();
        expect(getMulticarQuote).toBeInTheDocument();
    })

    it('should have a contact button', async () => {
        render(<App />)

        const contactButton = await screen.findByRole('heading', { name: /contact/i });

        expect(contactButton).toBeInTheDocument();
    })
    it('should have a account settings button', async () => {
        render(<App />)

        const settingsButton = await screen.findByRole('heading', { name: /Account settings/i });

        expect(settingsButton).toBeInTheDocument();
    })
    it('should have a referal section', async () => {
        render(<App />)

        const referalSection = await screen.findByRole('heading', { name: /refer a friend/i });

        expect(referalSection).toBeInTheDocument();
    })
})