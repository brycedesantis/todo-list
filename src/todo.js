export default function makeTodo() {
    let title = document.querySelector('#form-title').value
    let description = document.querySelector('#form-description').value
    let dueDate = document.querySelector('#form-due-date').value
    let priority = document.querySelector('#form-priority').value

    return{
        title, description, dueDate, priority
    }
}