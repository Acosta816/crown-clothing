import { cartActionTypeStrings } from './cart.typeStrings';
import { addItemToCart, clearItemFromCart, decrementItemQuantity } from './cart.utils';


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
                cartItems: addItemToCart(prevState.cartItems, action.payload)
            }
        case cartActionTypeStrings.DECREMENT_ITEM_QUANTITY:
            return {
                ...prevState,
                cartItems: decrementItemQuantity(prevState.cartItems, action.payload)
            }
        case cartActionTypeStrings.CLEAR_ITEM:
            return {
                ...prevState,
                cartItems: clearItemFromCart(prevState.cartItems, action.payload)
            }
        default:
            return prevState;
    }
};

export default cartReducer;