import React, {Component} from 'react';
import Post from "./Post";

class AllPosts extends Component {

    state = {
        allPosts: [],
        chosenPost: null
    }


    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(posts => posts.json())
            .then(posts => this.setState({allPosts: posts}))
    }


    chosePost = (id) => {
        let {allPosts} = this.state
        let findPost = allPosts.find(value => value.id === id);
        this.setState({chosenPost: findPost})

    }

    render() {
        console.log(this.state.allPosts)


        let {allPosts, chosenPost} = this.state
        return (
            <div>
                {allPosts.map(post => <Post post={post} key={post.id} chosePost={this.chosePost}/>)}

                {chosenPost && <h3>id : {chosenPost.id} - post : {chosenPost.body}</h3>}
            </div>
        );
    }
}

export default AllPosts;





