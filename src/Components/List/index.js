import React from "react"
import styles from "./List.module.css"

import ListItem from "./ListItem"

export default function List({ data, onEditItem, onRemoveItem }) {
  if (data?.length === 0) return null

  return (
    <div className={styles.root}>
      {data.map((item, index) => (
        <ListItem
          key={item.id}
          tabIndex={index + 2}
          title={item.title}
          done={item.done}
          onEdit={(title, done) => onEditItem(item.id, { title, done })}
          onRemove={() => onRemoveItem(item.id)}
        />
      ))}
    </div>
  )
}
