import style from "./header.module.css"
import {useEffect,useState} from 'react'
import {useSelector} from "react-redux";


export default function Header() {
    const {wishlist, cart,} = useSelector(({products: {products}, wishlist: {wishlist}, cart: {cart}}) => ({
        products,
        wishlist,
        cart
    }));

    const [allCostWishList,setAllCostWishList]=useState(0)
    const [allCostCartList,setAllCostCartList]=useState(0)

    useEffect(() => {
       const costWishList = wishlist.reduce((acc, value) => {
                acc += value.price
                return acc
            }, 0)

        setAllCostWishList(costWishList)

        const costCartList = cart.reduce((acc, value) => {
            acc += value.price
            return acc
        }, 0)

        setAllCostCartList(costCartList)

    }, [cart, wishlist])


    return (
        <header className={style.header}>

            <div className={style.title}>
                The best shop of the world
            </div>

            <div className={style.option}>
                <div title={allCostWishList} className={style.wish}> wish: {wishlist.length}</div>
                <div title={allCostCartList} className={style.cart}> cart: {cart.length}</div>
            </div>
        </header>
    )
}