import React from 'react';
import {render, cleanup} from '@testing-library/react';
import SearchInputField from './SearchInputField';

afterEach(cleanup);

// it('should take a snapshot', () => {
//     const { asFragment } = render(<SearchInputField />)

//     expect(asFragment(<SearchInputField />)).toMatchSnapshot()
// });

it('Placeholder should be equal to the passed value', () => {
    const { getByPlaceholderText } = render(<SearchInputField placeholder="Test" />);

    getByPlaceholderText("Test");
});