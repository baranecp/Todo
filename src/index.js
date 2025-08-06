import Todo from "./components/todo";

const task = new Todo({
  title: "test",
  description: "test description",
  dueDate: "2025-08-06",
  priority: "medium",
});

console.log(task);
