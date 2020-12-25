import React, {useState} from "react"

export default function UseState() {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("Red")

    const increment = () => {
        setCount(count => count + 1)
        setColor(() => "Blue")
    }

    const decrement = () => {
        setCount(count => count - 1)
        setColor(() => "Green")
    }

    const resetState = () => {
        setCount(() => 0)
        setColor(() => "Red")
    }

    return (
        <div style={{textAlign: "center", color: color}}>
            <h1>Count : {count}</h1>
            <h2>{color}</h2>

            <button onClick={() => decrement()}>decrement</button>
            <button onClick={() => resetState()}>reset</button>
            <button onClick={() => increment()}>increment</button>

        </div>
    )
}