import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart, clearItemFromCart, decrementItemQuantity } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

//We want to give this component the ability to change the quantity by using the ADD_ITEM action. The action creator requires the whole item passed in so this component will need the whole item passed into it instead of just some props like name, price etc.. 
const CheckoutItem = ({ onClearItem, onAddItem, onDecrementQty, checkoutItem }) => {
    const { name, imageUrl, price, quantity, id } = checkoutItem;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className={`arrow ${quantity === 1 ? 'grey' : null}`} onClick={() => quantity === 1 ? null : onDecrementQty(checkoutItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => onAddItem(checkoutItem)}>&#10095;</div>
            </span>
            <span className='price'>${price}</span>
            <span className='remove-button' onClick={() => onClearItem(id)}>&#10005;</span>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    onClearItem: itemId => dispatch(clearItemFromCart(itemId)),
    onAddItem: item => dispatch(addItemToCart(item)),
    onDecrementQty: item => dispatch(decrementItemQuantity(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);