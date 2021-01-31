import {useState, useEffect, useReducer} from 'react';
import {useHistory } from "react-router-dom";

import Datacontext from 'context/data/data';
const TicketContainer = props => {
    return (
        <div style={{
            border: '1px solid black',
            padding: '20px',
            borderRadius: '10px',
            width: 'max-content'
        }}>
            Ticket cotainer list of all Purchased which wasnt draw
        </div>
    )
}

export default TicketContainer;