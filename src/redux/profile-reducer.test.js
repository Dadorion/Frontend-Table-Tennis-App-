import {render} from '@testing-library/react';

import profileReducer, { setStatus } from './profile-reducer.js';


test('new profile should be added', () => {
    // 1. test data
    let newStatus = 'winner';
    let state = { status: 'looseer' };

    let action = setStatus(newStatus);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectations
    expect(newState.status).toBe('winner');
});


