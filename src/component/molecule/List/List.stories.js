import React from 'react';
import List from './List';


export default {
    title: "Molecule/List",
    component: List,
};

const Template = args => (<List {...args} /> );


export const NavBarElements = Template.bind({});
NavBarElements.args = {
    listItems: ["Explore", "My Library", "Add Book"],
    color: 'primary',
    href: '#',
    variant: "text",
    orientation: "horizontal"
};

export const FooterList = Template.bind({});
FooterList.args = {
    listItems: ["Book lists", "What is Nonfiction?", "What to Read Next", "Benefits of Reading", "Pricing"],
    color: 'secondary',
    href: '#',
    variant: "text",
    orientation: "vertical"
};