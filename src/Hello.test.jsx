import { render } from '@testing-library/react';
import React from 'react';
import Hello from './Hello.component';

test("Component should display Hello text", () => {
    const view = render(<Hello />);

});