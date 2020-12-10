import React, {Component} from 'react';

class Planet extends Component {
    render() {

        let {planet, indexPlanet, deletePlanet} = this.props

        return (
            <div>
                name : {planet.name} --> <button onClick={deletePlanet.bind(this, indexPlanet)}>Delete</button>
            </div>
        );
    }
}

export default Planet;