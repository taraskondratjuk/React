import React, {Component} from 'react';
import AllServices from "../../services/AllServices";
import User from "./User";

class AllUsers extends Component {

    allServices = new AllServices()

    state = {users: []}

    async componentDidMount() {
        await this.allServices.getUsers().then(users => this.setState({users}))
    }

    render() {

        let {users} = this.state
        return (
            <div>
                {users.map(user => <User user={user} key={user.id}/>)}
            </div>
        );
    }
}

export default AllUsers;