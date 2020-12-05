import { cartActionTypeStrings } from './cart.typeStrings';



const INITIAL_STATE = {
    hidden: true
};

//every return must return a state object
const cartReducer = (prevState = INITIAL_STATE, action) => {

    switch (action.type) {
        case cartActionTypeStrings.TOGGLE_CART_HIDDEN:
            return {
                ...prevState,
                hidden: !prevState.hidden
            }
        default:
            return prevState;
    }
};

export default cartReducer;