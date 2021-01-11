import React from "react";
import style from "./info.module.css"
import googlePlay from "../../images/info-img/goodlePlay.png"
import appStore from "../../images/info-img/appStore.png"
import facebook from "../../images/info-img/facebook.png"
import twitter from "../../images/info-img/twitter.png"
import youtube from "../../images/info-img/youtube.png"
import instagram from "../../images/info-img/instagram.png"
import viber from "../../images/info-img/viber.png"
import masterCard from "../../images/info-img/masterCard.png"
import VISA from "../../images/info-img/VISA.png"


export default function Info() {

    return (
        <div className={style.info}>

            <div className={style.welcome}>
                <h2>Ласкаво просимо!</h2>
                <p>Увійдіть, щоб отримувати рекомендації, персональні бонуси і знижки.</p>
                <button type="button" className="btn btn-primary">Увійдіть в особистий кабінет</button>
            </div>


            <div className={style.applications}>
                <br/>
                <p>Встановлюйте наші додатки</p>
            </div>


            <div className={style.app}>
                <img className={style.cursorPointer} src={googlePlay} alt="googlePlay"/>
                <img className={style.cursorPointer} src={appStore} alt="appStore"/>
            </div>

            <div className={style.schedule}>
                <p>Графік роботи Call-центру</p>
                <div><a href="#" className={style.phoneNumber}>+38 044 537-02-22</a></div>
                <div><a href="#" className={style.phoneNumber}>+38 044 503-80-80</a></div>
            </div>

            <div className={style.workDay}>
                <span>У будні</span><span className={style.textAlignEnd}>з 08:00 до 21:00</span><br/>
                <span>Субота</span><span className={style.textAlignEnd}>з 09:00 до 20:00</span><br/>
                <span>Неділя</span><span className={style.textAlignEnd}> з 10:00 до 19:00</span><br/><br/>
            </div>

            <div className={style.public}>
                <br/>
                <p>Ми в соціальних мережах</p>
                <div>
                    <img className={style.cursorPointer} src={facebook} alt="facebook"/>
                    <img className={style.cursorPointer} src={twitter} alt="twitter"/>
                    <img className={style.cursorPointer} src={youtube} alt="youtube"/>
                    <img className={style.cursorPointer} src={instagram} alt="instagram"/>
                    <img className={style.cursorPointer} src={viber} alt="viber"/>
                </div>
                <br/>
            </div>


            <div className={style.otherInfo}>
                <br/>
                <p>Допомога</p>
                <a className={style.a} href="#">Доставка та оплата</a>
                <a className={style.a} href="#">Кредит</a>
                <a className={style.a} href="#">Гарантія</a>
                <a className={style.a} href="#">Повернення товару</a>
                <a className={style.a} href="#">Сервісні центри</a>
                <a className={style.a} href="#">Відстежити замовлення</a><br/>

                <p>Інформація про компанію</p>
                <a className={style.a} href="#">Про нас</a>
                <a className={style.a} href="#">Умови використання сайту</a>
                <a className={style.a} href="#">Вакансії</a>
                <a className={style.a} href="#">Контакти</a><br/>

                <p>Сервіси</p>
                <a className={style.a} href="#">Бонусний рахунок</a>
                <a className={style.a} href="#">Rozetka Premium</a>
                <a className={style.a} href="#">Подарункові сертифікати</a>
                <a className={style.a} href="#">Переказ грошей з картки на картку</a>
                <a className={style.a} href="#">Тури та відпочинок</a><br/>

                <p>Партнерам</p>
                <a className={style.a} href="#">Продавати на Розетці</a>
                <a className={style.a} href="#">Співпраця з нами</a>
                <a className={style.a} href="#">Логотип и стайлгайд</a>
            </div>

            <div className={style.productLabel}>
                <div className={style.textAlignCenter}>
                    <br/>
                    <img className={style.cursorPointer} src={masterCard} alt="masterCard"/>
                    <img className={style.cursorPointer} src={VISA} alt="VISA"/>
                </div>
                <br/>

                <p>ТМ використовується на підставі ліцензії правовласника RozetkaLTD.</p>
                <p className={style.colorBlack}>© Інтернет-магазин «Розетка™» 2001–2021</p>

            </div>

        </div>
    )
}