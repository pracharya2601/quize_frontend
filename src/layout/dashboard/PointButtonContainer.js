import React, {useContext} from 'react';

import {Box, BoxTitle, BoxText} from "components/box";
import Button from "components/button";
import { StyledCol } from './dashboard.styles';

import {useHistory } from "react-router-dom";
import Authcontext from 'context/auth/auth';

const PointButtonContainer = (props) => {
    const {user} = useContext(Authcontext);
    const  history = useHistory();
    return (
        <Box shadow="sh1">
            <BoxTitle>Get More Points</BoxTitle>
            <StyledCol>
                <BoxText>Play quize</BoxText>
                <Button onClick={() => history.push('/dashboard/play')} disabled={!user.playAccess}>Get started</Button>
            </StyledCol>
            <StyledCol>
                <BoxText>Buy points</BoxText>
                <Button onClick={() => history.push('/points/list')} disabled={!user.playAccess}>Purchase Points</Button>
            </StyledCol>
        </Box>
    );
}

export default PointButtonContainer;