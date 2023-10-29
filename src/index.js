import { ui } from "./ul"
import Storage from "./storage"
import makeTodo from "./todo"

ui.displayTodo()
// localStorage.clear()
let addTodoBtn = document.querySelector('#add-todo')
addTodoBtn.addEventListener('click', () => {
    event.preventDefault()
    let title = document.querySelector('#form-title')
    let dueDate = document.querySelector('#form-due-date')
    let priority = document.querySelector('#form-priority')

    if (title.value === '' || dueDate.value === '' || priority.value === '') return;
    makeTodo()
    // console.log(makeTodo())
    // displayTodo()
})



const deleteTodoBtns = document.querySelectorAll('#delete-button')
deleteTodoBtns.forEach((button, index) => {
    button.addEventListener('click', () => {
        ui.deleteTodo(index)
        
    })
})