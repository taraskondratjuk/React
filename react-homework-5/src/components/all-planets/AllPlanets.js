import React, {Component} from 'react';
import AllServices from "../../services/AllServices";
import Planet from "./Planet";

class AllPlanets extends Component {
    services = new AllServices()

    state = {planets: []}

    async componentDidMount() {
        let {results} = await this.services.getPlanets()
        this.setState({planets: results})
    }

    deletePlanet = (indexPlanet) => {
        this.state.planets.splice(indexPlanet, 1)
        this.setState({planets: this.state.planets})

    }

    render() {

        let {planets} = this.state
        console.log(planets)

        return (
            <div>
                {planets.map((planet, index) => <Planet planet={planet} key={index} indexPlanet={index}
                                                        deletePlanet={this.deletePlanet}/>)}
            </div>
        );
    }
}

export default AllPlanets;