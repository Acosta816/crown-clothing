import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
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
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/login-register'>LOG IN</Link>
            }

        </div>

    </div>
);

export default Header;