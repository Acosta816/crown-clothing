import { createSelector } from 'reselect';

//create input state selector
const selectUser = state => state.user;

//create memoized reselectors

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
);

