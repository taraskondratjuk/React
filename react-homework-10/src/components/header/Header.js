import React, {useEffect, useState} from "react"
import style from "./header.module.css"
import headerImgHappyHolidays from "../../images/header-img/header-img-happy-holidays.jpg"
import classNames from 'classnames';
import premium from "../../images/header-img/premium.png";
import scale from "../../images/header-img/scale.png";
import like from "../../images/header-img/like.png";
import likeForItem from "../../images/header-img/likeForItem.png";
import cart from "../../images/header-img/cart.png";
import cartForItem from "../../images/header-img/cartForItem.png";
import {useDispatch, useSelector} from "react-redux";
import {ADD_TO_CART_STATE, CLEAR_TO_CART_STATE} from "../../Redux/action-types/cart-types";
import {CLEAR_TO_LIKE_STATE} from "../../Redux/action-types/like-types";


export default function Header() {

    const dispatch = useDispatch()

    const {likeItem, cartItem} = useSelector(({likeItem: {likeItem}, cartItem: {cartItem}}) => ({
        likeItem,
        cartItem
    }));

    const [allCostCartItem, setAllCostCartItem] = useState(0)
    const [countModalCartWindow, setCountModalCartWindow] = useState(1)
    const [visibleModalCartWindow, setVisibleModalCartWindow] = useState("")

    const [allCostWishItem, setAllCostWishItem] = useState(0)
    const [countModalWishWindow, setCountModalWishWindow] = useState(1)
    const [visibleModalWishWindow, setVisibleModalWishWindow] = useState("")


    useEffect(() => {
        const costCartList = cartItem.reduce((acc, value) => {
            acc += value.price
            return acc
        }, 0)

        setAllCostCartItem(costCartList);

        const costWishList = likeItem.reduce((acc, value) => {
            acc += value.price
            return acc
        }, 0)

        setAllCostWishItem(costWishList);

    }, [likeItem, cartItem])

    const likeImg = likeItem.length !== 0 ? likeForItem : like
    const cartImg = cartItem.length !== 0 ? cartForItem : cart

    const onVisibleModalCartWindow = () => {
        setCountModalCartWindow(countModalCartWindow + 1)
        if (countModalCartWindow % 2 === 0) {
            setVisibleModalCartWindow("none")
        } else {
            setVisibleModalCartWindow("block")
        }
    }

    const onVisibleModalWishWindow = () => {
        setCountModalWishWindow(countModalWishWindow + 1)
        if (countModalWishWindow % 2 === 0) {
            setVisibleModalWishWindow("none")
        } else {
            setVisibleModalWishWindow("block")
        }
    }


    const clearCartItem = () => {
        dispatch({type: CLEAR_TO_CART_STATE})
    }

    const clearWishItem = () => {
        dispatch({type: CLEAR_TO_LIKE_STATE})
    }

    const moveWishListToCartList = () => {
        const moveProduct = likeItem.map(item =>{
            dispatch({type: ADD_TO_CART_STATE, payload: item})
        });
        dispatch({type: CLEAR_TO_LIKE_STATE})

    }


    return (
        <div>

            <div className={style.imgHappyHolidays}>
                <img src={headerImgHappyHolidays} alt="happy-holidays"/>
            </div>

            <div className={style.header}>


                <div className={style.topHeader}>

                    <div className={style.leftContent}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor"
                             className="bi bi-telephone" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>

                        <span className={classNames(style.mgL1, style.pointer)}>(044)537-02-22</span>

                        <span className={style.mgL1}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                 fill="currentColor"
                                 className="bi bi-caret-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                        </svg>
                       </span>

                        <span className={style.mgL4}>Контакти</span>
                        <span className={style.mgL4}>Допомога</span>
                        <span className={style.mgL4}>Наша відповідь COVID-19</span>
                    </div>

                    <div className={style.rightContent}>
                        <span className={style.mgL4}>RU</span>
                        <span className={classNames(style.mgL1, style.colorGray)}>|</span>
                        <span className={classNames(style.mgL1, style.colorGray)}>UA</span>
                        <span className={style.mgL4}>Місто</span>
                        <span className={style.mgL1}>Львів</span>
                        <span className={style.mgL4}>Вітаємо,</span>

                        <span className={style.mgL1}>
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                              className="bi bi-person" viewBox="0 0 16 16">
                           <path fill-rule="evenodd"
                                 d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                              </svg>
                        </span>

                        <span className={style.mgL1}>увійдіть в особистий кабінет</span>

                    </div>

                </div>


                <div className={style.bottomHeader}>
                    <img className={style.logoImg} src="https://xl-static.rozetka.com.ua/assets/img/design/logo_n.svg"
                         alt="logo-rozetka"/>

                    <button className={classNames(style.catalog, style.mgL5)}>
                       <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                 className="bi bi-grid" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
                        </svg>
                       </span>

                        <span>Каталог товарів</span>
                    </button>

                    <div className={style.modalWindowCart} style={{display: visibleModalCartWindow}}>
                        <div>
                            <button className={style.closeModalWindow} onClick={onVisibleModalCartWindow}>X</button>
                            <p className={style.modalWindowCartContent}>У кошику {cartItem.length} товари</p>
                            <p className={style.modalWindowCartContent}>На суму {allCostCartItem} грн </p>
                            <button type="button" className="btn btn-success">Оформити замовлення</button>
                            <p className={style.marTop}><a href="#">Перейти до кошика</a></p>
                            <p className={style.marTop} onClick={clearCartItem}><a href="#">Очистити кошик</a></p>
                        </div>

                    </div>

                    <div className={style.modalWindowWish} style={{display: visibleModalWishWindow}}>
                        <div>
                            <button className={style.closeModalWindow} onClick={onVisibleModalWishWindow}>X</button>
                            <p className={style.modalWindowCartContent}>У списку бажань {likeItem.length} товари</p>
                            <p className={style.modalWindowCartContent}>На суму {allCostWishItem} грн </p>
                            <button type="button" className="btn btn-success" onClick={moveWishListToCartList}>Перенести
                                товари до корзини
                            </button>
                            <p className={style.marTop} onClick={clearWishItem}><a href="#">Очистити список бажань</a>
                            </p>
                        </div>
                    </div>


                    <div className="input-group inputGroup">
                        <input type="text" className="form-control" placeholder="Я шукаю..." aria-label=""
                               aria-describedby="basic-addon1" size="30px"/>
                        <div className="input-group-append">
                            <button className="btn btn-success" type="button">Знайти</button>
                        </div>
                    </div>


                    <div className={style.premiumProposition}>
                        <div className={style.mgBtn2}>Спробуйте</div>
                        <img className={classNames(style.premium, style.pointer)} src={premium} alt="premium"/>
                    </div>


                    <div className={style.mgL1_5}>
                        <img className={classNames(style.scaleImg, style.pointer)} src={scale} alt="scale"/>
                    </div>


                    <div className={style.mgL1_5}>

                        {
                            likeItem.length !== 0 && <p className={style.likeItem}>{likeItem.length}</p>
                        }


                        <img className={classNames(style.likeImg, style.pointer)} src={likeImg} alt="likeImg"
                             onClick={onVisibleModalWishWindow}
                        />


                    </div>


                    <div className={style.mgL1_5}>
                        {
                            cartItem.length !== 0 && <p className={style.cartItem}>{cartItem.length}</p>
                        }

                        <img className={classNames(style.cartImg, style.pointer)} src={cartImg} alt="cartImg"
                             onClick={onVisibleModalCartWindow}
                        />

                    </div>


                </div>


            </div>

        </div>
    )
}
