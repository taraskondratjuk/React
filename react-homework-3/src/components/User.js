import React, {Component} from 'react';

class User extends Component {
    render() {

        let {user,choseUser} = this.props

        return (
            <div>
                id : {user.id} name : {user.name} -<button onClick={choseUser.bind(this,user.id)}>Change me</button>
            </div>
        );
    }
}

export default User;