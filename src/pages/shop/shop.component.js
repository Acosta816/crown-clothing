import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collectionPage/collection-page.component';

//we actually don't need to use match since it's just '/shop'. we could just route to path='/shop/:collectionRouteName' 
const ShopPage = ({ match }) => (
    <div className='shop-page'>
        {console.log(match)}
        <Route exact path='/shop' component={CollectionsOverview} />
        <Route path={`${match.path}:collectionRouteName`} component={CollectionPage} />
    </div>
);

export default ShopPage;
