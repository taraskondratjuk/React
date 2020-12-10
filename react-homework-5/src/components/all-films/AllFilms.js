import React, {Component} from 'react';
import AllServices from "../../services/AllServices";
import Film from "./Film";

class AllFilms extends Component {
    services = new AllServices()

    state = {films: []}

    async componentDidMount() {
        let {results} = await this.services.getFilms()
        this.setState({films: results})
    }

    deleteFilm = (indexFilm) => {
        this.state.films.splice(indexFilm, 1)
        this.setState({films: this.state.films})

    }


    render() {

        let {films} = this.state
        console.log(films)

        return (
            <div>
                {films.map((film, index) => <Film film={film} key={index} indexFilm={index}
                                                  deleteFilm={this.deleteFilm}/>)}
            </div>
        );
    }
}

export default AllFilms;