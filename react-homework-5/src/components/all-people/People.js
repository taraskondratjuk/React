import React, {Component} from 'react';

class People extends Component {
    render() {

        let {people, deletePeople,peopleIndex} = this.props

        return (
            <div>
                name : {people.name} --> <button onClick={deletePeople.bind(this, peopleIndex)}>Delete</button>
            </div>
        );
    }
}

export default People;