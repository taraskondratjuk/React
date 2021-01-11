import {combineReducers, createStore} from "redux";
import {likeReducer} from "./like-reducer";
import {cartReducer} from "./cart-reducer";


export const reducer = combineReducers({
    likeItem: likeReducer,
    cartItem: cartReducer
})

export const store = createStore(reducer)