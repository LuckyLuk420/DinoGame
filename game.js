var character = document.getElementById("character");
var block = document.getElementById("block");
var score = 0
var check = false

function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<40 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        alert("u suc\ngit gud!!!1twelve");
        score = 0
        check = false
        block.style.animation = "block 1s infinite linear";
    }else if(blockLeft<=0 && check==false){
        score++
        check = true
        document.getElementById("scoreSpan").innerHTML = score;
    }
    if(blockLeft >= 400){check = false}
}, 10);
