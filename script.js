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
	var itemText = toDoEntryBox.value;
	newToDoItem(itemText, false);
	//Since a new to-do item is never complete, you can 
	// pass false to the completed parameter of the newToDoItem function.
}


function clearCompletedToDoItems(){
	//alert ("The clear button was clicked");
	var completedItems = toDoList.getElementsByClassName("completed");

	while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }

}


function emptyList(){
	//alert ("The empty button was clicked");
	var toDoItems = toDoList.children;
	
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }

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

	//checks if the value for the completed variable that was passed to newToDoItem is true. 
	//If it is, then it will add the class completed to the li element, which will change how it looks on the page.
	if (completed) {
    toDoItem.classList.add("completed");
	}

	toDoList.appendChild(toDoItem);
	//puts toDoItem (the <li> element) inside of toDoList (the <ol> element).

	toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}






