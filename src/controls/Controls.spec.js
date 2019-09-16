// Test away!
import React from 'react';
import { render } from 'react-testing-library';
import Controls from '../controls/Controls';


it('shows controls', () => {
    const { queryByText } = render(<Controls />);

    expect(queryByText(
        (/lock gate/i)&&(/close gate/i) && (/unlock gate/i)&&(/close gate/i)
        ))
    expect(queryByText(/close gate/i))
})