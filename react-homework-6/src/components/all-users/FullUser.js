import React, {Component} from 'react';
import AllServices from "../../services/AllServices";

class FullUser extends Component {
    services = new AllServices()

    state = {allUser: null}


    async componentDidMount() {
        let {userId} = this.props
        let fullUser = await this.services.getFullUser(userId)
        this.setState({allUser: fullUser})
    }

    render() {

        let {allUser} = this.state

        return (
            <div>
                {allUser &&
                <div>
                    <strong>id</strong> : {allUser.id} <strong>name</strong> : {allUser.name} <strong>email </strong>: {allUser.email} <strong>phone</strong> : {allUser.phone}  <strong>userName</strong> : {allUser.username}
                </div>
                }
            </div>
        );
    }
}

export default FullUser;