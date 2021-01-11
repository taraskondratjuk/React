import {ADD_TO_CART_STATE, CLEAR_TO_CART_STATE} from "../action-types/cart-types";


const initState = {
    cartItem: []
}

export const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART_STATE:
            const updateWishList = state.cartItem.filter((el) => el.id !== action.payload.id)

            if (updateWishList.length === state.cartItem.length) {
                updateWishList.push(action.payload)
            }

            return {...state, cartItem: updateWishList}

        case CLEAR_TO_CART_STATE:
            return {cartItem: []}
        default:
            return {...state}
    }
}