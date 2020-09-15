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

    if (loadAssets()) {
        initGame();
        setInterval(updateAll, 1000 / FPS); // invoke updateAll() fps times/second
        setupEvents();
    } else {
        console.log("Could not load assets!");
    }
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
    drawTracks();
    drawCar();
    drawMousePos();
}

function moveAll() {
    moveCar();
}