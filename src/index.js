import displayTodo from "./ul"

let addTodoBtn = document.querySelector('#add-todo')
addTodoBtn.addEventListener('click', () => {
    event.preventDefault()
    displayTodo()
})