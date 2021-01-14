import React from "react";
import style from "./carousel.module.css"
import first from "../../images/carousel-img/first.jpg"
import second from "../../images/carousel-img/second.jpg"
import third from "../../images/carousel-img/third.jpg"
import fourth from "../../images/carousel-img/fourth.jpg"
import fifth from "../../images/carousel-img/fifth.jpg"
import sixth from "../../images/carousel-img/sixth.jpg"
import seventh from "../../images/carousel-img/seventh.jpg"
import right from "../../images/carousel-img/chevron-right.svg"
import left from "../../images/carousel-img/chevron-compact-left.svg"
import {useState, useEffect} from "react";


export default function Carousel() {
    const [count, setCount] = useState(0)

    const img = [first, second, third, fourth, fifth, sixth, seventh]


    const changeLeftImg = () => {
        if (count > 0) {
            setCount(count => count - 1)
        } else {
            setCount(() => img.length - 1)
        }
    }

    useEffect(() => {
        setInterval(() => {
            setCount((count) => {
                return count < img.length - 1 ? count + 1 : 0;
            })
        }, 7000)
    }, [])


    const changeRightImg = () => {
        if (count < img.length - 1) {
            setCount(count => count + 1)
        } else {
            setCount(() => 0)
        }
    }

    return (
        <div className={style.carousel}>
                <img onClick={changeLeftImg} className={style.sparrowLeft} src={left} alt="left"/>
                <img className={style.img} src={img[count]} alt=""/>
                <img onClick={changeRightImg} className={style.sparrowRight} src={right} alt="right"/>
        </div>
    )
}
