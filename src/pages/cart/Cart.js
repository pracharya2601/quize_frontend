import React, {useContext} from 'react';
import {Link, useParams} from 'react-router-dom';
import Datacontext from 'context/data/data';
import {addtocart} from 'context/data/actionCreaters';

const Cart = (props) => {
    const {state, dispatch} = useContext(Datacontext);
    console.log(state.cart)
    return (
        <div>
            <Link to={'/dashboard'}>Back to Dashboard</Link>
            {state.cart.point ? (
                <div
                style={{padding: '10px', border: '1px solid green', borderRadius: '10px', width: 'max-content'}}
                >
                    <h3>Number of points: {state.cart.point}</h3>
                    <p>Amount: {state.cart.amount}</p>
                    <button>Proceed with Khalti Payment</button>
                    <button onClick={() => dispatch(addtocart({}))}>Clear Point cart</button>
                </div>
            ): (
                <div>
                    <h5>Not items</h5>
                    <Link to={`/points/list`}><button>Purchase points</button></Link>
                </div>
            )}
        </div>
    )
}

export default Cart;