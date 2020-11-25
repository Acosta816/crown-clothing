import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import collections from './collections-data';

//state holds the array of collection objects
class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: collections
        }
    }



    render() {
        return (
            <div className='shop-page'>
                {
                    this.state.collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }

}

export default ShopPage;
