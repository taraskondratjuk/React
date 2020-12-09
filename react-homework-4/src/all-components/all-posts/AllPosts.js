import React, {Component} from 'react';
import AllServices from "../../services/AllServices";
import Post from "./Post";


class AllPosts extends Component {

    AllServices = new AllServices();

    state = {posts: []};

    async componentDidMount() {
        await this.AllServices.getPosts().then(posts => this.setState({posts}))
    }

    render() {

        let {posts} = this.state

        return (
            <div>
                {posts.map(post => <Post post={post} key={post.id}/>)}
            </div>
        );
    }
}

export default  AllPosts;