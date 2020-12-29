import React from "react";
import style from "./productItem.module.css"
import {useSelector, useDispatch} from "react-redux";

export default function ProductItem(props) {
    const dispatch = useDispatch()
    const {id, title, price, description, image} = props.product
    const {products, wish, cart} = useSelector(({products: {products}, wish: {wish}, cart: {cart}}) => ({
        products,
        wish,
        cart
    }));


    const addWishToList = () => {
        const findProduct = products.find(product => product.id === id)
        dispatch({type: "ADD_WISH_ITEM", payload: findProduct})

    }

    const addToCart = () => {
        const findProduct = products.find(product => product.id === id)


        if (cart.id===findProduct.id){
            dispatch({type: "REMOVE_TO_CART", payload: findProduct})
        }else{
            dispatch({type: "ADD_TO_CART", payload: findProduct})
        }



    }

    return (
        <div className={style.block}>
            <img className={style.img} src={image} alt="img"/>
            <h2 className={style.title}>{title}</h2>
            <h3 className={style.price}>Price : {price} </h3>
            <div className={style.description}>{description}</div>

            <button onClick={addWishToList}>add wish list</button>
            <button onClick={addToCart}>add to cart</button>
        </div>
    )
}
