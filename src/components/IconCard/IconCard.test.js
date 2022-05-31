import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import IconCard from './IconCard';

describe('when passed in props', () => {

    const imagePath = '../../assets/quotes.svg'
    const title = 'documents'

    it('when passed in a path to a icon it displays the icon', () => {

        render(<IconCard path={imagePath} title={title} />)

        const image = screen.getByAltText(title);

        expect(image).toHaveAttribute('src', imagePath);

    })

    it('displays the title that is passed in via prop', () => {

        render(<IconCard path={imagePath} title={title} />);

        const heading = screen.getByRole('heading', { name: title })

        expect(heading).toBeInTheDocument();
    })

    it('calls the function on click of the card', () => {
        const clickFunction = jest.fn();

        render(<IconCard path={imagePath} title={title} onClickHandler={clickFunction} />);

        const button = screen.getByRole('button', { label: title });
        expect(button).toBeInTheDocument();

        userEvent.click(button);

        expect(clickFunction).toHaveBeenCalledTimes(1);

    })
})
