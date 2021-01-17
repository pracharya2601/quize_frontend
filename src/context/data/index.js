import {useState, useEffect, useReducer} from 'react';
import Datacontext from './data';
import axios from 'axios';
import {dataReducer} from './dataReducer';

import { PLAY_QUIZE, GET_SINGLE_QUIZE, SUBMIT_ANSWER } from "./types";

const API = process.env.REACT_APP_API_ENDPOINT

const initialState = {
    history : [
        {id: '1', date: '3434333', point: '3', status: 'correct answer'},
        {id: '2', date: '3434333', point: '4', status: 'correct answer'},
        {id: '3', date: '3434333', point: '5', status: 'correct answer'},
    ],
    loading: false,
    error: false,
}

const DataProvider = ({children}) => {
    const [state, dispatch] = useReducer(dataReducer, initialState);
    return(
        <Datacontext.Provider
            value={{state, dispatch}}
        >
            {children}
        </Datacontext.Provider>
    )
}

export default DataProvider;
