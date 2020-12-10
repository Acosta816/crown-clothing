import React from 'react';

import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import { CartItem } from '../cart-item/cart-item.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const emptyCart = (
    <div>
        <h2>🛒 Your Cart is Empty! 😱</h2>
        <p>Add some items to your cart..</p>
    </div>
)

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length <= 0 ? emptyCart : null}
            {cartItems.map(item => {
                return (
                    <CartItem key={item.id} item={item} />
                )
            })}
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));