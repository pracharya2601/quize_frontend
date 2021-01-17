import React, {useState, useContext} from 'react';
import Input from 'components/input';
import {Link, useHistory } from "react-router-dom";


import Authcontext from 'context/auth/auth';
import userEvent from '@testing-library/user-event';

const Signin = (props) => {
    const {signIn, signInError, clearError} = useContext(Authcontext);
    const  history = useHistory();
    const [signinData, setSignInData] = useState({
        email: '',
        password: ''
    });

    const onChangeHandle = (e) => {
        clearError(e);
        const{name, value} = e.target;
        setSignInData((prevState) => ({
            ...prevState,
            [name]: value,
        }))        
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        signIn(signinData, () => {
            history.push('/');
        })
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onHandleSubmit}>
                <Input 
                    label="Email"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="email"
                    required
                    value={signinData.email}
                    onChange={onChangeHandle}
                    errorText={signInError['email']}
                />
                <Input 
                    label="Password"
                    type="password"
                    id="current-password"
                    name="password"
                    placeholder="Password"
                    autoComplete='current-password'
                    required
                    value={signinData.password}
                    onChange={onChangeHandle}
                    errorText={signInError['password']}

                />
                <Link to={`/auth/resetpassword`}>Reset Password</Link>
                <br />
                <button>Sign In</button>
            </form>
            <Link to={`/auth/signup`}>Go to Signup page</Link>
        </div>
    )
}

export default Signin;