import React, {useState, useContext} from 'react';
import Input from 'components/input';
import {Link} from "react-router-dom";
import Authcontext from 'context/auth/auth';

import Container from 'components/container';
import { Box, BoxTitle, BoxText } from 'components/box';
import Button from 'components/button';

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
        <Container>
            <Box
                margin={'auto'} 
            >
            <BoxTitle>Signup</BoxTitle>
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
                <Button type="submit">
                    Create Account
                </Button>
            </form>
            <Link to={`/auth/signin`}>
                <BoxText>Go back to signin page</BoxText>
            </Link>
            </Box>
        </Container>
    )
}

export default Signup;