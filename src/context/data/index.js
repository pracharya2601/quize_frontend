import {useState, useEffect, useReducer} from 'react';
import Datacontext from './data';
import axios from 'axios';
import {dataReducer, initialState} from './dataReducer';
import {
    playquizes,
    getsinglequize,
    submitanswer,
    getpoints,
    getpoinsthistory,
    clearmessage,
    clearerror, 
    error} from './actionCreaters';

const API = process.env.REACT_APP_API_ENDPOINT


const DataProvider = ({children}) => {
    const [state, dispatch] = useReducer(dataReducer, initialState);

    const playQuize = () => {
        axios.get(`${API}/quize/play_quize`, {withCredentials: true})
            .then(({data}) => {
                dispatch(playquizes(data));
            }).catch((e) =>{
                dispatch(error(e));
            })
    }

    const getSingleQuestion = () => {
        const singleSlug = state.quizes[0];
        console.log(singleSlug);
        axios.get(`${API}/quize/play_quize/${singleSlug}`, {withCredentials: true})
        .then(({data}) => {
            dispatch(getsinglequize(data));
        }).catch((e) =>{
            dispatch(error(e));
        })
    }
    const submitAnswer = (answer) => {
        console.log(state.quizeID);
        axios.post(`${API}/quize/play_quize/${state.quizeID}`, {ans: answer}, {withCredentials: true})
        .then(({data}) => {
            dispatch(submitanswer(data));
        }).catch((e) => {
            dispatch(error(e))
        })
    }

    const getPoints = () => {
        axios.get(`${API}/points/available`, {withCredentials: true})
        .then(({data}) => {
            dispatch(getpoints(data))
        })
        .catch((e) => {
            dispatch(error(e));
        })
    }

    //clear message
    const clearMessage = () => {
        console.log("Clear message");
        dispatch(clearmessage({message: ''}))
    }

    const clearError = () => {
        console.log("clear error")
        dispatch(clearerror({error: ''}))
    }

    //clear error

    return(
        <Datacontext.Provider
            value={{
                state, 
                dispatch,
                playQuize,
                getSingleQuestion,
                submitAnswer,
                clearMessage,
                clearError,
                getPoints,
            }}
        >
            {children}
        </Datacontext.Provider>
    )
}

export default DataProvider;
