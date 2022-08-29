import React from 'react';
import AddBookForm from './Form';

export default {
    title: "Organism/AddBookForm",
    component: AddBookForm,
};

const Template = args => (<AddBookForm {...args} />);


const test = () => {
    console.log("Yo!");
};


export const Default = Template.bind({});
Default.args = {
    category: {
        id: 1
    },
    setBookTitle: test,
    setBookAuthor: test,
    setBookDuration: test

};