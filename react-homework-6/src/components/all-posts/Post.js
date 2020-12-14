import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";


class Post extends Component {
    render() {

        let {post, match: {url}} = this.props

        return (
            <div>
                <strong>id</strong> : {post.id} <strong>title</strong> : {post.title} <Link to={url + "/" + post.id}>
                <button>Details</button>
            </Link>
            </div>
        );
    }
}

export default withRouter(Post);