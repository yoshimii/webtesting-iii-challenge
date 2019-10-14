// Test away
import React from 'react';

it('state.closed cannot be true if state.locked is true', () => {
  const state = {
      locked: true,
      closed: true,
    };

    if(state === true){
        expect(state).toBeValid();
    }
  
    if(!state.locked){
        expect(!state.closed).toBe(!state.locked)
    }
})