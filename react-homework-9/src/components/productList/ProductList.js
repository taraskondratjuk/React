import React from "react"
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react"
import ProductItem from "../productItem/ProductItem";
import p from "./productList.module.css"


export default function ProductList() {

    const {products} = useSelector(({products: {products}}) => ({products}));
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        dispatch({type: "SET_PRODUCTS", payload: data})

    }

    useEffect(() => {
        fetchProducts()
    }, [])


    return (

          <div className={p.main}>
              {
                  products.map(product => <ProductItem product={product} key={product.id}/>)
              }
          </div>

    )
}