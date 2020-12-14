import React, {Component} from 'react';
import AllServices from "../../services/AllServices";

class FullComment extends Component {
    services = new AllServices()

    state = {fullComment: []}

    async componentDidMount() {
        let {id} = this.props
        let fullComment = await this.services.getFullComment(id)
        this.setState({fullComment})
    }


    render() {

        let {fullComment} = this.state

        console.log(fullComment)

        return (
            <div>
                {
                    fullComment &&
                    <div>
                        <strong>id</strong> : {fullComment.id} <strong>name</strong> : {fullComment.name} <strong>email</strong>
                        : {fullComment.email} <strong>body</strong> : {fullComment.body}
                    </div>
                }
            </div>
        );
    }
}

export default FullComment;