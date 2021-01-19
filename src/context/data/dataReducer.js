import _, { omit } from 'lodash';
import { PLAY_QUIZE, GET_SINGLE_QUIZE, SUBMIT_ANSWER, ERROR, CLEAR_MESSAGE, CLEAR_ERROR } from "./types";

export const initialState = {
    quizes: [],
    quizeID: '',
    quize: '',
    options: [],
    submitMessage: '',
    error: ''
}

export const dataReducer = (state, action) => {
    switch(action.type) {
        case PLAY_QUIZE: 
            return {...state, quizes: action.payload.quizes}
        case GET_SINGLE_QUIZE:
            return {
                ...state, 
                quize: action.payload.quize,
                quizeID: action.payload.qid,
                quizes: state.quizes.filter((item) => item != action.payload.qid),
                options: action.payload.options,
            };
        case SUBMIT_ANSWER:
            return {...state, submitMessage: action.payload.message };
        case CLEAR_MESSAGE: 
            return{...state, submitMessage: action.payload.message};
        case CLEAR_ERROR: {
            return{...state, error: action.payload.error};
        }
        default: 
            return state;
    }
}