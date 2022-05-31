import { render, screen } from '@testing-library/react';
import PolicyStatus from "./PolicyStatus";

describe('When the policy is active', () => {
    it('has the text "Active Policy"', () => {
        render(<PolicyStatus start='2022-01-01' end='2023-01-01' />)

        const polictStatusText = screen.getByText('Active Policy');
        expect(polictStatusText).toBeInTheDocument();
    })

    it('displays a green circle', () => {
        render(<PolicyStatus start='2022-01-01' end='2023-01-01' />)

        const policyStatusIndicator = screen.getByTestId('policyStatusIndicator');
        expect(policyStatusIndicator).toHaveClass('bg-green-600');
    })
})

describe('When the policy is Inactive', () => {
    it('has the text "Inactive Policy"', () => {
        render(<PolicyStatus start='2021-01-01' end='2022-01-01' />)

        const polictStatusText = screen.getByText('Inactive Policy');
        expect(polictStatusText).toBeInTheDocument();
    })

    it('displays a red circle', () => {
        render(<PolicyStatus start='2021-01-01' end='2022-01-01' />)

        const policyStatusIndicator = screen.getByTestId('policyStatusIndicator');
        expect(policyStatusIndicator).toHaveClass('bg-red-600');
    })
})