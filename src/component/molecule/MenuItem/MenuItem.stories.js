import React from 'react';
import MenuListItem from './MenuListItem';

export default {
    title: "Molecule/MenuItem",
    component: MenuListItem,
};

const Template = args => (<MenuListItem {...args} />);

export const Default = Template.bind({});
Default.args = {
    color: 'secondary',
    variant: "text",
    size: 'large',
    listItems: [
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
    ]
};