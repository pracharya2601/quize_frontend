import React, {useEffect, useContext} from 'react';
import axios from 'axios'
import {Link, useParams} from 'react-router-dom';
import Datacontext from 'context/data/data';
import {pointforpurchase, error} from 'context/data/actionCreaters';

const API = process.env.REACT_APP_API_ENDPOINT

const Points = (props) => {
    const {state, dispatch} = useContext(Datacontext);

    useEffect(() => {
        let mounted = true;
        axios.get(`${API}/points`, {withCredentials: true})
        .then(({data}) => {
            dispatch(pointforpurchase(data));
        }).catch((e) =>{
            dispatch(error(e));
        })
        return function cleanup() {
            mounted = false
        }
        
    }, []);
    const {pointsForPurchase} = state;
    console.log(pointsForPurchase)
    return (
        <div>
            <Link to={'/dashboard'}>Back to Dashboard</Link>
            <div>
            {pointsForPurchase.map((item) => (
                    <div key={item.id} style={{padding: '10px', border: '1px solid green', borderRadius: '10px', width: 'max-content'}}>
                        <h4>{item.name}</h4>
                        <p>Point Value: {item.point}</p>
                        <p>Point price: {item.price}</p>
                        <button>Add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Points;