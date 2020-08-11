var character = document.getElementById("character");
var block = document.getElementByID("block");
var game = document.getElementByID("game");

function jump(){
	checkDead()
	if (character.classList != "animate"){
		character.classList.add("animate");
	}
	setTimeout(function(){
		character.classList.remove("animate");
	}, 500);
}

/*var checkDead = setInterval(function(){
	let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	if (blockLeft<20 && blockLeft>-20 && characterTop>=130){
		block.style.animation = "none";
		block.style.display = "none";
		alert("git  gud!!twelve1");*/
function checkDead(){
	let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    	let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    	if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        	block.style.animation = "none";
        	alert("Game Over.");
	}
	setInterval(checkDead(), 10);
}
