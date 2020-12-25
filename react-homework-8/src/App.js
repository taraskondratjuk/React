import React, {Component} from 'react';
import UseState from "./hooks/UseState";
import UseEffect from "./hooks/UseEffect";
import UseReducer from "./hooks/UseReducer";




class App extends Component {


    render() {
        return (

            <div>
                {/*<UseState/>*/}
                {/*<UseEffect/>*/}
                <UseReducer/>
            </div>

        );
    }
}


export default App;