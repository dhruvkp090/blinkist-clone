import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import CardGrid from './CardGrid';
import '@testing-library/jest-dom';

const isInLibraryMock = jest.fn();
const onClickMock = jest.fn();
const  bookList= [
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
    ];

it('Snapshot with default image and finished book', () => {
    const { asFragment } = render(<CardGrid isInLibrary={isInLibraryMock.mockReturnValue(true)} bookList={bookList} />);

    expect(asFragment()).toMatchSnapshot();
});

it('Click event works', () => {
    const { rerender } = render(<CardGrid isInLibrary={isInLibraryMock.mockReturnValue(true)} isFinished={false} bookList={bookList} onClick={onClickMock} />);
    screen.getAllByText("Mark as Finished");
    fireEvent.click(screen.getAllByText('Mark as Finished')[0]);
});