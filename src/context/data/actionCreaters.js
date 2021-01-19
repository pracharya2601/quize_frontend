import { PLAY_QUIZE, GET_SINGLE_QUIZE, SUBMIT_ANSWER, ERROR, CLEAR_MESSAGE, CLEAR_ERROR } from "./types";


export const playquizes = (response) => ({type: PLAY_QUIZE, payload: response});
export const getsinglequize = (response) => ({type: GET_SINGLE_QUIZE, payload: response});
export const submitanswer = (response) => ({type: SUBMIT_ANSWER, payload: response});


export const clearmessage = (response) => ({type: CLEAR_MESSAGE, payload: response});
export const clearerror = (response) => ({type: CLEAR_ERROR, payload: response});
export const error = (response) => ({type: ERROR, response})