import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleButton, invertedColor, ...otherProps }) => (
    <button
        className={`custom-button ${invertedColor ? 'inverted-color' : null} ${isGoogleButton ? 'google-button' : null}`}
        {...otherProps}
    >
        {children}
    </button>
);


export default CustomButton;