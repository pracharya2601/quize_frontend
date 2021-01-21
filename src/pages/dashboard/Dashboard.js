import React, {useContext} from 'react';
import {useHistory } from "react-router-dom";
import Authcontext from 'context/auth/auth';
import PointsContainer from 'layout/dashboard/PointsContainer';

const Dashboard = (props) => {
    const {isSignedIn, signOut, user} = useContext(Authcontext);

    const  history = useHistory();
    const handleSignout = () => {
        signOut();
        history.push('/');
    }
    if(!isSignedIn) {
        return null; //splash screen
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleSignout}>Logout</button>
            <button onClick={() => history.push('/dashboard/cart')}>Cart</button>
            <hr />
            <PointsContainer />
            <button onClick={() => history.push('/dashboard/play')} disabled={!user.playAccess}>Get started</button>
            <button onClick={() => history.push('/points/list')} disabled={!user.playAccess}>Purchase Points</button>
            
        </div>
    )
}
export default Dashboard;