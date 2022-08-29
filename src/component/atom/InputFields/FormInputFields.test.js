import React from 'react';
import {render, screen} from '@testing-library/react';
import FormInputField from './FormInputField';

// it('should take a snapshot', () => {
//     const { asFragment } = render(<FormInputField labelText="Test"/>)

//     expect(asFragment(<FormInputField />)).toMatchSnapshot()
// });

it('Label should be equal to the passed value', () => {
    const { getByText } = render(<FormInputField labelText="Test" />);

    getByText("Test");
});

it('Placeholder should be equal to the passed value', () => {
    render(<FormInputField placeholder="Test" />);

    screen.getByPlaceholderText("Test");
});