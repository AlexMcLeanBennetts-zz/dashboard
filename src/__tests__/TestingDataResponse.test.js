import { screen, render } from '@testing-library/react';
import App from '../App';
import { rest } from 'msw';
import { server } from '../mocks/server';

describe('when there is data', () => {
    it('shows the dashboard', async () => {
        render(<App />);
        const main = await screen.findByRole('main');
        expect(main).toBeInTheDocument();
    })
})

describe('when there is no data', () => {
    it('displays the circular Loader', async () => {
        server.resetHandlers(
            rest.get('http://localhost:3000/dashboard', (req, res, ctx) => {
                return res(ctx.status(500))
            })
        )
        render(<App />)
        const loader = screen.getByTestId('circularLoader');
        const main = screen.queryByRole('main');

        expect(loader).toBeInTheDocument();
        expect(main).not.toBeInTheDocument();
    })
})