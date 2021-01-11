import React from "react";
import style from "./navBar.module.css"
import notepad from "../../images/nav-bar-img/notepad.png"
import sparrow from "../../images/nav-bar-img/sparow.png"
import phone from "../../images/nav-bar-img/phone.png"
import forGamers from "../../images/nav-bar-img/forGamers.png"
import homeTehniks from "../../images/nav-bar-img/homeTehniks.png"
import forHome from "../../images/nav-bar-img/forHome.png"
import instruments from "../../images/nav-bar-img/instruments.png"
import sanTehnika from "../../images/nav-bar-img/sanTehnika.png"
import dacha from "../../images/nav-bar-img/dacha.png"
import sports from "../../images/nav-bar-img/sports.png"
import clothes from "../../images/nav-bar-img/clothes.png"
import beauty from "../../images/nav-bar-img/beauty.png"
import forKids from "../../images/nav-bar-img/forKids.png"
import books from "../../images/nav-bar-img/books.png"
import alcohol from "../../images/nav-bar-img/alcohol.png"
import forBussines from "../../images/nav-bar-img/forBussines.png"
import services from "../../images/nav-bar-img/services.png"
import allForHolydays from "../../images/nav-bar-img/allForHolydays.png"

import classNames from 'classnames';

export default function NavBar() {


    return (
        <div className={style.navBar}>
            <ul className={style.navUl}>

                <li className={classNames(style.navImg, style.dF, style.mgTop10)}>
                    <img className={classNames(style.navImg, style.mgTop10)} src={notepad} alt="notepad"/>
                    <a href="#" className={classNames(style.mgL3, style.w100, style.mgTop10, style.a)}>Ноутбуки та
                        комп'ютери
                        <a href="#"> <img className={style.sparrowImg} src={sparrow} alt="sparrow"/> </a>
                    </a>
                </li>

                <li className={classNames(style.navImg, style.dF, style.mgTop10)}>
                    <img className={classNames(style.navImg, style.mgTop10)} src={phone} alt="notepad"/>
                    <a href="#" className={classNames(style.mgL3, style.w100, style.mgTop10, style.a)}>Смартфони, ТВ і
                        електроніка
                        <a href="#"> <img className={style.sparrowImg} src={sparrow} alt="sparrow"/> </a>
                    </a>
                </li>

                <li className={classNames(style.navImg, style.dF, style.mgTop10)}>
                    <img className={classNames(style.navImg, style.mgTop10)} src={forGamers} alt="notepad"/>
                    <a href="#" className={classNames(style.mgL3, style.w100, style.mgTop10, style.a)}>Товари для
                        геймерів
                        <a href="#"> <img className={style.sparrowImg} src={sparrow} alt="sparrow"/> </a>
                    </a>
                </li>

                <li className={classNames(style.navImg, style.dF, style.mgTop10)}>
                    <img className={classNames(style.navImg, style.mgTop10)} src={homeTehniks} alt="notepad"/>
                    <a href="#" className={classNames(style.mgL3, style.w100, style.mgTop10, style.a)}>Побутова техніка
                        <a href="#"> <img className={style.sparrowImg} src={sparrow} alt="sparrow"/> </a>
                    </a>
                </li>

                <li className={classNames(style.navImg, style.dF, style.mgTop10)}>
                    <img className={classNames(style.navImg, style.mgTop10)} src={forHome} alt="notepad"/>
                    <a href="#" className={classNames(style.mgL3, style.w100, style.mgTop10, style.a)}>Товари для дому
                        <a href="#"> <img className={style.sparrowImg} src={sparrow} alt="sparrow"/> </a>
                    </a>
                </li>

                <li className={classNames(style.navImg, style.dF, style.mgTop10)}>
                    <img className={classNames(style.navImg, style.mgTop10)} src={instruments} alt="notepad"/>
                    <a href="#" className={classNames(style.mgL3, style.w100, style.mgTop10, style.a)}>Інструменти та
                        автотовари
                        <a href="#"> <img className={style.sparrowImg} src={sparrow} alt="sparrow"/> </a>
                    </a>
                </li>

                <li className={classNames(style.navImg, style.dF, style.mgTop10)}>
                    <img className={classNames(style.navImg, style.mgTop10)} src={sanTehnika} alt="notepad"/>
                    <a href="#" className={classNames(style.mgL3, style.w100, style.mgTop10, style.a)}>Сантехніка та
                        ремонт
                        <a href="#"> <img className={style.sparrowImg} src={sparrow} alt="sparrow"/> </a>
                    </a>
                </li>

                <li className={classNames(style.navImg, style.dF, style.mgTop10)}>
                    <img className={classNames(style.navImg, style.mgTop10)} src={dacha} alt="notepad"/>
                    <a href="#" className={classNames(style.mgL3, style.w100, style.mgTop10, style.a)}>Дача, сад і город
                        <a href="#"> <img className={style.sparrowImg} src={sparrow} alt="sparrow"/> </a>
                    </a>
                </li>

                <li className={classNames(style.navImg, style.dF, style.mgTop10)}>
                    <img className={classNames(style.navImg, style.mgTop10)} src={sports} alt="notepad"/>
                    <a href="#" className={classNames(style.mgL3, style.w100, style.mgTop10, style.a)}>Спорт і
                        захоплення
                        <a href="#"> <img className={style.sparrowImg} src={sparrow} alt="sparrow"/> </a>
                    </a>
                </li>


                <li className={classNames(style.navImg, style.dF, style.mgTop10)}>
                    <img className={classNames(style.navImg, style.mgTop10)} src={clothes} alt="notepad"/>
                    <a href="#" className={classNames(style.mgL3, style.w100, style.mgTop10, style.a)}>Одяг, взуття та
                        прикраси
                        <a href="#"> <img className={style.sparrowImg} src={sparrow} alt="sparrow"/> </a>
                    </a>
                </li>

                <li className={classNames(style.navImg, style.dF, style.mgTop10)}>
                    <img className={classNames(style.navImg, style.mgTop10)} src={beauty} alt="notepad"/>
                    <a href="#" className={classNames(style.mgL3, style.w100, style.mgTop10, style.a)}>Краса та здоров’я
                        <a href="#"> <img className={style.sparrowImg} src={sparrow} alt="sparrow"/> </a>
                    </a>
                </li>

                <li className={classNames(style.navImg, style.dF, style.mgTop10)}>
                    <img className={classNames(style.navImg, style.mgTop10)} src={forKids} alt="notepad"/>
                    <a href="#" className={classNames(style.mgL3, style.w100, style.mgTop10, style.a)}>Дитячі товари
                        <a href="#"> <img className={style.sparrowImg} src={sparrow} alt="sparrow"/> </a>
                    </a>
                </li>

                <li className={classNames(style.navImg, style.dF, style.mgTop10)}>
                    <img className={classNames(style.navImg, style.mgTop10)} src={books} alt="notepad"/>
                    <a href="#" className={classNames(style.mgL3, style.w100, style.mgTop10, style.a)}>Канцтовари та
                        книги
                        <a href="#"> <img className={style.sparrowImg} src={sparrow} alt="sparrow"/> </a>
                    </a>
                </li>

                <li className={classNames(style.navImg, style.dF, style.mgTop10)}>
                    <img className={classNames(style.navImg, style.mgTop10)} src={alcohol} alt="notepad"/>
                    <a href="#" className={classNames(style.mgL3, style.w100, style.mgTop10, style.a)}>Алкогольні напої
                        та продукти
                        <a href="#"> <img className={style.sparrowImg} src={sparrow} alt="sparrow"/> </a>
                    </a>
                </li>

                <li className={classNames(style.navImg, style.dF, style.mgTop10)}>
                    <img className={classNames(style.navImg, style.mgTop10)} src={forBussines} alt="notepad"/>
                    <a href="#" className={classNames(style.mgL3, style.w100, style.mgTop10, style.a)}>Товари для
                        бізнесу
                        <a href="#"> <img className={style.sparrowImg} src={sparrow} alt="sparrow"/> </a>
                    </a>
                </li>

                <li className={classNames(style.navImg, style.dF, style.mgTop10)}>
                    <img className={classNames(style.navImg, style.mgTop10)} src={services} alt="notepad"/>
                    <a href="#" className={classNames(style.mgL3, style.w100, style.mgTop10, style.a)}>Послуги та
                        сервіси
                        <a href="#"> <img className={style.sparrowImg} src={sparrow} alt="sparrow"/> </a>
                    </a>
                </li>

                <li className={classNames(style.navImg, style.dF, style.mgTop10)}>
                    <img className={classNames(style.navImg, style.mgTop10)} src={allForHolydays} alt="notepad"/>
                    <a href="#" className={classNames(style.mgL3, style.w100, style.mgTop10, style.a)}>Усе для затишних
                        свят
                        <a href="#"> <img className={style.sparrowImg} src={sparrow} alt="sparrow"/> </a>
                    </a>
                </li>

            </ul>
        </div>
    )
}