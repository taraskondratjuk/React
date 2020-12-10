import React, {Component} from 'react';
import AllServices from "../../services/AllServices";
import People from "./People";

class AllPeople extends Component {
    services = new AllServices()

    state = {people: []}

    async componentDidMount() {
        let {results} = await this.services.getPeople()
        this.setState({people: results})


    }

    deletePeople = (peopleIndex) => {

       this.state.people.splice(peopleIndex,1)
        this.setState({people:this.state.people})

    }

    render() {

        let {people} = this.state
        console.log(people)

        return (
            <div>
                {people.map((people, index) => <People people={people} key={index} deletePeople={this.deletePeople}
                                                       peopleIndex={index}/>)}
            </div>
        );
    }
}

export default AllPeople;