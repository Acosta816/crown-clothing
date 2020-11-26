import React from 'react';
import Login from '../../components/login/login.component';

import './login-register.styles.scss';

//This is the container that renders both the Login component and the Register component
const LoginRegisterContainerPage = () => (
    <div className='login-register'>
        Welcome to the login/register page
        <Login />
    </div>
)
export default LoginRegisterContainerPage;