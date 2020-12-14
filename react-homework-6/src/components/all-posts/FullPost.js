import React, {Component} from 'react';
import AllServices from "../../services/AllServices";

class FullPost extends Component {
    services = new AllServices()

    state = {fullPost: []}



    async componentDidMount() {
        let {id} = this.props
        let fullPost = await this.services.getFullPost(id)
        this.setState({fullPost})

    }


    render() {
        let {fullPost} = this.state


        console.log(fullPost)

        return (
            <div>
                <strong>id</strong> : {fullPost.id} <strong>title</strong> : {fullPost.title} <strong>body</strong> : {fullPost.body}
            </div>
        );
    }
}

export default FullPost;