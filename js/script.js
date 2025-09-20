
let todos = [];

function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const todoDate = document.getElementById("todo-date");
    if (validateInput(todoInput.value, todoDate.value)) {
        // menambah todo ke array
        const formTodo = { task: todoInput.value, date: todoDate.value };
        todos.push(formTodo);
        displayTodos();

        // display nilai todo
        todoInput.value = "";
        todoDate.value = "";
    }


}

function displayTodos() {

    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = "";

    todos.forEach((todo, _) => {

        todoList.innerHTML += `
        <li class="mb-2">${todo.task} - <span 
            class="text-gray-500">${todo.date}</span></li>
        `;
    });
}

function removeTodo() { }

function filterTodos() { }

function validateInput(todo, date) {
    // alert popup jika input kosong
    if (todo === "" || date === "") {
        alert("input tidak boleh kosong");
        return false;
    }
    return true;
}