import axios from "axios";
import React, { useState } from "react";

function TodoItem({ todo }) {
    const [newText, setNewText] = useState("");

    const deleteTodo = (id) => {
        axios.delete(`http://mazen-back-tools-project.apps.eu45.prod.nextcle.com/deleteTodo/${id}`);
    };
    const updateTodo = (id) => {
        axios.put(`http://mazen-back-tools-project.apps.eu45.prod.nextcle.com/updateTodo/${id}`, {
            id: id,
            newText: newText,
        });
    };
    return ( <
        div className = "todoCards" > {
            todo.map((t) => {
                return ( <
                    div key = { t._id }
                    className = "todoItem" >
                    <
                    h2 > { t.desc } </h2> { /* <p>{ t._id}</p> */ } <
                    input type = "text"
                    placeholder = "update todo from here"
                    onChange = {
                        (e) => {
                            setNewText(e.target.value);
                        }
                    }
                    /> <button onClick = {
                        () => {
                            updateTodo(t._id);
                        }
                    }
                    className = "todobtn"
                    style = {
                        { width: "80px" } } >
                    update </button> <
                    button className = "deleteBtn"
                    onClick = {
                        () => {
                            deleteTodo(t._id);
                        }
                    } >
                    X </button> </div>
                );
            })
        } </div>
    );
}

export default TodoItem;