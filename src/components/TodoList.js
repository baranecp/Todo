export default class TodoList {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(id) {
    this.todos.filter((todo) => todo.id !== id);
  }

  getAll() {
    return this.todos;
  }

  getCompleted() {
    return this.todos.filter((todo) => todo.isCompleted);
  }
}
