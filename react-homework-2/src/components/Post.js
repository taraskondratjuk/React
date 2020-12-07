import React, {Component} from 'react';

class Post extends Component {
    render() {

        let {post, chosePost} = this.props
        return (
            <div>
                id: {post.id} - title : {post.title} -
                <button onClick={chosePost.bind(this, post.id)}>Chose</button>
            </div>
        );
    }
}

export default Post;