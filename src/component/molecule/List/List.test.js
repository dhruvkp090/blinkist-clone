import React from 'react';
import {render} from '@testing-library/react';
import List from './List';
import '@testing-library/jest-dom';

const listItems= ["Explore", "My Library", "Add Book"];

it('Snapshot horizontal list', () => {
    const { asFragment } = render(<List orientation= "horizontal" listItems={listItems} />);

    expect(asFragment()).toMatchSnapshot();
});

it('Snapshot vertical list', () => {
    const { asFragment } = render(<List orientation= "vertical" listItems={listItems} />);

    expect(asFragment()).toMatchSnapshot();
});