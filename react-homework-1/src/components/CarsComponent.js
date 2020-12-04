import React, {Component} from 'react';
import CarComponent from "./CarComponent";

class CarsComponent extends Component {
    render() {

        return (
            <div>
                <CarComponent item={this.props.item}/>
            </div>
        );
    }
}

export default CarsComponent;