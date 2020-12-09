import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";


class User extends Component {
    render() {

        let {user} = this.props

        return (
            <div>
                <strong>id : </strong>{user.id} - <strong>name : </strong>{user.name} - <strong>userName
                : </strong>{user.username} - <strong>email : </strong>{user.email} --
                <Link>Details</Link>
            </div>
        );
    }
}

export default withRouter(User);