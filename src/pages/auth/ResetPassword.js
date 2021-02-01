import React from 'react';
import {Link} from "react-router-dom";
import Container from 'components/container';
import { Box, BoxTitle, BoxText } from 'components/box';
import Input from 'components/input';
import Button from 'components/button';

const ResetPassword = (props) => {
    return (
        <Container>
        <Box
             margin={'auto'}
        >
            <BoxTitle>ResetPassword</BoxTitle>
            <form>
                <Input 
                    label="Email"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="email"
                    required
                    //value
                />

                <Button type="submit">
                    Reset Password
                </Button>
            </form>
            <Link  to={`/auth/signin`}>
                        <BoxText>Go back to Signin</BoxText>
                    </Link>
        </Box>
        </Container>
    )
}

export default ResetPassword;