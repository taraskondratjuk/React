import style from "./header.module.css"
import {useSelector} from "react-redux";


export default function Header() {
    const {products, wish, cart,wishCount,cartCount} = useSelector(({products: {products}, wish: {wish,wishCount}, cart: {cart,cartCount}}) => ({
        products,
        wish,
        cart,
        cartCount,
        wishCount
    }));

console.log(cart)

    return (
        <header className={style.header}>

            <div className={style.title}>
                The best shop of the world
            </div>

            <div className={style.option}>
                <div className={style.wish}> wish: {wish.length}</div>
                <div className={style.cart}> cart: {cart.length}</div>
            </div>
        </header>
    )
}