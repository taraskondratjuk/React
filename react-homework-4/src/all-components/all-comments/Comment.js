import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";


class Comment extends Component {
    render() {

        let {comment} = this.props

        return (
            <div>
                <strong>postId : </strong>{comment.postId} <strong>id : </strong>{comment.id} <strong>body
                : </strong>{comment.body} --
                <Link>Details</Link>
            </div>
        );
    }
}

export default withRouter(Comment);