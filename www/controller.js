
"use strict";

let playg = new Playground();


let kim = document.querySelector("#selectkim");
kim.addEventListener("click", function(event) {
  let launch = document.querySelector("#launch")
  launch.style.display = 'none';  
  playg.setPlayer1();
 
});

let donald = document.querySelector("#selectdonald");
donald.addEventListener("click", function(event) {
  let launch = document.querySelector("#launch");
  launch.style.display = 'none';  
  playg.setPlayer2();
});

let kiss1 = document.querySelector("#kiss1")
kiss1.addEventListener("click", function (event) {
  playg.action("kiss");
  prog();
});

let hug1 = document.querySelector("#hug1")
hug1.addEventListener("click", function (event) {
  playg.action("hug");
  prog();
});

let insult1 = document.querySelector("#insult1")
insult1.addEventListener("click", function (event) {
    playg.action("insult");
    prog();
});

let threaten1 = document.querySelector("#threaten1")
threaten1.addEventListener("click", function (event) {
  playg.action("threaten");
  prog();
});

let bomb1 = document.querySelector("#bomb1")
bomb1.addEventListener("click", function(event){
    playg.action("bomb");
    prog();
});



function prog(){
  let prog = document.querySelector('#prog');
  let peace = playg.peace;
  prog.value = peace;
  return prog.innerHTML = prog.value;
} 
