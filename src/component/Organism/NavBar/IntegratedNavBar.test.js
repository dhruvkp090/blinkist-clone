import React from 'react';
import IntegratedNavBar from './IntegratedNavBar';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Context from '../../../util/context';

jest.mock("@auth0/auth0-react");

const mockLib = jest.fn();
const mockSetSearchResult = jest.fn();

const bookList = [
    {
        bookTitle: "Test",
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
};

function renderNavBar(args) {
    return render(
        <Context.Provider value={args}>
            <IntegratedNavBar 
                linkTo = {["/"]}
                menuItems = {["My Library"]}
                toggleSearchBar= {false}
                setFilterTerm= {mockLib}
            />
        </Context.Provider>
    );
}

it("Clicking on search button displays the search bar", async () => {
    useAuth0.mockReturnValue({
        isAuthenticated: false,
        loginWithRedirect: mockLib,
    });
    renderNavBar(args);

    screen.getByText("Explore");

    fireEvent.click(screen.getByTestId("searchButton"));
    
    screen.getByPlaceholderText("Search by Author or Title");
});
