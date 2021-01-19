import React, {useContext} from 'react';
import {useHistory } from "react-router-dom";
import Authcontext from 'context/auth/auth';
import Datacontext from 'context/data/data';

const Dashboard = (props) => {
    const {isSignedIn, signOut, user} = useContext(Authcontext);
    const {state, dispatch, playQuize} = useContext(Datacontext);

    const  history = useHistory();
    const handleSignout = () => {
        signOut();
        history.push('/');
    }
    console.log(user)
    if(!isSignedIn) {
        return null; //splash screen
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => history.push('/dashboard/play')} disabled={!user.playAccess}>Get started</button>
            <button onClick={handleSignout}>Logout</button>
        </div>
    )
}
export default Dashboard;