import React from 'react';
import Page, { util } from './Page';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Context from '../../util/context';
import { fetchBook, postBookToLibrary, updateLibraryBook } from '../../util/functions';

jest.mock("../../util/functions");

jest.mock("@auth0/auth0-react");

const mockLib = jest.fn();
const mockSetSearchResult = jest.fn();

const bookList = [
    {
        "id": 4,
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
        "id": 5,
        "bookTitle": "ROI in Marketing",
        "bookAuthor": "Jack Phillips",
        "bookDuration": "12",
        "category": {
            "id": 10,
            "name": "Money"
        },
        "img": "https://images.blinkist.com/images/books/6014114b6cee070008ada76e/1_1/640.jpg"
    },
    {
        "id": 6,
        "bookTitle": "Sales EQ",
        "bookAuthor": "Jeb Blount",
        "bookDuration": "13",
        "category": {
            "id": 10,
            "name": "Money"
        },
        "img": "https://images.blinkist.com/images/books/6064bf2d6cee070007018112/1_1/640.jpg"
    },
    {
        "id": 7,
        "bookTitle": "Genesis",
        "bookAuthor": "Guido Tonelli",
        "bookDuration": "12",
        "category": {
            "id": 2,
            "name": "Science"
        },
        "img": "https://images.blinkist.com/images/books/608bcaf36cee07000722912e/1_1/640.jpg"
    },
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
        "img": "https://images.blinkist.com/images/books/608aa9b16cee070007228a70/1_1/640.jpg"
    }
];

const searchResult = [
    {
        "id": 4,
        "bookTitle": "Test Search",
        "bookAuthor": "Doris Kearns Goodwin",
        "bookDuration": "19",
        "category": {
            "id": 4,
            "name": "Politics"
        },
        "img": "https://images.blinkist.com/images/books/608aa9b16cee070007228a70/1_1/640.jpg"
    }
];

const dropDownText = [
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
    },
    {
        "id": 5,
        "name": "History"
    },
    {
        "id": 6,
        "name": "Marketing & Sales"
    }
];

const args = {
    categories: dropDownText,
    bookList: bookList,
    searchTerm: "",
    setSearchTerm: mockLib,
    setSearchResult: mockSetSearchResult,
    libraryBooks: libraryBooks,
    setLibraryBooks: mockLib,
    searchResult: searchResult
};

function renderPage(args) {
    useAuth0.mockReturnValue({
        isAuthenticated: false,
        loginWithRedirect: mockLib,
    });
    return render(
        <Context.Provider value={args}>
            <Page />
        </Context.Provider>
    );
}

const book = {
    bookTitle: "test cat",
    bookAuthor: "cat",
    bookDuration: "10",
    category: {
        id: 3,
        name: "Economics"
    },
    img: "https://images.blinkist.com/images/books/602e66826cee070007cf21cc/1_1/470.jpg",
    id: 2
};

it("Card in tabs is rendered", async () => {
    renderPage(args);

    screen.getByText("The Bully Pulpit");
});

it("setSearchTerm must be called if search term needs to be set", async () => {
    renderPage(args);

    fireEvent.click(screen.getByTestId("searchButton"));

    fireEvent.change(screen.getByPlaceholderText("Search by Author or Title"), {target: { value: "Test search result" }});

    expect(mockLib).toHaveBeenCalledWith("Test search result");
});

it("If search term is non empty search result is displayed", async () => {
    const args = {
        categories: dropDownText,
        bookList: bookList,
        searchTerm: "test",
        setSearchTerm: mockLib,
        setSearchResult: mockSetSearchResult,
        libraryBooks: bookList,
        setLibraryBooks: mockLib,
        searchResult: searchResult
    };

    useAuth0.mockReturnValue({
        isAuthenticated: false,
        loginWithRedirect: mockLib,
    });
    render(
        <Context.Provider value={args}>
            <Page />
        </Context.Provider>
    );

    screen.getByText("Test Search");

    screen.getByText(`All results for "test"`);
});

it("If search result is empty Nothing found for xyz is displayed", () => {
    const args = {
        categories: dropDownText,
        bookList: bookList,
        searchTerm: "test",
        setSearchTerm: mockLib,
        setSearchResult: mockSetSearchResult,
        libraryBooks: bookList,
        setLibraryBooks: mockLib,
        searchResult: []
    };
    
    useAuth0.mockReturnValue({
        isAuthenticated: false,
        loginWithRedirect: mockLib,
    });
    render(
        <Context.Provider value={args}>
            <Page />
        </Context.Provider>
    );
    
    screen.getByText(`Nothing found for "test"`);
});

it("Filter must be set", async () => {
    renderPage(args);

    fireEvent.click(screen.getByText("Explore"));

    fireEvent.click(screen.getByText("Politics"));

    screen.getAllByText("Politics");
    screen.getByText("The Bully Pulpit");
});

it("isInLib returns false if not in lib and true id in lib", async () => {    

    expect(util.isInLibrary(1)).toBe(false);
    expect(util.isInLibrary(7)).toBe(true);
});

it("Add to library function adds book to libraryBooks", async () => {
    postBookToLibrary.mockReturnValue(
        Promise.resolve({
            id: 2,
            isFinished: true
        })
    );
    fetchBook.mockReturnValue(
        Promise.resolve(book)
    );
    await util.addToLibrary(15);
    expect(fetchBook).toHaveBeenCalledWith(2);
    const updatedTestBook = {...book, isFinished: false};
    expect(mockLib).toHaveBeenCalledWith([...libraryBooks, updatedTestBook]);
});

it("Change read status changes the status of each book", async () => {
    updateLibraryBook.mockReturnValue(
        Promise.resolve({
            id: 4,
            isFinished: false
        })
    );
    
    await util.changeReadStatus("x", 4);
    expect(mockSetSearchResult).toHaveBeenCalledWith([{...searchResult[0], isFinished: false}]);
    expect(mockLib).toHaveBeenCalledWith(libraryBooks);
});