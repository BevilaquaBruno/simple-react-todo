import React from "react"
import styles from "./css/TodoItem.module.css"


function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        onChange={()=> props.handleChangeProps(props.todo.id)}
        checked={props.todo.completed} />
      <button onClick={() => props.deleteTodoProps(props.todo.id)}>Delete</button>
      <span style={props.todo.completed ? completedStyle : null}>
        {props.todo.title}
      </span>
    </li>
  )
}

export default TodoItem