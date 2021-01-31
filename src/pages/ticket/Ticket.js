import {useState, useEffect, useContext} from 'react';
import {useHistory } from "react-router-dom";

import Datacontext from 'context/data/data';


import {addtocart, purchasedpoint, error} from 'context/data/actionCreaters';
import axios from 'axios';
import { randomNumber } from 'utils/other/randomNumber';

const API = process.env.REACT_APP_API_ENDPOINT

const Ticket = props => {
    const {state, dispatch} = useContext(Datacontext);
    const history = useHistory();
    const [ticketNumber, setTicketNumber] = useState({
        a: 0,
        b: 0, 
        c: 0,
        d: 0,
        e: 0
    })
    const type= "lotto";

    useEffect(() => {
        let mounted = true;
        Object.keys(ticketNumber).forEach((key) => {
            if(ticketNumber[key] < 0) {
                onChangeHandle(key, 0)
            }
            if(ticketNumber["a"] > 15) {
                onChangeHandle("a", 15);
            }
            if(ticketNumber[key] > 85) {
                onChangeHandle(key, 85)
            }
        })
        return function cleanup() {
            mounted = false
        }
        
    }, [ticketNumber]);

    useEffect(() => {
        let mounted = true;
        generateRandomNumber()
        return () => {
            mounted = false
        }
    }, [])

    const addToCartHandle = (e) => {
        e.preventDefault();
        console.log("submitted")
        const item = `${ticketNumber['a']}${ticketNumber['b']}${ticketNumber['c']}${ticketNumber['d']}${ticketNumber['e']}`
        axios.get(`${API}/cart/addcart?item=${item}&itemType=ticket&type=${type}`, {withCredentials: true})
        .then(({data}) => {
            console.log(data.data);
        }).catch((err) => {
            dispatch(error(err))
        })
    }

    ///cart/addcart
    const onChangeHandle = (name, value) => {
        setTicketNumber((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const generateRandomNumber = () => {
        setTicketNumber({
            a: randomNumber(15),
            b: randomNumber(85),
            c: randomNumber(85),
            d: randomNumber(85),
            e: randomNumber(85),
        })
    }
    
    return(
        <div style={{
            border: '1px solid black',
            padding: '20px',
            borderRadius: '10px',
            width: 'max-content'
        }}>
            <form onSubmit={addToCartHandle}>
                <input 
                    name="a" 
                    type="number"
                    value={ticketNumber.a} 
                    onChange={(e) => onChangeHandle(e.target.name, e.target.value)}
                    min="0"
                    max="85"
                />
                <input 
                    name="b" 
                    type="number"
                    value={ticketNumber.b} 
                    onChange={(e) => onChangeHandle(e.target.name, e.target.value)}
                    min="0"
                    max="85"
                />
                <input 
                    name="c" 
                    type="number"
                    value={ticketNumber.c} 
                    onChange={(e) => onChangeHandle(e.target.name, e.target.value)}
                    min="0"
                    max="85"
                />
                <input 
                    name="d" 
                    type="number"
                    value={ticketNumber.d} 
                    onChange={(e) => onChangeHandle(e.target.name, e.target.value)}
                    min="0"
                    max="85"
                />
                <input 
                    name="e" 
                    type="number"
                    value={ticketNumber.e} 
                    onChange={(e) => onChangeHandle(e.target.name, e.target.value)}
                    min="0"
                    max="85"
                />
                <button type="submit">Add to cart</button>
            </form>
            <br />
            <button onClick={generateRandomNumber}>Generate random number</button>
        </div>
    )
}

export default Ticket;