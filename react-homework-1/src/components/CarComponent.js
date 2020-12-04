import React, {Component} from 'react';

class CarComponent extends Component {

    render() {

        let {model, color, age, power} = this.props.item

        let result = "slow"

        if (power > 180) {
            result = "fast"
        }

        return (

            <div>
                <div className={result}>
                    Model : {model},
                    Color : {color},
                    Age : {age},
                    Power : {power}
                </div>
            </div>
        );
    }
}

export default CarComponent;