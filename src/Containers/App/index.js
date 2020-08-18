import React, { Component } from "react"
import styles from "./App.module.css"
import { addItem, editItem, removeItem, getItems } from "../../Services/List"
import List from "../../Components/List"

class App extends Component {
  state = {
    title: String(),
    list: [],
  }

  componentDidMount() {
    this.setState({ list: getItems() })
  }

  onInputTitleChange = (event) => {
    this.setState({ title: event.target.value })
  }

  onAddItem = (event) => {
    event.preventDefault()

    if (this.state.title.trim()) {
      this.setState(
        { list: addItem({ title: this.state.title.trim() }) },
        () => {
          console.log(styles.input)
          document.querySelector(`.${styles.input}`).value = String()
          this.setState({ title: String() })
        }
      )
    }
  }

  onEditItem = (id, values) => {
    this.setState({
      list: editItem({ id, title: values.title, done: values.done }),
    })
  }

  onRemoveItem = (id) => {
    this.setState({ list: removeItem({ id }) })
  }

  render() {
    const { list, title } = this.state
    const { onAddItem, onEditItem, onRemoveItem, onInputTitleChange } = this
    return (
      <div className={styles.root}>
        <List data={list} onEditItem={onEditItem} onRemoveItem={onRemoveItem} />
        <div className={styles.container}>
          <form onSubmit={onAddItem} className={styles.add}>
            <input
              className={styles.input}
              onChange={onInputTitleChange}
              defaultValue={title}
            />
            <button className={styles.button} type="submit" onClick={onAddItem}>
              &#43;
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
