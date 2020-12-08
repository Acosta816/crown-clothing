import React from 'react';

import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { CartItem } from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const emptyCart = (
    <div>
        <h2>🛒 Your Cart is Empty! 😱</h2>
        <p>Add some items to your cart..</p>
    </div>
)

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length <= 0 ? emptyCart : null}
            {cartItems.map(item => {
                return (
                    <CartItem key={item.id} item={item} />
                )
            })}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);