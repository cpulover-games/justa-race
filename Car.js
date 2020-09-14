var carPic = document.createElement("img");
var carPicLoaded = false;
var carX;
var carY;
var carSpeed;
var carAngle;

// car control
var keyHeldGas = false;
var keyHeldReverse = false;
var keyTurnLeft = false;
var keyTurnRight = false;
const CAR_FRICTION = 0.98; // reduce speed over time
const CAR_DRIVE_POWER = 0.3; // gas power
const CAR_REVERSE_POWER = 0.3; // go backward
const CAR_TURN_RATE = 0.2; // turn left and right

function loadCarImage(){    
    carPic.src = "player1car.png";
    carPic.onload = function () {
        carPicLoaded = true;
    }
}

function drawCar(){
      if (carPicLoaded) {
        drawBitmapCenteredWithRotation(carPic, carX, carY, carAngle);
    }
}

function initCar() {
    carSpeed = 0;
    carAngle = -Math.PI / 2;
    for (currentRow = 0; currentRow < TRACK_ROWS; currentRow++) {
        for (currentCol = 0; currentCol < TRACK_COLS; currentCol++) {
            var indexArray = colRowToIndexArray(currentCol, currentRow);
            if (trackGrid[indexArray] == TRACK_CAR) {
                carX = currentCol * TRACK_WIDTH + TRACK_WIDTH / 2;
                carY = currentRow * TRACK_HEIGHT + TRACK_HEIGHT / 2;
            }
        }
    }
}

function moveCar(){
     carSpeed *= CAR_FRICTION;
     if (keyHeldGas) {
         carSpeed += CAR_DRIVE_POWER;
     }
     if (keyHeldReverse) {
         carSpeed -= CAR_REVERSE_POWER;
     }
     if (keyTurnLeft) {
         carAngle -= CAR_TURN_RATE;
     }
     if (keyTurnRight) {
         carAngle += CAR_TURN_RATE;
     }
     carX += Math.cos(carAngle) * carSpeed;
     carY += Math.sin(carAngle) * carSpeed;
}