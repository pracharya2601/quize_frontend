import React, {useContext} from 'react';
import {useHistory } from "react-router-dom";
import Authcontext from 'context/auth/auth';
import Themecontext from 'context/theme/themecontext';
import PointsContainer from 'layout/dashboard/PointsContainer';
import TicketContainer from 'layout/dashboard/TicketContainer';
import Navbar from 'components/navbar';
import Container from 'components/container';
import { Box } from 'components/box';
import Button from 'components/button';
import Flexbox from 'components/flexbox';

const Dashboard = (props) => {
    const {isSignedIn, user} = useContext(Authcontext);
    const  history = useHistory();
    if(!isSignedIn) {
        return null; //splash screen
    }
    return (
        <Container>
            <Navbar />
            <Flexbox>
            <PointsContainer />
            <Box>
                <Button onClick={() => history.push('/dashboard/play')} disabled={!user.playAccess}>Get started</Button>
                <br />
                <Button onClick={() => history.push('/points/list')} disabled={!user.playAccess}>Purchase Points</Button>
            </Box>
            </Flexbox>

            <Flexbox>
            <TicketContainer />
            <Box>
            <Button onClick={() => history.push('/ticket/purchase')} >Get Ticket</Button>
            </Box>
            </Flexbox>
        </Container>
    )
}
export default Dashboard;