import makeTodo from "./todo";

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
}