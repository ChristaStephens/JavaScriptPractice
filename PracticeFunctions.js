
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
  todos: [],
  displayTodos: function(){
  	//don't need to print objects anymore becuase we are using loops
  	//so we can take out this.todo

  	if(this.todos.length===0){
  		console.log('Your todo list is empty friend!')

  	} else{
  		console.log('My Todos:');
  		for( var i =0; i< this.todos.length; i++){
  			console.log(this.todos[i].todoText);
  		}
  	}


  	console.log('My Todos:');
  	for (var i =0; i< this.todos.length;i++){
  		console.log(this.todos[i].todoText);
  	}

  	//if there are no todos we want to console that list is empty
  	//example if this.todos.length is equal to 0
  	//use === 0 - more accurate
  	//else print todos as normal
  	
  	

  },
  addTodo: function(todoText){
    this.todos.push({
    	todoText: todoText, 
    	//the first is the name of the property, the second todo text is refering to param
    	completed: false
    	}
    );
    this.displayTodos();
  },
  changeTodo: function(position, todoText){
  	this.todos[position].todoText = todoText;
  	this.displayTodos();
  },
  deleteTodo: function(position){
  	this.todos.splice(position, 1);
  	this.displayTodos();
  },
  toggleCompleted: function(position){
  	//show index position/ access exact position, that's why we're using brackets
  	var todo = this.todos[position];
  	//if todo completed is true, this line will flip it to false
  	todo.completed = !todo.completed;
  	//grabbing the bool value and changing it using "!"
  	//when grabbing the todo, put in the correct postion of index.

  	this.displayTodos();
  }
};

//you can console log i because it's a variable
//use <= to include 3, also we are using this to count up
for (var i = 0; i<=3; i++){
console.log(i+' hey gal');
}
//.length will tell you how many items in an array and prints all items in array
//for example if we increase the size of the array we want the loop to increase as well.
var testArray = ['item 1', 'item 2', 'item 3'];
for (var i= 0; i< testArray.length; i++){
	console.log(testArray[i]);
}

//test to see if it works - ctrl+B 
// todoList.displayTodos();
// todoList.addTodo("first try");
// todoList.changeTodo(0, 'second');
// todoList.changeTodo(1, 'two');
// todoList.deleteTodo(3, 1);
// todoList.addTodo('bool testing');
// todoList.toggleCompleted(0);

