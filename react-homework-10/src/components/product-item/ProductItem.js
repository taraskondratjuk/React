import React from "react"
import style from "./productItem.module.css"
import likeProduct from "../../images/product-item-img/likeProduct.png"
import chosenLike from "../../images/product-item-img/chosenLike.png"
import scale from "../../images/product-item-img/scale.png"
import cart from "../../images/product-item-img/cart.png"
import chosenCart from "../../images/product-item-img/chosenCart.png"
import {useDispatch, useSelector} from "react-redux";
import {ADD_TO_LIKE_STATE} from "../../Redux/action-types/like-types";
import {products} from "../../Data/products";
import {ADD_TO_CART_STATE} from "../../Redux/action-types/cart-types";

export default function ProductItem(props) {
    const dispatch = useDispatch()

    const {likeItem, cartItem} = useSelector(({likeItem: {likeItem}, cartItem: {cartItem}}) => ({
        likeItem,
        cartItem
    }));

    const {id, title, url, price} = props.product

    const addToLikeList = () => {
        const findProduct = products.find(product => product.id === id)
        dispatch({type: ADD_TO_LIKE_STATE, payload: findProduct})
    }

    const addToCartList = () => {
        const findProduct = products.find(product => product.id === id)
        dispatch({type: ADD_TO_CART_STATE, payload: findProduct})
    }

    const findLikeItem = likeItem.find(el => el.id === id)
    const likeImg = findLikeItem ? chosenLike : likeProduct

    const findCartItem = cartItem.find(el => el.id === id)
    const cartImg = findCartItem ? chosenCart : cart

    return (
        <div className={style.productItem}>
            <img onClick={addToLikeList} className={style.likeImg} src={likeImg} alt="likeProduct"/>
            <img className={style.scaleImg} src={scale} alt="scale"/>
            <div>
                <img className={style.img} src={url} alt={title}/>
            </div>


            <div className={style.title}>
                <p>{title}</p>
            </div>
            <img onClick={addToCartList} className={style.cartImg} src={cartImg} alt="cart"/>
            <div className={style.price}>
                <span>{price}</span>
                <span className={style.fontSize18}> ₴ </span>
            </div>


            <p className={style.isTrue}>Є в наявності</p>
        </div>
    )
}
