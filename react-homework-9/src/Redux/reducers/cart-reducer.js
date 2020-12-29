const initState = {
    cart: []
}


export const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {...state, cart: [...state.cart, action.payload]}
        case "REMOVE_TO_CART":
            return {...state.cart.splice(0,action.payload.id)}
        default:
            return {...state}

    }
}