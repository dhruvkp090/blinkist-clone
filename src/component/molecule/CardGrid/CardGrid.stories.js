import React from 'react';
import CardGrid from './CardGrid';

export default {
    title: "Molecule/CardGrid",
    component: CardGrid,
};

const Template = args => (<CardGrid {...args} />);

const test = () => {
    return Math.random() < 0.5;
};

export const Default = Template.bind({});
Default.args = {
    bookList: [
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
        },
        {
            bookTitle: "1984",
            bookAuthor: "Gorge Orwell",
            bookDuration: "20",
            isFinished: false
        },
    ],
    isInLibrary: test
};
