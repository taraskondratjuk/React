import {ADD_TO_LIKE_STATE, CLEAR_TO_LIKE_STATE,} from "../action-types/like-types";


const initState = {
    likeItem: []
}

export const likeReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_LIKE_STATE:
            const updateWishList = state.likeItem.filter((el) => el.id !== action.payload.id)

            if (updateWishList.length === state.likeItem.length) {
                updateWishList.push(action.payload)
            }

            return {...state, likeItem: updateWishList}

        case CLEAR_TO_LIKE_STATE:
            return {likeItem: []}
        default:
            return {...state}
    }
}
