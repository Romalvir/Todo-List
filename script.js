//We grab the Add,Clear,Empty & Save buttons
var addButton = document.getElementById("add-button");
var clearButton = document.getElementById("clear-completed-button");
var emptyButton = document.getElementById("empty-button");
var saveButton = document.getElementById("save-button");
//Grab on to the input box
var toDoEntryBox = document.getElementById("todo-entry-box");
//Grab on to the list element in the HTML
var toDoList = document.getElementById("todo-list");


//We need to listen for a click, add the event listener to each
addButton.addEventListener("click", addToDoItem)
clearButton.addEventListener("click", clearCompletedToDoItems)
emptyButton.addEventListener("click", emptyList)
saveButton.addEventListener("click", saveList)

//Functions for the Event Listeners
function addToDoItem(){
	//alert ("The Add button was clicked");
}


function clearCompletedToDoItems(){
	//alert ("The clear button was clicked");
}


function emptyList(){
	//alert ("The empty button was clicked");
}



function saveList(){
	//alert ("The save button was clicked");
}

function newToDoItem (itemText, completed){
	//this has to do 2 things
	//what is the text of the item? .value
	//should the item be marked as completed? (change class)	

	//create the Li element
	var toDoItem = document.createElement("li");
	//we have to create a text node,it is a container of text to put in HTML
	var toDoText = document.createTextNode("itemText");
	//Append to HTML
	toDoItem.appendChild(toDoText);

	// we add an if statement. if the 


}