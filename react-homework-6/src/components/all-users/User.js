import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";


class User extends Component {
    render() {

        let {user, match: {url}} = this.props

        return (
            <div>
                <strong>id</strong> : {user.id} <strong>name</strong> : {user.name} <Link to={url + "/" + user.id}>
                <button>Details</button>
            </Link>
            </div>
        );
    }
}

export default withRouter(User);