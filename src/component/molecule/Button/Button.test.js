import React from 'react';
import {render, screen} from '@testing-library/react';
import ButtonItem from './ButtonItem';
import '@testing-library/jest-dom';

it('Button name should equal the children prop', () => {
    const { getByText } = render(<ButtonItem children="Test" />);

    getByText("Test");
});

it('Button must have attribute end icon if endIcon needed prop is passed', () => {
    render(<ButtonItem children="Test" endIconNeeded="more" isOpen={false} />);

    screen.getByTestId("icon-button");
    
});

it('Button must have big logo if big is passed in props', () => {
    render(<ButtonItem children="Test" logoSize="big" />);

    screen.getByAltText("large logo");
    expect(screen.queryByAltText("small logo")).toBeNull();
    expect(screen.queryByTestId("icon-button")).toBeNull();
});

it('Button must have small logo if small is passed in props', () => {
    render(<ButtonItem children="Test" logoSize="small" />);

    screen.getByAltText("small logo");
    expect(screen.queryByAltText("large logo")).toBeNull();
    expect(screen.queryByTestId("icon-button")).toBeNull();
});

it('Snapshot for big logo', () => {
    const { asFragment } = render(<ButtonItem children="Test" logoSize="big" />);

    expect(asFragment()).toMatchSnapshot();
});

it('Snapshot for small logo', () => {
    const { asFragment } = render(<ButtonItem children="Test" logoSize="small" />);

    expect(asFragment()).toMatchSnapshot();
});

it('Snapshot for down arrow', () => {
    const { asFragment } = render(<ButtonItem children="Test" endIconNeeded="more" isOpen={false} />);

    expect(asFragment()).toMatchSnapshot();
});

it('Snapshot for up arrow', () => {
    const { asFragment } = render(<ButtonItem children="Test" endIconNeeded="more" isOpen={true} />);

    expect(asFragment()).toMatchSnapshot();
});

it('Normal button', () => {
    const { asFragment } = render(<ButtonItem children="Test" />);

    expect(asFragment()).toMatchSnapshot();
});