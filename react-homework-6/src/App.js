import React, {Component} from 'react';
import "./App.css"
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import AllUsers from "./components/all-users/AllUsers";
import AllPosts from "./components/all-posts/AllPosts";
import AllComments from "./components/all-comments/AllComments";


class App extends Component {
    render() {
        return (
            <Router>
                <div>

                    <div className={"link"}>
                        <Link to={"/users"}>Users</Link>
                    </div>
                    <div>
                        <Link to={"/posts"}>Posts</Link>
                    </div>

                    <div>
                        <Link to={"/comments"}>Comments</Link>
                    </div>

                    <div className={"route"}>
                        <Switch>
                            <Route path={"/users"} render={() => <AllUsers/>}/>,
                            <Route path={"/posts"} render={() => <AllPosts/>}/>,
                            <Route path={"/comments"} render={() => <AllComments/>}/>
                        </Switch>
                    </div>

                </div>
            </Router>

        );
    }
}

export default App;