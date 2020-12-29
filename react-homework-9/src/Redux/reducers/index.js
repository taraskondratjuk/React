import {combineReducers, createStore} from "redux";
import {productsReducer} from "./products-reducer";
import {wishReducer} from "./wish-reducer";
import {cartReducer} from "./cart-reducer";





export const reducer = combineReducers({
    products: productsReducer,
    wish: wishReducer,
    cart: cartReducer
})

export const store = createStore(reducer)