
"use strict";

let playg = new Playground();

let kiss1 = document.querySelector("#kiss1")
kiss1.addEventListener("click", function (event) {
  playg.action("kiss");
});

let hug1 = document.querySelector("#hug1")
hug1.addEventListener("click", function (event) {
  playg.action("hug");
});

let insult1 = document.querySelector("#insult1")
insult1.addEventListener("click", function (event) {
    playg.action("insult");
});

let threaten1 = document.querySelector("#threaten1")
threaten1.addEventListener("click", function (event) {
  playg.action("threaten");
});

let bomb1 = document.querySelector("#bomb1")
bomb1.addEventListener("click", function(event){
    playg.action("bomb");
});

