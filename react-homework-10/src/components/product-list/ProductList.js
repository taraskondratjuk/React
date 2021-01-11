import React from "react"
import {products} from "../../Data/products"
import style from "./productList.module.css"
import ProductItem from "../product-item/ProductItem";

export default function ProductList() {

    return (

        <div className={style.productList}>
            {
                products.map(product => <ProductItem product={product} key={product.id}/>)
            }
        </div>

    )
}