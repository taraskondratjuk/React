import React, {useState, useEffect} from "react"


export default function UseEffect() {
    const [type, setType] = useState("users")
    const [color, setColor] = useState("Red")
    const [items, setItem] = useState([])


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/" + type)
            .then(items => items.json())
            .then(items => setItem(items))
    }, [type])


    function getUsers() {
        setType(() => "users")
        setColor(() => "Blue")
    }

    function getPosts() {
        setType(() => "posts")
        setColor(() => "Green")
    }

    function getComments() {
        setType(() => "comments")
        setColor(() => "Tomato")
    }

    return (
        <div style={{textAlign: "center", color: color}}>
            <h1>{type}</h1>
            <h2>{color}</h2>
            <button onClick={getUsers}>users</button>
            <button onClick={getPosts}>posts</button>
            <button onClick={getComments}>comments</button>

            {items.map(item => <div>id : {item.id}  name  :  {item.name}</div>)}

        </div>
    )
}











