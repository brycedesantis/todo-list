import makeTodo from './todo'

let addTodoBtn = document.querySelector('#add-todo')
addTodoBtn.addEventListener('click', () => {
    event.preventDefault()
    console.log(makeTodo())
    console.log('click')
})