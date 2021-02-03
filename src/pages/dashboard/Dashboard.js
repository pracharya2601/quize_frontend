import React, {useContext} from 'react';
import {useHistory } from "react-router-dom";
import Authcontext from 'context/auth/auth';
import PointsContainer from 'layout/dashboard/PointsContainer';
import TicketContainer from 'layout/dashboard/TicketContainer';
import Navbar from 'components/navbar';
import Container from 'components/container';
import { Box, BoxTitle } from 'components/box';
import Button from 'components/button';
import Flexbox from 'components/flexbox';
import PointButtonContainer from 'layout/dashboard/PointButtonContainer';

const Dashboard = (props) => {
    const {isSignedIn, user} = useContext(Authcontext);
    const  history = useHistory();
    console.log(user);
    if(!isSignedIn) {
        return null; //splash screen
    }
    return (
        <Container>
            <Navbar/>
            <Flexbox>
            <BoxTitle>Hello! {user.name.split(' ')[0]}</BoxTitle>
            </Flexbox>
            <Flexbox>
                <PointsContainer />
                <PointButtonContainer />
            </Flexbox>
            <Flexbox>
                <TicketContainer />
                <Box shadow="sh1">
                <Button onClick={() => history.push('/ticket/purchase')} >Get Ticket</Button>
                </Box>
            </Flexbox>
        </Container>
    )
}
export default Dashboard;