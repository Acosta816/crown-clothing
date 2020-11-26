import React from 'react';

import './form-input.styles.scss';

//CUSTOM made <input/> + <label> COMBO made for forms in React.
//takes all the same props that an input takes.
//Returns a div which holds an input and label.
const FormInput = ({ inputChange, label, ...otherProps }) => (
    <div className='group'>
        {
            label ?
                (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>)
                : null
        }
        <input
            className='form-input'
            onChange={(e) => inputChange(e)}
            {...otherProps}
        />
    </div>
);

export default FormInput;