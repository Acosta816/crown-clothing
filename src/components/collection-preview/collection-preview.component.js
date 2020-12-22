import React from 'react';
import { NavLink } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .map(item => {
                    return <CollectionItem key={item.id} item={item} />
                })}
        </div>
        <NavLink className='see-all' to={`/shop/${title.toLowerCase()}`}>See all {title} >></NavLink>
    </div>
);


export default CollectionPreview;