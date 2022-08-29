import React from 'react';
import CardsInTabs from './CardsInTabs';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';

const mockLib = jest.fn();

const unFinishedBooks = [
    {
        bookTitle: "Animal Farm",
        bookAuthor: "Gorge Orwell",
        bookDuration: "20",
        isFinished: false
    }
];

const finishedBooks = [
    {
        bookTitle: "Animal Farm",
        bookAuthor: "Gorge Orwell",
        bookDuration: "20",
        isFinished: true
    }
];

it('Switch tabs when clicked on a different tab', () => {
    render(<CardsInTabs unFinished= {unFinishedBooks} finished= {finishedBooks} isInLibrary={mockLib.mockReturnValue(true)} />);

    screen.getByText("Animal Farm");
    screen.getByText("Mark as Finished");
    expect(screen.queryByText("Read Again")).toBeNull();

    fireEvent.click(screen.getByText("Finished"));

    screen.getByText("Animal Farm");
    screen.getByText("Read Again");
    expect(screen.queryByText("Mark as Finished")).toBeNull();
    expect(screen.queryByText("Mark as Finished")).toBeNull();

});
