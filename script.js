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


ul.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
}


// var doneClass = document.getElementsByTagName('li')
// console.log(doneClass);
// var listItems = [...doneClass]
// console.log(listItems);

var body = document.querySelector('body');

 body.on= function(event) {
if( event.target.getElementsByTagName('li') ) {

    // add delete button
    const buttonElem = document.createElement('button');
    buttonElem.innerText = 'delete';
    buttonElem.onclick = function() { // remove list item here
        this.parentElement.remove()
    };
    event.target.appendChild(buttonElem);
} else {
    // remove the delete button
    event.target.getElementByTagName('button').remove();
}}

