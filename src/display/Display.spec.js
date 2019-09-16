// Test away!
import React from 'react';
import { render } from 'react-testing-library';
import Display from './Display';

it('defaults to unlocked and open',  () => {
    const { queryByText }  = render(< Display />);

    expect(queryByText(/unlocked/i));
    expect(queryByText(/open/i));
})

