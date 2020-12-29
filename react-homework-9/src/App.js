import React from "react"
import ProductList from "./components/productList/ProductList";
import Header from "./components/header/Header";
import  "./App.css"


export default function App() {


    return (
        <div>
            <Header/>
            <ProductList/>
        </div>
    )
}