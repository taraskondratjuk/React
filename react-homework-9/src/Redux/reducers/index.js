import {combineReducers, createStore} from "redux";
import {productsReducer} from "./products-reducer";
import {wishReducer} from "./wish-reducer";
import {cartReducer} from "./cart-reducer";


export const reducer = combineReducers({
    products: productsReducer,
    wishlist: wishReducer,
    cart: cartReducer
})

export const store = createStore(reducer)