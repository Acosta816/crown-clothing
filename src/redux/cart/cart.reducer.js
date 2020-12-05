import { cartActionTypeStrings } from './cart.typeStrings';



const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

//every return must return a state object
const cartReducer = (prevState = INITIAL_STATE, action) => {

    switch (action.type) {
        case cartActionTypeStrings.TOGGLE_CART_HIDDEN:
            return {
                ...prevState,
                hidden: !prevState.hidden
            }
        case cartActionTypeStrings.ADD_ITEM:
            return {
                ...prevState,
                cartItems: [...prevState.cartItems, action.payload]
            }
        default:
            return prevState;
    }
};

export default cartReducer;