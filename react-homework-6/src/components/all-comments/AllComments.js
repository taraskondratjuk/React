import React, {Component} from 'react';
import AllServices from "../../services/AllServices";
import Comment from "./Comment";
import {Route, Switch, withRouter} from "react-router-dom";
import FullComment from "./FullComment";


class AllComments extends Component {
    services = new AllServices()

    state = {comments: []}

    async componentDidMount() {
        let comments = await this.services.getComments()
        this.setState({comments})
    }

    render() {

        let {comments} = this.state
        let {match: {url}} = this.props

        return (
            <div>
                {
                    comments.map(comment => <Comment comment={comment} key={comment.id}/>)
                }

                <hr/>
                    <Switch>
                        <Route path={url + "/:id"} render={(props) => {
                            let {match: {params: {id}}} = props
                            return <FullComment id={id} key={id}/>
                        }
                        }/>
                    </Switch>
                <hr/>

            </div>
        );
    }
}

export default withRouter(AllComments);