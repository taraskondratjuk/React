import React,{useEffect} from "react"
import {useSelector, useDispatch} from "react-redux";
import ProductItem from "../productItem/ProductItem";
import style from "./productList.module.css"
import {ADD_PRODUCTS} from "../../Redux/action-types/products-types";

export default function ProductList() {

    const {products} = useSelector(({products: {products}}) => ({products}));
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        dispatch({type: ADD_PRODUCTS, payload: data})

    }

    useEffect(() => {
        fetchProducts().then()
    }, [])


    return (

          <div className={style.main}>
              {
                  products.map(product => <ProductItem product={product} key={product.id}/>)
              }
          </div>

    )
}