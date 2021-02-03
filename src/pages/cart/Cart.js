import React, {useEffect, useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import Datacontext from 'context/data/data';
import {addtocart,additemtocart, purchasedpoint, deletecartitem, error} from 'context/data/actionCreaters';
import axios from 'axios';

import Navbar from 'components/navbar';
import Container from 'components/container';
import { Box, BoxText, BoxTitle } from 'components/box';
import Button from 'components/button';
import Flexbox from 'components/flexbox';

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
        <Container>
            <Navbar />
            <Link to={'/dashboard'}>Back to Dashboard</Link>
            {state.cart.point ? (
                <Flexbox>
                    <Box>
                    <BoxText>Number of points: {state.cart.point}</BoxText>
                    <p>Amount: {state.cart.amount}</p>
                    <Button onClick={purchasePointHandle}>Proceed with Khalti Payment</Button>
                    <Button onClick={() => dispatch(addtocart({}))}>Clear Point cart</Button>
                    </Box>
                </Flexbox>
            ): (
                <Flexbox>
                    <Box>
                    <BoxText>Not Points added to cart</BoxText>
                    <Link to={`/points/list`}><Button>Add Point to Cart</Button></Link>
                    </Box>
                </Flexbox>
            )}
            <Box shadow="sh1">
            {state.otherCarts.itemLists.length > 0 && state.otherCarts.itemLists.map((item) => (
                <Flexbox key={item.id}>
                    <Box shadow="sh1">
                        <BoxTitle>{item.name}</BoxTitle>
                        <BoxText>{item.description}</BoxText>
                        <BoxText>{item.itemType}</BoxText>
                        <BoxText>Number of item: 1</BoxText>
                        <BoxText>Price: <strong>{item.price}</strong> Points</BoxText>
                        <Button onClick={() => deleteCartHandle(item.id)}>Remove from cart</Button>
                    </Box>
                </Flexbox>
            ))}
            </Box>
        </Container>
    )
}

export default Cart;