import React, {Component} from 'react';
import AllServices from "../../services/AllServices";
import Comment from "./Comment";

class AllComments extends Component {

    AllServices = new AllServices()

    state = {comments: []}

    async componentDidMount() {
        await this.AllServices.getComments().then(comments => this.setState({comments}))
    }

    render() {

        let {comments} = this.state

        return (

            <div>
                {comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
            </div>
        );
    }
}

export default AllComments;