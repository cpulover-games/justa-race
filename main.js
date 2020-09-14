/** @type {HTMLCanvasElement} */ // declare type in VSCode (for code completion)
var canvas;
/** @type {CanvasRenderingContext2D} */
var canvasContext;
const FPS = 30;
const BG_COLOR = "black";

// setup script
window.onload = function () {
    canvas = document.getElementById("gameCanvas");
    canvasContext = canvas.getContext("2d");
    
    loadElements();
    initGame();
    setInterval(updateAll, 1000 / FPS); // invoke updateAll() fps times/second
    setupEvents();
}

function loadElements() {
    loadCarImage();
}

function initGame() {
    initCar();
}

function updateAll() {
    moveAll();
    drawAll();
    setupCollisions();
}

function drawAll() {
    clearScreen();
    drawTracks();
    drawCar();
    drawMousePos();
}

function clearScreen(){
 // big frame (draw every time to clear screen)
 colorRect(0, 0, canvas.width, canvas.height, BG_COLOR);
}

function moveAll() {
   moveCar();
}