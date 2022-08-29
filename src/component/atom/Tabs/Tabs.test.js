import React from 'react';
import {render, screen} from '@testing-library/react';
import TabsList from './TabsList';


it('Should print text passed as child prop', ()=> {
    render(<TabsList children= {["Currently Reading", "Finished"]} value={0} />);

    screen.getByText("Currently Reading");
    screen.getByText("Finished");
});

it('If value is 0 the first tab should be active', ()=> {
    render(<TabsList children= {["Currently Reading", "Finished"]} value={0} />);

    expect(screen.getByRole("tab", { selected: true }).textContent).toBe("Currently Reading");
    expect(screen.getByRole("tab", { selected: false }).textContent).toBe("Finished");
});

it('If value is 1 the second tab should be active', ()=> {
    render(<TabsList children= {["Currently Reading", "Finished"]} value={1} />);

    expect(screen.getByRole("tab", { selected: false }).textContent).toBe("Currently Reading");
    expect(screen.getByRole("tab", { selected: true }).textContent).toBe("Finished");
});