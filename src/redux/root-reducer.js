//represents all the state of our app. Merges all our reducers into one.
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';

//define your redux-persist config object.
const reduxPersistConfig = {
    key: 'root', //at what point inside your reducer object you want to begin storing/caching
    storage, //choose the location of the storage (we have the same name so just write like this) The storage location is the window.localStorage that we got from "import storage from 'redux-persist/lib/storage"
    whitelist: ['cart'] //array containing the names (in string) of any reducers we want to store. We will just pass in cart since the user persistence is being handled by firebase
}

//for redux-persist to recognize your root reducer, must explicitly declare it as such
//This is our global state! imagine a global this.state = {user: userReducer, cart: cartReducer, etc...}
const rootReducer = combineReducers({
    user: userReducer, //userReducer returns either null or an object with our current user example: {displayName:'David', email: 'david@gmail.com, id: '12fwrtdsf345'}
    cart: cartReducer
});

//export the enhanced version of your root reducer with persist capabilities.
export default persistReducer(reduxPersistConfig, rootReducer);




