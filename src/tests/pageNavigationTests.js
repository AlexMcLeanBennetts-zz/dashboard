import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'views/App';

describe('the page redirects from the dashboard', () => {
    it('renders the amendments page when the "make a change" button is pressed', async () => {
        render(<App />);

        const makeAmendmentsButton = await screen.findByRole('button', { name: /make a change/i });
        expect(makeAmendmentsButton).toBeInTheDocument();

        userEvent.click(makeAmendmentsButton);

        const amendmentsPage = await screen.findByRole('heading', { name: /make amendments/i });

        expect(amendmentsPage).toBeInTheDocument();
    })
    it('renders the policy page when the "view policy details" button is pressed', async () => {
        render(<App />);

        const viewDetialsButton = await screen.findByRole('button', { name: /view policy details/i });
        expect(viewDetialsButton).toBeInTheDocument();

        userEvent.click(viewDetialsButton);

        const policyDetailsPage = await screen.findByRole('heading', { name: /Your Policy's details/i });

        expect(policyDetailsPage).toBeInTheDocument();
    })
    it('renders the quotes page when the "quotes" button is pressed', async () => {
        render(<App />);

        const quotesButton = await screen.findByRole('button', { name: /quotes/i });
        expect(quotesButton).toBeInTheDocument();

        userEvent.click(quotesButton);

        const quotesPage = await screen.findByRole('heading', { name: /Your Quotes/i });

        expect(quotesPage).toBeInTheDocument();
    })
    it('renders the documents page when the "documents" button is pressed', async () => {
        render(<App />);

        const documentsButton = await screen.findByRole('button', { name: /documents/i });
        expect(documentsButton).toBeInTheDocument();

        userEvent.click(documentsButton);

        const documentsPage = await screen.findByRole('heading', { name: /View your Documents/i });

        expect(documentsPage).toBeInTheDocument();
    })
    it('renders the payments page when the "payments" button is pressed', async () => {
        render(<App />);

        const paymentsButton = await screen.findByRole('button', { name: /payments/i });
        expect(paymentsButton).toBeInTheDocument();

        userEvent.click(paymentsButton);

        const paymentsPage = await screen.findByRole('heading', { name: /View your Payments/i });

        expect(paymentsPage).toBeInTheDocument();
    })
    it('renders the claims page when the "claims" button is pressed', async () => {
        render(<App />);

        const claimsButton = await screen.findByRole('button', { name: /claims/i });
        expect(claimsButton).toBeInTheDocument();

        userEvent.click(claimsButton);

        const claimsPage = await screen.findByRole('heading', { name: /View your Claims/i });

        expect(claimsPage).toBeInTheDocument();
    })

})