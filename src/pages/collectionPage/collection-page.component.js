import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectSingleCollection } from '../../redux/shop/shop.selectors';


import './collection-page.styles.scss';

const CollectionPage = ({ collection }) => (
    <div className='collection-page'>
        <h2 className='title'>{collection.title}</h2>
        <div className='items'>
            {
                collection.items.map(item => <CollectionItem key={item.id} item={item} />)
            }
        </div>

    </div>
);

//This second optional parameter called 'ownProps' is actually takes the props of the CollectionPage component, the component that this mapStateToProps lives on.
const mapStateToProps = (state, ownProps) => ({
    collection: selectSingleCollection(ownProps.match.params.collectionRouteName)(state) //strange syntax for a selector but necessary since this selector needs a chunk of the state that relies on the dynamic route parameter route prop.
});

export default connect(mapStateToProps)(CollectionPage);
