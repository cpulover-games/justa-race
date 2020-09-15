/** @type {HTMLCanvasElement} */ // declare type in VSCode (for code completion)
var canvas;
/** @type {CanvasRenderingContext2D} */
var canvasContext;
const FPS = 60;

var blueCar=new Car();
var carList=[blueCar];

// setup script
window.onload = function () {
    canvas = document.getElementById("gameCanvas");
    canvasContext = canvas.getContext("2d");

    loadingScreen();
    if (loadAssets()) {
        initGame();
        setInterval(updateAll, 1000 / FPS); // invoke updateAll() fps times/second
        setupEvents();
    } else {
        console.log("Could not load assets!");
    }
}

function loadingScreen() {
    colorRect(0, 0, canvas.width, canvas.height, "black");
    colorText("Loading assets...", canvas.width / 2 - 40, canvas.height / 2, "white");
}

function initGame() {
    blueCar.init();
}

function updateAll() {
    moveAll();
    drawAll();
    setupCollisions();
}

function drawAll() {
    drawTracks();
    blueCar.draw();
    drawMousePos();
}

function moveAll() {
    blueCar.move();
}