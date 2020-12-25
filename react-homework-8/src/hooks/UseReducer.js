import React, {useReducer} from "react"

export default function UseReducer() {

    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT_STATE":
                return {...state, count: state.count + 1, color: "green"}
            case "DECREMENT_STATE":
                return {...state, count: state.count - 1, color: "blue"}
            case "INCREMENT_X2_STATE":
                return {...state, count: state.count + 2, color: "red"}
            case "DECREMENT_X2_STATE":
                return {...state, count: state.count - 2, color: "black"}
            case "RESET_STATE":
                return {count: 0, color: "pink"}

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        color: "tomato"
    })

    const increment = () => dispatch({type: "INCREMENT_STATE"})
    const decrement = () => dispatch({type: "DECREMENT_STATE"})
    const incrementX2 = () => dispatch({type: "INCREMENT_X2_STATE"})
    const decrementX2 = () => dispatch({type: "DECREMENT_X2_STATE"})
    const reset = () => dispatch({type: "RESET_STATE"})

    return (
        <div style={{color: state.color, textAlign: "center"}}>

            <h1>{state.count}</h1>
            <h2>What do you want?</h2>

            <button onClick={increment}>+1</button>
            <button onClick={incrementX2}>+2</button>

            <button onClick={reset}>reset</button>

            <button onClick={decrement}>-1</button>
            <button onClick={decrementX2}>-2</button>

        </div>
    )

}