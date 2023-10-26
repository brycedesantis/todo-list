export default function makeTodo() {
    let title = document.querySelector('#todo-title').value
    let description = document.querySelector('#todo-description').value
    let dueDate = document.querySelector('#todo-due-date').value
    let priority = document.querySelector('#todo-priority').value

    return{
        title, description, dueDate, priority
    }
}