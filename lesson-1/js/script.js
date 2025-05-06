const element = document.querySelector("em");

element.addEventListener("click", updateName);

function updateName(){
	console.log("Function is working");

	let firstName = prompt("what is your name?");

	element.textContent = firstName;

}