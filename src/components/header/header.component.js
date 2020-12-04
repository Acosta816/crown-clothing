import React from 'react';
import { connect } from 'react-redux';
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

//return an object where the key/value pairs will be the props that will be injected into Header.
//The props being injected will be pulled from the app state (the root reducer and then in this case the rootReducer.user since we want the userReducer)
const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser //injecting master state root reducer's user.currentUser state 
});

//connect allows us to connect to the redux state and just use the word "state" to access the master state root reducer and map the state to props in Header
export default connect(mapStateToProps)(Header);