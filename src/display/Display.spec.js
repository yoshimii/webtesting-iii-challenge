// Test away!
import React from 'react';
import { render } from 'react-testing-library';
import Display from './Display';

it('defaults to unlocked and open',  () => {
    const { queryByText }  = render(< Display />);

    expect(queryByText(/unlocked/i));
    expect(queryByText(/open/i));
})

it('displays if gate is closed and if it is locked', () => {
    const state = {
        locked: true,
        closed: true,
      };

      const { queryByText } = render(<Display locked={state.locked} closed={state.closed}/>);

      expect(queryByText(/closed/i))

})

it('displays if gate is open/closed and if it is locked/unlocked', () => {
    const state = {
        locked: false,
        closed: false,
      };

      const { queryByText } = render(<Display locked={state.locked} closed={state.closed}/>);

      expect(queryByText(/open/i))

})



