import React from 'react';
import {render, screen} from '@testing-library/react';
import TabPanel from './TabPanel';


it('Should print text passed as child prop', ()=> {
    const { getByText } = render(<TabPanel children="Test text" value="1" index="1" />);

    getByText("Test text");
    expect(screen.getByTestId('tabPanelDiv').hasAttribute("hidden")).toBeFalsy();
});

it('Should not print text passed as child prop if value and index are not same', ()=> {
    const { getByTestId } = render(<TabPanel children="Test text" value="1" index="0" />);

    expect(getByTestId('tabPanelDiv').hasAttribute("hidden")).toBeTruthy();
});