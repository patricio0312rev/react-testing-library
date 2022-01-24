import React from 'react';
import Hello from './Hello.component';
import { render, screen, fireEvent } from '@testing-library/react';

test("Component should display Hello text", () => {
    /* const view = render(<Hello />);
    // view.debug();
    let helloText = view.getByText("Hello");
    expect(helloText).toBeTruthy();

    // console.log(helloText.tagName);
    expect(helloText.tagName).toBe('H1');
    
    console.log(helloText.textContent);
    expect(helloText.textContent).toBe('Hello'); */

    
    const { getByTestId, getByRole, debug } = render(<Hello />);
    debug();
    let helloText = getByTestId("heading");
    expect(helloText).toBeTruthy();
    expect(helloText.tagName).toBe('H1');

    let myBtn = getByRole('button');
    fireEvent.click(myBtn);
});