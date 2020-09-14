// key codes
const KEY_LEFT_ARROW = 37;
const KEY_RIGHT_ARROW = 39;
const KEY_UP_ARROW = 38;
const KEY_DOWN_ARROW = 40;

// mouse
var mouseX;
var mouseY;
const TEXT_COLOR = "yellow";

function setupEvents(){
    canvas.addEventListener('mousemove', updateMousePos);
    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);
}

function updateMousePos(event) {
    // to get accurate position in case scrolling
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;

    mouseX = event.clientX - rect.left - root.scrollLeft;
    mouseY = event.clientY - rect.top - root.scrollTop;
}
function drawMousePos(){
    colorText(mouseX + ", " + mouseY, mouseX, mouseY, TEXT_COLOR);
}

function keyPressed(event) {
    event.preventDefault();
    if (event.keyCode == KEY_UP_ARROW) {
        keyHeldGas = true;
    } else if (event.keyCode == KEY_DOWN_ARROW) {
        keyHeldReverse = true;
    } else if (event.keyCode == KEY_LEFT_ARROW) {
        keyTurnLeft = true;
    } else if (event.keyCode == KEY_RIGHT_ARROW) {
        keyTurnRight = true;
    }
}

function keyReleased(event) {
    event.preventDefault();
    if (event.keyCode == KEY_UP_ARROW) {
        keyHeldGas = false;
    } else if (event.keyCode == KEY_DOWN_ARROW) {
        keyHeldReverse = false;
    } else if (event.keyCode == KEY_LEFT_ARROW) {
        keyTurnLeft = false;
    } else if (event.keyCode == KEY_RIGHT_ARROW) {
        keyTurnRight = false;
    }
}
