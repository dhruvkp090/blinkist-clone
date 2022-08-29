import React from 'react'
import NavBar from './NavBar'
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import { useAuth0 } from '@auth0/auth0-react';
import Context from '../../../util/context'

jest.mock("@auth0/auth0-react");

const mockLib = jest.fn()


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
]

const args = {
    categories: dropDownText
};

function renderNavBar(args) {
    return render(
        <Context.Provider value={args}>
            <NavBar 
                linkTo = {["/"]}
                menuItems = {["My Library"]}
                setSearchResult= {mockLib}
                setSearchTerm= {mockLib}
                setFilterTerm= {mockLib}
            />
        </Context.Provider>
    );
}


it("Navbar should render with small logo", () => {
    useAuth0.mockReturnValue({
        isAuthenticated: false,
        loginWithRedirect: jest.fn()
    })
    renderNavBar(args);

    global.window.innerWidth = 300;
    global.window.dispatchEvent(new Event('resize'));

    screen.getByAltText("small logo")
})

it("Navbar should render with large logo", () => {
    useAuth0.mockReturnValue({
        isAuthenticated: false,
        loginWithRedirect: jest.fn()
    })
    renderNavBar(args);

    global.window.innerWidth = 1024;
    global.window.dispatchEvent(new Event('resize'));

    screen.getByAltText("large logo")
})

it("Navbar should render with login button initially", () => {
    useAuth0.mockReturnValue({
        isAuthenticated: false,
        loginWithRedirect: mockLib
    })
    renderNavBar(args);
    screen.getByText("Login")
    expect(mockLib).toHaveBeenCalledTimes(0)

    fireEvent.click(screen.getByText("Login"))
    expect(mockLib).toHaveBeenCalledTimes(1)
})

it("Navbar should render with logout if authenticated", async () => {
    useAuth0.mockReturnValue({
        isAuthenticated: true,
        loginWithRedirect: jest.fn(),
        user: {
            name: "Dhruv",
            picture: "https://www.richardkotze.com/images/github-profile.jpeg"
        }
    })
    renderNavBar(args);
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
    renderNavBar(args);

    fireEvent.click(screen.getByAltText("Dhruv"))
    expect(screen.getByRole("presentation")).toHaveStyle("visibility: visible")

    expect(mockLib).toHaveBeenCalledTimes(0)

    fireEvent.click(screen.getByText("Logout"))
    expect(mockLib).toHaveBeenCalledTimes(1)
})

it("Clicking on My Library calls setFilterTerm", async () => {
    useAuth0.mockReturnValue({
        isAuthenticated: true,
        loginWithRedirect: mockLib,
        user: {
            name: "Dhruv",
            picture: "https://www.richardkotze.com/images/github-profile.jpeg"
        },
        logout: mockLib,
    })
    renderNavBar(args);

    expect(mockLib).toHaveBeenCalledTimes(0)

    fireEvent.click(screen.getByText("My Library"))
    expect(mockLib).toHaveBeenCalledTimes(1)
    expect(mockLib).toHaveBeenCalledWith("")
})
