import React, {useState, useEffect, useContext} from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';
import Datacontext from 'context/data/data';
import axios from 'axios';

import {getpoinsthistory,clearpointhistory, error} from 'context/data/actionCreaters';

const API = process.env.REACT_APP_API_ENDPOINT

const PointHistory = (props) => {
    const {historySlug} = useParams();
    const history = useHistory();

    const [param, setParam] = useState();
    const [pageNumber, setPageNumber] = useState(1)
    const {state, dispatch} = useContext(Datacontext);

    useEffect(() => {
        let mounted = true;
        let next = param === historySlug ? state.pointsHistory.next : '';
        if(param !== historySlug) {
            dispatch(clearpointhistory());
        }
        axios.get(`${API}/points/${historySlug}?after=${next}`, {withCredentials: true})
        .then(({data}) => {
            dispatch(getpoinsthistory(data));
            setParam(historySlug);
        })
        .catch((e) => {
            dispatch(error(e));
        })
        return function cleanup() {
            mounted = false
        }
    }, [pageNumber]);

    const handleNextPage = () => {
        setPageNumber(pageNumber+1);
    }
    const {pointsHistory} = state;

    if(!pointsHistory) {
        return <h1>Loading...</h1>
    }
    return(
        <div>
            <Link to={'/dashboard'}>Back to Dashboard</Link>
            <button onClick={() => history.push('/dashboard')}>Go to Dashboard</button>
            <h1>{historySlug == 'earned' ? 'Your history of earning points Playing quize' : "Your purchased history"}</h1>
                {pointsHistory.lists.length > 0 ? pointsHistory.lists.map((item, index) => (
                    <div key={item.id} style={{padding: '10px', border: '1px solid green', borderRadius: '10px', width: 'max-content'}}>
                        <p>{index+1}</p>
                        <h4>Points Earn: {item.point}</h4>
                        <p>Status: {item.status === 'correct' ? "Correct Answer" : item.status}</p>
                        <p>Date:{item.date}</p>
                    </div>
                )) : (
                    <h3>You dont have any history</h3>
                )}
             <button
                onClick={handleNextPage}
                disabled={state.pointsHistory.next ? false : true}
            >
                Load more
            </button>
        </div>
    )
}

export default PointHistory;