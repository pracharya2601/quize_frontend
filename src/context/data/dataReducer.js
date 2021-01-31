import _, { omit } from 'lodash';
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
    PURCHASE_POINT,
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
    pointsHistory: {
        next: null,
        lists: []
    },
    points: {
       availablePoints: 0,
       earnedPoints: 0,
       purchasedPoints: 0,
       usedPoints: 0,
    },
    cart: {},
    otherCarts: {
        itemCounts: 0,
        itemLists: []
    },
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
        case PURCHASE_POINT: 
            return {
                ...state,
                points: {
                    ...state.points,
                    availablePoints: state.points.availablePoints + action.payload.point,
                    purchasedPoints: state.points.purchasedPoints + action.payload.point,
                }
            }
        case GET_POINTS: {
            return {
                ...state, 
                points: {
                    ...state.points,
                    availablePoints: action.payload.totalpoints,
                    earnedPoints: action.payload.totalpointearn,
                    purchasedPoints: action.payload.totalpointpurchase,
                    usedPoints: action.payload.totalpointused,
            }}
        };
        case GET_POINTS_HISTORY:
            let newPointsHistory = action.payload.pointHistory;
            let statePointsHistory = state.pointsHistory.lists;
            let updatedLists = statePointsHistory.concat(newPointsHistory)
            return {
                ...state, 
                pointsHistory: {
                    ...state.pointsHistory,
                    next: action.payload.nextpage,
                    lists: updatedLists,
                }
            };
        case CLEAR_POINT_HISTORY: 
            return {
                ...state,
                pointsHistory: {
                    ...state.pointsHistory,
                    next: null,
                    lists: []
                }
            }
        case ADD_TO_CART: 
            return {...state, cart: action.payload};
        case ADD_ITEM_TO_CART: 
            return {
                ...state,
                otherCarts: {
                    ...state.otherCarts,
                    itemCounts: action.payload.itemCount,
                    itemLists: action.payload.itemLists
                }
            }
        case DELETE_CART_ITEM: 
            const newcount = state.otherCarts.itemLists -1;
            const newlist = _.reject(state.otherCarts.itemLists, (item) => item.id === action.payload)
            return {
                ...state, 
                otherCarts: {
                    ...state.otherCarts,
                    itemCounts:  newcount,
                    itemLists: newlist,
                }
            }
        case CLEAR_MESSAGE: 
            return{...state, submitMessage: action.payload.message};
        case CLEAR_ERROR: {
            return{...state, error: action.payload.error};
        }
        default: 
            return state;
    }
}