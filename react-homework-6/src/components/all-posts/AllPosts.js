import React, {Component} from 'react';
import AllServices from "../../services/AllServices";
import Post from "./Post";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    withRouter
} from "react-router-dom";
import FullUser from "../all-users/FullUser";
import FullPost from "./FullPost";


class AllPosts extends Component {
    services = new AllServices()

    state = {posts: []}

    async componentDidMount() {
        let posts = await this.services.getPosts()
        this.setState({posts})
    }

    render() {

        let {posts} = this.state

        let {match: {url}} = this.props


        return (
            <div>
                {
                    posts.map(post => <Post post={post} key={post.id}/>)
                }


                <hr/>
                <Switch>
                    <Route path={url + "/:id"} render={(props) => {

                        let {match: {params: {id}}} = props

                        console.log(id)
                        return <FullPost id={id} key={id}/>

                    }}/>
                </Switch>
                <hr/>


            </div>
        );
    }
}

export default withRouter(AllPosts);