import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import useBooks from './useBooks';
import {fetchBooks, fetchLibraryBooks, fetchCategories} from './functions';
import '@testing-library/jest-dom';

jest.mock('./functions');


const books = [
    {
        "id": 7,
        "bookTitle": "The Bully Pulpit",
        "bookAuthor": "Doris Kearns Goodwin",
        "bookDuration": "19",
        "category": {
            "id": 4,
            "name": "Politics"
        },
        "img": "https://images.blinkist.com/images/books/608aa9b16cee070007228a70/1_1/640.jpg"
    }
];

const libraryBooks = [
    {
        "id": 7,
        "bookTitle": "The Bully Pulpit",
        "bookAuthor": "Doris Kearns Goodwin",
        "bookDuration": "19",
        "category": {
            "id": 4,
            "name": "Politics"
        },
        "img": "https://images.blinkist.com/images/books/608aa9b16cee070007228a70/1_1/640.jpg",
        "isFinished": false
    }
];

const categories = [
    {
        "id": 1,
        "name": "Entrepreneurship"
    },
    {
        "id": 2,
        "name": "Science"
    },
    {
        "id": 3,
        "name": "Economics"
    },
    {
        "id": 4,
        "name": "Politics"
    }
];

it("Use books reads form 3 different apis", async () => {
    fetchBooks.mockReturnValue(
        Promise.resolve(books)
    );
    fetchLibraryBooks.mockReturnValue(
        Promise.resolve({libraryBooks})
    );
    fetchCategories.mockReturnValue(
        Promise.resolve({categories})
    );
    
    const {result} = renderHook(() => useBooks());
    expect(result.current.bookList).toStrictEqual([]);
});