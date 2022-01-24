import React from 'react';
import Hello from './Hello.component';
import { render, screen } from '@testing-library/react';

test("Component should display Hello text", () => {
    const view = render(<Hello />);
    // view.debug();
    let helloText = view.getByText("Hello");
    expect(helloText).toBeTruthy();
});