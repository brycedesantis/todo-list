import Storage from "./storage"

class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }
}

export default function makeTodo() {
    let title = document.querySelector('#form-title').value
    let description = document.querySelector('#form-description').value
    let dueDate = document.querySelector('#form-due-date').value
    let priority = document.querySelector('#form-priority').value

    let todo = new Todo(title, description, dueDate, priority)
    return new Storage().saveLocal(todo)
    
}