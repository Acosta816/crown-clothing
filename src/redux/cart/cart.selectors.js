import { createSelector } from 'reselect';

//"input selector" that pulls entire state and then keeps just a slice 1 layer deep.( does not use createSelector )
const selectCart = state => state.cart;

//createSelector takes 2 args: [array of input selectors] and a function that returns the value we desire out of the input selector. In this case it would be the cartItems array. (pass the name of the state into the second function, in this case it's cart)
//The cartItems resulting from this selectCartItems is now memoized since we used createSelector() method.
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

//creating a memoized selector that returns the sum of the cartItems's quantity properties added up with the help of reduce()
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((a, item) => a + item.quantity, 0)
);


export const selectCartItemsPriceTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((a, item) => a + (item.quantity * item.price), 0)
);

