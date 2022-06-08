import { screen, render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../views/App";


describe('the Navigation bar', () => {
    beforeEach(() => {
        render(<App />)

    })
    it('has a link to the policy details page', async () => {
        const header = screen.getByRole('banner');
        const policyDetailsButton = within(header).getByText(/policy details/i);

        userEvent.click(policyDetailsButton)

        const policyDetailsHeader = await screen.findByRole('heading', { name: "Your Policy's details" })
        expect(policyDetailsHeader).toBeInTheDocument();

    })

    it('has a link to the dashboard', async () => {
        const header = screen.getByRole('banner');
        const policyDetailsButton = within(header).getByText(/policy details/i);

        userEvent.click(policyDetailsButton)

        // ensures that the page has changed
        const policyDetailsHeader = await screen.findByRole('heading', { name: "Your Policy's details" })
        expect(policyDetailsHeader).toBeInTheDocument();

        const dashboardButton = screen.getByText('Home');

        userEvent.click(dashboardButton);

        const dashboardHeader = await screen.findByRole('heading', { name: 'Your Policy Information' });
        expect(dashboardHeader).toBeInTheDocument();
    })
})