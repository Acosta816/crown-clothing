import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

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

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

        this.setState(() => {
            return {
                email: '',
                password: ''
            }
        })
    }

    render() {

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

                    <CustomButton type='submit'>LOGIN</CustomButton>
                </form>
            </div>
        )
    }

};//Login

export default Login;