let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
var audio = new Audio("./congratulations.mp3");
var audio2 = new Audio("./wrong.mp3");


btn1.addEventListener("click", function(){
    btn1.style.backgroundColor = "green";
    btn2.style.backgroundColor = "transparent";
    
    audio.play();
    audio2.pause();
})

btn2.addEventListener("click", function(){
    btn2.style.backgroundColor = "red";
    btn1.style.backgroundColor = "transparent";

    audio2.play();
    audio.pause();
})

























































