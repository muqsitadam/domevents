var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

//Adding delete button to list item
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"))
	li.appendChild(deleteButton)

//Delete list item when delete button is clicked
	deleteButton.onclick=function(event){
		var target=event.target;
		target.parentNode.remove();
	}

//Toggling the class "done" to strikethrough done items
	ul.onclick=function(event){
		var target=event.target;
		target.classList.toggle("done");
	}
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


