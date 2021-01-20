import React, {useEffect, useContext} from 'react';
import {Link, useParams} from 'react-router-dom';

import Datacontext from 'context/data/data';


const PointHistory = (props) => {
    const {historySlug} = useParams();
    const {state, getPointsHistory} = useContext(Datacontext);

    useEffect(() => {
        let mounted = true;
        getPointsHistory(historySlug);
        return function cleanup() {
            mounted = false
        }
        
    }, []);
    const {pointsHistory} = state;
    if(!pointsHistory) {
        return <h1>Loading...</h1>
    }
    
    return(
        <div>
            <Link to={'/dashboard'}>Back to Dashboard</Link>
            <h1>Your history of earning points Playing quize</h1>
                {pointsHistory.length > 0 ? pointsHistory.map((item) => (
                    <div key={item.id} style={{padding: '10px', border: '1px solid green', borderRadius: '10px', width: 'max-content'}}>
                        <h4>Points Earn: {item.point}</h4>
                        <p>Status: {item.status === 'correct' ? "Correct Answer" : item.status}</p>
                        <p>Date:{item.date}</p>
                    </div>
                )) : (
                    <h3>You dont have any history</h3>
                )}
        </div>
    )
}

export default PointHistory;