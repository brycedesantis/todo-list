import makeTodo from "./todo";

export default function displayTodo() {
    let todo = makeTodo()
    
    const todoDisplay = document.querySelector('.todo-display')
    //create div to hold all todo elements
    const todoDiv = document.createElement('div')
    todoDiv.className = 'todo'
    todoDiv.classList.add(todo.title)

    //create h3 for title, p elements for description, due date and priority level, create delete button
    todoDiv.innerHTML = `
        <h3 id='todo-title'>${todo.title}</h3>
        <p id='todo-description'>${todo.description}</p>
        <p id='todo-due-date'>${todo.dueDate}</p>
        <p id='todo-priority'>${todo.priority}</p>
        <button id='delete-button'>x</button>
    `

    todoDisplay.appendChild(todoDiv)
}