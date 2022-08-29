import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import useSearch from './useSearch';
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
    },
    {
        "id": 7,
        "bookTitle": "test",
        "bookAuthor": "Doris Kearns Goodwin",
        "bookDuration": "19",
        "category": {
            "id": 4,
            "name": "Politics"
        },
        "img": "https://images.blinkist.com/images/books/608aa9b16cee070007228a70/1_1/640.jpg"
    }
];

const searchResult = [
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
    }
];


it("useSearch when empty returns all books", async () => {
    
    const {result} = renderHook(() => useSearch({bookList: books, initialValue: ""}));
    expect(result.current.searchResult).toEqual(books);
});

it("useSearch when no matches returns all books", async () => {
    
    const {result} = renderHook(() => useSearch({bookList: books, initialValue: "testsrfger"}));
    expect(result.current.searchResult).toEqual([]);
});

it("useSearch when matches returns only matching books", async () => {
    
    const {result} = renderHook(() => useSearch({bookList: books, initialValue: "Bully"}));
    expect(result.current.searchResult).toEqual(searchResult);
});