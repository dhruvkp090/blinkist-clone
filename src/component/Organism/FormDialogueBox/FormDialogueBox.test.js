import React from 'react';
import FormDialogueBox, {util} from './FormDialogueBox';
import {render, screen, fireEvent, waitForElementToBeRemoved, within,  waitFor, getByTestId} from '@testing-library/react';
import '@testing-library/jest-dom';
import Context from '../../../util/context';


const mockLib = jest.fn();

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
];

const args = {
    categories: menuItemsList
};

function renderFormDialogueBox(args) {
    return render(
        <Context.Provider value={args}>
            <FormDialogueBox fetchCategory={mockLib.mockReturnValue("Politics")}
            />
        </Context.Provider>
    );
}

it("Add book button is rendered initially", () => {
    renderFormDialogueBox(args);

    screen.getByRole("button", {name: "Add Book"});
});

it("Dialog box opens if add book button is clicked", () => {
    renderFormDialogueBox(args);

    fireEvent.click(screen.getByRole("button", {name: "Add Book"}));
    screen.getByRole("dialog");
});

it("Change value in the text field is reflected on screen", () => {
    renderFormDialogueBox(args);

    fireEvent.click(screen.getByRole("button", {name: "Add Book"}));

    fireEvent.change(screen.getByPlaceholderText("Book Name"), { target: { value: 'Animal' }});
    screen.getByDisplayValue('Animal');

    fireEvent.change(screen.getByPlaceholderText("Book Name"), { target: { value: 'Farm' }});
    screen.getByDisplayValue('Farm');

    fireEvent.change(screen.getByPlaceholderText("Author Name"), { target: { value: 'Author name new' }});
    screen.getByDisplayValue('Author name new');

    fireEvent.change(screen.getByPlaceholderText("Author Name"), { target: { value: 'newer name boi' }});
    screen.getByDisplayValue('newer name boi');

    fireEvent.change(screen.getByPlaceholderText("Duration"), { target: { value: 'newer name boi' }});
    expect(screen.getByRole("spinbutton").textContent).toBe("");

    fireEvent.change(screen.getByPlaceholderText("Duration"), { target: { value: 20 }});
    expect(screen.getByRole("spinbutton")).toHaveValue(20);
});

it("Pressing the close button closes the dialog box", async () => {
    renderFormDialogueBox(args);

    fireEvent.click(screen.getByRole("button", {name: "Add Book"}));
    screen.getByRole("dialog");

    fireEvent.click(screen.getByRole("button", {name: "Close"}));

    await waitForElementToBeRemoved(screen.getByRole("dialog"));
    screen.getByRole("button", {name: "Add Book"});
});

it("If add book clicked on an empty form, an alert is thrown", async () => {
    renderFormDialogueBox(args);

    fireEvent.click(screen.getByRole("button", {name: "Add Book"}));

    screen.getByRole("dialog");

    expect(screen.getByPlaceholderText("Book Name")).toHaveValue("");

    expect(screen.getByRole("button", {name: "Add"})).toHaveClass("FormDialogueBox-containedGreen-25");

    const spy = jest.spyOn(util, 'alertWindow');

    fireEvent.click(screen.getByRole("button", {name: "Add"}));
    
    expect(spy).toHaveBeenCalledTimes(1);
});

it("If add book clicked after adding all fields then book is added to library", async () => {
    renderFormDialogueBox(args);

    fireEvent.click(screen.getByRole("button", {name: "Add Book"}));

    screen.getByRole("dialog");

    fireEvent.change(screen.getByPlaceholderText("Book Name"), { target: { value: 'From test' }});
    fireEvent.change(screen.getByPlaceholderText("Author Name"), { target: { value: 'From test author' }});
    fireEvent.change(screen.getByPlaceholderText("Duration"), { target: { value: 20 }});

    const div = screen.getByTestId("category");

    fireEvent.mouseDown(within(div).getByRole("button"));

    fireEvent.click(within(screen.getByRole("listbox")).getByText("Politics"));

    await waitFor(() => within(div).getByText("Politics"));

    const spy = jest.spyOn(util, 'addBook');

    fireEvent.click(screen.getByRole("button", {name: "Add"}));
    
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({"bookAuthor": "From test author", 
                                    "bookDuration": "20", 
                                    "bookTitle": "From test", 
                                    "category": {"id": 4, "name": "Politics"}});

    expect(screen.getByPlaceholderText("Book Name")).toHaveValue("");
    expect(screen.getByPlaceholderText("Author Name")).toHaveValue("");
    expect(screen.getByPlaceholderText("Duration")).toHaveValue(0);
});