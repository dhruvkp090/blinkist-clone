import React from 'react'
import DropDownMenu from './DropDownMenu'
import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import Context from '../../../util/context';

const mockLib = jest.fn();

const listItems= [
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
    categories: listItems
};

function renderDropDown(args) {
    return render(
        <Context.Provider value={args}>
            <DropDownMenu children="Test Drop Down" 
                findBooksByCategory={mockLib} setFilterTerm={mockLib} />
        </Context.Provider>
    );
}

it('Dropdown menu appears if clicked on the button and disappears when clicked on button again', async () => {
    renderDropDown(args);

    expect(screen.getByRole("button").textContent).toBe("Test Drop Down")
    expect(screen.getByRole("presentation", {hidden:true})).toHaveStyle("visibility: hidden")

    fireEvent.click(screen.getByRole("button"))

    expect(screen.getByRole("presentation")).toHaveStyle("visibility: visible")

    
    expect(screen.getByRole("menuitem", {name: "Entrepreneurship"}).textContent).toBe("Entrepreneurship")
    expect(screen.getByRole("menuitem", {name: "Politics"}).textContent).toBe("Politics")
    expect(screen.getByRole("menuitem", {name: "History"}).textContent).toBe("History")


    fireEvent.click(screen.getByRole("menu"))

    expect(screen.getByRole("button").textContent).toBe("Test Drop Down")
    await waitFor(() => expect(screen.getByRole("presentation", {hidden:true})).toHaveStyle("visibility: hidden"))

});

it("Click on menu will fire an event and close the dropdown", async () => {
    renderDropDown(args);

    fireEvent.click(screen.getByRole("button"))

    fireEvent.click(screen.getByText("Entrepreneurship"))
    expect(mockLib).toHaveBeenCalledTimes(2)
    expect(mockLib).toHaveBeenCalledWith("Entrepreneurship")
    expect(mockLib).toHaveBeenCalledWith(1)
    await waitFor(() => expect(screen.getByRole("presentation", {hidden:true})).toHaveStyle("visibility: hidden"))
});
