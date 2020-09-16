// key codes
const KEY_LEFT_ARROW = 37;
const KEY_RIGHT_ARROW = 39;
const KEY_UP_ARROW = 38;
const KEY_DOWN_ARROW = 40;
const KEY_A = 65;
const KEY_W = 87;
const KEY_D = 68;
const KEY_S = 83;

// mouse
var mouseX;
var mouseY;
const TEXT_COLOR = "yellow";

function setupEvents() {
    blueCar.setupInput(KEY_UP_ARROW, KEY_DOWN_ARROW, KEY_LEFT_ARROW, KEY_RIGHT_ARROW);
    greenCar.setupInput(KEY_W, KEY_S, KEY_A, KEY_D);
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

function drawMousePos() {
    colorText(mouseX + ", " + mouseY, mouseX, mouseY, TEXT_COLOR);
}

// @param isPressed true for keydown events, false for keyup events
function keySet(event, isPressed, car) {
    event.preventDefault();
    if (event.keyCode == car.keyGas) {
        car.holdingGas = isPressed;
    } else if (event.keyCode == car.keyReverse) {
        car.holdingReverse = isPressed;
    } else if (event.keyCode == car.keyLeft) {
        car.turningLeft = isPressed;
    } else if (event.keyCode == car.keyRight) {
        car.turningRight = isPressed;
    }
}

function keyPressed(event) {
    for (var car of cars) {
        keySet(event, true, car);
    }
}

function keyReleased(event) {
    for (var car of cars) {
        keySet(event, false, car);
    }
}