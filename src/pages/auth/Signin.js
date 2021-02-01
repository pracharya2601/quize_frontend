import React, {useState, useContext} from 'react';
import {Link, useHistory } from "react-router-dom";

import Authcontext from 'context/auth/auth';
import Container from 'components/container';
import { Box, BoxTitle, BoxText} from 'components/box';
import Input from 'components/input';
import Button from 'components/button';

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
        <Container>
            <Box
                margin={'auto'}
            >
                <BoxTitle>Login</BoxTitle>
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
                    <Link to={`/auth/resetpassword`}>
                        <BoxText>Reset Password </BoxText>
                    </Link>
                    <Button type="submit">
                        Sign In
                    </Button>
                </form>
                    <Link  to={`/auth/signup`}>
                        <BoxText>Go to Signup page</BoxText>
                    </Link>
            </Box>
        </Container>
    )
}

export default Signin;