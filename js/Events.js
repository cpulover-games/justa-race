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
    document.addEventListener('keydown', keyPressedBlueCar);
    document.addEventListener('keyup', keyReleasedBlueCar);
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

function keyPressedBlueCar(event) {
    event.preventDefault();
    if (event.keyCode == KEY_UP_ARROW) {
        blueCar.keyHeldGas = true;
    } else if (event.keyCode == KEY_DOWN_ARROW) {
        blueCar.keyHeldReverse = true;
    } else if (event.keyCode == KEY_LEFT_ARROW) {
        blueCar.keyTurnLeft = true;
    } else if (event.keyCode == KEY_RIGHT_ARROW) {
        blueCar.keyTurnRight = true;
    }
}

function keyReleasedBlueCar(event) {
    event.preventDefault();
    if (event.keyCode == KEY_UP_ARROW) {
        blueCar.keyHeldGas = false;
    } else if (event.keyCode == KEY_DOWN_ARROW) {
        blueCar.keyHeldReverse = false;
    } else if (event.keyCode == KEY_LEFT_ARROW) {
        blueCar.keyTurnLeft = false;
    } else if (event.keyCode == KEY_RIGHT_ARROW) {
        blueCar.keyTurnRight = false;
    }
}
