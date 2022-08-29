import React from 'react';
import CardsInTabs from './CardsInTabs';

export default {
    title: "Organism/CardsInTabs",
    component: CardsInTabs,
    argTypes: {
        currentTab: {
            control: {
                type: 'radio',
                options: [0, 1]
            }
        }
    }
};

const Template = args => (<CardsInTabs {...args} />);

const books = [
        {
            bookTitle: "Animal Farm",
            bookAuthor: "Gorge Orwell",
            bookDuration: "20",
            isFinished: false
        },
        {
            bookTitle: "Animal Farm",
            bookAuthor: "Gorge Orwell",
            bookDuration: "20",
            isFinished: false
        },
        {
            bookTitle: "Animal Farm",
            bookAuthor: "Gorge Orwell",
            bookDuration: "20",
            isFinished: false
        },
        {
            bookTitle: "Animal Farm",
            bookAuthor: "Gorge Orwell",
            bookDuration: "20",
            isFinished: false
        }
    ];


const test = () => {
    return Math.random() < 0.5;
};


export const Default = Template.bind({});
Default.args = {
    unFinished: books,
    finished: books,
    isInLibrary: test

};