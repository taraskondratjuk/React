import React, {Component} from 'react';
import {cars} from "./database/carsDB";
import CarsComponent from "./components/CarsComponent";
import "./App.css"

class App extends Component {
    render() {
        return (
            <div>
                {cars.map((car, index) => <CarsComponent item={car} key={index}/>)}
            </div>
        );
    }
}

export default App;