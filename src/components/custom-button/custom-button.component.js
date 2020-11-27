import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleButton, ...otherProps }) => (
    <button
        className={`custom-button ${isGoogleButton ? 'google-button' : null}`}
        {...otherProps}
    >
        {children}
    </button>
);


export default CustomButton;