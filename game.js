var character = document.getElementById("character");
var block = document.getElementByID("block");
var game = document.getElementByID("game");

function jump(){
	character.classList.add("animate");
	setTimeout(function(){
		character.classList.remove("animate");
	}, 500);
