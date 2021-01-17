import React, {useState, useContext} from 'react';
import Input from 'components/input';
import {Link} from "react-router-dom";

import Authcontext from 'context/auth/auth';
const Signup = (props) => {
    const {signUp, signUpError, clearError} = useContext(Authcontext);
    const [signUpData, setSignUpData] = useState({
        email: '',
        password: '',
        name: ''
    });

    const onChangeHandle = (e) => {
        clearError(e);
        const{name, value} = e.target;
        setSignUpData((prevState) => ({
            ...prevState,
            [name]: value,
        }))        
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        signUp(signUpData);
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
                    value={signUpData.email}
                    onChange={onChangeHandle}
                    errorText={signUpError['email']}
                />
                <Input 
                    label="Password"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="new-password"
                    value={signUpData.password}
                    onChange={onChangeHandle}
                    errorText={signUpError['password']}
                />
                <Input 
                    label="Full Name"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    autoComplete="name"
                    value={signUpData.name}
                    onChange={onChangeHandle}
                    errorText={signUpError['name']}
                />
                <button>Create Account</button>
            </form>
            <Link to={`/auth/signin`}>Go back to signin page</Link>
        </div>
    )
}

export default Signup;