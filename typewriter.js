"use strict";
console.log("hello world");

// variables
const h1 = document.querySelector("h1#typewriter").textContent;
const inputtext = h1.trim();
const NumberOfIterations = inputtext.length;
const arr = ["a", "e", "i", "o", "u"]
let letterAudio =  document.querySelector("#typekey1"); 
let spaceAudio = document.querySelector("#typespace");
let letterAudio2 = document.querySelector("#typekey2"); 

let i = -1; //because we want to start with the T

initLoop();

// Init function to call the loop
function initLoop() {
    console.log("initLoop");
    loop();
}

function loop(){
    i++; 
    audio(i);
    if (i <= NumberOfIterations){
        inputtext.slice(0,i);
        // setTimeout(loop, Math.random() * 1000);
        setTimeout(loop, 300);
        document.querySelector("h1#typewriter").textContent = inputtext.slice(0,i);
    }
}

function audio(x){
    if (inputtext.charAt(x) === " "){
        spaceAudio.play();
    } if else () {
    } else {
        letterAudio.play();
    }
} 



