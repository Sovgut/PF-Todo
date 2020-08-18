import React from "react"
import styles from "./ListItem.module.css"

export default function ListItem({ title, done, tabIndex, onEdit, onRemove }) {
  return (
    <div className={styles.root}>
      <div className={styles.group}>
        <span
          className={styles.done}
          tabIndex={tabIndex - 1}
          onKeyPress={() => onEdit(title, !done)}
          onClick={() => onEdit(title, !done)}
        >
          {done ? <span>&#9679;</span> : <span>&#9675;</span>}
        </span>
        <span
          className={styles.text}
          style={{
            textDecoration: done ? "line-through" : "none",
            color: done ? "gray" : "black",
          }}
        >
          {title}
        </span>
        <span
          className={styles.remove}
          tabIndex={tabIndex}
          onKeyPress={onRemove}
          onClick={onRemove}
        >
          &#215;
        </span>
      </div>
    </div>
  )
}
