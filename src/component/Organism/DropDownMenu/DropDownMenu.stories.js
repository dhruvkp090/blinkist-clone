import React from 'react';
import DropDownMenu from './DropDownMenu';

export default {
    title: "Organism/DropDownMenu",
    component: DropDownMenu,
};

const Template = args => (<DropDownMenu {...args} />);

export const Default = Template.bind({});
Default.args = {
    children: "Explore"
};