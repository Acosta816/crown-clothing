import React from 'react';

import './checkout-item.styles.scss';

//We want to give this component the ability to change the quantity by using the ADD_ITEM action. The action creator requires the whole item passed in so this component will need the whole item passed into it instead of just some props like name, price etc.. 
const CheckoutItem = ({ checkoutItem: { name, imageUrl, price, quantity } }) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>${price}</span>
        <span className='remove-button'>&#10005;</span>
    </div>
)

export default CheckoutItem;