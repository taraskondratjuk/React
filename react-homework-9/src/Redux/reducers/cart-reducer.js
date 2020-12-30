import {ADD_TO_CART} from "../action-types/cart-types";

const initState = {
    cart: []
}

export const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART:

            const updateWishList = state.cart.filter((el) => el.id !== action.payload.id)

            if (updateWishList.length === state.cart.length) {
                updateWishList.push(action.payload)
            }

            return {...state, cart: updateWishList}
        default:
            return {...state}
    }
}