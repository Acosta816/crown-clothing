import React from 'react';
import Login from '../../components/login/login.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './login-register.styles.scss';

//This is the container that renders both the Login component and the Register component
const LoginRegisterContainerPage = () => (
    <div className='login-register'>
        <Login />
        <SignUp />
    </div>
)
export default LoginRegisterContainerPage;