import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

//just the container that renders the menuItems (hats, jackets, etc..)
const Directory = ({ sections }) => (
    <div className="directory-menu">
        {
            sections.map(({ id, ...sectionsProps }) => (
                <MenuItem key={id} {...sectionsProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);


//NOTE: ES6 trick, use the ...spread operator to distribute the keys from sections to avoid sections.map(({ title, id, imageUrl etc..}))