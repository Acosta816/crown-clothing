//represents all the state of our app. Merges all our reducers into one.
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

//This is our global state! imagine a global this.state = {user: userReducer, cart: cartReducer, etc...}
export default combineReducers({
    user: userReducer //userReducer returns either null or an object with our current user example: {displayName:'David', email: 'david@gmail.com, id: '12fwrtdsf345'}
});
