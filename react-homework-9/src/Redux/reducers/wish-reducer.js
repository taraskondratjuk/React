import {ADD_WISH_ITEM} from "../action-types/wish-types";


const initialState = {
    wishlist: []
}

export const wishReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WISH_ITEM:

            const updateWishList = state.wishlist.filter((el) => el.id !== action.payload.id)

            if (updateWishList.length === state.wishlist.length) {
                updateWishList.push(action.payload)
            }

            return {...state, wishlist: updateWishList}

        default:
            return {...state}

    }
}