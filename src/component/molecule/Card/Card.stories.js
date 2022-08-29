import React from 'react';
import BookCard from './BookCard';

export default {
    title: "Molecule/Card",
    component: BookCard,
};

const Template = args => (<BookCard {...args} />);

const test = () => {
    return Math.random() < 0.5;
};

export const CardWithDynamicInput = Template.bind({});
CardWithDynamicInput.args = {
    isFinished: false,
    isInLibrary: test
};