import { getLocal, removeLocal } from "./storage";
import makeTodo from "./todo";

const ui = (()=> {
    function displayTodo() {
        let todos = getLocal()
    
        const todoDisplay = document.querySelector('.todo-display')
        todoDisplay.innerHTML = ''
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
    }
    
    function deleteTodo(index) {
        removeLocal(index)
        displayTodo()
    }

    return {
        deleteTodo, displayTodo,
    }
    
})()
export {ui}