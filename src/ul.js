import Storage from "./storage";
import makeTodo from "./todo";

function displayTodo() {
    let todos = new Storage().getLocal()

    const todoDisplay = document.querySelector('.todo-display')
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        
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
    // new Storage().saveLocal(todo)
    // console.log(todos)
}

function deleteTodo() {
    let todos = JSON.parse(localStorage.getItem('todos'))
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        console.log(i)
    }
}

export {displayTodo, deleteTodo}