import { cartActionTypeStrings } from "./cart.typeStrings";



export const toggleCartHidden = () => ({
    type: cartActionTypeStrings.TOGGLE_CART_HIDDEN,
    //does not need a payload. When we fire the action the reducer just needs to set the state to the opposite of it's current boolean (hidden or !hidden basically !prevState)
});

export const addItemToCart = cartItem => ({
    type: cartActionTypeStrings.ADD_ITEM,
    payload: cartItem
});

export const decrementItemQuantity = cartItem => ({
    type: cartActionTypeStrings.DECREMENT_ITEM_QUANTITY,
    payload: cartItem
})

export const clearItemFromCart = cartItemId => ({
    type: cartActionTypeStrings.CLEAR_ITEM,
    payload: cartItemId
});