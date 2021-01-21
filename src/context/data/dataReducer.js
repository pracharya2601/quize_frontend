import _, { omit } from 'lodash';
import { 
    PLAY_QUIZE, 
    GET_SINGLE_QUIZE, 
    SUBMIT_ANSWER, 
    POINTS_FOR_PURCHASE,
    GET_POINTS,
    GET_POINTS_HISTORY,
    ADD_TO_CART, 
    ADD_ITEM_TO_CART,
    CHECKOUT,
    ERROR, 
    CLEAR_MESSAGE, 
    CLEAR_ERROR 
} from "./types";

export const initialState = {
    quizes: [],
    quizeID: '',
    quize: '',
    options: [],
    pointsForPurchase: [],
    pointsHistory: [],
    points: {
       availablePoints: 0,
       earnedPoints: 0,
       purchasedPoints: 0,
       usedPoints: 0,
    },
    cart: {},
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
            return {...state, 
                submitMessage: action.payload.message,
                points: {
                    ...state.points,
                    availablePoints: state.points.availablePoints + action.payload.point,
                    earnedPoints: state.points.earnedPoints + action.payload.point,
                }
            };
        case POINTS_FOR_PURCHASE: 
            return {...state, pointsForPurchase: action.payload}
        case GET_POINTS: {
            return {...state, points: {
                ...state.points,
                availablePoints: action.payload.totalpoints,
                earnedPoints: action.payload.totalpointearn,
                purchasedPoints: action.payload.totalpointpurchase,
                usedPoints: action.payload.totalpointused,
            }}
        };
        case GET_POINTS_HISTORY:
            return {...state, pointsHistory: action.payload};
        case ADD_TO_CART: 
            return {...state, cart: action.payload};
        //case ADD_ITEM_TO_CART//need to workwith database or cookie
        case CLEAR_MESSAGE: 
            return{...state, submitMessage: action.payload.message};
        case CLEAR_ERROR: {
            return{...state, error: action.payload.error};
        }
        default: 
            return state;
    }
}