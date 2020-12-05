import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';//action creator which will return action with type: 'ADD_ITEM' and payload: {whatever collection item you pass into it}

import './collection-item.styles.scss';

const CollectionItem = ({ item, onAddItem }) => {

    const { id, name, imageUrl, price } = item;
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }} />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={() => onAddItem(item)} invertedColor >Add to Cart</CustomButton>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    onAddItem: (item) => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);