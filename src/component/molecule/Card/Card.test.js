import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import BookCard from './BookCard';
import '@testing-library/jest-dom';

const isInLibraryMock = jest.fn();
const onClickMock = jest.fn();

it('Default card in library', () => {
    const { getByText } = render(<BookCard isInLibrary={isInLibraryMock.mockReturnValue(true)} />);

    getByText("Animal Farm");
    getByText("Gorge Orwell");
    getByText("20-minute read");
    getByText("Mark as Finished");
});

it('Default card not in library', () => {
    render(<BookCard isInLibrary={isInLibraryMock.mockReturnValue(false)} />);

    screen.getByText("Animal Farm");
    screen.getByText("Gorge Orwell");
    screen.getByText("20-minute read");
    screen.getByText("Add to library");
});

it('Default card in library finished reading', () => {
    const { getByText } = render(<BookCard isInLibrary={isInLibraryMock.mockReturnValue(true)} isFinished={true} />);

    getByText("Animal Farm");
    getByText("Gorge Orwell");
    getByText("20-minute read");
    getByText("Read Again");
    expect(screen.queryByText("Add to library")).toBeNull();
    expect(screen.queryByText("Mark as Finished")).toBeNull();
});

it('Snapshot with default image and finished book', () => {
    const { asFragment } = render(<BookCard isInLibrary={isInLibraryMock.mockReturnValue(true)} isFinished={true} />);

    expect(asFragment()).toMatchSnapshot();
});

it('Snapshot with passed image and unfinished book', () => {
    const { asFragment } = render(<BookCard isInLibrary={isInLibraryMock.mockReturnValue(true)} isFinished={false} 
        img= "https://images.blinkist.com/images/books/608aa9b16cee070007228a70/1_1/640.jpg"
    />);

    expect(asFragment()).toMatchSnapshot();
});

it('Fire event button click changes status from Mark as finished to read again', () => {
    const { rerender } = render(<BookCard isInLibrary={isInLibraryMock.mockReturnValue(true)} isFinished={false} onClick={onClickMock} />);
    screen.getByText("Mark as Finished");
    fireEvent.click(screen.getByText('Mark as Finished'));
    rerender(
        <BookCard isInLibrary={isInLibraryMock.mockReturnValue(true)} isFinished={true} onClick={onClickMock} />
    );
    screen.getByText("Read Again");
    expect(onClickMock).toHaveBeenCalledTimes(1);
});

it('Fire event button click changes status from Add to library to Mark as finished', () => {
    const { rerender } = render(<BookCard isInLibrary={isInLibraryMock.mockReturnValue(false)} isFinished={false} addToLibrary={onClickMock} />);
    screen.getByText("Add to library");
    fireEvent.click(screen.getByText('Add to library'));
    rerender(
        <BookCard isInLibrary={isInLibraryMock.mockReturnValue(true)} isFinished={false} onClick={onClickMock} />
    );
    screen.getByText("Mark as Finished");
    expect(onClickMock).toHaveBeenCalledTimes(1);
});

it('Fire event button click changes status from Read Again to Mark as Finished', () => {
    const { rerender } = render(<BookCard isInLibrary={isInLibraryMock.mockReturnValue(true)} isFinished={true} onClick={onClickMock} />);
    screen.getByText("Read Again");
    fireEvent.click(screen.getByText('Read Again'));
    rerender(
        <BookCard isInLibrary={isInLibraryMock.mockReturnValue(true)} isFinished={false} onClick={onClickMock} />
    );
    screen.getByText("Mark as Finished");
    expect(onClickMock).toHaveBeenCalledTimes(1);
});