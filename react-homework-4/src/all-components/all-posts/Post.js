import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";


class Post extends Component {
    render() {

        let {post} = this.props

        return (
            <div>
                <strong>userId : </strong>{post.userId} - <strong>id : </strong>{post.id} - <strong>title : </strong>{post.title}} --
                <Link>Details</Link>
            </div>
        );
    }
}

export default withRouter(Post);