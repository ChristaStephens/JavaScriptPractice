
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


//creating objects
var myComputer =
{
operatingSystem: "pc",
screenSize: "15 inches",
purchaseYear: "2016"
};

//combining objects with functions
var christa = {
name: "Christa",
sayName: function() {
console.log(this.name); //.name to print out only the name which is the property
    }
};

//store todos array on an object
var todoList =
{
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function(){
  	console.log('My Todos', this.todos);

  },
  addTodo: function(todo){
    this.todos.push(todo);
    this.displayTodos();
  }
};

//test to see if it works - ctrl+B 
// todoList.displayTodos();
// todoList.addTodo("hey");

//intergrate with new function
// function changeTodo(position, newValue){
// 	todos[position] = newValue;
// 	displayTodos();;
// }