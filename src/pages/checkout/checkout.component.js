import React from 'react';

import './checkout.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsPriceTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';


const CheckoutPage = ({ cartItems, subTotal }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price/each</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(item => <CheckoutItem key={item.id} checkoutItem={item} />)}
        <div className='total'>TOTAL: ${subTotal}</div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    subTotal: selectCartItemsPriceTotal
});

export default connect(mapStateToProps)(CheckoutPage);