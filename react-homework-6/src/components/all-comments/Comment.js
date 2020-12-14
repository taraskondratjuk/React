import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";


class Comment extends Component {
    render() {

        let {comment, match: {url}} = this.props

        return (
            <div>
               <strong>id</strong>  : {comment.id} <strong>name</strong> : {comment.name} <strong>email</strong> : {comment.email} <Link to={url + "/" + comment.id}>
                <button>Details</button>
            </Link>
            </div>
        );
    }
}

export default withRouter(Comment);