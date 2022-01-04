import React from 'react'

const Todoitem = ({ todo, onDelete }) => {

    let itemstyle = {
        padding: "10px 5px",
        borderBottom: "2px solid #d3d3d3",
        margin: "10px 0px",
    }

    return (
        <div style={itemstyle}>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>
        </div>
    )
}

export default Todoitem
