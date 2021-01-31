import { 
    PLAY_QUIZE, 
    GET_SINGLE_QUIZE, 
    SUBMIT_ANSWER, 
    POINTS_FOR_PURCHASE,
    GET_POINTS,
    GET_POINTS_HISTORY,
    CLEAR_POINT_HISTORY,
    ADD_TO_CART,
    ADD_ITEM_TO_CART,
    DELETE_CART_ITEM,
    CHECKOUT,
    PURCHASE_POINT,
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
export const clearpointhistory = (response) => ({type: CLEAR_POINT_HISTORY});

export const addtocart = (response) => ({type: ADD_TO_CART, payload: response});
export const additemtocart = (response) => ({type: ADD_ITEM_TO_CART, payload: response});
export const deletecartitem = (response) => ({type: DELETE_CART_ITEM, payload: response});

export const purchasedpoint = (response) => ({type: PURCHASE_POINT, payload: response});


export const clearmessage = (response) => ({type: CLEAR_MESSAGE, payload: response});
export const clearerror = (response) => ({type: CLEAR_ERROR, payload: response});
export const error = (response) => ({type: ERROR, response})