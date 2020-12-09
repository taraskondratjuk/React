import React, {Component} from 'react';
import User from "./User";

class AllUsers extends Component {
    render() {

        let {users, choseUser} = this.props
        return (
            <div>
                {users.map((user, index) => <User user={user} key={index} choseUser={choseUser}/>)}
            </div>
        );
    }
}

export default AllUsers;