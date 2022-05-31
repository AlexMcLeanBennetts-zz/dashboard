import { fireEvent, render, screen } from '@testing-library/react'
import Button from './Button';

describe('the <Button /> Component', () => {

    it('should render to the screen', () => {
        const { container, debug } = render(
            <Button />
        )

        const buttonComponent = screen.queryByTestId('buttonComponent');
        expect(buttonComponent).toBeInTheDocument();
    })

    it('renders text passed in from a prop', () => {
        const { container, debug } = render(
            <Button text='click me' />
        )

        const buttonComponent = screen.queryByTestId('buttonComponent');
        expect(buttonComponent).toHaveTextContent('click me')
    })

    it('when passed in function will update the state when clicked', () => {
        const setStateFunction = jest.fn();


        const { container, debug } = render(
            <Button text='click me' click={setStateFunction} />
        )

        const buttonComponent = screen.queryByTestId('buttonComponent');
        fireEvent.click(buttonComponent);
        expect(setStateFunction).toHaveBeenCalled();

    })

    it('should be able to use classes to change styling', () => {
        const tailwindStyling = '!min-w-min w-1/6'

        const { container, debug } = render(
            <Button styles={tailwindStyling} />
        )

        const buttonComponent = screen.queryByTestId('buttonComponent');
        expect(buttonComponent).toHaveClass('!min-w-min');
        expect(buttonComponent).toHaveClass('w-1/6');
    })

})