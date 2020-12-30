import {ADD_PRODUCTS} from "../action-types/products-types";

const initialState = {
    products: []
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCTS:
            return {...state, products: action.payload}
        default:
            return {...state}

    }
}
