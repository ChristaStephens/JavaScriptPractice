
//creating an array/list
var todos = ['item 1', 'item 2', 'item 3', 'item 4'];

//creating a way to display list
function displayTodos(){
console.log("My todos are:", todos);
}

//creating a way to add to list
//need to provide a value for the todo parameter
function addTodo(todo){
todos.push(todo);
displayTodos();
}


//creating a way to change items in list
function changeTodo(position, newValue){
todos[position] = newValue;
displayTodos();
}


//creating a way to delete items in the list
function deleteTodo(position){
todos.splice(position, 1);
displayTodos();
}