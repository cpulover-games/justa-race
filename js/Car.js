const CAR_FRICTION = 0.95; // reduce speed over time
const CAR_DRIVE_POWER = 0.2; // gas power
const CAR_REVERSE_POWER = 0.2; // go backward
const CAR_TURN_RATE = 0.05; // turn left and right
const MIN_SPEED_TO_TURN = 0.4; // prevent turning while car not moving

function Car() {
    var x;
    var y;
    var speed;
    var angle;

    // car control
    var keyHeldGas = false;
    var keyHeldReverse = false;
    var keyTurnLeft = false;
    var keyTurnRight = false;

    this.draw = function () {
        drawBitmapCenteredWithRotation(carPic, this.x, this.y, this.angle);
    }

    this.init = function () {
        this.speed = 0;
        this.angle = -Math.PI / 2;
        for (currentRow = 0; currentRow < TRACK_ROWS; currentRow++) {
            for (currentCol = 0; currentCol < TRACK_COLS; currentCol++) {
                var indexArray = colRowToIndexArray(currentCol, currentRow);
                if (trackGrid[indexArray] == TRACK_PLAYER_START) {
                    this.x = currentCol * TRACK_WIDTH + TRACK_WIDTH / 2;
                    this.y = currentRow * TRACK_HEIGHT + TRACK_HEIGHT / 2;
                }
            }
        }
    }

    this.move = function () {
        this.speed *= CAR_FRICTION;
        if (this.keyHeldGas) {
            this.speed += CAR_DRIVE_POWER;
        }
        if (this.keyHeldReverse) {
            this.speed -= CAR_REVERSE_POWER;
        }
        if (Math.abs(this.speed) > MIN_SPEED_TO_TURN) {
            if (this.keyTurnLeft) {
                this.angle -= CAR_TURN_RATE;
            }
            if (this.keyTurnRight) {
                this.angle += CAR_TURN_RATE;
            }
        }
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
    }
}