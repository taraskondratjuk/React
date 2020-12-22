import React, {Component} from 'react';
import "./App.css"

class App extends Component {

    myInput = React.createRef();

    state = {
        users: null,
        idInput: '',
        button: false,
        userId: null,

    }

    onSubmit = (event) => {
        event.preventDefault()
    }

    onInputValue = () => {
        this.setState({idInput: this.myInput.current.value})

        if (this.myInput.current.value < 11 && this.myInput.current.value > 0) {
            this.setState({button: false})
        } else {
            this.setState({button: true})
        }

    }


    async componentDidMount() {
        return await fetch("https://jsonplaceholder.typicode.com/users")
            .then(users => users.json())
            .then(users => this.setState({users}))
    }

    chosenUser = () => {
        this.setState({userId: this.myInput.current.value})
    }

    render() {

        let {users, userId, button} = this.state

        return (

            <div>

                <div className={"form"}>
                    <div className={"description"}>Щоб знайти користувача введіть число від 1 до 9</div>

                    <form onSubmit={this.onSubmit}>
                        <input ref={this.myInput} type={"number"} onInput={this.onInputValue}
                               value={this.state.idInput}/>

                        <button onClick={this.chosenUser} disabled={button}>Find</button>
                    </form>

                </div>

                <hr/>

                <div className={"user"}>
                    {
                        userId && <div>
                            <strong>id</strong> :{users[userId - 1].id}, <strong>name</strong> : {users[userId - 1].name}, <strong> phone</strong> :{users[userId - 1].phone}, <strong> email</strong> : {users[userId - 1].email}, <strong> website</strong> : {users[userId - 1].website}
                        </div>
                    }
                </div>

            </div>

        );
    }
}

export default App;
