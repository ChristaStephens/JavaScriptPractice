var todos = ['item 1', 'item 2', 'item 3', 'item 4'];

function displayTodos(){
console.log("My todos are:", todos);
}

function addTodo(todo){
todos.push(todo);
displayTodos();
}

function changeTodo(position, newValue){
todos[position] = newValue;
displayTodos();
}

function deleteTodo(position){
todos.splice(position, 1);
displayTodos();
}