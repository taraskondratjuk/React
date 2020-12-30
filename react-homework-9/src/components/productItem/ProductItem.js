import React from "react";
import style from "./productItem.module.css"
import {useDispatch, useSelector} from "react-redux";
import {ADD_WISH_ITEM} from "../../Redux/action-types/wish-types";
import {ADD_TO_CART} from "../../Redux/action-types/cart-types";


export default function ProductItem(props) {
    const dispatch = useDispatch()
    const {id, title, price, description, image} = props.product
    const {products, wishlist, cart} = useSelector(({products: {products}, wishlist: {wishlist}, cart: {cart}}) => ({
        products,
        wishlist,
        cart
    }));


    const addWish = () => {
        const findProduct = products.find(product => product.id === id)
        dispatch({type: ADD_WISH_ITEM, payload: findProduct})

    }

    const addToCart = () => {
        const findProduct = products.find(product => product.id === id)
        dispatch({type: ADD_TO_CART, payload: findProduct})
    }


    const showWishList = wishlist.find(el => el.id === id)
    const buttonWish = showWishList ? "remove from wish list" : "add to wish list"
    const buttonWishColor = showWishList ? "red" : "green"


    const showCartList = cart.find(el => el.id === id)
    const buttonCart = showCartList ? "remove from cart" : "add to cart"
    const buttonCartColor = showCartList ? "red" : "green"


    return (
        <div className={style.block}>
            <img className={style.img} src={image} alt="img"/>
            <h2 className={style.title}>{title}</h2>
            <h3 className={style.price}>Price : {price} </h3>

            <div >{description}</div>

            <button style={{background:buttonWishColor}} onClick={addWish}>{buttonWish}</button>
            <button style={{background:buttonCartColor}} onClick={addToCart}>{buttonCart}</button>
        </div>
    )
}
