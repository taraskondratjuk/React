const initialState = {
    wish: [],
    wishCount: null

}


export const wishReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_WISH_ITEM":
            return {...state, wish: action.payload, wishCount: state.wishCount + 1}
        case "REMOVE_WISH_ITEM":
            return {...state, wish: []}
        default:
            return {...state}

    }
}