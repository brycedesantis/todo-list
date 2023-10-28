import { displayTodo, deleteTodo } from "./ul"
import Storage from "./storage"
import makeTodo from "./todo"

displayTodo()
// localStorage.clear()
let addTodoBtn = document.querySelector('#add-todo')
addTodoBtn.addEventListener('click', () => {
    // event.preventDefault()
    let title = document.querySelector('#form-title')
    let dueDate = document.querySelector('#form-due-date')
    let priority = document.querySelector('#form-priority')

    if (title.value === '' || dueDate.value === '' || priority.value === '') return;
    makeTodo()
    // console.log(makeTodo())
    displayTodo()
})

let todos = [...new Storage().getLocal()]
for (let i = 0; i < todos.length; i++) {
//     const deleteTodoBtn = document.querySelector('#delete-button')
//     deleteTodoBtn.addEventListener('click', () => {
//         todos.splice(i, 1)
//         displayTodo()
//     })
    const todo = todos[i]
    console.log(todo)
}