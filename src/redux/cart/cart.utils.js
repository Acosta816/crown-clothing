export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingItem = cartItems.find(item => item.id === cartItemToAdd.id);

    if (existingItem) { //If the item is already in the cart, then we will create a new array will all existing cart items in it and just modify the duplicate item's "quantity" property by incrimenting it by +1. 
        return cartItems.map(item =>
            item.id === cartItemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
    };

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }] //if there is no existing item (because it's the first time we are adding to it to cart) then we return a new array with the item added to it and a new proptery of quantity:1 added to it. 
    //All new items added to the array (including the first item to be added) will go through this and obtain a "quantity" property.
}