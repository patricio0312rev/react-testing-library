import React from 'react';
import Hello from './Hello.component';
import { render, screen } from '@testing-library/react';

test("Component should display Hello text", () => {
    /* const view = render(<Hello />);
    // view.debug();
    let helloText = view.getByText("Hello");
    expect(helloText).toBeTruthy();

    // console.log(helloText.tagName);
    expect(helloText.tagName).toBe('H1');
    
    console.log(helloText.textContent);
    expect(helloText.textContent).toBe('Hello'); */

    
    const { getByText, queryAllByText, debug } = render(<Hello />);
    debug();
    let helloText = getByText("Hello");
    expect(helloText).toBeTruthy();
});