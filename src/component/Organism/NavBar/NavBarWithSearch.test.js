import React from 'react'
import NavBarWithSearch from './NavBarWithSearch'
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import { useAuth0 } from '@auth0/auth0-react';
import Context from '../../../util/context';

jest.mock("@auth0/auth0-react");

const mockLib = jest.fn()

const args = {
    setSearchTerm: mockLib
};

function renderDropDown(args) {
    return render(
        <Context.Provider value={args}>
            <DropDownMenu children="Test Drop Down" 
                findBooksByCategory={mockLib} setFilterTerm={mockLib} />
        </Context.Provider>
    );
}


it("NavBarWithSearch should render with small logo", () => {
    useAuth0.mockReturnValue({
        isAuthenticated: false,
        loginWithRedirect: jest.fn()
    })
    render(<NavBarWithSearch 
        />)

    global.window.innerWidth = 300;
    global.window.dispatchEvent(new Event('resize'));

    screen.getByAltText("small logo")
})

it("NavBarWithSearch should render with large logo", () => {
    useAuth0.mockReturnValue({
        isAuthenticated: false,
        loginWithRedirect: jest.fn()
    })
    render(<NavBarWithSearch 
        />)

    global.window.innerWidth = 1024;
    global.window.dispatchEvent(new Event('resize'));

    screen.getByAltText("large logo")
})

it("NavBarWithSearch should render with login button initially", () => {
    useAuth0.mockReturnValue({
        isAuthenticated: false,
        loginWithRedirect: mockLib
    })
    render(<NavBarWithSearch />)
    screen.getByText("Login")
    expect(mockLib).toHaveBeenCalledTimes(0)

    fireEvent.click(screen.getByText("Login"))
    expect(mockLib).toHaveBeenCalledTimes(1)
})

it("NavBarWithSearch should render with logout if authenticated", async () => {
    useAuth0.mockReturnValue({
        isAuthenticated: true,
        loginWithRedirect: jest.fn(),
        user: {
            name: "Dhruv",
            picture: "https://www.richardkotze.com/images/github-profile.jpeg"
        }
    })
    render(<NavBarWithSearch />)
    screen.getByAltText("Dhruv")
})

it("Clicking on the image displayed the logout button", async () => {
    useAuth0.mockReturnValue({
        isAuthenticated: true,
        loginWithRedirect: mockLib,
        user: {
            name: "Dhruv",
            picture: "https://www.richardkotze.com/images/github-profile.jpeg"
        },
        logout: mockLib,
    })
    render(<NavBarWithSearch />)

    fireEvent.click(screen.getByAltText("Dhruv"))
    expect(screen.getByRole("presentation")).toHaveStyle("visibility: visible")

    expect(mockLib).toHaveBeenCalledTimes(0)

    fireEvent.click(screen.getByText("Logout"))
    expect(mockLib).toHaveBeenCalledTimes(1)
})

it("Clicking on cross or search button, the search bar should call on click cross", async () => {
    useAuth0.mockReturnValue({
        isAuthenticated: true,
        loginWithRedirect: mockLib,
        user: {
            name: "Dhruv",
            picture: "https://www.richardkotze.com/images/github-profile.jpeg"
        },
        logout: mockLib,
    })
    render(<NavBarWithSearch onClickSearch={mockLib}/>)

    fireEvent.click(screen.getByTestId("searchButton"))
    expect(mockLib).toHaveBeenCalledTimes(1)

    fireEvent.click(screen.getByTestId("closeSearch"))
    expect(mockLib).toHaveBeenCalledTimes(2)
})

it("Clicking on cross or search button, the search bar should call on click cross", async () => {
    useAuth0.mockReturnValue({
        isAuthenticated: false,
        loginWithRedirect: mockLib,
    })
    render(<Context.Provider value={args}>
                <NavBarWithSearch onClickSearch={mockLib} placeholder="Search by Author or Title" />
            </Context.Provider>)

    fireEvent.change(screen.getByPlaceholderText("Search by Author or Title"), {target: { value: "Test search result" }})


    expect(mockLib).toHaveBeenCalledWith("Test search result");
})
