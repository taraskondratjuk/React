import React, {Component} from 'react';
import AllServices from "../../services/AllServices";
import User from "./User";
import {Route, Switch, withRouter} from "react-router-dom";
import FullUser from "./FullUser";
import style from "./User.module.css"


class AllUsers extends Component {
    services = new AllServices()

    state = {users: []}

    async componentDidMount() {
        let users = await this.services.getUsers()
        this.setState({users})
    }

    render() {
        console.log(this.state.users)
        let {users} = this.state
        let {match: {url}} = this.props


        return (
            <div className={style.item}>
                {
                    users.map(users => <User user={users} key={users.id}/>)
                }

                <hr/>
                <Switch>
                    <Route path={url + "/:id"} render={(props) => {
                        let {match: {params: {id}}} = props
                        return <FullUser userId={id} key={id}/>
                    }}/>
                </Switch>
                <hr/>
            </div>
        );
    }
}

export default withRouter(AllUsers);