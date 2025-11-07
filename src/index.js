import "./style.css";
import { addTodo, deleteTodo, filterTodo, getTodos } from "./todos";

//Select DOM
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", (e) => addTodo(e, todoInput, todoList));
todoList.addEventListener("click", (e) => deleteTodo(e, todoList));
filterOption.addEventListener("click", (e) => filterTodo(e, todoList));
