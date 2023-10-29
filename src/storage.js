import makeTodo from "./todo";
import { displayTodo } from "./ul";


function saveLocal(todo) {
    let todos
    if (localStorage.getItem('todos') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
}

function getLocal(){
    let todos
    if (localStorage.getItem('todos') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    // console.log(todos)
    // todos.forEach((todo, index) => {
    //     // displayTodo(todo)
    //     // console.log(todo.title)
    //     // return {todo, index}
    // });

    // for (let i = 0; i < todos.length; i++) {
    //     const todo = todos[i];
    //     displayTodo(todo)
    // }
    return todos
}

function removeLocal(index) {
    let todos
    if (localStorage.getItem('todos') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    todos.splice(index, 1)
    localStorage.setItem('todos', JSON.stringify(todos))
}

export {
    saveLocal, getLocal, removeLocal
}