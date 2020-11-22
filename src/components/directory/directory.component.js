import React from 'react'
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import sectionsData from './sections-data';

//just the container that renders the menuItems (hats, jackets, etc..)
export default class Directory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: sectionsData
        }
    };

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ id, ...sectionsProps }) => (
                        <MenuItem key={id} {...sectionsProps} />
                    ))
                }
            </div>

        )
    }

}


//NOTE: ES6 trick, use the ...spread operator to distribute the keys from sections to avoid sections.map(({ title, id, imageUrl etc..}))