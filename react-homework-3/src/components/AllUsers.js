import React, {Component} from 'react';
import User from "./User";

class AllUsers extends Component {
    render() {

        let {user,choseUser} = this.props
        return (
            <div>
                <User user={user} choseUser={choseUser}/>
            </div>
        );
    }
}

export default AllUsers;