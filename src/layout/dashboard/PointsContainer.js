import React, {useEffect,useContext} from 'react';
import {useHistory } from "react-router-dom";
import Authcontext from 'context/auth/auth';
import Datacontext from 'context/data/data';

const PointsContainer = (props) => {
    const {state, getPoints} = useContext(Datacontext);
    const history = useHistory();
    useEffect(() => {
        let mounted = true;
        getPoints();
        return function cleanup() {
            mounted = false
        }
        
    }, []);
    const {points} = state;
    return (
        <div style={{
            border: '1px solid black',
            padding: '20px',
            borderRadius: '10px',
            width: 'max-content'
        }}>
            <h1>Available Points : {points.availablePoints}</h1>
            <p>Total earned: {points.earnedPoints}</p> 
            <button
                onClick={() => history.push('/points/history/earned')}
            >See all</button>
            <p>Total Purchased: {points.purchasedPoints}</p> 
            <button
                onClick={() => history.push('/points/history/purchased')}
            >See all</button>
            <p>Used: {points.usedPoints}</p> <button>See all</button>
        </div>
    )
}

export default PointsContainer;