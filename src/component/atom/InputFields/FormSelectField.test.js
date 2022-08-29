import React from 'react';
import {render, cleanup} from '@testing-library/react';
import FormSelectField from './FormSelectField';
import Context from '../../../util/context';

afterEach(cleanup);

const menuItemsList = 
[
    {
        id: 1,
        name: "Entrepreneurship"
    },
    {
        id: 2,
        name: "Science"
    },
    {
        id: 3,
        name: "Economics"
    },
    {
        id: 4,
        name: "Politics"
    },
];

const args = {
    categories: menuItemsList
};

function renderSelect(args, val) {
    return render(
        <Context.Provider value={args}>
            <FormSelectField labelText="Test" value={val}/>
        </Context.Provider>
    );
}

it('Label should be equal to the passed value', () => {
    const { getByText } = renderSelect(args, 1);

    getByText("Test");
    getByText("Entrepreneurship");
});

it('Select should display the value picked from dropdown menu', () => {
    const { getByText } = renderSelect(args, 2);

    getByText("Science");
});