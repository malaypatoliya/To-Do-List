import React, { useState } from 'react';

const Addtodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title && !desc) {
            alert("Title and Description cannot be blank !!!")
        }
        else if (!title) {
            alert("Title cannot be blank !!!")
        }
        else if (!desc) {
            alert("Description cannot be blank !!!")
        }
        else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }



    }

    const todoStyle = {
        border: "2px solid #d3d3d3",
        borderRadius: "7px",
        margin: "50px auto",
        padding: "5px 25px 25px 25px"
    }

    return (
        <div className="container" style={todoStyle}>
            <h3 className="text-center my-3">Add To-Do</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">To-Do Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">To-Do Decription</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add to-do</button>
            </form>
        </div>
    )
}

export default Addtodo
