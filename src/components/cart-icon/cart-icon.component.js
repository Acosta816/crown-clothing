import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions'; //import the action creator that will auto-generate an action {type: 'TOGGLE_CART_HIDDEN'}
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';


const CartIcon = ({ onToggleCartHidden, cartItemsQtyTotal }) => {
    return (
        <div onClick={onToggleCartHidden} className='cart-icon'>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartItemsQtyTotal}</span>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    onToggleCartHidden: () => dispatch(toggleCartHidden()) //don't need to pass anything to toggleCartHidden since it doesn't accept a payload and it's action.type 'TOGGLE_CART_HIDDEN' is automatically added by toggleCartHidden itself.
});

const mapStateToProps = state => ({
    cartItemsQtyTotal: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);