import makeTodo from "./todo";
import {displayTodo} from "./ul";

export default class Storage{
    saveLocal(todo){
        let todos
        if (localStorage.getItem('todos') === null) {
            todos = []            
        } else {
            todos = JSON.parse(localStorage.getItem('todos'))
        }

        todos.push(todo)
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    getLocal(){
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

    removeLocal(index) { 
        let todos
        if (localStorage.getItem('todos') === null) {
            todos = []            
        } else {
            todos = JSON.parse(localStorage.getItem('todos'))
        }

        for (let i = 0; i < todos.length; i++) {
            const todo = todos[i];
            
        }
    }
}