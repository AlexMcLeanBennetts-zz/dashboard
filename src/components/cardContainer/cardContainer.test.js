import { screen, render } from '@testing-library/react'
import CardContainer from './CardContainer'

describe('the Card Container', () => {
    it('renders the children that are passed in', () => {
        const { container } = render(
            <CardContainer>
                <h1>Title</h1>
            </CardContainer>
        );

        expect(screen.getByText('Title')).toBeInTheDocument();
    })

})