export function getLocalTodos() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

export function saveLocalTodos(todo) {
  const todos = getLocalTodos();
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

export function removeLocalTodos(todoElement) {
  const todos = getLocalTodos();
  const todoText = todoElement.children[0].innerText;
  const updated = todos.filter((t) => t !== todoText);
  localStorage.setItem("todos", JSON.stringify(updated));
}
