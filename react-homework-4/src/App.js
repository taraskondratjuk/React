import React, {Component} from 'react';
import "./App.css"
import AllUsers from "./all-components/all-users/AllUsers";
import AllPosts from "./all-components/all-posts/AllPosts";
import AllComments from "./all-components/all-comments/AllComments";


import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className={"links"}>
                        <div>
                            <Link to={"/users"}>Users</Link>
                        </div>

                        <div>
                            <Link to={"/posts"}>Posts</Link>
                        </div>

                        <div>
                            <Link to={"/comments"}>Comments</Link>
                        </div>
                    </div>

                    <div className={"route"}>
                        <Switch>
                            <Route path={"/users"}> <AllUsers/></Route>
                            <Route path={"/posts"}> <AllPosts/></Route>
                            <Route path={"/comments"}> <AllComments/></Route>
                        </Switch>
                    </div>

                </div>
            </Router>
        );
    }
}

export default App;