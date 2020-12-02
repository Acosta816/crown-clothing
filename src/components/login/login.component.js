import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './login.styles.scss';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }//state
    }//con

    inputChange = (e) => {
        console.log(e.target.value);
        this.setState((prevState) => {
            return {
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state);
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState(prevState => {
                return {
                    email: '',
                    password: ''
                }
            });
        } catch (err) {

        }


        this.setState(() => {
            return {
                email: '',
                password: ''
            }
        })
    }

    render() {
        console.log('render() ...called')
        return (
            <div className='login'>
                <h2 className='title'>Already have an account?</h2>
                <span>Login with your email and password</span>

                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <FormInput
                        label='Email'
                        type='email'
                        name='email'
                        value={this.state.email}
                        required
                        inputChange={this.inputChange}
                    />
                    <FormInput
                        label='Password'
                        type='password'
                        name='password'
                        value={this.state.password}
                        required
                        inputChange={this.inputChange}
                    />

                    <div className='buttons'>
                        <CustomButton type='submit'>LOGIN</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleButton>Sign in with GOOGLE</CustomButton>
                    </div>

                </form>
            </div>
        )
    }

};//Login

export default Login;