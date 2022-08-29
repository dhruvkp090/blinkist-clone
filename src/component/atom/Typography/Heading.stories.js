import React from 'react';
import Typography from '@material-ui/core/Typography';

export default {
    title: "Atom/Typography",
    component: Typography,
};

const Template = args => (<Typography {...args} />);

export const BookHeading = Template.bind({});
BookHeading.args = {
    variant: 'h6',
    color: 'primary',
    children: 'Animal Farm',
    fontWeight: "700"
};

export const Author = Template.bind({});
Author.args = {
    variant: 'body1',
    color: 'secondary',
    children: 'Gorge Orwell',
};

export const FooterHeading = Template.bind({});
FooterHeading.args = {
    variant: 'h5',
    children: 'Big ideas in small packages Start learning now',
};