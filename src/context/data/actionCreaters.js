import { 
    PLAY_QUIZE, 
    GET_SINGLE_QUIZE, 
    SUBMIT_ANSWER, 
    POINTS_FOR_PURCHASE,
    GET_POINTS,
    GET_POINTS_HISTORY,
    ERROR, 
    CLEAR_MESSAGE, 
    CLEAR_ERROR 
} from "./types";


export const playquizes = (response) => ({type: PLAY_QUIZE, payload: response});
export const getsinglequize = (response) => ({type: GET_SINGLE_QUIZE, payload: response});
export const submitanswer = (response) => ({type: SUBMIT_ANSWER, payload: response});

export const pointforpurchase = (response) => ({type: POINTS_FOR_PURCHASE, payload: response});
export const getpoints = (response) => ({type: GET_POINTS, payload: response});
export const getpoinsthistory = (response) => ({type: GET_POINTS_HISTORY, payload: response});


export const clearmessage = (response) => ({type: CLEAR_MESSAGE, payload: response});
export const clearerror = (response) => ({type: CLEAR_ERROR, payload: response});
export const error = (response) => ({type: ERROR, response})