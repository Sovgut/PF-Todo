const model = {
  attach: (items) => localStorage.setItem("todo_list", JSON.stringify(items)),
  get: () =>
    localStorage.getItem("todo_list")
      ? JSON.parse(localStorage.getItem("todo_list"))
      : [],
}

export function addItem({ title }) {
  const list = model.get()
  const id = list.reduce((acc, curr) => (curr.id > acc ? curr.id : acc), 0)

  list.push({ id: id + 1, title, done: false })
  model.attach(list)
  return list
}

export function removeItem({ id }) {
  const list = model.get().filter((item) => item.id !== id)

  model.attach(list)
  return list
}

export function editItem({ id, title, done }) {
  const list = model.get()
  const index = list.findIndex((item) => item.id === id)

  if (index < 0) return list
  list[index] = { ...list[index], title, done }
  model.attach(list)
  return list
}

export function getItems() {
  return model.get()
}
