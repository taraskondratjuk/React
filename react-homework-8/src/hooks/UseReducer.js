import React, {useReducer, useEffect} from "react"

export default function UseReducer() {

    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT":
                return {...state, count: state.count + 1, color: "red"}
            case "INCREMENT_X2":
                return {...state, count: state.count + 2, color: "green"}
            case "RESET":
                return {count: 0, color: "black", effect: null}
            case "DECREMENT":
                return {...state, count: state.count - 1, color: "purple"}
            case "DECREMENT_X2":
                return {...state, count: state.count-2, color: "tomato"}
            case "EFFECT":
                return {...state, effect: "Hello, this is effect)"}

            default:
                return state;
        }
    }


    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        color: "black",
        effect: null,
    })


    useEffect(() => {
        setTimeout(() => {
            dispatch({type: "EFFECT"})
        }, 2000)

    }, [state.count===10])

    const increment = () => dispatch({type: "INCREMENT"})
    const increment_x2 = () => dispatch({type: "INCREMENT_X2"})
    const reset = () => dispatch({type: "RESET"})
    const decrement = () => dispatch({type: "DECREMENT"})
    const decrement_x2 = () => dispatch({type: "DECREMENT_X2"})


    return (
        <div style={{color: state.color, textAlign: "center", fontFamily: "cursive", fontSize: "50px"}}>

            <h1> Counter : {state.count}</h1>
            <h3>What do you want?</h3>

            {
                state.effect && <h2>{state.effect}</h2>
            }

            <button onClick={increment}>+1</button>
            <button onClick={increment_x2}>+2</button>

            <button onClick={reset}>reset</button>

            <button onClick={decrement}>-1</button>
            <button onClick={decrement_x2}>-2</button>

        </div>


    )
}

