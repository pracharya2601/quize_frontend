import React, {useState, useEffect, useContext} from 'react';
import {Link, useParams} from 'react-router-dom';
import Datacontext from 'context/data/data';
import {addtocart} from 'context/data/actionCreaters';

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const Points = (props) => {
    const [point, setPoint] = useState(0);
    const [amount, setAmount] = useState(0);
    const {state, dispatch} = useContext(Datacontext);

    useEffect(() => {
        let mounted = true;
        if(amount < 5) {
            onChangeHandle(5)
        }
        return function cleanup() {
            mounted = false
        }
        
    }, [amount]);

    const onChangeHandle = (amt) => {
        setAmount(amt);
        setPoint(amt * 50)
    }
    const onClickHandle = (type, val) => {
        if(type === INCREMENT) {
            onChangeHandle(val + 1)
        } else {
            onChangeHandle(val - 1)
        }
    }
    const addToCartHandle = () => {
        let date = new Date().toISOString()
        let id = date.replace(/[.,:-]/g,"")
        let data = {
            point: point,
            amount: amount,
            date: date,
            id: id
        }
        dispatch(addtocart(data));
    }

    const purchased = () => {
        // point: point,
        // amount: amount,
        // date: date,
        // id: id,
        // token: "sdljfskldjsdk12321",
        // productName: "Drogon",
        // productUrl: "http://gameofthrones.com/buy/Dragons",
    }

    return (
        <div>
            <Link to={'/dashboard'}>Back to Dashboard</Link>
            <br />
            <Link to={'/dashboard/cart'}>Cart</Link>
            <div>

                <div style={{padding: '10px', border: '1px solid green', borderRadius: '10px', width: 'max-content'}}>
                    <h4>Purchase points</h4>
                    <div>
                        <label>Amount</label>
                        <input type="number" name="amount" value={amount} onChange={(e) => onChangeHandle(e.target.value)} min="1" />
                    </div>
                    <div>
                        <label>Points</label>
                        <input type="number" name="point" value={point} disabled />
                    </div>
                    <button onClick={() => onClickHandle(INCREMENT, amount)}>Add points</button>
                    <button onClick={() => onClickHandle(DECREMENT, amount)}>Subtract points</button>
                    <br/>
                    <button onClick={addToCartHandle}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Points;