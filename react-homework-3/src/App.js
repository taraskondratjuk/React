import React, {Component} from 'react';
import {AllServices} from "./services/AllServices";
import AllUsers from "./components/AllUsers";

class App extends Component {

    state = {
        users: [],
        posts: [],
        userPosts: []
    }

    services = new AllServices()

    componentDidMount() {
        this.services.getUsers().then(users => this.setState({users: users}))
        this.services.getPosts().then(posts => this.setState({posts: posts}))
    }

    choseUser = (id) => {
        let allPosts = []

        this.state.posts.find(posts => {
            if (posts.userId === id) {
                allPosts.push(posts)
            }
        })

        this.setState({userPosts: allPosts})
    }

    render() {

        let {users, userPosts} = this.state

        return (
            <div>
                <AllUsers users={users} key={users.id} choseUser={this.choseUser}/>

                {userPosts && <div>{userPosts.map(value => <li style={{background: "silver"}}>user
                    : {value.userId} - {value.title}</li>)}</div>}
            </div>
        );
    }
}

export default App;
