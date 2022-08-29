import React from 'react';
import Navbar from './NavBar';
import NavBarWithSearch from './NavBarWithSearch';
import IntegratedNavBar from './IntegratedNavBar';

export default {
    title: "Organism/Navbar",
    component: Navbar,
};

const test = () => {
    console.log("Yo!");
};

const Template = args => (<Navbar {...args} />);

export const Default = Template.bind({});
Default.args = {
    linkTo : ["/"],
    menuItems : ["My Library"],
    setFilterTerm: test
};

const SearchTemplate = args => (<NavBarWithSearch {...args} />);

export const WithSearch = SearchTemplate.bind({});


const IntegratedTemplate = args => (<IntegratedNavBar {...args} />);

export const combined = IntegratedTemplate.bind({});
combined.args = {
    menuItems : ["My Library"],
    linkTo : ["/"],
    toggleSearchBar: false,
    setFilterTerm: test
};

