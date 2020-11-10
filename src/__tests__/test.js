import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

const ShowText = ({ children }) => <div>{children}</div>

test('check test in document after rendering', () => {
    const testMessage = 'Test Message';
    render(<ShowText>{testMessage}</ShowText>);

    expect(screen.getByText(testMessage)).toBeInTheDocument();

});
