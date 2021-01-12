import React, {Component} from 'react';
import "./App.css"


import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        {/*{cars.map((car, index) => <CarsComponent item={car} key={index}/>)}*/}
                        <Link to={"/users"}>Users</Link>
                    </div>

                    <div>
                        <Link to={"/posts"}>Posts</Link>

                    </div>

                    <div>
                        <Link to={"/comments"}>Comments</Link>

                    </div>


                    <div>
                        <Switch>
                            <Route path={"/users"}>This is users</Route>
                            <Route path={"/posts"}>This is posts</Route>
                            <Route path={"/comments"}>This is comments</Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;