import React, {useEffect, useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import Datacontext from 'context/data/data';
import {addtocart,additemtocart, purchasedpoint, deletecartitem, error} from 'context/data/actionCreaters';
import axios from 'axios';

const API = process.env.REACT_APP_API_ENDPOINT

const Cart = (props) => {
    const {state, dispatch} = useContext(Datacontext);
    const history = useHistory();

    useEffect(() => {
        let mounted = true;
        axios.get(`${API}/cart`, {withCredentials: true})
        .then(({data}) => {
            dispatch(additemtocart(data));
        }).catch((err) => {
            dispatch(error(err))
        })
        return () => {
            mounted = false
        }
    }, [])

    const purchasePointHandle = () => {
        let data = {
            ...state.cart,
            token: 'sldjlsdlksjkldjlkjsd'
        }
        axios.post(`${API}/points/purchased`, data, {withCredentials: true})
        .then(({data}) => {
            console.log(data.data);
            dispatch(purchasedpoint(data.data));
            history.push('/dashboard');
        }).catch((err) => {
            dispatch(error(err))
        })
    }
    const deleteCartHandle = (id) => {
        console.log(id);
        axios.delete(`${API}/cart/${id}`, {withCredentials: true})
        .then(() => {
            dispatch(deletecartitem(id));
        }).catch((err) => {
            dispatch(error(err))
        })
    }
    console.log(state.otherCarts.itemLists)
    return (
        <div>
            <Link to={'/dashboard'}>Back to Dashboard</Link>
            {state.cart.point ? (
                <div
                style={{padding: '10px', border: '1px solid green', borderRadius: '10px', width: 'max-content'}}
                >
                    <h3>Number of points: {state.cart.point}</h3>
                    <p>Amount: {state.cart.amount}</p>
                    <button onClick={purchasePointHandle}>Proceed with Khalti Payment</button>
                    <button onClick={() => dispatch(addtocart({}))}>Clear Point cart</button>
                </div>
            ): (
                <div>
                    <h5>Not Points added to cart</h5>
                    <Link to={`/points/list`}><button>Add Point to Cart</button></Link>
                </div>
            )}
            {state.otherCarts.itemLists.length > 0 && state.otherCarts.itemLists.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <h5>{item.description}</h5>
                    <h5>{item.itemType}</h5>
                    <h5>Number of item: 1</h5>
                    <h5>Price: <code>100</code></h5>
                    <button onClick={() => deleteCartHandle(item.id)}>delete</button>
                </div>
            ))}
        </div>
    )
}

export default Cart;