import React from "react"
import Header from "./components/header/Header";
import "./App.css"
import NavBar from "./components/nav-bar/NavBar";
import Info from "./components/info/Info";
import Carousel from "./components/carusel/Carousel";
import ProductList from "./components/product-list/ProductList";

export default function App() {


    return (
        <div className={"main"}>
            <Header/>

            <div className={"bodyItem"}>
                <NavBar/>
                <Carousel/>
            </div>

            <div className={"bodyItem"}>
                <Info/>
                <ProductList/>
            </div>

        </div>
    )
}