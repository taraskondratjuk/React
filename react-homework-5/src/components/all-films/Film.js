import React, {Component} from 'react';

class Film extends Component {
    render() {

        let {film, deleteFilm, indexFilm} = this.props

        return (
            <div>
                name : {film.title} --> <button onClick={deleteFilm.bind(this, indexFilm)}>Delete</button>
            </div>
        );
    }
}

export default Film;