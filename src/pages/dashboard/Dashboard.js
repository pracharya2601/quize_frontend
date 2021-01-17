import React, {useContext} from 'react';
import {useHistory } from "react-router-dom";
import Authcontext from 'context/auth/auth';
import Datacontext from 'context/data/data';

const Dashboard = (props) => {
    const {signOut} = useContext(Authcontext);
    const {state, dispatch} = useContext(Datacontext);

    const  history = useHistory();
    const handleSignout = () => {
        signOut();
        history.push('/');
    }

    console.log(state)
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleSignout}>Logout</button>
        </div>
    )
}
export default Dashboard;