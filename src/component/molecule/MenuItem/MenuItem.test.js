import React from 'react';
import {render} from '@testing-library/react';
import MenuListItem from './MenuListItem';
import '@testing-library/jest-dom';

const listItems= [
        {
            "id": 1,
            "name": "Entrepreneurship"
        },
        {
            "id": 2,
            "name": "Science"
        },
        {
            "id": 3,
            "name": "Economics"
        },
        {
            "id": 4,
            "name": "Politics"
        },
        {
            "id": 5,
            "name": "History"
        },
        {
            "id": 6,
            "name": "Marketing & Sales"
        }
    ];

const listItemsRandom= [
        {
            "id": 1,
            "name": "Entrepreneurship"
        },
        {
            "id": 2,
            "name": "Random name"
        }
    ];

it('Snapshot menu list', () => {
    const { asFragment } = render(<MenuListItem listItems={listItems} />);

    expect(asFragment()).toMatchSnapshot();
});

it('Snapshot menu list with random names', () => {
    const { asFragment } = render(<MenuListItem listItems={listItemsRandom} />);

    expect(asFragment()).toMatchSnapshot();
});
