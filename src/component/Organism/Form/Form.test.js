import React from 'react'
import Form, {util} from './Form'
import {render, screen, fireEvent, within, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import Context from '../../../util/context';


const mockLib = jest.fn()

const menuItemsList= [
    {
    "id": 1,
    "name": "Entrepreneurship Value"
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
    categories: menuItemsList
};

function renderForm(args) {
    return render(
        <Context.Provider value={args}>
            <Form category= {{id: 2}} 
                    setBookTitle={mockLib} 
                    setBookAuthor={mockLib} 
                    setBookDuration={mockLib} 
                    fetchCategory = {mockLib}
                    setCategory={mockLib}
                    bookTitle="title book"
                    bookAuthor="book author name"
                    bookDuration={20}
                />
        </Context.Provider>
    );
}

it("Enter values in form changes form state", async () => {
    renderForm(args);

    screen.getByDisplayValue('title book')
    screen.getByDisplayValue('book author name')
    screen.getByDisplayValue('20')
    screen.getByRole("button", {name: "Science"})

    fireEvent.change(screen.getByPlaceholderText("Book Name"), { target: { value: 'Animal' }})
    expect(mockLib).toHaveBeenCalledTimes(1)
    expect(mockLib).toHaveBeenCalledWith('Animal')

    fireEvent.change(screen.getByPlaceholderText("Author Name"), { target: { value: 'Animal Author' }})
    expect(mockLib).toHaveBeenCalledTimes(2)
    expect(mockLib).toHaveBeenCalledWith('Animal Author')

    fireEvent.change(screen.getByPlaceholderText("Duration"), { target: { value: 30 }})
    expect(mockLib).toHaveBeenCalledTimes(3)
    expect(mockLib).toHaveBeenCalledWith("30")
    
    const spy = jest.spyOn(util, 'handleChange')

    fireEvent.mouseDown(screen.getByRole("button", {name: "Science"}));

    fireEvent.click(within(screen.getByRole("listbox")).getByText("History"));

    expect(spy).toHaveBeenCalledWith(5)
    expect(spy).toHaveBeenCalledTimes(1)

    await waitFor(() => expect(mockLib).toHaveBeenCalledTimes(5))
})