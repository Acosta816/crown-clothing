import React from 'react'
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import sectionsData from './sections-data';

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
                    this.state.sections.map(({ title, id, imageUrl, size }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>

        )
    }

}
