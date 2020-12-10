import React, {Component} from 'react';
import "./App.css"
import AllPeople from "./components/all-people/AllPeople";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import AllFilms from "./components/all-films/AllFilms";
import AllPlanets from "./components/all-planets/AllPlanets";


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className={"link"}>
                        <div>
                            <Link to={"/people/"}>People</Link>
                        </div>

                        <div>
                            <Link to={"/films/"}>Films</Link>
                        </div>

                        <div>
                            <Link to={"/planets/"}>Planets</Link>
                        </div>
                    </div>


                    <div className={"route"}>
                        <Switch>
                            <Route path={"/people/"}><AllPeople/></Route>
                            <Route path={"/films/"}><AllFilms/></Route>
                            <Route path={"/planets/"}><AllPlanets/></Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
