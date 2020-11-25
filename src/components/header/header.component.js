import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <NavLink className='logo-container' to='/'>
            <Logo className='logo' />
        </NavLink>

        <div className='options'>
            <NavLink className='option' to='/shop' activeClassName="activeLink">
                SHOP
            </NavLink>
            <NavLink className='option' to='/contact' activeClassName="activeLink">
                CONTACT
            </NavLink>


        </div>

    </div>
);

export default Header;