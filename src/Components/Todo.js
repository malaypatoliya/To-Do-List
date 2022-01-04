import React from 'react'
import Todoitem from "./Todoitem";


const Todo = (props) => {

    const myStyle = {
        minHeight : "80vh",
        border: "2px solid #d3d3d3",
        borderRadius: "7px",
        margin: "80px auto",
        padding: "15px 25px 25px 25px"

    }
    return (
        <div className="container mb-3" style={myStyle}>
            <h3 className="text-center ">To-Do list</h3>

            
            {props.todos.length === 0 ? "No todos to dispay":
            props.todos.map((todo)=>{
                return <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            })
            }
            
        </div>
    )
}

export default Todo
